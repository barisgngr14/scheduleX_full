
import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    
    <>
    
    <div className="contact-section">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, please contact us.</p>
        <div className="contact-form">
            <div className="email contact-icons">
                <i className="fas fa-envelope"></i>
                <h3>tapur601@gmail.com</h3>
            </div>
            <div className="phone contact-icons">
                <i className="fas fa-phone"></i>
                <h3>+90 533 333 33 33</h3>
            </div>
        </div>
    </div>
    
    </>

  );
}

export default ContactSection;