/**
 * @description       : 
 * @author            : Venkatesh M
 * @group             : 
 * @last modified on  : 03-31-2026
 * @last modified by  : Venkatesh M
**/
public with sharing class CustomMetaddataUtil {

    @AuraEnabled(cacheable=true)
    public static List<Project_Page__mdt> getAllSkillsAndTechnologies(){
        return [SELECT id,Label,value__c ,isSkill__c FROM Project_Page__mdt ORDER BY label];
    }

    @AuraEnabled(cacheable=true)
    public static Account getMyAccountDetails(){
        return [SELECT Id,Name,Bio__c,Image_Name__c,Total_Certificates__c, Total_Projects__c,Skills__c,Type, Email__c,
        LinkedIn__c, Trailhead__c, Designation__c, Description,Github__c, Phone, PhotoUrl,Experience__c,BillingCountry
        FROM Account 
        WHERE Type = 'Portfolio' AND Name ='Venkat M' LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public static List<Skill__c> getAllSkillsWithPercentages(){
        return [SELECT id,Name,percentage__c FROM Skill__c ORDER BY percentage__c DESC];
    }

    @AuraEnabled(cacheable=true)
    public static List<Certificate__c> getAllCertificates(){
        return [SELECT id,Name,Category__c, Image_Name__c, Issued_Date__c, Source__c FROM Certificate__c ORDER BY Issued_Date__c DESC];
    }

    @AuraEnabled(cacheable=true)
    public static List<Project__c> getAllProjects(){
        return [SELECT id,Name,Description__c, Difficulty__c, Github__c, Website__c, youtube__c,Created_Date__c ,(SELECT Id,Skill__r.Name FROM Project_Skills__r ) FROM Project__c ];
    }
}