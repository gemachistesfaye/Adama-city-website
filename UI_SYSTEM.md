# 🎨 UI System: Adama Smart City Platform

## 📐 Design Language: "Civic Futurism"
The Adama platform's design language is defined by a blend of **minimalist luxury** and **high-tech functionality**. It is designed to feel authoritative yet accessible, using cinematic lighting and motion to represent a city in constant motion.

---

## 🎨 Color System
We use a curated palette of deep blues and vibrant neon accents to create a "Command Center" aesthetic.

- **Background:** `#020617` (Deep Slate/Navy)
- **Primary Accent:** `#ec4899` (Pink 500) — Used for AI, Innovation, and Action.
- **Secondary Accent:** `#8b5cf6` (Violet 500) — Used for Infrastructure and Vision.
- **Support Accents:**
  - `#60a5fa` (Blue) — Transportation
  - `#10b981` (Emerald) — Connectivity / Healthy Status
  - `#f59e0b` (Amber) — Warnings / Energy

---

## ✍️ Typography
- **Primary Font:** `Inter` (Sans-serif)
- **Philosophy:** High readability with tight letter-spacing (`-0.015em`) for a premium SaaS feel.
- **Headings:** Bold to Black weights (700-900) for strong visual hierarchy.
- **Data/Mono:** `JetBrains Mono` (or fallback) for system logs and metric counters.

---

## 🌫️ Glassmorphism Design
All cards and overlays utilize a consistent "Frosted Glass" approach:
- **Background:** `rgba(15, 23, 42, 0.5)`
- **Blur:** `backdrop-blur(24px)`
- **Border:** `1px solid rgba(255, 255, 255, 0.08)`
- **Interaction:** Cards use a `gradient-border` utility that glows on hover.

---

## 🎭 Animation Philosophy
Animations are used to provide **meaning** and **rhythm**, not just decoration.
- **Entrances:** Staggered Y-axis translation (`y: 20 -> 0`) with smooth spring physics.
- **Micro-interactions:** Subtle scaling (`scale: 1.02`) and shadow intensification on hover.
- **Feedback:** AI and system indicators use "breathing" pulses (`scale` + `opacity` loops) to signify "life."

---

## 📏 Spacing & Layout
- **Grid:** Responsive grid systems with 4, 8, 12, and 16-unit increments.
- **Section Padding:** Consistent `py-24` (desktop) and `py-16` (mobile).
- **Max Width:** `max-w-7xl` (1280px) for standard content, `max-w-full` for maps and dashboard overlays.

---

## 🕯️ Lighting & Effects
- **Ambient Glows:** Use of massive, low-opacity radial gradients behind cards to create "depth lighting."
- **Noise Texture:** A 4% opacity SVG noise overlay across the entire UI to prevent banding and add a premium "tactile" texture.
- **Neon Bleed:** Hover states cause card colors to "bleed" onto the background surfaces through blurred orbs.

---

## ♿ Accessibility
- **Contrast:** Maintaining WCAG AA standards for text readability against dark backgrounds.
- **Focus States:** High-visibility pink/violet focus rings for keyboard navigation.
- **Motion Control:** Adhering to `prefers-reduced-motion` media queries for accessibility.

---

© 2026 Adama Smart City Platform | Design for the Next Century.
