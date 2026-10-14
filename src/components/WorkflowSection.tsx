import React from 'react';
import { workflowSteps, deliveryGuarantees } from '../data/initialData';
import { CheckCircle2, ArrowRight, ShieldCheck, Box, Key, BookOpen, Terminal, Sparkles, RefreshCw } from 'lucide-react';

interface WorkflowSectionProps {
  onDiscussIdea: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onDiscussIdea }) => {
  return (
    <section id="workflow" className="py-20 bg-[#06080d] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: How I Work */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>ПРОЗРАЧНЫЙ ПРОЦЕСС</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            Как я работаю: от идеи до запуска
          </h2>

          <p className="text-base text-slate-300">
            Цель разработки — не просто красивая демонстрация, а полностью функционирующий продукт, которым вы сможете управлять автономно и развивать свой бизнес.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-heading text-cyan-400/80">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-mono">
                    Этап
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-1">
                  {step.title}
                </h3>

                <p className="text-xs text-cyan-300 font-medium mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Delivery Section */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/20 p-8 sm:p-12 relative overflow-hidden">
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ГАРАНТИЯ ПЕРЕДАЧИ ВЛАДЕЛЬЦУ</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
              Что вы получаете при передаче готового проекта
            </h3>

            <p className="text-sm sm:text-base text-slate-300">
              Вы становитесь полноправным владельцем продукта. Никакой принудительной зависимости от разработчика: вы получаете ключи, исходники и понятные правила эксплуатации.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {deliveryGuarantees.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 max-w-xl">
              * Рутинное наполнение сайта вы производите самостоятельно через удобную админку. Сопровождение и масштабирование новых фичей всегда доступны по отдельному запросу.
            </div>

            <button
              onClick={onDiscussIdea}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-600/25 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Обсудить реализацию вашей идеи</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
