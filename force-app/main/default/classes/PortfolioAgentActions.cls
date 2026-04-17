/**
 * @description       : 
 * @author            : Venkatesh M
 * @group             : 
 * @last modified on  : 04-17-2026
 * @last modified by  : Venkatesh M
**/
public with sharing class PortfolioAgentActions {

    @InvocableMethod(label='Execute Portfolio Action' description='Dispatches requests to either Fetch or Update portfolio data.')
    public static List<ActionResult> executeAction(List<ActionRequest> requests) {
        List<ActionResult> results = new List<ActionResult>();
        
        for (ActionRequest req : requests) {
            ActionResult res = new ActionResult();
            
            // ROUTING LOGIC: Determine if we are Fetching or Updating
            if (req.actionType == 'Fetch') {
                res = handleFetch();
            } else if (req.actionType == 'Update') {
                res = handleUpdate(req);
            }
            
            results.add(res);
        }
        return results;
    }

    /* --- PRIVATE HANDLERS --- */

    private static ActionResult handleFetch() {
        ActionResult res = new ActionResult();
        Portfolio_Agent__mdt agentConfig = Portfolio_Agent__mdt.getInstance('showSkills');
        try {
            HttpRequest httpReq = new HttpRequest();
            httpReq.setEndpoint(agentConfig.endPoint__c);
            httpReq.setMethod(agentConfig.HttpMethod__c);
            Http h = new Http();
            HttpResponse httpRes = h.send(httpReq);
            
            res.isSuccess = (httpRes.getStatusCode() == 200);
            res.message = httpRes.getBody(); // Returns the JSON list of skills
        } catch (Exception e) {
            res.isSuccess = false;
            res.message = 'Fetch Error: ' + e.getMessage();
        }
        return res;
    }

    private static ActionResult handleUpdate(ActionRequest req) {
        ActionResult res = new ActionResult();
        try {
            HttpRequest httpReq = new HttpRequest();
            Portfolio_Agent__mdt agentConfig = Portfolio_Agent__mdt.getInstance('updateSkill');
            httpReq.setEndpoint(agentConfig.endPoint__c);
            httpReq.setMethod(agentConfig.HttpMethod__c);
            httpReq.setHeader('Content-Type', 'application/json');
            
            Map<String, Object> bodyMap = new Map<String, Object>();
            bodyMap.put('skillName', req.skillName);
            bodyMap.put('percentage', req.percentage);
            bodyMap.put('showInUI', req.showInUI);
            httpReq.setBody(JSON.serialize(bodyMap));
            
            Http h = new Http();
            HttpResponse httpRes = h.send(httpReq);
            
            res.isSuccess = (httpRes.getStatusCode() == 200);
            res.message = res.isSuccess ? 'Updated Successfully: ' + httpRes.getBody() : 'Remote Error: ' + httpRes.getStatus();
        } catch (Exception e) {
            res.isSuccess = false;
            res.message = 'Update Error: ' + e.getMessage();
        }
        return res;
    }

    /* --- WRAPPER CLASSES --- */

    public class ActionRequest {
        @InvocableVariable(required=true label='Action Type (Fetch or Update)')
        public String actionType;

        @InvocableVariable(label='Skill Name')
        public String skillName;
        
        @InvocableVariable(label='New Percentage')
        public Decimal percentage;

        @InvocableVariable(label='Show in UI')
        public Boolean showInUI;
    }

    public class ActionResult {
        @InvocableVariable(label='Message/Data')
        public String message;
        
        @InvocableVariable(label='Is Success')
        public Boolean isSuccess;
    }
}