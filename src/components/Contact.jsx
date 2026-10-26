import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone,
  Check, 
  Copy, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setIsPhoneCopied(true);
    setTimeout(() => setIsPhoneCopied(false), 2200);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill out all required fields.'
      });
      return;
    }

    // Direct mailto generation with pre-populated parameters
    const subject = encodeURIComponent(
      formData.subject 
        ? `[Portfolio Contact] ${formData.subject} - from ${formData.name}`
        : `[Portfolio Inquiry] From ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Trigger user's mail client directly
    window.location.href = mailtoUrl;

    setStatus({
      type: 'success',
      message: 'Draft opened in your email client! You can also email directly at ' + personalInfo.email
    });

    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="section-subtitle">
            Open for Software Engineering, Java Backend, and Machine Learning roles. 
            Feel free to reach out directly via email or LinkedIn.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="contact-info-panel">
            <h3 className="contact-info-title">Direct Channels</h3>
            <p className="contact-info-desc">
              Whether you have an open position, an engineering query, or would like to discuss my projects, I'd love to hear from you.
            </p>

            {/* Email Card */}
            <div className="contact-method-card">
              <div className="method-icon-box">
                <Mail size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="method-value">
                  {personalInfo.email}
                </a>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="btn-copy-action"
                title="Copy email address"
                aria-label="Copy email"
              >
                {isCopied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-method-card">
              <div className="method-icon-box">
                <Phone size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Phone / WhatsApp</span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="method-value">
                  {personalInfo.phone}
                </a>
              </div>
              <button 
                onClick={handleCopyPhone}
                className="btn-copy-action"
                title="Copy phone number"
                aria-label="Copy phone"
              >
                {isPhoneCopied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-method-card">
              <div className="method-icon-box">
                <MapPin size={22} />
              </div>
              <div className="method-details">
                <span className="method-label">Current Location</span>
                <span className="method-value-static">{personalInfo.location}</span>
              </div>
            </div>

            {/* Profiles */}
            <div className="contact-social-links">
              <span className="social-subheading">Professional Profiles</span>
              <div className="social-cards-grid">
                
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-profile-card linkedin-card"
                >
                  <Linkedin size={20} />
                  <div className="social-card-text">
                    <span className="platform-name">LinkedIn</span>
                    <span className="profile-handle">in/rushikesh-kunde-63678a301</span>
                  </div>
                  <ExternalLink size={14} className="social-external-icon" />
                </a>

                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-profile-card github-card"
                >
                  <Github size={20} />
                  <div className="social-card-text">
                    <span className="platform-name">GitHub</span>
                    <span className="profile-handle">@rushirk2004-ops</span>
                  </div>
                  <ExternalLink size={14} className="social-external-icon" />
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="contact-form-panel">
            <div className="form-panel-header">
              <MessageSquare size={18} className="panel-header-icon" />
              <div>
                <h4 className="form-panel-title">Send a Quick Message</h4>
                <p className="form-panel-hint">Generates an instant email draft with your inputs filled in.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Java Backend Developer Role Inquiry"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message or inquiry here..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status-alert ${status.type}`}>
                  {status.type === 'error' ? <AlertCircle size={16} /> : <Check size={16} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-submit">
                <Send size={16} />
                <span>Send via Email Client</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
