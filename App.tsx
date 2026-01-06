import React, { useState } from 'react';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectItem } from './components/ProjectItem';
import { RESUME_DATA } from './constants';
import { Mail, Linkedin, Github, MapPin, ArrowRight, ExternalLink, Share2, Check } from 'lucide-react';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-black selection:text-white relative">
      
      {/* Toast Notification */}
      <div 
        className={`fixed top-24 right-6 z-[100] bg-black text-white px-6 py-4 border border-white transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center gap-3">
           <Check size={16} className="text-white" />
           <p className="font-mono text-xs uppercase tracking-widest">CV link copied to clipboard</p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 print:hidden">
        
        {/* Contact Icons */}
        <div className="flex flex-col gap-3">
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`} 
            className="bg-white text-black border-2 border-black p-3 hover:bg-black hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={1.5} />
          </a>
          <a 
            href={`https://${RESUME_DATA.contact.linkedin}`} 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-black border-2 border-black p-3 hover:bg-black hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a 
            href={`https://${RESUME_DATA.contact.github}`} 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-black border-2 border-black p-3 hover:bg-black hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
        </div>

        {/* Share Button */}
        <button 
          onClick={handleShare}
          className="bg-black text-white border-2 border-black px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-black transition-colors duration-200 flex items-center gap-2 mt-2"
          aria-label="Share CV"
        >
          Share CV <Share2 size={16} />
        </button>
      </div>

      {/* Accessible Skip Link */}
      <a 
        href="#main-content"
        className="fixed top-0 left-0 -translate-y-full focus:translate-y-0 z-[100] bg-black text-white px-6 py-3 font-mono text-sm uppercase tracking-widest transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Navigation / Top Bar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b-[4px] border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <span className="font-mono text-sm tracking-widest uppercase font-bold">
            {RESUME_DATA.name}
          </span>
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:underline decoration-1 underline-offset-4"
          >
            Contact Me <div className="w-2 h-2 bg-black animate-pulse" />
          </a>
        </div>
      </nav>

      <main id="main-content" className="pt-24 focus:outline-none" tabIndex={-1}>
        
        {/* HERO SECTION */}
        <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32 pt-12 md:pt-24">
          <div className="relative border-b-[4px] border-black pb-12 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Decorative Square on the line */}
            <div className="absolute -bottom-[10px] right-0 w-5 h-5 bg-white border-[4px] border-black" />

            <div className="w-full">
              <h1 className="font-serif leading-[0.8] tracking-tighter mb-8 lg:mb-0">
                <span className="block text-[18vw] lg:text-[11rem] font-bold text-black leading-none">
                  {RESUME_DATA.name.split(' ')[0]}
                </span>
                <span className="block text-[12vw] lg:text-[7rem] italic font-light translate-x-[4vw] lg:translate-x-8 -mt-2 lg:-mt-4 text-neutral-800 leading-none">
                  {RESUME_DATA.name.split(' ')[1]}
                </span>
              </h1>
            </div>
            
            <div className="mb-2 lg:mb-4 lg:max-w-md w-full lg:text-right flex flex-col items-start lg:items-end">
              <div className="font-mono text-sm tracking-widest border border-black inline-block px-3 py-1 uppercase mb-6 bg-white">
                {RESUME_DATA.headline}
              </div>
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-balance">
                {RESUME_DATA.subheadline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Photo Placeholder */}
            <div className="md:col-span-4 lg:col-span-3 order-1 md:order-2">
              <div className="aspect-[4/5] bg-neutral-100 border-[1px] border-black relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                {RESUME_DATA.avatarUrl ? (
                   <img src={RESUME_DATA.avatarUrl} alt={RESUME_DATA.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-200">
                    <span className="font-mono text-xs uppercase tracking-widest opacity-50">Portrait</span>
                  </div>
                )}
              </div>
            </div>

            {/* Summary Text */}
            <div className="md:col-span-8 lg:col-span-9 space-y-6 order-2 md:order-1">
              <p className="font-sans text-lg md:text-xl leading-relaxed max-w-3xl">
                {RESUME_DATA.summary.join(' ')}
              </p>
              
              <div className="flex flex-col justify-end items-start gap-4 pt-4">
                 {/* Contact Links */}
                 <div className="flex gap-6">
                    <a href={`mailto:${RESUME_DATA.contact.email}`} className="group p-4 border border-black hover:bg-black hover:text-white transition-colors duration-100" aria-label="Email">
                      <Mail size={24} strokeWidth={1.5} />
                    </a>
                    <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="group p-4 border border-black hover:bg-black hover:text-white transition-colors duration-100" aria-label="LinkedIn">
                      <Linkedin size={24} strokeWidth={1.5} />
                    </a>
                    <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" rel="noreferrer" className="group p-4 border border-black hover:bg-black hover:text-white transition-colors duration-100" aria-label="GitHub">
                      <Github size={24} strokeWidth={1.5} />
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* REFERENCES (Moved Up) */}
        <Section title="References" id="references">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {RESUME_DATA.references.map((ref, idx) => (
               <div key={idx} className="group border border-transparent hover:border-black p-6 transition-all duration-200">
                 <h3 className="font-serif text-xl font-bold mb-1">{ref.name}</h3>
                 <p className="font-sans text-lg italic mb-2">{ref.title}</p>
                 <p className="font-mono text-xs uppercase tracking-widest mb-4">@ {ref.company}</p>
                 <a 
                   href={ref.url || "#"} 
                   className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-black pb-0.5 hover:pb-1 transition-all"
                 >
                   {ref.linkedin} <ExternalLink size={12} />
                 </a>
               </div>
             ))}
           </div>
        </Section>

        {/* EXPERIENCE */}
        <Section title="Selected Experience" id="experience">
          <div className="space-y-8">
            {RESUME_DATA.experience.map((job, idx) => (
              <ExperienceItem key={idx} data={job} />
            ))}
          </div>
        </Section>

        {/* KEY PROJECTS (New Section) */}
        <Section title="Key Initiatives" id="projects">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {RESUME_DATA.projects.map((project, idx) => (
              <ProjectItem key={idx} data={project} />
            ))}
          </div>
        </Section>

        {/* CORE EXPERTISE (Moved Down) */}
        <Section title="Core Expertise" id="skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-16">
            {RESUME_DATA.skills.map((category) => (
              <div key={category.title} className="flex flex-col">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest mb-6 border-b border-black pb-2">
                  {category.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {category.skills.map(skill => (
                    <li 
                      key={skill} 
                      className="font-serif text-lg leading-tight px-3 py-2 -mx-3 hover:bg-black hover:text-white transition-colors duration-100 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        
        {/* EDUCATION */}
        <Section title="Education" id="education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {RESUME_DATA.education.map((edu, idx) => (
               <div key={idx} className="border-l-[1px] border-black pl-6 py-1">
                 <h3 className="font-serif text-xl font-bold">{edu.institution}</h3>
                 <p className="font-sans text-lg italic mb-1">{edu.degree}</p>
                 <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">{edu.location}</p>
               </div>
             ))}
          </div>
        </Section>

        {/* SYSTEMS THINKING (Inverted) */}
        <Section title="Engineering Values" inverted id="values">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {RESUME_DATA.values.map((value, idx) => (
              <div key={idx} className="border border-white/20 p-8 hover:bg-white hover:text-black transition-colors duration-100 group">
                <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="font-mono text-sm opacity-50 group-hover:text-black">0{idx + 1}.</span>
                  {value.title}
                </h3>
                <p className="font-sans text-lg opacity-80 group-hover:opacity-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/20">
            <h3 className="font-mono text-sm uppercase tracking-widest mb-6">Current Focus</h3>
            <p className="font-serif text-2xl md:text-3xl leading-tight max-w-3xl">
              {RESUME_DATA.currentFocus}
            </p>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="border-t-[4px] border-black py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-8">
                  Let's start a<br/>conversation.
                </h2>
                <div className="flex flex-col gap-4 items-start">
                   <a 
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="flex items-center gap-4 text-xl font-mono border-b-2 border-black pb-1 hover:bg-black hover:text-white hover:px-2 transition-all duration-100"
                   >
                     {RESUME_DATA.contact.email} <ArrowRight size={20} />
                   </a>
                </div>
              </div>
              
              <div className="md:text-right space-y-6">
                <div className="space-y-2">
                  <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-serif text-xl flex items-center md:justify-end gap-2">
                    <MapPin size={18} /> {RESUME_DATA.contact.location}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Social</p>
                  <div className="flex md:justify-end gap-6">
                    <a href={`https://${RESUME_DATA.contact.linkedin}`} className="font-serif text-lg hover:underline decoration-2 underline-offset-4">LinkedIn</a>
                    <a href={`https://${RESUME_DATA.contact.github}`} className="font-serif text-lg hover:underline decoration-2 underline-offset-4">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span>© {new Date().getFullYear()} Lekan Koku.</span>
              <span>Designed with Minimalist Monochrome</span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;