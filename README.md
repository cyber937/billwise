# 🚧 BillWise (WIP) – Invoice App with Next.js + Prisma

> This is a **work-in-progress portfolio project** by [Kiyoshi Nagahama](https://www.linkedin.com/in/kiyoshi-nagahama/), aiming to build a full-stack modern invoicing app using Next.js, Prisma, and Tailwind CSS.

---

## 🔧 Goals (in progress)

- [x] Set up Next.js App Router
- [x] Integrate Tailwind CSS
- [x] Create basic layout with sidebar
- [ ] Implement authentication (NextAuth)
- [ ] Build invoice model with Prisma
- [ ] Create invoice creation/edit pages
- [ ] Add PDF export
- [ ] Mobile responsiveness

---

## 💡 Tech Stack (planned / partially implemented)

- **Frontend**: Next.js 15 (App Router), Tailwind CSS
- **Backend**: API Routes + Prisma ORM
- **Auth**: NextAuth.js
- **Database**: PostgreSQL
- **Deployment**: Vercel
- **UI**: cyberseeds-ui (custom component library)

---

## 🧪 Project Structure (early stage)

billwise/
├── app/ # App Router-based routing
│ ├── layout.tsx # Shared layout with sidebar/header
│ ├── page.tsx # Dashboard homepage
│ ├── login/ # Login page (NextAuth)
│ │ └── page.tsx
│ ├── invoices/ # Invoice listing, creation, detail
│ │ ├── page.tsx
│ │ ├── new/page.tsx
│ │ └── [id]/page.tsx
│ ├── clients/ # Client management
│ │ ├── page.tsx
│ │ └── [id]/edit/page.tsx
│ ├── settings/ # User/account settings
│ │ └── page.tsx
│ └── api/ # API Routes (REST-style endpoints)
│ └── invoices/
│ ├── route.ts
│ └── [id]/route.ts

├── components/ # Reusable React components
│ ├── layout/ # Header, Sidebar, Footer
│ ├── ui/ # Shared UI (Button, Input, Modal, etc.)
│ └── invoices/ # Invoice-specific components

├── lib/ # Logic & helpers
│ ├── prisma.ts # Prisma client instance
│ ├── auth.ts # NextAuth config
│ └── utils.ts # Utility functions

├── prisma/ # Prisma schema & migrations
│ └── schema.prisma

├── public/ # Static assets (images, favicon, etc.)
│ └── screenshot.png

├── styles/ # Tailwind & global CSS
│ └── globals.css

├── types/ # TypeScript interfaces & models
│ └── invoice.ts

├── .env # Environment variables
├── next.config.js
├── tsconfig.json
├── README.md

---

## 👨‍💻 About

This project is designed as a showcase of modern full-stack development best practices — focusing on clean architecture, scalability, and developer experience.
