import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, HeartPulse, Clock, Sparkles, Award } from 'lucide-react';
import { HOSPITAL_IMAGES } from '../data/assets';

interface HeroCarouselProps {
  onOpenAppointment: () => void;
  onExploreDepartments: () => void;
  onNavigate: (view: string, detailId?: string) => void;
}

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  actionType: 'appointment' | 'departments' | 'emergency';
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onOpenAppointment,
  onExploreDepartments,
  onNavigate
}) => {
  const slides: Slide[] = [
    {
      id: 1,
      badge: 'Academic Teaching Hospital & Research Centre · Estd. 1944',
      title: 'Pioneering Healthcare, Advancing Human Life',
      subtitle: '1,850 Inpatient Beds · 42 Medical Specialties · Quaternary Tertiary Care',
      description:
        'Combining over eight decades of compassionate clinical service with world-class medical education, breakthrough biomedical research, and subsidized tertiary care for all strata of society.',
      image: HOSPITAL_IMAGES.heroCampus,
      primaryBtnText: 'Book Outpatient Consultation',
      secondaryBtnText: 'Explore Clinical Specialties',
      actionType: 'appointment'
    },
    {
      id: 2,
      badge: 'Advanced Surgical Sciences & Robotics',
      title: 'Precision Robotic & Minimally Invasive Surgery',
      subtitle: 'Da Vinci Xi 4th Gen Robotic Suite · Zero-Infection Cleanrooms',
      description:
        'Sub-millimeter surgical accuracy across complex cardiac bypass, oncological resections, joint replacements, and organ transplants with minimal blood loss and same-day mobility.',
      image: HOSPITAL_IMAGES.heroSurgery,
      primaryBtnText: 'Consult a Senior Surgeon',
      secondaryBtnText: 'View Surgical Technologies',
      actionType: 'appointment'
    },
    {
      id: 3,
      badge: 'Compassionate Patient-Centered Care',
      title: '450+ Renowned Specialists Dedicated to Your Wellbeing',
      subtitle: 'Door-to-Balloon < 50 min · Acute Stroke Thrombolysis · Level-1 Trauma',
      description:
        'From primary prevention and chronic disease management to round-the-clock emergency resuscitation, our multidisciplinary clinical teams deliver personalized, evidence-grounded medicine.',
      image: HOSPITAL_IMAGES.doctorCare,
      primaryBtnText: 'Find Your Doctor',
      secondaryBtnText: 'Patient Guide & OPD Hours',
      actionType: 'appointment'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[520px] lg:min-h-[600px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Measured Dark Scrim */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
              referrerPolicy="no-referrer"
            />
            {/* Measured Deep Gradient Scrim ensuring WCAG AA Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/20 to-slate-950/70" />
          </div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          {/* Institutional Trust Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-cyan-300 bg-cyan-950/70 border border-cyan-800/80 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>{slide.badge}</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-medium text-cyan-100/90 leading-snug">
            {slide.subtitle}
          </p>

          {/* Editorial Paragraph */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {slide.description}
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-600 to-sky-700 hover:from-cyan-500 hover:to-sky-600 rounded-xl shadow-lg shadow-cyan-900/30 transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              {slide.primaryBtnText}
            </button>
            <button
              onClick={onExploreDepartments}
              className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700 rounded-xl backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap"
            >
              {slide.secondaryBtnText}
            </button>
          </div>

          {/* Quick Trust Markers Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300/80 border-t border-slate-800/60">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Full NABH & NABL Accreditation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>24/7 Level-1 Emergency & Stroke Care</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-cyan-400" />
              <span>Charitable Trust & Subsidized Beds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 flex items-center justify-center text-white backdrop-blur-sm transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900 border border-slate-700/60 flex items-center justify-center text-white backdrop-blur-sm transition-colors cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
