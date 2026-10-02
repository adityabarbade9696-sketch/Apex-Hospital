import React from 'react';
import {
  Ambulance,
  ScanLine,
  Droplet,
  Cpu,
  ShieldAlert,
  HeartHandshake,
  Activity,
  Sparkles,
  ArrowRight,
  Clock,
  Phone
} from 'lucide-react';
import { HOSPITAL_SERVICES, HospitalService } from '../data/services';

interface ServicesGridProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenAppointment: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onNavigate,
  onOpenAppointment
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Ambulance':
        return <Ambulance className="w-5 h-5 text-rose-600" />;
      case 'ScanLine':
        return <ScanLine className="w-5 h-5 text-sky-600" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-red-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
            <span>Comprehensive Hospital Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Hospital Services & 24/7 Facilities
          </h2>
          <p className="text-slate-600 text-sm">
            Supporting exceptional medical outcomes through integrated critical care units, round-the-clock emergency diagnostics, regional blood transfusion banking, and modern day-care infusion lounges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="rounded-2xl border border-slate-200/90 p-5 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getIcon(serv.iconName)}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider">
                    {serv.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {serv.title}
                </h3>
                <p className="text-xs text-cyan-700 font-medium mt-1">
                  {serv.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {serv.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/60 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{serv.timing}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span className="truncate">{serv.contactExtension}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-cyan-800 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Facility Guidelines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
