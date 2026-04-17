# 🚀 AI-Powered & Metadata-Driven LWC Portfolio
### Salesforce Experience Cloud (LWR) + Agentforce + Cross-Org Integration

![Metadata-Driven LWC Portfolio](https://capsule-render.vercel.app/api?type=rect&color=0:111827,35:1e3a8a,70:0A66C2,100:38BDF8&height=250&section=header&text=AI-Powered%20LWC%20Portfolio&fontSize=35&fontColor=ffffff&fontAlignY=36&desc=Agentforce%20%7C%20Cross-Org%20REST%20%7C%20Experience%20Cloud%20(LWR)&descSize=18&descAlignY=60&animation=twinkling)

This project showcases a production-grade, **zero-hardcode** portfolio architecture. Beyond dynamic rendering via Custom Metadata, it features an **integrated Agentforce Service Agent** that acts as a conversational administrative console to manage professional data in real-time.

---
## 🏗️ Architectural Challenge & Innovation

| **The Problem** | **The Solution** |
| :--- | :--- |
| My primary Portfolio Org (hosting the Experience Site) was not **Agentforce-enabled**, creating a technical roadblock for deploying a native Service Agent for real-time site management. | I engineered a **Cross-Org AI Orchestration** layer. I deployed the Service Agent in a modern, Agentforce-enabled "Management Org" and bridged the gap using a secure **Named Credentials + OAuth 2.0** framework to control the Portfolio Org via REST APIs. |

---

## 📸 Modal Diagram

<img src="screenshots/Modal.png" alt="Modal">

## 🧠 Sentinel AI Governance
The portfolio includes an autonomous **Agentforce Assistant** that serves as a bridge between the Experience Site and the backend data layer.

* **Conversational Management**: Fetch current skill proficiencies or trigger remote updates via natural language.
* **Dispatcher Pattern Apex**: A sophisticated single-class routing architecture (`PortfolioAgentActions`) that bypasses platform limits to handle multiple AI intents (Fetch/Update).
* **Secure Cross-Org Bridge**: Leverages **Named Credentials (OAuth 2.0)** to securely modify data in a remote Salesforce environment via REST APIs.
* **Embedded Messaging**: Seamlessly integrated into the LWR site footer for instant administrative control.

---

## ✨ Key Features

- **Zero-Hardcode Architecture** – 100% of content is driven by Custom Metadata Records.
- **Agentforce Service Agent** – Headless administrative layer for conversational data updates.
- **LWR (Lightning Web Runtime)** – Built on Salesforce’s fastest, modern site architecture.
- **Advanced Filtering** – Multi-dimensional LWC filtering logic for projects and technical stacks.
- **Secure Guest User Model** – Optimized Apex backend with hardened security for public exposure.
- **Enterprise-Grade Quality** – Strict separation of concerns using a Service Layer Pattern.

---
## 🚀 Live Demo

> **Live Portfolio**: https://ddm00000fpkymuan-dev-ed.develop.my.site.com/venkateshPortfolio/s

## ▶️ Watch Demo

> **Youtube**: I will Update soon ......

### 💻 Tech Stack & Core Competencies

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **AI & Automation** | ![Agentforce](https://img.shields.io/badge/Agentforce-663399?style=for-the-badge&logo=salesforce&logoColor=white) ![Reasoning](https://img.shields.io/badge/Atlas_Reasoning-00A1E0?style=for-the-badge&logo=ai&logoColor=white) |
| **Frontend / UX** | ![LWC](https://img.shields.io/badge/LWC-0176D3?style=for-the-badge&logo=lightning&logoColor=white) ![LWR](https://img.shields.io/badge/LWR_Runtime-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white) ![UX Design](https://img.shields.io/badge/User_Experience-2D3748?style=for-the-badge&logo=figma&logoColor=white) |
| **Backend / Logic** | ![Apex](https://img.shields.io/badge/Apex-663399?style=for-the-badge&logo=salesforce&logoColor=white) ![Triggers](https://img.shields.io/badge/Triggers-1798C1?style=for-the-badge&logo=salesforce&logoColor=white) ![Logic](https://img.shields.io/badge/Business_Logic-4A5568?style=for-the-badge&logo=docsdotrs&logoColor=white) |
| **Platform** | ![Experience Cloud](https://img.shields.io/badge/Experience_Cloud-0176D3?style=for-the-badge&logo=salesforce&logoColor=white) ![Experience Site](https://img.shields.io/badge/Digital_Experiences-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white) |
| **Security & Config** | ![Metadata Types](https://img.shields.io/badge/Custom_Metadata-525DF9?style=for-the-badge&logo=salesforce&logoColor=white) ![Sharing Rules](https://img.shields.io/badge/Sharing_Model-2D3748?style=for-the-badge&logo=auth0&logoColor=white) ![Config](https://img.shields.io/badge/Configuration-217346?style=for-the-badge&logo=checkmarx&logoColor=white) |

---

## 📁 Project Structure

```bash
metadata-driven-lwc-portfolio/
├── force-app/
│   ├── main/
│   │   ├── default/
│   │   │   ├── classes/               # Apex Controller class
│   │   │   │      ├── CustomMetadataUtil
│   │   │   │      └── ProjectTriggerHandler
│   │   │   │
│   │   │   ├── customMetadata/        # Custom Metadata Types + Records
│   │   │   ├── experiences/           # Experience Site configuration
│   │   │   ├── lwc/                   # All Lightning Web Components
│   │   │   │      ├── contactPage
│   │   │   │      ├── portfolioCertifications
│   │   │   │      ├── portfolioFooter
│   │   │   │      ├── portfolioSkills
│   │   │   │      ├── portfolioNav
│   │   │   │      ├── projectsPage
│   │   │   │      ├── quickNavLinks
│   │   │   │      ├── resumePage
│   │   │   │      └── ProjectTriggerHandler
│   │   │   │
│   │   │   ├── triggers/              # Supporting triggers 
│   │   │   ├── permissionset/         # Custom permissionsets
│   │   │   └── objects/               # custom objects and standard objects
│   │   │   
│   └── ...
├── screenshots/                      
└── README.md

```
## 📸 Screenshots (Service Agent Created Org)

1. Fetch All Skills
<img src="screenshots/neworg1.png" alt="Home UI">

2. Update Skill with proficiency + Visibility in UI
<img src="screenshots/neworg2.png" alt="Home UI">


## 📸 Screenshots (Portfolio Deployed Org)

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

## 📱✨ Mobile View
1. Home , Footer , Projects
<img src="screenshots/mobile1.png" alt="Mobile view">

2. Skills, Certificates, Resume , Contact
<img src="screenshots/mobile2.png" alt="Mobile view">


---

## 🏗️ Architecture Highlights

<table>
  <tr>
    <td valign="top" width="50%">
      <h3>🤖 AI Dispatcher Pattern</h3>
      <ul>
        <li>Single Invocable entry-point for multi-intent AI actions</li>
        <li>Dynamic routing logic for Fetch vs. Update operations</li>
        <li>Automated Slot Filling for data integrity</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h3>🧱 Cross-Org Integration</h3>
      <ul>
        <li>Secure communication via Named Credentials</li>
        <li>Remote JSON payload processing</li>
        <li>Decoupled Site Management vs. Data Source</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td valign="top" width="50%">
      <h3>⚙️ Metadata-Driven UI</h3>
      <ul>
        <li>Zero hardcoded strings in LWC components</li>
        <li>No-deployment content updates</li>
        <li>Scalable data model for rapid expansion</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h3>🔒 Enterprise Security</h3>
      <ul>
        <li>Hardened Guest User Access for LWR</li>
        <li>Clean Service Layer for logic encapsulation</li>
        <li>Optimized SOQL and Governor Limit management</li>
      </ul>
    </td>
  </tr>
</table>

---

</table>

<h2>🔮 Planned Enhancements</h2>

<ol>
  <li>🎨 Dark/Light Mode Toggle</li>
  <li>📝 CMS-Driven Blog / Articles</li>
  <li>📊 Real-Time Analytics Dashboard</li>
  <li>🌍 Multi-Language Support</li>
</ol>


<h2>👨‍💻 Author</h2>

<p>
  <strong>Venkatesh M</strong><br>
  Salesforce Developer | Capgemini | India
</p>