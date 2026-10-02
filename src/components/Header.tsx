import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  Search,
  Menu,
  X,
  ChevronDown,
  AlertCircle,
  FileText,
  Calendar,
  UserCheck,
  Shield,
  Heart,
  Droplet
} from 'lucide-react';
import { DEPARTMENTS } from '../data/departments';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
  onOpenSearch: () => void;
  onOpenPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenAppointment,
  onOpenSearch,
  onOpenPortal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, detailId?: string) => {
    onNavigate(view, detailId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  };

  const toggleMobileSubmenu = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <header className="w-full relative z-40">
      {/* Top Utility Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
          {/* Emergency & Helpline Contact Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="tel:1066"
              className="flex items-center gap-1.5 font-bold text-rose-400 hover:text-rose-300 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>24/7 Emergency: 1066 / +91 (020) 2612-4000</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href="tel:+912026124050"
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Droplet className="w-3 h-3 text-red-400" />
              <span>Blood Centre 24x7: (020) 2612-4050</span>
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <div className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>OPD Registration: 08:00 AM – 08:00 PM</span>
            </div>
          </div>

          {/* Quick Access Utility Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Patient Portal / Lab Reports</span>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Location & Campus Map
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation Bar */}
      <div
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled
            ? 'sticky top-0 shadow-md border-b border-slate-200 py-2.5'
            : 'border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          {/* Hospital Crest & Brand Lockup */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left cursor-pointer group"
          >
            {/* Medical Shield Crest Emblem */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-900 via-sky-800 to-teal-700 flex items-center justify-center text-white shadow-sm ring-1 ring-cyan-900/10 group-hover:scale-105 transition-transform shrink-0">
              <div className="relative flex items-center justify-center">
                <Shield className="w-7 h-7 text-cyan-100" />
                <Heart className="w-3.5 h-3.5 text-rose-400 absolute fill-rose-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                  APEX MEMORIAL
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 px-1.5 py-0.5 rounded">
                  Estd. 1944
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-wide">
                Teaching Hospital & Medical Research Centre
              </p>
              <p className="text-[10px] text-slate-600 hidden md:block">
                1,850 Beds · NABH & NABL Accredited Quaternary Referral Center
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-semibold text-slate-700">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'home'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  currentView === 'about'
                    ? 'text-cyan-800 bg-cyan-50'
                    : 'hover:text-cyan-800 hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Hospital Overview & Heritage (1944)
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Mission, Vision & Core Values
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Governing Board & Medical Leadership
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Accreditations (NABH & NABL)
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Clinical Infrastructure & Campus Tour
                  </button>
                </div>
              )}
            </div>

            {/* Departments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('departments')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('departments')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  currentView.startsWith('department')
                    ? 'text-cyan-800 bg-cyan-50'
                    : 'hover:text-cyan-800 hover:bg-slate-50'
                }`}
              >
                <span>Departments</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'departments' && (
                <div className="absolute top-full -left-20 w-[520px] bg-white rounded-lg shadow-xl border border-slate-200 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-900">
                      Centers of Clinical Excellence
                    </span>
                    <button
                      onClick={() => handleNavClick('departments')}
                      className="text-xs font-semibold text-cyan-700 hover:underline cursor-pointer"
                    >
                      View All 42 Departments →
                    </button>
                  </div>
                  {DEPARTMENTS.slice(0, 8).map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => handleNavClick('department-detail', dept.id)}
                      className="text-left px-3 py-2 rounded-md text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-900 transition-colors cursor-pointer"
                    >
                      <div className="font-semibold text-slate-900">{dept.name}</div>
                      <div className="text-[11px] text-slate-500 truncate">{dept.tagline}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Appointments */}
            <button
              onClick={() => handleNavClick('book-appointment')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'book-appointment'
                  ? 'text-cyan-800 bg-cyan-50 font-bold'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Appointments
            </button>

            {/* Doctors */}
            <button
              onClick={() => handleNavClick('doctors')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'doctors'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Doctors
            </button>

            {/* Services */}
            <button
              onClick={() => handleNavClick('services')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'services'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Services
            </button>

            {/* Patient Info Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('patient-info')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('patient-info')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                  currentView === 'patient-info'
                    ? 'text-cyan-800 bg-cyan-50'
                    : 'hover:text-cyan-800 hover:bg-slate-50'
                }`}
              >
                <span>Patient Info</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'patient-info' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    OPD Registration & Timings
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Admission & Inpatient Guidelines
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Cashless Mediclaim & TPA Partners
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Room Tariffs & Amenities
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Visiting Hours & Passes
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-cyan-50 hover:text-cyan-800 cursor-pointer"
                  >
                    Patient Rights & Responsibilities
                  </button>
                </div>
              )}
            </div>

            {/* Academics & Research */}
            <button
              onClick={() => handleNavClick('academics')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'academics'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Academics & Research
            </button>

            {/* News & Events */}
            <button
              onClick={() => handleNavClick('news-events')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'news-events'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              News & Events
            </button>

            {/* Health Articles */}
            <button
              onClick={() => handleNavClick('health-articles')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'health-articles'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Health Articles
            </button>

            {/* Careers */}
            <button
              onClick={() => handleNavClick('careers')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'careers'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Careers
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
                currentView === 'contact'
                  ? 'text-cyan-800 bg-cyan-50'
                  : 'hover:text-cyan-800 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              title="Search Doctors, Departments, Services"
              className="p-2 text-slate-600 hover:text-cyan-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Search website"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Primary Book Appointment CTA Button */}
            <button
              onClick={() => onOpenAppointment()}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-cyan-700 to-sky-700 hover:from-cyan-800 hover:to-sky-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 max-h-[85vh] overflow-y-auto space-y-3 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navigation Menu
            </span>
            <button
              onClick={() => {
                onOpenAppointment();
                setMobileMenuOpen(false);
              }}
              className="w-full sm:w-auto ml-2 flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-cyan-700 rounded-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          <div className="space-y-1 text-sm font-semibold text-slate-800">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              Home
            </button>

            {/* About Accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('about')}
                className="w-full flex items-center justify-between py-2 px-2 hover:bg-slate-50 rounded text-left"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedSection === 'about' ? 'rotate-180 text-cyan-700' : ''
                  }`}
                />
              </button>
              {mobileExpandedSection === 'about' && (
                <div className="pl-4 space-y-1 py-1 text-xs text-slate-600 border-l-2 border-cyan-100 ml-2">
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left py-1.5 hover:text-cyan-800 block"
                  >
                    Hospital Heritage & Overview
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left py-1.5 hover:text-cyan-800 block"
                  >
                    Board of Trustees & Leadership
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left py-1.5 hover:text-cyan-800 block"
                  >
                    Accreditations & Quality Milestones
                  </button>
                </div>
              )}
            </div>

            {/* Departments Accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('departments')}
                className="w-full flex items-center justify-between py-2 px-2 hover:bg-slate-50 rounded text-left"
              >
                <span>Departments & Specialties</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedSection === 'departments' ? 'rotate-180 text-cyan-700' : ''
                  }`}
                />
              </button>
              {mobileExpandedSection === 'departments' && (
                <div className="pl-4 space-y-1 py-1 text-xs text-slate-600 border-l-2 border-cyan-100 ml-2">
                  <button
                    onClick={() => handleNavClick('departments')}
                    className="w-full text-left py-1.5 font-bold text-cyan-800 block"
                  >
                    View All 42 Departments →
                  </button>
                  {DEPARTMENTS.slice(0, 6).map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => handleNavClick('department-detail', dept.id)}
                      className="w-full text-left py-1.5 hover:text-cyan-800 block"
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('book-appointment')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded text-cyan-800 font-bold"
            >
              Book OPD Appointment
            </button>

            <button
              onClick={() => handleNavClick('doctors')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              Doctors & Consultants
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              Hospital Services & 24/7 Units
            </button>

            {/* Patient Info Accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu('patient-info')}
                className="w-full flex items-center justify-between py-2 px-2 hover:bg-slate-50 rounded text-left"
              >
                <span>Patient Information</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileExpandedSection === 'patient-info' ? 'rotate-180 text-cyan-700' : ''
                  }`}
                />
              </button>
              {mobileExpandedSection === 'patient-info' && (
                <div className="pl-4 space-y-1 py-1 text-xs text-slate-600 border-l-2 border-cyan-100 ml-2">
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left py-1.5 hover:text-cyan-800 block"
                  >
                    OPD Registration & Timings
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left py-1.5 hover:text-cyan-800 block"
                  >
                    Admission & Inpatient Guidelines
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left py-1.5 hover:text-cyan-800 block"
                  >
                    Cashless Insurance & TPA Desk
                  </button>
                  <button
                    onClick={() => handleNavClick('patient-info')}
                    className="w-full text-left py-1.5 hover:text-cyan-800 block"
                  >
                    Visiting Hours & Rules
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('academics')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              Academics & Research (Medical College)
            </button>

            <button
              onClick={() => handleNavClick('news-events')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              News & Events
            </button>

            <button
              onClick={() => handleNavClick('health-articles')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              Health Articles & Awareness
            </button>

            <button
              onClick={() => handleNavClick('careers')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              Careers & Faculty Openings
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-2 px-2 hover:bg-slate-50 rounded"
            >
              Contact Us & Directions
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onOpenPortal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 px-3 text-center text-xs font-semibold text-cyan-800 bg-cyan-50 rounded-lg"
            >
              Patient Portal / Download Lab Reports
            </button>
            <a
              href="tel:1066"
              className="w-full py-2 px-3 flex items-center justify-center gap-2 text-xs font-bold text-white bg-rose-600 rounded-lg"
            >
              <AlertCircle className="w-4 h-4" />
              <span>Call Emergency: 1066</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
