import React, { useState } from 'react';
import { EXPERT_LEVEL_MODULES, ExpertLevelModule } from '../data/curriculum';
import { ChevronDown, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const ExpertLevel: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('verbos');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <div className="bg-[#121217] border-2 border-white p-6 sm:p-8 mb-16 relative">
      
      {/* Tape and Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#2b2b36] pb-4 mb-8">
        <div>
          <div className="inline-block bg-[#ff003f] text-black font-mono text-xs px-2.5 py-0.5 font-bold uppercase tracking-widest mb-1 shadow-[2px_2px_0px_#ffffff]">
            INFOGRAFÍA INTERACTIVA
          </div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#f3f2ee]">
            ¿QUÉ HACE A UNA PARTITURA SER "EXPERT LEVEL"?
          </h3>
          <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean mt-1">
            Los 4 pilares estructurales que diferencian el boceto amateur de una partitura escénica indestructible.
          </p>
        </div>

        <div className="text-xs font-mono text-[#ff007f] bg-black px-3 py-1.5 border border-[#2b2b38] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>HAZ CLICK EN CADA MÓDULO PARA EXPANDIR</span>
        </div>
      </div>

      {/* 4 Interactive Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERT_LEVEL_MODULES.map((item: ExpertLevelModule) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => toggleExpand(item.id)}
              className={`border-2 transition-all duration-200 cursor-pointer p-5 sm:p-6 relative group ${
                isExpanded
                  ? 'bg-[#181822] border-[#ff003f] shadow-[6px_6px_0px_#ffffff] -translate-y-1'
                  : 'bg-[#0f0f13] border-[#2e2e38] hover:border-white hover:bg-[#15151c]'
              }`}
            >
              {/* Top Bar inside Card */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className={`font-display text-3xl transition-colors ${
                    isExpanded ? 'text-[#ff003f]' : 'text-[#888] group-hover:text-white'
                  }`}>
                    {item.number}
                  </span>
                  <div>
                    <h4 className="font-display text-2xl uppercase tracking-tight text-[#f3f2ee]">
                      {item.title}
                    </h4>
                    <span className="text-xs text-[#a8a59e] font-sans-clean line-clamp-1">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Expandir ${item.title}`}
                  className={`w-7 h-7 flex items-center justify-center border transition-all ${
                    isExpanded
                      ? 'bg-[#ff003f] text-black border-black rotate-180'
                      : 'bg-black text-[#a8a59e] border-[#333] group-hover:text-white'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Handwriting Floating Note on Hover / Active */}
              <div className="font-marker text-xs text-[#ff007f] mb-3 transform -rotate-1">
                // {item.annotation}
              </div>

              {/* Collapsed / Expanded Content */}
              {isExpanded ? (
                <div className="mt-4 pt-4 border-t border-[#2d2d3a] space-y-3 animate-fadeIn">
                  <div>
                    <span className="text-xs font-mono text-[#ff003f] uppercase tracking-wider block mb-1">
                      PRINCIPIO FUNDAMENTAL:
                    </span>
                    <p className="text-xs sm:text-sm text-[#dcd8ce] font-sans-clean leading-relaxed">
                      {item.corePrinciple}
                    </p>
                  </div>

                  <div className="bg-[#0b0b0c] p-3 border-l-2 border-[#ff003f]">
                    <span className="text-xs font-mono text-[#a8a59e] uppercase tracking-wider block mb-1">
                      APLICACIÓN PRÁCTICA EN SALA:
                    </span>
                    <p className="text-xs sm:text-sm text-[#f3f2ee] font-sans-clean leading-relaxed">
                      {item.practicalApplication}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-[#73737a] flex items-center gap-1 font-mono pt-2 border-t border-[#202028]">
                  <span>Click para ver principio y desglose</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 pt-4 border-t border-[#252530] flex flex-wrap items-center justify-between text-xs font-mono text-[#a8a59e]">
        <span>CRITERIO DE AUDICIÓN Y DIRECCIÓN</span>
        <span className="text-[#ff003f] font-bold">100% REPETIBLE · 0% CASUALIDAD</span>
      </div>
    </div>
  );
};
