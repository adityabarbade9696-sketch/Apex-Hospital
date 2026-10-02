import React from 'react';
import {
  ShieldCheck,
  Heart,
  Award,
  Users,
  Building,
  CheckCircle2,
  Calendar,
  Bed,
  Stethoscope,
  GraduationCap
} from 'lucide-react';
import { HOSPITAL_IMAGES } from '../data/assets';

interface AboutViewProps {
  onOpenAppointment: () => void;
  onNavigate: (view: string, detailId?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenAppointment, onNavigate }) => {
  const leadership = [
    {
      name: 'Dr. Sharadchandra P. Oak',
      role: 'President & Managing Trustee',
      qualifications: 'MS, FRCS (Eng), D.Sc (Hon)',
      bio: 'Leading the Apex Memorial Trust for over 22 years, steering massive infrastructure expansion and preserving the hospital’s founding charitable mission.'
    },
    {
      name: 'Dr. Anand K. Varma',
      role: 'Medical Director & Chief of Cardiology',
      qualifications: 'MD, DM (Cardiology), FACC',
      bio: 'Renowned interventional cardiologist overseeing clinical governance, clinical safety guidelines, and multi-specialty clinical audits.'
    },
    {
      name: 'Dr. Sunita V. Chordia',
      role: 'Dean, Apex Medical College & Research Institute',
      qualifications: 'MD (Pediatrics), DCH, FIAP',
      bio: 'Directs undergraduate MBBS and postgraduate DNB education, residency curricula, and academic partnerships.'
    },
    {
      name: 'Mrs. Philomena D’Souza',
      role: 'Chief Nursing Superintendent',
      qualifications: 'M.Sc Nursing, Critical Care Specialist',
      bio: 'Leads our dedicated force of 1,200+ registered nurses ensuring compassionate, patient-centered clinical nursing standards.'
    }
  ];

  const milestones = [
    { year: '1944', title: 'Founding Dispensary', desc: 'Established as a 12-bed charitable clinic to treat underprivileged citizens in Pune.' },
    { year: '1968', title: 'Teaching Hospital Status', desc: 'Recognized as an accredited medical teaching hospital affiliated with the state health university.' },
    { year: '1985', title: 'Specialty Expansion', desc: 'Inauguration of modern cardiac catheterization lab and Western Maharashtra’s first pediatric ICU.' },
    { year: '2012', title: 'NABH Full Accreditation', desc: 'Attained National Accreditation Board for Hospitals & Healthcare Providers certification.' },
    { year: '2024', title: 'Robotic Surgery & Trauma Center', desc: 'Commissioned the Da Vinci Xi robotic suite and expanded to 1,850 beds with Level-1 Trauma readiness.' }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Institutional Heritage & Governance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About Apex Memorial Teaching Hospital
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Eight decades of unrelenting medical excellence, ethical clinical care, and academic distinction. Serving our community as an autonomous charitable institution.
          </p>
        </div>
      </div>

      {/* Main Narrative & History */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Journey Since 1944
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Apex Memorial Hospital was founded in 1944 during a pivotal era in Indian history,
              born out of a visionary conviction: that world-class medical science and human
              compassion must belong to every citizen regardless of socio-economic status.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              From our humble beginnings with 12 inpatient beds and a single dispensary, Apex Memorial
              has flourished into a massive 1,850-bed quaternary referral hospital, medical college,
              and research institute. Today, over 65% of our hospital beds remain subsidized or free
              of charge, supported by charitable trusts and corporate philanthropic endowments.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xl font-bold text-cyan-800 font-mono block">1,850</span>
                <span className="text-slate-600">Total Inpatient Beds</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xl font-bold text-cyan-800 font-mono block">1.2M+</span>
                <span className="text-slate-600">Annual Outpatients Treated</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={HOSPITAL_IMAGES.heroCampus}
                alt="Apex Memorial Hospital Historical Campus"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-700 text-white flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-cyan-950">Our Mission</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              To deliver compassionate, comprehensive, and evidence-grounded healthcare with uncompromised clinical ethics; training the next generation of physicians, nurses, and allied health professionals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-sky-950">Our Vision</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              To be nationally and globally acclaimed as a beacon of clinical mastery, state-of-the-art technological adoption, and impactful translational biomedical research for community wellbeing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-teal-950">Our Core Values</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Integrity, Empathy, Academic Excellence, Social Equity, Patient Safety, and Zero Tolerance for commercialized overtreatment.
            </p>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Eight Decades of Milestones
            </h3>
            <p className="text-xs text-slate-500">
              Tracing our expansion from a pre-independence dispensary to a high-technology teaching center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-lg font-extrabold text-cyan-800 font-mono block">
                    {m.year}
                  </span>
                  <div className="text-xs font-bold text-slate-900 mt-1">{m.title}</div>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Governing Board */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Medical Leadership & Governing Council
            </h3>
            <p className="text-xs text-slate-500">
              Steering clinical governance, medical education, and quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-shadow space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  {leader.name.split(' ')[1]?.[0] || 'L'}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {leader.name}
                  </h4>
                  <p className="text-xs text-cyan-800 font-semibold">{leader.role}</p>
                  <p className="text-[10px] text-slate-500">{leader.qualifications}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
