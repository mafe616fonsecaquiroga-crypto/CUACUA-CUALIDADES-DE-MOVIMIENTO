import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_METADATA } from '../data/curriculum';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff003f] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso de lectura"
      />

      {/* Main Sticky Punk Header */}
      <header className="sticky top-0 z-40 bg-[#0b0b0c]/95 backdrop-blur-md border-b-2 border-[#26262c] text-[#f3f2ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Zone - Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group text-left flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#ff003f] focus-visible:outline-offset-4"
          >
            <span className="bg-[#ff003f] text-black font-display text-xl tracking-wider px-2 py-0.5 uppercase transform -rotate-1 group-hover:rotate-0 transition-transform">
              CINE
            </span>
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-[#f3f2ee] uppercase group-hover:text-[#ff003f] transition-colors">
              EL JUEGO DEL MOVIMIENTO
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {SITE_METADATA.sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border-b-2 ${
                    isActive
                      ? 'border-[#ff003f] text-[#ff003f] bg-[#17171c]'
                      : 'border-transparent text-[#dcd8ce] hover:text-[#f3f2ee] hover:border-[#ff003f]/50'
                  }`}
                >
                  <span className="font-display text-sm text-[#ff003f]">{sec.navNumber}</span>
                  <span className="truncate">{sec.navLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('seccion-01')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#f3f2ee] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#ff003f] hover:text-black transition-colors cursor-pointer border border-black shadow-[2px_2px_0px_#ff003f]"
            >
              <span>LAB ESCÉNICO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#f3f2ee] hover:text-[#ff003f] focus-visible:outline-2 focus-visible:outline-[#ff003f] cursor-pointer"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121215] border-b-2 border-[#ff003f] px-4 pt-3 pb-6 space-y-2">
            <div className="text-[11px] font-mono text-[#a8a59e] uppercase tracking-widest px-2 mb-2">
              Índice de Secciones
            </div>
            {SITE_METADATA.sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-between border-l-2 ${
                    isActive
                      ? 'border-[#ff003f] bg-[#1d1d23] text-[#ff003f]'
                      : 'border-[#2e2e36] text-[#dcd8ce] hover:border-[#ff003f] hover:text-[#f3f2ee]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-display text-base text-[#ff003f]">{sec.navNumber}</span>
                    <span>{sec.navLabel}</span>
                  </span>
                  <span className="text-xs text-[#a8a59e]">Ir →</span>
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('cuaderno-lab')}
                className="w-full text-center py-2.5 bg-[#ff003f] text-black font-display tracking-widest text-sm uppercase hover:bg-white transition-colors"
              >
                ENTRENAR PARTITURA AHORA
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
