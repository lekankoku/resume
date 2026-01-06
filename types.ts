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
}

export interface ResumeData {
  name: string;
  headline: string;
  subheadline: string;
  summary: string[];
  avatarUrl?: string; 
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
  values: Value[];
  references: Reference[];
  currentFocus: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
}