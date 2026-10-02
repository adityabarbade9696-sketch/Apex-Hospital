import React, { useState } from 'react';
import {
  FileText,
  Clock,
  CreditCard,
  BedDouble,
  Shield,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Calendar,
  Phone
} from 'lucide-react';
import { ROOM_CATEGORIES, TPA_PARTNERS, PATIENT_FAQS, PATIENT_RIGHTS } from '../data/patientInfo';

interface PatientInfoViewProps {
  onOpenAppointment: () => void;
}

export const PatientInfoView: React.FC<PatientInfoViewProps> = ({ onOpenAppointment }) => {
  const [activeTab, setActiveTab] = useState<'opd' | 'admission' | 'rooms' | 'tpa' | 'rights'>('opd');

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <FileText className="w-3.5 h-3.5" />
            <span>Comprehensive Patient & Visitor Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Patient Care, Admission & Cashless Services
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Everything you need for an informed, comfortable hospital stay. Clear registration procedures, room tariffs, empanelled mediclaim insurance, and patient charter.
          </p>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-200/90 flex flex-wrap items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('opd')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'opd' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            OPD Registration & Timings
          </button>
          <button
            onClick={() => setActiveTab('admission')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'admission' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Admission & Discharge
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'rooms' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Room Categories & Tariffs
          </button>
          <button
            onClick={() => setActiveTab('tpa')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'tpa' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Cashless Mediclaim & TPA
          </button>
          <button
            onClick={() => setActiveTab('rights')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'rights' ? 'bg-cyan-700 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Patient Charter & Rights
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TAB 1: OPD Registration */}
        {activeTab === 'opd' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="text-cyan-700 font-bold text-lg font-mono">01.</span>
                <h3 className="text-base font-bold text-slate-900">Central Registration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Arrive at the Central OPD Counter (Ground Floor). Present valid photo ID to receive your lifelong UHID smart card.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="text-cyan-700 font-bold text-lg font-mono">02.</span>
                <h3 className="text-base font-bold text-slate-900">Token Calling & Vitals</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our nursing station records blood pressure, pulse, oxygen saturation, and temperature while you relax in the air-conditioned waiting atrium.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <span className="text-cyan-700 font-bold text-lg font-mono">03.</span>
                <h3 className="text-base font-bold text-slate-900">Specialist Consultation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proceed to the assigned consultation chamber for detailed medical evaluation, electronic prescription, and diagnostic advice.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                OPD Operational Timings by Section
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong>General OPD:</strong>
                  <p className="text-slate-600 mt-1">08:00 AM – 02:00 PM (Mon – Sat)</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong>Specialty Clinics:</strong>
                  <p className="text-slate-600 mt-1">10:00 AM – 06:00 PM (Mon – Sat)</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong>Evening OPD:</strong>
                  <p className="text-slate-600 mt-1">05:00 PM – 08:00 PM (Select consultants)</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong>Emergency & Trauma:</strong>
                  <p className="text-rose-600 font-bold mt-1">24 Hours, 365 Days</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Admission & Discharge */}
        {activeTab === 'admission' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Admission Checklist */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Inpatient Admission Checklist
                </h3>
                <p className="text-xs text-slate-600">
                  Please bring the following documents to the Central Admission Desk on the Ground Floor:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>Doctor’s official Admission Advice note and prescription</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>Patient photo ID (Aadhaar / Voter ID / Passport)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>Mediclaim card / TPA insurance pre-authorization form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>All previous diagnostic reports, scans, and current daily medicines</span>
                  </li>
                </ul>
              </div>

              {/* Discharge Steps */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Discharge Process & Timing
                </h3>
                <p className="text-xs text-slate-600">
                  Our care coordinators ensure complete transparency and minimal waiting during departure:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Treating doctor reviews the patient during morning clinical rounds (09:00 AM – 11:00 AM) and authorizes discharge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Ward pharmacist reconciles medications and prepares take-home prescriptions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Final bill clearance completed at billing counter (or final approval from TPA for cashless patients).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Nurse hands over comprehensive printed discharge summary, follow-up schedule, and diet advice.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visiting Hours Callout */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Visiting Hours & Inpatient Visitor Passes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-800/80">
                  <strong>General Wards & Private Rooms:</strong>
                  <p className="text-slate-400 mt-1">04:30 PM to 07:00 PM daily (Max 2 visitors with pass)</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80">
                  <strong>Intensive Care Units (ICU / CCU / NICU):</strong>
                  <p className="text-slate-400 mt-1">11:30 AM – 12:30 PM & 05:00 PM – 06:00 PM (1 immediate family member only)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Room Tariffs */}
        {activeTab === 'rooms' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ROOM_CATEGORIES.map((room, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-900">{room.name}</h3>
                      <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-md">
                        {room.approxTariff}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Included Amenities:
                      </div>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {room.amenities.map((am, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-cyan-600 font-bold">✓</span>
                            <span>{am}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-cyan-50 text-cyan-900 border border-cyan-200 text-xs leading-relaxed">
              <strong>Charitable / Subsidized Bed Policy:</strong> Patients belonging to economically weaker sections are provided concessional or free treatment through the Apex Medical Trust upon submitting income verification documents at the Medical Social Worker (MSW) office.
            </div>
          </div>
        )}

        {/* TAB 4: Cashless TPA */}
        {activeTab === 'tpa' && (
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <h3 className="text-lg font-bold text-slate-900">
                24/7 Cashless Mediclaim & TPA Helpdesk
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our hospital is empanelled with over 35 major private insurance firms, TPAs, and public health schemes. The cashless desk functions 24 hours a day on the Ground Floor, next to Central Billing.
              </p>
              <div className="pt-2 text-xs font-semibold text-cyan-800">
                Direct TPA Desk Helpline: +91 (020) 2612-4090 / Ext 409
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TPA_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900">{partner.name}</div>
                    <div className="text-[10px] text-slate-500">{partner.type}</div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Cashless
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Patient Rights */}
        {activeTab === 'rights' && (
          <div className="p-8 bg-white rounded-2xl border border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Patient Rights & Responsibilities Charter
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Adhering to NABH ethical guidelines, National Human Rights Commission standards, and the Medical Council of India code.
              </p>
            </div>

            <div className="space-y-3">
              {PATIENT_RIGHTS.map((right, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 leading-relaxed">{right}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
