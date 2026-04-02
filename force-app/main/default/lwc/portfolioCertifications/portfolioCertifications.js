import { LightningElement, track } from 'lwc';
import Portfolio_Assets from '@salesforce/resourceUrl/Portfolio_Assets';
import getAllCertificates from '@salesforce/apex/CustomMetaddataUtil.getAllCertificates';
export default class PortfolioCertifications extends LightningElement {
    @track loading = true;
    @track error;
    // Start collapsed; we'll open with animation after data loads
    @track salesforceExpanded = false;
    @track otherExpanded = false;
    @track searchTerm = '';
    @track sortBy = 'date'; // date | name
    @track certTitle='Certificates';
    @track salesforceCertsTitle='Salesforce ';
    @track otherCertsTitle='Other';

    portfolioAssetsBase = Portfolio_Assets;
    @track logo1=Portfolio_Assets+'/agentforce2.png';

    // Data from Apex
    @track salesforceCerts = [];
    @track filteredSalesforce = [];
    @track otherCerts = [];
    @track filteredOther = [];

    sortOptions = [
        { label: 'Sort by Date', value: 'date' },
        { label: 'Sort A-Z', value: 'name' }
    ];

    // 🔥 NEW: Section icon for Salesforce accordion
    get salesforceSectionIcon() {
        return `${this.portfolioAssetsBase}/salesforce.png`;
    }

    get otherCoursesSectionIcon() {
        return `${this.portfolioAssetsBase}/other_cert.png`;
    }

    get resolvedSalesforceCerts() {
        // Map into view-model with imageUrl built from static resource + Image_Name__c (filename only, no leading slash)
        return this.salesforceCerts.map(cert => ({
            ...cert,
            imageUrl: cert.Image_Name__c ? `${this.portfolioAssetsBase}/${cert.Image_Name__c}` : ''
        }));
    }

    get filteredSalesforceCerts() {
        return this.filteredSalesforce;
    }

    get otherCertsCount() {
        // Return the number of OTHER certs after filters are applied so UI shows filtered counts
        return this.filteredOther.length;
    }

    get salesforceChevronIcon() {
        return this.salesforceExpanded ? 'utility:chevronup' : 'utility:chevrondown';
    }

    get otherChevronIcon() {
        return this.otherExpanded ? 'utility:chevronup' : 'utility:chevrondown';
    }

    get salesforceContentClass() {
        return this.salesforceExpanded ? 'accordion-content expanded' : 'accordion-content';
    }

    get otherContentClass() {
        return this.otherExpanded ? 'accordion-content expanded' : 'accordion-content';
    }

    toggleSalesforce() {
        this.salesforceExpanded = !this.salesforceExpanded;
    }

    toggleOther() {
        this.otherExpanded = !this.otherExpanded;
    }

    handleSearch(event) {
        this.searchTerm = event.target.value;
    }

    handleSort(event) {
        this.sortBy = event.detail.value;
    }

    connectedCallback() {
        this.getCertificates();
    }

    getCertificates(){
        this.loading = true;
        this.error = undefined;
        getAllCertificates()
            .then(result => {
                const rows = Array.isArray(result) ? result : [];
                // Expecting fields: Id, Name, Category__c, Image_Name__c, Issued_Date__c, Source__c
                const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                const toMonthYear = (iso) => {
                    if (!iso) return '';
                    const d = new Date(iso);
                    if (isNaN(d)) return '';
                    return `${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
                };

                const mapped = rows.map(r => ({
                    ...r,
                    imageUrl: r.Image_Name__c ? `${this.portfolioAssetsBase}/${r.Image_Name__c}` : '',
                    issuedMonthYear: toMonthYear(r.Issued_Date__c)
                }));

                this.salesforceCerts = mapped.filter(r => r.Source__c === 'Salesforce');
                this.otherCerts = mapped.filter(r => r.Source__c !== 'Salesforce');

                this.applyFiltersAndSort();
                this.salesforceCertsTitle = `Salesforce (${this.filteredSalesforce.length})`;
                // eslint-disable-next-line no-console
                console.log('Fetched certifications:', JSON.stringify({ salesforce: this.salesforceCerts.length, other: this.otherCerts.length }));
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.error('Error fetching certifications:', error);
                this.error = 'Unable to load certifications.';
            })
            .finally(() => {
                this.loading = false;
            });
    }

    handleSearch(event) {
        this.searchTerm = (event.target.value || '').toLowerCase();
        this.applyFiltersAndSort();
    }

    handleSort(event) {
        this.sortBy = event.detail.value;
        this.applyFiltersAndSort();
    }

    applyFiltersAndSort() {
        const term = this.searchTerm;
        let listSF = [...this.resolvedSalesforceCerts];
        let listOther = [...this.otherCerts];

        if (term) {
            const match = (c) =>
                (c.Name && c.Name.toLowerCase().includes(term)) ||
                (c.Category__c && c.Category__c.toLowerCase().includes(term)) ||
                (c.Source__c && c.Source__c.toLowerCase().includes(term));

            listSF = listSF.filter(match);
            listOther = listOther.filter(match);
        }

        const sortList = (arr) => {
            switch (this.sortBy) {
                case 'name':
                    arr.sort((a, b) => (a.Name || '').localeCompare(b.Name || ''));
                    break;
                default: // date
                    arr.sort((a, b) => new Date(b.Issued_Date__c) - new Date(a.Issued_Date__c));
            }
            return arr;
        };

        this.filteredSalesforce = sortList(listSF);
        this.filteredOther = sortList(listOther);

        // Update header titles/counts to reflect filtered results
        this.salesforceCertsTitle = `Salesforce (${this.filteredSalesforce.length})`;
        this.otherCertsTitle = `Other (${this.filteredOther.length})`;
        
        // Open Salesforce accordion with a slight delay to allow CSS transition (animation-on-load)
        if (!this.salesforceExpanded) {
            // Use microtask to flip after DOM paints post-data-load
            setTimeout(() => { this.salesforceExpanded = true; }, 300);
        }
    }
}