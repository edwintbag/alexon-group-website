"use client";

import { useState, useEffect, useCallback } from "react";

/* ── Types ─────────────────────────────────────────────────── */
type Category = "All" | "Concrete Products" | "Aggregates" | "Equipment Hire";

interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  img: string;
  tag: string;
}

/* ── Data ──────────────────────────────────────────────────── */
const GALLERY_ITEMS: GalleryItem[] = [
  // Concrete Products
  {
    id: 1,
    title: "Solid Concrete Blocks",
    category: "Concrete Products",
    tag: "Blocks",
    img: "/images/block1.jpg",
  },
  {
    id: 2,
    title: "Hollow Building Blocks",
    category: "Concrete Products",
    tag: "Blocks",
    img: "/images/hblock1.jpg",
  },
  {
    id: 3,
    title: "Paving Blocks & Cabro",
    category: "Concrete Products",
    tag: "Paving",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
  },
  {
    id: 4,
    title: "Precast Culverts",
    category: "Concrete Products",
    tag: "Drainage",
    img: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=600&q=80",
  },
  {
    id: 5,
    title: "Road Kerbs",
    category: "Concrete Products",
    tag: "Roads",
    img: "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6d3?w=600&q=80",
  },
  {
    id: 6,
    title: "Road Channels",
    category: "Concrete Products",
    tag: "Roads",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 7,
    title: "Concrete Slabs",
    category: "Concrete Products",
    tag: "Slabs",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    id: 8,
    title: "Wall Capping & Spindles",
    category: "Concrete Products",
    tag: "Finishing",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
  },
  // Aggregates
  {
    id: 9,
    title: "Fine & Coarse Sand",
    category: "Aggregates",
    tag: "Sand",
    img: "https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?w=600&q=80",
  },
  {
    id: 10,
    title: "Crushed Ballast",
    category: "Aggregates",
    tag: "Ballast",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
  },
  {
    id: 11,
    title: "Gravel & Hardcore",
    category: "Aggregates",
    tag: "Gravel",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  // Equipment Hire
  {
    id: 12,
    title: "Excavator — Site Ready",
    category: "Equipment Hire",
    tag: "Heavy Plant",
    img: "https://images/excavator1.jpeg",
  },
  {
    id: 13,
    title: "Concrete Mixer Units",
    category: "Equipment Hire",
    tag: "Mixing",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    id: 14,
    title: "Tipper Trucks",
    category: "Equipment Hire",
    tag: "Haulage",
    img: "/images/alexon8.jpg",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Concrete Products",
  "Aggregates",
  "Equipment Hire",
];

/* ── Component ─────────────────────────────────────────────── */
export default function GallerySection() {
  const [active, setActive] = useState<Category>("All");
  const [visible, setVisible] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [animating, setAnimating] = useState(false);

  /* Filter with fade animation */
  const filter = useCallback((cat: Category) => {
    if (cat === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(cat);
      setVisible(
        cat === "All"
          ? GALLERY_ITEMS
          : GALLERY_ITEMS.filter((g) => g.category === cat)
      );
      setAnimating(false);
    }, 200);
  }, [active]);

  /* Keyboard close for lightbox */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Lock scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* ── Inline styles ─────────────────────────────────── */}
      <style>{`
        .gallery-section {
          padding: 96px 0;
          background: #F2F4F8;
        }
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 48px;
        }
        .gallery-filter-btn {
          padding: 9px 22px;
          border: 1.5px solid rgba(26,82,196,0.22);
          background: transparent;
          color: #64748B;
          font-family: var(--ff-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.28s ease;
        }
        .gallery-filter-btn:hover {
          border-color: #E07C30;
          color: #E07C30;
        }
        .gallery-filter-btn.gfb-active {
          background: #1A52C4;
          border-color: #1A52C4;
          color: #FFFFFF;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          transition: opacity 0.2s ease;
        }
        .gallery-grid.g-fading {
          opacity: 0;
        }
        .gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          background: #fff;
          box-shadow: 0 2px 12px rgba(26,82,196,0.07);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(26,82,196,0.14);
        }
        .gallery-card img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .gallery-card:hover img {
          transform: scale(1.07);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13,52,144,0.82) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 18px;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-overlay-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #C9A030;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .gallery-overlay-title {
          font-family: var(--ff-head);
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
        }
        .gallery-overlay-zoom {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.92);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.3s ease;
        }
        .gallery-card:hover .gallery-overlay-zoom {
          opacity: 1;
          transform: scale(1);
        }
        .gallery-overlay-zoom svg {
          width: 16px;
          height: 16px;
          stroke: #1A52C4;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .gallery-count {
          text-align: center;
          margin-top: 16px;
          font-size: 13px;
          color: #64748B;
          letter-spacing: 1px;
        }

        /* Lightbox */
        .glb-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,14,26,0.88);
          z-index: 5000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: glbIn 0.22s ease;
        }
        @keyframes glbIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .glb-inner {
          position: relative;
          background: #FFFFFF;
          border-radius: 10px;
          overflow: hidden;
          max-width: 860px;
          width: 100%;
          box-shadow: 0 30px 80px rgba(0,0,0,0.45);
          animation: glbScale 0.25s ease;
        }
        @keyframes glbScale {
          from { transform: scale(0.93); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        .glb-inner img {
          width: 100%;
          max-height: 520px;
          object-fit: cover;
          display: block;
        }
        .glb-info {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .glb-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #E07C30;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .glb-title {
          font-family: var(--ff-head);
          font-size: 20px;
          font-weight: 700;
          color: #1E293B;
        }
        .glb-close {
          width: 40px;
          height: 40px;
          border: 1.5px solid #E2E8F0;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .glb-close:hover {
          background: #E07C30;
          border-color: #E07C30;
          color: #fff;
        }
        .glb-close svg {
          width: 16px;
          height: 16px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .gallery-section { padding: 64px 0; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── Section ───────────────────────────────────────── */}
      <section className="gallery-section">
        <div className="container">

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="tag">Our Work & Materials</div>
            <div className="gold-line" style={{ margin: "0 auto 20px" }} />
            <h2 className="heading-lg">Quality You Can See</h2>
            <p
              className="subtitle"
              style={{ maxWidth: 500, margin: "14px auto 0" }}
            >
              Certified precast products, premium aggregates, and modern
              equipment — built for East Africa&apos;s fastest-growing projects.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="gallery-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`gallery-filter-btn${active === cat ? " gfb-active" : ""}`}
                onClick={() => filter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={`gallery-grid${animating ? " g-fading" : ""}`}>
            {visible.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setLightbox(item)}
                role="button"
                aria-label={`View ${item.title}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(item)}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-tag">{item.tag}</div>
                  <div className="gallery-overlay-title">{item.title}</div>
                  <div className="gallery-overlay-zoom">
                    <svg viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Count */}
          <p className="gallery-count">
            Showing{" "}
            <strong style={{ color: "#1A52C4" }}>{visible.length}</strong> of{" "}
            {GALLERY_ITEMS.length} items
          </p>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────── */}
      {lightbox && (
        <div
          className="glb-overlay"
          onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="glb-inner">
            <img src={lightbox.img} alt={lightbox.title} />
            <div className="glb-info">
              <div>
                <div className="glb-tag">{lightbox.tag}</div>
                <div className="glb-title">{lightbox.title}</div>
              </div>
              <button
                className="glb-close"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                <svg viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
