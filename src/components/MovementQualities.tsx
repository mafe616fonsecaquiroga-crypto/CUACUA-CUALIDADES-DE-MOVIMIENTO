import React, { useState } from 'react';
import { MOVEMENT_QUALITIES, MovementQuality } from '../data/curriculum';
import { ChevronDown, Target, Wind, Anchor, Shuffle, PlayCircle } from 'lucide-react';

export const MovementQualities: React.FC = () => {
  const [selectedQualityId, setSelectedQualityId] = useState<string>('pragmatico');
  // For mobile accordion
  const [openAccordionId, setOpenAccordionId] = useState<string>('pragmatico');

  // Render abstract kinetic SVG representation for each movement quality
  const renderAbstractGraphic = (type: MovementQuality['visualGraphic'], active: boolean) => {
    switch (type) {
      case 'direct':
        // Direct, sharp, knife-like laser trajectory
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none">
            <line 
              x1="10" y1="90" x2="85" y2="15" 
              strokeWidth={active ? "6" : "3"} 
              strokeLinecap="square"
            />
            <polygon points="85,10 95,20 75,25" fill="currentColor" stroke="none" />
            <line x1="10" y1="90" x2="35" y2="90" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="85" y1="15" x2="85" y2="40" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        );
      case 'fluid':
        // Continuous sinusoidal liquid waves
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none">
            <path 
              d="M10,50 C25,20 40,80 55,40 C70,10 85,70 95,50" 
              strokeWidth={active ? "5" : "3"} 
              strokeLinecap="round"
            />
            <path 
              d="M15,65 C30,35 45,95 60,55 C75,25 85,80 95,65" 
              strokeWidth="2" 
              strokeDasharray="4 4" 
              opacity="0.6"
            />
          </svg>
        );
      case 'heavy':
        // Downward monumental crushing mass and solid gravity block
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none">
            <rect x="25" y="15" width="50" height="40" strokeWidth={active ? "5" : "3"} fill="currentColor" fillOpacity={active ? "0.2" : "0.05"} />
            <line x1="50" y1="55" x2="50" y2="85" strokeWidth={active ? "6" : "4"} />
            <polygon points="50,95 38,80 62,80" fill="currentColor" stroke="none" />
            <line x1="15" y1="95" x2="85" y2="95" strokeWidth="4" />
          </svg>
        );
      case 'indirect':
        // Erratic zig-zag multi-directional scatter
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none">
            <polyline 
              points="10,80 35,30 20,20 70,60 55,90 90,20" 
              strokeWidth={active ? "5" : "3"} 
              strokeLinejoin="bevel"
            />
            <circle cx="90" cy="20" r="4" fill="currentColor" />
            <circle cx="10" cy="80" r="3" fill="currentColor" />
          </svg>
        );
    }
  };

  const getQualityIcon = (id: string) => {
    switch (id) {
      case 'pragmatico': return <Target className="w-4 h-4" />;
      case 'volatil': return <Wind className="w-4 h-4" />;
      case 'pesado': return <Anchor className="w-4 h-4" />;
      case 'distraido': return <Shuffle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="bg-[#121216] border-2 border-white p-6 sm:p-8 mb-16 relative">
      
      {/* Table Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#2b2b36] pb-4 mb-8">
        <div>
          <div className="inline-block bg-[#ff003f] text-black font-mono text-xs px-2.5 py-0.5 font-bold uppercase tracking-widest mb-1 shadow-[2px_2px_0px_#ffffff]">
            SISTEMA LABAN DE ACCIÓN
          </div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#f3f2ee]">
            MENÚ ESTRATÉGICO DE CUALIDADES DE MOVIMIENTO
          </h3>
          <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean mt-1">
            Matriz de decisión física: cómo cada modulación de peso, espacio, tiempo y flujo proyecta una lectura psicológica inmediata.
          </p>
        </div>

        <div className="text-xs font-mono text-[#dcd8ce] bg-black px-3 py-1 border border-[#333]">
          4 VECTORES FUNDAMENTALES
        </div>
      </div>

      {/* Desktop View: Interactive 4-Column Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {MOVEMENT_QUALITIES.map((q) => {
          const isSelected = selectedQualityId === q.id;
          return (
            <div
              key={q.id}
              onClick={() => setSelectedQualityId(q.id)}
              className={`p-5 border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#181822] border-[#ff003f] shadow-[5px_5px_0px_#ffffff] -translate-y-1 text-[#f3f2ee]'
                  : 'bg-[#0e0e12] border-[#292934] text-[#a8a59e] hover:border-white hover:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#2a2a36] pb-2 mb-3">
                  <span className={`font-mono text-xs ${isSelected ? 'text-[#ff003f]' : 'text-stone-500'}`}>
                    0{q.code}
                  </span>
                  <span className={isSelected ? 'text-[#ff003f]' : 'text-[#888]'}>
                    {getQualityIcon(q.id)}
                  </span>
                </div>

                {/* Abstract Kinetic Icon Display */}
                <div className={`w-24 h-24 mx-auto my-3 p-2 transition-all ${
                  isSelected ? 'text-[#ff003f] scale-110' : 'text-[#555]'
                }`}>
                  {renderAbstractGraphic(q.visualGraphic, isSelected)}
                </div>

                <h4 className="font-display text-xl uppercase tracking-tight text-[#f3f2ee] text-center mb-2">
                  {q.name}
                </h4>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {q.keywords.map((kw, i) => (
                    <span 
                      key={i} 
                      className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                        isSelected ? 'bg-black border-[#ff003f] text-[#f3f2ee]' : 'border-[#222] text-[#777]'
                      }`}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#22222d] text-center">
                <span className={`text-[11px] font-mono uppercase tracking-wider ${
                  isSelected ? 'text-[#ff003f] font-bold' : 'text-[#666]'
                }`}>
                  {isSelected ? '● ACTIVA EN ESCENA' : 'Click para examinar'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Quality Detailed Breakdown (Desktop) */}
      <div className="hidden md:block bg-[#0c0c10] border border-[#2b2b36] p-6 mb-4">
        {(() => {
          const active = MOVEMENT_QUALITIES.find(q => q.id === selectedQualityId) || MOVEMENT_QUALITIES[0];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3 border-r border-[#22222d] pr-6 text-center">
                <div className="w-28 h-28 mx-auto text-[#ff003f] mb-2">
                  {renderAbstractGraphic(active.visualGraphic, true)}
                </div>
                <div className="font-display text-2xl uppercase tracking-wider text-[#ff003f]">
                  {active.name}
                </div>
                <div className="font-mono text-xs text-[#a8a59e] mt-1">
                  CÓDIGO LABAN // MODALIDAD {active.code}
                </div>
              </div>

              <div className="lg:col-span-9 space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#ff003f] uppercase tracking-wider block mb-1">
                    EFECTO PROYECTADO EN ESCENA:
                  </span>
                  <p className="text-base text-[#f3f2ee] font-sans-clean font-semibold leading-relaxed">
                    {active.projectedEffect}
                  </p>
                </div>

                <div className="bg-[#14141a] p-4 border-l-4 border-[#ff003f]">
                  <span className="text-xs font-mono text-[#dcd8ce] uppercase tracking-wider block mb-1">
                    ESTRATEGIA / CUÁNDO USARLO:
                  </span>
                  <p className="text-sm text-[#dcd8ce] font-sans-clean leading-relaxed">
                    {active.strategyWhenToUse}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Mobile View: Vertical Accordion */}
      <div className="md:hidden space-y-3">
        {MOVEMENT_QUALITIES.map((q) => {
          const isOpen = openAccordionId === q.id;
          return (
            <div
              key={q.id}
              className={`border-2 transition-colors ${
                isOpen ? 'bg-[#16161e] border-[#ff003f]' : 'bg-[#0e0e12] border-[#292934]'
              }`}
            >
              <button
                onClick={() => setOpenAccordionId(isOpen ? '' : q.id)}
                className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${isOpen ? 'text-[#ff003f]' : 'text-[#888]'}`}>
                    {renderAbstractGraphic(q.visualGraphic, isOpen)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#a8a59e] block">MODALIDAD {q.code}</span>
                    <h4 className="font-display text-lg uppercase tracking-tight text-[#f3f2ee]">
                      {q.name}
                    </h4>
                  </div>
                </div>

                <ChevronDown className={`w-5 h-5 text-[#a8a59e] transition-transform ${
                  isOpen ? 'rotate-180 text-[#ff003f]' : ''
                }`} />
              </button>

              {isOpen && (
                <div className="p-4 pt-0 border-t border-[#252530] space-y-3 mt-2">
                  <div>
                    <span className="text-xs font-mono text-[#ff003f] uppercase block mb-1">
                      Efecto proyectado en escena:
                    </span>
                    <p className="text-sm text-[#f3f2ee] font-sans-clean">
                      {q.projectedEffect}
                    </p>
                  </div>

                  <div className="bg-[#0b0b0c] p-3 border-l-2 border-[#ff003f]">
                    <span className="text-xs font-mono text-[#a8a59e] uppercase block mb-1">
                      Estrategia / Cuándo usarlo:
                    </span>
                    <p className="text-xs text-[#dcd8ce] font-sans-clean">
                      {q.strategyWhenToUse}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {q.keywords.map((kw, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-[#1f1f28] text-[#a8a59e]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
