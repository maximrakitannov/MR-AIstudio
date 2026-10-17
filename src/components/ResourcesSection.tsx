import React from 'react';
import { PersonalResource } from '../types';
import { Send, CreditCard, MessageSquare, Video, ExternalLink, QrCode as QrIcon, Sparkles } from 'lucide-react';
import { trackEvent } from '../services/storage';
import { useLanguage } from '../i18n/LanguageContext';

interface ResourcesSectionProps {
  resources: PersonalResource[];
  onShowQr: (url: string, title: string, desc?: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  resources,
  onShowQr
}) => {
  const { t } = useLanguage();
  const activeResources = resources
    .filter(r => r.enabled)
    .sort((a, b) => a.order - b.order);

  const getResourceIcon = (type: PersonalResource['iconType']) => {
    switch (type) {
      case 'bot':
      case 'telegram':
        return <Send className="w-5 h-5" />;
      case 'taplink':
        return <CreditCard className="w-5 h-5" />;
      case 'whatsapp':
        return <MessageSquare className="w-5 h-5" />;
      case 'youtube':
        return <Video className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const handleLinkClick = (resource: PersonalResource) => {
    trackEvent('resource_click', resource.id, resource.name);
    if (resource.iconType === 'bot' || resource.iconType === 'telegram') {
      trackEvent('telegram_click', resource.id, resource.displayHandle);
    }
  };

  return (
    <section id="resources" className="py-20 bg-[#080d22] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.resources_badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
            {t.resources_header}
          </h2>

          <p className="text-base text-slate-300">
            {t.resources_subheader}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeResources.map(resource => (
            <div
              key={resource.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    {getResourceIcon(resource.iconType)}
                  </div>

                  {resource.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {resource.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {resource.name}
                </h3>

                <p className="text-xs font-mono text-cyan-400 mb-3 truncate">
                  {resource.displayHandle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {resource.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(resource)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/20 transition-all"
                >
                  <span>{t.btn_open_resource}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {resource.url && (
                  <button
                    onClick={() => onShowQr(resource.url, resource.name, resource.description)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                    title={t.btn_qr_code}
                    aria-label="QR код"
                  >
                    <QrIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
