import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "", inverted = false }) => {
  return (
    <section 
      id={id} 
      className={`
        relative py-24 md:py-32 border-t-[4px] 
        ${inverted ? 'bg-black text-white border-white' : 'bg-white text-black border-black'}
        ${className}
      `}
    >
      {/* Background Texture if needed */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay`} />
      
      {/* Editorial Grid Pattern for inverted sections */}
      {inverted && (
         <div 
           className="absolute inset-0 pointer-events-none opacity-[0.05]"
           style={{
             backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 1px, #fff 1px, #fff 2px)`,
             backgroundSize: '4px 100%'
           }}
         />
      )}

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {title && (
            <div className="lg:col-span-3">
              <h2 className={`
                text-3xl md:text-4xl font-serif font-bold tracking-tight mb-2
                ${inverted ? 'text-white' : 'text-black'}
              `}>
                {title}
              </h2>
              <div className={`h-1 w-12 ${inverted ? 'bg-white' : 'bg-black'} mt-4`} />
            </div>
          )}
          <div className={title ? "lg:col-span-9" : "lg:col-span-12"}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};