import React, { useState } from 'react';
import { SiteConfig } from '../types';
import { Send, Menu, X, Shield, Sparkles } from 'lucide-react';
import { trackEvent } from '../services/storage';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  config: SiteConfig;
  onOpenAdmin: () => void;
  onOpenOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenAdmin, onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    trackEvent('telegram_click', 'header_support_bot', config.telegramBotHandle);
  };

  const navLinks = [
    { label: t.nav_projects, href: '#projects' },
    { label: t.nav_services, href: '#services' },
    { label: t.nav_process, href: '#workflow' },
    { label: t.nav_resources, href: '#resources' },
    { label: t.nav_contact, href: '#contacts' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070b1e]/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-400/50 transition-all">
              <div className="w-full h-full bg-[#080d22] rounded-xl flex items-center justify-center">
                <span className="font-heading font-black text-lg bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
                  MR
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white font-heading">
                  {config.studioName}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  AI STUDIO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Digital Creator & AI Web Engineering
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Multi-language Dropdown */}
            <LanguageSelector />

            {/* Telegram Support Bot */}
            <a
              href={config.telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTelegramClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all hover:border-cyan-400 hover:shadow-sm"
              title="Telegram Support Bot"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{config.telegramBotHandle}</span>
            </a>

            {/* Order project CTA */}
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav_order}</span>
            </button>

            {/* Admin entry */}
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-slate-900 border border-slate-800 transition-colors"
              title={t.nav_admin_title}
              aria-label="Панель администратора"
            >
              <Shield className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu & Language selector */}
          <div className="flex items-center gap-2 sm:hidden">
            <LanguageSelector />
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-lg text-slate-400 hover:text-white"
              aria-label="Панель администратора"
            >
              <Shield className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-850"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a
                href={config.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTelegramClick}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-cyan-300 border border-cyan-500/30 text-sm font-semibold"
              >
                <Send className="w-4 h-4" />
                <span>{config.telegramBotHandle}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav_order}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
