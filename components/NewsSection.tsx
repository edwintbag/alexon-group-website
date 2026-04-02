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
    title: "Alexon Group Expands Precast Production Capacity by 40%",
    excerpt:
      "We have completed a major upgrade to our manufacturing plant in Ugunja, significantly boosting output of hollow blocks, culverts, and cabro paving blocks to meet growing regional demand.",
    date: "March 18, 2025",
    dateIso: "2025-03-18",
    category: "Company News",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",
    href: "/news/precast-production-expansion",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "KEBS Certification Achieved for Our Full Concrete Block Range",
    excerpt:
      "All Alexon Group precast products now carry Kenya Bureau of Standards (KEBS) certification, reinforcing our commitment to building materials that meet the highest safety and quality benchmarks.",
    date: "February 28, 2025",
    dateIso: "2025-02-28",
    category: "Certification",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    href: "/news/kebs-certification",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "New Equipment Hire Fleet: Excavators & Tippers Now Available",
    excerpt:
      "Our equipment hire division has added three new excavators and two heavy-duty tipper trucks to the fleet, making large-scale civil works more accessible to contractors across Siaya and Kisumu counties.",
    date: "February 10, 2025",
    dateIso: "2025-02-10",
    category: "Equipment",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    href: "/news/new-equipment-fleet",
    readTime: "2 min read",
  },
];

/* ── Category Badge Colors ──────────────────────────────────── */
const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  "Company News": { bg: "rgba(26,82,196,0.09)", color: "#1A52C4" },
  Certification:  { bg: "rgba(201,160,48,0.12)", color: "#8A6800" },
  Equipment:      { bg: "rgba(224,124,48,0.09)", color: "#B85E18" },
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
