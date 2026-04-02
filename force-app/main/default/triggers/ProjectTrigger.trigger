/**
 * @description       : 
 * @author            : Venkatesh M
 * @group             : 
 * @last modified on  : 03-28-2026
 * @last modified by  : Venkatesh M
**/
// Trigger to create Project_Skill__c junction records from a Project__c.Tech_Stack__c field
// Bulkified and delegates logic to ProjectTriggerHandler
trigger ProjectTrigger on Project__c (after insert, after update) {
    if (Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate)) {
        // Pass null for oldMap on insert; on update pass Trigger.oldMap
        ProjectTriggerHandler.handleAfter(Trigger.new, Trigger.isInsert ? null : Trigger.oldMap);
    }
}