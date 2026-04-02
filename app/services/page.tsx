import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import { SERVICES_DETAIL } from "../../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Alexon Group Ltd",
  description:
    "Construction, Quarry & Materials, Equipment Hire, Agriculture, Logistics, and Real Estate — six integrated divisions across Kenya and East Africa.",
};

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <PageHero
        tag="What We Offer"
        title={
          <>
            Our Business <span style={{ color: "var(--gold)" }}>Sectors</span>
          </>
        }
        subtitle="Six integrated divisions delivering end-to-end solutions across Kenya and East Africa"
        breadcrumb="Services"
      />

      {/* ── Service Detail Sections ── */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          {SERVICES_DETAIL.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 64,
                  alignItems: "center",
                  marginBottom: i < SERVICES_DETAIL.length - 1 ? 96 : 0,
                }}
                className="service-detail-row"
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    order: isEven ? 0 : 1,
                  }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{ width: "100%", height: 420, objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: "var(--gold)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      width: 54,
                      height: 54,
                      background: "rgba(10,10,10,0.85)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                    }}
                  >
                    {s.icon}
                  </div>
                </div>

                {/* Text */}
                <div style={{ order: isEven ? 1 : 0 }}>
                  <div className="tag">{s.title.split(" ")[0]}</div>
                  <div className="gold-line" />
                  <h2 className="heading-md" style={{ marginBottom: 20 }}>
                    {s.title}
                  </h2>
                  <p className="body-text" style={{ marginBottom: 28 }}>
                    {s.fullDesc}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                    }}
                  >
                    {s.features.map((f, j) => (
                      <div
                        key={j}
                        style={{ display: "flex", alignItems: "center", gap: 8 }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--gold)",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 13, color: "var(--white2)" }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Why Integrated ── */}
      <section className="section" style={{ background: "var(--dark3)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="tag">Competitive Advantage</div>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="heading-lg">Why Our Integration Wins</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 2,
              background: "var(--burg-dark)",
            }}
          >
            {[
              { num: "01", title: "Single Source", desc: "One partner for materials, construction, logistics, and agriculture — reducing complexity." },
              { num: "02", title: "Cost Efficiency", desc: "No middlemen between production and delivery means savings passed directly to clients." },
              { num: "03", title: "Quality Control", desc: "We own every step of the supply chain, so we guarantee consistent standards." },
              { num: "04", title: "Faster Delivery", desc: "Integrated logistics means your materials move when your project demands it." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "40px 32px",
                  background: "rgba(0,0,0,0.2)",
                  borderRight: i < 3 ? "1px solid rgba(201,168,76,0.15)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 48,
                    fontWeight: 900,
                    color: "rgba(201,168,76,0.15)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 18,
                    color: "var(--white)",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </div>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        tag="Get Started"
        heading="Need a Quote or Consultation?"
        subtext="Our team is ready to assess your project and provide a tailored solution across any of our divisions."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="Browse Products"
        secondaryHref="/shop"
      />

      {/* Responsive override for alternating rows on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .service-detail-row {
            grid-template-columns: 1fr !important;
          }
          .service-detail-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}
