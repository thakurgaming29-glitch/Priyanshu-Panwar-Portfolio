import { PersonalInfo, Project, ServiceItem, SkillItem, SocialLinks } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Thakur Priyanshu Panwar",
  shortName: "Priyanshu Panwar",
  qualification: "BCA (Bachelor of Computer Applications)",
  profession: "Website Developer",
  email: "priyanshupanwar19316@gmail.com",
  whatsapp: "+12059948255",
  whatsappUrl: "https://wa.me/12059948255?text=Hello%20Priyanshu%2C%20I%20found%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project.",
  avatar: "/profile.jpg",
  iconImage: "/icon.jpg",
  professionImage: "/profession.jpg",
  bio: "I am a skilled and dedicated Website Developer with a formal qualification in BCA (Bachelor of Computer Applications). I specialize in designing and engineering high-impact, modern, responsive websites that load rapidly, look visually striking, and provide effortless navigation across desktop, tablet, and mobile devices.",
  locationStatus: "Available for new projects & remote work",
  status: "Open to Opportunities"
};

export const socialLinks: SocialLinks = {
  whatsapp: "https://wa.me/12059948255",
  email: "mailto:priyanshupanwar19316@gmail.com",
  github: "#",
  linkedin: "#",
  instagram: "#"
};

export const skills: SkillItem[] = [
  {
    name: "HTML5",
    category: "frontend",
    level: "Proficient",
    description: "Semantic structures, accessible markups, and standard compliance.",
    iconName: "FileCode2"
  },
  {
    name: "CSS3",
    category: "styling",
    level: "Proficient",
    description: "Modern styling, Flexbox, Grid, CSS animations, and modular styles.",
    iconName: "Palette"
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: "Proficient",
    description: "ES6+ syntax, asynchronous programming, DOM manipulation, and modern logic.",
    iconName: "Code2"
  },
  {
    name: "React",
    category: "frontend",
    level: "Proficient",
    description: "Component architecture, hooks, state handling, and dynamic interfaces.",
    iconName: "Layers"
  },
  {
    name: "Responsive Web Design",
    category: "styling",
    level: "Proficient",
    description: "Fluid layouts, media queries, mobile-first design, and cross-browser consistency.",
    iconName: "Smartphone"
  },
  {
    name: "UI/UX",
    category: "styling",
    level: "Proficient",
    description: "Clean typography, hierarchy, accessibility, and user-friendly aesthetics.",
    iconName: "Sparkles"
  },
  {
    name: "Git",
    category: "tools",
    level: "Proficient",
    description: "Version control, branching workflows, commits, and collaborative code tracking.",
    iconName: "GitBranch"
  },
  {
    name: "GitHub",
    category: "tools",
    level: "Proficient",
    description: "Remote repositories, code hosting, open source collaboration, and project organization.",
    iconName: "FolderGit2"
  },
  {
    name: "Website Deployment",
    category: "tools",
    level: "Proficient",
    description: "Hosting setup, continuous deployment with Netlify/Vercel, custom domain linking.",
    iconName: "Globe"
  }
];

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Website Development",
    description: "Create modern and responsive websites with clean code, fast loading speeds, and robust cross-browser reliability.",
    iconName: "Code",
    deliverables: ["Custom Codebase", "Clean Architecture", "Fast Performance"]
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description: "Websites that work smoothly on desktop, tablet and mobile devices with adaptive navigation and fluid layout scaling.",
    iconName: "MonitorSmartphone",
    deliverables: ["Mobile-First Approach", "Fluid Grid Layouts", "Touch Optimization"]
  },
  {
    id: 3,
    title: "Landing Page Development",
    description: "Modern landing pages for businesses, products and personal brands crafted to communicate clearly and convert visitors.",
    iconName: "Rocket",
    deliverables: ["High Conversion Focus", "Engaging Hero Section", "Call to Actions"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Professional portfolio websites for individuals and developers to showcase their identity, skills, and projects elegantly.",
    iconName: "Briefcase",
    deliverables: ["Personal Branding", "Dynamic Project Gallery", "Direct Contact Links"]
  },
  {
    id: 5,
    title: "Business Website",
    description: "Modern websites for businesses and startups tailored to highlight services, company profiles, and customer inquiry pathways.",
    iconName: "Building2",
    deliverables: ["Service Presentations", "Contact Integrations", "Professional Presence"]
  }
];

/**
 * REUSABLE PROJECTS ARRAY
 * You can add new projects by simply appending another object to this array.
 * If projects array is empty ([]), the UI will automatically display a clean "Projects coming soon" state.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Business Landing Page",
    description: "A clean, high-conversion business landing page featuring dynamic navigation, responsive service cards, and an interactive contact channel.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    technologies: ["React", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Developer Portfolio Platform",
    description: "A sleek developer showcase application with dark aesthetic, component modularity, fluid responsiveness, and centralized project configuration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    technologies: ["React", "JavaScript", "Responsive Web Design", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Interactive Web Showcase UI",
    description: "A responsive website interface highlighting clean typography, modern grid arrangements, smooth interaction states, and accessibility standards.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
