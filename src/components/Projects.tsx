import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Eye, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../services/storage';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOrderSimilar: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onSelectProject,
  onOrderSimilar
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t.cat_all },
    { id: 'ai', label: t.cat_ai },
    { id: 'web', label: t.cat_web },
    { id: 'telegram', label: t.cat_telegram },
    { id: 'automation', label: t.cat_automation }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.categorySlug === activeCategory);

  const handleDemoClick = (project: Project, e: React.MouseEvent) => {
    trackEvent('demo_click', project.id, project.title);
  };

  const handleDetailsClick = (project: Project) => {
    trackEvent('project_view', project.id, project.title);
    onSelectProject(project);
  };

  return (
    <section id="projects" className="py-20 bg-[#070b1e] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.projects_badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            {t.projects_header}
          </h2>

          <p className="text-base text-slate-300">
            {t.projects_subheader}
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`flex flex-col rounded-2xl bg-slate-900/40 border transition-all duration-300 overflow-hidden hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/40 group ${
                project.isReference
                  ? 'border-cyan-500/40 bg-gradient-to-b from-[#0b1028]/90 to-slate-950/80 ring-1 ring-cyan-500/30'
                  : 'border-slate-800/80'
              }`}
            >
              {/* Preview Image with Badges */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.previewImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Status and Category badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/95 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.isReference && (
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-mono shadow-md shadow-cyan-500/30">
                      {t.flagship_tag}
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-950/95 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Key functions preview */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-mono">
                      {t.key_functions_label}
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyFunctions.slice(0, 3).map((fn, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{fn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Safe Demo Indicator */}
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{t.demo_safe_badge}</span>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.demoUrl && project.demoUrl !== '#' ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleDemoClick(project, e)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/20 transition-all"
                      >
                        <span>{t.btn_view_demo}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="px-3 py-2 rounded-xl bg-slate-800 text-slate-400 text-xs font-medium">
                        {t.demo_by_request}
                      </span>
                    )}

                    <button
                      onClick={() => handleDetailsClick(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold transition-all hover:text-white"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.btn_details}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onOrderSimilar(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    <span>{t.btn_order_similar}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
