import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/projects", label: "Projects" },
];

const SERVICE_LINKS = [
  "Construction",
  "Quarry & Materials",
  "Equipment Hire",
  "Agriculture",
  "Logistics",
  "Real Estate",
];

const CONTACT_INFO = [
  { icon: "📍", text: "Ugunja Town, Siaya County, Kenya" },
  { icon: "📞", text: "0726 966 073 / 0701 381 197" },
  { icon: "✉️", text: "alexongroupltd@gmail.com" },
  { icon: "✉️", text: "info@alexongroupltd.com" },
  { icon: "🕐", text: "Mon – Sat: 7:00 AM – 5:30 PM" },
];

const SOCIALS = [
  {
    href: "https://www.facebook.com/alexongroup/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.6-4.7 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/feed/",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.6c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.8V24h-4V8z"/>
      </svg>
    ),
  },
  {
    href: "https://x.com/AlexonGroup",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18 2h3l-7.5 8.6L22 22h-6l-4.7-6-5.3 6H3l8-9.2L2 2h6l4.3 5.6L18 2z"/>
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@alexongroupltd",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M9 3v12.5a3.5 3.5 0 1 1-2-3.15V7h4a5 5 0 0 0 5 5v4a9 9 0 0 1-7-3.5V3H9z"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@AlexonGroup",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.7-.9-2.1-1C17.5 2.5 12 2.5 12 2.5h0s-5.5 0-8.5.3c-.4.1-1.3.1-2.1 1C.7 4.5.5 6.2.5 6.2S.2 8.1.2 10v2c0 1.9.3 3.8.3 3.8s.2 1.7.9 2.4c.8.9 1.9.9 2.4 1 1.8.2 7.6.3 7.6.3s5.5 0 8.5-.3c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.4.9-2.4s.3-1.9.3-3.8v-2c0-1.9-.3-3.8-.3-3.8zM9.8 14.5V7.8l6.4 3.3-6.4 3.4z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="grid-4" style={{ alignItems: "start" }}>
            <div>
              <div className="footer-logo">
                ALEXON <span>GROUP</span>
              </div>
              <p className="footer-desc">
                Your trusted partner for growth and sustainability. Building
                homes, feeding communities, and connecting economies across
                Kenya and East Africa.
              </p>
              <div className="social-links">
                {SOCIALS.map(({ icon, href }, i) => (
                  <a key={i} href={href} className="social-link">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="footer-heading">Quick Links</div>
              <ul className="footer-links">
                {QUICK_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="footer-heading">Our Services</div>
              <ul className="footer-links">
                {SERVICE_LINKS.map((s) => (
                  <li key={s}>
                    <Link href="/services">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-heading">Contact Us</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {CONTACT_INFO.map(({ icon, text }, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                  >
                    <span style={{ fontSize: 14, flexShrink: 0 }}>{icon}</span>
                    <span
                      style={{
                        fontSize: 13,
                        color: "var(--muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Alexon Group Ltd. All rights reserved.</span>
          <span style={{ color: "var(--gold)", fontSize: 12 }}>
            Ugunja Town · Siaya County · Kenya
          </span>
        </div>
      </div>
    </footer>
  );
}
