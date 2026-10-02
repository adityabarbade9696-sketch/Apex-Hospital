import React from 'react';
import {
  Building,
  Bed,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  HelpCircle,
  ArrowLeft,
  Shield,
  Stethoscope,
  Award
} from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { DOCTORS } from '../data/doctors';

interface DepartmentDetailViewProps {
  departmentId: string;
  onBack: () => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
  onSelectDoctor: (doctor: any) => void;
}

export const DepartmentDetailView: React.FC<DepartmentDetailViewProps> = ({
  departmentId,
  onBack,
  onOpenAppointment,
  onSelectDoctor
}) => {
  const department = DEPARTMENTS.find((d) => d.id === departmentId) || DEPARTMENTS[0];
  const doctorsInDept = DOCTORS.filter((d) => d.departmentId === department.id);

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Departments</span>
          </button>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                {department.category}
              </span>
              <span className="text-xs text-slate-400">
                Head of Department: {department.headOfDepartment}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {department.name}
            </h1>
            <p className="text-base text-cyan-200/90 font-medium">
              {department.tagline}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="pt-4 flex flex-wrap gap-4 border-t border-slate-800/80">
            {department.stats.map((st, i) => (
              <div key={i} className="px-4 py-2 bg-slate-800/60 rounded-xl border border-slate-700/60">
                <span className="text-lg font-bold text-white font-mono block">{st.value}</span>
                <span className="text-[11px] text-slate-400">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Overview & Bed Capacity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Department Overview & Clinical Philosophy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {department.fullDescription}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our clinical and interventional suites maintain international infection-control protocols, 24/7 on-call emergency response, and seamless transition to high-dependency and intensive care units.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Department Fast Facts
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-500">Dedicated Bed Count:</span>
                <span className="font-bold text-slate-800">{department.bedCount} Inpatient Beds</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-500">OPD Chamber:</span>
                <span className="font-bold text-slate-800">Ground & 1st Floor, Block A</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-200">
                <span className="text-slate-500">Emergency Response:</span>
                <span className="font-bold text-rose-600">24/7 Red-Zone Code Ready</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenAppointment(undefined, department.id)}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl shadow-sm cursor-pointer"
              >
                Book OPD Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Key Services & Specialized Surgeries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Core Clinical & Diagnostic Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {department.keyServices.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Specialized Operations & Advanced Procedures
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {department.specializedTreatments.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* State-of-the-Art Facilities & Technology */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white space-y-4">
          <div className="text-xs uppercase font-bold tracking-wider text-cyan-400">
            Cutting-Edge Infrastructure
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Specialized Equipment & Clinical Theaters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {department.facilities.map((fac, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
                <span className="text-cyan-400 font-bold text-xs">0{idx + 1}.</span>
                <p className="text-xs text-slate-200 leading-snug">{fac}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors in this Department */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-slate-900">
              Specialist Faculty & Consultants
            </h3>
            <p className="text-xs text-slate-500">
              Consulting physicians and surgeons affiliated with {department.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorsInDept.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-cyan-800 text-white flex items-center justify-center font-bold text-base shrink-0">
                      {doc.name.split(' ')[1]?.[0] || 'D'}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{doc.name}</h4>
                      <p className="text-xs text-cyan-800 font-semibold">{doc.title}</p>
                      <p className="text-[10px] text-slate-500">{doc.qualifications}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-600">
                    <div><strong>OPD:</strong> {doc.opdDays} ({doc.opdTimings})</div>
                    <div><strong>Chamber:</strong> {doc.roomNo}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="py-1.5 px-2 text-center text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg cursor-pointer"
                  >
                    View Bio
                  </button>
                  <button
                    onClick={() => onOpenAppointment(doc.id, department.id)}
                    className="py-1.5 px-2 text-center text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
                  >
                    Book OPD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs for this Department */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-slate-900">
              Department FAQs
            </h3>
            <p className="text-xs text-slate-500">
              Frequently asked clinical questions regarding procedures and care
            </p>
          </div>

          <div className="space-y-3">
            {department.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="text-xs font-bold text-slate-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
