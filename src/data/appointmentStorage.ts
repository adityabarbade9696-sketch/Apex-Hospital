export interface BookedAppointment {
  id: string;
  token: string;
  departmentId: string;
  departmentName: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorRoom: string;
  consultationFee: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  patientAge: string;
  patientGender: string;
  patientType: 'new' | 'existing';
  uhid?: string;
  chiefComplaint: string;
  emergencyContact?: string;
  createdAt: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

const STORAGE_KEY = 'apex_hospital_appointments';

export function getStoredAppointments(): BookedAppointment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read appointments from localStorage', e);
    return [];
  }
}

export function saveAppointment(appointment: BookedAppointment): void {
  try {
    const existing = getStoredAppointments();
    const updated = [appointment, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save appointment to localStorage', e);
  }
}

export function cancelAppointment(id: string): void {
  try {
    const existing = getStoredAppointments();
    const updated = existing.map((app) =>
      app.id === id ? { ...app, status: 'Cancelled' as const } : app
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to cancel appointment', e);
  }
}
