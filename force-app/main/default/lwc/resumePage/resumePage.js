import { LightningElement, track } from 'lwc';
import RESUME_FILE from '@salesforce/resourceUrl/Resume';
import Portfolio_Assets from '@salesforce/resourceUrl/Portfolio_Assets';

export default class ResumePage extends LightningElement {
    @track bgImage = Portfolio_Assets + '/bg.png';
    @track catImg = Portfolio_Assets + '/cat.png';
    @track agentImg = Portfolio_Assets + '/agent.png';
    @track einsteinImg = Portfolio_Assets + '/einstein1.png';


    resumeUrl = RESUME_FILE + '/resume.pdf';

    // Getter to inject the background image into the template
    get backgroundStyle() {
        return `background-image: url(${this.bgImage}); background-size: cover; background-position: center;`;
    }

    handleDownload() {
        window.open(this.resumeUrl, '_blank');
    }
}