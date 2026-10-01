import React from 'react';
import { STYLIZATION_COMPARISON } from '../data/curriculum';
import { AlertTriangle, Award, Split, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export const StylizationComparison: React.FC = () => {
  return (
    <div className="bg-[#101015] border-2 border-white/80 p-6 sm:p-8 mb-16 relative">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#2b2b36] pb-4 mb-8">
        <div>
          <div className="inline-block bg-[#ff003f] text-black font-mono text-xs px-2.5 py-0.5 font-bold uppercase tracking-widest mb-1">
            CRITERIO DRAMATÚRGICO PRO
          </div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#f3f2ee]">
            {STYLIZATION_COMPARISON.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean mt-1">
            {STYLIZATION_COMPARISON.subtitle}
          </p>
        </div>

        <div className="font-mono text-xs text-[#dcd8ce] flex items-center gap-1.5 bg-black px-3 py-1.5 border border-[#333]">
          <Split className="w-3.5 h-3.5 text-[#ff003f]" />
          <span>MÍMESIS VS. CONSTRUCCIÓN FORMAL</span>
        </div>
      </div>

      {/* Two-Column Clash Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Column 1: REPRESENTACIÓN (Cliché) */}
        <div className="bg-[#14141a] border-2 border-[#3a3a46] p-6 sm:p-8 flex flex-col justify-between relative opacity-85 hover:opacity-100 transition-opacity">
          
          {/* Status Flag */}
          <div className="flex items-center justify-between border-b border-[#2a2a36] pb-3 mb-4">
            <div className="flex items-center gap-2 text-stone-400 font-display text-sm tracking-widest uppercase">
              <XCircle className="w-4 h-4 text-stone-500" />
              <span>{STYLIZATION_COMPARISON.representation.label}</span>
            </div>
            <span className="text-[11px] font-mono text-stone-500 bg-black px-2 py-0.5">
              NIVEL: CLICHÉ
            </span>
          </div>

          <div>
            {/* Visual Cliché Diagram */}
            <div className="h-32 bg-[#09090b] border border-[#22222a] mb-6 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="font-marker text-lg text-stone-500 transform -rotate-3">
                "Hago que me caigo..."
              </div>
              <div className="text-[11px] font-mono text-stone-600 mt-2">
                [Gesto mimético literal sin vector interno]
              </div>
              <div className="absolute inset-0 border border-stone-800 pointer-events-none" />
            </div>

            {/* Core Quote */}
            <blockquote className="bg-[#0b0b0c] border-l-4 border-stone-600 p-4 font-display text-xl sm:text-2xl text-stone-300 uppercase leading-snug mb-4">
              "{STYLIZATION_COMPARISON.representation.quote}"
            </blockquote>

            {/* Mechanics Explanation */}
            <p className="text-xs sm:text-sm text-stone-400 font-sans-clean leading-relaxed">
              {STYLIZATION_COMPARISON.representation.mechanics}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#252530] flex items-center justify-between text-xs font-mono text-stone-500">
            <span>RESULTADO ESCÉNICO:</span>
            <span className="uppercase font-bold tracking-wider text-stone-400">
              {STYLIZATION_COMPARISON.representation.verdict}
            </span>
          </div>
        </div>

        {/* Column 2: ESTILIZACIÓN (Oficio Pro) */}
        <div className="bg-[#171722] border-2 border-[#ff003f] p-6 sm:p-8 flex flex-col justify-between relative shadow-[6px_6px_0px_#ffffff]">
          
          {/* Tape Accent */}
          <div className="absolute -top-3.5 right-6 bg-[#ff003f] text-black font-display text-xs tracking-widest px-3 py-1 uppercase shadow-sm">
            NIVEL PRO // OFICIO PURO
          </div>

          {/* Status Flag */}
          <div className="flex items-center justify-between border-b border-[#2a2a36] pb-3 mb-4">
            <div className="flex items-center gap-2 text-[#ff003f] font-display text-sm tracking-widest uppercase">
              <CheckCircle2 className="w-4 h-4 text-[#ff003f]" />
              <span>{STYLIZATION_COMPARISON.stylization.label}</span>
            </div>
            <span className="text-[11px] font-mono text-[#ff007f] bg-black px-2 py-0.5 border border-[#333]">
              AUTONOMÍA ARTÍSTICA
            </span>
          </div>

          <div>
            {/* Visual Poetic Score Diagram */}
            <div className="h-32 bg-[#0b0b0c] border border-[#ff003f]/50 mb-6 p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-halftone opacity-40" />
              <div className="relative z-10">
                <div className="font-display text-xl text-[#ff003f] uppercase tracking-wider">
                  CUALIDAD VOLÁTIL + PLANIMETRÍA ESPIRAL
                </div>
                <div className="text-[11px] font-mono text-[#dcd8ce] mt-1">
                  Disociación: Torso en suspensión (3/4) // Piernas en freno retardado
                </div>
              </div>
            </div>

            {/* Core Quote */}
            <blockquote className="bg-[#0b0b0c] border-l-4 border-[#ff003f] p-4 font-display text-xl sm:text-2xl text-[#f3f2ee] uppercase leading-snug mb-4">
              "{STYLIZATION_COMPARISON.stylization.quote}"
            </blockquote>

            {/* Mechanics Explanation */}
            <p className="text-xs sm:text-sm text-[#dcd8ce] font-sans-clean leading-relaxed">
              {STYLIZATION_COMPARISON.stylization.mechanics}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#2d2d3a] flex items-center justify-between text-xs font-mono text-[#ff003f]">
            <span>DECISIÓN FORMAL:</span>
            <span className="uppercase font-bold tracking-wider text-white bg-[#ff003f] px-2 py-0.5">
              {STYLIZATION_COMPARISON.stylization.verdict}
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
