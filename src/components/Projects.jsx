import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Code, 
  Database,
  ArrowUpRight,
  Search,
  BookMarked,
  Filter
} from 'lucide-react';
import { projects, allGithubRepositories, personalInfo } from '../data/portfolioData';
import '../styles/Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [repoSearch, setRepoSearch] = useState('');
  const [repoLangFilter, setRepoLangFilter] = useState('All');
  const [showAllRepos, setShowAllRepos] = useState(false);

  const filterOptions = ['All', 'Backend & Java', 'Machine Learning', 'Full-Stack'];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Backend & Java') {
      return project.category.includes('Backend') || project.technologies.includes('Java') || project.technologies.includes('Spring Boot');
    }
    if (activeFilter === 'Machine Learning') {
      return project.category.includes('Machine Learning') || project.technologies.includes('Scikit-learn') || project.technologies.includes('Python');
    }
    if (activeFilter === 'Full-Stack') {
      return project.category.toLowerCase().includes('full-stack');
    }
    return true;
  });

  const uniqueLanguages = ['All', 'Java', 'Python', 'JavaScript', 'TypeScript'];

  const filteredRepos = allGithubRepositories.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(repoSearch.toLowerCase()) || 
                          repo.desc.toLowerCase().includes(repoSearch.toLowerCase()) ||
                          repo.language.toLowerCase().includes(repoSearch.toLowerCase());
    const matchesLang = repoLangFilter === 'All' || repo.language.toLowerCase().includes(repoLangFilter.toLowerCase());
    return matchesSearch && matchesLang;
  });

  const displayedRepos = showAllRepos ? filteredRepos : filteredRepos.slice(0, 8);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Project Portfolio</span>
          </div>
          <h2 className="section-title">
            Engineered <span className="gradient-text">Systems & 50+ Projects</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive catalog of 50+ applications, microservices, machine learning models, 
            and automated data pipelines built and deployed.
          </p>
        </div>

        {/* Featured Projects Filter Tabs */}
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

        {/* Featured Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
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
                    <span>View on GitHub</span>
                    <ArrowUpRight size={14} className="action-arrow" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 50+ Repositories Explorer Section */}
        <div className="repo-explorer-container">
          <div className="repo-explorer-header">
            <div>
              <div className="repo-pill-badge">
                <BookMarked size={14} />
                <span>GitHub Repositories Catalog</span>
              </div>
              <h3 className="repo-explorer-title">
                Explore 50+ Repositories & Implementations
              </h3>
              <p className="repo-explorer-desc">
                Browse through projects, utility packages, algorithms, and microservices on GitHub.
              </p>
            </div>

            {/* Search Box */}
            <div className="repo-search-wrapper">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search repositories..."
                value={repoSearch}
                onChange={(e) => setRepoSearch(e.target.value)}
                className="repo-search-input"
              />
            </div>
          </div>

          {/* Language filter pills */}
          <div className="repo-lang-filters">
            {uniqueLanguages.map(lang => (
              <button
                key={lang}
                onClick={() => setRepoLangFilter(lang)}
                className={`repo-lang-btn ${repoLangFilter === lang ? 'active' : ''}`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Repositories Cards Grid */}
          <div className="repos-grid">
            {displayedRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-mini-card"
              >
                <div className="repo-mini-top">
                  <div className="repo-mini-title-wrap">
                    <BookMarked size={15} className="repo-icon" />
                    <span className="repo-mini-name">{repo.name}</span>
                  </div>
                  <ArrowUpRight size={14} className="repo-arrow-icon" />
                </div>
                
                <p className="repo-mini-desc">{repo.desc}</p>
                
                <div className="repo-mini-footer">
                  <span className={`repo-lang-tag ${repo.language.toLowerCase().replace(/[^a-z]/g, '')}`}>
                    <span className="lang-dot"></span>
                    {repo.language}
                  </span>
                  <span className="repo-view-link">View Repo</span>
                </div>
              </a>
            ))}
          </div>

          {/* Toggle Show More Repositories */}
          {filteredRepos.length > 8 && (
            <div className="repo-toggle-wrap">
              <button
                onClick={() => setShowAllRepos(!showAllRepos)}
                className="btn btn-secondary btn-sm"
              >
                {showAllRepos ? 'Show Less Repositories' : `View All (${filteredRepos.length}) Repositories`}
              </button>
            </div>
          )}
        </div>

        {/* GitHub profile CTA card */}
        <div className="projects-github-banner">
          <div className="banner-content">
            <div className="banner-icon-box">
              <Github size={28} />
            </div>
            <div>
              <h4 className="banner-title">50+ Repositories Live on GitHub</h4>
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
            <span>Visit Full GitHub Profile</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
