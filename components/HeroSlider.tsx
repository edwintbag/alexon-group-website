"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "../lib/data";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? "active" : ""}`}>
          {/* Use <img> for external Unsplash URLs; swap for next/image if self-hosted */}
          <img
            src={slide.img}
            alt={slide.label}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="hero-overlay" />
      <div className="hero-overlay2" />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-content">
          <div className="hero-badge fade-up">
            <div className="hero-badge-dot" />
            <span>Kenya&apos;s Your Trusted Partner for Growth And Sustainability · Est. 2025</span>
          </div>

          <h1
            className="heading-xl fade-up delay-1"
            style={{ marginBottom: 24 }}
          >
            Building the
            <br />
            <span style={{ color: "var(--gold)" }}>Future</span> of
            <br />
            Infrastructure
          </h1>

          <p
            className="subtitle fade-up delay-2"
            style={{ maxWidth: 560, marginBottom: 40 }}
          >
            Agribusiness · Construction Materials · Real Estate · Logistics —
            four divisions, one seamless vision for East Africa&apos;s growth.
          </p>

          <div
            className="fade-up delay-3"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <Link href="/services" className="btn-gold">
              Explore Services →
            </Link>
            <Link href="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
