# 🗓️ Calendly Clone

A premium, high-performance scheduling platform inspired by Calendly, built with the modern web stack. This application features real-time availability synchronization, multi-calendar support, and professional meeting management.

![Header Image](https://images.unsplash.com/photo-1506784911079-509843ad3343?q=80&w=2696&auto=format&fit=crop)

## ✨ Core Features

-   **🎯 Intelligent Booking**
    -   Real-time availability computation across multiple calendars.
    -   Automatic timezone detection and normalization for global scheduling.
    -   Support for multiple meeting types (15, 30, 45, 60, 90 mins).
-   **🔄 Google Calendar Integration**
    -   Bidirectional sync: Fetch busy times and create events automatically.
    -   Attendee status tracking (Accepted, Tentative, Declined).
    -   Google Meet link generation for scheduled events.
-   **🔐 Enterprise-Grade Auth**
    -   Powered by **Clerk** with Google OAuth integration.
    -   Secure session management and host-specific booking pages.
-   **📊 Real-time CMS**
    -   **Sanity.io** backend for ultra-fast content delivery.
    -   Live Preview and real-time updates via Sanity Live Content API.
-   **💎 Premium Design System**
    -   Built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.
    -   Responsive, glassmorphic UI with native Dark Mode support.
    -   Interactive calendar components using `react-big-calendar` and `shadcn/ui`.
-   **📈 Subscription & Quotas**
    -   Tiered plans: **Free**, **Starter**, and **Pro**.
    -   Automatic booking limit enforcement and quota management.

## 🚀 Tech Stack

-   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server Actions)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/), [Shadcn/ui](https://ui.shadcn.com/)
-   **Database & CMS**: [Sanity.io](https://www.sanity.io/) (Next Sanity)
-   **Authentication**: [Clerk](https://clerk.com/)
-   **Calendar API**: [Google APIs](https://developers.google.com/calendar)
-   **Date Logic**: [date-fns](https://date-fns.org/), [date-fns-tz](https://github.com/marnusw/date-fns-tz)

---

## 🛠️ Getting Started

### Prerequisites

-   Node.js 18+ and npm/pnpm/yarn.
-   A [Sanity](https://www.sanity.io/) project.
-   A [Clerk](https://clerk.com/) application with Google OAuth enabled.
-   A [Google Cloud Console](https://console.cloud.google.com/) project with Calendar API enabled.

### 1. Installation

```bash
git clone https://github.com/your-username/calendly-clone.git
cd calendly-clone
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Sanity
NEXT_PUBLIC_SANITY_DATASET="calendly"
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
SANITY_API_TOKEN="your_sanity_api_token"

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Google Calendar API (OAuth)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GOOGLE_REDIRECT_URI="http://localhost:3000/api/calendar/callback"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Sanity Setup

Initialize the schema and generate types:

```bash
npm run typegen
```

### 4. Running Locally

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📐 Project Structure

-   `/src/app`: Next.js App Router pages and layouts.
-   `/src/components`: Reusable UI components (Shadcn, Calendars, Flow).
-   `/src/lib`: Core logic for availability computation and Google API helpers.
-   `/src/sanity`: Sanity schemas, queries, and client configuration.
-   `/src/hooks`: Custom React hooks for data fetching and UI state.

---

## 🧠 How it Works: Availability Logic

The most complex part of this application is the **real-time availability engine**, which ensures hosts are never double-booked across Sanity and Google Calendar.

1.  **Host Availability**: The host sets their general availability blocks in Sanity (e.g., Mon-Fri, 9 AM - 5 PM).
2.  **Conflict Detection**:
    -   **Sanity Bookings**: The system checks for existing confirmed bookings in the Sanity database.
    -   **Google Calendar**: If the host has connected Google accounts, the system fetches "Busy" blocks in real-time.
    -   **Attendee Status**: The engine intelligently ignores Sanity bookings if the host has declined the corresponding event in Google Calendar, making that slot available again.
3.  **Timezone Normalization**:
    -   Visitor timezones are detected on the client and passed to the server via cookies.
    -   Availability is computed on the server and grouped by the *visitor's* local date, ensuring a seamless experience for global users.
4.  **Booking Quotas**:
    -   Before finalizing a booking, the system validates the host's monthly quota based on their Clerk subscription plan (Free, Starter, or Pro).

---

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js and Sanity.
