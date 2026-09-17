import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Is it free to list and exchange school supplies?",
      a: "Yes! Creating an account and listing your textbooks, calculators, or notebooks is completely free for all students."
    },
    {
      q: "Where is the best place to meet for pickup?",
      a: "We recommend public campus locations such as the Student Union Building, Campus Library lobby, or major campus quads."
    },
    {
      q: "How do I handle payments for paid items?",
      a: "Payment can be arranged directly between buyer and seller during pickup via cash or secure student mobile payment apps."
    },
    {
      q: "What should I do if an item is no longer available?",
      a: "Simply go to 'My Listings' in your profile menu and click the trash button to delete or mark the item as completed."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
  };

  return (
    <div className="contact-page container">
      <div className="contact-header">
        <h1>Help & Contact Support</h1>
        <p>Have questions, feedback, or need assistance? We're here to support your campus exchange experience.</p>
      </div>

      <div className="contact-layout">
        {/* Contact Form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          {submitted && (
            <div className="submitted-banner">
              ✅ Thank you! Your support ticket has been submitted. Our team will reply within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Campus Email *</label>
              <input
                id="email"
                type="email"
                placeholder="your.email@university.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Account Support">Account Support</option>
                <option value="Listing Help">Listing Help</option>
                <option value="Report an Issue">Report an Issue</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows="4"
                placeholder="How can we help you today?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="submit-contact-btn">
              Send Message →
            </button>
          </form>
        </div>

        {/* FAQ & Support Info Sidebar */}
        <div className="contact-info-col">
          <div className="support-info-card">
            <h3>Quick Support Info</h3>
            <div className="info-row">
              <span className="info-icon">✉️</span>
              <div>
                <strong>Support Email</strong>
                <p>support@schoolsuppliesexchange.edu</p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">📍</span>
              <div>
                <strong>Campus Help Center</strong>
                <p>Student Union Building, Room 204</p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-icon">⏰</span>
              <div>
                <strong>Hours</strong>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeFaq === index ? "active" : ""}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className="faq-question">
                    <strong>{faq.q}</strong>
                    <span>{activeFaq === index ? "−" : "+"}</span>
                  </div>
                  {activeFaq === index && <p className="faq-answer">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
