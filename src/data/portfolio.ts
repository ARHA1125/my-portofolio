export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  madeWith: string;
  description: string;
  image?: string;
  imagePosition?: string;
  frame?: "browser" | "none";
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Website: Wirabhakti Basketball Academy",
    madeWith: "Next.js - TailwindCSS",
    description:
      "Sebuah website untuk membantu pengelolaan data pada wirabhakti basket academy. fitur unggulan kami adalah penagihan spp bulanan secara otomatis melalui whatsapp dengan menggunakan WAHA API.",
    image: "/images/Salinan dari PORTOFOLIO ALVIN (1).png",
    imagePosition: "center 15%",
    frame: "browser",
    links: [
      { label: "Live site", href: "https://wirabhakti.my.id" },
      { label: "Code", href: "https://github.com/ARHA1125/BASKET_AKADEMI" },
    ],
    featured: true,
  },
  {
    name: "Atmoscope",
    madeWith: "Kotlin - REST API",
    description: "Android weather & astronomy app: Real-time weather and celestial position data in one view.",
    image: "/images/atmoscopes.webp",
    imagePosition: "center 30%",
    frame: "none",
    links: [{ label: "Code", href: "https://github.com/lndydx/Atmoscope" }],
  },
  {
    name: "Lnx Shader",
    madeWith: "GLSL",
    description: "Lnx Shader is a graphical rework pack for Minecraft Java Edition. Recommended for Low-Mid End device.",
    image: "/images/lnxshader.webp",
    imagePosition: "center",
    frame: "none",
    links: [
      { label: "Code", href: "https://github.com/lndydx/LnxShader" },
      { label: "Download", href: "https://github.com/lndydx/LnxShader/releases" },
    ],
  },
  {
    name: "Beyond Netherite Modpack",
    madeWith: "Java - Fabric",
    description: "A custom modpack that includes tools and armor made of obsidian and two new mobs",
    image: "/images/beyond_netherite.webp",
    imagePosition: "center",
    frame: "none",
    links: [
      { label: "Code", href: "https://github.com/lndydx/BeyondNetherite" },
      { label: "Download", href: "https://github.com/lndydx/BeyondNetherite/releases" },
    ],
  },
  {
    name: "Math Visualization",
    madeWith: "Python - Manim",
    description: "Mathematical visualizations made with Manim animation engine. From calculus to linear algebra.",
    image: "/images/math.webp",
    imagePosition: "center 10%",
    frame: "none",
    links: [
      { label: "Code", href: "https://github.com/lndydx/Manim_Math_Visualization" },
    ],
  },
];

export type ExperienceItem = { role: string; org: string; desc: string; duration: string };

export const experience: ExperienceItem[] = [
  {
    role: "BEM Polinema kampus Lumajang",
    org: "Ketua Divisi Kominfo",
    desc: "Responsible for managing the organization's information and communication technology, including website management, social media management, and internal communication.",
    duration: "2024 - 2025",
  },
  {
    role: "Pemrograman Software Komputer ",
    org: "Lembaga Sertifikasi Profesi (LSP) Polinema",
    desc: "Completed the Computer Software Programming competency test and received a certificate of competence.",
    duration: "Certificate",
  },
];