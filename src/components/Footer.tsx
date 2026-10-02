import React from 'react';
import {
  Shield,
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ChevronRight,
  AlertCircle,
  FileCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenAppointment: () => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAppointment,
  onOpenPortal
}) => {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      {/* Upper 24/7 Rapid Action Strip */}
      <div className="max-w-7xl mx-auto px-4 pb-12 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
              <AlertCircle className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                24/7 Emergency & Trauma
              </div>
              <a
                href="tel:1066"
                className="text-lg font-bold text-white hover:text-rose-400 transition-colors block mt-0.5"
              >
                1066 / (020) 2612-4000
              </a>
              <p className="text-[11px] text-slate-400">Level-1 Trauma & Mobile ICU</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                24x7 Blood Centre
              </div>
              <a
                href="tel:+912026124050"
                className="text-lg font-bold text-white hover:text-red-400 transition-colors block mt-0.5"
              >
                +91 (020) 2612-4050
              </a>
              <p className="text-[11px] text-slate-400">Component Separation & NAT</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                OPD Appointments & Help
              </div>
              <a
                href="tel:+912026124010"
                className="text-lg font-bold text-white hover:text-cyan-400 transition-colors block mt-0.5"
              >
                +91 (020) 2612-4010
              </a>
              <p className="text-[11px] text-slate-400">Mon-Sat: 08:00 AM – 08:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Cashless Mediclaim / TPA
              </div>
              <a
                href="tel:+912026124090"
                className="text-lg font-bold text-white hover:text-emerald-400 transition-colors block mt-0.5"
              >
                +91 (020) 2612-4090
              </a>
              <p className="text-[11px] text-slate-400">35+ Empanelled Insurers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Hospital Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-sky-700 flex items-center justify-center text-white shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight">
                  APEX MEMORIAL HOSPITAL
                </span>
                <p className="text-xs text-cyan-400 font-medium">
                  Teaching Hospital & Medical Research Centre
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Established in 1944, Apex Memorial is an autonomous charitable quaternary-care
              teaching hospital and premier postgraduate medical college. Serving over 1.2 million
              outpatients and 75,000 emergency admissions each year with unflinching medical ethics,
              subsidized community care, and clinical distinction.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>NABH Accredited Hospital</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>NABL Central Diagnostic Lab</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>NMC Recognized Medical College</span>
              </span>
            </div>
          </div>

          {/* Col 3: Key Clinical Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold pb-1 border-b border-slate-800">
              Centers of Excellence
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('department-detail', 'cardiology')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Cardiology & Cath Lab</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('department-detail', 'neurology')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Neurology & Brain Spine</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('department-detail', 'oncology')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Apex Cancer Institute</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('department-detail', 'orthopedics')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Robotic Joint Replacements</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('department-detail', 'nephrology')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Nephrology & Renal Transplant</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('department-detail', 'pediatrics')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Pediatrics & Level-3 NICU</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('departments')}
                  className="text-cyan-400 hover:underline pt-1 inline-block font-semibold"
                >
                  View All Specialties →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Patients & Visitors */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold pb-1 border-b border-slate-800">
              Patient Care & Guide
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenAppointment()}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Book OPD Consultation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('doctors')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Find a Consultant Doctor</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPortal}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Download Diagnostic Reports</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('patient-info')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Admission & Discharge Guide</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('patient-info')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Cashless Insurance (TPA) Desk</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('patient-info')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Patient Rights & Responsibilities</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Campus Address & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold pb-1 border-b border-slate-800">
              Campus Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  489 Sardar Patel Road, Rasta Peth, Near Railway Terminus, Pune – 411011, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@apexmemorialhospital.org" className="hover:text-white">
                  info@apexmemorialhospital.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hospital Visiting: 04:30 PM – 07:00 PM</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2 px-3 text-center text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 cursor-pointer"
                >
                  View Interactive Transit Map →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Ethics Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          © 1944 – 2026 Apex Memorial Teaching Hospital & Research Centre. All Rights Reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <button onClick={() => onNavigate('patient-info')} className="hover:underline">
            Patient Charter
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('academics')} className="hover:underline">
            Institutional Ethics Committee
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('careers')} className="hover:underline">
            Careers
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('contact')} className="hover:underline">
            Feedback & Grievance
          </button>
        </div>
      </div>
    </footer>
  );
};
