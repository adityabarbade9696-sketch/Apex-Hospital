import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building,
  Navigation
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Inquiries',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in your name, contact phone number, and inquiry message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            <Building className="w-3.5 h-3.5" />
            <span>Campus Location & Direct Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Apex Memorial Hospital
          </h2>
          <p className="text-slate-600 text-sm">
            Conveniently situated in central Pune near major railway and bus transit hubs. Our patient relations desks are staffed around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Campus Info, Phones & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Hospital Address</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  489 Sardar Patel Road, Rasta Peth, Pune – 411011, Maharashtra, India.
                </p>
                <div className="mt-2 text-[11px] text-slate-500">
                  Landmark: 1.2 km from Pune Central Railway Station
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm mb-1">
                  <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Operational Timings</span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong>Emergency:</strong> 24 Hours, 365 Days</div>
                  <div><strong>OPD Consults:</strong> 08:00 AM – 08:00 PM</div>
                  <div><strong>Visiting Hours:</strong> 04:30 PM – 07:00 PM</div>
                </div>
              </div>
            </div>

            {/* Direct Telephone Extensions Strip */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                Quick Department Hotlines
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-slate-800/80">
                  <span className="text-slate-300">Central Helpdesk:</span>
                  <a href="tel:+912026124000" className="font-bold text-cyan-300 hover:underline">
                    (020) 2612-4000
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-800/80">
                  <span className="text-slate-300">OPD Appointments:</span>
                  <a href="tel:+912026124010" className="font-bold text-cyan-300 hover:underline">
                    (020) 2612-4010
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-800/80">
                  <span className="text-slate-300">Blood Bank 24x7:</span>
                  <a href="tel:+912026124050" className="font-bold text-rose-300 hover:underline">
                    (020) 2612-4050
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-800/80">
                  <span className="text-slate-300">TPA Insurance Desk:</span>
                  <a href="tel:+912026124090" className="font-bold text-emerald-300 hover:underline">
                    (020) 2612-4090
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Campus Map Container */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center mx-auto">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Apex Memorial Main Medical Campus
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Spanning 14 acres with dedicated Multi-Level Parking, Blood Bank, and Outpatient Wings
                </p>
              </div>
              <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs">
                <span className="px-2.5 py-1 bg-white rounded border border-slate-200 text-slate-700">
                  Gate 1: Emergency & Trauma
                </span>
                <span className="px-2.5 py-1 bg-white rounded border border-slate-200 text-slate-700">
                  Gate 2: OPD & Diagnostic Center
                </span>
                <span className="px-2.5 py-1 bg-white rounded border border-slate-200 text-slate-700">
                  Gate 3: Medical College & Academics
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Patient Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Inquiry Successfully Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Apex Memorial Hospital. Our patient relations coordinator will review your query and contact you within 2 to 4 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        department: 'General Inquiries',
                        message: ''
                      });
                    }}
                    className="px-5 py-2 text-xs font-bold text-cyan-800 bg-white border border-cyan-200 rounded-lg shadow-xs hover:bg-cyan-50 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Patient Inquiry & Feedback Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For non-emergency questions, tariff estimates, or specialist advice
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh K. Deshmukh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Department of Interest
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                    >
                      <option value="General Inquiries">General Helpdesk</option>
                      <option value="Cardiology">Cardiology & Cath Lab</option>
                      <option value="Neurology">Neurology & Brain Spine</option>
                      <option value="Oncology">Apex Cancer Institute</option>
                      <option value="Orthopedics">Orthopedics & Joint Replacement</option>
                      <option value="Gastroenterology">Gastroenterology & Endoscopy</option>
                      <option value="Nephrology">Nephrology & Dialysis</option>
                      <option value="Pediatrics">Pediatrics & NICU</option>
                      <option value="TPA Insurance">Cashless Insurance / Mediclaim</option>
                      <option value="Billing & Tariffs">Billing & Packages</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Question or Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your medical question, requested appointment timeframe, or inquiry details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message to Patient Relations</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
