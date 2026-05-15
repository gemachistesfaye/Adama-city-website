# 🚀 Deployment & Operations: Adama Smart City Platform

## 💻 Local Development Setup

1. **Install Node.js:** Ensure you have Node 18+ installed.
2. **Clone & Install:**
   ```bash
   git clone https://github.com/your-repo/adama-smart-city.git
   cd adama-smart-city
   npm install
   ```
3. **Run Dev Server:**
   ```bash
   npm run dev
   ```
   Access the platform at `http://localhost:5173`.

---

## 🏗️ Production Build Process
We use the **Vite** build engine to generate a highly optimized static bundle.

```bash
npm run build
```

**Optimizations applied during build:**
- **Tree Shaking:** Removal of unused code from `lucide-react` and `framer-motion`.
- **CSS Minification:** Tailwind v4 uses Lightning CSS for ultra-fast, minified output.
- **Asset Hashing:** Ensuring browser cache invalidation for new releases.
- **Image Compression:** (Recommended) Run a pre-build script for any heavy assets.

---

## ☁️ Deployment Guides

### 💎 Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect **Vite** and configure the build settings.
4. Set the `Build Command` to `npm run build` and `Output Directory` to `dist`.

### ⚡ Netlify
1. Connect your repository to Netlify.
2. Set the **Build Command** to `npm run build`.
3. Set the **Publish Directory** to `dist`.
4. Ensure you add a `_redirects` file to the `public/` folder to support React Router:
   ```text
   /*  /index.html  200
   ```

---

## ⚙️ Environment Configuration
Create a `.env` file for production-specific overrides:

```env
VITE_APP_TITLE=Adama Smart City
VITE_API_URL=https://api.adama-smartcity.gov.et (Future)
VITE_MAINTENANCE_MODE=false
```

---

## 📈 Performance Best Practices
- **Lighthouse Goals:** Aim for 90+ in Performance, Accessibility, and Best Practices.
- **Code Splitting:** Use `React.lazy()` for separate pages to reduce the initial JS payload.
- **Font Optimization:** Use `woff2` formats for the Inter font and self-host to avoid layout shifts.
- **Image Loading:** Use `loading="lazy"` for cards below the fold.

---

© 2026 Adama Smart City Platform | Deploying Urban Intelligence.
