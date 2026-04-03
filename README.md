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


<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>README Section – Venkatesh M</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Inter:wght@300..700&display=swap" rel="stylesheet">
<style>
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem);
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem; --space-5: 1.25rem; --space-6: 1.5rem;
  --space-8: 2rem; --space-10: 2.5rem; --space-12: 3rem;
  --radius-sm: 0.375rem; --radius-md: 0.5rem; --radius-lg: 0.75rem;
  --radius-xl: 1rem; --radius-full: 9999px;
  --transition: 180ms cubic-bezier(0.16, 1, 0.3, 1);
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
[data-theme="dark"] {
  --color-bg: #0d1117;
  --color-surface: #161b22;
  --color-surface-2: #21262d;
  --color-surface-3: #30363d;
  --color-border: rgba(255,255,255,0.08);
  --color-text: #e6edf3;
  --color-text-muted: #8b949e;
  --color-text-faint: #484f58;
  --color-primary: #58a6ff;
  --color-primary-bg: rgba(88,166,255,0.08);
  --color-green: #3fb950;
  --color-green-bg: rgba(63,185,80,0.08);
  --color-orange: #f0883e;
  --color-orange-bg: rgba(240,136,62,0.08);
  --color-purple: #bc8cff;
  --color-purple-bg: rgba(188,140,255,0.08);
  --color-yellow: #d29922;
  --color-yellow-bg: rgba(210,153,34,0.08);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.4);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.5);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.7;
  padding: var(--space-8) var(--space-4);
}
.container { max-width: 860px; margin: 0 auto; }
.section-title {
  display: flex; align-items: center; gap: var(--space-3);
  font-size: var(--text-lg); font-weight: 700;
  color: var(--color-text);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-6);
}
.section-title .icon { font-size: 1.2em; }
/* ── Architecture table ── */
.arch-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
  margin-bottom: var(--space-10);
}
@media (max-width: 640px) { .arch-grid { grid-template-columns: 1fr; } }
.arch-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
}
.arch-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: rgba(88,166,255,0.25);
}
.arch-card-header {
  display: flex; align-items: center; gap: var(--space-2);
  margin-bottom: var(--space-3);
}
.arch-card-icon {
  width: 32px; height: 32px;
  border-radius: var(--radius-md);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0;
}
.arch-card-title { font-size: var(--text-sm); font-weight: 700; color: var(--color-text); }
.arch-card-subtitle { font-size: var(--text-xs); color: var(--color-text-muted); margin-top: 1px; }
.arch-badge-list { display: flex; flex-direction: column; gap: var(--space-2); }
.arch-badge {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: var(--text-xs); color: var(--color-text-muted);
}
.arch-badge::before {
  content: ''; width: 6px; height: 6px;
  border-radius: 50%; flex-shrink: 0;
}
.card-blue  .arch-card-icon { background: var(--color-primary-bg); color: var(--color-primary); }
.card-blue  .arch-badge::before { background: var(--color-primary); }
.card-green .arch-card-icon { background: var(--color-green-bg); color: var(--color-green); }
.card-green .arch-badge::before { background: var(--color-green); }
.card-orange .arch-card-icon { background: var(--color-orange-bg); color: var(--color-orange); }
.card-orange .arch-badge::before { background: var(--color-orange); }
.card-purple .arch-card-icon { background: var(--color-purple-bg); color: var(--color-purple); }
.card-purple .arch-badge::before { background: var(--color-purple); }
.skills-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-3); margin-bottom: var(--space-10);
}
.skill-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  display: flex; align-items: flex-start; gap: var(--space-3);
}
.skill-dot { width: 8px; height: 8px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
.skill-body { }
.skill-name { font-size: var(--text-sm); font-weight: 600; color: var(--color-text); }
.skill-desc { font-size: var(--text-xs); color: var(--color-text-muted); margin-top: 2px; }
.cert-row {
  display: flex; gap: var(--space-2); flex-wrap: wrap;
  margin-top: var(--space-4); margin-bottom: var(--space-10);
}
.cert-badge {
  font-size: var(--text-xs); font-weight: 600;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-surface-2);
  color: var(--color-text-muted);
}
.roadmap-list {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-3); margin-bottom: var(--space-10);
}
.roadmap-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-5);
  display: flex; align-items: center; gap: var(--space-3);
}
.roadmap-icon { font-size: 1.3rem; }
.roadmap-text { }
.roadmap-label { font-size: var(--text-sm); font-weight: 600; color: var(--color-text); }
.roadmap-status {
  font-size: var(--text-xs); font-weight: 600; font-family: var(--font-mono);
  margin-top: 2px; color: var(--color-yellow);
}
.deploy-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: var(--space-10);
}
.deploy-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  background: var(--color-surface-2);
  border-bottom: 1px solid var(--color-border);
}
.deploy-title {
  display: flex; align-items: center; gap: var(--space-2);
  font-size: var(--text-sm); font-weight: 600; color: var(--color-text);
}
.deploy-tag {
  font-size: var(--text-xs); font-weight: 600; font-family: var(--font-mono);
  background: var(--color-green-bg); color: var(--color-green);
  padding: 2px var(--space-2); border-radius: var(--radius-sm);
}
.code-block {
  font-family: var(--font-mono); font-size: var(--text-xs);
  line-height: 1.9; padding: var(--space-6);
  overflow-x: auto; color: #e6edf3;
}
.code-line { display: flex; gap: var(--space-3); align-items: baseline; }
.code-line-num { color: var(--color-text-faint); user-select: none; min-width: 1.5ch; text-align: right; }
.code-cmd { color: #79c0ff; }
.code-arg { color: #a5d6ff; }
.code-comment { color: #6e7681; font-style: italic; }
.code-step { color: #3fb950; font-weight: 600; }
.deploy-footer {
  padding: var(--space-3) var(--space-6);
  border-top: 1px solid var(--color-border);
  font-size: var(--text-xs); color: var(--color-text-muted);
  display: flex; align-items: center; gap: var(--space-2);
}
.readme-footer {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-6);
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-4);
}
.footer-author { font-size: var(--text-sm); color: var(--color-text-muted); }
.footer-author strong { color: var(--color-text); }
.footer-links { display: flex; gap: var(--space-4); }
.footer-links a {
  font-size: var(--text-xs); font-weight: 600;
  color: var(--color-primary); text-decoration: none;
  transition: opacity var(--transition);
}
.footer-links a:hover { opacity: 0.75; }
.section { margin-bottom: var(--space-10); }

</style>
</head>
<body>
<div class="container">

  <!-- ── Architecture Highlights ── -->
  <div class="section">
    <div class="section-title">
      <span class="icon">🏗️</span> Architecture Highlights
    </div>
    <div class="arch-grid">
      <div class="arch-card card-blue">
        <div class="arch-card-header">
          <div class="arch-card-icon">⚙️</div>
          <div>
            <div class="arch-card-title">Custom Metadata Driven</div>
            <div class="arch-card-subtitle">Zero-hardcode architecture</div>
          </div>
        </div>
        <div class="arch-badge-list">
          <div class="arch-badge">No-deployment content updates</div>
          <div class="arch-badge">Business-managed via Admin UI</div>
        </div>
      </div>
      <div class="arch-card card-green">
        <div class="arch-card-header">
          <div class="arch-card-icon">🧱</div>
          <div>
            <div class="arch-card-title">Service Layer Pattern</div>
            <div class="arch-card-subtitle">Clean UI / business separation</div>
          </div>
        </div>
        <div class="arch-badge-list">
          <div class="arch-badge">Fully testable Apex controllers</div>
          <div class="arch-badge">Enterprise-grade maintainability</div>
        </div>
      </div>
      <div class="arch-card card-orange">
        <div class="arch-card-header">
          <div class="arch-card-icon">⚡</div>
          <div>
            <div class="arch-card-title">Bulkified & Optimized Apex</div>
            <div class="arch-card-subtitle">Governor limit safe</div>
          </div>
        </div>
        <div class="arch-badge-list">
          <div class="arch-badge">Handles 100k+ records safely</div>
          <div class="arch-badge">Optimized SOQL & DML patterns</div>
        </div>
      </div>
      <div class="arch-card card-purple">
        <div class="arch-card-header">
          <div class="arch-card-icon">🔒</div>
          <div>
            <div class="arch-card-title">Guest User Optimized</div>
            <div class="arch-card-subtitle">Public Experience Site ready</div>
          </div>
        </div>
        <div class="arch-badge-list">
          <div class="arch-badge">Secure data exposure in LWR</div>
          <div class="arch-badge">Zero-vulnerability public access</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Skills Demonstrated ── -->
  <div class="section">
    <div class="section-title">
      <span class="icon">🎯</span> Architect Skills Demonstrated
    </div>
    <div class="skills-grid">
      <div class="skill-item">
        <div class="skill-dot" style="background:#58a6ff"></div>
        <div class="skill-body">
          <div class="skill-name">Metadata-Driven Development</div>
          <div class="skill-desc">Production-grade dynamic content systems</div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-dot" style="background:#3fb950"></div>
        <div class="skill-body">
          <div class="skill-name">LWR + Experience Cloud</div>
          <div class="skill-desc">End-to-end site architecture mastery</div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-dot" style="background:#f0883e"></div>
        <div class="skill-body">
          <div class="skill-name">Enterprise Solution Design</div>
          <div class="skill-desc">Security, performance & maintainability focus</div>
        </div>
      </div>
      <div class="skill-item">
        <div class="skill-dot" style="background:#bc8cff"></div>
        <div class="skill-body">
          <div class="skill-name">Salesforce Best Practices</div>
          <div class="skill-desc">Bulkification, service layers, guest security</div>
        </div>
      </div>
    </div>
    <div class="cert-row">
      <span class="cert-badge">🏅 Platform Developer I/II</span>
      <span class="cert-badge">🏅 Experience Cloud Consultant</span>
      <span class="cert-badge">🏅 Agentforce Specialist</span>
      <span class="cert-badge">🏅 Data Cloud Consultant</span>
    </div>
  </div>

  <!-- ── Roadmap ── -->
  <div class="section">
    <div class="section-title">
      <span class="icon">🔮</span> Planned Enhancements
    </div>
    <div class="roadmap-list">
      <div class="roadmap-item">
        <div class="roadmap-icon">🎨</div>
        <div class="roadmap-text">
          <div class="roadmap-label">Dark / Light Mode Toggle</div>
          <div class="roadmap-status">◉ Planned</div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="roadmap-icon">📝</div>
        <div class="roadmap-text">
          <div class="roadmap-label">CMS Blog Section</div>
          <div class="roadmap-status">◉ Planned</div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="roadmap-icon">📊</div>
        <div class="roadmap-text">
          <div class="roadmap-label">Real-time Analytics</div>
          <div class="roadmap-status">◉ Planned</div>
        </div>
      </div>
      <div class="roadmap-item">
        <div class="roadmap-icon">🌍</div>
        <div class="roadmap-text">
          <div class="roadmap-label">Multi-language Support</div>
          <div class="roadmap-status">◉ Planned</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Deploy ── -->
  <div class="section">
    <div class="section-title">
      <span class="icon">🚀</span> Deploy in 60 Seconds
    </div>
    <div class="deploy-card">
      <div class="deploy-header">
        <div class="deploy-title">
          <span>⬛</span> Terminal
        </div>
        <span class="deploy-tag">bash</span>
      </div>
      <div class="code-block">
        <div class="code-line">
          <span class="code-line-num">1</span>
          <span><span class="code-comment"># Clone & Authenticate</span></span>
        </div>
        <div class="code-line">
          <span class="code-line-num">2</span>
          <span><span class="code-cmd">git</span> <span class="code-arg">clone &lt;repo-url&gt; &amp;&amp; cd portfolio</span></span>
        </div>
        <div class="code-line">
          <span class="code-line-num">3</span>
          <span><span class="code-cmd">sf</span> <span class="code-arg">org login web --alias portfolio-org</span></span>
        </div>
        <div class="code-line"><span class="code-line-num">&nbsp;</span></div>
        <div class="code-line">
          <span class="code-line-num">4</span>
          <span><span class="code-comment"># Deploy & Load Data</span></span>
        </div>
        <div class="code-line">
          <span class="code-line-num">5</span>
          <span><span class="code-cmd">sf</span> <span class="code-arg">project deploy start</span></span>
        </div>
        <div class="code-line">
          <span class="code-line-num">6</span>
          <span><span class="code-cmd">sf</span> <span class="code-arg">data tree import --plan ./data/sample.json</span></span>
        </div>
        <div class="code-line"><span class="code-line-num">&nbsp;</span></div>
        <div class="code-line">
          <span class="code-line-num">7</span>
          <span><span class="code-comment"># Activate Experience Site → Done! 🎉</span></span>
        </div>
      </div>
      <div class="deploy-footer">
        📦 Prerequisites: Salesforce Org with Experience Cloud license &nbsp;·&nbsp; VS Code + Salesforce Extension Pack
      </div>
    </div>
  </div>

  <!-- ── Footer ── -->
  <div class="readme-footer">
    <div class="footer-author">
      Architected with ❤️ by <strong>Venkatesh M</strong> &nbsp;·&nbsp; Salesforce Developer/Architect &nbsp;·&nbsp; Capgemini India
    </div>
    <div class="footer-links">
      <a href="#" target="_blank">LinkedIn</a>
      <a href="#" target="_blank">Trailhead</a>
      <a href="#" target="_blank">GitHub</a>
    </div>
  </div>

</div>
</body>
</html>