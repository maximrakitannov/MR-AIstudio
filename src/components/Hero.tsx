import React from 'react';
import { SiteConfig } from '../types';
import { ArrowRight, Sparkles, Send, CheckCircle2, Cpu, Zap, Layers, ShieldCheck, Activity } from 'lucide-react';
import { trackEvent } from '../services/storage';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  config: SiteConfig;
  onExploreProjects: () => void;
  onOpenOrder: () => void;
  onOpenQrModal: (url: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  onExploreProjects,
  onOpenOrder,
  onOpenQrModal
}) => {
  const { t, currentLang } = useLanguage();

  const handleTelegramClick = () => {
    trackEvent('telegram_click', 'hero_support_bot', config.telegramBotHandle);
  };

  const handleCtaClick = () => {
    trackEvent('cta_click', 'hero_discuss', t.btn_discuss_project);
    onOpenOrder();
  };

  // Determine localized headline
  const headline = currentLang === 'ru' ? config.heroHeadline : t.hero_title;
  const subheadline = currentLang === 'ru' ? config.heroSubheadline : t.hero_subtitle;

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-32 bg-[#080d22]">
      {/* Ambient background glow accents with Night Sky palette (#0A0E27, #1A0B2E, #007AFF, #7B2CBF) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 grid-background opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/35 text-cyan-300 text-xs font-mono font-medium mb-6 shadow-xl shadow-black/50 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>{t.hero_badge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Action buttons */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading drop-shadow-sm">
              <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
                {headline}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {subheadline}
            </p>

            {/* Metaphor pill / Flow pipeline */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0b1028]/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 flex flex-wrap items-center gap-2 sm:gap-3 backdrop-blur-xl shadow-lg">
              <span className="font-semibold text-cyan-300 font-mono flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>{t.hero_pipeline_title}</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 font-medium border border-slate-700">{t.hero_step_idea}</span>
              <span className="text-cyan-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 font-medium border border-slate-700">{t.hero_step_proto}</span>
              <span className="text-cyan-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold">{t.hero_step_product}</span>
              <span className="text-cyan-400 font-bold">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-semibold">{t.hero_step_handover}</span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400 font-semibold text-sm transition-all shadow-md group"
              >
                <span>{t.btn_view_projects}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.btn_discuss_project}</span>
              </button>

              <a
                href={config.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTelegramClick}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-300 border border-cyan-500/35 text-sm font-semibold transition-all hover:border-cyan-400"
                title="Telegram Support Bot"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>{config.telegramBotHandle}</span>
              </a>
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 border-t border-slate-800/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">{t.hero_value_1}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">{t.hero_value_2}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">{t.hero_value_3}</span>
              </div>
            </div>
          </div>

          {/* Right Column: VR Creator Visual (30-35 year old man in VR modulating glowing fractals) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/35 bg-slate-950/90 shadow-2xl shadow-cyan-500/15 group">
              <img
                src={config.heroImageUrl}
                alt="Maxim Rakitannov — AI Creator in VR workspace modulating glowing fractals in mid-air"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Holographic atmospheric overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d22] via-transparent to-transparent opacity-85" />

              {/* Floating Holographic Badge 1 */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/35 text-xs shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 border border-cyan-500/40">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">{t.hero_hologram_core}</div>
                  <div className="text-xs font-semibold text-white">{t.hero_hologram_core_desc}</div>
                </div>
              </div>

              {/* Floating Holographic Badge 2 */}
              <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/35 text-xs shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 border border-emerald-500/40">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">{t.hero_hologram_prod}</div>
                  <div className="text-xs font-semibold text-white">{t.hero_hologram_prod_desc}</div>
                </div>
              </div>
            </div>

            {/* Bottom Caption on Metaphor */}
            <div className="mt-3 text-center">
              <span className="text-[11px] text-slate-400 font-mono">
                {t.hero_visual_caption}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
