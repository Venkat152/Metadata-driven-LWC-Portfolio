# Metadata-Driven LWC Portfolio on Experience Cloud (LWR)

A modern, **zero-hardcode**, fully dynamic portfolio website built on **Salesforce Experience Cloud (LWR)** using Lightning Web Components.

This project showcases a production-grade, maintainable architecture where all content (projects, skills, certifications, etc.) can be updated **without any code deployment** — purely through **Custom Metadata Types**.


## ✨ Key Features

- **Zero-Hardcode Architecture** – All portfolio content is driven by Custom Metadata Records
- **Dynamic LWC Components** – Fully reactive, reusable, and performant Lightning Web Components
- **Advanced Filtering** – Multi-dimensional filtering (Tech Stack, Difficulty, Date, etc.)
- **Secure Guest User Experience** – Optimized Apex backend with proper sharing & security model
- **Fully Responsive Design** – Optimized for desktop, tablet, and mobile
- **LWR (Lightning Web Runtime)** – Built on modern Experience Cloud architecture
- **Enterprise-Grade Code Quality** – Clean service layer, proper separation of concerns, and maintainability focus

## 🚀 Live Demo

> **Live Portfolio**: https://ddm00000fpkymuan-dev-ed.develop.my.site.com/venkateshPortfolio/s

## 🛠️ Tech Stack

- **Frontend**: Lightning Web Components (LWC), LWR
- **Backend**: Apex, Custom Metadata Types
- **Platform**: Salesforce Experience Cloud (Experience Site)
- **Other**: Triggers, Configuration, Sharing Rules 

## 📋 Project Highlights

### Scalable Architecture
Engineered a dynamic portfolio on Salesforce Experience Cloud (LWR) using a **"Zero-Hardcode"** design pattern, allowing content updates via Custom Metadata without any code deployments.

### High-Performance Backend
Developed a robust Apex service layer to fetch and render complex data models, optimized for **guest user security** and real-time performance.

### Advanced UI/UX
Built reactive LWC components featuring multi-dimensional filtering, seamless GitHub API integration, and fully responsive layouts.

### Enterprise Delivery
Demonstrated strong expertise in LWR site architecture, secure data modeling, and production-ready development standards.

## 📁 Project Structure

```bash
metadata-driven-lwc-portfolio/
├── force-app/
│   ├── main/
│   │   ├── default/
│   │   │   ├── classes/               # Apex Controller class
│   │   │   ├── customMetadata/        # Custom Metadata Types + Records
│   │   │   ├── experiences/           # Experience Site configuration
│   │   │   ├── lwc/                   # All Lightning Web Components
│   │   │   ├── triggers/              # Supporting triggers 
│   │   │   ├── permissionset/         # Custom permissionsets
│   │   │   └── objects/               # custom objects and standard objects
│   │   │   
│   └── ...
├── screenshots/                      
└── README.md

```
## 📸 Screenshots

1. Home / Portfolio Landing Page
<img src="screenshots/home.png" alt="Home Page">

2. Quick Links
<img src="screenshots/quick_actions.png" alt="Quick Actions">

3. Projects Section with Filters
<img src="screenshots/projects.png" alt="Projects with Filters">

4. Skills section
<img src="screenshots/skills.png" alt="Skills">

5. Certificates
<img src="screenshots/certificates.png" alt="Certificates">

6. Resume
<img src="screenshots/resume.png" alt="Resume">

7. Contact
<img src="screenshots/contact.png" alt="Contact">

8. Footer
<img src="screenshots/footer.png" alt="Footer">

🏗️ Architecture Highlights

Feature	Implementation	Impact
Custom Metadata Driven	Zero-hardcoded values in LWC	No-code content updates – Deploy-free maintenance
Service Layer Pattern	Apex abstraction for UI logic	Clean, testable architecture – Enterprise scalability
Bulkified Apex	Governor-limit optimized queries	High-performance – Handles 100k+ records safely
Guest User Optimized	Secure data exposure in LWR	Public-ready performance – Zero vulnerabilities
Reusable Components	Modular LWC design	Future-proof extensibility – Rapid feature additions
🎯 Skills Demonstrated
Metadata-Driven Development – Production-grade dynamic content

LWR + Experience Cloud Mastery – End-to-end site architecture

Enterprise Solution Design – Security, performance, maintainability focus

Salesforce Best Practices – Bulkification, service layers, guest security

Relevant Certifications: Platform Developer I/II, Experience Cloud Consultant

🔮 Planned Enhancements
text
graph TD
    A[Dark/Light Mode] --> B[Blog CMS Section]
    B --> C[Real-time Analytics Dashboard]
    C --> D[Multi-language Support]
✨ UI/UX: Theme toggle + accessibility improvements

📝 Content: CMS-powered blog/articles

📊 Analytics: Live project metrics dashboard

🌍 Global: i18n + RTL language support

🚀 One-Click Deployment
bash
# 1. Clone & Authenticate
git clone <your-repo>
sf org login web

# 2. Deploy Everything
sf project deploy start

# 3. Load Sample Data
sf data tree import --plan sample-portfolio-data.json

# 4. Activate Site
Experience Builder → Publish → Done!
Prerequisites: Salesforce org with Experience Cloud license + VS Code Salesforce Extension Pack

Architected by Venkatesh M
Salesforce Developer/Architect | Capgemini India | LinkedIn