import { LightningElement, track ,wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getMyAccountDetails from '@salesforce/apex/CustomMetaddataUtil.getMyAccountDetails';

export default class PortfolioFooter extends NavigationMixin(LightningElement) {

    @track linkedinUrl;
    @track githubUrl;
    @track trailheadUrl;
    @track emailUrl;
    @track designation;
    @track name;
    @track bio;

    @wire(getMyAccountDetails)
        wiredAccountDetails({error,data}){
            if(data){
                            const formatUrl = (url) => {
                                if (!url) return '';
                                return url.startsWith('http') ? url : `https://${url}`;
                            };
            
                            this.linkedinUrl = formatUrl(data.LinkedIn__c);
                            this.githubUrl = formatUrl(data.Github__c);
                            this.trailheadUrl = formatUrl(data.Trailhead__c);
                            
                            this.emailUrl = `mailto:${data.Email__c}`;
                            this.designation = data.Designation__c;
                            this.name = data.Name;
                            this.bio = data.Bio__c;
                        }
                        else if(error){
                            console.error('Error fetching account details:', error);

                        }

                
            }
    
    

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}