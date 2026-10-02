import React, { useState } from 'react';
import {
  HeartPulse,
  Brain,
  Activity,
  ShieldCheck,
  Stethoscope,
  Crosshair,
  Baby,
  Ambulance,
  Wind,
  HeartHandshake,
  ArrowRight,
  Bed,
  Sparkles
} from 'lucide-react';
import { DEPARTMENTS, Department } from '../data/departments';

interface DepartmentsShowcaseProps {
  onSelectDepartment: (deptId: string) => void;
  onViewAllDepartments: () => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
}

export const DepartmentsShowcase: React.FC<DepartmentsShowcaseProps> = ({
  onSelectDepartment,
  onViewAllDepartments,
  onOpenAppointment
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Super Specialty',
    'Surgical Specialty',
    'Clinical Specialty',
    'Diagnostic & Critical Care'
  ];

  const filteredDepts =
    selectedCategory === 'All'
      ? DEPARTMENTS
      : DEPARTMENTS.filter((d) => d.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-sky-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-indigo-600" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-cyan-600" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-pink-600" />;
      case 'Ambulance':
        return <Ambulance className="w-6 h-6 text-red-600" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-blue-600" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              <span>Centers of Clinical Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Departments & Institutes
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Equipped with modern medical technologies, laminar air-flow surgical suites, and staffed by distinguished faculty offering both routine outpatient consultations and complex tertiary surgeries.
            </p>
          </div>

          <button
            onClick={onViewAllDepartments}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-cyan-800 bg-white hover:bg-cyan-50 border border-cyan-200 rounded-xl shadow-sm transition-colors self-start md:self-end cursor-pointer"
          >
            <span>View All 42 Departments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.slice(0, 6).map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(dept.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {dept.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-cyan-700 font-medium mt-1">
                  {dept.tagline}
                </p>
                <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {dept.shortDescription}
                </p>

                {/* Key Services Pill List */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Procedures:
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {dept.keyServices.slice(0, 3).map((serv, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-cyan-600 font-bold">·</span>
                        <span className="truncate">{serv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Bed className="w-3.5 h-3.5 text-slate-400" />
                  <span>{dept.bedCount} Beds</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectDepartment(dept.id)}
                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 transition-colors cursor-pointer"
                  >
                    View Details →
                  </button>
                  <button
                    onClick={() => onOpenAppointment(undefined, dept.id)}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Book OPD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
