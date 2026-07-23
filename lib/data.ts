// All copy on this site is sourced directly from the AFX Frames brand deck.

export type Specialty = {
  number: string;
  title: string;
  detail: string;
};

export const specialties: Specialty[] = [
  {
    number: "01",
    title: "Model Profolios",
    detail:
      "Professionally curated portfolio shoots that highlight versatility, confidence, and industry-ready appeal for aspiring and established models.",
  },
  {
    number: "02",
    title: "Actor Profolios",
    detail:
      "Cinematic headshots and expressive portfolio sessions designed to showcase personality, range, and casting potential.",
  },
  {
    number: "03",
    title: "Child Editorials",
    detail:
      "Fun, comfortable, and professionally directed shoots that capture natural expressions while creating agency-ready portfolios.",
  },
  {
    number: "04",
    title: "Fashion Editorials & Shoots",
    detail:
      "High-end editorial photography that blends creative direction, styling, and storytelling to produce magazine-quality visuals.",
  },
  {
    number: "05",
    title: "Personal Branding",
    detail:
      "Strategic visual content that strengthens your personal identity, builds credibility, and creates a powerful presence across digital platforms.",
  },
];

export type Service = {
  number: string;
  title: string;
  detail: string;
};

export const services: Service[] = [
  { number: "01", title: "Portfolio Shoots", detail: "Tailored sessions for models, actors & influencers" },
  { number: "02", title: "Cinematic Reels", detail: "Motion content that captures your on-screen presence" },
  { number: "03", title: "Fashion Photography", detail: "Editorial-grade imagery for campaigns & lookbooks" },
  { number: "04", title: "Creative Direction", detail: "Concept-to-capture vision for your brand story" },
  { number: "05", title: "Styling Guidance", detail: "Expert wardrobe & look consultation pre-shoot" },
  { number: "06", title: "Social Media Branding", detail: "Content optimised for Instagram, TikTok & beyond" },
  { number: "07", title: "Professional Retouching", detail: "Refined post-production to industry standards" },
  { number: "08", title: "Child Modeling Portfolios", detail: "Safe, fun, professional shoots for young talent" },
];

export type WhyItem = {
  number: string;
  title: string;
  detail: string;
};

export const whyAfx: WhyItem[] = [
  {
    number: "01",
    title: "Industry-Trained Photographers",
    detail: "Our team has worked with top agencies and publications worldwide.",
  },
  {
    number: "02",
    title: "Bespoke Creative Direction",
    detail: "Every shoot is custom-designed around your unique identity.",
  },
  {
    number: "03",
    title: "State of the Art Studio",
    detail: "Professional lighting, backdrops & equipment for flawless results.",
  },
  {
    number: "04",
    title: "Child-Safe Environment",
    detail: "Certified, vetted professionals ensuring comfort & safety for young talent.",
  },
  {
    number: "05",
    title: "Fast Turnaround",
    detail: "Edited, retouched images delivered within 5–7 business days.",
  },
  {
    number: "06",
    title: "Agency-Ready Output",
    detail: "Portfolios formatted to the exact specifications top agencies demand.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I was nervous before the shoot, but the team made me feel comfortable from the start. The photos came out better than I expected.",
    name: "Priya Reddy",
    role: "Model — Hyderabad",
    image: "/photos/testimonial-2.png",
  },
  {
    quote:
      "The entire process was smooth and professional. They guided me with poses and expressions, which made a huge difference in the final pictures.",
    name: "Myra Chowdaryi",
    role: "Model — Hyderabad",
    image: "/photos/testimonial-1.png",
  },
  {
    quote:
      "Loved the experience. The team paid attention to every detail, and the final portfolio looked clean, polished, and exactly what I was looking for.",
    name: "Jagruthi",
    role: "Model — Hyderabad",
    image: "/photos/behind-2.jpg",
  },
];

// "Our Portfolio" — the first gallery on the work page
export const workGallery: string[] = [
  "/photos/work-1.jpg",
  "/photos/work-2.jpg",
  "/photos/studio-10.png",
];

// "More From Our Studio" — the second gallery on the work page
export const studioGallery: string[] = [
 
  "/photos/studio-8.jpg",
  "/photos/studio-2.jpg",
  "/photos/studio-3.jpg",
  "/photos/studio-4.jpg",
  "/photos/studio-5.jpg",
  "/photos/studio-6.jpg",
  "/photos/studio-7.jpg",
];

export const contact = {
  phone: "+91 91826 70033",
  email: "info@afxframes.com",
  location: "Hyderabad",
};
