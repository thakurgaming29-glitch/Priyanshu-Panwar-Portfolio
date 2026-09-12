export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'styling' | 'tools';
  level: string;
  description?: string;
  iconName: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface SocialLinks {
  whatsapp: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  qualification: string;
  profession: string;
  email: string;
  whatsapp: string;
  whatsappUrl: string;
  bio: string;
  avatar?: string;
  iconImage?: string;
  professionImage?: string;
  locationStatus: string;
  status: string;
}
