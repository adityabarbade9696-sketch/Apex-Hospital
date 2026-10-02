import React, { useState } from 'react';
import {
  Search,
  Stethoscope,
  Star,
  Award,
  Clock,
  MapPin,
  Calendar,
  UserCheck,
  Filter
} from 'lucide-react';
import { DOCTORS, Doctor } from '../data/doctors';

interface DoctorsViewProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
}

export const DoctorsView: React.FC<DoctorsViewProps> = ({
  onSelectDoctor,
  onOpenAppointment
}) => {
  const [search, setSearch] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');

  const specialties = [
    'All',
    'Cardiology',
    'Neurology',
    'Oncology',
    'Orthopedics',
    'Gastroenterology',
    'Nephrology',
    'Pediatrics',
    'Emergency',
    'Pulmonology',
    'Obstetrics'
  ];

  const days = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase()) ||
      doc.departmentName.toLowerCase().includes(search.toLowerCase()) ||
      doc.qualifications.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === 'All' ||
      doc.departmentName.toLowerCase().includes(selectedSpecialty.toLowerCase());

    const matchesDay =
      selectedDay === 'All' || doc.opdDays.toLowerCase().includes(selectedDay.toLowerCase());

    return matchesSearch && matchesSpecialty && matchesDay;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Consultant Faculty & Specialists</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Find a Doctor & View OPD Schedules
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Search across our 450+ distinguished faculty members, interventionalists, and surgeons. View OPD days, consultation hours, and secure your outpatient slot online.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-200/90 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by doctor name, qualification, or illness..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
              />
            </div>

            {/* Specialty Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
              >
                {specialties.map((s) => (
                  <option key={s} value={s}>
                    Specialty: {s}
                  </option>
                ))}
              </select>
            </div>

            {/* OPD Day Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
              >
                {days.map((d) => (
                  <option key={d} value={d}>
                    OPD Day: {d === 'All' ? 'All Days' : d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing {filteredDoctors.length} Doctors
          </span>
          {(search || selectedSpecialty !== 'All' || selectedDay !== 'All') && (
            <button
              onClick={() => {
                setSearch('');
                setSelectedSpecialty('All');
                setSelectedDay('All');
              }}
              className="text-xs text-cyan-700 hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 p-8 space-y-2">
            <Stethoscope className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-800">No doctors match your criteria</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your specialty or search keywords
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Doctor Lockup */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-800 via-sky-700 to-teal-600 flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-xs">
                      {doc.name.split(' ').slice(1, 3).map((n) => n[0]).join('')}
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

                  {/* Qualifications */}
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

                  {/* OPD Timing */}
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

                <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="py-2 px-3 text-center text-xs font-semibold text-slate-700 hover:text-cyan-800 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    View Bio
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
        )}
      </div>
    </div>
  );
};
