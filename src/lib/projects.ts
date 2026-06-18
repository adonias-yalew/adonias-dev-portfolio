export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status?: string;
  year: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  tech: string[];
  challenges: string[];
  results: string[];
  future: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "clinic-booking",
    title: "Clinic Booking System",
    tagline: "Appointment management for clinics, doctors, and patients.",
    year: "2024",
    problem:
      "Small clinics struggle with phone-based scheduling — overbooked slots, no-shows, and no clear record of patient history.",
    solution:
      "A clinic-focused booking platform with doctor schedules, patient accounts, appointment history, and admin tooling for staff.",
    architecture:
      "React frontend communicating with a Node.js + Express REST API, PostgreSQL database for patient records, doctor schedules, and appointments, and JWT-based authentication for secure session management.",
    features: [
      "Doctor scheduling",
      "Patient registration and login",
      "Appointment booking and cancellation",
      "Appointment history",
      "Admin tools for clinic staff",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    challenges: [
      "Modeling recurring doctor availability",
      "Handling cancellations and rescheduling cleanly",
      "Keeping the data model strict and auditable",
    ],
    results: [
      "Working scheduling system used as a course capstone",
      "Clear separation between patient, doctor, and admin roles",
      "Reliable appointment history per patient",
    ],
    future: [
      "Notifications and reminders",
      "Telemedicine integration",
      "Reporting dashboard for clinic owners",
    ],
    github: "https://github.com/adonias-yalew/karachi-health-hub",
    demo: "https://karachi-health-hub.vercel.app/",
    image: "/clinic-screenshot.png",
  },
  {
    slug: "tourism-booking",
    title: "Tourism Booking System",
    tagline: "End-to-end booking platform for tours, hotels, and travel packages.",
    year: "2024",
    problem:
      "Local tourism operators rely on manual booking workflows that are error-prone, hard to scale, and disconnected from customer-facing channels.",
    solution:
      "A full booking system covering inventory, availability, pricing, and reservations, with a clean admin panel for operators and a guest-friendly booking experience.",
    architecture:
      "Node.js + Express backend, MySQL relational schema for inventory and bookings, REST APIs consumed by the client, and a clear separation between admin and customer flows.",
    features: [
      "Tour, hotel, and package catalog",
      "Availability and pricing engine",
      "Reservation and confirmation flow",
      "Admin dashboard for operators",
      "Booking history per customer",
    ],
    tech: ["Node.js", "Express.js", "MySQL", "REST APIs", "JavaScript"],
    challenges: [
      "Modeling availability across overlapping tour packages",
      "Preventing double-bookings under concurrent requests",
      "Designing an admin UI usable by non-technical operators",
    ],
    results: [
      "Reliable booking flow with confirmation",
      "Operator-friendly admin panel",
      "Foundation for payment integration",
    ],
    future: [
      "Online payments",
      "Multi-language support",
      "Reporting and analytics for operators",
    ],
    github: "https://github.com/adonias-yalew/TravelEth",
    demo: "https://travel-eth-one.vercel.app/tourism",
    image: "/travel-screenshot.png?v=2",
  },
  {
    slug: "adis-tesfa",
    title: "Adis Tesfa Mental Health Platform",
    tagline:
      "Accessible mental health support with appointments and structured resources.",
    status: "In Active Development",
    year: "2025",
    problem:
      "Access to mental health support is limited, fragmented, and often intimidating. People need a calm, structured way to find help and book sessions.",
    solution:
      "A focused platform offering authenticated user accounts, appointment scheduling with practitioners, a curated resource library, and personal dashboards — built with privacy and clarity as defaults.",
    architecture:
      "Node.js + Express API, PostgreSQL for users, appointments, and resources, secure session handling, and a clean service layer separating scheduling, content, and user concerns.",
    features: [
      "User authentication",
      "Appointment scheduling",
      "Curated resource library",
      "User dashboards",
      "Secure data handling",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "JWT"],
    challenges: [
      "Designing scheduling logic that handles cancellations and time zones",
      "Keeping sensitive data secure end-to-end",
      "Making the UX feel calm rather than clinical",
    ],
    results: [
      "Working appointment flow with confirmation",
      "Resource library with structured categories",
      "Dashboard tracking user activity",
    ],
    future: [
      "Practitioner-side scheduling tools",
      "Encrypted in-app messaging",
      "Anonymous self-assessment modules",
    ],
    github: "https://github.com/adonias-yalew",
    demo: "#",
    image: "/addis-tesfa-screenshot.png",
  },
  {
    slug: "haymanote",
    title: "Haymanote Multi-Faith Platform",
    tagline:
      "Community and marketplace platform supporting multiple faith communities.",
    status: "In Active Development",
    year: "2025",
    problem:
      "Faith communities often lack a unified digital space that combines verified leadership, discussions, events, and commerce while remaining respectful of multiple traditions.",
    solution:
      "A single, role-aware platform with verified leadership accounts, moderated discussions, an events module, an integrated marketplace, and AI-assisted features that adapt to each community.",
    architecture:
      "Node.js + Express REST API, PostgreSQL for relational data (users, roles, transactions), MongoDB for discussions and content feeds, JWT-based authentication with role-based access control, and a modular service layer separating community, marketplace, events, and AI services.",
    features: [
      "Authentication and verified accounts",
      "Role-based access control",
      "Community discussions and moderation",
      "Marketplace with listings and orders",
      "Events module with RSVPs",
      "AI-assisted content features (in progress)",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT", "REST APIs"],
    challenges: [
      "Designing a permission model that scales across multiple faith communities",
      "Balancing relational and document data stores for different workloads",
      "Keeping moderation tooling simple for non-technical community leaders",
    ],
    results: [
      "Stable core API covering auth, communities, and marketplace",
      "Verified leader workflow with admin review",
      "Foundation laid for AI-assisted moderation and discovery",
    ],
    future: [
      "AI-assisted discussion summarization",
      "Mobile clients",
      "Payment gateway integration for marketplace",
    ],
    github: "https://github.com/adonias-yalew",
    demo: "#",
    image: "/haymanote-screenshot.png?v=2",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
