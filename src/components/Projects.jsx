import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Code, 
  Database,
  ArrowUpRight 
} from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import '../styles/Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Backend & Java', 'Machine Learning', 'Full-Stack'];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Backend & Java') return project.technologies.includes('Java') || project.technologies.includes('Spring Boot');
    if (activeFilter === 'Machine Learning') return project.technologies.includes('Scikit-learn') || project.technologies.includes('Python');
    if (activeFilter === 'Full-Stack') return project.category.toLowerCase().includes('full-stack');
    return true;
  });

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Projects</span>
          </div>
          <h2 className="section-title">
            Engineered <span className="gradient-text">Systems & Solutions</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating production-grade backend design, database integration, security architectures, 
            and applied machine learning.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-tabs">
          {filterOptions.map(filter => (
            <button
              key={filter}
              className={`project-tab-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="project-card">
              
              <div className="project-card-top">
                <div className="project-badge-row">
                  <span className="project-category-tag">{project.category}</span>
                  <span className="project-highlight-tag">{project.highlight}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-card-bottom">
                <div className="project-tech-stack">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-project-code"
                    title={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    <span>GitHub Repository</span>
                    <ArrowUpRight size={14} className="action-arrow" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub profile CTA card */}
        <div className="projects-github-banner">
          <div className="banner-content">
            <div className="banner-icon-box">
              <Github size={28} />
            </div>
            <div>
              <h4 className="banner-title">Explore more repositories on GitHub</h4>
              <p className="banner-subtitle">
                Visit @rushirk2004-ops to view ongoing projects, DSA code implementations, and open-source contributions.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline banner-btn"
          >
            <span>View GitHub Profile</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
