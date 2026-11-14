# Bold Petals (boldpetals.in) — React Redesign

A modern, high-converting React homepage for **Bold Petals** ([boldpetals.in](https://www.boldpetals.in/)), crafted with an editorial French-Korean luxury aesthetic ("Petals & Poetry").

---

## 🛠️ Architecture & Tech Stack

* **Frontend Framework:** React 18 + Vite (Clean, modern Component-based architecture).
* **Styling:** Tailwind CSS with custom luxury branding tokens (`brand-wine`, `brand-rose`, `brand-blush`, `brand-gold`).
* **Icons:** Lucide React icons.
* **State Management:** React Context API (`CartContext`, `WishlistContext`) for global bag management, dynamic coupon calculations, and interactive wishlist tracking.
* **Data Flow (No hardcoding in JSX):** 
  * Master catalog is stored in [`public/data/products.json`](./public/data/products.json).
  * The [`ProductGrid.jsx`](./src/components/ProductGrid.jsx) and [`SearchModal.jsx`](./src/components/SearchModal.jsx) components fetch this dynamically via `fetch('/data/products.json')` with live loading and error handling states.

---

## 🎁 Preserved Product Catalog

All authentic products from **Bold Petals** have been retained with accurate pricing:

1. **Curated Hampers & Combos:**
   - **Fairy Birthday Hamper** (₹2,699, was ₹3,099)
   - **Shinchan Viral Box** (₹2,099, was ₹2,899)
   - **Angelic Lovebox** (₹1,349, was ₹1,699)
   - **Under ₹999 Collections**
2. **Royal Jewellery & Organizers:**
   - **Light Wala Jhumka** (₹899, was ₹1,499)
   - **16 Jhumka Collector Box** (₹1,099, was ₹1,599)
   - **12 Premium Korean Earrings Set** (₹999)
   - **2-Row Velvet Bridal Bangle Box** (₹2,300, was ₹3,199)
3. **Hair Accessories & Add-ons:**
   - **2 Metal Butterfly Claws Combo** (₹59, was ₹149)
   - **Add-on Delights Ribbon:** Bellavita Date Perfume (₹220), Lakmé Lip Balm (₹210), Bournville Dark Chocolate (₹249), Ferrero Rocher (₹299)

---

## 🚀 How to Run Locally

1. **Navigate to the project directory:**
   ```bash
   cd "C:\Users\HETUK PATEL\.gemini\antigravity\scratch\boldpetals-redesign"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## ☁️ 1-Click Deployment to Vercel

This repository includes a pre-configured `vercel.json` file. To deploy:

### Option 1: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Via GitHub / Vercel Web Dashboard
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository:
   - **Framework Preset:** `Vite` (Auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Your site will be live on a `*.vercel.app` URL within 30 seconds!
