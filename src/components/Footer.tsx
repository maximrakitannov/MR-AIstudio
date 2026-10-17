import React from 'react';
import { SiteConfig } from '../types';
import { Send, CreditCard, Lock, ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  config: SiteConfig;
  onOpenLegal: (docId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenLegal,
  onOpenAdmin
}) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050818] border-t border-slate-900 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 flex items-center justify-center font-heading font-black text-white text-sm shadow-md shadow-cyan-500/20">
                MR
              </div>
              <span className="text-lg font-bold text-white font-heading tracking-tight">
                {config.studioName}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer_tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={config.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 text-xs font-semibold"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{config.telegramBotHandle}</span>
              </a>

              <a
                href={config.taplinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Taplink</span>
              </a>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm font-heading">
              {t.footer_nav}
            </h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">{t.nav_projects}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.nav_services}</a></li>
              <li><a href="#workflow" className="hover:text-cyan-400 transition-colors">{t.nav_process}</a></li>
              <li><a href="#resources" className="hover:text-cyan-400 transition-colors">{t.nav_resources}</a></li>
              <li><a href="#contacts" className="hover:text-cyan-400 transition-colors">{t.nav_contact}</a></li>
            </ul>
          </div>

          {/* Legal Documents Col */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm font-heading">
              {t.footer_legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenLegal('terms-of-service')} className="hover:text-cyan-400 text-left transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy-policy')} className="hover:text-cyan-400 text-left transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('public-offer')} className="hover:text-cyan-400 text-left transition-colors">
                  Public Offer
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-cyan-400 text-left transition-colors">
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Control & Security */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm font-heading">
              {t.footer_control}
            </h4>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              {t.footer_admin_desc}
            </p>
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 text-xs font-medium transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.footer_btn_admin}</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <span>&copy; {new Date().getFullYear()} {config.studioName}. {t.footer_rights}</span>
            <span className="text-slate-700">•</span>
            <span>{t.footer_dev_by}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Scroll to Top"
            aria-label="Наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
