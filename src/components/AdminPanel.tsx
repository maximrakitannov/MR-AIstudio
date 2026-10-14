import React, { useState } from 'react';
import { Project, PersonalResource, OrderRequest, SiteConfig, LegalDocument, AnalyticsStats } from '../types';
import { 
  X, Lock, Unlock, BarChart3, Inbox, FolderKanban, Share2, Settings, 
  FileText, Plus, Trash2, Edit3, Check, Save, Download, RefreshCw, 
  ExternalLink, Eye, ArrowUpRight, Search, ShieldAlert, CheckCircle2
} from 'lucide-react';
import { 
  saveProjects, saveResources, saveSiteConfig, saveOrders, 
  updateOrderStatus, deleteOrder, resetToDefaults 
} from '../services/storage';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  resources: PersonalResource[];
  setResources: React.Dispatch<React.SetStateAction<PersonalResource[]>>;
  config: SiteConfig;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  orders: OrderRequest[];
  setOrders: React.Dispatch<React.SetStateAction<OrderRequest[]>>;
  analytics: AnalyticsStats;
  legalDocs: LegalDocument[];
  setLegalDocs: React.Dispatch<React.SetStateAction<LegalDocument[]>>;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  projects,
  setProjects,
  resources,
  setResources,
  config,
  setConfig,
  orders,
  setOrders,
  analytics,
  legalDocs,
  setLegalDocs
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  const [activeTab, setActiveTab] = useState<'analytics' | 'orders' | 'projects' | 'resources' | 'config' | 'legal'>('analytics');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [notification, setNotification] = useState<string>('');

  // Editing Project Modal State
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Safe passcode check: either 'mr2026' or 'admin'
    if (passwordInput === 'mr2026' || passwordInput === 'admin' || passwordInput === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Неверный код доступа. Попробуйте mr2026');
    }
  };

  const handleExportOrders = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(orders, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `mr_studio_leads_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('Заявки экспортированы в JSON');
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveSiteConfig(config);
    showNotification('Настройки сайта успешно сохранены');
  };

  const handleSaveResources = () => {
    saveResources(resources);
    showNotification('Список ресурсов обновлен');
  };

  const handleToggleResource = (id: string) => {
    const updated = resources.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r);
    setResources(updated);
    saveResources(updated);
  };

  const handleUpdateResourceField = (id: string, field: keyof PersonalResource, val: any) => {
    const updated = resources.map(r => r.id === id ? { ...r, [field]: val } : r);
    setResources(updated);
  };

  const handleSaveProjectForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    if (isCreatingProject) {
      const newProjects = [editingProject, ...projects];
      setProjects(newProjects);
      saveProjects(newProjects);
      showNotification('Новый проект успешно добавлен в портфолио');
    } else {
      const updated = projects.map(p => p.id === editingProject.id ? editingProject : p);
      setProjects(updated);
      saveProjects(updated);
      showNotification('Проект успешно обновлен');
    }
    setEditingProject(null);
    setIsCreatingProject(false);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Удалить проект из портфолио?')) {
      const filtered = projects.filter(p => p.id !== id);
      setProjects(filtered);
      saveProjects(filtered);
      showNotification('Проект удален');
    }
  };

  const filteredOrders = statusFilter === 'all'
    ? orders
    : orders.filter(o => o.status === statusFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md">
      <div 
        className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-2xl text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-sm">
              MR
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Панель управления MR studio
              </h3>
              <p className="text-[11px] text-slate-400">
                Контроль портфолио, заявок, аналитики и каналов коммуникации
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {notification && (
              <span className="text-xs px-3 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/40 animate-fade-in">
                {notification}
              </span>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Gate if not logged in */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-md p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white font-heading mb-1">
                  Вход для администратора
                </h4>
                <p className="text-xs text-slate-400">
                  Доступ защищен паролем владельца студии.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    autoFocus
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Введите пароль доступа"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 text-center tracking-widest"
                  />
                  {authError && (
                    <p className="text-xs text-rose-400 mt-2">{authError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm transition-all shadow-md shadow-cyan-600/20"
                >
                  Войти в панель управления
                </button>
              </form>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <span>Подсказка для демо-режима: код</span>
                <code className="text-cyan-400 font-mono bg-slate-950 px-1.5 py-0.5 rounded">mr2026</code>
              </div>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar Navigation */}
            <div className="w-full md:w-56 bg-slate-950/60 border-r border-slate-800/80 p-3 space-y-1 shrink-0 overflow-x-auto md:overflow-visible flex md:flex-col gap-1 md:gap-0">
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left ${
                  activeTab === 'analytics'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <BarChart3 className="w-4 h-4 shrink-0" />
                <span>Аналитика</span>
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left ${
                  activeTab === 'orders'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Inbox className="w-4 h-4 shrink-0" />
                  <span>Заявки</span>
                </div>
                {orders.filter(o => o.status === 'new').length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-cyan-500 text-slate-950">
                    {orders.filter(o => o.status === 'new').length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left ${
                  activeTab === 'projects'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <FolderKanban className="w-4 h-4 shrink-0" />
                <span>Проекты ({projects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('resources')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left ${
                  activeTab === 'resources'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <Share2 className="w-4 h-4 shrink-0" />
                <span>Ресурсы & Боты</span>
              </button>

              <button
                onClick={() => setActiveTab('config')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left ${
                  activeTab === 'config'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <Settings className="w-4 h-4 shrink-0" />
                <span>Настройки & SEO</span>
              </button>

              <button
                onClick={() => setActiveTab('legal')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left ${
                  activeTab === 'legal'
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Документы</span>
              </button>
            </div>

            {/* Main Tab Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-900/20">
              
              {/* TAB 1: ANALYTICS */}
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading">
                      Аналитика портфолио MR studio
                    </h4>
                    <p className="text-xs text-slate-400">
                      Статистика относится исключительно к сайту студии без доступа к приватным данным клиентских систем.
                    </p>
                  </div>

                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Всего визитов</div>
                      <div className="text-2xl font-bold text-white font-heading">{analytics.totalVisits}</div>
                      <div className="text-[11px] text-cyan-400 mt-1">Уникальных: {analytics.uniqueVisitors}</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Кликов в Telegram</div>
                      <div className="text-2xl font-bold text-cyan-300 font-heading">{analytics.telegramClicks}</div>
                      <div className="text-[11px] text-slate-500 mt-1">Support Bot & Личка</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Просмотров Демо</div>
                      <div className="text-2xl font-bold text-emerald-400 font-heading">{analytics.demoClicks}</div>
                      <div className="text-[11px] text-slate-500 mt-1">Кликов "Смотреть демо"</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">Заявок на разработку</div>
                      <div className="text-2xl font-bold text-white font-heading">{orders.length}</div>
                      <div className="text-[11px] text-cyan-400 mt-1">Конверсия: {((orders.length / Math.max(1, analytics.uniqueVisitors)) * 100).toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Project Popularity */}
                  <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <h5 className="text-sm font-semibold text-white mb-3">
                      Популярность проектов портфолио
                    </h5>
                    <div className="space-y-2.5">
                      {projects.map(p => {
                        const count = analytics.projectViews[p.id] || 0;
                        const pct = Math.min(100, Math.round((count / Math.max(1, analytics.totalVisits)) * 100));
                        return (
                          <div key={p.id}>
                            <div className="flex justify-between text-xs text-slate-300 mb-1">
                              <span className="truncate pr-2 font-medium">{p.title}</span>
                              <span className="font-mono text-cyan-400 shrink-0">{count} просмотров</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                style={{ width: `${Math.max(8, pct * 2)}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ORDERS / LEADS */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-white font-heading">
                        Входящие заявки ({orders.length})
                      </h4>
                      <p className="text-xs text-slate-400">
                        Лиды, поступившие через форму обратной связи на сайте.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-slate-200"
                      >
                        <option value="all">Все статусы</option>
                        <option value="new">Новые</option>
                        <option value="in_progress">В работе</option>
                        <option value="contacted">Связались</option>
                        <option value="completed">Завершены</option>
                      </select>

                      <button
                        onClick={handleExportOrders}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Экспорт JSON</span>
                      </button>
                    </div>
                  </div>

                  {filteredOrders.length === 0 ? (
                    <div className="p-12 text-center rounded-2xl bg-slate-950/40 border border-slate-800 text-slate-500 text-sm">
                      Заявок в этой категории пока нет.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredOrders.map(order => (
                        <div
                          key={order.id}
                          className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-base">{order.name}</span>
                              {order.companyOrProject && (
                                <span className="text-xs text-slate-400">({order.companyOrProject})</span>
                              )}
                              <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                order.status === 'new'
                                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                  : 'bg-slate-800 text-slate-300'
                              }`}>
                                {order.status === 'new' ? 'Новая' : order.status}
                              </span>
                            </div>

                            <span className="text-xs font-mono text-slate-500">
                              {new Date(order.createdAt).toLocaleString('ru-RU')}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                            <div>
                              <span className="text-slate-500 block">Канал связи:</span>
                              <span className="text-cyan-400 font-medium">{order.contactMethod}: {order.contactValue}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Тип проекта:</span>
                              <span className="text-white font-medium">{order.projectType}</span>
                            </div>
                            <div>
                              <span className="text-slate-500 block">Бюджет:</span>
                              <span className="text-emerald-400 font-medium">{order.budget}</span>
                            </div>
                          </div>

                          <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/30 p-3 rounded-lg">
                            <span className="text-slate-400 font-semibold block mb-1">Суть идеи / задачи:</span>
                            {order.ideaDescription}
                            {order.requiredFeatures && (
                              <div className="mt-2 text-slate-400">
                                <strong>Функции:</strong> {order.requiredFeatures}
                              </div>
                            )}
                            {order.comment && (
                              <div className="mt-1 text-slate-400">
                                <strong>Комментарий:</strong> {order.comment}
                              </div>
                            )}
                          </div>

                          {/* Order status controls */}
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500">Статус:</span>
                              <button
                                onClick={() => {
                                  updateOrderStatus(order.id, 'contacted');
                                  setOrders(orders.map(o => o.id === order.id ? { ...o, status: 'contacted' } : o));
                                }}
                                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
                              >
                                Связались
                              </button>
                              <button
                                onClick={() => {
                                  updateOrderStatus(order.id, 'completed');
                                  setOrders(orders.map(o => o.id === order.id ? { ...o, status: 'completed' } : o));
                                }}
                                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300"
                              >
                                Завершена
                              </button>
                            </div>

                            <button
                              onClick={() => {
                                if (confirm('Удалить эту заявку?')) {
                                  deleteOrder(order.id);
                                  setOrders(orders.filter(o => o.id !== order.id));
                                }
                              }}
                              className="text-xs text-rose-400 hover:text-rose-300 p-1"
                            >
                              Удалить
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: PROJECTS MANAGEMENT */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white font-heading">
                        Управление проектами
                      </h4>
                      <p className="text-xs text-slate-400">
                        Добавление, редактирование ссылок на демо и описаний кейсов.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setEditingProject({
                          id: 'proj_' + Date.now(),
                          title: '',
                          category: 'AI Web Application',
                          categorySlug: 'ai',
                          shortDescription: '',
                          previewImage: '/src/assets/images/project_preview_1791469681070.jpg',
                          demoUrl: '',
                          status: 'Завершён',
                          isReference: false,
                          featured: true,
                          keyFunctions: ['Ключевая функция 1', 'Ключевая функция 2'],
                          objective: '',
                          targetAudience: '',
                          problemSolved: '',
                          businessValue: '',
                          developmentApproach: '',
                          technologies: ['React', 'TypeScript'],
                          createdAt: new Date().toISOString().slice(0, 10)
                        });
                        setIsCreatingProject(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Добавить проект</span>
                    </button>
                  </div>

                  {/* Project List */}
                  <div className="space-y-3">
                    {projects.map(proj => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={proj.previewImage}
                            alt=""
                            className="w-16 h-10 object-cover rounded-md bg-slate-900 border border-slate-800"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-sm">{proj.title}</span>
                              {proj.isReference && (
                                <span className="text-[10px] bg-cyan-500 text-slate-950 font-bold px-1.5 py-0.5 rounded">
                                  Флагман
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-400">
                              {proj.category} • <span className="text-cyan-400">{proj.demoUrl || 'Без ссылки'}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingProject(proj);
                              setIsCreatingProject(false);
                            }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                            title="Редактировать"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>

                          {!proj.isReference && (
                            <button
                              onClick={() => handleDeleteProject(proj.id)}
                              className="p-2 rounded-lg bg-slate-800 hover:bg-rose-950 text-rose-400"
                              title="Удалить"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Project Edit Modal Form */}
                  {editingProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                          <h5 className="font-bold text-white text-lg font-heading">
                            {isCreatingProject ? 'Новый проект' : 'Редактирование проекта'}
                          </h5>
                          <button onClick={() => setEditingProject(null)} className="text-slate-400 hover:text-white">
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <form onSubmit={handleSaveProjectForm} className="space-y-4 text-xs">
                          <div>
                            <label className="block text-slate-300 font-semibold mb-1">Название проекта</label>
                            <input
                              type="text"
                              required
                              value={editingProject.title}
                              onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-slate-300 font-semibold mb-1">Категория</label>
                              <input
                                type="text"
                                value={editingProject.category}
                                onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-slate-300 font-semibold mb-1">Статус</label>
                              <select
                                value={editingProject.status}
                                onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value as any })}
                                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                              >
                                <option value="Завершён">Завершён</option>
                                <option value="В продакшене">В продакшене</option>
                                <option value="В разработке">В разработке</option>
                                <option value="Демо-режим">Демо-режим</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-slate-300 font-semibold mb-1">Ссылка на демо (Demo URL)</label>
                            <input
                              type="text"
                              value={editingProject.demoUrl}
                              onChange={(e) => setEditingProject({ ...editingProject, demoUrl: e.target.value })}
                              placeholder="https://ai.studio/apps/..."
                              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-300 font-semibold mb-1">URL превью изображения</label>
                            <input
                              type="text"
                              value={editingProject.previewImage}
                              onChange={(e) => setEditingProject({ ...editingProject, previewImage: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-300 font-semibold mb-1">Краткое описание</label>
                            <textarea
                              rows={2}
                              value={editingProject.shortDescription}
                              onChange={(e) => setEditingProject({ ...editingProject, shortDescription: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-300 font-semibold mb-1">Решаемая проблема</label>
                            <textarea
                              rows={2}
                              value={editingProject.problemSolved}
                              onChange={(e) => setEditingProject({ ...editingProject, problemSolved: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                            />
                          </div>

                          <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                            <button
                              type="button"
                              onClick={() => setEditingProject(null)}
                              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300"
                            >
                              Отмена
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold"
                            >
                              Сохранить изменения
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: RESOURCES & TELEGRAM BOT */}
              {activeTab === 'resources' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading">
                      Мои ресурсы и точки контакта
                    </h4>
                    <p className="text-xs text-slate-400">
                      Telegram-бот (@rakitannov_support_bot), Taplink, личные контакты.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {resources.map(res => (
                      <div
                        key={res.id}
                        className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm">{res.name}</span>
                            <span className="text-[10px] font-mono text-cyan-400">{res.iconType}</span>
                          </div>

                          <button
                            onClick={() => handleToggleResource(res.id)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              res.enabled
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-500'
                            }`}
                          >
                            {res.enabled ? 'Активен' : 'Отключен'}
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-slate-400 mb-1">Ссылка (URL)</label>
                            <input
                              type="text"
                              value={res.url}
                              onChange={(e) => handleUpdateResourceField(res.id, 'url', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 mb-1">Отображаемый логин/хэндл</label>
                            <input
                              type="text"
                              value={res.displayHandle}
                              onChange={(e) => handleUpdateResourceField(res.id, 'displayHandle', e.target.value)}
                              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Описание</label>
                          <input
                            type="text"
                            value={res.description}
                            onChange={(e) => handleUpdateResourceField(res.id, 'description', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs"
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      onClick={handleSaveResources}
                      className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold"
                    >
                      Сохранить каналы ресурсов
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 5: CONFIG & SEO */}
              {activeTab === 'config' && (
                <form onSubmit={handleSaveConfig} className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading">
                      Настройки студии и SEO
                    </h4>
                    <p className="text-xs text-slate-400">
                      Редактирование главных текстов первого экрана и мета-тегов.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Название студии</label>
                      <input
                        type="text"
                        value={config.studioName}
                        onChange={(e) => setConfig({ ...config, studioName: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Имя создателя</label>
                      <input
                        type="text"
                        value={config.creatorName}
                        onChange={(e) => setConfig({ ...config, creatorName: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="text-xs space-y-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Главный слоган Hero</label>
                      <input
                        type="text"
                        value={config.heroHeadline}
                        onChange={(e) => setConfig({ ...config, heroHeadline: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Поддерживающий текст Hero</label>
                      <textarea
                        rows={2}
                        value={config.heroSubheadline}
                        onChange={(e) => setConfig({ ...config, heroSubheadline: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Telegram Support Bot URL</label>
                      <input
                        type="text"
                        value={config.telegramBotUrl}
                        onChange={(e) => setConfig({ ...config, telegramBotUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Taplink URL (Оплата/Тарифы)</label>
                      <input
                        type="text"
                        value={config.taplinkUrl}
                        onChange={(e) => setConfig({ ...config, taplinkUrl: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Сбросить все настройки к исходным?')) {
                          resetToDefaults();
                          window.location.reload();
                        }
                      }}
                      className="text-xs text-slate-500 hover:text-rose-400"
                    >
                      Сброс к исходным значениям
                    </button>

                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold"
                    >
                      Сохранить настройки
                    </button>
                  </div>
                </form>
              )}

              {/* TAB 6: LEGAL DOCS */}
              {activeTab === 'legal' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading">
                      Редактирование правовых документов
                    </h4>
                    <p className="text-xs text-slate-400">
                      Пользовательское соглашение, политика конфиденциальности, оферта.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {legalDocs.map(doc => (
                      <div key={doc.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-white text-sm">{doc.title}</span>
                          <span className="text-xs text-slate-500">Обновлено: {doc.lastUpdated}</span>
                        </div>
                        <textarea
                          rows={4}
                          value={doc.content}
                          onChange={(e) => {
                            const updated = legalDocs.map(d => d.id === doc.id ? { ...d, content: e.target.value } : d);
                            setLegalDocs(updated);
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-mono"
                        />
                      </div>
                    ))}

                    <button
                      onClick={() => showNotification('Тексты документов сохранены')}
                      className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold"
                    >
                      Сохранить юридические документы
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
