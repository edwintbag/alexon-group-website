"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import { JOBS } from "../../lib/data";

const CULTURE_POINTS = [
  { icon: "📈", title: "Growth Opportunities", desc: "We invest in our people through training and internal promotions as the company expands." },
  { icon: "🌍", title: "Meaningful Work", desc: "Your work directly contributes to building communities and feeding families across Kenya." },
  { icon: "🤝", title: "Collaborative Environment", desc: "A team that works together across divisions to solve real-world challenges." },
  { icon: "💰", title: "Competitive Compensation", desc: "Fair pay, performance bonuses, and benefits that reflect your contribution." },
];

/* ── Per-job expanded content ──────────────────────────────── */
const JOB_DETAILS: Record<string, { responsibilities: string[]; requirements: string[] }> = {
  "company-secretary-legal-advisor": {
    responsibilities: [
      "Draft and review contracts and agreements",
      "Provide legal advisory services",
      "Ensure regulatory compliance",
      "Maintain statutory records and filings",
      "Prepare board documentation and reports",
    ],
    requirements: [
      "LLB Degree",
      "Advocate of the High Court of Kenya",
      "CPS (K) certification preferred",
      "Minimum 5 years’ experience",
    ],
  },

  "operations-manager": {
    responsibilities: [
      "Oversee daily transport scheduling and fleet deployment",
      "Supervise drivers, plant operators, and support teams",
      "Ensure maintenance and compliance of vehicles and equipment",
      "Coordinate logistics between sites, quarry, and production units",
      "Manage IT systems and communication infrastructure",
      "Develop and enforce SOPs",
      "Monitor operational costs and efficiency",
    ],
    requirements: [
      "Bachelor’s Degree in Operations, Logistics, Engineering, or related field",
      "Minimum 5 years’ experience",
      "Strong leadership and coordination skills",
      "Experience in construction/logistics is an added advantage",
    ],
  },

  "finance-administration-manager": {
    responsibilities: [
      "Process accounts payable and receivable",
      "Support payroll preparation and processing",
      "Maintain petty cash and reconciliations",
      "Assist in preparation of financial reports",
      "Support statutory filings and compliance",
      "Maintain proper documentation systems",
    ],
    requirements: [
      "Diploma/Degree in Accounting, Finance, or related field",
      "CPA Part II is an added advantage",
      "2–3 years’ experience",
      "Strong attention to detail",
    ],
  },

  "finance-admin-officer": {
    responsibilities: [
      "Process accounts payable and receivable",
      "Support payroll preparation",
      "Maintain petty cash",
      "Assist in financial reporting",
      "Support compliance processes",
    ],
    requirements: [
      "Bachelor’s Degree in Finance/Accounting",
      "CPA Part II preferred",
      "2–3 years’ experience",
      "Strong organizational skills",
    ],
  },

  "concrete-products-supervisor": {
    responsibilities: [
      "Supervise batching, mixing, casting, and curing processes",
      "Ensure correct mix designs and production standards",
      "Conduct strength testing and quality checks",
      "Manage daily production output",
      "Maintain production records",
      "Oversee equipment maintenance",
      "Train production workers",
    ],
    requirements: [
      "Diploma in Civil Engineering or related field",
      "3–5 years’ experience in concrete production",
      "Strong knowledge of mix design",
      "Leadership skills",
    ],
  },

  "office-administrator-receptionist": {
    responsibilities: [
      "Manage reception and visitor experience",
      "Handle calls, emails, and correspondence",
      "Coordinate office administration",
      "Maintain records and filing systems",
    ],
    requirements: [
      "Diploma/Degree in Business Administration",
      "2–3 years’ experience",
      "Strong communication skills",
    ],
  },

  "marketing-executives": {
    responsibilities: [
      "Execute marketing campaigns",
      "Generate leads and engage clients",
      "Conduct activations and promotions",
      "Provide market feedback",
    ],
    requirements: [
      "Diploma/Degree in Marketing",
      "Minimum 2 years’ experience",
      "Strong communication and sales skills",
    ],
  },

  "tea-girl-office-cleaner": {
    responsibilities: [
      "Prepare and serve refreshments",
      "Maintain office cleanliness",
      "Support errands and office needs",
    ],
    requirements: [
      "KCSE Certificate",
      "Experience preferred",
      "High level of discipline and reliability",
    ],
  },

  "sales-marketing-manager": {
    responsibilities: [
      "Develop and implement marketing strategies",
      "Lead branding and communication efforts",
      "Conduct market research",
      "Oversee campaigns and track ROI",
      "Coordinate with sales and production teams",
      "Manage budgets and partnerships",
    ],
    requirements: [
      "Bachelor’s Degree in Marketing/Business",
      "5–7 years’ experience",
      "Strong leadership skills",
      "Proven campaign management experience",
    ],
  },
};
/** Derive a lookup key from a job title — "Site Engineer" → "site-engineer" */
function toKey(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ── Component ─────────────────────────────────────────────── */
export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<(typeof JOBS)[0] | null>(null);

  return (
    <div className="page-enter">
      <PageHero
        tag="Join Our Team"
        title={
          <>
            Build Your Career{" "}
            <span style={{ color: "var(--gold)" }}>With Alexon</span>
          </>
        }
        subtitle="Be part of a growing enterprise shaping East Africa's economic future"
        breadcrumb="Careers"
      />

      {/* ── Company Culture ── */}
      <section className="section" style={{ background: "var(--dark2)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: "center" }}>
            <div>
              <div className="tag">Our Culture</div>
              <div className="gold-line" />
              <h2 className="heading-lg" style={{ marginBottom: 32 }}>
                Why Work at Alexon Group?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {CULTURE_POINTS.map((c, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "rgba(123,28,44,0.2)",
                        border: "1px solid rgba(123,28,44,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--ff-head)",
                          fontSize: 16,
                          color: "var(--white)",
                          marginBottom: 4,
                        }}
                      >
                        {c.title}
                      </div>
                      <div
                        style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}
                      >
                        {c.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team culture"
                style={{ width: "100%", height: 460, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Job Listings ── */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div className="tag">Open Positions</div>
            <div className="gold-line" />
            <h2 className="heading-lg">Current Vacancies</h2>
            <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 12 }}>
              {JOBS.length} positions currently open
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {JOBS.map((job, i) => (
              <div key={i} className="job-card">
                <div>
                  <div className="job-type">{job.type}</div>
                  <div className="job-title">{job.title}</div>
                  <div className="job-meta">
                    {job.dept} &nbsp;·&nbsp; 📍 {job.location}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--muted)",
                      marginTop: 10,
                      lineHeight: 1.6,
                    }}
                  >
                    {job.desc}
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setActiveJob(job);
                      setTimeout(() => {
                        document
                          .getElementById("job-details-panel")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 50);
                    }}
                  >
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inline Job Details Panel ── */}
      {activeJob && (() => {
        const key = toKey(activeJob.title);
        const detail = JOB_DETAILS[key];
        return (
          <section
            id="job-details-panel"
            className="section"
            style={{ background: "var(--dark3)" }}
          >
            <div className="container" style={{ maxWidth: 860 }}>

              {/* Back button */}
              <button
                onClick={() => setActiveJob(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  marginBottom: 40,
                  padding: 0,
                  transition: "opacity .2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                ← Back to All Vacancies
              </button>

              {/* Header */}
              <div style={{ marginBottom: 40 }}>
                <div className="tag">{activeJob.dept}</div>
                <div className="gold-line" />
                <h2 className="heading-lg" style={{ marginBottom: 20 }}>
                  {activeJob.title}
                </h2>

                {/* Meta pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {[
                    { icon: "⏱️", text: activeJob.type },
                    { icon: "🏢", text: activeJob.dept },
                    { icon: "📍", text: activeJob.location },
                  ].map((m, mi) => (
                    <div
                      key={mi}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 14px",
                        background: "rgba(123,28,44,0.15)",
                        border: "1px solid rgba(123,28,44,0.3)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        color: "var(--muted)",
                      }}
                    >
                      <span>{m.icon}</span>
                      <span>{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full description */}
              <div style={{ marginBottom: 40 }}>
                <h3
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: 14,
                    paddingBottom: 10,
                    borderBottom: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  Role Overview
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>
                  {activeJob.desc} Alexon Group is looking for a motivated and
                  experienced professional to join our growing team in Ugunja,
                  Siaya County. This is an exciting opportunity to contribute to
                  East Africa&apos;s infrastructure development within a fast-growing,
                  integrated enterprise.
                </p>
              </div>

              {/* Responsibilities */}
              {detail && (
                <div style={{ marginBottom: 40 }}>
                  <h3
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: 18,
                      paddingBottom: 10,
                      borderBottom: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    Key Responsibilities
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {detail.responsibilities.map((r, ri) => (
                      <li
                        key={ri}
                        style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                      >
                        <span
                          style={{
                            width: 20,
                            height: 20,
                            background: "var(--burg, #821628)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                            fontSize: 10,
                            color: "#fff",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {detail && (
                <div style={{ marginBottom: 48 }}>
                  <h3
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: 18,
                      paddingBottom: 10,
                      borderBottom: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    Requirements
                  </h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {detail.requirements.map((r, ri) => (
                      <li
                        key={ri}
                        style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--gold)",
                            flexShrink: 0,
                            marginTop: 8,
                          }}
                        />
                        <span style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* How to Apply */}
              <div
                style={{
                  background: "var(--dark2)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  padding: 36,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: 20,
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(201,168,76,0.12)",
                  }}
                >
                  How to Apply
                </h3>

                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                  Send your CV and a brief cover letter explaining why you are the
                  right fit for this role to either of the addresses below.
                </p>

                {/* Email addresses */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
                  {["alexongroupltd@gmail.com", "info@alexongroupltd.com"].map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}?subject=Application for ${encodeURIComponent(activeJob.title)}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--gold)",
                        textDecoration: "none",
                        transition: "opacity .2s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <span style={{ fontSize: 16 }}>✉️</span>
                      {email}
                    </a>
                  ))}
                </div>

                {/* Subject line format */}
                <div
                  style={{
                    padding: "16px 20px",
                    background: "rgba(201,168,76,0.04)",
                    border: "1px solid rgba(201,168,76,0.1)",
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    Email Subject Line Format
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--white)",
                      fontFamily: "var(--ff-sub)",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;Application for {activeJob.title} — [Your Full Name]&rdquo;
                  </p>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: "var(--muted)",
                  }}
                >
                  <span style={{ fontSize: 16 }}>📞</span>
                  <span>Optional: call us on&nbsp;</span>
                  <a
                    href="tel:+254701381197"
                    style={{
                      fontWeight: 600,
                      color: "var(--gold)",
                      textDecoration: "none",
                      transition: "opacity .2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    0701 381 197
                  </a>
                </div>
              </div>

            </div>
          </section>
        );
      })()}

      {/* ── Growth Story ── */}
      <section className="section" style={{ background: "var(--dark2)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="tag">Our Growth</div>
          <div className="gold-line" style={{ margin: "0 auto 24px" }} />
          <h2 className="heading-lg" style={{ marginBottom: 20 }}>
            Growing Fast, Growing Together
          </h2>
          <p
            className="subtitle"
            style={{ maxWidth: 560, margin: "0 auto 48px" }}
          >
            Founded in 2025, Alexon Group is on an ambitious expansion path
            across Kenya and East Africa — and we need great people to grow with us.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 2,
              background: "var(--dark3)",
              border: "1px solid rgba(201,168,76,0.1)",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            {[
              { num: "4", label: "Business Divisions" },
              { num: "5+", label: "Active Job Categories" },
              { num: "Siaya", label: "HQ County, Kenya" },
              { num: "EAC", label: "Regional Ambition" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "32px 20px",
                  textAlign: "center",
                  borderRight:
                    i < 3 ? "1px solid rgba(201,168,76,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "var(--gold)",
                    marginBottom: 6,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
