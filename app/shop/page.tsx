"use client";

import { useState } from "react";
import PageHero from "../../components/PageHero";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS, SHOP_CATEGORIES } from "../../lib/products";

const ORDER_INFO = [
  { icon: "📦", title: "Bulk Orders", desc: "Special pricing for orders above minimum quantities. Contact us for custom quotes." },
  { icon: "🚛", title: "Delivery", desc: "We deliver across Kenya. Logistics costs calculated based on location and order volume." },
  { icon: "✅", title: "Quality Cert.", desc: "All products are manufactured to Kenya Bureau of Standards (KEBS) specifications." },
  { icon: "📞", title: "Custom Orders", desc: "Need a specific size or spec? Our team accommodates custom manufacturing requests." },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="page-enter">
      <PageHero
        tag="Our Products"
        title={
          <>
            Construction{" "}
            <span style={{ color: "var(--gold)" }}>Materials Shop</span>
          </>
        }
        subtitle="Premium certified building materials for every project scale"
        breadcrumb="Shop"
      />

      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          {/* ── Filters & Search Bar ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SHOP_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              className="form-input"
              style={{ width: 260, padding: "10px 16px" }}
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
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
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </div>

          {/* ── Product Grid ── */}
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--muted)",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
              <p>No products found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          {/* ── Ordering Info ── */}
          <div
            style={{
              marginTop: 64,
              background: "var(--dark3)",
              border: "1px solid rgba(201,168,76,0.15)",
              padding: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
            }}
          >
            {ORDER_INFO.map((info, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{info.icon}</div>
                <div
                  style={{
                    fontFamily: "var(--ff-head)",
                    fontSize: 16,
                    color: "var(--white)",
                    marginBottom: 8,
                  }}
                >
                  {info.title}
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                  {info.desc}
                </div>
              </div>
            ))}
          </div>

          {/* ── Enquiry CTA ── */}
          <div
            style={{
              marginTop: 48,
              padding: "40px",
              background: "var(--burg-dark)",
              border: "1px solid rgba(201,168,76,0.15)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: 22,
                  color: "var(--white)",
                  marginBottom: 8,
                }}
              >
                Need a Bulk Order Quote?
              </h3>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>
                Call us directly or send an enquiry — we respond within 2 hours.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="tel:+254 701 381197" className="btn-gold">
                📞 Call Now
              </a>
              <a
                href="https://wa.me/+254 701 381197"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
