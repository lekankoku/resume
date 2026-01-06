export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  url?: string;
}

export interface Project {
  title: string;
  context: string; // e.g. "at Doodle"
  description: string;
  outcome: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Value {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
}

export interface Reference {
  name: string;
  title: string;
  company: string;
  linkedin: string; // just the label or partial url for display
  url?: string; // actual link if different
  quote?: string; // testimonial quote
}

export interface Article {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  platform?: string; // e.g. "Medium", "Dev.to", "Personal Blog"
}

export interface OpenSourceProject {
  name: string;
  description: string;
  url: string;
  stars?: number;
  tech: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Talk {
  title: string;
  event: string;
  date: string;
  url?: string;
  type: "conference" | "meetup" | "internal" | "podcast";
}

export interface Stat {
  label: string;
  value: string;
}

export interface ResumeData {
  name: string;
  headline: string;
  subheadline: string;
  summary: string[];
  avatarUrl?: string; 
  availabilityStatus?: string; // e.g. "Open to opportunities", "Currently employed"
  stats?: Stat[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
  values: Value[];
  references: Reference[];
  articles?: Article[];
  openSourceProjects?: OpenSourceProject[];
  certifications?: Certification[];
  talks?: Talk[];
  currentFocus: string;
  languages: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
}