import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { DepartmentsView } from './views/DepartmentsView';
import { DepartmentDetailView } from './views/DepartmentDetailView';
import { DoctorsView } from './views/DoctorsView';
import { ServicesView } from './views/ServicesView';
import { PatientInfoView } from './views/PatientInfoView';
import { AcademicsView } from './views/AcademicsView';
import { NewsEventsView } from './views/NewsEventsView';
import { HealthArticlesView } from './views/HealthArticlesView';
import { CareersView } from './views/CareersView';
import { ContactView } from './views/ContactView';
import { AppointmentBookingView } from './views/AppointmentBookingView';

// Modals
import { AppointmentModal } from './components/AppointmentModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { PatientPortalModal } from './components/PatientPortalModal';
import { DoctorProfileModal } from './components/DoctorProfileModal';
import { NewsDetailModal } from './components/NewsDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';

// Data types
import { Doctor } from './data/doctors';
import { NewsEvent } from './data/newsEvents';
import { HealthArticle } from './data/healthArticles';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [detailId, setDetailId] = useState<string | undefined>(undefined);

  // Modal States
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentDocId, setAppointmentDocId] = useState<string | undefined>(undefined);
  const [appointmentDeptId, setAppointmentDeptId] = useState<string | undefined>(undefined);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsEvent | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);

  // Scroll to top upon navigating to different views
  const handleNavigate = (view: string, id?: string) => {
    setCurrentView(view);
    setDetailId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAppointment = (doctorId?: string, departmentId?: string) => {
    setAppointmentDocId(doctorId);
    setAppointmentDeptId(departmentId);
    // Navigate directly to the dedicated full-page booking experience for maximum richness
    handleNavigate('book-appointment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-cyan-600 selection:text-white">
      {/* Multi-Level Header with Sticky Nav & Quick Utility Strip */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenAppointment={handleOpenAppointment}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenAppointment={handleOpenAppointment}
            onSelectDoctor={(doc) => setSelectedDoctor(doc)}
            onSelectNews={(news) => setSelectedNews(news)}
            onSelectArticle={(art) => setSelectedArticle(art)}
            onOpenPortal={() => setIsPortalOpen(true)}
          />
        )}

        {currentView === 'book-appointment' && (
          <AppointmentBookingView
            preselectedDoctorId={appointmentDocId}
            preselectedDepartmentId={appointmentDeptId}
            onNavigateHome={() => handleNavigate('home')}
            onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onOpenAppointment={() => handleOpenAppointment()}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'departments' && (
          <DepartmentsView
            onSelectDepartment={(deptId) => handleNavigate('department-detail', deptId)}
            onOpenAppointment={handleOpenAppointment}
          />
        )}

        {currentView === 'department-detail' && (
          <DepartmentDetailView
            departmentId={detailId || 'cardiology'}
            onBack={() => handleNavigate('departments')}
            onOpenAppointment={handleOpenAppointment}
            onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          />
        )}

        {currentView === 'doctors' && (
          <DoctorsView
            onSelectDoctor={(doc) => setSelectedDoctor(doc)}
            onOpenAppointment={handleOpenAppointment}
          />
        )}

        {currentView === 'services' && (
          <ServicesView
            onOpenAppointment={() => handleOpenAppointment()}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'patient-info' && (
          <PatientInfoView
            onOpenAppointment={() => handleOpenAppointment()}
          />
        )}

        {currentView === 'academics' && (
          <AcademicsView />
        )}

        {currentView === 'news-events' && (
          <NewsEventsView
            onSelectNews={(news) => setSelectedNews(news)}
          />
        )}

        {currentView === 'health-articles' && (
          <HealthArticlesView
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {currentView === 'careers' && (
          <CareersView />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Institutional Multi-Column Footer with 24/7 Action Strip */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedDoctorId={appointmentDocId}
        preselectedDepartmentId={appointmentDeptId}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onOpenAppointment={handleOpenAppointment}
      />

      <PatientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      <DoctorProfileModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onOpenAppointment={handleOpenAppointment}
      />

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenAppointment={() => handleOpenAppointment()}
      />
    </div>
  );
}
