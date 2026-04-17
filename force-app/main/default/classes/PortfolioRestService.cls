@RestResource(urlMapping='/Portfolio/Data/*')
global with sharing class PortfolioRestService {
    
    // EXISTING UPDATE LOGIC
    @HttpPost
    global static String updateSkill(String skillName, Decimal percentage, Boolean showInUI) {
        try {
            List<Skill__c> skillList = [SELECT Id, Name, Percentage__c, Show_In_UI__c 
                                       FROM Skill__c 
                                       WHERE Name = :skillName 
                                       LIMIT 1];
            
            if (skillList.isEmpty()) {
                return 'Error: Skill "' + skillName + '" not found.';
            }
            
            skillList[0].Percentage__c = percentage;
            skillList[0].Show_In_UI__c = showInUI;
            update skillList;
            
            return 'Success: Updated ' + skillName + ' to ' + percentage + '%';
        } catch (Exception e) {
            return 'Error: ' + e.getMessage();
        }
    }

    // NEW FETCH LOGIC
    @HttpGet
    global static void getPortfolioSkills() {
        RestResponse res = RestContext.response;
        try {
            // Using your existing method from CustomMetaddataUtil
            List<Skill__c> skills = CustomMetaddataUtil.getAllSkillsWithPercentages();
            
            res.responseBody = Blob.valueOf(JSON.serialize(skills));
            res.statusCode = 200;
        } catch (Exception e) {
            res.statusCode = 500;
            res.responseBody = Blob.valueOf('Fetch Error: ' + e.getMessage());
        }
    }
}