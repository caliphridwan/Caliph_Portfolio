// ────────────────────────────────────────────────────────────────
// All the editable content for the site lives here.
// Replace the placeholder values with your real details.
// ────────────────────────────────────────────────────────────────

export type Discipline = "ai" | "dev" | "data" | "design";

export const disciplines: Record<
  Discipline,
  { label: string; accent: string; short: string }
> = {
  ai: { label: "AI Automation", accent: "ai", short: "AI" },
  dev: { label: "Full-Stack Dev", accent: "dev", short: "Dev" },
  data: { label: "Data Analysis", accent: "data", short: "Data" },
  design: { label: "Graphic Design", accent: "design", short: "Design" },
};

export const profile = {
  name: "Ridwan Abdulkareem",
  roles: [
    "AI Automation Specialist",
    "Full-Stack Web Developer",
    "Data Analyst",
    "Graphic Designer",
  ],
  location: "Ilorin, Nigeria — open to remote, any timezone",
  tagline:
    "I design, build, and automate — from a mere imagination to a deployed app to the workflow that keeps it running itself.",
  email: "caliphridwan93@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/CaliphRidwan" },
    { label: "LinkedIn", url: "https://linkedin.com/in/ridwan-abdulkareem-o-41315b20b" },
    { label: "X", url: "https://x.com/CaliphRidwan" },
    { label: "Dribbble", url: "https://dribbble.com/caliph-ridwan" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a multidisciplinary builder who moves comfortably between four roles most teams hire separately for: I automate the repetitive parts of a business with AI, I build the product itself end-to-end, I make sense of the data it produces, and I design the interface people actually see.",
    "That range means I can take a project from a rough idea to a shipped, measurable result without a handoff — which is exactly what small remote teams and lean startups need most.",
    "With experience training and mentoring hundreds of students in front-end web development, I have built strong capabilities in teaching, leadership, mentorship, administration, and team coordination.",
    "",
  ],
  stats: [
    { value: "4+", label: " Core Disciplines" },
    { value: "20+", label: "Projects shipped" },
    
  ],
};

export const skills: { discipline: Discipline; items: string[] }[] = [
  {
    discipline: "ai",
    items: [
      " Zapier / Make /API Integration / Webhooks",
      "OpenAI / Claude / Gemini APIs",
      "Workflow & prompt design",
    ],
  },
  {
    discipline: "dev",
    items: [
      "React & Next.js",
      "Node.js / Express",
      "TypeScript",
      "PostgreSQL / MongoDB /mySQL",
      "CI/CD & cloud deploys (Vercel, AWS)",
    ],
  },
  {
    discipline: "data",
    items: [
      "SQL & data modeling",
      "Excel/Tableau",
      "Dashboarding & reporting",
    ],
  },
  {
    discipline: "design",
    items: [
      "Canva",
      "Adobe Photoshop",
      "Illustrator",
      "Brand & identity systems",
      
    ],
  },
];

export type Project = {
  title: string;
  discipline: Discipline;
  summary: string;
  tags: string[];
  href?: string;
  repo?: string;
  size: "lg" | "md" | "sm";
};

export const projects: Project[] = [
  {
    title: "Automated Online Examination & Results System",
    discipline: "ai",
    summary:
      "Built a Zapier-powered automation workflow that processes online examination submissions, captures and organizes students’ scores, and automatically sends personalized final results to each student’s email—reducing manual grading and result distribution.",
    tags: ["Zapier", "Webhooks" ,"Workflow Automation", "Forms", "Education Technology" ,"Email Automation",  "Data Processing" ],
    href: "https://zapier.com/editor/377059170/draft/377059171/fields",
    size: "lg",
  },
  {
    title: " Automatic Name Frame system ",
    discipline: "dev",
    summary:
      "An elegant full-stack web application that generates personalized Islamic name frames featuring Arabic names, meanings, and culturally inspired designs.",
    tags: ["Next.js", "PostgreSQL", "Typescript", "Paystack"],
    href: "https://github.com/caliphridwan/CRFRAMES",
    repo: "#",
    size: "md",
  },
  {
    title: "Product Sales Categorization & Analysis",
    discipline: "data",
    summary:
      "Analyzed and visualized product data in Tableau, categorizing items such as tea, coffee, and chocolate to uncover sales patterns, product performance, and actionable business insights.",
    tags: ["Excel", "SQL", "Tableau"],
    href: "https://public.tableau.com/app/profile/ridwan.olatunde/viz/Book1_17846334237580/Dashboard1?publish=yes",
    size: "sm",
  },
  {
    title: "Islamic Name Frame Design",
    discipline: "design",
    summary:
      "Designed elegant personalized Islamic name frames in Canva, combining Arabic typography, meaningful translations, and refined Islamic aesthetics for digital and social media use.",
    tags: ["Canva", "Brand system", "Design tokens"],
    href: "https://canva.link/0q3501lxp71zbje",
    size: "sm",
  },
  
  {
    title: "Traditional Caps E-Commerce Platform",
    discipline: "dev",
    summary:
      "A modern e-commerce platform designed to showcase and sell premium traditional Nigerian caps, including Zanna, Tangaran, Atiku, Bindo, and other culturally inspired headwear.",
    tags: ["React", "Node.js", "NextJs"],
    href: "#",
    size: "sm",
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  discipline: Discipline;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2022 — Present",
    role: "Freelance AI Automation & Full-Stack Developer",
    org: "Self-employed, remote",
    discipline: "ai",
    description:
      "Designing and building practical digital solutions that combine web development, AI, and workflow automation.",
  },
  {
    period: "2023 — 2025",
    role: "Front-End Web Development Tutor & Mentor",
    org: "Kofar Durbi Foundation Tech Hub,",
    discipline: "dev",
    description:
      "Trained and mentored hundreds of students in front-end web development, helping learners develop practical skills and confidence in building websites and web applications.",
  },
  {
    period: "2023 — Present",
    role: "Data Analyst",
    org: "Self Employed,",
    discipline: "data",
    description:
      " Analyzed and visualized datasets using Excel, SQL, and Tableau to identify trends, product performance, and actionable business insights.",
  },
  {
    period: "2023-Present",
    role: "Graphic Designer",
    org: "Self Employed",
    discipline: "design",
    description:
      "Created visual materials and digital designs that communicate ideas effectively and strengthen brand identity using Adobe Photoshop, Canva, & Adobe Illustrator."

  },
  {
    period: "Education",
    role: "B.sc Computer Science & Economics",
    org: "Bayero University, Kano.",
    discipline: "dev",
    description: "Best Graduating Student — Department of Computer Science & Economics, Faculty of Computer Science & Information Technology.",
  },
];
