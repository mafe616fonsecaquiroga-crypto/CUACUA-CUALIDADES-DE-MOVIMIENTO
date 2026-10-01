import React, { useState } from 'react';
import { 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Layers, 
  Eye, 
  Sparkles, 
  Target, 
  Wind, 
  Anchor, 
  Shuffle, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

interface SlideData {
  number: number;
  tag: string;
  badge: string;
  title: string;
  subtitle?: string;
  quote?: string;
  bulletPoints?: string[];
  items?: {
    code?: string;
    title: string;
    type?: string;
    desc: string;
    highlight?: string;
    color?: string;
  }[];
  footerNotice?: string;
}

const SLIDES_CONTENT: SlideData[] = [
  {
    number: 1,
    tag: "ESFUERZO / EFFORT",
    badge: "PORTADA DEL DOCUMENTO",
    title: "MOVIMIENTO: CUALIDADES DEL MOVIMIENTO",
    subtitle: "Una decisión estratégica de subtexto.",
    footerNotice: "Pace is a choice.",
  },
  {
    number: 2,
    tag: "SUBTEXTO",
    badge: "PRINCIPIO 01",
    title: "EL MOVIMIENTO REVELA LO QUE LAS PALABRAS ESCONDEN",
    quote: "Presentar la calidad de movimiento como una decisión de subtexto: el cuerpo puede decir la verdad cuando el personaje miente.",
    footerNotice: "Pace is a choice.",
  },
  {
    number: 3,
    tag: "ESFUERZO / EFFORT · MENÚ DE CUALIDADES",
    badge: "04 VECTORES",
    title: "CUATRO CUALIDADES PARA DIRIGIR EL SUBTEXTO",
    items: [
      {
        code: "DECISIÓN",
        title: "Pragmático / directo",
        desc: "Enfoque, poder e intención cortante.",
        color: "#ff003f"
      },
      {
        code: "ESCAPE",
        title: "Volátil / fluido",
        desc: "Ligereza, inestabilidad y evasión.",
        color: "#00e5ff"
      },
      {
        code: "CARGA",
        title: "Pesado / fuerte",
        desc: "Opresión, fuerza terrenal y carga emocional.",
        color: "#ff9100"
      },
      {
        code: "DESVÍO",
        title: "Distraído / indirecto",
        desc: "Duda, confusión y choque evitado.",
        color: "#a855f7"
      },
    ],
    footerNotice: "Pace is a choice.",
  },
  {
    number: 4,
    tag: "DECIDIR / ESCAPAR",
    badge: "BINOMIO 01",
    title: "PRAGMÁTICO Y VOLÁTIL: DECIDIR O ESCAPAR",
    items: [
      {
        code: "DECIDIR",
        title: "PRAGMÁTICO / DIRECTO",
        desc: "Usarlo en autoridad y decisiones críticas.",
        highlight: "Control y corte frontal"
      },
      {
        code: "ESCAPAR",
        title: "VOLÁTIL / FLUIDO",
        desc: "Usarlo cuando el personaje pierde control de la realidad o evade el conflicto.",
        highlight: "Fuga e inestabilidad"
      }
    ],
    quote: "La elección modifica la energía de la escena antes de que cambie el texto.",
    footerNotice: "Pace is a choice.",
  },
  {
    number: 5,
    tag: "CARGAR / DESVIAR",
    badge: "BINOMIO 02",
    title: "PESADO Y DISTRAÍDO: CARGAR O DESVIAR",
    items: [
      {
        code: "CARGA",
        title: "PESADO / FUERTE",
        desc: "Dar cuerpo a la culpa, al poder físico bruto o a una carga emocional inmensa.",
        highlight: "Gravedad e impacto telúrico"
      },
      {
        code: "DESVÍO",
        title: "DISTRAÍDO / INDIRECTO",
        desc: "Construir duda, confusión, traición o intenciones ocultas.",
        highlight: "Trayectoria periférica quebrada"
      }
    ],
    quote: "La cualidad vuelve visible el peso que el personaje intenta administrar.",
    footerNotice: "Pace is a choice.",
  },
  {
    number: 6,
    tag: "SIGNO / LÓGICA ESCÉNICA",
    badge: "RUPTURA DEL CLICHÉ",
    title: "REPRESENTAR NO ES ESTILIZAR",
    quote: "Tambalearse representa la borrachera. Trabajar una cualidad volátil y alterar la planimetría estiliza la desorientación.",
    items: [
      {
        code: "REPRESENTACIÓN",
        title: "Signo reconocible",
        desc: "Reproducir un signo reconocible (mímesis literal, predecible y sin tensión dramática)."
      },
      {
        code: "ESTILIZACIÓN",
        title: "Lógica escénica",
        desc: "Transformar la cualidad, el recorrido y el espacio para crear una lógica escénica autónoma."
      }
    ],
    footerNotice: "Pace is a choice.",
  },
  {
    number: 7,
    tag: "CÓMO · SUB-PARTITURA",
    badge: "MÉTODO ACTORAL",
    title: "LA SUB-PARTITURA SOSTIENE LA ACTUACIÓN",
    quote: "Dominar el cómo del movimiento permite comunicar jerarquías, miedos y deseos sin abrir la boca.",
    bulletPoints: [
      "1. Elegir la cualidad según el subtexto.",
      "2. Modificar la relación con el espacio y la planimetría.",
      "3. Sostener la lógica corporal incluso cuando las palabras contradicen al cuerpo."
    ],
    footerNotice: "Pace is a choice.",
  },
  {
    number: 8,
    tag: "DECISIÓN ESTRATÉGICA DE SUBTEXTO",
    badge: "CONCLUSIÓN",
    title: "VERDAD: ELIGE CÓMO SE MUEVE LA VERDAD",
    quote: "La cualidad de movimiento no adorna al personaje: organiza su mundo interno y hace visible lo que todavía no puede decir.",
    footerNotice: "Pace is a choice.",
  }
];

export const SubtextSlidesPdfViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');

  const currentSlide = SLIDES_CONTENT[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < SLIDES_CONTENT.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : SLIDES_CONTENT.length - 1));
  };

  return (
    <div className="mb-16 bg-[#131318] border-2 border-white/90 p-5 sm:p-8 shadow-[8px_8px_0px_#ff003f] relative masking-tape">
      
      {/* Header bar of the PDF Document Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#2b2b36] pb-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#ff003f] text-black font-mono text-xs px-2.5 py-0.5 font-bold uppercase tracking-widest mb-1 shadow-[2px_2px_0px_#ffffff]">
            <FileText className="w-3.5 h-3.5" />
            <span>DOCUMENTO INTEGRADO // PDF PEDAGÓGICO</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#f3f2ee]">
            CUALIDADES DEL MOVIMIENTO: DECISIÓN ESTRATÉGICA DE SUBTEXTO
          </h3>
          <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean mt-0.5">
            Diapositivas de análisis escénico: cómo el cuerpo revela la verdad cuando las palabras mienten y cómo dirigir el subtexto en sala.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-[#0b0b0c] p-1 border border-[#30303c]">
          <button
            onClick={() => setViewMode('slide')}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              viewMode === 'slide'
                ? 'bg-[#ff003f] text-black font-bold shadow-sm'
                : 'text-[#a8a59e] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Diapositivas ({currentSlideIndex + 1}/8)</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-[#f3f2ee] text-black font-bold shadow-sm'
                : 'text-[#a8a59e] hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Ver 8 Láminas</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: Interactive Slide Projector */}
      {viewMode === 'slide' ? (
        <div className="space-y-4">
          
          {/* Main Slide Canvas */}
          <div className="relative min-h-[380px] sm:min-h-[420px] bg-[#f7f5ef] text-[#111113] border-4 border-black p-6 sm:p-10 flex flex-col justify-between overflow-hidden shadow-inner">
            
            {/* Slide Halftone Background Accent */}
            <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

            {/* Top Slide Header Ribbon */}
            <div className="relative z-10 flex items-center justify-between border-b-2 border-black/20 pb-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#ff003f] font-bold">
                {currentSlide.tag}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono bg-black text-[#f7f5ef] px-2 py-0.5 uppercase tracking-wider">
                  LÁMINA 0{currentSlide.number} / 08
                </span>
                <span className="text-xs font-display text-black/60 hidden sm:inline">
                  {currentSlide.badge}
                </span>
              </div>
            </div>

            {/* Slide Body Content */}
            <div className="relative z-10 my-auto space-y-6">
              
              {/* Slide Title */}
              <h4 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0b0b0c] leading-[0.92]">
                {currentSlide.title}
              </h4>

              {/* Slide Subtitle if any */}
              {currentSlide.subtitle && (
                <p className="font-display text-2xl sm:text-3xl text-[#ff003f] uppercase tracking-wide">
                  {currentSlide.subtitle}
                </p>
              )}

              {/* Slide Quote / Principle */}
              {currentSlide.quote && (
                <div className="bg-black/5 border-l-4 border-[#ff003f] p-4 sm:p-5">
                  <p className="font-sans-clean text-base sm:text-xl text-[#1a1a1e] font-semibold leading-relaxed">
                    "{currentSlide.quote}"
                  </p>
                </div>
              )}

              {/* Slide 3: 4 Qualities Grid */}
              {currentSlide.number === 3 && currentSlide.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {currentSlide.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_#ff003f]">
                      <span className="font-mono text-xs text-[#ff003f] uppercase font-bold block mb-1">
                        {item.code}
                      </span>
                      <div className="font-display text-xl uppercase tracking-tight text-black">
                        {item.title}
                      </div>
                      <p className="text-xs font-sans-clean text-stone-700 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Slide 4 & 5: Binomios (Decidir / Escapar & Cargar / Desviar) */}
              {(currentSlide.number === 4 || currentSlide.number === 5) && currentSlide.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {currentSlide.items.map((item, idx) => (
                    <div key={idx} className="bg-black text-[#f7f5ef] p-5 border-2 border-black shadow-[4px_4px_0px_#ff003f]">
                      <span className="font-mono text-xs text-[#ff003f] uppercase font-bold tracking-widest block mb-1">
                        {item.code}
                      </span>
                      <div className="font-display text-2xl uppercase tracking-tight text-[#f7f5ef] mb-2">
                        {item.title}
                      </div>
                      <p className="text-xs sm:text-sm font-sans-clean text-stone-300 leading-relaxed mb-2">
                        {item.desc}
                      </p>
                      {item.highlight && (
                        <div className="text-[11px] font-mono text-[#ff007f] border-t border-stone-800 pt-2">
                          // {item.highlight}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Slide 6: Signo vs Estilización */}
              {currentSlide.number === 6 && currentSlide.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-5 border-2 border-stone-400">
                    <span className="font-mono text-xs text-stone-500 uppercase font-bold block mb-1">
                      REPRESENTACIÓN
                    </span>
                    <div className="font-display text-xl uppercase text-black mb-1">
                      {currentSlide.items[0]?.title}
                    </div>
                    <p className="text-xs font-sans-clean text-stone-700 leading-relaxed">
                      {currentSlide.items[0]?.desc}
                    </p>
                  </div>
                  <div className="bg-[#ff003f] text-black p-5 border-2 border-black shadow-[4px_4px_0px_#000000]">
                    <span className="font-mono text-xs text-black uppercase font-bold block mb-1">
                      ESTILIZACIÓN
                    </span>
                    <div className="font-display text-xl uppercase text-black mb-1">
                      {currentSlide.items[1]?.title}
                    </div>
                    <p className="text-xs font-sans-clean text-black font-semibold leading-relaxed">
                      {currentSlide.items[1]?.desc}
                    </p>
                  </div>
                </div>
              )}

              {/* Slide 7: Sub-partitura 3 steps */}
              {currentSlide.number === 7 && currentSlide.bulletPoints && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  {currentSlide.bulletPoints.map((point, idx) => (
                    <div key={idx} className="bg-white p-4 border-2 border-black shadow-[3px_3px_0px_#ff003f]">
                      <span className="font-display text-3xl text-[#ff003f] block mb-1">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-sans-clean font-semibold text-black leading-relaxed">
                        {point.replace(/^\d+\.\s*/, '')}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Slide 8: Verdad final */}
              {currentSlide.number === 8 && (
                <div className="mt-4">
                  <div className="inline-block bg-black text-[#ff003f] font-display text-xl sm:text-2xl px-3 py-1 uppercase transform -rotate-1 mb-3">
                    EL CUERPO ORGANIZA EL MUNDO INTERNO
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Footer Notice */}
            <div className="relative z-10 flex items-center justify-between border-t border-black/20 pt-3 mt-6 text-xs font-mono text-stone-600">
              <span className="font-bold text-black">{currentSlide.footerNotice}</span>
              <span className="uppercase text-[11px]">DOCUMENTO OFICIAL DE ARTES VIVAS</span>
            </div>

          </div>

          {/* Slide Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            
            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="px-4 py-2 bg-[#1b1b24] text-[#f3f2ee] hover:bg-[#ff003f] hover:text-black font-mono text-xs uppercase tracking-wider border border-[#333] transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Lámina anterior"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>
              
              <button
                onClick={nextSlide}
                className="px-4 py-2 bg-[#ff003f] text-black hover:bg-white font-mono text-xs uppercase font-bold tracking-wider border border-black transition-colors cursor-pointer flex items-center gap-1.5 shadow-[2px_2px_0px_#ffffff]"
                aria-label="Siguiente lámina"
              >
                <span>Siguiente Lámina</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick 1 to 8 Number Bar */}
            <div className="flex items-center gap-1">
              {SLIDES_CONTENT.map((slide, idx) => (
                <button
                  key={slide.number}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`w-8 h-8 font-mono text-xs transition-all cursor-pointer flex items-center justify-center border ${
                    currentSlideIndex === idx
                      ? 'bg-[#ff003f] text-black font-bold border-white scale-110 shadow-sm'
                      : 'bg-[#0b0b0c] text-[#a8a59e] border-[#2b2b36] hover:text-white hover:border-[#ff003f]'
                  }`}
                  aria-label={`Ir a lámina ${slide.number}`}
                >
                  {slide.number}
                </button>
              ))}
            </div>

          </div>

        </div>
      ) : (
        /* VIEW MODE 2: Full 8-Slide Archive Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SLIDES_CONTENT.map((slide, idx) => (
            <div
              key={slide.number}
              onClick={() => {
                setCurrentSlideIndex(idx);
                setViewMode('slide');
              }}
              className="bg-[#0e0e12] border-2 border-[#2b2b36] p-4 flex flex-col justify-between hover:border-[#ff003f] hover:bg-[#16161f] transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#22222b] pb-2 mb-2">
                  <span className="font-mono text-[10px] text-[#ff003f] uppercase font-bold">
                    LÁMINA 0{slide.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#777] group-hover:text-white">
                    Ver →
                  </span>
                </div>

                <div className="font-mono text-[10px] text-[#a8a59e] uppercase mb-1">
                  {slide.tag}
                </div>

                <h5 className="font-display text-lg uppercase tracking-tight text-[#f3f2ee] group-hover:text-[#ff003f] transition-colors leading-snug mb-2">
                  {slide.title}
                </h5>

                {slide.quote && (
                  <p className="text-[11px] font-sans-clean text-[#a8a59e] line-clamp-3 italic">
                    "{slide.quote}"
                  </p>
                )}
                {slide.subtitle && (
                  <p className="text-[11px] font-sans-clean text-[#dcd8ce] line-clamp-2">
                    {slide.subtitle}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2 border-t border-[#1f1f28] flex items-center justify-between text-[10px] font-mono text-[#666]">
                <span>{slide.badge}</span>
                <span className="text-[#ff003f]">Pace is a choice</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer Banner */}
      <div className="mt-6 pt-4 border-t border-[#252530] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#a8a59e]">
        <span className="flex items-center gap-1.5 text-[#ff007f]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SÍNTESIS: El cuerpo dice la verdad antes de que el texto cambie</span>
        </span>
        <span>MÓDULO DE CONSULTA PARA ENSAYOS Y AUDICIONES</span>
      </div>

    </div>
  );
};
