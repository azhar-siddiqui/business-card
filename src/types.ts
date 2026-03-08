/**
 * Type definitions for the business card application
 */

export interface ContactInfo {
  phone: string;
  website: string;
  youtube: string;
  instagram: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface Particle {
  x: number;
  y: number;
  r: number;
  vy: number;
}

export interface Theme {
  current: "light" | "dark";
  icon: string;
}

export const PROFILE_DATA = {
  name: "Azhar Siddiqui",
  title: "AI Engineer | Software Developer",
  phone: "+91 75583 80826",
  emergencyPhone: "+91 9011768487",
  website: {
    url: "https://azhar-portfolio-delta.vercel.app/",
    label: "Portfolio Website",
  },
  avatars: [
    "https://media.craiyon.com/2025-10-17/pnmqrgQKSG2NdurXOaCYUg.webp",
    "https://img.freepik.com/free-photo/one-young-adult-posing-with-futuristic-eyeglasses-generated-by-ai_188544-19658.jpg",
    "https://thumbs.dreamstime.com/b/futuristic-conception-studio-shot-dark-studio-neon-light-portrait-serious-man-futuristic-conception-studio-shot-dark-167174568.jpg",
  ],
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/@azharai",
    icon: "fab fa-youtube",
    label: "YouTube @azharai",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/azhar.dev",
    icon: "fab fa-instagram",
    label: "Instagram @azhar.dev",
  },
];

export const CONTACT_ITEMS = [
  {
    type: "phone",
    icon: "fas fa-phone",
    value: "+91 75583 80826",
    link: "tel:+917558380826",
    label: "Phone",
  },
  {
    type: "website",
    icon: "fas fa-globe",
    value: "Portfolio Website",
    link: "https://azhar-portfolio-delta.vercel.app/",
    label: "Website",
  },
  {
    type: "youtube",
    icon: "fab fa-youtube",
    value: "YouTube @azharai",
    link: "https://youtube.com/@azharai",
    label: "YouTube",
  },
  {
    type: "instagram",
    icon: "fab fa-instagram",
    value: "Instagram @azhar.dev",
    link: "https://instagram.com/azhar.dev",
    label: "Instagram",
  },
];
