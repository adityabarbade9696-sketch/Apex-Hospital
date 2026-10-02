import React, { useState, useMemo } from 'react';
import { Search, X, Stethoscope, Building, FileText, ArrowRight, Activity, BookOpen } from 'lucide-react';
import { DOCTORS } from '../data/doctors';
import { DEPARTMENTS } from '../data/departments';
import { HOSPITAL_SERVICES } from '../data/services';
import { HEALTH_ARTICLES } from '../data/healthArticles';
import { PATIENT_FAQS } from '../data/patientInfo';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenAppointment
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim() || query.length < 2) return null;
    const q = query.toLowerCase();

    const matchedDoctors = DOCTORS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.departmentName.toLowerCase().includes(q) ||
        d.qualifications.toLowerCase().includes(q)
    );

    const matchedDepts = DEPARTMENTS.filter(
      (dept) =>
        dept.name.toLowerCase().includes(q) ||
        dept.tagline.toLowerCase().includes(q) ||
        dept.shortDescription.toLowerCase().includes(q) ||
        dept.keyServices.some((s) => s.toLowerCase().includes(q))
    );

    const matchedServices = HOSPITAL_SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.features.some((f) => f.toLowerCase().includes(q))
    );

    const matchedArticles = HEALTH_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );

    const matchedFaqs = PATIENT_FAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
    );

    return {
      doctors: matchedDoctors,
      departments: matchedDepts,
      services: matchedServices,
      articles: matchedArticles,
      faqs: matchedFaqs
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search doctors, departments, procedures, tests, or patient guides..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto flex-1 space-y-6">
          {!searchResults && (
            <div className="py-8 text-center space-y-2 text-slate-400">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs">Type at least 2 characters to search across our hospital network</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs">
                <span className="text-slate-500 font-medium">Quick suggestions:</span>
                <button
                  onClick={() => setQuery('Cardiology')}
                  className="px-2 py-0.5 rounded bg-slate-100 text-cyan-800 hover:bg-cyan-50"
                >
                  Cardiology
                </button>
                <button
                  onClick={() => setQuery('Angioplasty')}
                  className="px-2 py-0.5 rounded bg-slate-100 text-cyan-800 hover:bg-cyan-50"
                >
                  Angioplasty
                </button>
                <button
                  onClick={() => setQuery('Pediatrics')}
                  className="px-2 py-0.5 rounded bg-slate-100 text-cyan-800 hover:bg-cyan-50"
                >
                  Pediatrics
                </button>
                <button
                  onClick={() => setQuery('MRI')}
                  className="px-2 py-0.5 rounded bg-slate-100 text-cyan-800 hover:bg-cyan-50"
                >
                  3T MRI
                </button>
                <button
                  onClick={() => setQuery('Visiting hours')}
                  className="px-2 py-0.5 rounded bg-slate-100 text-cyan-800 hover:bg-cyan-50"
                >
                  Visiting hours
                </button>
              </div>
            </div>
          )}

          {searchResults && (
            <div className="space-y-6">
              {/* Doctors */}
              {searchResults.doctors.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Doctors & Consultants ({searchResults.doctors.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {searchResults.doctors.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900">{doc.name}</div>
                          <div className="text-[11px] text-cyan-700">{doc.specialty}</div>
                          <div className="text-[10px] text-slate-500">{doc.opdDays} · {doc.opdTimings}</div>
                        </div>
                        <button
                          onClick={() => {
                            onClose();
                            onOpenAppointment(doc.id, doc.departmentId);
                          }}
                          className="px-2.5 py-1 text-[11px] font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-md"
                        >
                          Book
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Departments */}
              {searchResults.departments.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Departments ({searchResults.departments.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.departments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => {
                          onClose();
                          onNavigate('department-detail', dept.id);
                        }}
                        className="w-full p-3 rounded-xl border border-slate-200 hover:bg-cyan-50/50 text-left transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900">{dept.name}</div>
                          <div className="text-[11px] text-slate-600">{dept.tagline}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-cyan-700" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {searchResults.services.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Hospital Services & Facilities ({searchResults.services.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.services.map((serv) => (
                      <button
                        key={serv.id}
                        onClick={() => {
                          onClose();
                          onNavigate('services');
                        }}
                        className="w-full p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-left transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-900">{serv.title}</div>
                        <div className="text-[11px] text-slate-500">{serv.timing} · {serv.contactExtension}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Health Articles */}
              {searchResults.articles.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                    <span>Health Articles & Guidelines ({searchResults.articles.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {searchResults.articles.map((art) => (
                      <button
                        key={art.id}
                        onClick={() => {
                          onClose();
                          onNavigate('health-articles');
                        }}
                        className="w-full p-2.5 rounded-xl border border-slate-200 hover:bg-teal-50/50 text-left transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-900">{art.title}</div>
                        <div className="text-[11px] text-slate-500">By {art.author} · {art.category}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {searchResults.faqs.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Patient Information & Help ({searchResults.faqs.length})</span>
                  </div>
                  <div className="space-y-2">
                    {searchResults.faqs.map((faq, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div className="font-bold text-slate-900">{faq.question}</div>
                        <div className="text-slate-600 mt-1 leading-relaxed">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.doctors.length === 0 &&
                searchResults.departments.length === 0 &&
                searchResults.services.length === 0 &&
                searchResults.articles.length === 0 &&
                searchResults.faqs.length === 0 && (
                  <div className="py-8 text-center text-slate-500 text-xs">
                    No exact matches found for "{query}". Try searching for broad terms like "Cardiac", "Kidney", "Blood", or "Doctor".
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
