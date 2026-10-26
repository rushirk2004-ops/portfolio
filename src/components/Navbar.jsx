import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="logo-icon-box">
            <Terminal size={18} className="logo-icon" />
          </div>
          <span className="logo-text">
            Rushikesh <span className="logo-highlight">Kunde</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-actions">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link linkedin-link"
            aria-label="LinkedIn Profile"
            title="Connect on LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-link github-link"
            aria-label="GitHub Profile"
            title="View GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="./resume.pdf"
            download="Rushikesh_Kunde_Resume.pdf"
            className="btn btn-primary btn-sm resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileDown size={15} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-cta-item">
            <div className="mobile-social-row">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-mobile-social"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-mobile-social"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
            <a
              href="./resume.pdf"
              download="Rushikesh_Kunde_Resume.pdf"
              className="btn btn-primary btn-mobile-resume"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
