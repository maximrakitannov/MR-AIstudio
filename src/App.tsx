/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project, PersonalResource, OrderRequest, SiteConfig, LegalDocument, ServiceItem } from './types';
import { 
  getProjects, getResources, getSiteConfig, getOrders, 
  getAnalytics, getLegalDocuments, trackEvent 
} from './services/storage';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Services } from './components/Services';
import { WorkflowSection } from './components/WorkflowSection';
import { ResourcesSection } from './components/ResourcesSection';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { QRCodeModal } from './components/QRCodeModal';
import { LegalModal } from './components/LegalModal';
import { AdminPanel } from './components/AdminPanel';
import { initialServices } from './data/initialData';
import { Send, Sparkles } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(getSiteConfig);
  const [projects, setProjects] = useState<Project[]>(getProjects);
  const [resources, setResources] = useState<PersonalResource[]>(getResources);
  const [orders, setOrders] = useState<OrderRequest[]>(getOrders);
  const [analytics, setAnalytics] = useState(getAnalytics);
  const [legalDocs, setLegalDocs] = useState<LegalDocument[]>(getLegalDocuments);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [qrModal, setQrModal] = useState<{ isOpen: boolean; url: string; title: string; desc?: string }>({
    isOpen: false,
    url: '',
    title: '',
    desc: ''
  });
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; docId: string }>({
    isOpen: false,
    docId: 'terms-of-service'
  });
  const [adminOpen, setAdminOpen] = useState(false);

  // Order prefill state
  const [prefilledType, setPrefilledType] = useState<string>('');
  const [prefilledIdea, setPrefilledIdea] = useState<string>('');

  // Track page visit on mount
  useEffect(() => {
    trackEvent('visit');
    setAnalytics(getAnalytics());
  }, []);

  const handleOrderSimilar = (project: Project) => {
    setPrefilledType(project.category);
    setPrefilledIdea(`Хочу заказать проект, похожий на «${project.title}». Необходимы функции: ${project.keyFunctions.slice(0, 2).join(', ')}.`);
    const el = document.getElementById('contacts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setPrefilledType(service.title);
    setPrefilledIdea(`Интересует услуга «${service.title}». Требуется реализация под наши задачи.`);
    const el = document.getElementById('contacts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContacts = () => {
    const el = document.getElementById('contacts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Header */}
      <Header
        config={config}
        onOpenAdmin={() => {
          setAnalytics(getAnalytics());
          setOrders(getOrders());
          setAdminOpen(true);
        }}
        onOpenOrder={scrollToContacts}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          config={config}
          onExploreProjects={scrollToProjects}
          onOpenOrder={scrollToContacts}
          onOpenQrModal={(url, title) => setQrModal({ isOpen: true, url, title })}
        />

        {/* Projects Showcase */}
        <Projects
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOrderSimilar={handleOrderSimilar}
        />

        {/* Services & Capabilities */}
        <Services
          services={initialServices}
          onSelectService={handleSelectService}
        />

        {/* Workflow & Project Delivery */}
        <WorkflowSection
          onDiscussIdea={scrollToContacts}
        />

        {/* Personal Resources & Touchpoints */}
        <ResourcesSection
          resources={resources}
          onShowQr={(url, title, desc) => setQrModal({ isOpen: true, url, title, desc })}
        />

        {/* Order / Contact Form */}
        <OrderForm
          config={config}
          prefilledType={prefilledType}
          prefilledIdea={prefilledIdea}
          onShowLegal={(docId) => setLegalModal({ isOpen: true, docId })}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenLegal={(docId) => setLegalModal({ isOpen: true, docId })}
        onOpenAdmin={() => {
          setAnalytics(getAnalytics());
          setOrders(getOrders());
          setAdminOpen(true);
        }}
      />

      {/* Floating Fast Telegram Action Button */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
        <a
          href={config.telegramBotUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('telegram_click', 'floating_bubble', config.telegramBotHandle)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/30 transition-all transform hover:scale-105"
          title="Написать в Telegram Support Bot"
        >
          <Send className="w-4 h-4 text-white animate-pulse" />
          <span className="hidden sm:inline">Бот поддержки</span>
        </a>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onOrderSimilar={handleOrderSimilar}
      />

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={qrModal.isOpen}
        onClose={() => setQrModal({ ...qrModal, isOpen: false })}
        title={qrModal.title}
        url={qrModal.url}
        description={qrModal.desc}
      />

      {/* Legal Documents Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })}
        documents={legalDocs}
        initialDocId={legalModal.docId}
      />

      {/* Administrator Control Dashboard */}
      <AdminPanel
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        projects={projects}
        setProjects={setProjects}
        resources={resources}
        setResources={setResources}
        config={config}
        setConfig={setConfig}
        orders={orders}
        setOrders={setOrders}
        analytics={analytics}
        legalDocs={legalDocs}
        setLegalDocs={setLegalDocs}
      />

    </div>
  );
}
