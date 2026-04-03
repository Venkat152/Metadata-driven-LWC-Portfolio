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

## 📸 Mobile View

<img src="screenshots/footer.png" alt="Mobile view">

<div align="center">

<div style="background: linear-gradient(135deg, #0d1117 0%, #161b22 100%); border: 1px solid #30363d; border-radius: 12px; padding: 24px; max-width: 900px; margin: 20px auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #e6edf3;">

<!-- 🏗️ Architecture Highlights -->
<div style="margin-bottom: 32px;">
  <h3 style="display: flex; align-items: center; gap: 12px; font-size: 20px; font-weight: 700; color: #58a6ff; margin: 0 0 20px 0; border-bottom: 1px solid #30363d; padding-bottom: 12px;">🏗️ Architecture Highlights</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
    
    <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 20px; transition: all 0.2s ease;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 36px; height: 36px; background: rgba(88,166,255,0.1); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">⚙️</div>
        <div>
          <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">Custom Metadata Driven</div>
          <div style="font-size: 12px; color: #8b949e;">Zero-hardcode LWC</div>
        </div>
      </div>
      <div style="font-size: 12px; color: #8b949e; line-height: 1.6;">
        • No-deployment content updates<br>
        • Business-managed via Admin UI
      </div>
    </div>

    <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 20px; transition: all 0.2s ease;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 36px; height: 36px; background: rgba(63,185,80,0.1); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🧱</div>
        <div>
          <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">Service Layer Pattern</div>
          <div style="font-size: 12px; color: #8b949e;">Clean separation</div>
        </div>
      </div>
      <div style="font-size: 12px; color: #8b949e; line-height: 1.6;">
        • Fully testable Apex controllers<br>
        • Enterprise maintainability
      </div>
    </div>

    <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 20px; transition: all 0.2s ease;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 36px; height: 36px; background: rgba(240,136,62,0.1); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">⚡</div>
        <div>
          <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">Bulkified Apex</div>
          <div style="font-size: 12px; color: #8b949e;">Governor-safe</div>
        </div>
      </div>
      <div style="font-size: 12px; color: #8b949e; line-height: 1.6;">
        • 100k+ records safe<br>
        • Optimized SOQL patterns
      </div>
    </div>

    <div style="background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 20px; transition: all 0.2s ease;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 36px; height: 36px; background: rgba(188,140,255,0.1); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">🔒</div>
        <div>
          <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">Guest User Secure</div>
          <div style="font-size: 12px; color: #8b949e;">LWR public ready</div>
        </div>
      </div>
      <div style="font-size: 12px; color: #8b949e; line-height: 1.6;">
        • Secure data exposure<br>
        • Zero vulnerabilities
      </div>
    </div>

  </div>
</div>

<!-- 🎯 Skills -->
<div style="margin-bottom: 32px;">
  <h3 style="display: flex; align-items: center; gap: 12px; font-size: 20px; font-weight: 700; color: #58a6ff; margin: 0 0 20px 0; border-bottom: 1px solid #30363d; padding-bottom: 12px;">🎯 Architect Skills Demonstrated</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-bottom: 20px;">
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="width: 8px; height: 8px; border-radius: 50%; background: #58a6ff; margin-top: 6px; flex-shrink: 0;"></div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3; margin-bottom: 4px;">Metadata-Driven Development</div>
        <div style="font-size: 12px; color: #8b949e;">Production-grade dynamic content</div>
      </div>
    </div>
    
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="width: 8px; height: 8px; border-radius: 50%; background: #3fb950; margin-top: 6px; flex-shrink: 0;"></div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3; margin-bottom: 4px;">LWR + Experience Cloud</div>
        <div style="font-size: 12px; color: #8b949e;">End-to-end site architecture</div>
      </div>
    </div>
    
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="width: 8px; height: 8px; border-radius: 50%; background: #f0883e; margin-top: 6px; flex-shrink: 0;"></div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3; margin-bottom: 4px;">Enterprise Solution Design</div>
        <div style="font-size: 12px; color: #8b949e;">Security + performance focus</div>
      </div>
    </div>
    
    <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="width: 8px; height: 8px; border-radius: 50%; background: #bc8cff; margin-top: 6px; flex-shrink: 0;"></div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3; margin-bottom: 4px;">Salesforce Best Practices</div>
        <div style="font-size: 12px; color: #8b949e;">Bulkification + service layers</div>
      </div>
    </div>
  </div>
  
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <span style="font-size: 11px; font-weight: 600; padding: 4px 12px; background: #21262d; border: 1px solid #30363d; border-radius: 20px; color: #8b949e;">🏅 Platform Developer I/II</span>
    <span style="font-size: 11px; font-weight: 600; padding: 4px 12px; background: #21262d; border: 1px solid #30363d; border-radius: 20px; color: #8b949e;">🏅 Experience Cloud Consultant</span>
    <span style="font-size: 11px; font-weight: 600; padding: 4px 12px; background: #21262d; border: 1px solid #30363d; border-radius: 20px; color: #8b949e;">🏅 Agentforce Specialist</span>
  </div>
</div>

