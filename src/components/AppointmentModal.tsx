import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle,
  AlertCircle,
  Printer,
  Download,
  Stethoscope,
  Building,
  ShieldCheck
} from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';
import { DOCTORS, Doctor } from '../data/doctors';
import { saveAppointment, BookedAppointment } from '../data/appointmentStorage';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctorId?: string;
  preselectedDepartmentId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctorId,
  preselectedDepartmentId
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedDeptId, setSelectedDeptId] = useState<string>(preselectedDepartmentId || 'cardiology');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(preselectedDoctorId || '');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    patientType: 'new' as 'new' | 'existing',
    uhid: '',
    complaint: ''
  });
  const [bookingToken, setBookingToken] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedDoctorId) {
      setSelectedDoctorId(preselectedDoctorId);
      const doc = DOCTORS.find((d) => d.id === preselectedDoctorId);
      if (doc) setSelectedDeptId(doc.departmentId);
    } else if (preselectedDepartmentId) {
      setSelectedDeptId(preselectedDepartmentId);
    }
  }, [preselectedDoctorId, preselectedDepartmentId]);

  if (!isOpen) return null;

  // Filter available doctors for chosen department
  const currentDept = DEPARTMENTS.find((d) => d.id === selectedDeptId) || DEPARTMENTS[0];
  const deptDoctors = DOCTORS.filter((d) => d.departmentId === selectedDeptId);
  const currentDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || deptDoctors[0];

  const handleNextToStep2 = () => {
    if (!selectedDoctorId && deptDoctors.length > 0) {
      setSelectedDoctorId(deptDoctors[0].id);
    }
    setStep(2);
  };

  const handleNextToStep3 = () => {
    const errs: Record<string, string> = {};
    if (!selectedDate) {
      errs.date = 'Please pick a consultation date.';
    } else {
      const today = new Date().toISOString().split('T')[0];
      if (selectedDate < today) {
        errs.date = 'Date cannot be in the past.';
      }
    }
    if (!selectedSlot) {
      errs.slot = 'Please choose a consultation time slot.';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!patientDetails.name.trim() || patientDetails.name.trim().length < 3) {
      errs.name = 'Patient full name is required (min 3 characters).';
    }

    const cleanPhone = patientDetails.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      errs.phone = 'Valid 10-digit mobile number is required.';
    }

    const ageNum = parseInt(patientDetails.age, 10);
    if (!patientDetails.age.trim() || isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
      errs.age = 'Valid age between 1 and 120 is required.';
    }

    if (patientDetails.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(patientDetails.email.trim())) {
        errs.email = 'Please provide a valid email format.';
      }
    }

    if (patientDetails.patientType === 'existing' && !patientDetails.uhid.trim()) {
      errs.uhid = 'Please enter your existing UHID number.';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});

    // Generate appointment token and save to persistent storage
    const token = 'AMH-' + Math.floor(100000 + Math.random() * 900000);
    const appointment: BookedAppointment = {
      id: 'apt-' + Date.now(),
      token,
      departmentId: currentDept.id,
      departmentName: currentDept.name,
      doctorId: currentDoctor ? currentDoctor.id : 'doc-gen',
      doctorName: currentDoctor ? currentDoctor.name : 'Attending Specialist',
      doctorSpecialty: currentDoctor ? currentDoctor.specialty : currentDept.name,
      doctorRoom: currentDoctor ? currentDoctor.roomNo : 'Room 101',
      consultationFee: currentDoctor ? currentDoctor.consultationFee : '₹800',
      date: selectedDate,
      timeSlot: selectedSlot,
      patientName: patientDetails.name.trim(),
      patientPhone: patientDetails.phone.trim(),
      patientEmail: patientDetails.email.trim() || undefined,
      patientAge: patientDetails.age.trim(),
      patientGender: patientDetails.gender,
      patientType: patientDetails.patientType,
      uhid: patientDetails.uhid.trim() || undefined,
      chiefComplaint: patientDetails.complaint.trim() || 'General Consultation',
      createdAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      status: 'Confirmed'
    };

    saveAppointment(appointment);
    setBookingToken(token);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedDoctorId('');
    setSelectedDate('');
    setSelectedSlot('');
    setPatientDetails({
      name: '',
      phone: '',
      email: '',
      age: '',
      gender: 'Male',
      patientType: 'new',
      uhid: '',
      complaint: ''
    });
    setBookingToken('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Book Outpatient (OPD) Appointment
              </h3>
              <p className="text-[11px] text-cyan-300">
                Apex Memorial Teaching Hospital & Research Centre
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
            <span className={step >= 1 ? 'text-cyan-800 font-bold' : ''}>1. Department & Doctor</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-cyan-800 font-bold' : ''}>2. Date & Time Slot</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-cyan-800 font-bold' : ''}>3. Patient Details</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {/* STEP 1: Department & Doctor */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Specialty / Department
                </label>
                <select
                  value={selectedDeptId}
                  onChange={(e) => {
                    setSelectedDeptId(e.target.value);
                    const docs = DOCTORS.filter((d) => d.departmentId === e.target.value);
                    if (docs.length > 0) setSelectedDoctorId(docs[0].id);
                  }}
                  className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-cyan-600 focus:outline-none"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Consultant Specialist
                </label>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                  {deptDoctors.map((doc) => {
                    const isSelected = selectedDoctorId === doc.id;
                    return (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDoctorId(doc.id)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-cyan-50 border-cyan-600 ring-1 ring-cyan-600'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-slate-900">{doc.name}</div>
                            <div className="text-[11px] text-cyan-800 font-medium">{doc.specialty}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">
                              {doc.opdDays} · {doc.opdTimings} · Fee: {doc.consultationFee}
                            </div>
                          </div>
                          <input
                            type="radio"
                            name="doctor_choice"
                            checked={isSelected}
                            onChange={() => setSelectedDoctorId(doc.id)}
                            className="text-cyan-600"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextToStep2}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
                >
                  Proceed to Schedule →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Slot */}
          {step === 2 && currentDoctor && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-700 text-white flex items-center justify-center font-bold text-sm">
                  {currentDoctor.name.split(' ')[1]?.[0] || 'D'}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{currentDoctor.name}</div>
                  <div className="text-[11px] text-slate-600">{currentDoctor.specialty}</div>
                  <div className="text-[10px] text-slate-500">
                    OPD Days: {currentDoctor.opdDays} | Room: {currentDoctor.roomNo}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Appointment Date *
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setErrors({ ...errors, date: '' });
                  }}
                  className={`w-full px-3 py-2 text-xs rounded-lg border bg-white focus:ring-2 focus:ring-cyan-600 focus:outline-none ${
                    errors.date ? 'border-rose-400' : 'border-slate-300'
                  }`}
                />
                {errors.date && <p className="text-xs text-rose-600 mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Choose Consultation Time Slot *
                </label>
                {errors.slot && <p className="text-xs text-rose-600 mb-2">{errors.slot}</p>}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {currentDoctor.availableSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedSlot(slot);
                        setErrors({ ...errors, slot: '' });
                      }}
                      className={`p-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                        selectedSlot === slot
                          ? 'bg-cyan-700 text-white border-cyan-700 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleNextToStep3}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
                >
                  Next: Patient Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-700 pb-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="modal_ptype"
                    checked={patientDetails.patientType === 'new'}
                    onChange={() => setPatientDetails({ ...patientDetails, patientType: 'new' })}
                  />
                  <span>New Patient</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="modal_ptype"
                    checked={patientDetails.patientType === 'existing'}
                    onChange={() => setPatientDetails({ ...patientDetails, patientType: 'existing' })}
                  />
                  <span>Existing Patient (UHID)</span>
                </label>
              </div>

              {patientDetails.patientType === 'existing' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">UHID Number *</label>
                  <input
                    type="text"
                    placeholder="e.g. AMH-78241"
                    value={patientDetails.uhid}
                    onChange={(e) => {
                      setPatientDetails({ ...patientDetails, uhid: e.target.value });
                      setErrors({ ...errors, uhid: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-white focus:ring-2 focus:ring-cyan-600 focus:outline-none ${
                      errors.uhid ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.uhid && <p className="text-xs text-rose-600 mt-1">{errors.uhid}</p>}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sunita R. Joshi"
                    value={patientDetails.name}
                    onChange={(e) => {
                      setPatientDetails({ ...patientDetails, name: e.target.value });
                      setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-white focus:ring-2 focus:ring-cyan-600 focus:outline-none ${
                      errors.name ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone Number (10 Digits) *
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="9823012345"
                    value={patientDetails.phone}
                    onChange={(e) => {
                      setPatientDetails({ ...patientDetails, phone: e.target.value });
                      setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-white focus:ring-2 focus:ring-cyan-600 focus:outline-none ${
                      errors.phone ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Age *</label>
                  <input
                    type="number"
                    placeholder="e.g. 48"
                    value={patientDetails.age}
                    onChange={(e) => {
                      setPatientDetails({ ...patientDetails, age: e.target.value });
                      setErrors({ ...errors, age: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-white focus:ring-2 focus:ring-cyan-600 focus:outline-none ${
                      errors.age ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.age && <p className="text-xs text-rose-600 mt-1">{errors.age}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Gender</label>
                  <select
                    value={patientDetails.gender}
                    onChange={(e) => setPatientDetails({ ...patientDetails, gender: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Optional"
                    value={patientDetails.email}
                    onChange={(e) => {
                      setPatientDetails({ ...patientDetails, email: e.target.value });
                      setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-3 py-2 text-xs rounded-lg border bg-white focus:ring-2 focus:ring-cyan-600 ${
                      errors.email ? 'border-rose-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reason for Consultation / Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Routine checkup, chest discomfort, joint pain, follow-up..."
                  value={patientDetails.complaint}
                  onChange={(e) => setPatientDetails({ ...patientDetails, complaint: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-white"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-sm cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmation Slip Preview */}
          {step === 4 && (
            <div className="space-y-4 py-2 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Appointment Confirmed!
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Saved to your booking history. SMS token dispatched.
                </p>
              </div>

              {/* Printable Slip Container */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-xs font-bold text-cyan-800">
                    APEX MEMORIAL HOSPITAL OPD TOKEN
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {bookingToken}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Patient:</span>
                    <span className="font-bold text-slate-800">
                      {patientDetails.name} ({patientDetails.age} yrs, {patientDetails.gender})
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Contact:</span>
                    <span className="font-semibold text-slate-800">{patientDetails.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Consultant:</span>
                    <span className="font-bold text-slate-800">{currentDoctor?.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Chamber / Room:</span>
                    <span className="font-semibold text-slate-800">{currentDoctor?.roomNo}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Scheduled Date:</span>
                    <span className="font-bold text-slate-800">{selectedDate || 'Upcoming OPD'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Time Slot:</span>
                    <span className="font-bold text-cyan-800">{selectedSlot}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  Please arrive 15 minutes before your time slot at OPD Counter 3 with this token.
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
