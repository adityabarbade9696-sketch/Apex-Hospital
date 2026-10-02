import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Award,
  Calendar,
  CheckCircle2,
  FileText,
  Building
} from 'lucide-react';
import { ACADEMIC_COURSES, RESEARCH_PAPERS, UPCOMING_CMES } from '../data/academics';

export const AcademicsView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'courses' | 'research' | 'cme' | 'ethics'>('courses');

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Apex Institute of Medical Sciences & Research</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Medical College, Postgraduate Residency & Research
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Recognized by the National Medical Commission (NMC) and NBEMS. Educating physicians, surgeons, nurses, and medical scientists in an 1,850-bed tertiary clinical ecosystem.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-200/90 flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveSection('courses')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'courses' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Academic Courses (MBBS / DNB)
          </button>
          <button
            onClick={() => setActiveSection('research')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'research' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Biomedical Research Publications
          </button>
          <button
            onClick={() => setActiveSection('cme')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'cme' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            CME Workshops & Conferences
          </button>
          <button
            onClick={() => setActiveSection('ethics')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeSection === 'ethics' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Institutional Ethics Committee
          </button>
        </div>
      </div>

      {/* Section Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* COURSES */}
        {activeSection === 'courses' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACADEMIC_COURSES.map((course, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md">
                        {course.degree}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Annual Intake: {course.annualIntake} Seats
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {course.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                      <div><strong>Duration:</strong> {course.duration}</div>
                      <div><strong>Affiliation:</strong> {course.accreditation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESEARCH */}
        {activeSection === 'research' && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-lg font-bold text-slate-900">
                Directorate of Biomedical & Clinical Research
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apex Memorial Hospital runs active Phase-II and Phase-III clinical research trials registered with CTRI (Clinical Trials Registry - India). Our research facilities include an automated bio-repository, tissue pathology archive, and molecular genomics lab.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recent Peer-Reviewed Publications (2024-2026):
              </div>

              {RESEARCH_PAPERS.map((paper) => (
                <div
                  key={paper.id}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2"
                >
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200">
                    {paper.journal} ({paper.year})
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    <strong>Authors:</strong> {paper.authors} | <strong>DOI:</strong> {paper.doi}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {paper.abstract}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CME */}
        {activeSection === 'cme' && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-lg font-bold text-slate-900">
                Continuing Medical Education (CME) Calendar
              </h3>
              <p className="text-xs text-slate-600">
                Accredited workshops and scientific symposiums recognized by the State Medical Council.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {UPCOMING_CMES.map((cme, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                      {cme.credits}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {cme.title}
                    </h4>
                    <div className="text-xs text-slate-500 space-y-0.5 pt-2">
                      <div><strong>Date:</strong> {cme.date}</div>
                      <div><strong>Venue:</strong> {cme.venue}</div>
                      <div><strong>Capacity:</strong> {cme.delegateCount} Delegates</div>
                    </div>
                  </div>
                  <button className="w-full py-2 px-3 text-xs font-bold text-cyan-800 bg-cyan-50 hover:bg-cyan-100 rounded-lg cursor-pointer">
                    Download Brochure & Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ETHICS */}
        {activeSection === 'ethics' && (
          <div className="p-8 bg-white rounded-2xl border border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Institutional Ethics Committee (IEC)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Registered with the Central Drugs Standard Control Organization (CDSCO) & DHR
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The Institutional Ethics Committee of Apex Memorial Teaching Hospital operates in strict accordance with the Declaration of Helsinki, ICMR Ethical Guidelines for Biomedical Research, and ICH-GCP principles. All proposed clinical trials, observational studies, and student theses undergo independent scrutiny to ensure subject safety, voluntary informed consent, and data integrity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <strong>IEC Meeting Schedule:</strong>
                <p className="text-slate-600 mt-1">First Saturday of every calendar month</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <strong>Submission Deadline:</strong>
                <p className="text-slate-600 mt-1">15 days prior to the scheduled meeting date</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
