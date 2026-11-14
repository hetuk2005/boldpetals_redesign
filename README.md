<div align="center">

# 🌸 Bold Petals — E-Commerce Redesign

**A high-converting, luxury romantic gift atelier frontend built with React, Vite, and Tailwind CSS.**

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

[Explore Documentation](#-key-features) • [Getting Started](#-getting-started) • [Deployment Guide](#-deployment-to-vercel)

</div>

---

## 📌 Executive Summary

This project delivers a **complete storefront redesign** for **Bold Petals** ([boldpetals.in](https://www.boldpetals.in/)), an independent lifestyle and gifting atelier based in Lucknow, India.

While retaining **100% of the authentic product catalog, pricing, and bundle offerings**, the design transitions the storefront from a generic template into an editorial French-Korean boutique experience ("*Petals & Poetry*"). The interface is engineered for optimal user engagement, trust, and conversion rate optimization (CRO).

---

## ✨ Key Features

### 🛍️ Dynamic Product Pipeline (Decoupled JSON)
- **Zero Hardcoding in Views:** Product catalog is isolated within [`/public/data/products.json`](./public/data/products.json), ensuring easy integration with headless CMSs or REST APIs.
- **Asynchronous Fetching:** Handled via custom React lifecycle hooks with animated loading skeletons and graceful error states.
- **In-Memory Category Filtering:** Instant switching between *All Creations*, *Gift Hampers*, *Jewellery & Jhumkas*, *Hair Accessories*, and *Budget Gifts Under ₹999*.

### 🎁 Interactive 3-Step Hamper Customizer
- **Modular Hamper Engine:** Users can customize boxes in real time:
  1. Base keepsake box selection (*Blush Satin Heart*, *Gold Velvet Trunk*, *Vintage Floral*).
  2. Treat and jewellery add-ons (*Light Wala Jhumka*, *Bellavita Fragrances*, *Sipper Glass Bottles*, *Butterfly Hair Claws*).
  3. Custom handwritten calligraphy greeting note.
- **Dynamic Pricing Engine:** Calculates estimated cost in real-time and injects customized bundles directly into the checkout pipeline.

### 🛒 High-Conversion Shopping Bag (Cart Drawer)
- **Context-Powered State:** Managed globally using the React Context API (`CartContext`).
- **Dynamic Free-Shipping Tier:** Visual progress meter updating dynamically toward the ₹799 Pan-India free express shipping threshold.
- **Automated Promotional Discounting:** Automatic coupon code application (`PETAL10`) with live subtotal recalculation.

### ⚡ Conversion & Micro-Interaction Enhancements
- **Instant Quick-View Modal:** Deep-dive into product details, dimensions, and unboxing policies without navigating away.
- **Live Search Modal:** Real-time client-side search across titles, descriptions, and categories.
- **Interactive Wishlist:** Persistent bookmarking system with live header counter badges.
- **Trust Architecture:** Integrated damage-safe transit guarantees, verified buyer testimonials, and unboxing replacement policies.

---

## 🏗️ Architecture & Component Hierarchy

```
boldpetals-redesign/
├── public/
│   ├── data/
│   │   └── products.json          # Master product catalog & metadata
│   └── favicon.svg                # Brand icon
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.jsx    # Promotional ribbon & coupon callout
│   │   ├── Navbar.jsx             # Glassmorphic responsive header & navigation
│   │   ├── Hero.jsx               # Editorial hero showcase & quick-action cards
│   │   ├── CategoryScroller.jsx   # Horizontal touch-friendly category explorer
│   │   ├── ProductGrid.jsx        # Data fetcher, category tabs & grid layout
│   │   ├── ProductCard.jsx        # Product display card with wishlist & quick-view
│   │   ├── HamperBuilder.jsx      # Interactive 3-step custom box customizer
│   │   ├── TrustBadges.jsx        # Security, unboxing policy & dispatch guarantees
│   │   ├── Testimonials.jsx       # Verified buyer social proof carousel
│   │   ├── InstagramGrid.jsx      # Social community showcase (#BoldPetalsClub)
│   │   ├── Footer.jsx             # Atelier policies, studio contact & newsletter
│   │   ├── CartDrawer.jsx         # Slide-over cart with live progress bar
│   │   ├── QuickViewModal.jsx     # Detail modal for individual products
│   │   ├── SearchModal.jsx        # Global search modal with instant matching
│   │   └── Toast.jsx              # Lightweight non-blocking notifications
│   ├── context/
│   │   ├── CartContext.jsx        # Global bag state & pricing logic
│   │   └── WishlistContext.jsx    # Wishlist state & toggle handlers
│   ├── App.jsx                    # Core page orchestrator
│   ├── main.jsx                   # Application root mount
│   └── index.css                  # Tailwind directives & custom animations
├── vercel.json                    # Single-Page Application routing configuration
├── tailwind.config.js             # Custom luxury brand color tokens & typography
└── vite.config.js                 # Vite build optimization configuration
```

---

## 🎨 Design System & Color Tokens

The visual design system reflects warmth, sophistication, and romantic elegance:

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **`brand.wine`** | `#441220` | Primary brand color, headers, CTAs |
| **`brand.deepRose`** | `#6D2036` | Secondary accent, hover states |
| **`brand.rose`** | `#D87A8F` | Highlights, promotional tags, active wishlist |
| **`brand.blush`** | `#FBECEE` | Soft card backgrounds, pill accents |
| **`brand.cream`** | `#FDF9F6` | Master canvas background |
| **`brand.gold`** | `#C99E58` | Luxury badges, star ratings, accents |

---

## 📦 Preserved Product Catalog

All authentic products from `boldpetals.in` are preserved with verified pricing:

| Product Title | Category | Current Price | Original MRP | Special Attributes |
| :--- | :--- | :--- | :--- | :--- |
| **Fairy Birthday Hamper** | Hampers | ₹2,699 | ₹3,099 | Fairy lights, tiara, handwritten card |
| **Light Wala Jhumka** | Jewellery | ₹899 | ₹1,499 | Micro-LED festive glowing earrings |
| **16 Jhumka Collector Box** | Jewellery | ₹1,099 | ₹1,599 | Velvet organizer, 16 antique pairs |
| **Angelic Lovebox** | Hampers | ₹1,349 | ₹1,699 | Wing pendant, candle & fragrance |
| **2 Metal Butterfly Claws Combo** | Accessories | ₹59 | ₹149 | Non-slip Korean metal hair clips |
| **Shinchan Viral Box** | Hampers | ₹2,099 | ₹2,899 | Licensed plush, sipper & anime treats |
| **12 Premium Earrings Box** | Jewellery | ₹999 | ₹1,399 | 18k gold-dipped, anti-tarnish set |
| **2 Row Velvet Bangle Box** | Accessories | ₹2,300 | ₹3,199 | Bridal storage chest with display lid |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/boldpetals-redesign.git
   cd boldpetals-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

4. **Compile for production:**
   ```bash
   npm run build
   ```
   Generates an optimized, production-ready static bundle inside the `dist/` directory.

---

## ☁️ Deployment to Vercel

This repository is optimized for **zero-configuration continuous deployment** on Vercel:

1. Push your code to your GitHub repository.
2. Navigate to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository:
   - **Framework Preset:** `Vite` *(Auto-detected)*
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Your site will be globally distributed on Vercel's Edge Network within seconds.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
