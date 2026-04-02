/**
 * @description       : 
 * @author            : Venkatesh M
 * @group             : 
 * @last modified on  : 03-31-2026
 * @last modified by  : Venkatesh M
**/
public with sharing class ProjectTriggerHandler {
    public static void handleAfter(List<Project__c> newList, Map<Id, Project__c> oldMap) {

        Map<Id, Set<String>> projectToTechs = new Map<Id, Set<String>>();
        Map<Id, Set<String>> projectToRemovedTechs = new Map<Id, Set<String>>();

        for (Project__c p : newList) {
            Set<String> newSet = parsePicklistValues(p.Tech_Stack__c);

            if (oldMap == null || !oldMap.containsKey(p.Id)) {
                if (!newSet.isEmpty()) projectToTechs.put(p.Id, newSet);
            } else {
                Project__c oldP = oldMap.get(p.Id);
                Set<String> oldSet = parsePicklistValues(oldP.Tech_Stack__c);
                Set<String> removed = new Set<String>();
                removed.addAll(oldSet);
                removed.removeAll(newSet);
                if (!removed.isEmpty()) projectToRemovedTechs.put(p.Id, removed);
                if (!newSet.isEmpty()) {
                    if (!oldSet.equals(newSet)) projectToTechs.put(p.Id, newSet);
                }
            }
        }

        if (projectToTechs.isEmpty() && projectToRemovedTechs.isEmpty()) return;

        // Aggregate all tech names from additions and removals so we can resolve Skill__c records
        Set<String> allTechNames = new Set<String>();
        for (Set<String> s : projectToTechs.values()) allTechNames.addAll(s);
        for (Set<String> s : projectToRemovedTechs.values()) allTechNames.addAll(s);

        // Query existing Skill__c by Name
        Map<String, Skill__c> nameToSkill = new Map<String, Skill__c>();
        if (!allTechNames.isEmpty()) {
            for (Skill__c sk : [SELECT Id, Name FROM Skill__c WHERE Name IN :allTechNames]) {
                nameToSkill.put(sk.Name, sk);
            }
        }

        // Create missing Skill__c records (for any tech name that doesn't exist yet)
        List<Skill__c> skillsToInsert = new List<Skill__c>();
        for (String techName : allTechNames) {
            if (!nameToSkill.containsKey(techName)) {
                skillsToInsert.add(new Skill__c(Name = techName));
            }
        }
        if (!skillsToInsert.isEmpty()) {
            insert skillsToInsert;
            for (Skill__c s : skillsToInsert) nameToSkill.put(s.Name, s);
        }

        // Map removed tech names to Skill Ids and collect all removed skill ids
        Set<Id> removedSkillIds = new Set<Id>();
        Map<Id, Set<Id>> projectToRemovedSkillIds = new Map<Id, Set<Id>>();
        for (Id pid : projectToRemovedTechs.keySet()) {
            Set<Id> ids = new Set<Id>();
            for (String tech : projectToRemovedTechs.get(pid)) {
                if (nameToSkill.containsKey(tech)) {
                    ids.add(nameToSkill.get(tech).Id);
                    removedSkillIds.add(nameToSkill.get(tech).Id);
                }
            }
            if (!ids.isEmpty()) projectToRemovedSkillIds.put(pid, ids);
        }

        // Build set of skill Ids for all tech names (after ensuring skills exist)
        Set<Id> skillIds = new Set<Id>();
        for (Skill__c s : nameToSkill.values()) skillIds.add(s.Id);

        // Query existing Project_Skill__c junctions to avoid duplicates (after deletions)
        Map<String, Project_Skill__c> existingMap = new Map<String, Project_Skill__c>();
        if (!projectIds.isEmpty() && !skillIds.isEmpty()) {
            for (Project_Skill__c ps : [SELECT Id, Project__c, Skill__c FROM Project_Skill__c WHERE Project__c IN :projectIds AND Skill__c IN :skillIds]) {
                existingMap.put(ps.Project__c + ':' + ps.Skill__c, ps);
            }
        }

        // Prepare junction records to insert
        List<Project_Skill__c> psToInsert = new List<Project_Skill__c>();
        for (Id pid : projectToTechs.keySet()) {
            for (String tech : projectToTechs.get(pid)) {
                if (!nameToSkill.containsKey(tech)) continue;
                Id skid = nameToSkill.get(tech).Id;
                String key = pid + ':' + skid;
                if (!existingMap.containsKey(key)) {
                    psToInsert.add(new Project_Skill__c(Project__c = pid, Skill__c = skid));
                    existingMap.put(key, null);
                }
            }
        }

        if (!psToInsert.isEmpty()) insert psToInsert;
    }

    // Helper: parse a multi-select picklist or comma/semicolon separated string into a normalized set
    private static Set<String> parsePicklistValues(String raw) {
        Set<String> out = new Set<String>();
        if (String.isBlank(raw)) return out;
        for (String part : raw.split('[,;]')) {
            String t = part == null ? '' : part.trim();
            if (t != '') out.add(t);
        }
        return out;
    }
}