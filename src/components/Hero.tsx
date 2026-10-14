import React from 'react';
import { SiteConfig } from '../types';
import { ArrowRight, Sparkles, Send, CheckCircle2, Cpu, Zap, Layers, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../services/storage';

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
  const handleTelegramClick = () => {
    trackEvent('telegram_click', 'hero_support_bot', config.telegramBotHandle);
  };

  const handleCtaClick = () => {
    trackEvent('cta_click', 'hero_discuss', 'Обсудить свой проект');
    onOpenOrder();
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-32 grid-background">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6 shadow-lg shadow-cyan-950/40 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>Независимый создатель AI-приложений & веб-продуктов</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">MR studio</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action buttons */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-heading">
              {config.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {config.heroSubheadline}
            </p>

            {/* Metaphor pill / Flow pipeline */}
            <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex flex-wrap items-center gap-2 sm:gap-3 backdrop-blur-md">
              <span className="font-semibold text-cyan-300 font-mono">Цикл реализации:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">Идея</span>
              <span className="text-cyan-500 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">AI-прототип</span>
              <span className="text-cyan-500 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-medium">Работающий продукт</span>
              <span className="text-cyan-500 font-bold">→</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-medium">Передача владельцу</span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 font-semibold text-sm transition-all shadow-md group"
              >
                <span>Посмотреть проекты</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Обсудить свой проект</span>
              </button>

              <a
                href={config.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTelegramClick}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-300 border border-cyan-500/30 text-sm font-semibold transition-all"
                title="Написать в Telegram Support Bot"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Telegram: {config.telegramBotHandle}</span>
              </a>
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Работающий продукт, а не просто код</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Полный доступ и исходники клиенту</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">Без скрытой абонентской привязки</span>
              </div>
            </div>
          </div>

          {/* Right Column: VR Creator Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950/80 shadow-2xl shadow-cyan-500/15 group">
              <img
                src={config.heroImageUrl}
                alt="AI Creator working in futuristic VR workspace creating digital apps"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Holographic overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-transparent opacity-80" />

              {/* Floating Holographic Badge 1 */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 text-xs shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 border border-cyan-500/40">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider">AI Studio Core</div>
                  <div className="text-xs font-semibold text-white">Быстрое прототипирование</div>
                </div>
              </div>

              {/* Floating Holographic Badge 2 */}
              <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-emerald-500/30 text-xs shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 border border-emerald-500/40">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">Production Ready</div>
                  <div className="text-xs font-semibold text-white">100% Владение кодом</div>
                </div>
              </div>
            </div>

            {/* Bottom Caption on Metaphor */}
            <div className="mt-3 text-center">
              <span className="text-[11px] text-slate-500 font-mono">
                Визуальная концепция: Пространство синтеза бизнес-идей в готовые цифровые системы
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
