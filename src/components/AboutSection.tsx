import React from 'react';
import { ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_IMAGES } from '../data/assets';

interface AboutSectionProps {
  onNavigate: (view: string, detailId?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage & Heritage Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
              <img
                src={HOSPITAL_IMAGES.heroCampus}
                alt="Apex Memorial Teaching Hospital Campus"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-cyan-300">
                  Established 1944
                </span>
                <p className="text-lg font-bold leading-snug mt-1">
                  Over Eight Decades of Ethical Healing & Clinical Distinction
                </p>
              </div>
            </div>

            {/* Overlapping Floating Milestone Card */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 max-w-xs items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  NABH & NABL Accredited
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  5th Cycle Comprehensive Quality Certification
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>About Apex Memorial Teaching Hospital</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Where Compassionate Care Meets Academic Rigor
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in 1944 as a modest community dispensary, Apex Memorial has evolved into
              Western India’s premier 1,850-bed quaternary-care teaching hospital and clinical research
              institute. Operating on an autonomous charitable foundation, we balance advanced
              cutting-edge robotic surgeries with deep-rooted social responsibility—ensuring that
              no patient in need is turned away.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Our Noble Mission</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  To provide accessible, evidence-based healthcare with empathy and integrity,
                  training the next generation of compassionate physicians and nurses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Award className="w-4 h-4 text-cyan-600" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  To be globally recognized as a center of clinical excellence, pioneering translational
                  biomedical research and community wellness initiatives.
                </p>
              </div>
            </div>

            {/* Clinical Highlights Checklist */}
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Over 65% of hospital beds reserved for subsidized and charitable care</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Level-1 Trauma Center with 24/7 dedicated in-hospital CT & Cath Lab</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Postgraduate DNB & MD/MS teaching across 18 clinical medical departments</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer shadow-md"
              >
                <span>Read Full Hospital History & Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
