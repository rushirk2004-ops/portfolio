import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  BrainCircuit, 
  Database, 
  Cloud, 
  Cpu, 
  CheckCircle2, 
  Wrench,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import '../styles/Skills.css';

const iconMap = {
  Code2: Code2,
  Server: Server,
  BrainCircuit: BrainCircuit,
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu,
  CheckCircle2: CheckCircle2,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterOptions = ['All', ...skillCategories.map(cat => cat.category)];

  const displayedCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            A verified portfolio of technologies, development tools, and computer science fundamentals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedCategory(opt)}
              className={`skills-filter-btn ${selectedCategory === opt ? 'active' : ''}`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-categories-grid">
          {displayedCategories.map((group) => {
            const IconComponent = iconMap[group.icon] || Wrench;
            return (
              <div key={group.category} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-cat-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="skill-cat-title">{group.category}</h3>
                </div>

                <div className="skills-pill-wrap">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      <span className="skill-pill-bullet"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note for Recruiters */}
        <div className="skills-footer-notice">
          <div className="notice-badge">Verified Profile</div>
          <p className="notice-text">
            Strictly representing hands-on competencies acquired through academic coursework, internship tasks at Appwizer Solution, and personal backend/ML systems development.
          </p>
        </div>

      </div>
    </section>
  );
}