<!-- 🔮 Roadmap -->
<div style="margin-bottom: 32px;">
  <h3 style="display: flex; align-items: center; gap: 12px; font-size: 20px; font-weight: 700; color: #58a6ff; margin: 0 0 20px 0; border-bottom: 1px solid #30363d; padding-bottom: 12px;">🔮 Planned Enhancements</h3>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px; padding: 16px 20px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="font-size: 24px;">🎨</div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">Dark/Light Mode</div>
        <div style="font-size: 11px; font-weight: 600; color: #d29922; font-family: 'SF Mono', monospace;">◉ Planned</div>
      </div>
    </div>
    
    <div style="display: flex; align-items: center; gap: 12px; padding: 16px 20px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="font-size: 24px;">📝</div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">CMS Blog Section</div>
        <div style="font-size: 11px; font-weight: 600; color: #d29922; font-family: 'SF Mono', monospace;">◉ Planned</div>
      </div>
    </div>
    
    <div style="display: flex; align-items: center; gap: 12px; padding: 16px 20px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="font-size: 24px;">📊</div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">Real-time Analytics</div>
        <div style="font-size: 11px; font-weight: 600; color: #d29922; font-family: 'SF Mono', monospace;">◉ Planned</div>
      </div>
    </div>
    
    <div style="display: flex; align-items: center; gap: 12px; padding: 16px 20px; background: #161b22; border: 1px solid #30363d; border-radius: 8px;">
      <div style="font-size: 24px;">🌍</div>
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #e6edf3;">Multi-language</div>
        <div style="font-size: 11px; font-weight: 600; color: #d29922; font-family: 'SF Mono', monospace;">◉ Planned</div>
      </div>
    </div>
  </div>
</div>

<!-- 🚀 Deploy -->
<div style="margin-bottom: 32px;">
  <h3 style="display: flex; align-items: center; gap: 12px; font-size: 20px; font-weight: 700; color: #58a6ff; margin: 0 0 20px 0; border-bottom: 1px solid #30363d; padding-bottom: 12px;">🚀 Deploy in 60 Seconds</h3>
  
  <div style="background: #161b22; border: 1px solid #30363d; border-radius: 12px; overflow: hidden;">
    <div style="background: #0d1117; padding: 16px 24px; border-bottom: 1px solid #30363d; display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #e6edf3;">
        <span style="width: 12px; height: 12px; background: #3fb950; border-radius: 2px;"></span>
        Terminal
      </div>
      <span style="font-size: 11px; font-weight: 600; background: rgba(63,185,80,0.1); color: #3fb950; padding: 4px 8px; border-radius: 4px;">bash</span>
    </div>
    
    <div style="padding: 24px; font-family: 'SF Mono', monospace; font-size: 13px; line-height: 1.7; color: #e6edf3; background: #0d1117;">
      <div style="color: #8b949e; font-size: 12px; margin-bottom: 12px;"># Clone & Authenticate</div>
      <div style="display: flex; gap: 16px; align-items: flex-start; margin-bottom: 8px;">
        <span style="color: #8b949e; min-width: 24px;">$</span>
        <span style="color: #79c0ff;">git</span> <span style="color: #a5d6ff;">clone &lt;repo&gt; && cd portfolio</span>
      </div>
      <div style="display: flex; gap: 16px; align-items: flex-start; margin-bottom: 16px;">
        <span style="color: #8b949e; min-width: 24px;">$</span>
        <span style="color: #79c0ff;">sf</span> <span style="color: #a5d6ff;">org login web --alias portfolio</span>
      </div>
      
      <div style="color: #8b949e; font-size: 12px; margin-bottom: 12px;"># Deploy & Load Data</div>
      <div style="display: flex; gap: 16px; align-items: flex-start; margin-bottom: 8px;">
        <span style="color: #8b949e; min-width: 24px;">$</span>
        <span style="color: #79c0ff;">sf</span> <span style="color: #a5d6ff;">project deploy start</span>
      </div>
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <span style="color: #8b949e; min-width: 24px;">$</span>
        <span style="color: #79c0ff;">sf</span> <span style="color: #a5d6ff;">data tree import --plan ./data/sample.json</span>
      </div>
    </div>
    
    <div style="padding: 12px 24px; background: #0d1117; border-top: 1px solid #30363d; font-size: 12px; color: #8b949e;">
      📦 <strong>Prerequisites:</strong> Salesforce Org + Experience Cloud license • VS Code + Salesforce Extension Pack
    </div>
  </div>
</div>

<!-- Footer -->
<div style="padding-top: 24px; border-top: 1px solid #30363d; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
  <div style="font-size: 14px; color: #8b949e;">
    Architected with ❤️ by <strong style="color: #e6edf3;">Venkatesh M</strong><br>
    <span style="font-size: 12px;">Salesforce Developer/Architect • Capgemini India</span>
  </div>
  <div style="display: flex; gap: 16px;">
    <a href="#" style="font-size: 12px; font-weight: 600; color: #58a6ff; text-decoration: none;">LinkedIn</a>
    <a href="#" style="font-size: 12px; font-weight: 600; color: #58a6ff; text-decoration: none;">Trailhead</a>
    <a href="#" style="font-size: 12px; font-weight: 600; color: #58a6ff; text-decoration: none;">GitHub</a>
  </div>
</div>

</div>
</div>