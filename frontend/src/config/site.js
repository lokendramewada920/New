// ============================================================
// ARTS OF FINANCE — CENTRAL SITE CONFIGURATION
// Single source of truth. Replace placeholder values here (or via
// environment variables) and the whole site updates automatically:
// footer, contact page, schema, map section, CTA buttons, SEO pages.
// ============================================================

export const SITE_URL = "https://artsoffinance.in";

export const site = {
  name: "Arts Of Finance",
  legalName: "Arts Of Finance",
  tagline: "Bhopal's Premier Stock Market Training Institute",
  url: SITE_URL,
  description:
    "Arts Of Finance is a premium stock market training institute in Bhopal offering mentor-led courses in Technical Analysis, Fundamental Analysis, Options, Crypto, Forex and NISM-oriented learning.",
  established: "[ESTABLISHED YEAR — TO BE PROVIDED]",

  // ---- NAP (Name / Address / Phone) — used by footer, contact, schema, maps ----
  contact: {
    phone: process.env.REACT_APP_PHONE_NUMBER || "+917610714365",
    whatsapp: process.env.REACT_APP_WHATSAPP_NUMBER || "+917610714365",
    email: process.env.REACT_APP_BUSINESS_EMAIL || "contact.us@artsoffinance.in",
    address: process.env.REACT_APP_BUSINESS_ADDRESS || "36A, Near Som Group, MP Nagar Zone 2, Bhopal, Madhya Pradesh",
    hours: "9:00 AM – 6:00 PM",
    mapEmbedUrl: process.env.REACT_APP_GOOGLE_MAP_EMBED_URL || "", // [GOOGLE MAP EMBED — TO BE PROVIDED]
    mapLink: "", // [GOOGLE MAPS DIRECTIONS URL — TO BE PROVIDED]
    googleBusinessProfile: "", // [GOOGLE BUSINESS PROFILE LINK — TO BE PROVIDED]
  },

  socials: {
    instagram: "", // [INSTAGRAM — TO BE PROVIDED]
    youtube: "", // [YOUTUBE — TO BE PROVIDED]
    facebook: "", // [FACEBOOK — TO BE PROVIDED]
    linkedin: "", // [LINKEDIN — TO BE PROVIDED]
  },

  // ---- Mentor team (names/photos are placeholders until provided) ----
  sebiRegistration: "INH000018780",
  mentors: [
    {
      role: "MD & Mentor",
      name: "Lokenndra Mewada",
      photo: "",
      expertise: "[AREAS OF EXPERTISE — TO BE PROVIDED]",
    },
    {
      role: "Director & Mentor",
      name: "Taha Rahi",
      photo: "",
      sebi: true,
      expertise: "[AREAS OF EXPERTISE — TO BE PROVIDED]",
    },
    {
      role: "Director & Mentor",
      name: "Pankaj Mehra",
      photo: "",
      expertise: "[AREAS OF EXPERTISE — TO BE PROVIDED]",
    },
  ],
  guestLecturers: [
    { name: "[GUEST MENTOR 1 — TO BE PROVIDED]", topic: "[SESSION TOPIC]" },
    { name: "[GUEST MENTOR 2 — TO BE PROVIDED]", topic: "[SESSION TOPIC]" },
    { name: "[GUEST MENTOR 3 — TO BE PROVIDED]", topic: "[SESSION TOPIC]" },
    { name: "[GUEST MENTOR 4 — TO BE PROVIDED]", topic: "[SESSION TOPIC]" },
    { name: "[GUEST MENTOR 5 — TO BE PROVIDED]", topic: "[SESSION TOPIC]" },
  ],
  mentor: {
    photo: "", // [MENTOR PHOTO — TO BE PROVIDED]
    name: "[MENTOR NAME]",
    designation: "MD & Mentor",
    qualifications: "[QUALIFICATIONS — TO BE PROVIDED]",
    certifications: "SEBI Registered Research Analyst · Reg. No. INH000018780",
    experience: "[EXPERIENCE — TO BE PROVIDED]",
    expertise: ["Technical Analysis", "Options", "Risk Management", "Trading Psychology"], // [AREAS OF EXPERTISE — CONFIRM]
    message: "[MENTOR MESSAGE — TO BE PROVIDED]",
  },

  institute: {
    description: "[INSTITUTE DESCRIPTION — TO BE PROVIDED]",
    mission: "[MISSION — TO BE PROVIDED]",
    vision: "[VISION — TO BE PROVIDED]",
    founder: "[FOUNDER / MANAGEMENT INFORMATION — TO BE PROVIDED]",
  },

  // ---- Integration placeholders (values supplied later via .env) ----
  integrations: {
    marketDataApiKey: process.env.REACT_APP_MARKET_DATA_API_KEY || "", // [MARKET DATA API]
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "", // [GOOGLE MAPS API]
    gaMeasurementId: process.env.REACT_APP_GA_MEASUREMENT_ID || "", // [GA4]
    gtmId: process.env.REACT_APP_GTM_ID || "", // [GOOGLE TAG MANAGER]
    metaPixelId: process.env.REACT_APP_META_PIXEL_ID || "", // [META PIXEL]
    contactFormEndpoint: "/leads", // CRM / email service wired later
  },
};

export const hasValue = (v) => Boolean(v && !v.includes("[") && v.trim().length > 0);

export const displayOr = (v, fallback = "To be shared soon") =>
  hasValue(v) ? v : fallback;

export const MARKET_DISCLAIMER =
  "Stock market investments and trading involve market risk. Educational content provided by Arts Of Finance does not constitute investment advice, a recommendation to buy or sell securities, or a guarantee of profits or returns.";
