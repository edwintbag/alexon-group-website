import Link from "next/link";

interface PageHeroProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHero({
  tag,
  title,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-pattern" />
      <div className="container page-hero-content">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span style={{ color: "var(--muted)" }}>/</span>
          <span style={{ color: "var(--white)" }}>{breadcrumb}</span>
        </div>
        <div className="tag">{tag}</div>
        <h1 className="heading-xl" style={{ maxWidth: 700 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="subtitle" style={{ maxWidth: 560, marginTop: 16 }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
