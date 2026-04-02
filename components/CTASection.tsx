import Link from "next/link";

interface CTASectionProps {
  tag?: string;
  heading: string;
  subtext: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  tag = "Start Your Project Today",
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="section cta-section">
      <div className="cta-pattern" />
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <div
          className="tag"
          style={{ color: "rgba(201,168,76,0.7)" }}
        >
          {tag}
        </div>
        <div className="gold-line" style={{ margin: "0 auto 24px" }} />
        <h2
          className="heading-lg"
          style={{ maxWidth: 600, margin: "0 auto 24px" }}
        >
          {heading}
        </h2>
        <p
          className="subtitle"
          style={{ maxWidth: 480, margin: "0 auto 40px" }}
        >
          {subtext}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link href={primaryHref} className="btn-gold">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-outline">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
