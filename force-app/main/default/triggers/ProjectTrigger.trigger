/**
 * @description       : 
 * @author            : Venkatesh M
 * @group             : 
 * @last modified on  : 03-28-2026
 * @last modified by  : Venkatesh M
**/
// Bulkified and delegates logic to ProjectTriggerHandler
trigger ProjectTrigger on Project__c (after insert, after update) {
    if (Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate)) {
        ProjectTriggerHandler.handleAfter(Trigger.new, Trigger.isInsert ? null : Trigger.oldMap);
    }
}