import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Section01Movement } from './components/Section01Movement';
import { Section02Score } from './components/Section02Score';
import { Section03Creator } from './components/Section03Creator';
import { FinalCTA } from './components/FinalCTA';
import { SITE_METADATA } from './data/curriculum';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('seccion-01');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SITE_METADATA.sections.map((sec) =>
        document.getElementById(sec.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SITE_METADATA.sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-[#f3f2ee] font-sans-clean antialiased selection:bg-[#ff003f] selection:text-black">
      
      {/* Top Punk Navigation Bar */}
      <Navigation activeSection={activeSection} />

      {/* Floating Side Rail Indicator for Desktop */}
      <div 
        aria-hidden="true"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 select-none pointer-events-auto"
      >
        <div className="bg-[#121217] border-2 border-white/80 p-2 shadow-[3px_3px_0px_#ff003f] flex flex-col gap-2">
          {SITE_METADATA.sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleScrollToSection(sec.id)}
                className={`group flex items-center gap-2 px-2 py-1 text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ff003f] text-black font-bold'
                    : 'text-[#a8a59e] hover:text-white'
                }`}
                title={sec.exactTitle}
              >
                <span className="font-display text-sm">{sec.navNumber}</span>
                <span className="max-w-0 overflow-hidden group-hover:max-w-36 transition-all duration-300 whitespace-nowrap text-[10px] uppercase">
                  {sec.navLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Semantic Content Area */}
      <main>
        {/* Hero Section */}
        <Hero onEnterGame={() => handleScrollToSection('seccion-01')} />

        {/* Section 01: El Juego del Movimiento: Más allá de "saber bailar" */}
        <Section01Movement />

        {/* Section 02: La Partitura Teatral: Tu GPS de Acción */}
        <Section02Score />

        {/* Section 03: Conclusión: El Mix Perfecto del Creador 360° */}
        <Section03Creator />
      </main>

      {/* Final Call to Action & Semantic Footer */}
      <FinalCTA />

    </div>
  );
}
