import React, { useState } from 'react';
import {
  FileText,
  Clock,
  CreditCard,
  BedDouble,
  Shield,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { TPA_PARTNERS, PATIENT_FAQS, ROOM_CATEGORIES } from '../data/patientInfo';

interface PatientGuideSectionProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenAppointment: () => void;
}

export const PatientGuideSection: React.FC<PatientGuideSectionProps> = ({
  onNavigate,
  onOpenAppointment
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            <FileText className="w-3.5 h-3.5" />
            <span>Patient & Visitor Information</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Seamless Hospital Experience & Care Guidelines
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need for a smooth consultation, admission, insurance settlement, and discharge. Transparent protocols and patient dignity at every step.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Box 1: OPD Guide */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100/70 text-cyan-800 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">OPD Registration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Open 08:00 AM – 08:00 PM (Mon–Sat). Central OPD building houses 45 specialized consultation chambers with digitized token calling.
            </p>
            <div className="pt-2 text-xs text-cyan-700 font-semibold flex items-center gap-1">
              <span>Lifetime UHID Card Issued</span>
            </div>
          </div>

          {/* Box 2: Inpatient Admission */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-800 flex items-center justify-center">
              <BedDouble className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Room Categories</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From clean subsidized General Wards to Twin-Sharing, Single Deluxe AC, and Executive Suites with dedicated attendant facilities.
            </p>
            <div className="pt-2 text-xs text-sky-700 font-semibold flex items-center gap-1">
              <span>1,850 Total Hospital Beds</span>
            </div>
          </div>

          {/* Box 3: Cashless Mediclaim */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Cashless TPA Desk</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Round-the-clock cashless desk assisting over 35 insurers and government health schemes (Ayushman Bharat, MJPJAY, CGHS, ECHS).
            </p>
            <div className="pt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <span>Pre-Auth within 30 mins</span>
            </div>
          </div>

          {/* Box 4: Visiting Regulations */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Visiting Hours</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wards: 04:30 PM to 07:00 PM daily. ICUs: 11:30 AM – 12:30 PM & 05:00 PM – 06:00 PM. Maximum 2 visitors per patient to prevent infections.
            </p>
            <div className="pt-2 text-xs text-amber-700 font-semibold flex items-center gap-1">
              <span>Security Passes Required</span>
            </div>
          </div>
        </div>

        {/* Cashless Insurance Partners Strip */}
        <div className="mb-16 p-6 rounded-2xl bg-slate-900 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                Empanelled Health Insurers & TPAs
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Seamless Cashless Hospitalization
              </h3>
            </div>
            <button
              onClick={() => onNavigate('patient-info')}
              className="text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-1 self-start md:self-auto cursor-pointer"
            >
              <span>View All 35+ Insurance Partners →</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {TPA_PARTNERS.slice(0, 12).map((tpa, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-center"
              >
                <div className="text-xs font-semibold text-slate-200 truncate">
                  {tpa.name}
                </div>
                <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                  ✓ Cashless Available
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Frequently Asked Patient Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Common questions answered by our patient relations team
            </p>
          </div>

          <div className="space-y-3">
            {PATIENT_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-cyan-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 text-xs sm:text-sm text-slate-600 bg-white leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('patient-info')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 hover:text-cyan-900 hover:underline cursor-pointer"
            >
              <span>Explore Complete Patient Rights, Tariffs & Admission Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
