import React from 'react';
import { X, Calendar, Clock, MapPin, Award, UserCheck, Star, Stethoscope } from 'lucide-react';
import { Doctor } from '../data/doctors';

interface DoctorProfileModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
}

export const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  doctor,
  onClose,
  onOpenAppointment
}) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold">Consultant Physician Profile</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Top Info Lockup */}
          <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-800 via-sky-700 to-teal-600 flex items-center justify-center text-white text-2xl font-bold shadow-md shrink-0">
              {doctor.name.split(' ').slice(1, 3).map((n) => n[0]).join('')}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-500 text-xs font-semibold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{doctor.rating}</span>
                <span className="text-slate-400 font-normal">({doctor.reviewsCount} patient reviews)</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {doctor.name}
              </h3>
              <p className="text-xs font-bold text-cyan-800">{doctor.title}</p>
              <p className="text-xs text-slate-500">{doctor.departmentName}</p>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Award className="w-4 h-4 text-cyan-600" />
                <span className="font-bold text-slate-700">Medical Qualifications</span>
              </div>
              <p className="text-slate-800 font-semibold">{doctor.qualifications}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <UserCheck className="w-4 h-4 text-cyan-600" />
                <span className="font-bold text-slate-700">Clinical Experience</span>
              </div>
              <p className="text-slate-800 font-semibold">{doctor.experienceYears} Years Active Practice</p>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              About the Specialist
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* Special Interests */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Clinical Interests & Advanced Procedures
            </h4>
            <div className="flex flex-wrap gap-2">
              {doctor.specialInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-cyan-50 text-cyan-900 border border-cyan-100 font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* OPD Schedule Card */}
          <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2 text-xs">
            <div className="font-bold text-cyan-300 uppercase tracking-wider text-[10px]">
              OPD Chamber & Timings
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{doctor.opdDays}: {doctor.opdTimings}</span>
              </div>
              <span className="text-cyan-400 font-bold">Fee: {doctor.consultationFee}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{doctor.roomNo}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAppointment(doctor.id, doctor.departmentId);
            }}
            className="px-5 py-2.5 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
