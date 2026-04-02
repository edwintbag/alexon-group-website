"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";

const CONTACT_INFO = [
  { icon: "📍", label: "Head Office", val: ["Ugunja Town, Siaya County, Kenya"] },
  { icon: "📞", label: "Phone Numbers", val: ["0726 966 073", "0701 381 197"] },
  { icon: "✉️", label: "Email Address", val: ["alexongroupltd@gmail.com","info@alexongroupltd.com"] },
  { icon: "🕐", label: "Business Hours", val: ["Monday – Saturday: 7:00 AM – 5:30 PM", "Sunday: By Appointment"] },
];

const ENQUIRY_TOPICS = [
  "Construction Quote",
  "Building Materials / Shop Order",
  "Equipment Hire",
  "Real Estate",
  "Logistics / Transport",
  "Agribusiness Partnership",
  "General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-enter">
      <PageHero
        tag="Get In Touch"
        title={
          <>
            Contact{" "}
            <span style={{ color: "var(--gold)" }}>Alexon Group</span>
          </>
        }
        subtitle="Ready to start your project? Our team is available to answer your questions and provide quotes."
        breadcrumb="Contact"
      />

      {/* ── Main Section ── */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64, marginBottom: 80 }}>
            {/* ── Contact Form ── */}
            <div>
              <div className="tag">Send a Message</div>
              <div className="gold-line" />
              <h2 className="heading-md" style={{ marginBottom: 32 }}>
                We'd Love to Hear From You
              </h2>

              {submitted ? (
                <div
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    padding: "48px 32px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: 22,
                      color: "var(--white)",
                      marginBottom: 10,
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: 14 }}>
                    Thank you for reaching out. We'll respond within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{ gap: 20 }}>
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" placeholder="Full name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" placeholder="07XX XXX XXX" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject / Service Enquiry</label>
                    <select className="form-select">
                      <option value="">Select a topic...</option>
                      {ENQUIRY_TOPICS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      style={{ minHeight: 160 }}
                      placeholder="Describe your project or question in detail..."
                      required
                    />
                  </div>

                  <button type="submit" className="btn-gold">
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* ── Contact Info ── */}
            <div>
              <div className="tag">Contact Information</div>
              <div className="gold-line" />
              <h2 className="heading-md" style={{ marginBottom: 32 }}>
                Our Contact Details
              </h2>

              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <div className="contact-info-label">{c.label}</div>
                    <div className="contact-info-val">
                      {c.val.map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Centered Google Maps Embed ── */}
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Find Us On Map
            </div>
            
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: "1px solid rgba(201,168,76,0.15)" }}>
              <iframe
                title="Alexon Group Location — Ugunja Town, Siaya County, Kenya"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128784.211293081!2d34.22979580533782!3d0.2249523424472817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f97542a77e8f1%3A0x3d9975c3101eba0d!2sALEXON%20GROUP%20LIMITED!5e0!3m2!1sen!2ske!4v1774982699537!5m2!1sen!2ske"
                width="100%" 
                height="450"
                style={{ border: 0, filter: "grayscale(40%) invert(8%)", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.google.com/?q=Ugunja+Siaya+Kenya"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 20,
                fontSize: 12,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
              }}
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ── Direct Call Strip ── */}
      <section
        style={{
          background: "var(--dark2)",
          padding: "60px 0",
          borderTop: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="heading-md" style={{ marginBottom: 8 }}>
            Prefer a Direct Call?
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: 28, fontSize: 14 }}>
            Our team is ready Monday to Saturday, 8am – 6pm EAT
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a href="tel:+254701381197" className="btn-primary">
              📞 0701381197
            </a>
            <a
              href="https://wa.me/254701381197"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ Strip ── */}
      <section className="section" style={{ background: "var(--dark3)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="tag">Quick Answers</div>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="heading-lg">Common Questions</h2>
          </div>
          {[
            { q: "What areas do you deliver to?", a: "We deliver across all counties in Kenya. For East African destinations, contact us for a custom freight quote." },
            { q: "How do I get a construction quote?", a: "Fill in the contact form above or call us directly. Our team will arrange a site visit within 48 hours." },
            { q: "What is the minimum order for materials?", a: "Minimum orders vary by product — check individual product pages in our shop for details." },
            { q: "Do you offer equipment hire on weekends?", a: "Yes, equipment hire is available seven days a week subject to availability. Contact us to check scheduling." },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                padding: "24px 0",
                borderBottom: "1px solid rgba(201,168,76,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: 17,
                  color: "var(--white)",
                  marginBottom: 10,
                }}
              >
                {faq.q}
              </div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}