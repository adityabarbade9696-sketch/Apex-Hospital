import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { QuickAccessBar } from '../components/QuickAccessBar';
import { StatsBanner } from '../components/StatsBanner';
import { AboutSection } from '../components/AboutSection';
import { DepartmentsShowcase } from '../components/DepartmentsShowcase';
import { ServicesGrid } from '../components/ServicesGrid';
import { DoctorsShowcase } from '../components/DoctorsShowcase';
import { PatientGuideSection } from '../components/PatientGuideSection';
import { AcademicsResearchSection } from '../components/AcademicsResearchSection';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { HealthArticlesSection } from '../components/HealthArticlesSection';
import { EmergencyCtaBanner } from '../components/EmergencyCtaBanner';
import { ContactSection } from '../components/ContactSection';
import { Doctor } from '../data/doctors';
import { NewsEvent } from '../data/newsEvents';
import { HealthArticle } from '../data/healthArticles';

interface HomeViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenAppointment: (doctorId?: string, departmentId?: string) => void;
  onSelectDoctor: (doctor: Doctor) => void;
  onSelectNews: (item: NewsEvent) => void;
  onSelectArticle: (article: HealthArticle) => void;
  onOpenPortal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenAppointment,
  onSelectDoctor,
  onSelectNews,
  onSelectArticle,
  onOpenPortal
}) => {
  return (
    <div className="w-full">
      {/* 1. Large Hero / Banner Carousel */}
      <HeroCarousel
        onOpenAppointment={() => onOpenAppointment()}
        onExploreDepartments={() => onNavigate('departments')}
        onNavigate={onNavigate}
      />

      {/* 2. Quick-Access / Action Area */}
      <QuickAccessBar
        onOpenAppointment={() => onOpenAppointment()}
        onNavigate={onNavigate}
        onOpenPortal={onOpenPortal}
      />

      {/* 3. About the Hospital */}
      <AboutSection onNavigate={onNavigate} />

      {/* 4. Key Hospital Statistics */}
      <StatsBanner />

      {/* 5. Departments / Specialties */}
      <DepartmentsShowcase
        onSelectDepartment={(deptId) => onNavigate('department-detail', deptId)}
        onViewAllDepartments={() => onNavigate('departments')}
        onOpenAppointment={onOpenAppointment}
      />

      {/* 6. Hospital Services */}
      <ServicesGrid
        onNavigate={onNavigate}
        onOpenAppointment={() => onOpenAppointment()}
      />

      {/* 7. Doctors / Specialists */}
      <DoctorsShowcase
        onSelectDoctor={onSelectDoctor}
        onOpenAppointment={onOpenAppointment}
        onViewAllDoctors={() => onNavigate('doctors')}
      />

      {/* 8. Patient-Focused Section */}
      <PatientGuideSection
        onNavigate={onNavigate}
        onOpenAppointment={() => onOpenAppointment()}
      />

      {/* 9. Academic / Teaching Section */}
      <AcademicsResearchSection onNavigate={onNavigate} />

      {/* 10. News & Events */}
      <NewsEventsSection
        onSelectNews={onSelectNews}
        onViewAllNews={() => onNavigate('news-events')}
      />

      {/* 11. Health Information / Articles */}
      <HealthArticlesSection
        onSelectArticle={onSelectArticle}
        onViewAllArticles={() => onNavigate('health-articles')}
      />

      {/* 12. Call-to-Action Emergency Section */}
      <EmergencyCtaBanner
        onOpenAppointment={() => onOpenAppointment()}
        onNavigate={onNavigate}
      />

      {/* 13. Contact Section */}
      <ContactSection />
    </div>
  );
};
