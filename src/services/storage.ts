import { Project, PersonalResource, OrderRequest, AnalyticsStats, SiteConfig, LegalDocument, AnalyticsEvent } from '../types';
import { initialProjects, initialPersonalResources, initialSiteConfig, initialLegalDocuments } from '../data/initialData';

const STORAGE_KEYS = {
  PROJECTS: 'mr_studio_projects_v1',
  RESOURCES: 'mr_studio_resources_v1',
  CONFIG: 'mr_studio_config_v1',
  ORDERS: 'mr_studio_orders_v1',
  ANALYTICS: 'mr_studio_analytics_v1',
  LEGAL: 'mr_studio_legal_v1',
  VISITOR_ID: 'mr_studio_visitor_id_v1',
  ADMIN_AUTH: 'mr_studio_admin_session_v1',
  LAST_ORDER_HASH: 'mr_studio_last_order_hash'
};

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn(`Failed to read from localStorage for key ${key}:`, e);
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Failed to write to localStorage for key ${key}:`, e);
  }
}

// ------------------- PROJECTS -------------------
export function getProjects(): Project[] {
  return safeGet<Project[]>(STORAGE_KEYS.PROJECTS, initialProjects);
}

export function saveProjects(projects: Project[]): void {
  safeSet(STORAGE_KEYS.PROJECTS, projects);
}

export function saveProject(project: Project): void {
  const all = getProjects();
  const index = all.findIndex(p => p.id === project.id);
  if (index >= 0) {
    all[index] = project;
  } else {
    all.unshift(project);
  }
  saveProjects(all);
}

export function deleteProject(id: string): void {
  const all = getProjects().filter(p => p.id !== id);
  saveProjects(all);
}

// ------------------- RESOURCES -------------------
export function getResources(): PersonalResource[] {
  return safeGet<PersonalResource[]>(STORAGE_KEYS.RESOURCES, initialPersonalResources);
}

export function saveResources(resources: PersonalResource[]): void {
  safeSet(STORAGE_KEYS.RESOURCES, resources);
}

// ------------------- SITE CONFIG -------------------
export function getSiteConfig(): SiteConfig {
  const cfg = safeGet<SiteConfig>(STORAGE_KEYS.CONFIG, initialSiteConfig);
  // Auto-migrate if previous image was the older photo
  if (cfg.heroImageUrl.includes('mr_hero_vr_1791469670367')) {
    cfg.heroImageUrl = '/src/assets/images/mr_creator_vr_hero_1792226205130.jpg';
    safeSet(STORAGE_KEYS.CONFIG, cfg);
  }
  return cfg;
}

export function saveSiteConfig(config: SiteConfig): void {
  safeSet(STORAGE_KEYS.CONFIG, config);
}

// ------------------- LANGUAGE STORAGE -------------------
export const STORAGE_LANG_KEY = 'rakitannov_lang';

export function getStoredLanguage(): string {
  try {
    return localStorage.getItem(STORAGE_LANG_KEY) || 'ru';
  } catch {
    return 'ru';
  }
}

export function setStoredLanguage(lang: string): void {
  try {
    localStorage.setItem(STORAGE_LANG_KEY, lang);
  } catch (e) {
    console.warn('Failed to save language', e);
  }
}


// ------------------- LEGAL DOCS -------------------
export function getLegalDocuments(): LegalDocument[] {
  return safeGet<LegalDocument[]>(STORAGE_KEYS.LEGAL, initialLegalDocuments);
}

export function saveLegalDocuments(docs: LegalDocument[]): void {
  safeSet(STORAGE_KEYS.LEGAL, docs);
}

// ------------------- ORDERS / LEADS -------------------
export function getOrders(): OrderRequest[] {
  return safeGet<OrderRequest[]>(STORAGE_KEYS.ORDERS, []);
}

export function saveOrders(orders: OrderRequest[]): void {
  safeSet(STORAGE_KEYS.ORDERS, orders);
}

export function createOrder(order: Omit<OrderRequest, 'id' | 'createdAt' | 'status'>): { success: boolean; message: string } {
  // Check duplicate submission
  const orderHash = `${order.name}_${order.contactValue}_${order.projectType}`.toLowerCase().trim();
  const lastHash = safeGet<string>(STORAGE_KEYS.LAST_ORDER_HASH, '');
  
  if (lastHash === orderHash) {
    return {
      success: false,
      message: 'Похожая заявка уже была отправлена несколько секунд назад. Мы уже получили ваш запрос!'
    };
  }

  const newOrder: OrderRequest = {
    ...order,
    id: 'ord_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    status: 'new',
    createdAt: new Date().toISOString()
  };

  const current = getOrders();
  current.unshift(newOrder);
  saveOrders(current);
  safeSet(STORAGE_KEYS.LAST_ORDER_HASH, orderHash);

  // Track analytics
  trackEvent('order_submit', newOrder.id, newOrder.projectType);

  return {
    success: true,
    message: 'Заявка успешно отправлена! Я свяжусь с вами в ближайшее время.'
  };
}

export function updateOrderStatus(orderId: string, status: OrderRequest['status'], notes?: string): void {
  const current = getOrders();
  const target = current.find(o => o.id === orderId);
  if (target) {
    target.status = status;
    if (notes !== undefined) {
      target.notes = notes;
    }
    saveOrders(current);
  }
}

export function deleteOrder(orderId: string): void {
  const filtered = getOrders().filter(o => o.id !== orderId);
  saveOrders(filtered);
}

// ------------------- ANALYTICS -------------------
const initialAnalytics: AnalyticsStats = {
  totalVisits: 142,
  uniqueVisitors: 87,
  projectViews: {
    'nexus-ai-orchestration': 64,
    'telegram-store-app': 42,
    'b2b-calc-estimator': 28,
    'admin-portal-crm': 31
  },
  ctaClicks: 53,
  telegramClicks: 39,
  resourceClicks: {
    'telegram-support-bot': 31,
    'taplink-page': 24,
    'telegram-direct': 18
  },
  demoClicks: 47,
  orderSubmissions: 6,
  eventsLog: []
};

export function getAnalytics(): AnalyticsStats {
  return safeGet<AnalyticsStats>(STORAGE_KEYS.ANALYTICS, initialAnalytics);
}

export function saveAnalytics(stats: AnalyticsStats): void {
  safeSet(STORAGE_KEYS.ANALYTICS, stats);
}

export function trackEvent(
  eventType: AnalyticsEvent['eventType'],
  targetId?: string,
  targetName?: string
): void {
  const stats = getAnalytics();
  const event: AnalyticsEvent = {
    id: 'evt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    eventType,
    targetId,
    targetName,
    timestamp: new Date().toISOString()
  };

  if (eventType === 'visit') {
    stats.totalVisits += 1;
    // Check if new visitor
    const visitorKey = safeGet<string | null>(STORAGE_KEYS.VISITOR_ID, null);
    if (!visitorKey) {
      stats.uniqueVisitors += 1;
      safeSet(STORAGE_KEYS.VISITOR_ID, 'vis_' + Date.now());
    }
  } else if (eventType === 'project_view' && targetId) {
    stats.projectViews[targetId] = (stats.projectViews[targetId] || 0) + 1;
  } else if (eventType === 'cta_click') {
    stats.ctaClicks += 1;
  } else if (eventType === 'telegram_click') {
    stats.telegramClicks += 1;
  } else if (eventType === 'resource_click' && targetId) {
    stats.resourceClicks[targetId] = (stats.resourceClicks[targetId] || 0) + 1;
  } else if (eventType === 'demo_click') {
    stats.demoClicks += 1;
  } else if (eventType === 'order_submit') {
    stats.orderSubmissions += 1;
  }

  // Keep last 150 events in log
  stats.eventsLog = [event, ...(stats.eventsLog || [])].slice(0, 150);
  saveAnalytics(stats);
}

// ------------------- ADMIN AUTH -------------------
export function isAdminAuthenticated(): boolean {
  return safeGet<boolean>(STORAGE_KEYS.ADMIN_AUTH, false);
}

export function setAdminAuthenticated(val: boolean): void {
  safeSet(STORAGE_KEYS.ADMIN_AUTH, val);
}

// Reset storage to original presets
export function resetToDefaults(): void {
  localStorage.removeItem(STORAGE_KEYS.PROJECTS);
  localStorage.removeItem(STORAGE_KEYS.RESOURCES);
  localStorage.removeItem(STORAGE_KEYS.CONFIG);
  localStorage.removeItem(STORAGE_KEYS.LEGAL);
}
