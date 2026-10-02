export interface AcademicCourse {
  name: string;
  degree: string;
  duration: string;
  annualIntake: number;
  accreditation: string;
  description: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi: string;
  abstract: string;
}

export const ACADEMIC_COURSES: AcademicCourse[] = [
  {
    name: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    degree: 'MBBS',
    duration: '4.5 Years + 1 Year Compulsory Rotatory Internship',
    annualIntake: 150,
    accreditation: 'National Medical Commission (NMC) & State Health Sciences University',
    description: 'A comprehensive curriculum integrating preclinical fundamentals with intensive clinical bedside training in our 1,850-bed teaching hospital.'
  },
  {
    name: 'Doctor of Medicine (MD) / Master of Surgery (MS)',
    degree: 'MD / MS',
    duration: '3 Years Full-Time Residency',
    annualIntake: 68,
    accreditation: 'NMC Recognized Post-Graduate Training',
    description: 'Specializations offered in General Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Radiodiagnosis, Anesthesiology, Pathology, and Orthopedics.'
  },
  {
    name: 'Diplomate of National Board (DNB Super-Specialty)',
    degree: 'DrNB / DNB',
    duration: '3 Years Super-Specialty Fellowship',
    annualIntake: 24,
    accreditation: 'National Board of Examinations in Medical Sciences (NBEMS)',
    description: 'Postdoctoral super-specialty training in Cardiology, Neurology, Gastroenterology, Nephrology, and Critical Care Medicine.'
  },
  {
    name: 'Bachelor of Science in Nursing (B.Sc Nursing)',
    degree: 'B.Sc Nursing',
    duration: '4 Years Degree Program',
    annualIntake: 60,
    accreditation: 'Indian Nursing Council (INC) & State Nursing Council',
    description: 'Extensive hands-on training across intensive care, operating rooms, maternal-neonatal units, and public health outreach.'
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-1',
    title: 'Outcomes of Transcatheter Aortic Valve Replacement (TAVR) in Bicuspid Aortic Stenosis: A 5-Year High-Volume Academic Registry',
    journal: 'Journal of the American College of Cardiology: Asia',
    year: 2025,
    authors: 'Dr. Anand K. Varma, Dr. Vikramaditya Sen, et al.',
    doi: '10.1016/j.jaccasia.2025.02.014',
    abstract: 'Evaluated 480 patients undergoing transfemoral TAVR. Demonstrated 98.4% procedural success with 30-day mortality under 1.2%, validating safety in complex anatomical variants.'
  },
  {
    id: 'res-2',
    title: 'Kinematic Alignment versus Mechanical Alignment in Robotic Total Knee Arthroplasty: Prospective Randomized Clinical Trial',
    journal: 'The Bone & Joint Journal',
    year: 2025,
    authors: 'Dr. Rajeshwari R. Kulkarni, Dr. Hemant C. Pradhan',
    doi: '10.1302/0301-620X.107B.BJJ-2024-0891',
    abstract: 'Demonstrated superior early patient-reported functional scores and reduced soft-tissue releases using patient-specific kinematic robotic alignment at 2-year follow-up.'
  },
  {
    id: 'res-3',
    title: 'Extended Thrombolysis Window Guided by Perfusion MRI in Acute Wake-Up Stroke: A Multicenter Indian Cohort Study',
    journal: 'Stroke & Vascular Neurology',
    year: 2024,
    authors: 'Dr. Meera S. Joshi, Dr. Arvind N. Kulkarni, et al.',
    doi: '10.1136/svn-2024-002890',
    abstract: 'Investigated automated perfusion mismatch CT/MRI selection for intravenous thrombolysis beyond 4.5 hours in unknown-onset stroke, showing marked functional independence without increased hemorrhage risk.'
  },
  {
    id: 'res-4',
    title: 'Long-Term Graft Survival and Immunological Biomarkers in Living-Donor Kidney Transplants with Low-Dose Tacrolimus Regimens',
    journal: 'Transplantation Proceedings',
    year: 2024,
    authors: 'Dr. Devendra P. Deshmukh, Dr. Chetan M. Salunkhe',
    doi: '10.1016/j.transproceed.2024.04.019',
    abstract: 'Analyzed 5-year graft and recipient outcomes across 310 living donor transplants, establishing favorable renal preservation with minimized nephrotoxicity.'
  }
];

export const UPCOMING_CMES = [
  {
    title: '18th Annual National Symposium on Advanced Cardiovascular Interventions (ACI-2026)',
    date: 'November 14-16, 2026',
    venue: 'Auditorium, Apex Academic Medical Center',
    credits: '8 MMC CME Credit Hours',
    delegateCount: 450
  },
  {
    title: 'Hands-on Workshop: Robotic Knee & Hip Arthroplasty Cadaveric Masterclass',
    date: 'December 05, 2026',
    venue: 'Apex Surgical Skills & Simulation Lab',
    credits: '4 MMC CME Credit Hours',
    delegateCount: 60
  },
  {
    title: 'Mastering Neonatal Resuscitation & High-Frequency Ventilation in Preterm Infants',
    date: 'January 22-23, 2027',
    venue: 'Department of Child Health Seminar Hall',
    credits: '6 MMC CME Credit Hours',
    delegateCount: 120
  }
];
