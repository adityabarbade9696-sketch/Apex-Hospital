import React from 'react';
import { X, Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { NewsEvent } from '../data/newsEvents';

interface NewsDetailModalProps {
  news: NewsEvent | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            {news.type} Notice
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1 font-semibold text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-cyan-600" />
              <span>{news.date}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{news.readTime}</span>
            </div>
            {news.location && (
              <>
                <span>·</span>
                <div className="flex items-center gap-1 text-cyan-800">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{news.location}</span>
                </div>
              </>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
            {news.title}
          </h2>

          <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100 text-xs sm:text-sm text-cyan-950 font-medium leading-relaxed">
            {news.summary}
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            <p>{news.content}</p>
            <p>
              Apex Memorial Teaching Hospital continues to reinforce its commitment to public healthcare and medical pedagogy through regular awareness drives and technological modernization.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
