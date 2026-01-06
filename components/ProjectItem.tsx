import React from 'react';
import { Project } from '../types';

export const ProjectItem: React.FC<{ data: Project }> = ({ data }) => {
  return (
    <div className="group h-full border border-black p-6 md:p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-200">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-serif text-2xl font-bold leading-tight">
            {data.title}
          </h3>
          <span className="font-mono text-xs uppercase tracking-widest border border-current px-2 py-1 ml-4 whitespace-nowrap opacity-70 group-hover:opacity-100">
            {data.context}
          </span>
        </div>
        
        <p className="font-sans text-lg leading-relaxed mb-6 opacity-90 group-hover:opacity-100">
          {data.description}
        </p>
      </div>

      <div>
        <div className="mb-4 pt-4 border-t border-current">
          <span className="block font-mono text-xs uppercase tracking-widest mb-1 opacity-70">Outcome</span>
          <p className="font-serif text-lg italic">
            {data.outcome}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {data.tech.map((t) => (
            <span 
              key={t} 
              className="font-mono text-[10px] border border-current px-2 py-1 uppercase tracking-wider group-hover:border-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};