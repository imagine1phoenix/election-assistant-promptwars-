# 🗳️ ElectionGuide India

> **Navigate Indian Elections with Ease** — A modern, accessible, and highly visual platform designed to guide every citizen through the electoral process in India.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

---

## 🌟 Features

### Core Modules
- **🗳️ Voter Registration Guide** — Forms 6, 7, 8, 8B with eligibility checklists and step-by-step processes
- **📅 Interactive Timeline** — 6-phase election process from notification to post-election
- **🧭 Step-by-Step Wizard** — Personalized guidance based on citizenship, age, registration status, and location
- **❓ FAQ & Knowledge Base** — 16+ categorized questions with search and filter
- **📋 ID & Requirements** — Scenario-based document checklists (new voter, transfer, correction, polling day)

### New Enhancements
- **⏳ Election Countdown** — Live countdown timer to the next general election
- **📍 Constituency Finder** — Search by PIN code, city, or state to find your constituency and ERO contacts
- **🏅 Voter Badges** — Gamification system tracking your voter journey milestones
- **📢 Social Sharing** — Share on WhatsApp, Twitter/X, and Facebook
- **♿ Accessibility Menu** — Font size controls (100%/125%/150%), high contrast mode, reduce motion toggle
- **🇮🇳 India Tricolor Stripe** — Decorative saffron-white-green stripe at page boundaries
- **🔗 Official Portal Links** — Direct links to NVSP and ECI official resources

### SEO & Accessibility
- Full **OpenGraph** and **Twitter Card** metadata
- **GovernmentService** structured data (schema.org)
- Auto-generated **sitemap.xml**
- **Skip-to-content** link for keyboard navigation
- **ARIA** landmarks and labels throughout
- `prefers-reduced-motion` media query support
- **WCAG 2.1** focus-visible indicators

---

## 🎨 Design System

The "**Cafe**" design system merges warm, accessible tones with premium layout principles:

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#5D4432` | Cafe brown — headings, buttons, accents |
| `--color-secondary` | `#E9E3DD` | Parchment — backgrounds, badges |
| `--color-surface` | `#F9F7F5` | Page background |
| `--color-text` | `#3E2B1E` | Body text |
| `--success` | `#2D5016` | Success states |
| `--warning-dark` | `#8B5E00` | Warning states |
| `--error` | `#7D2F2F` | Error states |
| `--india-saffron` | `#FF9933` | Indian flag accent |
| `--india-green` | `#138808` | Indian flag accent |

### Component Library
- `Alert` — Success/warning/error/info semantic alerts
- `Card` — Animated card with badge, icon, and action slots
- `ProgressIndicator` — Multi-step progress stepper
- `ElectionCountdown` — Live countdown with animated digits
- `ConstituencyFinder` — Search-driven constituency lookup
- `ShareButtons` — Social sharing (WhatsApp, Twitter, Facebook)
- `VoterBadges` — Gamification badge grid
- `AccessibilityMenu` — Floating a11y controls

---

## 💻 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Language | TypeScript 5 |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (SEO, structured data, a11y)
│   ├── page.tsx            # Home (hero, countdown, finder, badges)
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── globals.css         # Design system tokens & utilities
│   ├── faq/page.tsx        # FAQ with search & category filter
│   ├── register/page.tsx   # Registration forms guide
│   ├── requirements/page.tsx # Document checklists
│   ├── timeline/page.tsx   # 6-phase election timeline
│   └── wizard/page.tsx     # Interactive eligibility wizard
├── components/
│   ├── Navbar.tsx          # Responsive navigation with pill tabs
│   ├── Footer.tsx          # 3-column footer with official links
│   ├── AccessibilityMenu.tsx # Floating a11y controls
│   └── ui/
│       ├── Alert.tsx
│       ├── Card.tsx
│       ├── ConstituencyFinder.tsx
│       ├── ElectionCountdown.tsx
│       ├── ProgressIndicator.tsx
│       ├── ShareButtons.tsx
│       └── VoterBadges.tsx
├── data/
│   ├── electionData.ts     # FAQs, timeline, states/UTs
│   └── constituencies.ts   # 15 major constituencies with ERO data
└── lib/
    └── utils.ts            # Tailwind class merge utility
```

---

## 🛣️ Roadmap

### Phase 2 (Planned)
- [ ] 🌐 Hindi language support (i18n with `next-intl`)
- [ ] 📱 PWA with offline support (`next-pwa`)
- [ ] 🗺️ Polling booth locator with Google Maps
- [ ] 🔗 NVSP API integration for voter status check
- [ ] 🔔 WhatsApp election reminders
- [ ] 🧪 Testing (Jest + Playwright)

### Phase 3 (Future)
- [ ] 🗣️ Voice navigation for accessibility
- [ ] 🌍 5+ regional Indian languages
- [ ] 📊 Vercel Analytics integration
- [ ] 🤖 FAQ chatbot assistant
- [ ] 🖨️ Printable voter slip generation

---

## 🤝 Contributing

Contributions are welcome! Please ensure any UI additions adhere to the Cafe design system documented in `DESIGN.md` and `globals.css`.

---

## ⚖️ Disclaimer

This is an **independent informational resource** and is **not affiliated** with the Election Commission of India. For official information, visit [eci.gov.in](https://eci.gov.in).
