import React, { useState } from 'react';
import {
  Sparkles,
  Clock,
  Phone,
  CheckCircle2,
  Ambulance,
  ScanLine,
  Droplet,
  Cpu,
  ShieldAlert,
  HeartHandshake,
  Activity,
  Calendar
} from 'lucide-react';
import { HOSPITAL_SERVICES } from '../data/services';

interface ServicesViewProps {
  onOpenAppointment: () => void;
  onNavigate: (view: string, detailId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenAppointment, onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = [
    'All',
    'Critical Care',
    'Diagnostics & Imaging',
    'Surgical & Procedural',
    'Support & Special Units'
  ];

  const filtered =
    selectedCat === 'All'
      ? HOSPITAL_SERVICES
      : HOSPITAL_SERVICES.filter((s) => s.category === selectedCat);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Ambulance':
        return <Ambulance className="w-6 h-6 text-rose-600" />;
      case 'ScanLine':
        return <ScanLine className="w-6 h-6 text-sky-600" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-red-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-teal-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Clinical & Diagnostic Units</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Hospital Services, Diagnostics & Critical Care
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            Supporting exceptional clinical outcomes with modern diagnostic imaging, 180+ critical care beds, certified regional blood bank, and robotic operating rooms.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-200/90 flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((serv) => (
            <div
              key={serv.id}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(serv.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {serv.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {serv.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-800 mt-1">
                  {serv.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {serv.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Features & Protocols:
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {serv.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1 text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-700" />
                    <span>{serv.timing}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-700" />
                    <span>{serv.contactExtension}</span>
                  </div>
                </div>

                <button
                  onClick={onOpenAppointment}
                  className="px-4 py-2 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer self-start sm:self-auto"
                >
                  Consult Specialist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
