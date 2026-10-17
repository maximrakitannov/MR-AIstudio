import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, Server, Lock, Database, UserCheck, KeyRound } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#080d22] border-t border-slate-800/80 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#070b1e] border border-cyan-500/25 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.security_badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mb-4">
              {t.security_header}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.security_desc}
            </p>
          </div>

          {/* Security 3-Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/90">
            
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5 font-heading">
                  {t.security_bullet1}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Полная передача ключей шифрования, паролей и репозиториев без скрытых привилегий разработчика.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-violet-500/40 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5 font-heading">
                  {t.security_bullet2}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Никаких общих таблиц или смешанных баз. Каждый клиент получает полностью выделенный контур данных.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5 font-heading">
                  {t.security_bullet3}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Защита интеллектуальной собственности, исходных алгоритмов и клиентской базы строгими соглашениями.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
