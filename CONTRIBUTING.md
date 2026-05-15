# 🤝 Contributing to Adama Smart City Platform

Welcome, innovator! We are building the digital future of Adama, and we appreciate your contribution to this visionary project.

---

## 🏛️ Contribution Philosophy
The Adama platform is a **Civic-Tech** project. Every contribution should prioritize:
- **Visual Excellence:** Maintain the premium, futuristic aesthetic.
- **Performance:** Ensure animations remain smooth (60fps).
- **Scalability:** Write modular, reusable code that can transition from mock to real data.

---

## 📂 Folder Structure Standards
- `src/components/`: Reusable UI atoms (Buttons, Inputs, Small cards).
- `src/sections/`: Large-scale content blocks (Hero, Map, Dashboard).
- `src/pages/`: Assembly of sections for specific routes.
- `src/layouts/`: Persistent structures like `PageLayout` and `Navbar`.

---

## 🎨 Coding Style & UI Guidelines

### 1. Component Naming
- Use **PascalCase** for files and component names (e.g., `CommandCenter.jsx`).
- Favor **Functional Components** with arrow function syntax.

### 2. Styling (Tailwind v4)
- Use standard theme colors: `pink-500`, `violet-500`, `slate-950`.
- Maintain **Glassmorphism consistency**: Use `.glass-card` utility and `backdrop-blur-xl`.
- Use `inline-flex` for badges and status indicators.

### 3. Animation Rules (Framer Motion)
- Always use **Physics-based transitions** (Springs) for movement.
- Maintain **Staggered Entrances** for section children.
- Keep duration between `0.4s` and `0.8s` for standard interactions.

### 4. Responsive Standards
- **Mobile First:** Ensure layout is solid on 360px width.
- **Breakpoints:** Use `sm:`, `md:`, `lg:`, and `xl:` appropriately.
- **Touch-Friendly:** Buttons and interactive nodes should have a minimum of `44px` tap target.

---

## 📝 Commit Message Conventions
We follow the **Conventional Commits** standard:
- `feat:` for a new city module or feature.
- `fix:` for a UI bug or broken animation.
- `style:` for CSS/Tailwind tweaks without logic changes.
- `refactor:` for architectural improvements.
- `docs:` for updating documentation.

---

## 🚀 Maintaining the Futuristic Identity
When adding new elements, ask yourself:
- *Does this feel like a command center?*
- *Is the lighting consistent with the neon-glow theme?*
- *Does the motion feel intelligent and premium?*

Thank you for being part of the Adama Smart City team!

---

© 2026 Adama Smart City Platform | Community-Driven Innovation.
