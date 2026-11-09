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
  // Featured projects show first; the rest appear under "See more".
  featured?: boolean;
  // Optional: path or URL to a real screenshot/preview of the project
  // (e.g. "/projects/exam-system.png" after adding the file to /public).
  // When omitted, the card shows a themed illustration instead.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "AlFawz Academy — Online Islamic Education Platform",
    discipline: "dev",
    featured: true,
    summary:
      "A full-stack platform for structured online Qur'an and Islamic education for children, youth and adults worldwide, with a course catalogue, student registration and login, programmes, sponsorship, events, testimonials and an alumni section.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Render"],
    href: "https://alfawzacademy.com",
    repo: "https://github.com/caliphridwan/ALFAWZ_ACADEMY",
    image: "/projects/alfawz.png",
    size: "lg",
  },
  {
    title: "Automated Online Examination & Results System",
    discipline: "ai",
    featured: true,
    summary:
      "Built a Zapier-powered automation workflow that processes online examination submissions, captures and organizes students’ scores, and automatically sends personalized final results to each student’s email—reducing manual grading and result distribution.",
    tags: ["Zapier", "Webhooks", "Workflow Automation", "Forms", "Education Technology", "Email Automation", "Data Processing"],
    href: "https://zapier.com/editor/377059170/draft/377059171/fields",
    image: "/projects/automation.png",
    size: "md",
  },
  {
    title: "Faculty of Computing Result Portal, BUK",
    discipline: "dev",
    summary:
      "A pilot result management portal for the Faculty of Computing, Bayero University Kano. Lecturers upload scores, results move through department, HOD, Faculty Board and Senate approval, and students then see their published results, GPA and CGPA, with PDF and QR output.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
    href: "https://github.com/caliphridwan/BUKRES",
    image: "/projects/buk.png",
    size: "sm",
  },
  {
    title: "Balinger Autos — Dealership Platform",
    discipline: "dev",
    featured: true,
    summary:
      "A premium car dealership website with an admin platform: vehicle inventory, customer enquiries, test-drive booking with conflict checks, financing and trade-in requests, sales-rep assignment, notifications and activity logs.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Cloudinary"],
    href: "https://balingerautos.onrender.com",
    image: "https://images.unsplash.com/photo-1767907571229-01cf4ba03590?auto=format&fit=crop&w=1600&h=900&q=80",
    size: "sm",
  },
  {
    title: "Adam Chellvan Properties — Property Platform",
    discipline: "dev",
    summary:
      "A property discovery and investor-engagement platform for a Lagos real estate firm: advanced search across buy, rent, lease and invest, lead capture forms, WhatsApp click-to-call, UTM lead attribution, and an admin CRM with a status pipeline, CSV export and monthly reports.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Resend"],
    href: "https://github.com/caliphridwan/adamchellvan",
    image: "https://images.unsplash.com/photo-1543414347-1c348021f279?auto=format&fit=crop&w=1600&h=900&q=80",
    size: "sm",
  },
  {
    title: "Favent Magna — Corporate Website & Admin CMS",
    discipline: "dev",
    summary:
      "A redesign of the Favent Magna Nigeria Limited website where services, partners, projects, page headings and contact details live in the database and can be edited from an admin dashboard without code.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Cloudinary", "Resend"],
    href: "https://favent-magna.onrender.com",
    image: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1600&h=900&q=80",
    size: "sm",
  },
  {
    title: "Naa'ib Associates — Hajj & Travel Platform",
    discipline: "dev",
    summary:
      "A website and admin system for a Hajj and travel company. Package details only appear publicly once staff mark them verified, prices change only with a reason and an audit trail, and booking requests never secure a place until staff confirm the agreed total.",
    tags: ["Next.js 15", "Prisma", "PostgreSQL", "Tailwind CSS 4", "Nodemailer"],
    href: "https://github.com/caliphridwan/Naa-ib-Hajj-Umrah",
    image: "https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?auto=format&fit=crop&w=1600&h=900&q=80",
    size: "sm",
  },
  {
    title: "Markaz-ul-Igathah — Institution Website & Student Portal",
    discipline: "dev",
    summary:
      "A website and portal for an Arabic and Islamic institution: admissions, student registration with automatic matric numbers, Paystack fee payments with QR receipts, printable ID cards, congregation membership, donations and an admin dashboard.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Paystack"],
    href: "https://github.com/caliphridwan/markaz-ul-igathah",
    image: "https://images.unsplash.com/photo-1778754607542-89f546df4b16?auto=format&fit=crop&w=1600&h=900&q=80",
    size: "sm",
  },
  {
    title: "Imam Idris A. Oni — Personal & Academic Website",
    discipline: "dev",
    summary:
      "A Next.js rebuild of a scholar's official website, covering programmes, publications with downloadable documents, a blog, and contact pages, set up for Netlify deployment.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Netlify"],
    href: "https://github.com/caliphridwan/Imam_Idris",
    image: "https://images.unsplash.com/photo-1770131748972-b1a08d57efbc?auto=format&fit=crop&w=1600&h=900&q=80",
    size: "sm",
  },
  {
    title: "Complex Spine & Scoliosis Surgery Clinic Website",
    discipline: "dev",
    summary:
      "A Next.js rebuild of a surgical clinic's website with a patient journey timeline, team profiles with a shared profile modal, patient stories, an FAQ accordion and an enquiry form. All content lives in one editable data file.",
    tags: ["Next.js 14", "React", "Content-driven"],
    href: "https://github.com/caliphridwan/SurgeonMut",
    image: "https://images.unsplash.com/photo-1551601651-09492b5468b6?auto=format&fit=crop&w=1600&h=900&q=80",
    size: "sm",
  },
  {
    title: "Fila House — Traditional Caps Marketplace",
    discipline: "dev",
    summary:
      "A full-stack store for local caps such as Atiku, Tangaran, Maroofiya and Bindo: category browsing, search, cart, delivery pricing by zone, Paystack checkout with server-side price and stock validation, and an admin panel.",
    tags: ["Node.js", "Express", "PostgreSQL", "Paystack", "Cloudinary"],
    href: "https://fila-house.onrender.com",
    repo: "https://github.com/caliphridwan/FILA_HOUSE",
    image: "/projects/caps.jpeg",
    size: "sm",
  },
  {
    title: "Automatic Name Frame System",
    discipline: "dev",
    summary:
      "An ordering app for personalised Islamic name frames: customers search or type a name, preview it in the frame style, add it to a cart, pay online through Paystack, and the admin dashboard tracks orders and sends email notifications.",
    tags: ["Node.js", "Express", "Paystack", "Email notifications"],
    href: "https://github.com/caliphridwan/CRFRAMES",
    image: "/projects/nameimg.jpeg",
    size: "sm",
  },
  {
    title: "Product Sales Categorization & Analysis",
    discipline: "data",
    featured: true,
    summary:
      "Analyzed and visualized product data in Tableau, categorizing items such as tea, coffee, and chocolate to uncover sales patterns, product performance, and actionable business insights.",
    tags: ["Excel", "SQL", "Tableau"],
    image: "/projects/analysis.jpeg",
    href: "https://public.tableau.com/app/profile/ridwan.olatunde/viz/Book1_17846334237580/Dashboard1?publish=yes",
    size: "sm",
  },
  {
    title: "Islamic Name Frame Design",
    discipline: "design",
    featured: true,
    summary:
      "Designed elegant personalized Islamic name frames in Canva, combining Arabic typography, meaningful translations, and refined Islamic aesthetics for digital and social media use.",
    tags: ["Canva", "Brand system", "Design tokens"],
    href: "https://canva.link/0q3501lxp71zbje",
    image: "/projects/frame.jpeg",
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
      "Created visual materials and digital designs that communicate ideas effectively and strengthen brand identity using Adobe Photoshop, Canva, & Adobe Illustrator.",
  },
  {
    period: "Education",
    role: "B.sc Computer Science & Economics",
    org: "Bayero University, Kano.",
    discipline: "dev",
    description: "Best Graduating Student — Department of Computer Science & Economics, Faculty of Computer Science & Information Technology.",
  },
];

