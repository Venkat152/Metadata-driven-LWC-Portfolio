import { LightningElement, track,wire } from 'lwc';
import Portfolio_Assets from '@salesforce/resourceUrl/Portfolio_Assets';
import SkillsIcons from '@salesforce/resourceUrl/SkillsIcons';
import getAllSkillsWithPercentages from '@salesforce/apex/CustomMetaddataUtil.getAllSkillsWithPercentages';

export default class PortfolioSkills extends LightningElement {
    @track skills = [];
    @track heroImage = Portfolio_Assets + '/agentforce4.png';
    hasAnimated = false;

    animationInitialDelay = 400; 
    animationStagger = 200; 

    @wire(getAllSkillsWithPercentages)
    wiredSkills({error,data}){
        if(data){
            this.skills = data.map((skill, index) => ({
                ...skill,
                displayPercent: `${skill.Percentage__c}%`,
                style: `width: 0%`,
                finalWidth: `${skill.Percentage__c}%`,
                // New: Dynamic icon mapping
                skillIcon: this.getIconName(skill.Name), 
                animationDelay: `${index * 0.15}s`
            }));
    } else if(error){
        console.error('Error fetching skills:', error);

    }
}

    // Helper to determine the icon based on the skill name
    getIconName(name) {
        const skill = name.toLowerCase();
        if (skill.includes('agentforce') ) return SkillsIcons+'/agentforce.png';
        if (skill.includes('data cloud') || skill.includes('360')) return SkillsIcons+'/datacloud.png'
        if (skill.includes('apex') || skill.includes('trigger') || skill.includes('batch')) return SkillsIcons+'/apex.png';
        if (skill.includes('lwc') || skill.includes('component')) return SkillsIcons+'/lwc.png';
        if (skill.includes('flow')) return SkillsIcons+'/flow.png';
        if (skill.includes('integration') || skill.includes('api')) return SkillsIcons+'/integration.png';
        if (skill.includes('security')) return SkillsIcons+'/security.png';
        if (skill.includes('prompt')) return SkillsIcons+'/prompt_template.png';
        if (skill.includes('config')) return SkillsIcons+'/configuration.png';
        if(skill.includes('community') || skill.includes('experience')) return SkillsIcons+'/experience.png';
        if(skill.includes('email')) return SkillsIcons+'/email.png';
        if(skill.includes('ai') || skill.includes('einstein')) return SkillsIcons+'/einstein.png';
        if(skill.includes('cursor')) return SkillsIcons+'/cursor.png';
        return SkillsIcons+'/configuration.png';
    }


    renderedCallback() {
        // Animate progress fills once after they first render
        if (this.hasAnimated || !this.skills.length) return;
        this.hasAnimated = true;

        const fills = this.template.querySelectorAll('.progress-fill');
        fills.forEach((el, i) => {
            const final = this.skills[i] ? this.skills[i].finalWidth : el.style.width || '0%';
            el.setAttribute('data-percent', final);
            el.style.transition = 'width 1.4s cubic-bezier(0.2, 0.9, 0.2, 1), box-shadow 0.6s ease';
            setTimeout(() => {
                el.style.width = final;
                el.classList.add('filled');
            }, this.animationInitialDelay + i * this.animationStagger);
        });
    }
}