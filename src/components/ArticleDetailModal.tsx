import React from 'react';
import { X, Clock, Calendar, User, CheckCircle2, Bookmark, Share2 } from 'lucide-react';
import { HealthArticle } from '../data/healthArticles';

interface ArticleDetailModalProps {
  article: HealthArticle | null;
  onClose: () => void;
  onOpenAppointment: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenAppointment
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300">
            <span>Patient Health Education Library</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                {article.category}
              </span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.date}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
              <div className="w-10 h-10 rounded-full bg-cyan-700 text-white flex items-center justify-center font-bold text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{article.author}</div>
                <div className="text-[11px] text-slate-500">{article.authorTitle}</div>
              </div>
            </div>
          </div>

          {/* Key Clinical Takeaways Callout */}
          <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-900">
              Key Medical Takeaways
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-teal-950">
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Medical Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-100 text-slate-500 text-[11px] leading-relaxed border border-slate-200">
            <strong>Medical Disclaimer:</strong> This article is published solely for educational and preventive awareness and must not substitute professional medical diagnosis or clinical consultation. If experiencing acute or life-threatening symptoms, please call our 24/7 Emergency Line 1066 immediately.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAppointment();
            }}
            className="px-5 py-2 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg cursor-pointer"
          >
            Consult a Specialist
          </button>
        </div>
      </div>
    </div>
  );
};
