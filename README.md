# Bold Petals (boldpetals.in) — Redesigned Storefront

A modern, high-converting aesthetic gifting & jewelry storefront inspired by **Aesthetic Magic by Anu** ([aestheticmagicbyanu.in](https://aestheticmagicbyanu.in/)).

---

## 🎨 Dual Palette Switcher (Built-In)

The client requested **Maroon & White** or **Pastel Green & White**. Both color systems are fully implemented and can be toggled live via the top header bar:

1. **🍷 Maroon & White (`[data-theme="maroon"]`):** Deep rich royal maroon (`#801D35`), pure white surfaces, soft blush pink tints (`#F7E5E9`), and warm gold accents.
2. **🌿 Pastel Green & White (`[data-theme="sage"]`):** Fresh botanical sage green (`#486B54`), pure white cards, pastel mint tints (`#E5EDE7`), and soft gold accents.

---

## ✨ Features Inspired by Aesthetic Magic by Anu

1. **Instagram-Style Circular Story Highlights (`StoryCategories.jsx`):**
   * Circular story highlight bubbles directly under the navbar: *Gift Hampers*, *Glowing Jhumkas*, *Butterfly Claws*, *16 Jhumka Tray*, *Under ₹999*, and *Shinchan Box*.
2. **Warm, High-Converting Hero (`Hero.jsx`):**
   * Callout trust badge ("Handcrafted in Lucknow • 50k+ Happy Unboxings"), bold welcoming copy, and split-layout featured hampers.
3. **Shop by Occasion Cards (`OccasionBanners.jsx`):**
   * *Birthday Bash Specials*, *Lovers & Anniversary*, and *Festive Glam & Jhumkas*.
4. **Interactive 3-Step Hamper Customizer (`HamperBuilder.jsx`):**
   * Pick your box style (*Heart Box*, *Velvet Trunk*, *Floral Box*), add delights (*Light Wala Jhumka*, *Date Perfume*, *Chocolates*), and write a handwritten card note with real-time price calculation.
5. **Decoupled JSON Catalog (`public/data/products.json`):**
   * Dynamically fetched by `ProductGrid.jsx` with category tabs and loading state.
6. **Trust & Safety Section (`TrustBadges.jsx`):**
   * 100% Unboxing Video Guarantee, Damage-Proof Packaging, WhatsApp live updates, and Lucknow studio dispatch.
7. **Social Proof & Reviews (`Testimonials.jsx` & `InstagramReels.jsx`):**
   * Verified buyer reviews and a 6-frame community photo grid.
8. **Floating WhatsApp Concierge (`FloatingWhatsApp.jsx`):**
   * Instant direct WhatsApp chat button for customer inquiries.

---

## 🚀 Running Locally

```powershell
cd "C:\Users\HETUK PATEL\.gemini\antigravity\scratch\boldpetals-redesign"
npm run dev
```
Open **`http://localhost:3000`** in your browser.

---

## ☁️ Deploying to Vercel

```powershell
git push origin main
```
Or run `npx vercel` in the project root.
