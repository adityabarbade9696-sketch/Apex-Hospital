import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Award,
  ArrowRight,
  Star,
  UserCheck,
  Stethoscope
} from 'lucide-react';
import { DOCTORS, Doctor } from '../data/doctors';

interface DoctorsShowcaseProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
  onViewAllDoctors: () => void;
}

export const DoctorsShowcase: React.FC<DoctorsShowcaseProps> = ({
  onSelectDoctor,
  onOpenAppointment,
  onViewAllDoctors
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  const specialties = [
    'All',
    'Cardiology',
    'Neurology',
    'Oncology',
    'Orthopedics',
    'Gastroenterology',
    'Pediatrics',
    'Pulmonology'
  ];

  const filteredDoctors =
    selectedSpecialty === 'All'
      ? DOCTORS
      : DOCTORS.filter((doc) =>
          doc.departmentName.toLowerCase().includes(selectedSpecialty.toLowerCase())
        );

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-700" />
              <span>Medical Faculty & Specialists</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Renowned Clinicians & Surgeons
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Our full-time faculty combines clinical mastery with academic mentorship, leading research protocols and delivering individualized healthcare across 42 disciplines.
            </p>
          </div>

          <button
            onClick={onViewAllDoctors}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-cyan-800 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-xl shadow-sm transition-colors self-start md:self-end cursor-pointer"
          >
            <span>View Full Doctor Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedSpecialty === spec
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.slice(0, 6).map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Avatar / Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-800 via-sky-700 to-teal-600 flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-sm">
                    {doc.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-amber-500 text-xs font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{doc.rating}</span>
                      <span className="text-slate-400 font-normal">({doc.reviewsCount} reviews)</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug mt-0.5">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-cyan-700 font-semibold truncate max-w-[200px]">
                      {doc.title}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate max-w-[200px]">
                      {doc.departmentName}
                    </p>
                  </div>
                </div>

                {/* Qualifications & Experience */}
                <div className="space-y-1.5 text-xs text-slate-600 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span className="truncate">{doc.qualifications}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>{doc.experienceYears} Years Clinical Experience</span>
                  </div>
                </div>

                {/* OPD Schedule & Chamber */}
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-semibold">{doc.opdDays}:</span>
                    <span className="text-slate-600">{doc.opdTimings}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{doc.roomNo}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectDoctor(doc)}
                  className="py-2 px-3 text-center text-xs font-semibold text-slate-700 hover:text-cyan-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  View Profile
                </button>
                <button
                  onClick={() => onOpenAppointment(doc.id, doc.departmentId)}
                  className="py-2 px-3 flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book OPD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
