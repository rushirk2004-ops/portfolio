import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle, 
  ChevronRight, 
  TrendingUp, 
  Database, 
  Globe 
} from 'lucide-react';
import { internshipExperience } from '../data/portfolioData';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Work Experience</span>
          </div>
          <h2 className="section-title">
            Industry <span className="gradient-text">Internship Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development experience building automated pipelines, API integrations, and robust web systems.
          </p>
        </div>

        <div className="experience-timeline">
          {internshipExperience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="marker-dot">
                  <Briefcase size={16} />
                </div>
                <div className="marker-line"></div>
              </div>

              {/* Experience Card */}
              <div className="experience-card">
                
                <div className="exp-card-header">
                  <div className="exp-main-title">
                    <span className="exp-type-badge">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-row">
                      <Building2 size={16} className="exp-icon" />
                      <span className="exp-company">{exp.company}</span>
                    </div>
                  </div>

                  <div className="exp-meta-info">
                    <div className="exp-meta-badge">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="exp-meta-badge">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="exp-achievements-block">
                  <h4 className="achievements-heading">Key Contributions & Impact:</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((item, achievementIdx) => (
                      <li key={achievementIdx} className="achievement-item">
                        <div className="achievement-icon">
                          <CheckCircle size={16} />
                        </div>
                        <span className="achievement-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Applied in Role */}
                <div className="exp-skills-block">
                  <span className="skills-applied-label">Applied Technologies:</span>
                  <div className="exp-skills-pills">
                    {exp.skillsApplied.map(skill => (
                      <span key={skill} className="exp-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
