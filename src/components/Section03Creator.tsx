import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { VideoCard } from './VideoCard';
import { SECTION_03_CONTENT, MOVEMENT_QUALITIES, SCENIC_OBJECTS } from '../data/curriculum';
import { Dna, Sparkles, Orbit, Compass, Shuffle, Check, Flame } from 'lucide-react';

export const Section03Creator: React.FC = () => {
  // Interactive Score Generator for physical training rehearsal
  const [selectedVerb, setSelectedVerb] = useState('Desarmar con la mirada');
  const [selectedQuality, setSelectedQuality] = useState(MOVEMENT_QUALITIES[0].name);
  const [selectedObject, setSelectedObject] = useState(SCENIC_OBJECTS[0].name);
  const [tempo, setTempo] = useState('3 compases lentos + 1 corte súbito');
  const [scoreGenerated, setScoreGenerated] = useState(false);

  const sampleVerbs = [
    'Desarmar con la mirada',
    'Acorralar en diagonal',
    'Penetrar el espacio ajeno',
    'Sostener la caída',
    'Acariciar con navaja',
    'Erradicar el aire',
  ];

  const sampleTempos = [
    '3 compases lentos + 1 corte súbito',
    'Aceleración continua hasta el límite físico',
    'Suspensión de 5 segundos previa al contacto',
    'Pulso sincopado en contratiempo',
  ];

  const rollRandomScore = () => {
    const randomVerb = sampleVerbs[Math.floor(Math.random() * sampleVerbs.length)];
    const randomQual = MOVEMENT_QUALITIES[Math.floor(Math.random() * MOVEMENT_QUALITIES.length)].name;
    const randomObj = SCENIC_OBJECTS[Math.floor(Math.random() * SCENIC_OBJECTS.length)].name;
    const randomTempo = sampleTempos[Math.floor(Math.random() * sampleTempos.length)];
    
    setSelectedVerb(randomVerb);
    setSelectedQuality(randomQual);
    setSelectedObject(randomObj);
    setTempo(randomTempo);
    setScoreGenerated(true);
  };

  return (
    <section 
      id="seccion-03" 
      aria-label="Sección 3: Conclusión - El Mix Perfecto del Creador 360°" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0c] text-[#f3f2ee] border-b-4 border-black overflow-hidden"
    >
      {/* Background Giant Punk Typography */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 select-none pointer-events-none font-display text-[120px] sm:text-[200px] lg:text-[280px] text-white/[0.02] leading-none uppercase"
      >
        360°
      </div>
      <div 
        aria-hidden="true" 
        className="absolute bottom-20 left-0 select-none pointer-events-none font-display text-[100px] sm:text-[180px] lg:text-[240px] text-[#ff003f]/[0.02] leading-none uppercase"
      >
        ORGANICIDAD
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          identifier="03 / CREADOR 360°"
          exactTitle="3. Conclusión: El Mix Perfecto del Creador 360°"
          subtitle="La síntesis indivisible entre teatro y danza: organicidad, diseño del espacio-tiempo y la consagración del intérprete total."
          backgroundWord="360°"
        />

        {/* Lead Synthesis Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Left: Expansive Conceptual Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#141419] border-2 border-white p-6 sm:p-8 relative shadow-[6px_6px_0px_#ff003f] masking-tape">
              <div className="inline-block bg-[#ff003f] text-black font-mono text-xs px-2 py-0.5 font-bold uppercase tracking-wider mb-3">
                SÍNTESIS DEFINITIVA
              </div>

              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#f3f2ee] mb-4">
                {SECTION_03_CONTENT.thesis.title}
              </h3>

              <p className="text-base sm:text-lg text-[#dcd8ce] font-sans-clean leading-relaxed mb-6 font-medium">
                {SECTION_03_CONTENT.thesis.intro}
              </p>

              {/* 4 Convergence Axioms */}
              <div className="space-y-4">
                {SECTION_03_CONTENT.thesis.synthesis.map((item, idx) => (
                  <div key={idx} className="bg-[#0c0c10] border-l-4 border-[#ff003f] p-4">
                    <span className="font-display text-lg uppercase tracking-wider text-[#ff007f] block mb-1">
                      {item.axis}
                    </span>
                    <p className="text-xs sm:text-sm text-[#dcd8ce] font-sans-clean leading-relaxed">
                      {item.statement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stage Climax Imagery */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute inset-0 bg-[#ff003f] transform translate-x-3 translate-y-3 pointer-events-none" />

              <div className="relative bg-[#141418] border-2 border-white p-3 z-10">
                <div className="aspect-[4/3] bg-black overflow-hidden relative group">
                  <img
                    src="/src/assets/images/creator_360_climax_1790869583568.jpg"
                    alt="Intérprete total fusionando teatro y danza en el clímax escénico contemporáneo"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#ff007f]/10 mix-blend-screen pointer-events-none" />
                </div>

                <div className="mt-3 border-t border-[#2e2e38] pt-2 text-xs font-mono text-[#dcd8ce] flex items-center justify-between">
                  <span className="text-[#ff003f]">FIG. 03 — EL CUERPO TOTAL EN EL ESPACIO</span>
                  <span>SÍNTESIS 360°</span>
                </div>
              </div>

              {/* Floating Punk Stamp */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-black text-[#f3f2ee] border-2 border-[#ff003f] p-3 transform -rotate-2 shadow-[3px_3px_0px_#ff003f]">
                <div className="font-display text-lg text-[#ff003f] uppercase">
                  ESPACIO + TIEMPO + EMOCIÓN
                </div>
                <div className="font-marker text-xs text-white">
                  El sistema nervioso del espectador responde a la forma
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Video 02 Module as strictly requested */}
        <div className="mb-16">
          <VideoCard
            label={SECTION_03_CONTENT.video.label}
            placeholderKey={SECTION_03_CONTENT.video.placeholderKey}
            title="Conclusión: El Mix Perfecto del Creador 360°"
            description="Registro documental y análisis de la integración total: la dramaturgia del cuerpo, la disolución de géneros entre danza y actuación, y la presencia escénica irreversible."
            defaultThumbnail="/src/assets/images/creator_360_climax_1790869583568.jpg"
            initialUrl={SECTION_03_CONTENT.video.defaultUrl}
          />
        </div>

        {/* Interactive Physical Training Rehearsal Tool: "Generador de Partitura 360°" */}
        <div id="cuaderno-lab" className="bg-[#121217] border-2 border-white p-6 sm:p-8 mb-12 relative shadow-[8px_8px_0px_#ffffff]">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#2b2b36] pb-4 mb-6">
            <div>
              <div className="inline-block bg-[#ff003f] text-black font-mono text-xs px-2.5 py-0.5 font-bold uppercase tracking-widest mb-1">
                HERRAMIENTA PRÁCTICA DE SALA
              </div>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#f3f2ee]">
                GENERADOR DE PARTITURA ESCÉNICA 360°
              </h3>
              <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean mt-1">
                Combina los principios estudiados (Verbo de Acción + Cualidad Laban + Caso del Objeto + Tempo) para crear tu ejercicio de entrenamiento inmediato.
              </p>
            </div>

            <button
              onClick={rollRandomScore}
              className="px-4 py-2 bg-[#ff003f] text-black font-display text-base tracking-wider uppercase hover:bg-white transition-colors cursor-pointer flex items-center gap-2 border border-black shadow-[2px_2px_0px_#ffffff]"
            >
              <Shuffle className="w-4 h-4" />
              <span>GENERAR RETO ALEATORIO</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Input 1: Verbo de acción real */}
            <div className="bg-[#0b0b0c] p-4 border border-[#2b2b36]">
              <span className="text-xs font-mono text-[#ff003f] uppercase block mb-1">01. VERBO DE ACCIÓN:</span>
              <select
                value={selectedVerb}
                onChange={(e) => setSelectedVerb(e.target.value)}
                className="w-full bg-[#171720] border border-[#3a3a48] px-3 py-2 text-xs font-mono text-[#f3f2ee] focus:border-[#ff003f] outline-none"
              >
                {sampleVerbs.map((v, i) => (
                  <option key={i} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Input 2: Cualidad de movimiento */}
            <div className="bg-[#0b0b0c] p-4 border border-[#2b2b36]">
              <span className="text-xs font-mono text-[#ff003f] uppercase block mb-1">02. CUALIDAD LABAN:</span>
              <select
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value)}
                className="w-full bg-[#171720] border border-[#3a3a48] px-3 py-2 text-xs font-mono text-[#f3f2ee] focus:border-[#ff003f] outline-none"
              >
                {MOVEMENT_QUALITIES.map((q) => (
                  <option key={q.id} value={q.name}>{q.name}</option>
                ))}
              </select>
            </div>

            {/* Input 3: Caso del objeto */}
            <div className="bg-[#0b0b0c] p-4 border border-[#2b2b36]">
              <span className="text-xs font-mono text-[#ff003f] uppercase block mb-1">03. OBJETO ESCÉNICO:</span>
              <select
                value={selectedObject}
                onChange={(e) => setSelectedObject(e.target.value)}
                className="w-full bg-[#171720] border border-[#3a3a48] px-3 py-2 text-xs font-mono text-[#f3f2ee] focus:border-[#ff003f] outline-none"
              >
                {SCENIC_OBJECTS.map((o) => (
                  <option key={o.id} value={o.name}>{o.name}</option>
                ))}
              </select>
            </div>

            {/* Input 4: Tempo / Métrica */}
            <div className="bg-[#0b0b0c] p-4 border border-[#2b2b36]">
              <span className="text-xs font-mono text-[#ff003f] uppercase block mb-1">04. TEMPO BIOMECÁNICO:</span>
              <select
                value={tempo}
                onChange={(e) => setTempo(e.target.value)}
                className="w-full bg-[#171720] border border-[#3a3a48] px-3 py-2 text-xs font-mono text-[#f3f2ee] focus:border-[#ff003f] outline-none"
              >
                {sampleTempos.map((t, i) => (
                  <option key={i} value={t}>{t}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Generated Training Score Card */}
          <div className="bg-[#171722] border-2 border-[#ff003f] p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#2d2d3c] pb-3 mb-3">
              <span className="font-display text-xl uppercase tracking-wider text-[#ff003f] flex items-center gap-2">
                <Flame className="w-5 h-5 fill-[#ff003f]" />
                <span>TU PARTITURA DE ACCIÓN LISTA PARA ENSAYO</span>
              </span>
              <span className="text-xs font-mono text-[#dcd8ce] bg-black px-2.5 py-1">
                FÓRMULA 360°
              </span>
            </div>

            <div className="text-sm sm:text-base font-sans-clean leading-relaxed text-[#f3f2ee] space-y-2">
              <p>
                <strong className="text-[#ff003f] font-mono text-xs uppercase block">Instrucción escénica:</strong>
                Ejecuta la acción transitiva de <span className="underline decoration-[#ff003f] font-bold">"{selectedVerb}"</span> utilizando exclusivamente la cualidad de movimiento <span className="underline decoration-white font-bold">{selectedQuality}</span>. Canaliza el foco visual y kinestésico a través del objeto <span className="bg-black text-[#ff003f] px-2 py-0.5 font-bold uppercase">{selectedObject}</span>, respetando el compás riguroso de <span className="italic text-[#dcd8ce]">"{tempo}"</span>.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#2d2d3a] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#a8a59e]">
              <span>Criterio: Repetir 5 veces sin alterar la trayectoria milimétrica ni un solo segundo.</span>
              <span className="text-[#ff007f] font-bold">✓ EVALUACIÓN DE DISPONIBILIDAD TOTAL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
