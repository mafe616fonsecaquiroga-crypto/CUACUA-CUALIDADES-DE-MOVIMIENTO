import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ExpertLevel } from './ExpertLevel';
import { ObjectCase } from './ObjectCase';
import { MovementQualities } from './MovementQualities';
import { StylizationComparison } from './StylizationComparison';
import { SECTION_02_CONTENT } from '../data/curriculum';
import { Compass, Music, Flame, ShieldAlert, Layers, Clock, Cpu } from 'lucide-react';

export const Section02Score: React.FC = () => {
  return (
    <section 
      id="seccion-02" 
      aria-label="Sección 2: La Partitura Teatral" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0c] text-[#f3f2ee] border-b-4 border-black overflow-hidden"
    >
      {/* Background Giant Punk Typography */}
      <div 
        aria-hidden="true" 
        className="absolute top-28 left-0 select-none pointer-events-none font-display text-[110px] sm:text-[190px] lg:text-[250px] text-white/[0.02] leading-none uppercase"
      >
        PARTITURA
      </div>
      <div 
        aria-hidden="true" 
        className="absolute bottom-20 right-0 select-none pointer-events-none font-display text-[100px] sm:text-[180px] lg:text-[230px] text-[#ff003f]/[0.02] leading-none uppercase"
      >
        BIOMECÁNICA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          identifier="02 / PARTITURA"
          exactTitle="2. La Partitura Teatral: Tu GPS de Acción"
          subtitle="De la intuición salvaje al rigor matemático: acciones físicas, el director-músico de Meyerhold y la arquitectura de la escena."
          backgroundWord="GPS"
        />

        {/* Lead Composition: Meyerhold, Stanislavski & The Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Left: Text as Pretext & Transition to Craft */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#141418] border-2 border-white/80 p-6 sm:p-8 relative masking-tape">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff003f] uppercase mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>MAPA DE ACCIÓN CONTINUA</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#f3f2ee] uppercase tracking-tight mb-4">
                {SECTION_02_CONTENT.textAsPretext.title}
              </h3>

              <p className="text-sm sm:text-base text-[#dcd8ce] font-sans-clean leading-relaxed">
                {SECTION_02_CONTENT.textAsPretext.text}
              </p>

              <div className="mt-4 pt-4 border-t border-[#252530] bg-[#0b0b0c] p-3 text-xs font-mono text-[#a8a59e]">
                <span className="text-[#ff003f] font-bold">REGLA DE ORO:</span> Lo que el cuerpo ejecuta contradice o profundiza la palabra hablada.
              </div>
            </div>

            <div className="bg-[#171720] border-2 border-[#ff003f] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff007f] uppercase mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>LIBERACIÓN POR LA FORMA</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#ff003f] uppercase tracking-tight mb-4">
                {SECTION_02_CONTENT.transitionToCraft.title}
              </h3>

              <p className="text-sm sm:text-base text-[#dcd8ce] font-sans-clean leading-relaxed">
                {SECTION_02_CONTENT.transitionToCraft.text}
              </p>
            </div>
          </div>

          {/* Right: Biomechanics Image Poster with Technical Annotations */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Offset Black Shadow */}
              <div className="absolute inset-0 bg-[#ff003f] transform translate-x-3 translate-y-3 pointer-events-none" />

              <div className="relative bg-[#141418] border-2 border-white p-3 z-10">
                <div className="aspect-[4/3] bg-black overflow-hidden relative group">
                  <img
                    src="/src/assets/images/score_biomechanics_1790869574887.jpg"
                    alt="Intérprete teatral ejecutando una partitura biomecánica milimétrica en el escenario"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#ff003f]/10 mix-blend-screen pointer-events-none" />
                </div>

                <div className="mt-3 border-t border-[#2e2e38] pt-2 text-xs font-mono text-[#dcd8ce] flex items-center justify-between">
                  <span className="text-[#ff003f]">FIG. 02 — BIOMECÁNICA & RIGOR</span>
                  <span>TEMPO: 120 BPM</span>
                </div>
              </div>

              {/* Floating Punk Stamp */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-black text-[#f3f2ee] border-2 border-[#ff003f] p-3 transform -rotate-3 shadow-[3px_3px_0px_#ff003f]">
                <div className="font-display text-lg text-[#ff003f] uppercase">
                  MEYERHOLD: 3 FASES
                </div>
                <div className="font-mono text-xs text-white">
                  Otjas (Rechazo) → Posyl (Acción) → Tochka (Punto)
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Theoretical Anchors: Stanislavski, Meyerhold & Laban */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-2xl text-[#ff003f] uppercase">
              LOS TRES PILARES DE LA PARTITURA
            </span>
            <div className="h-[2px] flex-1 bg-[#252530]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECTION_02_CONTENT.theorists.map((theorist, index) => (
              <div 
                key={index}
                className="bg-[#121217] border-2 border-white/70 p-6 flex flex-col justify-between hover:border-[#ff003f] transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-[#ff007f] uppercase tracking-wider block mb-1">
                    {theorist.concept}
                  </span>
                  <h4 className="font-display text-2xl uppercase tracking-tight text-[#f3f2ee] mb-3">
                    {theorist.author}
                  </h4>
                  <blockquote className="bg-[#0b0b0c] border-l-2 border-[#ff003f] p-3 text-xs italic text-[#dcd8ce] mb-3 font-sans-clean">
                    "{theorist.quote}"
                  </blockquote>
                  <p className="text-xs text-[#a8a59e] font-sans-clean leading-relaxed">
                    {theorist.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#202028] text-[11px] font-mono text-[#7a7872]">
                  MÉTODO: ANÁLISIS ACCIÓN-ESPACIO
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Infographic: "¿Qué hace a una partitura ser 'Expert Level'?" */}
        <ExpertLevel />

        {/* Special Visual Block: "EL CASO DEL OBJETO" */}
        <ObjectCase />

        {/* Strategic Menu: "Menú Estratégico de Cualidades de Movimiento" */}
        <MovementQualities />

        {/* Stylization vs. Representation */}
        <StylizationComparison />

      </div>
    </section>
  );
};
