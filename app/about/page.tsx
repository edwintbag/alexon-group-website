import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Alexon Group Ltd",
  description:
    "Learn about Alexon Group — founded in 2025 in Ugunja, Kenya. Our story, vision, mission, values and leadership structure.",
};

const CORE_VALUES = [
  {
    icon: "🛡️",
    title: "Reliability",
    desc: "We keep our promises. Every delivery, every project, every time — our clients can count on us.",
  },
  {
    icon: "👥",
    title: "Customer Focus",
    desc: "Client success is our success. We listen, adapt, and deliver solutions that genuinely serve your needs.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We invest in modern technology — from agri-tech to logistics software — to stay ahead of the curve.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    desc: "We build partnerships with communities, governments, and businesses to achieve shared growth.",
  },
];

const ORG_STRUCTURE = [
  {
    title: "Board of Directors",
    icon: "🏛️",
    desc: "Provides strategic guidance and ensures we meet the highest standards of corporate governance and accountability.",
  },
  {
    title: "Executive Management",
    icon: "📊",
    desc: "Leads the overall strategy, financial health, and ensures that all divisions work effectively together.",
  },
  {
    title: "Division Leadership",
    icon: "⚙️",
    desc: "Each core sector is led by a dedicated expert, guaranteeing specialised focus and operational excellence.",
  },
];

const SUSTAINABILITY = [
  {
    icon: "🌿",
    title: "Planet",
    desc: "Eco-friendly farming, resource-efficient building materials, and optimised logistics to cut down on fuel usage.",
  },
  {
    icon: "👤",
    title: "People",
    desc: "A significant local employer — robust training and support for community projects in infrastructure and education.",
  },
  {
    icon: "⚖️",
    title: "Ethics",
    desc: "Ethical sourcing and transparent business practices across all our divisions, without compromise.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Our Story"
        title={
          <>
            Trusted Partner for{" "}
            <span style={{ color: "var(--gold)" }}>Growth & Sustainability</span>
          </>
        }
        subtitle="Founded in 2025, Alexon Group is building a legacy of integrated excellence across Kenya and East Africa."
        breadcrumb="About Us"
      />

      {/* ── Company Overview ── */}
      <section className="section" style={{ background: "var(--dark2)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div>
              <div className="tag">Who We Are</div>
              <div className="gold-line" />
              <h2 className="heading-lg" style={{ marginBottom: 24 }}>
                A New Kind of African Enterprise
              </h2>
              <p className="body-text" style={{ marginBottom: 16 }}>
                Alexon Group is a dynamic, diversified enterprise founded in
                2025 in Ugunja Town, Siaya County, Kenya. We have rapidly
                evolved into a regional operator through the strategic
                integration of four essential economic sectors.
              </p>
              <p className="body-text" style={{ marginBottom: 16 }}>
                Our operational model is built on synergy. By controlling the
                supply chain from raw material production through to final
                delivery and application, we deliver end-to-end solutions that
                minimise risk, ensure quality, and enhance client value.
              </p>
              <p className="body-text">
                We are committed to driving growth, fostering sustainability,
                and contributing vital resources across local, regional, and
                emerging global markets.
              </p>
            </div>
            <div>
              <img
                src="/images/alexon9.JPG"
                alt="Alexon Group Team"
                style={{ width: "100%", height: 400, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision, Mission, Values ── */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="tag">Our Foundation</div>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="heading-lg">Vision, Mission & Core Values</h2>
          </div>

          {/* Vision + Mission Cards */}
          <div className="grid-2" style={{ gap: 32, marginBottom: 48 }}>
            <div
              style={{
                background: "var(--burg-dark)",
                border: "1px solid rgba(201,168,76,0.2)",
                padding: "48px 40px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                Our Vision
              </div>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: 28,
                  color: "var(--white)",
                  marginBottom: 20,
                  lineHeight: 1.2,
                }}
              >
                To be the preferred local & global partner for sustainable growth
              </h3>
              <p className="body-text">
                Efficiently supplying the resources that build homes, feed
                communities, and connect economies — from Ugunja to the world.
              </p>
            </div>

            <div
              style={{
                background: "var(--dark3)",
                border: "1px solid rgba(201,168,76,0.15)",
                padding: "48px 40px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                Our Mission
              </div>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: 28,
                  color: "var(--white)",
                  marginBottom: 20,
                  lineHeight: 1.2,
                }}
              >
                Drive growth and prosperity through integrated solutions
              </h3>
              <p className="body-text">
                Providing integrated solutions in building materials, logistics,
                and agriculture — fostering innovation, quality, and
                sustainability for our clients and communities.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid-4">
            {CORE_VALUES.map((v, i) => (
              <div key={i} className="value-card">
                <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Organisational Structure ── */}
      <section className="section" style={{ background: "var(--dark2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="tag">Our People</div>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="heading-lg">Organisational Structure</h2>
          </div>
          <div className="grid-3">
            {ORG_STRUCTURE.map((l, i) => (
              <div
                key={i}
                style={{
                  background: "var(--dark3)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  padding: 36,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 70,
                    height: 70,
                    background: "rgba(123,28,44,0.2)",
                    border: "1px solid rgba(123,28,44,0.4)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    margin: "0 auto 20px",
                  }}
                >
                  {l.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 20,
                    color: "var(--white)",
                    marginBottom: 12,
                  }}
                >
                  {l.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Partner With Alexon ── */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="tag">Why Choose Us</div>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="heading-lg">Why Partner With Alexon?</h2>
            <p className="subtitle" style={{ maxWidth: 500, margin: "16px auto 0" }}>
              We offer a better way to build and grow.
            </p>
          </div>
          <div className="grid-2" style={{ gap: 32 }}>
            {[
              {
                title: "Full Control, Lower Risk",
                desc: "We manage the entire lifecycle from production to final delivery. This single-source accountability means better quality control and less hassle for you.",
              },
              {
                title: "Guaranteed Quality",
                desc: "We apply the same high standards to selecting our goat breeds as we do to manufacturing our concrete. Quality is non-negotiable across every division.",
              },
              {
                title: "Local Expertise, Regional Reach",
                desc: "We have deep local roots in Kenya combined with the proven capability to deliver projects and supplies across East Africa.",
              },
              {
                title: "Forward Thinking",
                desc: "We invest constantly in new farming technologies, green building materials, and logistics software to stay modern and efficient.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--dark3)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  padding: "36px 32px",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 20,
                    color: "var(--white)",
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability ── */}
      <section className="section" style={{ background: "var(--dark3)" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div>
              <img
                src="/images/alexon10.JPG"
                alt="Sustainability"
                style={{ width: "100%", height: 420, objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="tag">Sustainability & Responsibility</div>
              <div className="gold-line" />
              <h2 className="heading-lg" style={{ marginBottom: 24 }}>
                Growth That&apos;s Both Profitable and Responsible
              </h2>
              {SUSTAINABILITY.map((s, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 20, marginBottom: 28 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "rgba(123,28,44,0.2)",
                      border: "1px solid rgba(123,28,44,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--ff-head)",
                        fontSize: 18,
                        color: "var(--white)",
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </div>
                    <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        tag="Partner With Us"
        heading="Let's Build the Future Together"
        subtext="Whether you're a contractor, developer, or individual — Alexon Group has a solution for you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </div>
  );
}
