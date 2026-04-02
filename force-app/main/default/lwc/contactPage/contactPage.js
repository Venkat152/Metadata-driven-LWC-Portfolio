import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getMyAccountDetails from '@salesforce/apex/CustomMetaddataUtil.getMyAccountDetails';

export default class ContactPage extends LightningElement {
    @track formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    @track accountEmail = '';
    @track accountPhone = '';
    @track accountLocation = '';

    // URLs with formatting logic
    @track linkedinUrl = '';
    @track whatsappUrl = '';
    @track youtubeUrl = '';
    @track emailUrl = '';
    @track mapUrl = '';

    // Helper to ensure URLs are absolute
    formatUrl(url) {
        if (!url) return '';
        return url.startsWith('http') ? url : `https://${url}`;
    }

    handleInputChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.formData = { ...this.formData, [field]: value };
        
        const inputGroup = event.target.closest('.form-group');
        if (value.trim()) {
            inputGroup.classList.add('has-value');
        } else {
            inputGroup.classList.remove('has-value');
        }
    }

    handleSubmit() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Message Sent! 🚀',
                message: `Thanks ${this.formData.name || 'there'}! I'll reply within 24 hours`,
                variant: 'success'
            })
        );
        this.formData = { name: '', email: '', subject: '', message: '' };
    }

    connectedCallback() {
        this.loadAccount();
    }

    loadAccount() {
        getMyAccountDetails()
            .then(acc => {
                if (!acc) return;

                this.accountEmail = acc.Email__c || '';
                this.accountPhone = acc.Phone || '';
                this.accountLocation = acc.BillingCountry || 'India';

                // Build Formatted URLs
                this.emailUrl = acc.Email__c ? `mailto:${acc.Email__c}` : '';
                this.linkedinUrl = this.formatUrl(acc.LinkedIn__c);
                
                // Use Trailhead/Github as backup for the 4th button
                const socialFallback = acc.Trailhead__c || acc.Github__c;
                this.youtubeUrl = this.formatUrl(socialFallback);

                // WhatsApp Logic
                if (acc.Phone) {
                    const cleanPhone = acc.Phone.replace(/\D/g, ''); // Removes all non-digits
                    this.whatsappUrl = `https://wa.me/${cleanPhone}`;
                }

                // Map Logic
                if (acc.BillingCountry) {
                    this.mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(acc.BillingCountry)}`;
                }
            })
            .catch(err => {
                console.error('Error loading account details:', err);
            });
    }
}