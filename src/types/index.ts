export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: 'all' | 'ai' | 'web' | 'telegram' | 'automation';
  shortDescription: string;
  previewImage: string;
  demoUrl: string;
  status: 'Завершён' | 'В разработке' | 'В продакшене' | 'Демо-режим';
  isReference: boolean;
  featured: boolean;
  keyFunctions: string[];
  
  // Detailed presentation fields
  objective: string;
  targetAudience: string;
  problemSolved: string;
  businessValue: string;
  developmentApproach: string;
  technologies: string[];
  createdAt: string;
}

export interface PersonalResource {
  id: string;
  name: string;
  description: string;
  iconType: 'telegram' | 'bot' | 'taplink' | 'whatsapp' | 'youtube' | 'link';
  url: string;
  displayHandle: string;
  badge?: string;
  enabled: boolean;
  order: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'automation' | 'telegram';
  description: string;
  timeline: string;
  tags: string[];
  features: string[];
  icon: string;
}

export interface OrderRequest {
  id: string;
  name: string;
  contactMethod: 'Telegram' | 'WhatsApp' | 'Телефон' | 'Email';
  contactValue: string;
  companyOrProject?: string;
  projectType: string;
  ideaDescription: string;
  requiredFeatures?: string;
  budget?: string;
  comment?: string;
  status: 'new' | 'in_progress' | 'contacted' | 'completed' | 'archived';
  notes?: string;
  createdAt: string;
}

export interface AnalyticsEvent {
  id: string;
  eventType: 'visit' | 'page_view' | 'project_view' | 'cta_click' | 'telegram_click' | 'resource_click' | 'demo_click' | 'order_submit';
  targetId?: string;
  targetName?: string;
  timestamp: string;
}

export interface AnalyticsStats {
  totalVisits: number;
  uniqueVisitors: number;
  projectViews: Record<string, number>;
  ctaClicks: number;
  telegramClicks: number;
  resourceClicks: Record<string, number>;
  demoClicks: number;
  orderSubmissions: number;
  eventsLog: AnalyticsEvent[];
}

export interface SiteConfig {
  studioName: string;
  creatorName: string;
  roleTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  telegramBotHandle: string;
  telegramBotUrl: string;
  telegramPersonalHandle: string;
  telegramPersonalUrl: string;
  taplinkUrl: string;
  whatsappUrl: string;
  youtubeUrl: string;
  contactEmail: string;
  heroImageUrl: string;
  seoTitle: string;
  seoDescription: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  lastUpdated: string;
  content: string;
}
