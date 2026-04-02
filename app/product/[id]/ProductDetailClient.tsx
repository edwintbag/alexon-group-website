"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import ProductCard from "../../../components/ProductCard";
import type { Product } from "../../../lib/products";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="page-enter">
      {/* ── Breadcrumb ── */}
      <div
        style={{
          background: "var(--dark2)",
          borderBottom: "1px solid rgba(201,168,76,0.08)",
          padding: "80px 0 24px",
        }}
      >
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span style={{ color: "var(--muted)" }}>/</span>
            <Link href="/shop">Shop</Link>
            <span style={{ color: "var(--muted)" }}>/</span>
            <span style={{ color: "var(--white)" }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* ── Product Detail ── */}
      <section className="section" style={{ background: "var(--dark2)" }}>
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: "start" }}>
            {/* Image */}
            <div style={{ position: "relative" }}>
              <div style={{ overflow: "hidden" }}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={{ width: "100%", height: 460, objectFit: "cover" }}
                />
              </div>
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
                  padding: "4px 14px",
                  background: "rgba(10,10,10,0.85)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                {product.category}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="tag">{product.category}</div>
              <div className="gold-line" />
              <h1
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: 16,
                  lineHeight: 1.2,
                }}
              >
                {product.name}
              </h1>
              <div
                style={{
                  fontFamily: "var(--ff-head)",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "var(--gold)",
                  marginBottom: 6,
                }}
              >
                {product.price}
              </div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                {product.unit}
              </div>
              <p className="body-text" style={{ marginBottom: 32 }}>
                {product.desc}
              </p>

              {/* Specifications */}
              {product.details && (
                <div style={{ marginBottom: 32 }}>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: 2.5,
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    Specifications
                  </div>
                  <div
                    style={{
                      background: "var(--dark3)",
                      border: "1px solid rgba(201,168,76,0.1)",
                      padding: "20px 24px",
                    }}
                  >
                    {product.details.map((d, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 0",
                          borderBottom:
                            i < (product.details?.length ?? 0) - 1
                              ? "1px solid rgba(201,168,76,0.06)"
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "var(--gold)",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 13, color: "var(--white2)" }}>
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Qty + Add to Cart */}
              <div style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0,
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    style={{
                      width: 44,
                      height: 48,
                      background: "var(--dark3)",
                      border: "none",
                      color: "var(--white)",
                      fontSize: 18,
                      cursor: "pointer",
                      transition: "background .2s",
                    }}
                  >
                    −
                  </button>
                  <div
                    style={{
                      width: 52,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--white)",
                      background: "var(--dark4)",
                    }}
                  >
                    {qty}
                  </div>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    style={{
                      width: 44,
                      height: 48,
                      background: "var(--dark3)",
                      border: "none",
                      color: "var(--white)",
                      fontSize: 18,
                      cursor: "pointer",
                      transition: "background .2s",
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className={added ? "btn-outline" : "btn-primary"}
                  style={{ flex: 1, justifyContent: "center" }}
                  onClick={handleAddToCart}
                >
                  {added ? "✓ Added to Cart!" : "Add to Cart"}
                </button>
              </div>

              {/* Quick Enquiry */}
              <a
                href={`https://wa.me/254 701 381197?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
                style={{ width: "100%", justifyContent: "center" }}
              >
                💬 Enquire via WhatsApp
              </a>

              {/* Delivery note */}
              <div
                style={{
                  marginTop: 24,
                  padding: "16px 20px",
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  fontSize: 12,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                🚛 <strong style={{ color: "var(--white)" }}>Delivery available</strong> across Kenya and East Africa. Pricing and lead time confirmed upon order.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="section" style={{ background: "var(--dark)" }}>
          <div className="container">
            <div style={{ marginBottom: 40 }}>
              <div className="tag">More in {product.category}</div>
              <div className="gold-line" />
              <h2 className="heading-md">Related Products</h2>
            </div>
            <div className="grid-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/shop" className="btn-outline">
                View All Products →
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
