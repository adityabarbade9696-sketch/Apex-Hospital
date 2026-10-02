import React, { useState } from 'react';
import { Briefcase, CheckCircle, Send, MapPin, Clock, Award } from 'lucide-react';

export const CareersView: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    qualification: '',
    coverNote: ''
  });
  const [applied, setApplied] = useState(false);

  const jobs = [
    {
      id: 'job-1',
      title: 'Associate Professor / Senior Consultant - Cardiology',
      department: 'Department of Cardiology & Cath Lab',
      experience: '5+ years post-DM / DNB Cardiology',
      openings: 2,
      type: 'Full-Time Academic & Clinical'
    },
    {
      id: 'job-2',
      title: 'Senior Resident - Emergency Medicine & Trauma',
      department: 'Emergency & Level-1 Trauma Centre',
      experience: 'MD / DNB / MEM in Emergency Medicine',
      openings: 4,
      type: 'Full-Time Rotational Shifts'
    },
    {
      id: 'job-3',
      title: 'ICU Staff Nurse (Critical Care / NICU)',
      department: 'Intensive Care Directorate',
      experience: 'B.Sc Nursing / GNM with 2+ years ICU experience',
      openings: 15,
      type: 'Full-Time Shift Duty'
    },
    {
      id: 'job-4',
      title: 'Senior Medical Physicist & Radiation Safety Officer',
      department: 'Apex Cancer Institute & Radiotherapy',
      experience: 'M.Sc Medical Physics + AERB Certification',
      openings: 1,
      type: 'Full-Time'
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Human Resources & Medical Recruitment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Careers at Apex Memorial Teaching Hospital
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Join one of Western India's most prestigious academic healthcare institutions. Work alongside distinguished professors, mentors, and clinicians dedicated to ethical healing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Job List */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Current Faculty & Clinical Openings
            </h2>

            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:border-cyan-600 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                    <p className="text-xs font-semibold text-cyan-800">{job.department}</p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 shrink-0">
                    {job.openings} Openings
                  </span>
                </div>

                <div className="text-xs text-slate-500 space-y-1">
                  <div><strong>Required Qualification:</strong> {job.experience}</div>
                  <div><strong>Engagement:</strong> {job.type}</div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedJob(job.title);
                      setApplied(false);
                    }}
                    className="px-4 py-2 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
                  >
                    Apply for this Role
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            {applied ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Application Submitted</h3>
                <p className="text-xs text-slate-600">
                  Thank you, {applicant.name}. Our Medical Superintendent’s HR Directorate will review your curriculum vitae and contact shortlisted candidates for clinical interview.
                </p>
                <button
                  onClick={() => setApplied(false)}
                  className="mt-3 px-4 py-2 text-xs font-bold text-cyan-800 bg-cyan-50 rounded-lg hover:bg-cyan-100 cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  {selectedJob ? `Applying for: ${selectedJob}` : 'Direct Talent Application'}
                </h3>
                <p className="text-xs text-slate-500">
                  Submit your professional credentials to the HR Selection Committee
                </p>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh M. Shinde"
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="doctor@example.com"
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={applicant.phone}
                      onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Highest Medical / Nursing Degree & Council Reg. No *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. MD General Medicine, MMC Reg No. 2014/05/1820"
                    value={applicant.qualification}
                    onChange={(e) => setApplicant({ ...applicant, qualification: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Brief Statement of Clinical Experience & Interests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Summarize your clinical rotations, research papers, or procedural proficiencies..."
                    value={applicant.coverNote}
                    onChange={(e) => setApplicant({ ...applicant, coverNote: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application to HR</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
