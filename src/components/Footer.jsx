import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container">
        
        <div className="footer-top">
          
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon-box">
                <Terminal size={18} />
              </div>
              <span className="logo-text">
                Rushikesh <span className="logo-highlight">Kunde</span>
              </span>
            </div>
            <p className="footer-bio">
              Software Developer specializing in Java Backend, Spring Boot, REST APIs, and Machine Learning.
            </p>
            <div className="footer-location">
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-col-title">Navigation</h5>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-col-title">Profiles & Docs</h5>
            <ul className="footer-nav-list">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`}>
                  Email Directly
                </a>
              </li>
              <li>
                <a href="./resume.pdf" download="Rushikesh_Kunde_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Rushikesh Kunde. All rights reserved.
          </p>

          <p className="footer-crafted">
            Engineered with React, Vite & Clean CSS
          </p>

          <button 
            onClick={scrollToTop} 
            className="btn-back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
