import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, ExternalLink, QrCode as QrIcon } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  description?: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  title,
  url,
  description
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (url && isOpen) {
      QRCode.toDataURL(url, {
        width: 320,
        margin: 2,
        color: {
          dark: '#020617',
          light: '#ffffff'
        }
      })
        .then(data => setQrDataUrl(data))
        .catch(err => console.error('Failed to generate QR code', err));
    }
  }, [url, isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700/80 p-6 shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <QrIcon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-1 font-heading">{title}</h3>
        {description && (
          <p className="text-sm text-slate-400 mb-4">{description}</p>
        )}

        {/* QR Code Container */}
        <div className="p-4 bg-white rounded-xl mx-auto inline-block shadow-inner mb-4">
          {qrDataUrl ? (
            <img src={qrDataUrl} alt={`QR-код для ${title}`} className="w-56 h-56 mx-auto" />
          ) : (
            <div className="w-56 h-56 flex items-center justify-center text-slate-500 text-sm">
              Генерация QR-кода...
            </div>
          )}
        </div>

        <p className="text-xs text-slate-400 mb-4">
          Наведите камеру смартфона, чтобы моментально открыть ссылку
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-sm font-medium transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Скопировано</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Копировать</span>
              </>
            )}
          </button>
          
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-all shadow-lg shadow-cyan-600/25"
          >
            <span>Перейти</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
