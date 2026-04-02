"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import ProjectCard from "../../components/ProjectCard";
import CTASection from "../../components/CTASection";
import { PROJECTS } from "../../lib/data";

type Status = "All" | "Completed" | "Ongoing" | "Planned";
const STATUS_FILTERS: Status[] = ["All", "Completed", "Ongoing", "Planned"];

const PROJECT_STATS = [
  { num: "50+", label: "Completed Projects" },
  { num: "15+", label: "Ongoing Works" },
  { num: "8", label: "Counties Covered" },
  { num: "KES 2B+", label: "Project Value" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Status>("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.status === filter);

  return (
    <div className="page-enter">
      <PageHero
        tag="Our Portfolio"
        title={
          <>
            Projects &amp;{" "}
            <span style={{ color: "var(--gold)" }}>Portfolio</span>
          </>
        }
        subtitle="A showcase of our completed and ongoing work across Kenya and East Africa"
        breadcrumb="Projects"
      />

      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          {/* ── Filter Buttons ── */}
          <div
            style={{ display: "flex", gap: 10, marginBottom: 48, flexWrap: "wrap" }}
          >
            {STATUS_FILTERS.map((s) => (
              <button
                key={s}
                className={`filter-btn ${filter === s ? "active" : ""}`}
                onClick={() => setFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* ── Results Count ── */}
          <div
            style={{
              fontSize: 12,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 28,
            }}
          >
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </div>

          {/* ── Grid ── */}
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--muted)",
              }}
            >
              <p>No projects in this category yet.</p>
            </div>
          ) : (
            <div className="grid-3">
              {filtered.map((p, i) => (
                <ProjectCard key={i} project={p} alwaysShowOverlay />
              ))}
            </div>
          )}

          {/* ── Stats Bar ── */}
          <div
            style={{
              marginTop: 80,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 2,
              background: "var(--burg-dark)",
            }}
          >
            {PROJECT_STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "40px 24px",
                  textAlign: "center",
                  background: "rgba(0,0,0,0.2)",
                  borderRight:
                    i < PROJECT_STATS.length - 1
                      ? "1px solid rgba(201,168,76,0.15)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 36,
                    fontWeight: 900,
                    color: "var(--gold)",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "rgba(245,240,232,0.6)",
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Clients We Serve ── */}
          <div style={{ marginTop: 80 }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="tag">Who We Serve</div>
              <div className="gold-line" style={{ margin: "0 auto 24px" }} />
              <h2 className="heading-lg">Our Client Base</h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24,
              }}
            >
              {[
                { icon: "🏠", title: "Homeowners", desc: "Providing affordable access to high-quality construction materials and reliable housing solutions." },
                { icon: "🏗️", title: "Contractors & Developers", desc: "Serving as a reliable, integrated source for certified building materials and consistent on-time project logistics." },
                { icon: "🌾", title: "Farmers & Agribusinesses", desc: "Creating stable markets for agricultural products and offering training to enhance local farming capacity." },
                { icon: "🏛️", title: "Government Institutions", desc: "Delivering essential infrastructure and logistics support for public works and civil development projects." },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--dark3)",
                    border: "1px solid rgba(201,168,76,0.1)",
                    padding: "32px 28px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{c.icon}</div>
                  <div
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: 18,
                      color: "var(--white)",
                      marginBottom: 10,
                    }}
                  >
                    {c.title}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        tag="Start a Project"
        heading="Have a Project in Mind?"
        subtext="Whether it's a small residential build or large infrastructure — Alexon Group delivers with quality and speed."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </div>
  );
}
