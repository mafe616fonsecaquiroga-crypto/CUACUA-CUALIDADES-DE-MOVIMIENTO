import React from 'react';

interface SectionHeaderProps {
  identifier: string;
  exactTitle: string;
  subtitle?: string;
  backgroundWord?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  identifier,
  exactTitle,
  subtitle,
  backgroundWord,
}) => {
  return (
    <div className="relative mb-12 sm:mb-16 overflow-hidden">
      {/* Ghost Background Word */}
      {backgroundWord && (
        <div 
          aria-hidden="true"
          className="absolute -top-6 -left-6 select-none pointer-events-none font-display text-[90px] sm:text-[140px] lg:text-[180px] text-white/[0.03] uppercase tracking-tighter leading-none"
        >
          {backgroundWord}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-start gap-2">
        {/* Punk Identifier Tag */}
        <div className="inline-flex items-center gap-2 bg-[#ff003f] text-black px-3 py-1 font-display tracking-widest text-sm uppercase transform -rotate-1 border border-black shadow-[3px_3px_0px_#ffffff]">
          <span>{identifier}</span>
        </div>

        {/* Exact Section Title */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f3f2ee] tracking-tight uppercase leading-[0.95] max-w-4xl mt-2">
          {exactTitle}
        </h2>

        {/* Optional Editorial Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg text-[#dcd8ce] font-sans-clean max-w-3xl mt-1 border-l-2 border-[#ff003f] pl-3">
            {subtitle}
          </p>
        )}

        {/* Punk Jagged Divider */}
        <div className="w-full h-1 bg-[#282832] mt-4 relative">
          <div className="absolute top-0 left-0 w-32 h-1 bg-[#ff003f]" />
        </div>
      </div>
    </div>
  );
};
