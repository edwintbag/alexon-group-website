# Alexon Group Ltd — Corporate Website

A production-ready corporate website for **Alexon Group Ltd**, built with:
- **Next.js 14** (App Router)
- **TypeScript**
- **Custom CSS** (design tokens, no Tailwind dependency)
- **React Context** (cart state management)

---

## 📁 Project Structure

```
alexon-group/
├── app/
│   ├── layout.tsx                  # Root layout (Navbar, Footer, Providers)
│   ├── globals.css                 # All design tokens + component styles
│   ├── page.tsx                    # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── shop/
│   │   └── page.tsx               # "use client" — filter + search
│   ├── product/
│   │   └── [id]/
│   │       ├── page.tsx           # Static params + metadata
│   │       └── ProductDetailClient.tsx
│   ├── projects/
│   │   └── page.tsx               # "use client" — filter by status
│   ├── careers/
│   │   └── page.tsx               # "use client" — job apply + form
│   └── contact/
│       └── page.tsx               # "use client" — contact form + maps
│
├── components/
│   ├── Navbar.tsx                  # Sticky nav, scroll effect, mobile menu
│   ├── Footer.tsx
│   ├── HeroSlider.tsx              # Auto-cycling hero (5s interval)
│   ├── ProductCard.tsx             # Reusable product card with cart
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx             # Status badge variants
│   ├── CTASection.tsx              # Reusable CTA banner
│   ├── PageHero.tsx                # Inner-page hero banner
│   ├── CartDrawer.tsx              # Slide-in cart with qty controls
│   ├── WhatsAppButton.tsx          # Fixed floating WhatsApp button
│   └── HomeProductsSection.tsx     # Client wrapper for home products
│
├── context/
│   └── CartContext.tsx             # Global cart state + actions
│
├── lib/
│   ├── products.ts                 # Product data + types
│   └── data.ts                     # Services, projects, jobs, slides, etc.
│
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero slider, stats, about, services, products, projects, testimonials |
| `/about` | Company story, Vision/Mission, Values, Structure, Sustainability |
| `/services` | All 6 divisions with detailed alternating layouts |
| `/shop` | Product grid with category filter + search |
| `/product/[id]` | Dynamic product detail with specs + related products |
| `/projects` | Portfolio gallery with status filtering |
| `/careers` | Job listings + application form with CV upload UI |
| `/contact` | Contact form + Google Maps embed + FAQ section |

---

## 🛒 Cart System

- Global cart managed via React Context (`CartContext`)
- Add to cart from any `ProductCard` on any page
- Cart drawer slides in from the right
- Quantity controls (increase / decrease / remove)
- Running subtotal calculated from raw price
- Toast notification on item add

---

## 🎨 Design System

All colours and typography live as CSS custom properties in `globals.css`:

| Token | Value |
|-------|-------|
| `--burg` | `#7B1C2C` (Burgundy) |
| `--gold` | `#C9A84C` (Gold) |
| `--dark` | `#0A0A0A` |
| `--ff-head` | Playfair Display (serif) |
| `--ff-sub` | Cormorant Garamond |
| `--ff-body` | Montserrat (sans-serif) |

---

## 📞 Contact Details (Edit in `lib/data.ts`)

- **Phone:** 0726 966 073 / 0701 381 197  
- **Email:** samaalex530@gmail.com  
- **Location:** Ugunja Town, Siaya County, Kenya

---

## 🔧 Customisation Tips

1. **Update products** → edit `lib/products.ts`
2. **Add new services** → edit `lib/data.ts` → `SERVICES_DETAIL`
3. **Add new projects** → edit `lib/data.ts` → `PROJECTS`
4. **Change hero images** → edit `lib/data.ts` → `HERO_SLIDES`
5. **Update contact info** → edit `lib/data.ts` and `components/Footer.tsx`
6. **Connect real payment** → update `CartDrawer.tsx` checkout button