// ────────────────────────────────────────────────────────────────
// Headquarters content (used by the redesigned layout)
// ────────────────────────────────────────────────────────────────

// Drives the live "working hours overlap" board in the hero.
// Change coreStart / coreEnd to match the hours you really want to offer.
export const hq = {
  city: "Ilorin",
  timezone: "Africa/Lagos",
  zoneLabel: "WAT",
  coreStart: 9,
  coreEnd: 18,
  availability: "Open to remote roles worldwide",
  partners: [
    { label: "London", tz: "Europe/London" },
    { label: "Berlin", tz: "Europe/Berlin" },
    { label: "Dubai", tz: "Asia/Dubai" },
    { label: "New York", tz: "America/New_York" },
    { label: "San Francisco", tz: "America/Los_Angeles" },
  ],
};

export const departments: Record<Discipline, { name: string; line: string }> = {
  ai: {
    name: "AI Automation",
    line: "Workflows that take over the repetitive parts of a business, from the submitted form to the email that goes out.",
  },
  dev: {
    name: "Full-Stack Development",
    line: "Websites, portals and platforms with a database, payments and an admin dashboard your team can run without code.",
  },
  data: {
    name: "Data Analysis",
    line: "Spreadsheets and databases turned into dashboards that show what is selling and why.",
  },
  design: {
    name: "Graphic Design",
    line: "Brand, social and print visuals, including Arabic typography.",
  },
};

export const process = [
  {
    title: "Brief",
    text: "We agree what the project must do, who will use it and what already exists.",
  },
  {
    title: "Design",
    text: "I lay out the structure and visuals first, so changes are cheap.",
  },
  {
    title: "Build",
    text: "I build in working stages you can open and test, not one big reveal.",
  },
  {
    title: "Launch",
    text: "I deploy, document and hand over. Admin dashboards let your team update content without code.",
  },
];

export const ways = [
  {
    title: "Join your team",
    text: "Remote full-time or part-time roles in web development, automation or data.",
  },
  {
    title: "Build a project",
    text: "A website, portal or admin system, scoped and delivered end to end.",
  },
  {
    title: "Automate a workflow",
    text: "Connect forms, spreadsheets, email and payments so routine work runs itself.",
  },
];

// Tools shown in the scrolling strip under the hero.
export const stack = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Zapier",
  "Make",
  "OpenAI API",
  "SQL",
  "Tableau",
  "Photoshop",
  "Illustrator",
];
