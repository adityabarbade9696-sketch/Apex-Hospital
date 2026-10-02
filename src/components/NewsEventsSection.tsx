import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';
import { NEWS_EVENTS, NewsEvent } from '../data/newsEvents';

interface NewsEventsSectionProps {
  onSelectNews: (item: NewsEvent) => void;
  onViewAllNews: () => void;
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({
  onSelectNews,
  onViewAllNews
}) => {
  const [filterType, setFilterType] = useState<string>('All');

  const filteredItems =
    filterType === 'All'
      ? NEWS_EVENTS
      : NEWS_EVENTS.filter((item) =>
          filterType === 'Health Camp'
            ? item.type === 'Health Camp'
            : filterType === 'News'
            ? item.type === 'News' || item.type === 'Press Release'
            : item.type === 'Event'
        );

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Campus Happenings & Outreach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital News, Community Camps & Events
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Stay updated with hospital clinical milestones, free preventive health screenings in the community, academic conclaves, and accreditation updates.
            </p>
          </div>

          <button
            onClick={onViewAllNews}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-cyan-800 bg-slate-50 hover:bg-cyan-50 border border-slate-200 rounded-xl transition-colors self-start md:self-end cursor-pointer"
          >
            <span>View All News & Events</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {['All', 'News', 'Health Camp', 'Event'].map((f) => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterType === f
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f === 'Health Camp' ? 'Community Health Camps' : f}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/60 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs mb-3">
                  <span
                    className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                      item.type === 'Health Camp'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.type === 'Event'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-cyan-100 text-cyan-800'
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-500 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>

                {item.location && (
                  <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-500">
                    <MapPin className="w-3 h-3 text-cyan-600 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectNews(item)}
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Full Update</span>
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
