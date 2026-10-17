import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Globe, Check, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { currentLang, setLanguage, supportedLanguages, langOption } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Selector Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-medium transition-all shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Switch Language / Сменить язык"
      >
        <span className="text-base leading-none">{langOption.flag}</span>
        <span className="font-mono uppercase font-semibold text-cyan-300">{langOption.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#0a0f24]/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-slate-800/80 text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>Select Language (8)</span>
          </div>

          <div className="py-1 max-h-64 overflow-y-auto">
            {supportedLanguages.map(lang => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/15 text-cyan-300 font-semibold border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="truncate">{lang.nativeName}</span>
                  </div>

                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
