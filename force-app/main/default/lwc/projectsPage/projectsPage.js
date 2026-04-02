import { LightningElement, track } from 'lwc';
import getAllSkillsAndTechnologies from '@salesforce/apex/CustomMetaddataUtil.getAllSkillsAndTechnologies'; 
import getAllProjects from '@salesforce/apex/CustomMetaddataUtil.getAllProjects';
import Portfolio_Assets from '@salesforce/resourceUrl/Portfolio_Assets';
export default class ProjectsPage extends LightningElement {
    @track projects = [];
    @track filteredProjects = [];
    @track selectedTech = '';
    @track selectedDifficulty = '';
    @track sortBy = 'date'; // 'date', 'name', 'difficulty'
    @track heroImage =Portfolio_Assets + '/agentforce.png';
    @track tagline='Showcasing scalable Salesforce solutions built with LWC, Agentforce, Experience Cloud, and metadata-driven architecture.';
    @track projectline='My Salesforce Projects';


    @track allSkillsAndTechnologies =[];

    getAllSkillsAndTechs() {
        getAllSkillsAndTechnologies()
            .then(result => {
                this.allSkillsAndTechnologies = result;
                
                // Clear existing options
                this.techOptions = [{ label: 'All Technologies', value: '' }];
                this.difficultyOptions = [{ label: 'All Levels', value: '' }];
                
                // Populate options based on metadata
                result.forEach(item => {
                    if (item.isSkill__c) {
                        this.techOptions.push({
                            label: item.Label,
                            value: item.value__c
                        });
                    } else {
                        this.difficultyOptions.push({
                            label: item.Label,
                            value: item.value__c
                        });
                    }
                });
                
                console.log('Fetched skills and technologies:', JSON.stringify(this.allSkillsAndTechnologies)   );
            })
            .catch(error => {
                console.error('Error fetching skills and technologies:', error);
            });
    }


    techOptions = [
        { label: 'All Technologies', value: '' }
    ];

    difficultyOptions = [
        { label: 'All Levels', value: '' }
    ];

    connectedCallback() {
        this.loadProjects();
        this.getAllSkillsAndTechs();
    }

    loadProjects() {
        // Load projects from Apex (Project__c). Some fields available on the object
        // may differ from the previous static JSON; provide safe fallbacks so the
        // template doesn't break if a field is missing.
        getAllProjects()
            .then(result => {
                const mapped = (Array.isArray(result) ? result : []).map(p => {
                    const difficulty = p.Difficulty__c || 'Medium';
                    // Build tech array from child relationship Project_Skills__r -> Skill__r.Name
                    const skills = (p.Project_Skills__r && Array.isArray(p.Project_Skills__r))
                        ? p.Project_Skills__r.map(ps => (ps && ps.Skill__r) ? ps.Skill__r.Name : null).filter(Boolean)
                        : [];

                    // Keep the raw Created_Date__c for accurate sorting, and create a formatted month-year string for display
                    const rawDate = p.Created_Date__c || null;
                    const formattedDate = rawDate
                        ? new Date(rawDate).toLocaleString('en-US', { month: 'short', year: 'numeric' })
                        : '';

                    return {
                        // Template expects these keys: name, date, tech (array), description, website, github, youtube, difficulty, difficultyClass
                        name: p.Name || '',
                        // date (formatted for display) and dateRaw (ISO) kept for sorting
                        date: formattedDate,
                        dateRaw: rawDate,
                        tech: skills,
                        description: p.Description__c || '',
                        website: p.Website__c || '',
                        github: p.Github__c || '',
                        youtube: p.youtube__c || '',
                        difficulty,
                        difficultyClass: `difficulty-badge difficulty-${(difficulty || 'Medium').toLowerCase()}`
                    };
                });

                this.projects = mapped;
                this.filteredProjects = [...this.projects];
                this.sortProjects();
            })
            .catch(error => {
                // eslint-disable-next-line no-console
                console.error('Error fetching projects from Apex:', error);
            });
    }

// Ensure these are reset to an empty string exactly matching the "All" option values
clearFilters() {
    this.selectedTech = '';
    this.selectedDifficulty = '';
    this.sortBy = 'date';
    
    // Reset the data
    this.filteredProjects = [...this.projects];
    
    // Explicitly re-sort and re-filter to ensure UI matches
    this.sortProjects();
    
    // Logic to force the HTML select elements to update is handled by the value={selectedTech} in HTML
}

    filterProjects() {
        const filtered = this.projects.filter(project => {
            const techMatch =
                !this.selectedTech ||
                (project.tech && project.tech.includes(this.selectedTech));
            const difficultyMatch =
                !this.selectedDifficulty ||
                project.difficulty === this.selectedDifficulty;
            return techMatch && difficultyMatch;
        });
        this.filteredProjects = filtered;
        this.sortProjects();
    }

    sortProjects() {
        this.filteredProjects = [...this.filteredProjects].sort((a, b) => {
            switch (this.sortBy) {
                case 'name':
                    return (a.name || '').localeCompare(b.name || '');
                case 'difficulty': {
                    const diffOrder = { Low: 1, Medium: 2, High: 3 };
                    return (diffOrder[a.difficulty] || 0) - (diffOrder[b.difficulty] || 0);
                }
                default: { // date (safely handle missing/invalid dates)
                    // Use the raw ISO Created_Date__c (dateRaw) for accurate comparisons
                    const da = a.dateRaw ? new Date(a.dateRaw) : null;
                    const db = b.dateRaw ? new Date(b.dateRaw) : null;
                    const aValid = da instanceof Date && !isNaN(da);
                    const bValid = db instanceof Date && !isNaN(db);
                    if (aValid && bValid) return db - da;
                    if (aValid) return -1;
                    if (bValid) return 1;
                    return 0;
                }
            }
        });
    }

    get sortLabel() {
        switch (this.sortBy) {
            case 'name': return 'Name';
            case 'difficulty': return 'Difficulty';
            default: return 'Date (Newest)';
        }
    }

    get filtersLength() {
        return this.filteredProjects.length === 0;
    }

    handleTechChange(event) {
        this.selectedTech = event.target.value;
        this.filterProjects();
    }

    handleDifficultyChange(event) {
        this.selectedDifficulty = event.target.value;
        this.filterProjects();
    }
}