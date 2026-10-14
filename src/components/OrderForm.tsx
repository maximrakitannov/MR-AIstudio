import React, { useState } from 'react';
import { SiteConfig, ServiceItem, Project } from '../types';
import { createOrder, trackEvent } from '../services/storage';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';

interface OrderFormProps {
  config: SiteConfig;
  prefilledType?: string;
  prefilledIdea?: string;
  onShowLegal: (docId: string) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  config,
  prefilledType = '',
  prefilledIdea = '',
  onShowLegal
}) => {
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState<'Telegram' | 'WhatsApp' | 'Телефон' | 'Email'>('Telegram');
  const [contactValue, setContactValue] = useState('');
  const [companyOrProject, setCompanyOrProject] = useState('');
  const [projectType, setProjectType] = useState(prefilledType || 'AI-приложение или веб-сервис');
  const [ideaDescription, setIdeaDescription] = useState(prefilledIdea || '');
  const [requiredFeatures, setRequiredFeatures] = useState('');
  const [budget, setBudget] = useState('50 000 – 150 000 ₽');
  const [comment, setComment] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Sync if prefilled changes from outside (e.g. clicking "Заказать похожий")
  React.useEffect(() => {
    if (prefilledType) setProjectType(prefilledType);
    if (prefilledIdea) setIdeaDescription(prefilledIdea);
  }, [prefilledType, prefilledIdea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatusMessage({ type: 'error', text: 'Пожалуйста, укажите ваше имя' });
      return;
    }
    if (!contactValue.trim()) {
      setStatusMessage({ type: 'error', text: 'Пожалуйста, укажите контакт для связи (Telegram, телефон или почту)' });
      return;
    }
    if (!ideaDescription.trim()) {
      setStatusMessage({ type: 'error', text: 'Пожалуйста, кратко опишите вашу идею или задачу' });
      return;
    }
    if (!agreeTerms) {
      setStatusMessage({ type: 'error', text: 'Для отправки необходимо согласие с условиями обработки данных' });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    // Save order through storage service
    const res = createOrder({
      name: name.trim(),
      contactMethod,
      contactValue: contactValue.trim(),
      companyOrProject: companyOrProject.trim(),
      projectType,
      ideaDescription: ideaDescription.trim(),
      requiredFeatures: requiredFeatures.trim(),
      budget,
      comment: comment.trim()
    });

    setLoading(false);

    if (res.success) {
      setStatusMessage({ type: 'success', text: res.message });
      // Reset sensitive fields
      setIdeaDescription('');
      setRequiredFeatures('');
      setComment('');
    } else {
      setStatusMessage({ type: 'error', text: res.message });
    }
  };

  return (
    <section id="contacts" className="py-20 bg-[#06080d] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Quick Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-4">
                <Send className="w-3.5 h-3.5" />
                <span>СВЯЗАТЬСЯ СО МНОЙ</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
                Обсудим ваш проект
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Расскажите о вашей задаче. Мы разберем концепцию, определим технический стек и в короткие сроки создадим работающий MVP в AI Studio.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Telegram Support Bot Card */}
              <a
                href={config.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('telegram_click', 'contact_support_bot', config.telegramBotHandle)}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-900 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold">Telegram Support Bot</div>
                    <div className="text-sm font-bold text-white">{config.telegramBotHandle}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Taplink Personal Card */}
              <a
                href={config.taplinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('resource_click', 'contact_taplink', 'Taplink Page')}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 font-semibold">Оплата и Тарифы (Taplink)</div>
                    <div className="text-sm font-bold text-white">taplink.cc/maximrakitannov</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Guarantees Box */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Конфиденциальность и открытость</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ваша идея и контактные данные защищены. Информация не передается третьим лицам. После разработки вы получаете 100% права на готовый продукт и исходный код.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Order Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Заявка на разработку цифрового продукта</span>
              </h3>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/40 border border-rose-500/40 text-rose-200'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm">{statusMessage.text}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ваше имя <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Максим"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Компания / Название проекта
                    </label>
                    <input
                      type="text"
                      value={companyOrProject}
                      onChange={(e) => setCompanyOrProject(e.target.value)}
                      placeholder="Например: Магазин автозапчастей или FinTech стартап"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Method & Handle */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Удобный способ связи <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Telegram">Telegram</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Телефон">Телефон</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div className="sm:col-span-7">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Контактный юзернейм / номер / email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder={contactMethod === 'Telegram' ? '@username' : '+7 (999) 000-00-00'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Тип проекта
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="AI-приложение или веб-сервис">AI-приложение или веб-сервис</option>
                      <option value="Telegram Mini App / Бот">Telegram Mini App / Бот</option>
                      <option value="Корпоративный сайт / Лендинг">Корпоративный сайт / Лендинг</option>
                      <option value="Панель управления / Дашборд / CRM">Панель управления / Дашборд / CRM</option>
                      <option value="Интерактивный калькулятор">Интерактивный калькулятор</option>
                      <option value="Каталог товаров с корзиной">Каталог товаров с корзиной</option>
                      <option value="Подготовка веб-проекта к Android">Подготовка веб-проекта к Android</option>
                      <option value="Индивидуальное цифровое решение">Индивидуальное цифровое решение</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ориентировочный бюджет
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="До 50 000 ₽">До 50 000 ₽ (быстрый MVP / калькулятор / бот)</option>
                      <option value="50 000 – 150 000 ₽">50 000 – 150 000 ₽ (полноценный сайт / Mini App)</option>
                      <option value="150 000 – 300 000 ₽">150 000 – 300 000 ₽ (AI-сервис / личный кабинет)</option>
                      <option value="300 000+ ₽">300 000+ ₽ (масштабная цифровая экосистема)</option>
                      <option value="Требуется оценка">Требуется предварительная оценка</option>
                    </select>
                  </div>
                </div>

                {/* Idea Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Описание идеи или задачи <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    placeholder="Какую задачу должен решать продукт? Кто им будет пользоваться?"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Required Features & Comments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Необходимые функции (необязательно)
                    </label>
                    <input
                      type="text"
                      value={requiredFeatures}
                      onChange={(e) => setRequiredFeatures(e.target.value)}
                      placeholder="Например: прием платежей, личный кабинет, AI генерация"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Дополнительный комментарий
                    </label>
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Дедлайн, ссылки на примеры..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-cyan-500 focus:ring-cyan-400 border-slate-700 bg-slate-950"
                  />
                  <label htmlFor="agreeTerms" className="text-xs text-slate-400 leading-relaxed">
                    Я согласен с{' '}
                    <button
                      type="button"
                      onClick={() => onShowLegal('privacy-policy')}
                      className="text-cyan-400 hover:underline"
                    >
                      Политикой конфиденциальности
                    </button>{' '}
                    и{' '}
                    <button
                      type="button"
                      onClick={() => onShowLegal('terms-of-service')}
                      className="text-cyan-400 hover:underline"
                    >
                      Пользовательским соглашением
                    </button>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Отправка данных...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Отправить заявку на разработку</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
