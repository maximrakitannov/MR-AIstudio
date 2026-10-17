import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Layers, Target, Users, HelpCircle, TrendingUp, Code2 } from 'lucide-react';
import { trackEvent } from '../services/storage';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOrderSimilar: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOrderSimilar
}) => {
  const { t } = useLanguage();
  if (!isOpen || !project) return null;

  const handleDemoClick = () => {
    trackEvent('demo_click', project.id, project.title);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#090d20] border border-cyan-500/30 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header / Close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090d20]/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero image and title banner */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl group">
            <img
              src={project.previewImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Safe Demo Notice Banner */}
          <div className="rounded-xl p-4 bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-cyan-200/90 leading-relaxed">
              <span className="font-semibold text-cyan-300 block mb-0.5">{t.modal_safe_title}</span>
              {t.modal_safe_desc}
            </div>
          </div>

          {/* Action buttons bar */}
          <div className="flex flex-wrap items-center gap-3 py-2 border-y border-slate-800/80">
            {project.demoUrl && project.demoUrl !== '#' ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDemoClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.btn_view_demo}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-400 text-sm font-medium">
                {t.demo_by_request}
              </span>
            )}

            <button
              onClick={() => {
                onOrderSimilar(project);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-cyan-500/30 text-sm font-medium transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{t.btn_order_similar}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid with structured project dossier */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Objective */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2.5 text-cyan-400 font-semibold text-sm">
                <Target className="w-4 h-4" />
                <span>{t.modal_objective}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.objective}
              </p>
            </div>

            {/* Target Audience */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2.5 text-cyan-400 font-semibold text-sm">
                <Users className="w-4 h-4" />
                <span>{t.modal_audience}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.targetAudience}
              </p>
            </div>

            {/* Problem Solved */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2.5 text-cyan-400 font-semibold text-sm">
                <HelpCircle className="w-4 h-4" />
                <span>{t.modal_problem}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* Business Value */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2.5 text-emerald-400 font-semibold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>{t.modal_value}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.businessValue}
              </p>
            </div>
          </div>

          {/* Key Functionality */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2.5 mb-4 text-cyan-400 font-semibold text-sm font-mono">
              <Layers className="w-4 h-4" />
              <span>{t.key_functions_label}</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFunctions.map((fn, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{fn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Approach & Tech stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2.5 mb-2.5 text-cyan-400 font-semibold text-sm">
                <Code2 className="w-4 h-4" />
                <span>{t.modal_approach}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.developmentApproach}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                {t.modal_tech_stack}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
