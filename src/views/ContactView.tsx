import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building,
  Navigation,
  Car,
  Train,
  Plane
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Inquiries',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const extensions = [
    { name: 'Emergency & Red-Zone Trauma', phone: '1066 / (020) 2612-4000', timing: '24/7 Operational' },
    { name: 'Blood Bank & Apheresis', phone: '+91 (020) 2612-4050', timing: '24/7 Operational' },
    { name: 'Central OPD Appointment Desk', phone: '+91 (020) 2612-4010', timing: '08:00 AM – 08:00 PM' },
    { name: 'Cashless Mediclaim & TPA Helpdesk', phone: '+91 (020) 2612-4090', timing: '24/7 Desk' },
    { name: 'Radiology & Imaging (MRI/CT)', phone: '+91 (020) 2612-4020', timing: '24/7 Inpatient / 8am-8pm OPD' },
    { name: 'Medical Social Worker (Charitable Desk)', phone: '+91 (020) 2612-4075', timing: '09:00 AM – 05:00 PM' },
    { name: 'Dean’s Office / Medical College', phone: '+91 (020) 2612-4500', timing: '09:30 AM – 05:30 PM' },
    { name: 'College of Nursing Office', phone: '+91 (020) 2612-4550', timing: '09:30 AM – 05:30 PM' }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <Building className="w-3.5 h-3.5" />
            <span>Campus Location & Direct Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact Apex Memorial Hospital
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Direct hotlines, transit directions, department extensions, and patient relations desk contact information.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Contact Form & Main Campus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Main Medical Campus & Postal Address
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Apex Memorial Teaching Hospital & Research Centre</strong>
                    489 Sardar Patel Road, Rasta Peth, Near Railway Terminus,<br />
                    Pune – 411011, Maharashtra, India.
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-700 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Board Exchange:</strong> +91 (020) 2612-4000 (30 Lines)
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-700 shrink-0" />
                  <div>
                    <strong className="text-slate-900">General Inquiries:</strong> info@apexmemorialhospital.org
                  </div>
                </div>
              </div>
            </div>

            {/* How to Reach Us */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                How to Reach Our Medical Campus
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Train className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">From Pune Central Railway Station (1.2 km):</strong>
                    5 minutes by auto-rickshaw or taxi via Sassoon Road / Station Road.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">From Swargate Central Bus Terminus (3.8 km):</strong>
                    12 minutes via Shivaji Road / Nana Peth. Multi-level car parking available at Gate 2.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">From Pune International Airport (Lohegaon - 10.5 km):</strong>
                    25 to 35 minutes via Airport Road / Sangamwadi.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Message Received</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {formData.name}. Our patient welfare and public relations office will attend to your query promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 text-xs font-bold text-cyan-800 bg-cyan-50 rounded-lg cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Send a Message to Patient Relations
                </h3>
                <p className="text-xs text-slate-500">
                  For inquiries, general hospital questions, or feedback
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Shinde"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98220 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Department of Concern
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                    >
                      <option value="General Inquiries">General Helpdesk</option>
                      <option value="OPD Appointments">OPD Appointments</option>
                      <option value="Cashless TPA">Cashless Mediclaim & Insurance</option>
                      <option value="Billing & Discharge">Billing & Accounts</option>
                      <option value="Medical Records">Medical Records / UHID</option>
                      <option value="Grievance">Patient Welfare Grievance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Query *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your query or requested assistance..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Directory Extension Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/80">
            <h3 className="text-base font-bold text-slate-900">
              Department Direct Extension Directory
            </h3>
            <p className="text-xs text-slate-500">
              Direct telephone connections for rapid patient assistance
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {extensions.map((ext, idx) => (
              <div
                key={idx}
                className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900">{ext.name}</div>
                  <div className="text-[11px] text-slate-500">{ext.timing}</div>
                </div>
                <a
                  href={`tel:${ext.phone.split(' ')[0]}`}
                  className="text-xs font-bold text-cyan-800 hover:text-cyan-900 font-mono"
                >
                  {ext.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
