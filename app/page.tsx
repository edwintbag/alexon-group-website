import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import HomeProductsSection from "../components/HomeProductsSection";
import GallerySection from "../components/GallerySection";
import NewsSection from "../components/NewsSection";
import { SERVICES, PROJECTS, TESTIMONIALS, STATS, TRUST_ITEMS } from "../lib/data";

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <HeroSlider />

      {/* ── Stats Strip ── */}
      <div className="stat-strip">
        <div className="container">
          <div className="stat-strip-inner">
            {STATS.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trust Bar ── */}
      <div
        style={{
          background: "var(--dark2)",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
          padding: "20px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {TRUST_ITEMS.map((t, i) => (
              <div key={i} className="trust-item">
                <span className="trust-icon">{t.icon}</span>
                <span className="trust-text">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About Preview ── */}
      <section className="section about-preview">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div className="about-image-stack">
              <img
                className="about-img-main"
                src="/images/alexon11.JPG"
                alt="Construction site"
              />
              <img
                className="about-img-accent"
                src="/images/alexon13.JPG"
                alt="Agriculture"
              />
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: 120,
                  height: 120,
                  background: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--ff-head)",
                      fontSize: 28,
                      fontWeight: 900,
                      color: "var(--dark)",
                      display: "block",
                    }}
                  >
                    2025
                  </span>
                  <small
                    style={{
                      fontSize: 9,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "rgba(10,10,10,0.7)",
                      display: "block",
                      fontWeight: 600,
                    }}
                  >
                    Founded
                  </small>
                </div>
              </div>
            </div>

            <div>
              <div className="tag">About Alexon Group</div>
              <div className="gold-line" />
              <h2 className="heading-lg" style={{ marginBottom: 24 }}>
                A Dynamic, Diversified Enterprise Built for Growth
              </h2>
              <p className="body-text" style={{ marginBottom: 20 }}>
                Founded in 2025 in Ugunja Town, Siaya County, Kenya, Alexon
                Group has rapidly evolved into a regional operator through the
                strategic integration of four essential economic sectors.
              </p>
              <p className="body-text" style={{ marginBottom: 32 }}>
                Our operational model is built on synergy — by controlling the
                supply chain from raw material production through to final
                delivery and application, we deliver end-to-end solutions that
                minimize risk, ensure quality, and enhance client value.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                  marginBottom: 36,
                }}
              >
                {[
                  "Agribusiness",
                  "Construction Materials",
                  "Real Estate Dev.",
                  "Supply Chain Logistics",
                ].map((p) => (
                  <div
                    key={p}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--gold)",
                        flexShrink: 0,
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--white2)",
                        fontWeight: 500,
                      }}
                    >
                      {p}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                Our Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-bg">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="tag">What We Do</div>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="heading-lg">Our Business Sectors</h2>
            <p
              className="subtitle"
              style={{ maxWidth: 540, margin: "16px auto 0" }}
            >
              Six powerful divisions working in harmony to deliver complete
              solutions across East Africa
            </p>
          </div>
          <div className="grid-3">
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Preview (client component for cart) ── */}
      <HomeProductsSection />

      {/* ── Projects Preview ── */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div className="tag">Portfolio</div>
              <div className="gold-line" />
              <h2 className="heading-lg">Featured Projects</h2>
            </div>
            <Link href="/projects" className="btn-outline">
              View All Projects →
            </Link>
          </div>
          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* ── Gallery Section — inserted after Projects Preview ── */}
      {/* ─────────────────────────────────────────────────────── */}
      <GallerySection />

      {/* ─────────────────────────────────────────────────────── */}
      {/* ── News Section — inserted after Gallery             ── */}
      {/* ─────────────────────────────────────────────────────── */}
      <NewsSection />

      {/* ── Testimonials ── */}
      <section className="section" style={{ background: "var(--dark3)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="tag">Client Voices</div>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="heading-lg">What Our Clients Say</h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        heading="Ready to Build Something Great?"
        subtext="From construction materials to full project delivery — we have everything you need under one roof."
        primaryLabel="Contact Us Today"
        primaryHref="/contact"
        secondaryLabel="Browse Products"
        secondaryHref="/shop"
      />
    </div>
  );
}
