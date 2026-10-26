import React from 'react';
import { User, Award, GraduationCap, MapPin, CheckCircle2, Sparkles, Database, Server, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Engineering Foundations & <span className="gradient-text">Practical Impact</span>
          </h2>
          <p className="section-subtitle">
            A background combining strong computer science principles, hands-on backend system engineering, 
            and data analysis workflows.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Main Content Card */}
          <div className="about-text-card">
            <div className="about-paragraphs">
              {personalInfo.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-focus-areas">
              <h4 className="focus-heading">Core Focus Areas</h4>
              <div className="focus-tags">
                <div className="focus-tag-item">
                  <Server size={15} className="focus-icon" />
                  <span>Java Backend & RESTful Services</span>
                </div>
                <div className="focus-tag-item">
                  <Database size={15} className="focus-icon" />
                  <span>Database Design & JPA/Hibernate</span>
                </div>
                <div className="focus-tag-item">
                  <Brain size={15} className="focus-icon" />
                  <span>Data Pipelines & Machine Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Highlights Column */}
          <div className="about-stats-column">
            <div className="stats-grid">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-detail">{stat.detail}</div>
                </div>
              ))}
            </div>

            {/* Quick Academic Card */}
            <div className="academic-highlight-card">
              <div className="academic-icon-box">
                <GraduationCap size={22} />
              </div>
              <div className="academic-content">
                <span className="academic-badge">Academic Status</span>
                <h4 className="academic-title">BE in Computer Science Engineering</h4>
                <p className="academic-institution">International Institute of Information Technology, Pune</p>
                <div className="academic-meta">
                  <span className="academic-score">CGPA: <strong>9.16</strong></span>
                  <span className="academic-timeline">2023 – 2027</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
