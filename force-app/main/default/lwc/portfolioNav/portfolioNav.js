import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import Portfolio_Assets from '@salesforce/resourceUrl/Portfolio_Assets';

export default class PortfolioNav extends NavigationMixin(LightningElement) {
    @track naviIcon = Portfolio_Assets + '/menu.png';
    @track homeIcon = Portfolio_Assets + '/contact.png';
    @track isMenuOpen = false;

    // Added to handle the global click listener
    _clickOutsideHandler;

    toggleMenu(event) {
        event.stopPropagation(); // Prevents the toggle click from immediately closing the menu
        this.isMenuOpen = !this.isMenuOpen;

        if (this.isMenuOpen) {
            this.addOutsideClickListener();
        } else {
            this.removeOutsideClickListener();
        }
    }

    addOutsideClickListener() {
        this._clickOutsideHandler = (event) => {
            // Check if the click was outside the component
            const path = event.composedPath();
            const isClickInside = path.some(element => 
                element.tagName === 'NAV' || (element.classList && element.classList.contains('navbar'))
            );

            if (!isClickInside) {
                this.isMenuOpen = false;
                this.removeOutsideClickListener();
            }
        };
        window.addEventListener('click', this._clickOutsideHandler);
    }

    removeOutsideClickListener() {
        if (this._clickOutsideHandler) {
            window.removeEventListener('click', this._clickOutsideHandler);
        }
    }

    get iconClass() {
        return this.isMenuOpen ? 'mobile-menu-icon active' : 'mobile-menu-icon';
    }

    get menuClass() {
        return this.isMenuOpen ? 'nav-menu open' : 'nav-menu';
    }

    navigateToHome() {
        this.closeMenu();
        this.isMenuOpen = false; // Close menu if open
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: { pageName: 'home' }
        });
    }

    navigateToProjects() {
        this.closeMenu();
        this.isMenuOpen = false;
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/projects' }
        });
    }

    navigateToSkills() {
        this.closeMenu();
        this.isMenuOpen = false;
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/skills' }
        });
    }

    navigateToCerts() {
        this.closeMenu();
        this.isMenuOpen = false;
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/ceritificates' }
        });
    }

    navigateToResume() {
        this.closeMenu();
        this.isMenuOpen = false;
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/resume' }
        });
    }

    navigateToContact() {
        this.closeMenu();
        this.isMenuOpen = false;
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: { url: '/contact' }
        });
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.removeOutsideClickListener();
    }

    // Cleanup when component is removed
    disconnectedCallback() {
        this.removeOutsideClickListener();
    }
}