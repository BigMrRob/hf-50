# HF50 - Unified Hunting & Fishing License Platform

A modern web application revolutionizing hunting and fishing licensing across America. One platform for all your outdoor adventure needs across all 50 states.

## 🚀 Project Overview

HF50 is launching Summer 2025, starting with Tennessee as our first state integration. The platform provides instant digital license validation, seamless state system integration, and enterprise-grade security for all transactions.

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Custom Tailwind keyframes
- **State Management**: React hooks and controlled components

## 🏗 Project Structure

```
components/
├── home-section/          # Main page components
│   ├── navigation.tsx     # Main navigation bar
│   ├── hero.tsx          # Hero section with CTA
│   ├── model.tsx         # Our model section
│   ├── state-tabs.tsx    # State integration tabs
│   ├── contact-form.tsx  # Contact/waitlist form
│   └── footer.tsx        # Site footer
├── ui/                   # Shadcn UI components
└── waitlist-form.tsx     # Waitlist form component
```

## 🎨 Design System

### Colors

- Primary: `#e65c25` (Orange)
- Background:
  - Main: `#1a1a1a`
  - Secondary: `#262626`
- Text:
  - Primary: `white`
  - Muted: `#a3a3a3`
- Borders:
  - Default: `#333333`
  - Hover: `#404040`

### Typography

- Responsive font sizes using Tailwind's modular scale
- Custom gradient text effects
- Consistent heading hierarchy
- Mobile-optimized text sizes

### Animations

- Float: `animate-[float_6s_ease-in-out_infinite]`
- Glow: `animate-[glow_3s_ease-in-out_infinite]`
- Kenburns: `animate-[kenburns_20s_ease-in-out_infinite_alternate]`
- Loading shimmer effects
- Hover transitions

## 💻 Development

### Prerequisites

- Node.js 20+
- pnpm (recommended)

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```

### Code Style

- Use lowercase with dashes for file naming
- Components are organized by feature/section
- Consistent import ordering
- TypeScript types for all props
- Client components marked with 'use client'

## 🎯 Features

### Core Features

- Digital license validation
- Real-time state system integration
- Secure payment processing
- Digital license wallet
- Multi-state support

### Technical Features

- Server-side rendering
- Optimized image loading
- Responsive design
- Accessibility compliance
- Performance optimizations

## 🔒 Security & Performance

### Security

- Enterprise-grade transaction security
- Secure state system integration
- Protected user data
- Compliant payment processing

### Performance

- Image optimization
- Component code splitting
- Minimal client-side JavaScript
- Optimized animations
- Efficient asset loading

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: Mobile devices
  - md: Tablets
  - lg: Desktop
- Fluid typography
- Adaptive layouts
- Touch-optimized interactions

## ♿️ Accessibility

- Semantic HTML structure
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance
- Screen reader compatibility

## 🚀 Deployment

The application is configured for deployment on Vercel, optimized for:

- Edge functions
- Image optimization
- Analytics
- Performance monitoring

## 🔄 State Management

- Local state with React hooks
- Form state with controlled components
- Tab state via shadcn/ui
- URL state for deep linking
- Loading/error states

## 📦 Asset Management

- Images in public/logos
- SVG icons inline
- Background patterns as SVGs
- Texture overlays as PNGs
- Optimized loading strategies

## 🤝 Contributing

1. Follow the file naming convention (lowercase with dashes)
2. Ensure TypeScript types are properly defined
3. Maintain consistent component structure
4. Follow the established design system
5. Test for accessibility and performance

## 📝 License

Copyright © 2024 Hunt Fish 50. All rights reserved.

---

For more information about the platform, visit our website or contact our team.
