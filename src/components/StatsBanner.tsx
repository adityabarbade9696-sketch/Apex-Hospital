import React from 'react';
import { Building, Users, BedDouble, Stethoscope, HeartHandshake, Award } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      value: '82+',
      label: 'Years of Healing',
      detail: 'Serving the nation since 1944',
      icon: Award
    },
    {
      value: '1,850',
      label: 'Inpatient Beds',
      detail: 'Including 180+ specialized ICU beds',
      icon: BedDouble
    },
    {
      value: '42',
      label: 'Academic Specialties',
      detail: 'Quaternary medical & surgical centers',
      icon: Building
    },
    {
      value: '450+',
      label: 'Distinguished Consultants',
      detail: 'Board-certified medical specialists',
      icon: Stethoscope
    },
    {
      value: '1.2M+',
      label: 'Annual Outpatients',
      detail: 'Compassionate, ethical clinical care',
      icon: Users
    },
    {
      value: '48,000+',
      label: 'Surgeries Handled Annually',
      detail: 'Zero-infection robotic & general theaters',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="w-full bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="space-y-1.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                <div className="flex justify-center mb-1">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-cyan-300">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
