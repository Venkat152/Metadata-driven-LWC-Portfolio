import { LightningElement, api,track,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import Portfolio_Assets from '@salesforce/resourceUrl/Portfolio_Assets';
import getMyAccountDetails from '@salesforce/apex/CustomMetaddataUtil.getMyAccountDetails';
export default class PortfolioHomeHero extends NavigationMixin(LightningElement) {

    @track accountData;
    @track imagePath;
    @track experience;
    @track projectsCount;
    @track designation;
    @track description;
    @track name;
    @track skills=[];
    @track certificationsCount;

    @track bgImage=Portfolio_Assets +'/appBackground.png';


    @track rangerBadge;
    @track agentblazerBadge;
 
    @wire(getMyAccountDetails)
    wiredAccount({ error, data }) {
        if (data) {
            this.accountData = data;
            this.name = data.Name;
            this.designation = data.Designation__c;
            this.experience = data.Experience__c;
            this.description = data.Description;
            this.projectsCount = data.Total_Projects__c;
            this.certificationsCount = data.Total_Certificates__c;

            const imagePath = (data.Image_Name__c || '').trim();
            const normalized = imagePath 
                ? (imagePath.startsWith('/') ? imagePath : `/${imagePath}`) 
                : '';
            this.heroImage = normalized ? `${Portfolio_Assets}${normalized}` : '';

            this.skills = data.Skills__c ? data.Skills__c.split(';') : [];
            
            this.rangerBadge = Portfolio_Assets + '/four_star_ranger.png';
            this.agentblazerBadge = Portfolio_Assets + '/agentblazer.png';

        } else if (error) {
            console.error('Error fetching account details:', error);
        }
    }

    @track heroImage;
    navigateToProjects() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/projects' }
        });
    }

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/contact' }
        });
    }
}