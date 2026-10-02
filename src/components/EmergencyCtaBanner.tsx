import React from 'react';
import { AlertCircle, Phone, Ambulance, ShieldAlert, Clock, ArrowRight } from 'lucide-react';

interface EmergencyCtaBannerProps {
  onOpenAppointment: () => void;
  onNavigate: (view: string, detailId?: string) => void;
}

export const EmergencyCtaBanner: React.FC<EmergencyCtaBannerProps> = ({
  onOpenAppointment,
  onNavigate
}) => {
  return (
    <section className="bg-gradient-to-r from-rose-950 via-slate-900 to-slate-950 text-white py-14 border-y border-rose-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Emergency Alert Info */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-950/80 px-3 py-1 rounded-full border border-rose-800">
              <AlertCircle className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>24/7 Level-1 Emergency & Trauma Care</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Medical Emergency? Every Second Saves Heart & Brain
            </h2>

            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Our 50-bed Emergency & Resuscitation Center has dedicated red-zone crash carts,
              on-floor 128-slice CT scanner, round-the-clock cath lab readiness, and a GPS-linked
              cardiac ambulance fleet.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Zero Admission Paperwork Delay in Red Zone</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>Door-to-Balloon &lt; 50 Mins</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Ambulance className="w-4 h-4 text-rose-400" />
                <span>Mobile ICU Ambulances with Doctor on Board</span>
              </div>
            </div>
          </div>

          {/* Emergency CTA Action Card */}
          <div className="lg:col-span-4 bg-rose-900/40 border border-rose-700/60 rounded-2xl p-6 backdrop-blur-sm text-center space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-rose-200">
              Direct Emergency Hotline
            </span>

            <div>
              <a
                href="tel:1066"
                className="text-3xl sm:text-4xl font-extrabold text-white hover:text-rose-300 transition-colors block font-mono"
              >
                1066
              </a>
              <a
                href="tel:+912026124000"
                className="text-sm font-semibold text-rose-200 hover:underline block mt-1"
              >
                +91 (020) 2612-4000
              </a>
            </div>

            <p className="text-[11px] text-rose-200/80">
              Operated 24 Hours, 365 Days a Year. Immediate ambulance dispatch to any location in metropolitan area.
            </p>

            <div className="pt-1">
              <button
                onClick={() => onNavigate('department-detail', 'emergency-trauma')}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Ambulance className="w-4 h-4" />
                <span>Emergency Directions & Protocol</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
