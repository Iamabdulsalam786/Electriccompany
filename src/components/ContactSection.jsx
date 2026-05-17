"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium AJAX submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="container-fluid premium-contact-section py-5 position-relative overflow-hidden bg-white">
      <div className="container py-5 position-relative" style={{ zIndex: 10 }}>
        <div className="row g-5 align-items-center">
          {/* Left Column: Direct Connection Info & Map */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="pe-lg-3">
              <div className="premium-tag-chip mb-3" style={{ background: "rgba(217, 119, 6, 0.08)", border: "1px solid rgba(217, 119, 6, 0.12)", color: "#b45309" }}>
                <i className="fas fa-envelope"></i>
                <span>Get In Touch</span>
              </div>
              <h1 className="display-4 text-dark fw-bold mb-4" style={{ lineHeight: "1.2" }}>
                Illuminate Your Message & Get In Contact
              </h1>
              <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                Whether you have an emergency electrical requirement or need a consultation on complex factory automation layouts, our engineering desk is ready to assist.
              </p>

              {/* Direct Premium Connection Info Cards */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light border rounded-xl" style={{ borderRadius: "16px" }}>
                    <div className="d-flex align-items-center justify-content-center bg-primary/10 text-primary me-3" style={{ width: "45px", height: "45px", borderRadius: "12px", backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                      <i className="fas fa-phone-alt fa-lg"></i>
                    </div>
                    <div>
                      <span className="text-muted small d-block">Hotline Support</span>
                      <strong className="text-dark" style={{ fontSize: "0.95rem" }}>+1 (555) 123-4567</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center p-3 bg-light border rounded-xl" style={{ borderRadius: "16px" }}>
                    <div className="d-flex align-items-center justify-content-center bg-primary/10 text-primary me-3" style={{ width: "45px", height: "45px", borderRadius: "12px", backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                      <i className="fas fa-envelope-open fa-lg"></i>
                    </div>
                    <div>
                      <span className="text-muted small d-block">Engineering Desk</span>
                      <strong className="text-dark" style={{ fontSize: "0.95rem" }}>desk@electrasol.com</strong>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map decorated with gold borders */}
              <div className="overflow-hidden shadow-sm p-2 bg-light border rounded-xl" style={{ borderRadius: "24px" }}>
                <iframe
                  className="w-100"
                  style={{ height: "240px", borderRadius: "18px", border: "none" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form inside Light Glass Card */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
            <div className="glassy-contact-card-light p-5 position-relative">
              {isSuccess ? (
                /* Premium Submission Success State */
                <div className="text-center py-5 animate__animated animate__fadeIn">
                  <div className="d-flex align-items-center justify-content-center mx-auto mb-4 bg-success/15 border border-success/30 text-success rounded-circle" style={{ width: "80px", height: "80px", backgroundColor: "rgba(16, 185, 129, 0.1)" }}>
                    <i className="fas fa-check-circle fa-3x" style={{ color: "#10b981" }}></i>
                  </div>
                  <h3 className="text-dark fw-bold mb-3">Transmission Successful</h3>
                  <p className="text-secondary px-3" style={{ fontSize: "1.02rem", lineHeight: "1.65" }}>
                    Thank you! Your message has been encrypted and securely transmitted. Our system engineering desk will reach out to you within 24 hours.
                  </p>
                  <button 
                    className="btn btn-outline-primary mt-4 py-2 px-4" 
                    style={{ borderRadius: "10px", borderColor: "rgba(217, 119, 6, 0.25)" }}
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form Display State */
                <div>
                  <h4 className="text-dark fw-bold mb-4" style={{ fontSize: "1.25rem" }}>
                    Send Us A Secure Message
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Name field */}
                      <div className="col-lg-12 col-xl-6">
                        <label htmlFor="name" className="premium-form-label-light">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control premium-form-control-light" 
                          id="name" 
                          placeholder="e.g. John Doe" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      {/* Email field */}
                      <div className="col-lg-12 col-xl-6">
                        <label htmlFor="email" className="premium-form-label-light">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control premium-form-control-light" 
                          id="email" 
                          placeholder="e.g. john@example.com" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Phone field */}
                      <div className="col-lg-12 col-xl-6">
                        <label htmlFor="phone" className="premium-form-label-light">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control premium-form-control-light" 
                          id="phone" 
                          placeholder="e.g. +1 555-0199" 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Project field */}
                      <div className="col-lg-12 col-xl-6">
                        <label htmlFor="project" className="premium-form-label-light">Project Type</label>
                        <input 
                          type="text" 
                          className="form-control premium-form-control-light" 
                          id="project" 
                          placeholder="e.g. Grid Overhaul" 
                          value={formData.project}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Subject field */}
                      <div className="col-12">
                        <label htmlFor="subject" className="premium-form-label-light">Subject</label>
                        <input 
                          type="text" 
                          className="form-control premium-form-control-light" 
                          id="subject" 
                          placeholder="e.g. Consultation Request" 
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Message field */}
                      <div className="col-12">
                        <label htmlFor="message" className="premium-form-label-light">Message Details</label>
                        <textarea 
                          className="form-control premium-form-control-light" 
                          placeholder="Describe your technical requirements here..." 
                          id="message" 
                          style={{ height: "125px" }}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 mt-4">
                        <button 
                          type="submit" 
                          className="btn gold-glow-btn w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span>Transmitting Details...</span>
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane"></i>
                              <span>Send Encrypted Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
