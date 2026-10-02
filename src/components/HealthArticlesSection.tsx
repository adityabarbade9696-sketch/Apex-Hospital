import React from 'react';
import { BookOpen, User, Clock, ArrowRight, HeartPulse, ShieldCheck } from 'lucide-react';
import { HEALTH_ARTICLES, HealthArticle } from '../data/healthArticles';

interface HealthArticlesSectionProps {
  onSelectArticle: (article: HealthArticle) => void;
  onViewAllArticles: () => void;
}

export const HealthArticlesSection: React.FC<HealthArticlesSectionProps> = ({
  onSelectArticle,
  onViewAllArticles
}) => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
              <span>Public Health Education & Prevention</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Evidence-Based Health Awareness
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Written by our senior medical faculty to empower patients and families with actionable health advice, early warning indicators, and disease prevention insights.
            </p>
          </div>

          <button
            onClick={onViewAllArticles}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-teal-800 bg-white hover:bg-teal-50 border border-teal-200 rounded-xl transition-colors self-start md:self-end cursor-pointer"
          >
            <span>Browse All Health Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HEALTH_ARTICLES.slice(0, 3).map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 text-[11px]">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>

                {/* Author Info */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold shrink-0">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-slate-800 truncate">{art.author}</div>
                    <div className="text-[10px] text-slate-400 truncate">{art.authorTitle}</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <button
                  onClick={() => onSelectArticle(art)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-teal-800 bg-teal-50/50 hover:bg-teal-100/70 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
