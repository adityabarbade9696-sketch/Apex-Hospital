import React from 'react';
import { GraduationCap, BookOpen, Microscope, Award, ArrowRight, FileText } from 'lucide-react';
import { ACADEMIC_COURSES, RESEARCH_PAPERS, UPCOMING_CMES } from '../data/academics';

interface AcademicsResearchSectionProps {
  onNavigate: (view: string, detailId?: string) => void;
}

export const AcademicsResearchSection: React.FC<AcademicsResearchSectionProps> = ({
  onNavigate
}) => {
  return (
    <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Apex Institute of Medical Sciences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Medical Education & Biomedical Research
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Nurturing healthcare leaders since 1944. Accredited by the National Medical Commission (NMC) and NBEMS for comprehensive undergraduate, postgraduate, and super-specialty training.
            </p>
          </div>

          <button
            onClick={() => onNavigate('academics')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors self-start md:self-end cursor-pointer"
          >
            <span>Explore Academic Directorate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Academic Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Pillar 1: Courses */}
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Academic Programs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Over 240 medical and nursing students enrolled annually across MBBS, DNB/MD specialties, and nursing sciences with bedside clinical mentoring.
              </p>

              <div className="space-y-2 pt-2">
                {ACADEMIC_COURSES.slice(0, 3).map((c, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div className="text-xs font-bold text-slate-200">{c.degree}</div>
                    <div className="text-[11px] text-cyan-400 truncate">{c.name}</div>
                    <div className="text-[10px] text-slate-500">{c.duration}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('academics')}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 pt-2 cursor-pointer"
            >
              <span>View Course Syllabus & Eligibility →</span>
            </button>
          </div>

          {/* Pillar 2: Clinical Research & Papers */}
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Biomedical Research</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Active clinical trial registry backed by an autonomous Institutional Ethics Committee (IEC). Over 120 peer-reviewed papers published in 2025-2026.
              </p>

              <div className="space-y-2 pt-2">
                {RESEARCH_PAPERS.slice(0, 2).map((res) => (
                  <div key={res.id} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-teal-400">{res.journal}</span>
                    <div className="text-xs font-semibold text-slate-200 line-clamp-2 leading-tight">
                      {res.title}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">Authors: {res.authors}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('academics')}
              className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 pt-2 cursor-pointer"
            >
              <span>Browse Research Registry & IEC Guidelines →</span>
            </button>
          </div>

          {/* Pillar 3: CMEs & Masterclasses */}
          <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">CME & Medical Conferences</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Accredited Continuing Medical Education events offering state medical council credit hours, cadaveric workshops, and robotic simulation masterclasses.
              </p>

              <div className="space-y-2 pt-2">
                {UPCOMING_CMES.slice(0, 2).map((cme, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400">{cme.credits}</span>
                    <div className="text-xs font-semibold text-slate-200 line-clamp-2 leading-tight">
                      {cme.title}
                    </div>
                    <div className="text-[10px] text-slate-400">{cme.date} · {cme.venue}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate('academics')}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 pt-2 cursor-pointer"
            >
              <span>Register for Upcoming CME Workshops →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
