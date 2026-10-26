import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';
import '../styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Consistent academic excellence with a strong foundation in Computer Science principles and analytical problem-solving.
          </p>
        </div>

        <div className="education-cards-list">
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="education-card">
              
              <div className="edu-card-left">
                <div className="edu-icon-badge">
                  <GraduationCap size={22} />
                </div>
                <div className="edu-period">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="edu-card-center">
                <div className="edu-header-row">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <span className={`edu-status-tag ${edu.status === 'Currently Pursuing' ? 'active' : ''}`}>
                    {edu.status}
                  </span>
                </div>
                
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-description">{edu.description}</p>

                <div className="edu-highlights">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="edu-highlight-item">
                      <CheckCircle size={14} className="highlight-icon" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="edu-card-right">
                <div className="edu-score-box">
                  <span className="score-title">Grade / Score</span>
                  <span className="score-number">{edu.score}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
