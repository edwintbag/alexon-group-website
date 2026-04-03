import Link from "next/link";

/* ── Types ─────────────────────────────────────────────────── */
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
  category: string;
  img: string;
  href: string;
  readTime: string;
}

/* ── Data ──────────────────────────────────────────────────── */
const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Ukwala Residential Project Moves Into Active Development Phase",
    excerpt:
      "Construction has officially commenced on our Ukwala residential development, marking a major step in delivering modern, affordable housing solutions within Siaya County.",
    date: "March 25, 2025",
    dateIso: "2025-03-25",
    category: "Projects",
    img: "/images/ukwala1.JPG",
    href: "/news/ukwala-residential-project",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Alexon Group Launches New Quarry Development in Siaya",
    excerpt:
      "We have initiated the development of a new quarry site to strengthen our supply of high-quality aggregates, ensuring consistent material availability for construction projects across the region.",
    date: "March 12, 2025",
    dateIso: "2025-03-12",
    category: "Company News",
    img: "/images/quarry.JPG",
    href: "/news/quarry-development",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "New Excavator Deployed to Enhance Site Operations",
    excerpt:
      "Our equipment fleet continues to grow with the addition of a new excavator, improving efficiency in earthworks, site preparation, and large-scale construction activities.",
    date: "March 5, 2025",
    dateIso: "2025-03-05",
    category: "Equipment",
    img: "/images/excavator.JPG",
    href: "/news/new-excavator-site",
    readTime: "2 min read",
  },
];

/* ── Category Badge Colors ──────────────────────────────────── */
const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  "Company News": { bg: "rgba(26,82,196,0.09)", color: "#1A52C4" },
  Certification:  { bg: "rgba(201,160,48,0.12)", color: "#8A6800" },
  Equipment:      { bg: "rgba(224,124,48,0.09)", color: "#B85E18" },
  Projects:       { bg: "rgba(46,125,50,0.10)", color: "#2E7D32" },
};
/* ── Component ─────────────────────────────────────────────── */
export default function NewsSection() {
  return (
    <>
      {/* ── Inline styles ─────────────────────────────────── */}
      <style>{`
        .news-section {
          padding: 96px 0;
          background: #FFFFFF;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .news-card {
          background: #FFFFFF;
          border: 1px solid #E8EDF5;
          border-radius: 10px;
          overflow: hidden;
          transition: transform 0.32s ease, box-shadow 0.32s ease, border-color 0.32s ease;
          display: flex;
          flex-direction: column;
        }
        .news-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(26,82,196,0.10);
          border-color: rgba(26,82,196,0.18);
        }
        .news-img-wrap {
          overflow: hidden;
          position: relative;
        }
        .news-img-wrap img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .news-card:hover .news-img-wrap img {
          transform: scale(1.05);
        }
        .news-body {
          padding: 24px 24px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .news-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .news-cat-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 4px;
        }
        .news-date {
          font-size: 12px;
          color: #94A3B8;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .news-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #CBD5E1;
          display: inline-block;
        }
        .news-readtime {
          font-size: 12px;
          color: #94A3B8;
        }
        .news-title {
          font-family: var(--ff-head);
          font-size: 17px;
          font-weight: 700;
          color: #1E293B;
          line-height: 1.35;
          margin-bottom: 12px;
          transition: color 0.25s;
        }
        .news-card:hover .news-title {
          color: #1A52C4;
        }
        .news-excerpt {
          font-size: 13.5px;
          color: #64748B;
          line-height: 1.75;
          margin-bottom: 20px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .news-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1A52C4;
          text-decoration: none;
          border-top: 1px solid #F0F4FA;
          padding-top: 16px;
          transition: color 0.25s, gap 0.25s;
        }
        .news-link:hover {
          color: #E07C30;
          gap: 10px;
        }
        .news-link-arrow {
          display: inline-flex;
          transition: transform 0.25s;
        }
        .news-link:hover .news-link-arrow {
          transform: translateX(3px);
        }
        .news-cta-row {
          display: flex;
          justify-content: center;
          margin-top: 52px;
        }

        @media (max-width: 960px) {
          .news-grid { grid-template-columns: 1fr 1fr; }
          .news-section { padding: 64px 0; }
        }
        @media (max-width: 580px) {
          .news-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>

      <section className="news-section">
        <div className="container">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="tag">Latest News & Updates</div>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <h2 className="heading-lg">Insights from Alexon Group</h2>
            <p
              className="subtitle"
              style={{ maxWidth: 520, margin: "14px auto 0" }}
            >
              Stay up to date with our latest projects, product launches,
              certifications, and company milestones.
            </p>
          </div>

          {/* Cards */}
          <div className="news-grid">
            {NEWS_ITEMS.map((item) => {
              const badge = CATEGORY_COLORS[item.category] ?? {
                bg: "rgba(100,116,139,0.09)",
                color: "#475569",
              };
              return (
                <article key={item.id} className="news-card">
                  {/* Image */}
                  <div className="news-img-wrap">
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>

                  {/* Body */}
                  <div className="news-body">
                    {/* Meta row */}
                    <div className="news-meta">
                      <span
                        className="news-cat-badge"
                        style={{ background: badge.bg, color: badge.color }}
                      >
                        {item.category}
                      </span>
                      <span className="news-date">
                        <time dateTime={item.dateIso}>{item.date}</time>
                      </span>
                      <span className="news-dot" />
                      <span className="news-readtime">{item.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="news-title">{item.title}</h3>

                    {/* Excerpt */}
                    <p className="news-excerpt">{item.excerpt}</p>

                    {/* Read More Link */}
                    <Link href={item.href} className="news-link">
                      Read More
                      <span className="news-link-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* View All CTA */}
          <div className="news-cta-row">
            <Link href="/news" className="btn-outline">
              View All News & Updates →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
