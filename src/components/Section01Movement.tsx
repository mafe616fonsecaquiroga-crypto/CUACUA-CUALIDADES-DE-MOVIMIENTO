import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { VideoCard } from './VideoCard';
import { SubtextSlidesPdfViewer } from './SubtextSlidesPdfViewer';
import { SECTION_01_CONTENT } from '../data/curriculum';
import { Compass, Zap, Flame, Shield, Activity, ArrowRight, Eye, RefreshCw } from 'lucide-react';

export const Section01Movement: React.FC = () => {
  // Interactive Lab: Demostración de Movimiento Cotidiano vs. Extra-Cotidiano
  const [movementMode, setMovementMode] = useState<'cotidiano' | 'extra'>('extra');
  const [energyLevel, setEnergyLevel] = useState<number>(85);

  return (
    <section 
      id="seccion-01" 
      aria-label="Sección 1: El Juego del Movimiento" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0c] text-[#f3f2ee] border-b-4 border-black overflow-hidden"
    >
      {/* Background Giant Punk Typography Clashing */}
      <div 
        aria-hidden="true" 
        className="absolute top-20 right-0 select-none pointer-events-none font-display text-[100px] sm:text-[180px] lg:text-[240px] text-white/[0.02] leading-none uppercase"
      >
        EXTRA-COTIDIANO
      </div>
      <div 
        aria-hidden="true" 
        className="absolute bottom-40 -left-10 select-none pointer-events-none font-display text-[90px] sm:text-[160px] lg:text-[220px] text-[#ff003f]/[0.03] leading-none uppercase"
      >
        ENERGÍA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          identifier="01 / MOVIMIENTO"
          exactTitle="1. El Juego del Movimiento: Más allá de 'saber bailar'"
          subtitle="El cuerpo como herramienta estratégica, combate contra el automatismo cotidiano y amplificación de la presencia en el espacio escénico."
          backgroundWord="CUERPO"
        />

        {/* Lead Manifesto Grid: Ephemeral content & Movement as Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Card 1: Contenido Efímero y la batalla por la atención */}
          <div className="lg:col-span-6 bg-[#141418] border-2 border-white/90 p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_#ff003f]">
            <div>
              <div className="flex items-center justify-between border-b border-[#2d2d38] pb-3 mb-4">
                <span className="font-display tracking-widest text-sm text-[#ff003f] uppercase">
                  DIAGNÓSTICO // ESCENARIO CONTEMPORÁNEO
                </span>
                <span className="font-mono text-xs text-[#a8a59e]">ATENCIÓN DISPUTADA</span>
              </div>
              
              <h3 className="font-display text-3xl sm:text-4xl text-[#f3f2ee] uppercase tracking-tight leading-none mb-4">
                LA BATALLA CONTRA EL CONTENIDO EFÍMERO
              </h3>

              <p className="text-sm sm:text-base text-[#dcd8ce] font-sans-clean leading-relaxed mb-4">
                {SECTION_01_CONTENT.intro.ephemeralReality}
              </p>

              <blockquote className="border-l-4 border-[#ff003f] pl-4 py-1 text-sm sm:text-base font-bold text-[#f3f2ee] uppercase">
                {SECTION_01_CONTENT.intro.strategicPremise}
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-[#252530] flex items-center justify-between text-xs font-mono text-[#a8a59e]">
              <span>NO ES ADORNO PLÁSTICO</span>
              <span className="text-[#ff003f] font-bold">ES ESTRATEGIA PURA</span>
            </div>
          </div>

          {/* Card 2: Tu cuerpo es tu herramienta de trabajo */}
          <div className="lg:col-span-6 bg-[#181820] border-2 border-[#ff003f] p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0px_#ffffff] relative masking-tape">
            <div>
              <div className="flex items-center justify-between border-b border-[#2d2d38] pb-3 mb-4">
                <span className="font-display tracking-widest text-sm text-[#f3f2ee] uppercase bg-black px-2 py-0.5">
                  HERRAMIENTA FUNDAMENTAL
                </span>
                <span className="font-mono text-xs text-[#ff007f]">OPERAR SIN CIEGAS</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#ff003f] uppercase tracking-tight leading-none mb-4">
                TU CUERPO ES TU HERRAMIENTA DE TRABAJO
              </h3>

              <p className="text-sm sm:text-base text-[#dcd8ce] font-sans-clean leading-relaxed mb-4">
                {SECTION_01_CONTENT.intro.bodyAsTool}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-[#0b0b0c] p-3 border border-[#2e2e3a]">
                  <div className="font-display text-sm text-[#ff003f] uppercase">CENTRO DE GRAVEDAD</div>
                  <div className="text-xs text-[#a8a59e]">Balance precario y disponibilidad al cambio de nivel.</div>
                </div>
                <div className="bg-[#0b0b0c] p-3 border border-[#2e2e3a]">
                  <div className="font-display text-sm text-[#ff003f] uppercase">TENSIONES PARÁSITAS</div>
                  <div className="text-xs text-[#a8a59e]">Eliminación sistemática del esfuerzo innecesario.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#252530] text-xs font-mono text-[#ff007f] flex items-center justify-between">
              <span>CANALES DE IMPULSO</span>
              <span>100% DISPONIBILIDAD PSICOFÍSICA</span>
            </div>
          </div>

        </div>

        {/* Theoretical Anchors: Grotowski & Eugenio Barba */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-2xl text-[#ff003f] uppercase">LOS MAESTROS DEL CUERPO ESCÉNICO</span>
            <div className="h-[2px] flex-1 bg-[#252530]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SECTION_01_CONTENT.theorists.map((theorist, index) => (
              <div 
                key={index}
                className="bg-[#121216] border-2 border-white/80 p-6 relative hover:border-[#ff003f] transition-colors group"
              >
                {/* Stamp Number */}
                <div className="absolute -top-3.5 right-6 bg-[#ff003f] text-black font-display text-lg px-2.5 py-0.5 transform rotate-2">
                  REF {index + 1}
                </div>

                <span className="text-xs font-mono text-[#ff007f] uppercase tracking-wider block mb-1">
                  {theorist.concept}
                </span>

                <h4 className="font-display text-3xl uppercase tracking-tight text-[#f3f2ee] mb-3 group-hover:text-[#ff003f] transition-colors">
                  {theorist.author}
                </h4>

                <blockquote className="bg-[#0b0b0c] border-l-2 border-[#ff003f] p-3 text-xs sm:text-sm italic text-[#dcd8ce] mb-4 font-sans-clean">
                  "{theorist.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean leading-relaxed">
                  {theorist.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Document Viewer: Cualidades del Movimiento - Decisión Estratégica de Subtexto */}
        <SubtextSlidesPdfViewer />

        {/* Interactive Comparison: Movimiento Cotidiano vs. Movimiento Extra-Cotidiano */}
        <div className="mb-16 bg-[#14141a] border-2 border-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2d2d3a] pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-[#ff003f] uppercase tracking-widest block">
                LABORATORIO DE ANTROPOLOGÍA TEATRAL
              </span>
              <h3 className="font-display text-3xl sm:text-4xl uppercase text-[#f3f2ee] tracking-tight">
                COTIDIANO VS. EXTRA-COTIDIANO
              </h3>
            </div>

            {/* Interactive Toggle Controls */}
            <div className="flex items-center gap-2 bg-[#0b0b0c] p-1 border border-[#30303c]">
              <button
                onClick={() => setMovementMode('cotidiano')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  movementMode === 'cotidiano'
                    ? 'bg-[#dcd8ce] text-black shadow-sm'
                    : 'text-[#a8a59e] hover:text-white'
                }`}
              >
                1. CUERPO COTIDIANO
              </button>
              <button
                onClick={() => setMovementMode('extra')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  movementMode === 'extra'
                    ? 'bg-[#ff003f] text-black shadow-sm'
                    : 'text-[#a8a59e] hover:text-white'
                }`}
              >
                2. CUERPO EXTRA-COTIDIANO
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Diagnostic Panel */}
            <div className="lg:col-span-7 space-y-4">
              {movementMode === 'cotidiano' ? (
                <div className="space-y-4 border-l-4 border-[#a8a59e] pl-4">
                  <div className="inline-block bg-[#24242e] text-[#dcd8ce] text-xs font-mono px-2 py-0.5">
                    PRINCIPIO: LEY DEL MÍNIMO ESFUERZO
                  </div>
                  <h4 className="font-display text-2xl uppercase text-[#dcd8ce]">
                    El automatismo diario ahorra energía para sobrevivir
                  </h4>
                  <p className="text-sm text-[#a8a59e] font-sans-clean leading-relaxed">
                    En la calle caminamos sin pensar en el vector de apoyo; sentarse o levantarse es un acto reflejo no dramatizado. Los ojos no sostienen foco escénico, el peso colapsa sobre la columna y el centro de gravedad está adormecido. En el teatro, este cuerpo pasa desapercibido y se vuelve invisible.
                  </p>
                  <ul className="text-xs font-mono text-[#dcd8ce] space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#a8a59e]">✕</span> Gasto energético mínimo / inercia refleja
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#a8a59e]">✕</span> Peso neutro no articulado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#a8a59e]">✕</span> Desconexión entre mirada y centro motor
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4 border-l-4 border-[#ff003f] pl-4">
                  <div className="inline-block bg-[#ff003f] text-black text-xs font-mono px-2 py-0.5 font-bold">
                    PRINCIPIO: DESPERDICIO CONSCIENTE DE ENERGÍA (BARBA)
                  </div>
                  <h4 className="font-display text-2xl uppercase text-[#ff003f]">
                    El balance precario que engendra presencia magnética
                  </h4>
                  <p className="text-sm text-[#dcd8ce] font-sans-clean leading-relaxed">
                    En la escena, el intérprete rechaza el ahorro. Entra en un balance inestable, dilata el tono muscular, crea oposición activa entre el impulso y el freno (Otjas/Posyl) y sostiene un gasto energético deliberado. La presencia no es un don innato: es tensión formal visible.
                  </p>
                  <ul className="text-xs font-mono text-[#ff003f] space-y-1.5 pt-2">
                    <li className="flex items-center gap-2 font-bold">
                      <span>✓</span> Desperdicio deliberado de energía = magnetismo escénico
                    </li>
                    <li className="flex items-center gap-2 font-bold">
                      <span>✓</span> Alteración de la base de sustentación y oposición de pesos
                    </li>
                    <li className="flex items-center gap-2 font-bold">
                      <span>✓</span> Foco milimétrico: el ojo precede al impulso motor
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Kinetic Simulation Visual Box */}
            <div className="lg:col-span-5 bg-[#0b0b0c] border border-[#2b2b36] p-5">
              <div className="flex items-center justify-between text-xs font-mono text-[#a8a59e] border-b border-[#22222a] pb-2 mb-4">
                <span>SIMULADOR DE TONO ESCÉNICO</span>
                <span className={movementMode === 'extra' ? 'text-[#ff003f]' : 'text-stone-400'}>
                  {movementMode === 'extra' ? 'MODO EXTRA-COTIDIANO' : 'MODO COTIDIANO'}
                </span>
              </div>

              {/* Dynamic Abstract Vector Canvas */}
              <div className="relative h-44 bg-[#111116] border border-[#23232c] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-halftone opacity-30" />
                
                {movementMode === 'cotidiano' ? (
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#555] mx-auto flex items-center justify-center">
                      <span className="text-xs font-mono text-[#777]">Neutro</span>
                    </div>
                    <div className="text-xs font-mono text-[#888]">Tensión muscular pasiva (15%)</div>
                  </div>
                ) : (
                  <div className="text-center space-y-2 relative z-10">
                    <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                      <div className="absolute inset-0 border-2 border-[#ff003f] animate-ping opacity-30" />
                      <div className="w-20 h-20 bg-[#ff003f] text-black font-display text-xl flex items-center justify-center transform rotate-6 border border-white">
                        PRESENCIA
                      </div>
                    </div>
                    <div className="text-xs font-mono text-[#ff003f] font-bold">
                      Impulso amplificado ({energyLevel}%) · Oposición de fuerzas activa
                    </div>
                  </div>
                )}
              </div>

              {/* Energy Level Slider */}
              {movementMode === 'extra' && (
                <div className="mt-4 pt-3 border-t border-[#22222a]">
                  <div className="flex justify-between text-xs font-mono text-[#dcd8ce] mb-1">
                    <span>Intensidad de Intención:</span>
                    <span className="text-[#ff003f] font-bold">{energyLevel}%</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={energyLevel}
                    onChange={(e) => setEnergyLevel(Number(e.target.value))}
                    className="w-full accent-[#ff003f] cursor-pointer"
                    aria-label="Nivel de energía escénica"
                  />
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Acción Integral & Presencia / GPS de Acción */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Card: Acción Integral Físico-Mental-Emotiva */}
          <div className="lg:col-span-7 bg-[#141418] border-2 border-white/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#ff007f] text-black font-mono text-xs px-2 py-0.5 font-bold uppercase mb-3">
                CIRCUITO CERRADO
              </div>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#f3f2ee] mb-4">
                {SECTION_01_CONTENT.actionIntegral.title}
              </h3>
              
              <div className="bg-[#0b0b0c] p-3 border-l-4 border-[#ff007f] text-xs sm:text-sm font-mono text-[#ff007f] mb-4 uppercase">
                {SECTION_01_CONTENT.actionIntegral.formula}
              </div>

              <p className="text-sm sm:text-base text-[#dcd8ce] font-sans-clean leading-relaxed">
                {SECTION_01_CONTENT.actionIntegral.text}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#22222a] text-xs font-mono text-[#a8a59e] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#ff007f]" />
              <span>Pensamiento → Tono muscular → Resonancia emotiva</span>
            </div>
          </div>

          {/* Card: Presencia Escénica y GPS de Acción */}
          <div className="lg:col-span-5 bg-[#171720] border-2 border-[#ff003f] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#ff003f] text-black font-mono text-xs px-2 py-0.5 font-bold uppercase mb-3">
                ORIENTACIÓN GEOMÉTRICA
              </div>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#ff003f] mb-4">
                {SECTION_01_CONTENT.presenceAndGps.title}
              </h3>

              <p className="text-sm sm:text-base text-[#dcd8ce] font-sans-clean leading-relaxed">
                {SECTION_01_CONTENT.presenceAndGps.text}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2d2d3c] flex items-center justify-between text-xs font-mono text-[#dcd8ce]">
              <div className="flex items-center gap-1.5 text-[#ff003f]">
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>BRÚJULA ESPACIAL INTACTA</span>
              </div>
              <span>ERROR TOLERADO: 0%</span>
            </div>
          </div>

        </div>

        {/* Video 01 Module as strictly requested */}
        <div className="mt-12">
          <VideoCard
            label={SECTION_01_CONTENT.video.label}
            placeholderKey={SECTION_01_CONTENT.video.placeholderKey}
            title="Primera Parte: El Cuerpo como Herramienta y la Energía Extra-Cotidiana"
            description="Registro documental y demostración práctica de los fundamentos del movimiento escénico, la vía negativa de Grotowski y la antropología teatral de Barba."
            defaultThumbnail="/src/assets/images/hero_movement_punk_1790869563010.jpg"
          />
        </div>

      </div>
    </section>
  );
};
