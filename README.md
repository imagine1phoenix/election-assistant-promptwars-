# Election Assistant (ElectionGuide India)

Election Assistant is a modern, accessible, and highly visual platform designed to guide voters through the electoral process in India. Built with a premium "Cafe" design aesthetic—heavily inspired by Apple's photography-first, high-contrast UI language—the application aims to make voter registration and election information clear, engaging, and easy to navigate.

## 🌟 Key Features

- **Voter Registration Guide**: Step-by-step instructions on how to register to vote.
- **Interactive Timeline**: A clear visual timeline of key election dates and deadlines.
- **Requirements Checklist**: Easy-to-understand breakdown of necessary documents and eligibility criteria.
- **FAQ Section**: Comprehensive answers to common voter questions.
- **Wizard**: An interactive flow to help users determine their specific voting requirements and next steps.

## 🎨 Design Philosophy

The application features a unique "Cafe" design system that merges warm, accessible tones with premium layout principles:
- **Photography-First**: UI chrome recedes so the content and imagery can speak. No decorative gradients or unnecessary shadows.
- **Color Palette**: Warm primary tones (`#5D4432` Cafe Brown) alternating with soft parchment/surface colors (`#F9F7F5`, `#E9E3DD`) and crisp dark text.
- **Typography**: Clean, readable sans-serif typography (Poppins) optimized for both display headlines and dense informational body copy.
- **Card-Based Layouts**: Information is chunked into edge-to-edge tiles and rounded utility cards for maximum readability.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, v16)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🚀 Getting Started

First, ensure you have Node.js installed. Then, clone the repository and install the dependencies:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/` - Next.js App Router pages (Home, FAQ, Register, Requirements, Timeline, Wizard)
- `src/components/` - Reusable React components (UI elements, layout wrappers)
- `src/data/` - Static data arrays for FAQs, timelines, and other content
- `src/lib/` - Utility functions (e.g., Tailwind class merging)
- `DESIGN.md` - Comprehensive design system documentation and token specifications

## 🤝 Contributing

Contributions to improve the Election Assistant are welcome! Please ensure any UI additions strictly adhere to the design guidelines outlined in `DESIGN.md`.
