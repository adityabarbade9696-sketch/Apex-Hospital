import React from 'react';
import {
  Calendar,
  UserSearch,
  AlertCircle,
  Building2,
  FileText,
  CreditCard
} from 'lucide-react';

interface QuickAccessBarProps {
  onOpenAppointment: () => void;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenPortal: () => void;
}

export const QuickAccessBar: React.FC<QuickAccessBarProps> = ({
  onOpenAppointment,
  onNavigate,
  onOpenPortal
}) => {
  const quickActions = [
    {
      title: 'Book Appointment',
      subtitle: 'Instant OPD Confirmation',
      icon: Calendar,
      color: 'bg-cyan-700 text-white hover:bg-cyan-800',
      iconBg: 'bg-white/10 text-white',
      action: () => onOpenAppointment()
    },
    {
      title: 'Find a Doctor',
      subtitle: '450+ Renowned Specialists',
      icon: UserSearch,
      color: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200',
      iconBg: 'bg-cyan-50 text-cyan-700',
      action: () => onNavigate('doctors')
    },
    {
      title: '24/7 Emergency & Trauma',
      subtitle: 'Immediate Level-1 Response',
      icon: AlertCircle,
      color: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200',
      iconBg: 'bg-rose-50 text-rose-600',
      action: () => onNavigate('department-detail', 'emergency-trauma')
    },
    {
      title: 'Clinical Departments',
      subtitle: 'Explore 42 Specialties',
      icon: Building2,
      color: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200',
      iconBg: 'bg-sky-50 text-sky-700',
      action: () => onNavigate('departments')
    },
    {
      title: 'Patient Portal & Reports',
      subtitle: 'Download Diagnostics',
      icon: FileText,
      color: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200',
      iconBg: 'bg-teal-50 text-teal-700',
      action: () => onOpenPortal()
    },
    {
      title: 'Cashless Mediclaim & TPA',
      subtitle: '35+ Empanelled Insurers',
      icon: CreditCard,
      color: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200',
      iconBg: 'bg-amber-50 text-amber-700',
      action: () => onNavigate('patient-info')
    }
  ];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-10 sm:-mt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {quickActions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={item.action}
              className={`p-4 rounded-xl shadow-lg transition-all duration-200 flex flex-col items-start justify-between min-h-[120px] text-left cursor-pointer transform hover:-translate-y-1 ${item.color}`}
            >
              <div className={`p-2.5 rounded-lg ${item.iconBg}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="mt-3">
                <div className="text-xs sm:text-sm font-bold leading-tight">
                  {item.title}
                </div>
                <div className="text-[11px] opacity-75 mt-0.5 truncate max-w-[130px]">
                  {item.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
