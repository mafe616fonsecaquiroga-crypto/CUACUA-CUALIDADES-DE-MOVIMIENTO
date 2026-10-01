import React, { useState } from 'react';
import { Play, Film, ExternalLink, Link2, Check, RefreshCw } from 'lucide-react';

interface VideoCardProps {
  label: string;
  placeholderKey: string;
  title: string;
  description: string;
  defaultThumbnail?: string;
  initialUrl?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  label,
  placeholderKey,
  title,
  description,
  defaultThumbnail = "/src/assets/images/score_biomechanics_1790869574887.jpg",
  initialUrl = "",
}) => {
  // Helper to extract YouTube video ID
  const extractYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : (url.trim().length === 11 ? url.trim() : null);
  };

  const initialId = initialUrl ? extractYouTubeId(initialUrl) : null;
  const [videoUrl, setVideoUrl] = useState(initialUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [embedId, setEmbedId] = useState<string | null>(initialId);

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) return;
    const id = extractYouTubeId(videoUrl);
    if (id) {
      setEmbedId(id);
      setIsPlaying(true);
      setShowConfig(false);
    } else {
      // If user typed 11 character ID directly
      if (videoUrl.trim().length === 11) {
        setEmbedId(videoUrl.trim());
        setIsPlaying(true);
        setShowConfig(false);
      } else {
        alert('Por favor introduce un enlace válido de YouTube (ej. https://www.youtube.com/watch?v=... o ID)');
      }
    }
  };

  return (
    <div className="relative bg-[#141419] border-2 border-white/80 p-4 sm:p-6 shadow-[6px_6px_0px_#ff003f] masking-tape">
      
      {/* Editorial Header Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2d2d38] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-[#ff003f]" />
          <span className="font-display tracking-widest text-sm text-[#ff003f] uppercase">
            {label}
          </span>
          <span className="text-stone-600">·</span>
          <span className="font-mono text-xs text-[#a8a59e] uppercase px-2 py-0.5 bg-[#0b0b0c] border border-[#2b2b36]">
            {placeholderKey}
          </span>
        </div>

        <button
          onClick={() => setShowConfig(!showConfig)}
          className="text-xs font-mono text-[#dcd8ce] hover:text-[#ff003f] flex items-center gap-1.5 transition-colors cursor-pointer"
          title="Configurar URL de YouTube"
        >
          <Link2 className="w-3.5 h-3.5" />
          <span>{embedId ? "Cambiar Video" : "Configurar Enlace"}</span>
        </button>
      </div>

      {/* Title & Description */}
      <div className="mb-4">
        <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#f3f2ee]">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#a8a59e] font-sans-clean mt-1">
          {description}
        </p>
      </div>

      {/* URL Configuration Drawer */}
      {showConfig && (
        <form onSubmit={handleApplyUrl} className="mb-4 p-3 bg-[#0b0b0c] border border-[#ff003f] space-y-2">
          <label className="block text-xs font-mono text-[#dcd8ce] uppercase">
            Vincular enlace de YouTube oficial:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="flex-1 bg-[#17171d] border border-[#33333f] px-3 py-1.5 text-xs text-[#f3f2ee] focus:border-[#ff003f] outline-none font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-[#ff003f] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Aplicar
            </button>
          </div>
          <p className="text-[11px] text-[#73737a] font-mono">
            Placeholder activo: <code className="text-[#ff003f]">{placeholderKey}</code>. Puedes ingresar cualquier URL o ID de YouTube para reproducirlo en vivo.
          </p>
        </form>
      )}

      {/* Video Screen / Player Container */}
      <div className="relative aspect-video w-full bg-black border-2 border-[#2b2b36] overflow-hidden group">
        
        {/* If embedId is active and playing */}
        {embedId && isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          /* Punk Distressed Video Thumbnail View */
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Background Thumbnail Image */}
            <img
              src={embedId ? `https://img.youtube.com/vi/${embedId}/hqdefault.jpg` : defaultThumbnail}
              alt={`Miniatura para ${title}`}
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== defaultThumbnail) {
                  target.src = defaultThumbnail;
                }
              }}
            />

            {/* Halftone Texture Overlay */}
            <div className="absolute inset-0 bg-halftone opacity-50 pointer-events-none" />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Top Placeholder Ribbon */}
            <div className="absolute top-3 left-3 z-10 bg-black/90 border border-[#ff003f] px-3 py-1 text-xs font-mono text-[#ff003f] flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff003f] animate-ping" />
              <span>{embedId ? `YOUTUBE: [${embedId}]` : `SLOT: [${placeholderKey}]`}</span>
            </div>

            {/* Center Play Action Button */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <button
                onClick={() => {
                  if (embedId) {
                    setIsPlaying(true);
                  } else {
                    setShowConfig(true);
                  }
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-[#ff003f] text-black flex items-center justify-center border-2 border-white shadow-[4px_4px_0px_#000000] hover:bg-white hover:text-black transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label={`Reproducir ${title}`}
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </button>

              <div className="text-center bg-black/80 px-4 py-1.5 border border-[#2b2b36]">
                <span className="font-display text-sm tracking-widest text-[#f3f2ee] uppercase">
                  {embedId ? "CLICK PARA REPRODUCIR" : "VINCULAR / REPRODUCIR ARCHIVO"}
                </span>
              </div>
            </div>

            {/* Bottom Technical Stamps */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#dcd8ce] z-10 bg-black/70 px-3 py-1 border border-white/10">
              <span>SISTEMA: AUDIOVISUAL FORMATIVO</span>
              <span>1080P // AUDIO 48KHZ</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Details */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#7a7872]">
        <span>Identificador del registro: {placeholderKey}</span>
        <span>Fuente: Documento de referencia de artes vivas</span>
      </div>
    </div>
  );
};
