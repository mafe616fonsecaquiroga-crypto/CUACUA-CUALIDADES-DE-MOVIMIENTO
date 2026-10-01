import React from 'react';
import { ArrowDown, Flame, Zap, ShieldAlert } from 'lucide-react';
import { SITE_METADATA } from '../data/curriculum';

interface HeroProps {
  onEnterGame: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnterGame }) => {
  return (
    <section 
      aria-label="Portada y Prólogo"
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden border-b-4 border-black bg-[#0b0b0c] text-[#f3f2ee] pt-8 pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle Halftone & Xerox Background Overlays */}
      <div className="absolute inset-0 bg-halftone opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-20" />

      {/* Decorative Punk Backdrop Stamp / Giant Typography */}
      <div 
        aria-hidden="true"
        className="absolute -top-12 -right-12 select-none pointer-events-none font-display text-[140px] sm:text-[220px] lg:text-[300px] text-white/[0.03] leading-none uppercase"
      >
        IMPULSO
      </div>

      <div className="relative max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between z-10">
        
        {/* Top Zine Header Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#2b2b34] pb-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl text-[#ff003f] tracking-tighter">
              {SITE_METADATA.hero.number}
            </span>
            <div className="h-6 w-[2px] bg-[#3a3a44]" />
            <div className="text-xs uppercase tracking-widest text-[#dcd8ce] flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#ff003f] animate-pulse" />
              <span>CUADERNO DE ENTRENAMIENTO ESCÉNICO</span>
              <span className="text-[#686762]">·</span>
              <span className="text-[#ff007f] font-mono">EDICIÓN 360°</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#a8a59e]">
            <span className="px-2 py-0.5 bg-[#17171d] border border-[#2e2e38] text-[#f3f2ee]">
              ARTES VIVAS // TEATRO FÍSICO
            </span>
          </div>
        </div>

        {/* Central Asymmetric Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          
          {/* Left Column: Titles, Manifesto, High Impact Type */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2 bg-[#ff003f] text-black px-3 py-1 font-display tracking-widest text-sm uppercase transform -rotate-1 shadow-[3px_3px_0px_#ffffff]">
              <Flame className="w-4 h-4 fill-black" />
              <span>MANIFIESTO DEL CUERPO ESCÉNICO</span>
            </div>

            {/* Main Super Title */}
            <div className="relative">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.88] uppercase text-[#f3f2ee]">
                EL JUEGO DEL <br />
                <span className="text-[#ff003f] underline decoration-4 decoration-black decoration-wavy">
                  MOVIMIENTO
                </span>
              </h1>
              
              {/* Handwritten Stamp Sticker */}
              <div className="inline-block sm:absolute sm:-top-6 sm:right-6 bg-white text-black font-marker px-3 py-1 text-sm sm:text-base transform rotate-3 shadow-[4px_4px_0px_#ff003f] mt-3 sm:mt-0">
                ¡MÁS ALLÁ DE "SABER BAILAR"!
              </div>
            </div>

            {/* Subtitle from Document */}
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#dcd8ce] tracking-wide uppercase border-l-4 border-[#ff003f] pl-4">
              {SITE_METADATA.hero.subtitle}
            </p>

            {/* Highlight Quote from Document */}
            <div className="bg-[#141418] border-2 border-[#2b2b36] p-5 sm:p-6 relative masking-tape">
              <div className="text-xs font-mono text-[#ff007f] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>AXIOMA FUNDAMENTAL</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-[#f3f2ee] uppercase">
                "{SITE_METADATA.hero.highlightQuote}"
              </blockquote>
              <p className="text-xs sm:text-sm text-[#a8a59e] mt-2 font-sans-clean leading-relaxed">
                El movimiento escénico no es adorno, es estrategia directa: precisión geométrica, energía extra-cotidiana y una partitura de acción física que atrapa la mirada del espectador.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onEnterGame}
                className="group px-8 py-4 bg-[#ff003f] text-black font-display text-2xl tracking-widest uppercase hover:bg-white hover:text-black transition-all cursor-pointer flex items-center gap-3 border-2 border-black shadow-[5px_5px_0px_#ffffff] active:translate-x-1 active:translate-y-1"
              >
                <span>{SITE_METADATA.hero.cta}</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>

              <span className="text-xs font-mono text-[#a8a59e] uppercase tracking-wider">
                Scroll para explorar las 3 dimensiones del intérprete
              </span>
            </div>
          </div>

          {/* Right Column: Visual Collage Poster */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Offset Red Shadow Box */}
              <div className="absolute inset-0 bg-[#ff003f] transform translate-x-3 translate-y-3 border-2 border-black pointer-events-none" />

              {/* Main Image Frame with photocopier border */}
              <div className="relative bg-[#141418] border-2 border-white p-3 z-10">
                <div className="relative overflow-hidden aspect-[4/3] bg-black">
                  <img
                    src="/src/assets/images/hero_movement_punk_1790869563010.jpg"
                    alt="Collage punk de un intérprete escénico en máxima tensión corporal y dinámica"
                    className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-150 transition-all duration-300"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container in case image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'p-6', 'text-center');
                        parent.innerHTML = '<div class="text-[#ff003f] font-display text-2xl uppercase tracking-wider">CUERPO // TENSIÓN // ESCENA</div>';
                      }
                    }}
                  />
                  {/* Risograph Red Screen Overlay */}
                  <div className="absolute inset-0 bg-[#ff003f]/10 mix-blend-screen pointer-events-none" />
                </div>

                {/* Collage Label Overlays */}
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#dcd8ce] border-t border-[#2e2e38] pt-2">
                  <span className="flex items-center gap-1 text-[#ff003f]">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>FIG. 01 — CUERPO EXTRA-COTIDIANO</span>
                  </span>
                  <span>100% MATERIA PRIMA</span>
                </div>
              </div>

              {/* Floating Punk Stamp Annotation */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-black text-[#f3f2ee] border-2 border-[#ff003f] p-3 transform -rotate-2 shadow-[3px_3px_0px_#ff003f]">
                <div className="font-display text-lg uppercase tracking-wider text-[#ff003f]">
                  NO ES DECORACIÓN
                </div>
                <div className="font-marker text-xs text-white">
                  Es biomecánica de combate escénico
                </div>
              </div>

              {/* Floating Tape Badge */}
              <div className="absolute -top-3 right-6 z-20 bg-[#dcd8ce] text-black text-[11px] font-mono px-3 py-1 font-bold uppercase transform rotate-2 shadow-sm">
                REF: GROTOWSKI / BARBA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three-Pillar Quick Overview Indicator */}
        <div className="mt-12 pt-6 border-t-2 border-[#22222a] grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 bg-[#111115] p-3 border border-[#22222a]">
            <span className="font-display text-2xl text-[#ff003f]">01</span>
            <div>
              <div className="font-display text-sm uppercase text-[#f3f2ee] tracking-wide">EL JUEGO DEL MOVIMIENTO</div>
              <div className="text-xs text-[#a8a59e] font-sans-clean">Energía extra-cotidiana vs. automatismos</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#111115] p-3 border border-[#22222a]">
            <span className="font-display text-2xl text-[#ff003f]">02</span>
            <div>
              <div className="font-display text-sm uppercase text-[#f3f2ee] tracking-wide">LA PARTITURA TEATRAL</div>
              <div className="text-xs text-[#a8a59e] font-sans-clean">El GPS de acción, verbos reales y Laban</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#111115] p-3 border border-[#22222a]">
            <span className="font-display text-2xl text-[#ff003f]">03</span>
            <div>
              <div className="font-display text-sm uppercase text-[#f3f2ee] tracking-wide">EL CREADOR 360°</div>
              <div className="text-xs text-[#a8a59e] font-sans-clean">Fusión total de teatro, danza y espacio</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
