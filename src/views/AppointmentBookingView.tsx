import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Printer,
  Download,
  Stethoscope,
  Building,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Search,
  Star,
  MapPin,
  FileText,
  Trash2,
  CalendarPlus,
  RefreshCw,
  QrCode
} from 'lucide-react';
import { DEPARTMENTS, Department } from '../data/departments';
import { DOCTORS, Doctor } from '../data/doctors';
import {
  BookedAppointment,
  getStoredAppointments,
  saveAppointment,
  cancelAppointment
} from '../data/appointmentStorage';

interface AppointmentBookingViewProps {
  preselectedDoctorId?: string;
  preselectedDepartmentId?: string;
  onNavigateHome: () => void;
  onSelectDoctor: (doctor: Doctor) => void;
}

export const AppointmentBookingView: React.FC<AppointmentBookingViewProps> = ({
  preselectedDoctorId,
  preselectedDepartmentId,
  onNavigateHome,
  onSelectDoctor
}) => {
  const [activeMode, setActiveMode] = useState<'book' | 'my-appointments'>('book');
  const [step, setStep] = useState<number>(1);

  // Selection states
  const [selectedDeptId, setSelectedDeptId] = useState<string>(preselectedDepartmentId || 'cardiology');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(preselectedDoctorId || '');
  const [doctorSearch, setDoctorSearch] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');

  // Form Fields
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('Male');
  const [patientType, setPatientType] = useState<'new' | 'existing'>('new');
  const [patientUhid, setPatientUhid] = useState('');
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [preferredAlert, setPreferredAlert] = useState<'sms' | 'whatsapp' | 'email'>('whatsapp');
  const [emergencyContact, setEmergencyContact] = useState('');

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Confirmed Appointment Result
  const [confirmedBooking, setConfirmedBooking] = useState<BookedAppointment | null>(null);

  // Stored Bookings
  const [storedBookings, setStoredBookings] = useState<BookedAppointment[]>([]);

  useEffect(() => {
    setStoredBookings(getStoredAppointments());
  }, [confirmedBooking]);

  useEffect(() => {
    if (preselectedDoctorId) {
      setSelectedDoctorId(preselectedDoctorId);
      const doc = DOCTORS.find((d) => d.id === preselectedDoctorId);
      if (doc) setSelectedDeptId(doc.departmentId);
    } else if (preselectedDepartmentId) {
      setSelectedDeptId(preselectedDepartmentId);
    }
  }, [preselectedDoctorId, preselectedDepartmentId]);

  // Derived Department & Doctors
  const currentDepartment = DEPARTMENTS.find((d) => d.id === selectedDeptId) || DEPARTMENTS[0];
  const deptDoctors = DOCTORS.filter((d) => d.departmentId === selectedDeptId);

  const displayedDoctors = deptDoctors.filter(
    (d) =>
      !doctorSearch.trim() ||
      d.name.toLowerCase().includes(doctorSearch.toLowerCase()) ||
      d.specialty.toLowerCase().includes(doctorSearch.toLowerCase()) ||
      d.qualifications.toLowerCase().includes(doctorSearch.toLowerCase())
  );

  const selectedDoctor = DOCTORS.find((d) => d.id === selectedDoctorId) || displayedDoctors[0];

  // Complaint tags
  const complaintSuggestions = [
    'Chest Discomfort / Palpitations',
    'High Blood Pressure Evaluation',
    'Severe Headache / Dizziness',
    'Chronic Joint / Knee Pain',
    'Stomach Pain & Acidity',
    'Persistent Cough & Breathlessness',
    'Routine Annual Health Check',
    'Second Surgical Opinion'
  ];

  // Helper to validate Step 1
  const handleProceedToStep2 = () => {
    if (!selectedDoctorId && displayedDoctors.length > 0) {
      setSelectedDoctorId(displayedDoctors[0].id);
    }
    setStep(2);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Helper to validate Step 2
  const handleProceedToStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedDate) {
      newErrors.date = 'Please pick a consultation date.';
    } else {
      // Validate that date is not in the past
      const today = new Date().toISOString().split('T')[0];
      if (selectedDate < today) {
        newErrors.date = 'Appointment date cannot be in the past.';
      }
    }

    if (!selectedSlot) {
      newErrors.slot = 'Please select a preferred consultation time slot.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(3);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Helper to validate Step 3 and Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate Name
    if (!patientName.trim()) {
      newErrors.name = 'Patient full name is required.';
    } else if (patientName.trim().length < 3) {
      newErrors.name = 'Please enter a valid full name (at least 3 characters).';
    }

    // Validate Phone (10 digits)
    const cleanedPhone = patientPhone.replace(/\D/g, '');
    if (!patientPhone.trim()) {
      newErrors.phone = 'Mobile number is required for SMS confirmation.';
    } else if (cleanedPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    // Validate Age
    const ageNum = parseInt(patientAge, 10);
    if (!patientAge.trim()) {
      newErrors.age = 'Age is required.';
    } else if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
      newErrors.age = 'Please enter a valid age between 1 and 120.';
    }

    // Validate Email if entered
    if (patientEmail.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(patientEmail.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // Validate UHID if existing patient
    if (patientType === 'existing' && !patientUhid.trim()) {
      newErrors.uhid = 'Please enter your existing Hospital UHID number (e.g., AMH-12345).';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct Confirmed Booking
    const token = 'AMH-' + Math.floor(100000 + Math.random() * 900000);
    const booking: BookedAppointment = {
      id: 'apt-' + Date.now(),
      token,
      departmentId: currentDepartment.id,
      departmentName: currentDepartment.name,
      doctorId: selectedDoctor ? selectedDoctor.id : 'doc-general',
      doctorName: selectedDoctor ? selectedDoctor.name : 'Attending Specialist',
      doctorSpecialty: selectedDoctor ? selectedDoctor.specialty : currentDepartment.name,
      doctorRoom: selectedDoctor ? selectedDoctor.roomNo : 'OPD Chamber 101',
      consultationFee: selectedDoctor ? selectedDoctor.consultationFee : '₹800',
      date: selectedDate,
      timeSlot: selectedSlot,
      patientName: patientName.trim(),
      patientPhone: patientPhone.trim(),
      patientEmail: patientEmail.trim() || undefined,
      patientAge: patientAge.trim(),
      patientGender,
      patientType,
      uhid: patientType === 'existing' ? patientUhid.trim() : undefined,
      chiefComplaint: chiefComplaint.trim() || 'General Consultation & Health Evaluation',
      emergencyContact: emergencyContact.trim() || undefined,
      createdAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Confirmed'
    };

    saveAppointment(booking);
    setConfirmedBooking(booking);
    setStep(4);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleResetForNew = () => {
    setStep(1);
    setSelectedDoctorId('');
    setSelectedDate('');
    setSelectedSlot('');
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setPatientAge('');
    setPatientUhid('');
    setChiefComplaint('');
    setErrors({});
    setConfirmedBooking(null);
  };

  const handleCancelBooking = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      cancelAppointment(id);
      setStoredBookings(getStoredAppointments());
    }
  };

  // Generate calendar .ics file download
  const handleDownloadCalendar = (booking: BookedAppointment) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Apex Memorial Hospital//OPD Appointment//EN
BEGIN:VEVENT
UID:${booking.id}@apexmemorialhospital.org
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Hospital Appointment: ${booking.doctorName}
DESCRIPTION:Token: ${booking.token}\\nDepartment: ${booking.departmentName}\\nRoom: ${booking.doctorRoom}\\nPatient: ${booking.patientName}
LOCATION:Apex Memorial Teaching Hospital, 489 Sardar Patel Road, Pune
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Apex_Appointment_${booking.token}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Group slots into Morning and Afternoon
  const morningSlots = selectedDoctor ? selectedDoctor.availableSlots.slice(0, 3) : ['09:30 AM', '10:15 AM', '11:00 AM'];
  const afternoonSlots = selectedDoctor ? selectedDoctor.availableSlots.slice(3) : ['11:45 AM', '12:30 PM'];

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Apex Outpatient Portal · OPD Timing 08:00 AM – 08:00 PM</span>
            </div>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Hospital Home</span>
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Online OPD Appointment Booking System
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Select your clinical specialty, choose an experienced consultant, pick an available day and time slot, and confirm with zero advance fee. Digital token issued instantly.
          </p>
        </div>
      </div>

      {/* Main Switcher: Book vs My Appointments */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-2.5 rounded-2xl shadow-lg border border-slate-200/90 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveMode('book')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeMode === 'book'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <CalendarPlus className="w-4 h-4" />
              <span>Book New Appointment</span>
            </button>

            <button
              onClick={() => setActiveMode('my-appointments')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeMode === 'my-appointments'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>My Appointments ({storedBookings.length})</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>NABH Accredited Paperless OPD</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeMode === 'my-appointments' ? (
          /* MY APPOINTMENTS LIST VIEW */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Your Booked Appointments</h2>
                <p className="text-xs text-slate-500">
                  Track your appointment tokens, print slips, or cancel scheduled visits
                </p>
              </div>
              <button
                onClick={() => setActiveMode('book')}
                className="px-4 py-2 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
              >
                + Book Another Consultation
              </button>
            </div>

            {storedBookings.length === 0 ? (
              <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
                <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-800">No appointments found yet</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  You haven't scheduled any consultations in this browser session yet. Book your first OPD appointment in 4 quick steps.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setActiveMode('book')}
                    className="px-5 py-2 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
                  >
                    Start Booking Now
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {storedBookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200">
                          Token: {b.token}
                        </span>
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${
                            b.status === 'Confirmed'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-rose-50 text-rose-700 border border-rose-200'
                          }`}
                        >
                          {b.status}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1">
                        <h3 className="text-base font-bold text-slate-900">{b.doctorName}</h3>
                        <p className="text-xs font-semibold text-cyan-700">{b.doctorSpecialty}</p>
                        <p className="text-[11px] text-slate-500">{b.departmentName}</p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Date & Time:</span>
                          <span className="font-bold text-slate-800">{b.date} at {b.timeSlot}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Chamber / Room:</span>
                          <span className="font-semibold text-slate-800">{b.doctorRoom}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Patient:</span>
                          <span className="font-semibold text-slate-800">{b.patientName} ({b.patientAge}y, {b.patientGender})</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Mobile:</span>
                          <span className="font-semibold text-slate-800">{b.patientPhone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => window.print()}
                          className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1 cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Print</span>
                        </button>
                        <button
                          onClick={() => handleDownloadCalendar(b)}
                          className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>.ICS</span>
                        </button>
                      </div>

                      {b.status === 'Confirmed' && (
                        <button
                          onClick={() => handleCancelBooking(b.id)}
                          className="px-3 py-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Cancel</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* BOOKING WIZARD STEPS */
          <div className="space-y-8">
            {/* Step Stepper Header */}
            {step < 4 && (
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div
                    onClick={() => setStep(1)}
                    className={`p-3 rounded-xl cursor-pointer transition-all ${
                      step === 1
                        ? 'bg-cyan-700 text-white font-bold shadow-xs'
                        : step > 1
                        ? 'bg-cyan-50 text-cyan-900 font-semibold'
                        : 'text-slate-400'
                    }`}
                  >
                    <span className="block font-mono text-[10px] uppercase opacity-75">Step 01</span>
                    <span className="text-xs sm:text-sm">Department & Doctor</span>
                  </div>

                  <div
                    onClick={() => {
                      if (step > 2) setStep(2);
                    }}
                    className={`p-3 rounded-xl transition-all ${
                      step === 2
                        ? 'bg-cyan-700 text-white font-bold shadow-xs'
                        : step > 2
                        ? 'bg-cyan-50 text-cyan-900 font-semibold cursor-pointer'
                        : 'text-slate-400'
                    }`}
                  >
                    <span className="block font-mono text-[10px] uppercase opacity-75">Step 02</span>
                    <span className="text-xs sm:text-sm">Date & Time Slot</span>
                  </div>

                  <div
                    className={`p-3 rounded-xl transition-all ${
                      step === 3
                        ? 'bg-cyan-700 text-white font-bold shadow-xs'
                        : 'text-slate-400'
                    }`}
                  >
                    <span className="block font-mono text-[10px] uppercase opacity-75">Step 03</span>
                    <span className="text-xs sm:text-sm">Patient Details</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1: Department & Doctor Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Department List */}
                  <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        1. Select Clinical Department
                      </h3>
                      <p className="text-xs text-slate-500">
                        Choose the specialty matching your medical concern
                      </p>
                    </div>

                    <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
                      {DEPARTMENTS.map((dept) => {
                        const isSelected = selectedDeptId === dept.id;
                        return (
                          <div
                            key={dept.id}
                            onClick={() => {
                              setSelectedDeptId(dept.id);
                              const docs = DOCTORS.filter((d) => d.departmentId === dept.id);
                              if (docs.length > 0) setSelectedDoctorId(docs[0].id);
                            }}
                            className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-cyan-50 border-cyan-600 ring-1 ring-cyan-600 shadow-xs'
                                : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100/70'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">{dept.name}</span>
                              <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                                {dept.category}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{dept.tagline}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Doctors within Selected Department */}
                  <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          2. Select Consulting Specialist
                        </h3>
                        <p className="text-xs text-cyan-800 font-medium">
                          {currentDepartment.name} ({displayedDoctors.length} Specialists Available)
                        </p>
                      </div>

                      {/* Doctor Search Filter */}
                      <div className="relative w-full sm:w-56">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Filter doctor name..."
                          value={doctorSearch}
                          onChange={(e) => setDoctorSearch(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-cyan-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                      {displayedDoctors.map((doc) => {
                        const isSelected = selectedDoctorId === doc.id;
                        return (
                          <div
                            key={doc.id}
                            onClick={() => setSelectedDoctorId(doc.id)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-cyan-50 border-cyan-600 ring-2 ring-cyan-600'
                                : 'bg-slate-50/40 border-slate-200 hover:bg-slate-100/60'
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-800 to-sky-700 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-xs">
                                {doc.name.split(' ').slice(1, 3).map((n) => n[0]).join('')}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-bold text-slate-900 truncate">
                                    {doc.name}
                                  </h4>
                                  <span className="text-xs font-bold text-cyan-900 font-mono">
                                    Fee: {doc.consultationFee}
                                  </span>
                                </div>
                                <p className="text-xs text-cyan-700 font-semibold truncate">{doc.title}</p>
                                <p className="text-[11px] text-slate-500 truncate">{doc.qualifications}</p>

                                <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-600">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-cyan-700" />
                                    <span>{doc.opdDays}: {doc.opdTimings}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-slate-400" />
                                    <span>{doc.roomNo}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        Selected: <strong className="text-slate-800">{selectedDoctor?.name || 'Please select a doctor'}</strong>
                      </div>
                      <button
                        onClick={handleProceedToStep2}
                        className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <span>Proceed to Date & Slot</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Date & Available Time Slot */}
            {step === 2 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Select Appointment Date & Time Slot
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Consulting with <strong>{selectedDoctor?.name}</strong> ({selectedDoctor?.specialty})
                  </p>
                </div>

                {/* Doctor Summary Banner */}
                <div className="p-4 bg-cyan-50/70 border border-cyan-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-700 text-white flex items-center justify-center font-bold text-sm">
                      {selectedDoctor?.name.split(' ')[1]?.[0] || 'D'}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{selectedDoctor?.name}</div>
                      <div className="text-slate-600">{selectedDoctor?.departmentName} · {selectedDoctor?.roomNo}</div>
                    </div>
                  </div>
                  <div className="text-slate-700 sm:text-right">
                    <div>Regular OPD Days: <strong className="text-cyan-900">{selectedDoctor?.opdDays}</strong></div>
                    <div className="text-[11px] text-slate-500">Hours: {selectedDoctor?.opdTimings}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Date Picker Section */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700">
                      1. Choose Consultation Date *
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setErrors({ ...errors, date: '' });
                      }}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-slate-50"
                    />
                    {errors.date && (
                      <p className="text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.date}</span>
                      </p>
                    )}

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                      <div className="font-semibold text-slate-800">Clinic Schedule Guidelines:</div>
                      <div>· Consultations are scheduled in 15-minute clinical windows.</div>
                      <div>· Arrive 15 minutes prior to verify vitals and issue physical token.</div>
                    </div>
                  </div>

                  {/* Slot Picker Section */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        2. Choose Consultation Slot *
                      </label>
                      {errors.slot && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 mb-2">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.slot}</span>
                        </p>
                      )}

                      {/* Morning Slots */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Morning Sessions
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {morningSlots.map((slot, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setSelectedSlot(slot);
                                setErrors({ ...errors, slot: '' });
                              }}
                              className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
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

                      {/* Afternoon Slots */}
                      <div className="space-y-2 mt-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Afternoon / Evening Sessions
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {afternoonSlots.map((slot, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setSelectedSlot(slot);
                                setErrors({ ...errors, slot: '' });
                              }}
                              className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
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
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    ← Change Doctor or Department
                  </button>

                  <button
                    type="button"
                    onClick={handleProceedToStep3}
                    className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Proceed to Patient Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Information Form with Comprehensive Validation */}
            {step === 3 && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Patient Contact & Medical Information
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Please provide accurate patient particulars. Digital booking token and SMS updates will be issued to this mobile.
                  </p>
                </div>

                {/* Summary Pill */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">Consultant: </span>
                    <strong className="text-slate-900">{selectedDoctor?.name}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Date: </span>
                    <strong className="text-cyan-800">{selectedDate}</strong> at <strong className="text-cyan-800">{selectedSlot}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Fee: </span>
                    <strong className="text-slate-900">{selectedDoctor?.consultationFee} (Pay at Counter)</strong>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Patient Type Radio */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Patient Category
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="ptype"
                          checked={patientType === 'new'}
                          onChange={() => setPatientType('new')}
                          className="text-cyan-600"
                        />
                        <span>New Patient (First visit to Apex Memorial)</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="radio"
                          name="ptype"
                          checked={patientType === 'existing'}
                          onChange={() => setPatientType('existing')}
                          className="text-cyan-600"
                        />
                        <span>Existing Patient (I have a UHID card)</span>
                      </label>
                    </div>

                    {patientType === 'existing' && (
                      <div className="mt-2 max-w-sm">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Existing Hospital UHID Number *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. AMH-78241"
                          value={patientUhid}
                          onChange={(e) => {
                            setPatientUhid(e.target.value);
                            setErrors({ ...errors, uhid: '' });
                          }}
                          className={`w-full px-3 py-2 text-xs rounded-lg border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 ${
                            errors.uhid ? 'border-rose-400' : 'border-slate-300'
                          }`}
                        />
                        {errors.uhid && <p className="text-xs text-rose-600 mt-1">{errors.uhid}</p>}
                      </div>
                    )}
                  </div>

                  {/* Name and Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sunita R. Joshi"
                        value={patientName}
                        onChange={(e) => {
                          setPatientName(e.target.value);
                          setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 ${
                          errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Phone Number (10 Digits) *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-xs text-slate-500 bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl">
                          +91
                        </span>
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="9823012345"
                          value={patientPhone}
                          onChange={(e) => {
                            setPatientPhone(e.target.value);
                            setErrors({ ...errors, phone: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 text-xs rounded-r-xl border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 ${
                            errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Age, Gender & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Age (Years) *
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 45"
                        value={patientAge}
                        onChange={(e) => {
                          setPatientAge(e.target.value);
                          setErrors({ ...errors, age: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 ${
                          errors.age ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.age && <p className="text-xs text-rose-600 mt-1">{errors.age}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Gender *
                      </label>
                      <select
                        value={patientGender}
                        onChange={(e) => setPatientGender(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="patient@example.com"
                        value={patientEmail}
                        onChange={(e) => {
                          setPatientEmail(e.target.value);
                          setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 ${
                          errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Chief Medical Complaint */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Reason for Consultation / Symptoms
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe primary symptom, how long it has persisted, or if seeking a second opinion..."
                      value={chiefComplaint}
                      onChange={(e) => setChiefComplaint(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    />

                    {/* Quick Complaint Suggestions */}
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] text-slate-400 mr-1">Quick Select:</span>
                      {complaintSuggestions.map((tag, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setChiefComplaint(tag)}
                          className="px-2 py-0.5 text-[11px] rounded bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-800 transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notification preference */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <strong className="text-slate-800 block">Instant Confirmation Delivery:</strong>
                      <span className="text-slate-500">Choose your preferred channel for token & arrival instructions</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="prefAlert"
                          checked={preferredAlert === 'whatsapp'}
                          onChange={() => setPreferredAlert('whatsapp')}
                          className="text-cyan-600"
                        />
                        <span>WhatsApp & SMS</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="prefAlert"
                          checked={preferredAlert === 'sms'}
                          onChange={() => setPreferredAlert('sms')}
                          className="text-cyan-600"
                        />
                        <span>SMS Only</span>
                      </label>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      ← Change Date & Slot
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3 text-xs sm:text-sm font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl shadow-md transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm & Generate OPD Token</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 4: Successful Booking Confirmation & Digital Pass */}
            {step === 4 && confirmedBooking && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">
                      Appointment Successfully Booked!
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Your consultation slot is locked in the hospital OPD central server.
                    </p>
                  </div>

                  {/* DIGITAL APPOINTMENT PASS / SLIP */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white text-left space-y-4 shadow-lg border border-slate-800 relative overflow-hidden">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 block">
                          Apex Memorial Hospital · OPD Pass
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5">
                          {confirmedBooking.departmentName}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">Token Number:</span>
                        <span className="text-base font-mono font-extrabold text-emerald-400">
                          {confirmedBooking.token}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Consultant Specialist:</span>
                        <span className="font-bold text-slate-100 text-sm">{confirmedBooking.doctorName}</span>
                        <span className="text-[11px] text-cyan-300 block">{confirmedBooking.doctorSpecialty}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Chamber & Floor:</span>
                        <span className="font-bold text-slate-100">{confirmedBooking.doctorRoom}</span>
                        <span className="text-[11px] text-slate-400 block">OPD Block A</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Date of Consultation:</span>
                        <span className="font-bold text-white text-sm">{confirmedBooking.date}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Time Slot:</span>
                        <span className="font-bold text-cyan-300 text-sm">{confirmedBooking.timeSlot}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Patient Name:</span>
                        <span className="font-semibold text-slate-200">
                          {confirmedBooking.patientName} ({confirmedBooking.patientAge}y, {confirmedBooking.patientGender})
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Registered Phone:</span>
                        <span className="font-semibold text-slate-200">{confirmedBooking.patientPhone}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Consultation Fee: {confirmedBooking.consultationFee} (Payable at desk)</span>
                      <span className="text-emerald-400 font-semibold">SMS Alert Dispatched ✓</span>
                    </div>
                  </div>

                  {/* Arrival Instructions */}
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-600">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-cyan-700" />
                      <span>Important Patient Arrival Instructions:</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-[11px]">
                      <li>Please report to <strong>OPD Registration Counter 3</strong> at least 15 minutes before your time slot.</li>
                      <li>Carry past physical medical files, test reports, and list of daily medications.</li>
                      <li>Show this digital token on your phone or provide the mobile number to the registration desk.</li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="px-5 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-2 cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Official Slip</span>
                    </button>

                    <button
                      onClick={() => handleDownloadCalendar(confirmedBooking)}
                      className="px-5 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Add to Calendar (.ICS)</span>
                    </button>

                    <button
                      onClick={handleResetForNew}
                      className="px-5 py-2.5 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl cursor-pointer"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
