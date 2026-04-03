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

```bash
🏗️ Architecture Highlights
text
┌─────────────────────────────────────────────────────────────┐
│                    ENTERPRISE FEATURES                      │
├─────────────────────┬───────────────────────────────────────┤
│ Custom Metadata     │ ✅ Zero-hardcode LWC                 │
│                     │ 🔄 No-deployment content updates     │
├─────────────────────┼───────────────────────────────────────┤
│ Service Layer       │ 🧠 Clean UI/Business separation      │
│                     │ ✅ Fully testable                    │
├─────────────────────┼───────────────────────────────────────┤
│ Bulkified Apex      │ ⚡ Governor-safe (100k+ records)     │
│                     │ 📈 Optimized SOQL                   │
├─────────────────────┼───────────────────────────────────────┤
│ Guest User Secure   │ 🔒 Public LWR ready                 │
│                     │ 🚀 Zero vulnerabilities              │
└─────────────────────┴───────────────────────────────────────┘
🎯 Architect Skills Demonstrated
text
graph TB
    A[Metadata-Driven Dev] --> B[LWR Site Mastery]
    B --> C[Enterprise Patterns]
    C --> D[Security + Performance]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
Core Expertise:

Production-grade dynamic content systems

End-to-end Experience Cloud architecture

Bulkification + service layer patterns

Guest-access security optimization

🔮 Roadmap
Phase	Feature	Status
🎨	Dark/Light Mode Toggle	Planned
📝	CMS Blog Section	Planned
📊	Real-time Analytics	Planned
🌍	Multi-language Support	Planned
🚀 Deploy in 60 Seconds
bash
git clone <repo> && cd project
sf org login web --alias portfolio
sf project deploy start
sf data tree import --plan ./data/sample.json
# Site live! 🎉