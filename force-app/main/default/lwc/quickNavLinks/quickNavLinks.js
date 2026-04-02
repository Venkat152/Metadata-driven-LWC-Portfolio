import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class QuickNavLinks extends NavigationMixin(LightningElement) {
    preventDefault(event) {
        event.preventDefault();
    }

    // Navigation handlers
    navigateToProjects() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/projects' }
        });
    }

    navigateToSkills() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/skills' }
        });
    }

    navigateToCerts() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/ceritificates' }
        });
    }

    navigateToResume() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/resume' }
        });
    }

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/contact' }
        });
    }
}