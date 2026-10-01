import React, { useState } from 'react';
import { OBJECT_CASE_SEQUENCE, SCENIC_OBJECTS, ScenicObjectExample } from '../data/curriculum';
import { Box, Clock, Eye, Sun, Volume2, Sparkles, ArrowDown, ChevronRight } from 'lucide-react';

export const ObjectCase: React.FC = () => {
  const [selectedObjectId, setSelectedObjectId] = useState<string>('botella');
  const [activeStep, setActiveStep] = useState<number>(0);

  const selectedObject: ScenicObjectExample = 
    SCENIC_OBJECTS.find(o => o.id === selectedObjectId) || SCENIC_OBJECTS[0];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Box className="w-4 h-4" />;
      case 1: return <Clock className="w-4 h-4" />;
      case 2: return <Eye className="w-4 h-4" />;
      case 3: return <Sun className="w-4 h-4" />;
      case 4: return <Volume2 className="w-4 h-4" />;
      case 5: return <Sparkles className="w-4 h-4" />;
      default: return null;
    }
  };

  const getDetailForStep = (stepIndex: number) => {
    switch (stepIndex) {
      case 0: return { label: "1. OBJETO", text: selectedObject.context };
      case 1: return { label: "2. TIMING", text: selectedObject.timing };
      case 2: return { label: "3. FOCALIDAD", text: selectedObject.focality };
      case 3: return { label: "4. LUZ", text: selectedObject.lightSound.split(';')[0] || selectedObject.lightSound };
      case 4: return { label: "5. SONIDO", text: selectedObject.lightSound.split(';')[1] || "Silencio de alta densidad dramática" };
      case 5: return { label: "6. SUCESO ESCÉNICO", text: selectedObject.scenicEvent };
      default: return { label: "", text: "" };
    }
  };

  return (
    <div className="bg-[#15151c] border-2 border-[#ff003f] p-6 sm:p-8 mb-16 relative shadow-[8px_8px_0px_#ffffff]">
      
      {/* Tape Effect */}
      <div className="masking-tape" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#2b2b36] pb-4 mb-8">
        <div>
          <div className="inline-block bg-[#ff003f] text-black font-mono text-xs px-2.5 py-0.5 font-bold uppercase tracking-widest mb-1">
            ESTUDIO DRAMATÚRGICO MATERIAL
          </div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#f3f2ee]">
            EL CASO DEL OBJETO
          </h3>
          <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean mt-1">
            Cómo la partitura física transmuta el objeto doméstico inerte en un detonante poético irreversible.
          </p>
        </div>

        {/* Object Selectors */}
        <div className="flex items-center gap-2">
          {SCENIC_OBJECTS.map((obj) => (
            <button
              key={obj.id}
              onClick={() => setSelectedObjectId(obj.id)}
              className={`px-3 py-1.5 font-display text-sm uppercase tracking-wider transition-all cursor-pointer border ${
                selectedObjectId === obj.id
                  ? 'bg-white text-black border-white shadow-[2px_2px_0px_#ff003f]'
                  : 'bg-[#0b0b0c] text-[#a8a59e] border-[#333] hover:text-white hover:border-[#ff003f]'
              }`}
            >
              {obj.name}
            </button>
          ))}
        </div>
      </div>

      {/* The Visual Flow Chain: OBJETO ↓ TIMING ↓ FOCALIDAD ↓ LUZ ↓ SONIDO ↓ SUCESO ESCÉNICO */}
      <div className="mb-8">
        <div className="text-xs font-mono text-[#dcd8ce] uppercase tracking-wider mb-3">
          CADENA DE ACCIÓN Y TRANSFORMACIÓN ESCÉNICA:
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {OBJECT_CASE_SEQUENCE.map((seq, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={seq.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3 text-left transition-all border cursor-pointer relative group flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#ff003f] text-black border-white shadow-[3px_3px_0px_#000000]'
                    : 'bg-[#0e0e12] text-[#dcd8ce] border-[#292934] hover:border-[#ff003f]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono opacity-80 mb-1">
                    <span>{seq.step}</span>
                    {getStepIcon(idx)}
                  </div>
                  <div className="font-display text-lg uppercase tracking-tight leading-none">
                    {seq.name}
                  </div>
                </div>

                <div className={`text-[11px] font-sans-clean mt-2 line-clamp-2 ${
                  isCurrent ? 'text-black font-semibold' : 'text-[#888] group-hover:text-[#aaa]'
                }`}>
                  {seq.desc}
                </div>

                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-[#a8a59e] pointer-events-none">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Object Deep Dive Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0c0c10] border border-[#2b2b36] p-6 items-center">
        
        {/* Left: Graphic Object Silhouette & Stamp */}
        <div className="lg:col-span-4 text-center border-b lg:border-b-0 lg:border-r border-[#22222d] pb-6 lg:pb-0 lg:pr-6">
          <div className="inline-block px-3 py-1 bg-black border border-[#ff003f] font-mono text-xs text-[#ff003f] uppercase mb-4">
            OBJETO ACTIVO: {selectedObject.name}
          </div>

          <div className="w-36 h-36 mx-auto bg-[#171720] border-2 border-dashed border-[#ff003f] flex items-center justify-center p-4 relative group">
            <div className="font-display text-5xl uppercase tracking-tighter text-[#f3f2ee] group-hover:scale-110 transition-transform">
              {selectedObject.name}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white text-black font-marker text-[10px] px-2 py-0.5 transform rotate-3">
              RECURSO ESCÉNICO
            </div>
          </div>

          <p className="text-xs text-[#a8a59e] font-sans-clean mt-4 italic">
            "{selectedObject.context}"
          </p>
        </div>

        {/* Right: Focused Active Step Breakdown */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between border-b border-[#252532] pb-2">
            <span className="font-display text-xl uppercase tracking-wider text-[#ff003f]">
              {getDetailForStep(activeStep).label}
            </span>
            <span className="font-mono text-xs text-[#a8a59e]">PASO {activeStep + 1} DE 6</span>
          </div>

          <div className="bg-[#14141a] p-5 border-l-4 border-[#ff003f]">
            <p className="text-base sm:text-lg text-[#f3f2ee] font-sans-clean leading-relaxed font-semibold">
              {getDetailForStep(activeStep).text}
            </p>
          </div>

          {/* Quick Navigation Between Steps */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 5))}
              className="px-3 py-1.5 bg-[#1b1b24] text-xs font-mono text-[#dcd8ce] hover:text-white border border-[#333] hover:border-[#ff003f] transition-colors cursor-pointer"
            >
              ← Paso Anterior
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < 5 ? prev + 1 : 0))}
              className="px-3 py-1.5 bg-[#ff003f] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Siguiente Paso en Cadena →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
