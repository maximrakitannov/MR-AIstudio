import React, { useState } from 'react';
import { SiteConfig } from '../types';
import { createOrder, trackEvent } from '../services/storage';
import { Send, CheckCircle2, AlertCircle, Sparkles, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

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
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState<'Telegram' | 'WhatsApp' | 'Phone' | 'Email'>('Telegram');
  const [contactValue, setContactValue] = useState('');
  const [companyOrProject, setCompanyOrProject] = useState('');
  const [projectType, setProjectType] = useState(prefilledType || 'Custom AI Application');
  const [ideaDescription, setIdeaDescription] = useState(prefilledIdea || '');
  const [requiredFeatures, setRequiredFeatures] = useState('');
  const [budget, setBudget] = useState('$1,500 - $3,500 / 150 000 ₽');
  const [comment, setComment] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  React.useEffect(() => {
    if (prefilledType) setProjectType(prefilledType);
    if (prefilledIdea) setIdeaDescription(prefilledIdea);
  }, [prefilledType, prefilledIdea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatusMessage({ type: 'error', text: t.val_err_name });
      return;
    }
    if (!contactValue.trim()) {
      setStatusMessage({ type: 'error', text: t.val_err_contact });
      return;
    }
    if (!ideaDescription.trim()) {
      setStatusMessage({ type: 'error', text: t.val_err_desc });
      return;
    }
    if (!agreeTerms) {
      setStatusMessage({ type: 'error', text: t.val_err_terms });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    const res = createOrder({
      name: name.trim(),
      contactMethod: contactMethod as any,
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
      setStatusMessage({ type: 'success', text: t.form_success });
      setIdeaDescription('');
      setRequiredFeatures('');
      setComment('');
    } else {
      setStatusMessage({ type: 'error', text: res.message });
    }
  };

  return (
    <section id="contacts" className="py-20 bg-[#070b1e] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Quick Contact Info & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-4">
                <Send className="w-3.5 h-3.5" />
                <span>{t.contact_badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-4">
                {t.contact_header}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                {t.contact_subheader}
              </p>
            </div>

            {/* Direct Touchpoints Cards */}
            <div className="space-y-4">
              {/* Telegram Support Bot Card */}
              <a
                href={config.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('telegram_click', 'contact_support_bot', config.telegramBotHandle)}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-900 transition-all group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 font-semibold">{t.contact_bot_title}</div>
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
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900 transition-all group shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 font-semibold">{t.contact_taplink_title}</div>
                    <div className="text-sm font-bold text-white">taplink.cc/maximrakitannov</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Guarantees Box */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.privacy_guarantee_title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.privacy_guarantee_desc}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Order Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{t.form_title}</span>
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
                      {t.label_name} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex / Maxim"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.label_company}
                    </label>
                    <input
                      type="text"
                      value={companyOrProject}
                      onChange={(e) => setCompanyOrProject(e.target.value)}
                      placeholder="e.g. AI SaaS, Fitness Studio, E-commerce"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Method & Handle */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.label_contact_method} <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={contactMethod}
                      onChange={(e) => setContactMethod(e.target.value as any)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Telegram">Telegram</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Phone">Phone</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div className="sm:col-span-7">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.label_contact} <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder={contactMethod === 'Telegram' ? '@username' : 'contact@example.com'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.label_project_type}
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Custom AI Application">Custom AI Application & Tool</option>
                      <option value="Telegram Mini App">Telegram Mini App / Bot</option>
                      <option value="Modern Web Application">Modern Web Application / SaaS</option>
                      <option value="Admin Panel & CRM">Admin Dashboard / CRM</option>
                      <option value="Interactive Calculator">Interactive Calculator / Configurator</option>
                      <option value="E-Commerce & Catalog">E-Commerce & Product Catalog</option>
                      <option value="Web to Android PWA">Web to Android Preparation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.label_budget}
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Up to $800 / До 50 000 ₽">Up to $800 / До 50 000 ₽ (MVP / Calculator)</option>
                      <option value="$800 - $2,500 / 50 000 – 150 000 ₽">$800 - $2,500 / 50 000 – 150 000 ₽ (Website / Mini App)</option>
                      <option value="$2,500 - $5,000 / 150 000 – 300 000 ₽">$2,500 - $5,000 / 150 000 – 300 000 ₽ (AI SaaS / Portal)</option>
                      <option value="$5,000+ / 300 000+ ₽">$5,000+ / 300 000+ ₽ (Enterprise Ecosystem)</option>
                      <option value="Requires Evaluation">Requires Evaluation / Оценка</option>
                    </select>
                  </div>
                </div>

                {/* Idea Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.label_desc} <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    placeholder="What problem does the product solve? Who are the target users?"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Required Features & Comments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.label_features}
                    </label>
                    <input
                      type="text"
                      value={requiredFeatures}
                      onChange={(e) => setRequiredFeatures(e.target.value)}
                      placeholder="e.g. Stripe/Crypto payments, AI Chat, Auth"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.label_comment}
                    </label>
                    <input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Desired deadline, reference links..."
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
                    {t.label_agree_terms}{' '}
                    <button
                      type="button"
                      onClick={() => onShowLegal('privacy-policy')}
                      className="text-cyan-400 hover:underline"
                    >
                      Privacy Policy
                    </button>{' '}
                    {t.and_text}{' '}
                    <button
                      type="button"
                      onClick={() => onShowLegal('terms-of-service')}
                      className="text-cyan-400 hover:underline"
                    >
                      Terms of Service
                    </button>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>{t.btn_submitting}</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{t.btn_submit}</span>
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
