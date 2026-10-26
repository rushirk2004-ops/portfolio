# Rushikesh Kunde — Developer Portfolio

A modern, high-performance, and responsive personal portfolio website built with **React**, **Vite**, and **Modern CSS**. Tailored specifically for **Software Developer**, **Java Backend Developer**, **Python Developer**, and **Machine Learning** roles.

![Portfolio Preview Banner](public/favicon.svg)

---

## 🌟 Highlights & Features

- **Modern Dark Aesthetic**: Deep navy/slate background (`#0a0f1d`) with vibrant cyan, indigo, and emerald accents.
- **Section Architecture**:
  - **Hero**: Clean introduction, availability status badge, direct action buttons (View Projects, Download Resume, Contact Me), and an interactive developer code terminal visual.
  - **About Me**: Narrative background, academic standing (9.16 CGPA at IIIT Pune), key metrics, and core focus areas.
  - **Technical Skills**: Verified skill cards categorizing Java Backend, ML & Data Analysis, Databases, Tools, Testing, and CS Core Fundamentals.
  - **Projects**: Cards for *Movie Recommendation System*, *Attendance Tracker System*, and *Online Shopping Cart* with category filters, technology tags, and repository links.
  - **Internship Experience**: Professional timeline detailing contributions as a Web Developer Intern at Appwizer Solution (10,000+ records scraped, 60% automation).
  - **Education**: Detailed academic achievements from BE (CSE) at IIIT Pune to Higher Secondary and Secondary Education.
  - **Contact**: Direct email client trigger, copy-to-clipboard email utility, and working social links for GitHub and LinkedIn.
- **100% Responsive**: Tailored layouts for smartphones, tablets, laptops, and ultra-wide displays.
- **Lightweight & Fast**: Powered by Vite and pure CSS modules without heavy UI libraries.

---

## 📂 Project Directory Structure

```
portfolio/
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon
│   └── resume.pdf             # Place your actual Resume PDF here
├── src/
│   ├── components/            # Modular React Components
│   │   ├── Navbar.jsx         # Header navigation & mobile drawer
│   │   ├── Hero.jsx           # Hero banner & interactive code visual
│   │   ├── About.jsx          # Bio, metrics & academic highlights
│   │   ├── Skills.jsx         # Categorized technical competencies
│   │   ├── Projects.jsx       # Featured project showcase & filtering
│   │   ├── Experience.jsx     # Appwizer Solution internship timeline
│   │   ├── Education.jsx      # IIIT Pune and school credentials
│   │   ├── Contact.jsx        # Direct mail dispatcher & social profiles
│   │   └── Footer.jsx         # Footer & quick navigation
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all portfolio data
│   ├── styles/                # Clean, component-scoped CSS styles
│   │   ├── index.css          # Design tokens, variables & base styles
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Experience.css
│   │   ├── Education.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx                # Main application component
│   └── main.jsx               # React entry point
├── index.html                 # HTML template with SEO & Open Graph meta tags
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # Documentation and deployment guide
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (installed with Node)

### Installation
1. Clone or navigate into the portfolio directory:
   ```bash
   cd d:/portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📄 Updating Your Resume PDF

The project is pre-configured to serve your resume directly from:
```
public/resume.pdf
```
**To update your resume**:
1. Export your latest resume as a `.pdf` file.
2. Rename the file to `resume.pdf`.
3. Copy/replace it at `d:\portfolio\public\resume.pdf`.
4. Both the **"Resume"** navbar button and the **"Download Resume"** hero button will immediately serve your updated resume!

---

## 🔧 Updating Projects & Content

All information is managed in one central file:
```
src/data/portfolioData.js
```
- **To update GitHub repository URLs**: Change the `githubUrl` field under each project item in `projects`.
- **To add a new project**: Simply copy an existing object in `projects` array and add your title, category, description, technologies, and GitHub link.
- **To add new skills or certifications**: Add them to the corresponding list in `skillCategories`.

---

## 🌐 Free Deployment Guide

### Deploying to Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Rushikesh Kunde portfolio"
   git branch -M main
   git remote add origin https://github.com/rushirk2004-ops/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New"** > **"Project"**.
   - Select your `portfolio` repository.
   - Vercel automatically detects **Vite**:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **"Deploy"**.
   - Your live website will be up with an SSL domain (e.g. `https://rushikesh-kunde.vercel.app`) in under 1 minute!

---

## 📬 Contact Form Configuration

- **Default Behavior**: When a visitor fills out the contact form and clicks **"Send via Email Client"**, it launches their email application (Gmail, Outlook, Apple Mail) with the subject and message pre-filled to `rushikeshkunde764@gmail.com`.
- **Formspree (Optional)**: If you would like background form submissions sent directly to your inbox without opening the user's mail client, create a free form at [formspree.io](https://formspree.io), copy your form ID, and update the form endpoint in `src/components/Contact.jsx`.

---

## 👤 Author

**Rushikesh Kunde**  
- **Email**: [rushikeshkunde764@gmail.com](mailto:rushikeshkunde764@gmail.com)  
- **LinkedIn**: [rushikesh-kunde-63678a301](https://www.linkedin.com/in/rushikesh-kunde-63678a301/)  
- **GitHub**: [@rushirk2004-ops](https://github.com/rushirk2004-ops)  
- **Location**: Pune, Maharashtra, India
