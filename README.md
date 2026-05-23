# 💰 Fintelli – AI Finance Platform

An intelligent full-stack finance management platform powered by AI. Track expenses, manage accounts, get AI-generated financial insights, and receive automated budget alerts — all in one place.

---

## 🚀 Features

- 🔐 **Authentication** – Secure sign-in & sign-up with Clerk
- 🏦 **Account Management** – Create and manage multiple financial accounts
- 💸 **Transaction Tracking** – Add, edit, and categorize income & expenses
- 🤖 **AI Insights** – Gemini-powered financial analysis and monthly reports
- 📧 **Email Alerts** – Automated budget alerts via Resend & Inngest
- 🛡️ **Rate Limiting & Security** – ArcJet-powered bot protection and rate limiting
- 📊 **Dashboard** – Visual overview of your finances
- 📱 **Responsive UI** – Built with Tailwind CSS and Shadcn UI

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Full-stack React framework |
| Supabase | PostgreSQL database hosting |
| Prisma | Database ORM |
| Clerk | Authentication |
| Inngest | Background jobs & event-driven workflows |
| ArcJet | Rate limiting & security |
| Resend | Transactional emails |
| Gemini AI | AI-powered financial insights |
| Tailwind CSS | Styling |
| Shadcn UI | UI components |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account
- Gemini API key
- Resend account
- ArcJet account
- Inngest account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/fintelli.git
cd fintelli
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
# Database (Supabase)
DATABASE_URL=
DIRECT_URL=

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# AI (Gemini)
GEMINI_API_KEY=

# Email (Resend)
RESEND_API_KEY=

# Security (ArcJet)
ARCJET_KEY=
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables Guide

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | Supabase → Project → Settings → Database |
| `DIRECT_URL` | Supabase → Project → Settings → Database |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk Dashboard → API Keys |
| `CLERK_SECRET_KEY` | Clerk Dashboard → API Keys |
| `GEMINI_API_KEY` | [aistudio.google.com](https://aistudio.google.com) |
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys |
| `ARCJET_KEY` | [arcjet.com](https://arcjet.com) → Dashboard |

---


## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add all environment variables in Vercel → Settings → Environment Variables
4. Deploy!

---

