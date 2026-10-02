import React, { useState } from 'react';
import {
  Search,
  Building,
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
  Bed
} from 'lucide-react';
import { DEPARTMENTS, Department } from '../data/departments';

interface DepartmentsViewProps {
  onSelectDepartment: (deptId: string) => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
}

export const DepartmentsView: React.FC<DepartmentsViewProps> = ({
  onSelectDepartment,
  onOpenAppointment
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Super Specialty',
    'Surgical Specialty',
    'Clinical Specialty',
    'Diagnostic & Critical Care'
  ];

  const filtered = DEPARTMENTS.filter((d) => {
    const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.tagline.toLowerCase().includes(search.toLowerCase()) ||
      d.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      d.keyServices.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

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
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
            <Building className="w-3.5 h-3.5" />
            <span>42 Clinical, Surgical & Diagnostic Disciplines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Hospital Departments & Centers of Excellence
          </h1>
          <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
            From round-the-clock emergency catheterization to robotic minimally invasive surgeries and pediatric neonatology, explore our clinical departments staffed by distinguished medical faculty.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Live Search */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by department name, procedure, or test..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-slate-50/50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-xs">
            No departments found matching "{search}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getIcon(dept.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
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

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Services:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {dept.keyServices.slice(0, 3).map((serv, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-cyan-600 font-bold">·</span>
                          <span className="truncate">{serv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Bed className="w-3.5 h-3.5 text-slate-400" />
                    <span>{dept.bedCount} Beds</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDepartment(dept.id)}
                      className="text-xs font-bold text-cyan-700 hover:text-cyan-900 cursor-pointer"
                    >
                      View Details →
                    </button>
                    <button
                      onClick={() => onOpenAppointment(undefined, dept.id)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
                    >
                      Book OPD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
