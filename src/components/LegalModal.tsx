import React, { useState } from 'react';
import { LegalDocument } from '../types';
import { X, FileText, Shield } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  documents: LegalDocument[];
  initialDocId?: string;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  documents,
  initialDocId
}) => {
  const [activeId, setActiveId] = useState<string>(initialDocId || documents[0]?.id || '');

  if (!isOpen) return null;

  const currentDoc = documents.find(d => d.id === activeId) || documents[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0b0f19] border border-slate-800 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white font-heading">
              Правовая информация
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-3 overflow-x-auto border-b border-slate-800/80 bg-slate-950/40">
          {documents.map(doc => (
            <button
              key={doc.id}
              onClick={() => setActiveId(doc.id)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                activeId === doc.id
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{doc.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
            <h4 className="text-xl font-bold text-white font-heading">
              {currentDoc?.title}
            </h4>
            <span className="text-xs text-slate-500">
              Обновлено: {currentDoc?.lastUpdated}
            </span>
          </div>

          <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line font-normal">
            {currentDoc?.content}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950/40 text-xs text-slate-500 flex justify-between items-center">
          <span>MR studio &copy; Все права защищены</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
