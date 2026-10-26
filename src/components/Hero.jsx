import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Sparkles, 
  Code2, 
  Terminal,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Introduction & CTAs */}
        <div className="hero-content">
          <div className="hero-badge-group">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for Software & Backend Roles</span>
            </div>
            <div className="location-badge">
              <MapPin size={14} className="location-icon" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>.
          </h1>

          <h2 className="hero-headline">
            Software Developer <span className="headline-divider">|</span> Java Backend Developer <span className="headline-divider">|</span> Machine Learning Enthusiast
          </h2>

          <p className="hero-intro">
            Specialized in engineering robust backend applications, high-performance REST APIs, 
            database-driven systems, and machine learning solutions. Passionate about clean code, 
            system scalability, and efficient data processing workflows.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            
            <a 
              href={personalInfo.resumeUrl} 
              download="Rushikesh_Kunde_Resume.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              <Mail size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            <div className="social-links-list">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a 
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>

              <button 
                onClick={handleCopyEmail}
                className="copy-email-chip"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                <span className="email-text">{personalInfo.email}</span>
                {copiedEmail ? <Check size={14} className="copy-success-icon" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Developer Themed Interactive Visual / Profile */}
        <div className="hero-visual-wrapper">
          <div className="hero-card-glow"></div>
          
          <div className="developer-card">
            {/* Terminal Top Bar */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">rushikesh-profile.java</div>
              <div className="terminal-lang">
                <Code2 size={13} />
                <span>Java 17 / Spring Boot</span>
              </div>
            </div>

            {/* Profile Header Block */}
            <div className="profile-identity-box">
              <div className="profile-avatar-container">
                <div className="profile-avatar-fallback">
                  <span className="avatar-initials">RK</span>
                </div>
                <div className="profile-status-ring"></div>
              </div>
              
              <div className="profile-identity-info">
                <h3 className="profile-name">{personalInfo.name}</h3>
                <p className="profile-sub">BE in Computer Science Engineering</p>
                <span className="profile-college">IIIT Pune • CGPA 9.16</span>
              </div>
            </div>

            {/* Code / Architecture Snippet */}
            <div className="terminal-code-body">
              <div className="code-line">
                <span className="code-keyword">public class</span> <span className="code-class">SoftwareEngineer</span> &#123;
              </div>
              <div className="code-line indent">
                <span className="code-var">String</span> location = <span className="code-str">"Pune, Maharashtra, India"</span>;
              </div>
              <div className="code-line indent">
                <span className="code-var">String[]</span> coreStack = &#123;
              </div>
              <div className="code-line indent-2">
                <span className="code-str">"Java"</span>, <span className="code-str">"Spring Boot"</span>, <span className="code-str">"Python"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-str">"REST APIs"</span>, <span className="code-str">"MySQL"</span>, <span className="code-str">"Machine Learning"</span>
              </div>
              <div className="code-line indent">
                &#125;;
              </div>
              <div className="code-line indent">
                <span className="code-var">boolean</span> isOpenToOpportunities = <span className="code-bool">true</span>;
              </div>
              <div className="code-line">
                &#125;
              </div>
            </div>

            {/* Quick Feature Badges */}
            <div className="terminal-footer-tags">
              <div className="tech-chip">
                <CheckCircle2 size={12} className="chip-icon" />
                <span>REST Architecture</span>
              </div>
              <div className="tech-chip">
                <CheckCircle2 size={12} className="chip-icon" />
                <span>Scikit-Learn ML</span>
              </div>
              <div className="tech-chip">
                <CheckCircle2 size={12} className="chip-icon" />
                <span>MySQL & JPA</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
