"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className="logo-text">
                ALEXON <span>GROUP</span>
              </div>
              <div className="logo-sub">Ltd · Kenya</div>
            </Link>

            {/* Desktop Links */}
            <div className="nav-links">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${pathname === href ? "active" : ""}`}
                >
                  {label}
                </Link>
              ))}
              <button
                className="nav-cart"
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
              >
                🛒 Cart
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            fontSize: 28,
            color: "#fff",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className="mobile-nav-link">
            {label}
          </Link>
        ))}
        <button
          className="mobile-nav-link"
          onClick={() => {
            setMobileOpen(false);
            setCartOpen(true);
          }}
          style={{ fontFamily: "var(--ff-head)", fontSize: 28, fontWeight: 700, color: "var(--gold)", cursor: "pointer", background: "none", border: "none" }}
        >
          🛒 Cart {cartCount > 0 && `(${cartCount})`}
        </button>
      </div>
    </>
  );
}
