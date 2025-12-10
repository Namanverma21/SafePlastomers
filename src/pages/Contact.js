import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Configure EmailJS (set these in your .env file)
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      console.error('EmailJS environment variables are missing.');
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            message: formData.message,
            to_email: 'safeplastomer@gmail.com',
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-page-hero">
        <h1>CONTACT US</h1>
        <p>Get in Touch with Our Team</p>
      </div>
      <section className="contact-page-content">
        <div className="contact-page-container">
          <div className="contact-info">
            <h2>Get a Quote</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <h3>📍 Address</h3>
                <p>KHASRA NO.-74, KHEDLI IP-4,<br />BEGUMPUR, BAHADRABAD,<br />HARIDWAR-249402, UTTARAKHAND</p>
              </div>
              <div className="contact-detail-item">
                <h3>📞 Phone</h3>
                <p>+91-9359626881</p>
              </div>
              <div className="contact-detail-item">
                <h3>✉️ Email</h3>
                <p>safeplastomer@gmail.com</p>
              </div>
              <div className="contact-detail-item">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 123-456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="form-success">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="form-error">
                Sorry, something went wrong. Please try again later or reach us at safeplastomer@gmail.com.
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
              {!isSubmitting && <span className="arrow">→</span>}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;

