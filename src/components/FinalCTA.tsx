import React from 'react';
import { ArrowUp, Flame, Zap, Shield, Sparkles } from 'lucide-react';
import { SECTION_03_CONTENT } from '../data/curriculum';

export const FinalCTA: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToScore = () => {
    const el = document.getElementById('seccion-02');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      aria-label="Manifiesto Final y Cierre"
      className="relative bg-black text-[#f3f2ee] pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-t-8 border-[#ff003f] overflow-hidden"
    >
      {/* Background Halftone & Texture */}
      <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />

      {/* Giant Background Word */}
      <div 
        aria-hidden="true" 
        className="absolute -bottom-10 right-0 select-none pointer-events-none font-display text-[140px] sm:text-[240px] lg:text-[340px] text-white/[0.02] leading-none uppercase"
      >
        ESPACIO
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Punk Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ff003f] text-black px-4 py-1.5 font-display text-base tracking-widest uppercase transform -rotate-1 border-2 border-white shadow-[4px_4px_0px_#ffffff] mb-8">
          <Flame className="w-5 h-5 fill-black" />
          <span>DECLARACIÓN FINAL DEL INTÉRPRETE</span>
        </div>

        {/* Giant Main Phrase from Document */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.88] text-[#f3f2ee] mb-6">
          TU CUERPO ES EL <br />
          <span className="text-[#ff003f] bg-white text-black px-4 py-0.5 inline-block transform -rotate-1 my-2">
            ÚNICO VEHÍCULO
          </span> <br />
          QUE TIENES
        </h2>

        {/* Subordinate Phrase from Document */}
        <div className="relative inline-block my-6">
          <p className="font-display text-4xl sm:text-6xl md:text-7xl text-[#f3f2ee] tracking-wider uppercase">
            "ADUEÑATE DEL ESPACIO."
          </p>
          <div className="h-2 bg-[#ff003f] w-full mt-2 transform -rotate-1" />
        </div>

        {/* Manifesto text from Document */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#dcd8ce] font-sans-clean leading-relaxed mb-10">
          {SECTION_03_CONTENT.finalCallToAction.manifesto}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToTop}
            className="px-8 py-4 bg-[#ff003f] text-black font-display text-2xl tracking-widest uppercase hover:bg-white transition-all cursor-pointer flex items-center gap-3 border-2 border-white shadow-[5px_5px_0px_#ffffff] active:translate-x-1 active:translate-y-1"
          >
            <span>VOLVER AL INICIO ↑</span>
            <ArrowUp className="w-5 h-5" />
          </button>

          <button
            onClick={scrollToScore}
            className="px-8 py-4 bg-[#141418] text-[#f3f2ee] font-display text-2xl tracking-widest uppercase hover:border-[#ff003f] hover:text-[#ff003f] transition-all cursor-pointer border-2 border-[#333] shadow-[5px_5px_0px_#222]"
          >
            REVISAR LA PARTITURA TEATRAL
          </button>
        </div>

        {/* Colophon & Reference Credits */}
        <div className="pt-10 border-t border-[#22222a] text-xs font-mono text-[#a8a59e] grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div>
            <div className="font-display text-base text-[#ff003f] uppercase mb-1">
              EL JUEGO DEL MOVIMIENTO
            </div>
            <p className="text-[11px] leading-relaxed">
              Portal pedagógico y cuaderno escénico sobre el cuerpo como herramienta de trabajo y la partitura como estructura dramática.
            </p>
          </div>

          <div>
            <div className="font-display text-base text-[#f3f2ee] uppercase mb-1">
              MARCO CONCEPTUAL
            </div>
            <p className="text-[11px] leading-relaxed">
              Fundamentos extraídos de Jerzy Grotowski, Eugenio Barba, Konstantin Stanislavski, Vsevolod Meyerhold y Rudolf Laban.
            </p>
          </div>

          <div className="md:text-right">
            <div className="font-display text-base text-[#ff007f] uppercase mb-1">
              ESTÉTICA PUNK FANZINE
            </div>
            <p className="text-[11px] leading-relaxed">
              Diseño modular de alto contraste, tipografía condensada y gráficos de artes vivas contemporáneas.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
