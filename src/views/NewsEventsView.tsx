import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { NEWS_EVENTS, NewsEvent } from '../data/newsEvents';

interface NewsEventsViewProps {
  onSelectNews: (item: NewsEvent) => void;
}

export const NewsEventsView: React.FC<NewsEventsViewProps> = ({ onSelectNews }) => {
  const [filterType, setFilterType] = useState('All');

  const filtered =
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
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Communications & Public Outreach</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Hospital News, Events & Community Health Camps
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Clinical breakthroughs, healthcare accreditations, community screenings, and scientific conferences hosted at Apex Memorial Teaching Hospital.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-200/90 flex flex-wrap items-center gap-2">
          {['All', 'News', 'Health Camp', 'Event'].map((f) => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filterType === f
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f === 'Health Camp' ? 'Community Health Camps' : f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
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

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectNews(item)}
                  className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
