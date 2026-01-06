import React from 'react';
import { Experience } from '../types';
import { ExternalLink } from 'lucide-react';

export const ExperienceItem: React.FC<{ data: Experience }> = ({ data }) => {
  // Use the period string directly as we removed the type suffix in constants
  const dateStr = data.period;

  return (
    <div className="group mb-16 last:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-6 border-l-2 border-transparent hover:border-black pl-0 hover:pl-6 transition-all duration-200">
        {/* Left Col: Meta */}
        <div className="md:col-span-4 lg:col-span-3">
            <div className="mb-2">
              <span className="block font-mono text-sm tracking-wider text-muted-foreground uppercase">
                {dateStr}
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold leading-none mb-1">
              {data.url ? (
                <a 
                  href={data.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline decoration-1 underline-offset-4 hover:decoration-[3px] flex items-center gap-3 group/link w-fit"
                >
                  {data.company}
                  <ExternalLink size={16} className="text-neutral-500 group-hover/link:text-black transition-colors duration-200 inline-block" />
                </a>
              ) : (
                data.company
              )}
            </h3>
            <span className="block font-mono text-xs text-muted-foreground mt-1">
              {data.location}
            </span>
        </div>

        {/* Right Col: Details */}
        <div className="md:col-span-8 lg:col-span-9">
          <h4 className="font-serif text-xl font-medium italic mb-4 border-b border-black pb-2 inline-block">
            {data.role}
          </h4>
          
          <p className="font-sans text-lg leading-relaxed mb-6">
            {data.description}
          </p>

          <ul className="space-y-3 mb-6">
            {data.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start font-sans text-base text-neutral-800">
                <span className="mr-3 mt-1.5 h-1 w-1 bg-black shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {data.tech.map((t) => (
              <span 
                key={t} 
                className="font-mono text-xs border px-2 py-1 uppercase tracking-wider transition-colors duration-200 border-black text-black hover:bg-black hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};