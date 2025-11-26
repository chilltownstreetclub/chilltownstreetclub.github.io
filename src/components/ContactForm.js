import React from 'react';
import '../scss/ContactForm.scss';
// Using inline SVG instead of lucide-react

export function ContactForm({ isOpen, onClose }) {
  const handleSubmit = () => {
    // Redirect to the contact form URL
    window.open('https://tr.ee/sKL8l3uMX7', '_blank', 'noopener,noreferrer');
    
    // Close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="contact-modal-content">
          <h2 className="contact-modal-title">Contact Us</h2>
          <p className="contact-modal-subtitle">
            Have a question or want to join us? Click below to fill out our contact form!
          </p>

          <div className="contact-form">
            <button 
              type="button"
              onClick={handleSubmit}
              className="contact-submit-btn"
            >
              Continue to Contact Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

