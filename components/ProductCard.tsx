"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import type { Product } from "../lib/products";

interface ProductCardProps {
  product: Product;
  showLink?: boolean;
}

export default function ProductCard({
  product,
  showLink = true,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div style={{ overflow: "hidden" }}>
        <img className="product-img" src={product.img} alt={product.name} />
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}</div>
        <div
          style={{
            fontSize: 11,
            color: "var(--muted)",
            marginBottom: 8,
            letterSpacing: 1,
          }}
        >
          {product.unit}
        </div>
        <p className="product-desc">{product.desc}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button
            className="add-to-cart"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          {showLink && (
            <Link
              href={`/product/${product.id}`}
              style={{
                display: "block",
                textAlign: "center",
                padding: "10px",
                border: "1px solid rgba(201,168,76,0.2)",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                transition: "all .3s",
              }}
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
