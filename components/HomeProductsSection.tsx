"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../lib/products";

export default function HomeProductsSection() {
  return (
    <section className="section" style={{ background: "var(--dark2)" }}>
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
            <div className="tag">Our Products</div>
            <div className="gold-line" />
            <h2 className="heading-lg">Featured Products</h2>
          </div>
          <Link href="/shop" className="btn-outline">
            View All Products →
          </Link>
        </div>

        <div className="grid-4">
          {PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
