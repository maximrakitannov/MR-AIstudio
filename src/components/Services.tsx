import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { 
  Globe, Layers, Cpu, BarChart3, ShoppingBag, UserCheck, 
  Sliders, Database, Calculator, Briefcase, Workflow, 
  Send, Smartphone, Tablet, Sparkles, ArrowRight, Clock, Check
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ServicesProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'telegram' | 'automation'>('all');
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'Sliders': return <Sliders className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Tablet': return <Tablet className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const filtered = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <section id="services" className="py-20 bg-[#080d22] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.services_badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            {t.services_header}
          </h2>

          <p className="text-base text-slate-300">
            {t.services_subheader}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.filter_all} ({services.length})
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'ai'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.filter_ai}
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'web'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.filter_web}
          </button>
          <button
            onClick={() => setFilter('telegram')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'telegram'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.filter_telegram}
          </button>
          <button
            onClick={() => setFilter('automation')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'automation'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.filter_automation}
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(service => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>{t.btn_order_service}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
