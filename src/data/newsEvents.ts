export interface NewsEvent {
  id: string;
  type: 'News' | 'Event' | 'Health Camp' | 'Press Release';
  title: string;
  date: string;
  summary: string;
  content: string;
  location?: string;
  readTime: string;
  imageAlt: string;
}

export const NEWS_EVENTS: NewsEvent[] = [
  {
    id: 'news-1',
    type: 'News',
    title: 'Apex Memorial Launches Western India’s First Dual-Console Robotic Joint Replacement & Trauma Suite',
    date: 'September 24, 2026',
    summary: 'The new robotic suite enables sub-millimeter surgical accuracy in hip and knee arthroplasties, cutting hospital stays by more than half.',
    content: 'Apex Memorial Teaching Hospital inaugurated its fourth-generation robotic orthopedic suite today. Attended by leading orthopedic surgeons and the Dean of the Medical College, the robotic suite provides real-time kinematic sensor feedback during surgeries. Over 120 patients have already achieved same-day ambulation under the accelerated recovery protocol.',
    readTime: '3 min read',
    imageAlt: 'Surgical team demonstrating robotic surgical arm'
  },
  {
    id: 'news-2',
    type: 'Health Camp',
    title: 'Free Mega Cardiac & Diabetes Screening Camp for Senior Citizens',
    date: 'October 12-14, 2026',
    summary: 'Comprehensive free screenings including ECG, Blood Sugar (HbA1c), Lipid Profile, and Cardiologist Consultations.',
    content: 'In observance of World Heart Month, the Department of Cardiology and Community Medicine is organizing a three-day complimentary screening camp. Over 1,500 senior citizens will receive free biochemical blood tests, resting ECG, physician consults, and discounted echocardiography if clinically indicated.',
    location: 'Central OPD Atrium, Ground Floor, Apex Memorial',
    readTime: '2 min read',
    imageAlt: 'Elderly patients receiving health screening checks'
  },
  {
    id: 'news-3',
    type: 'Press Release',
    title: 'Hospital Re-Accredited by NABH and NABL with Distinction for Quality & Patient Safety',
    date: 'August 18, 2026',
    summary: 'The National Accreditation Board for Hospitals & Healthcare Providers completes extensive 5th-cycle clinical audit with zero non-conformances.',
    content: 'Following a rigorous four-day institutional inspection covering 650 objective quality standards, Apex Memorial Hospital was awarded full NABH Hospital accreditation and NABL accreditation for its Central Laboratory. Assessors commended the hospital’s zero-tolerance infection protocol, 24/7 Code Blue response, and digitized medical records system.',
    readTime: '4 min read',
    imageAlt: 'Hospital leadership receiving national accreditation award'
  },
  {
    id: 'news-4',
    type: 'Event',
    title: 'Annual Apex Paediatric & Neonatal Conclave (APNC 2026)',
    date: 'November 20-21, 2026',
    summary: 'A 2-day national conference featuring leading international pediatricians discussing micro-preterm survival strategies.',
    content: 'The Department of Child Health will host 350 delegates from across the nation to discuss recent advances in neonatal non-invasive ventilation, targeted therapeutic hypothermia, and early childhood autism screening interventions.',
    location: 'Silver Jubilee Auditorium, Apex Medical College',
    readTime: '3 min read',
    imageAlt: 'Auditorium lecture on pediatric neonatology'
  },
  {
    id: 'news-5',
    type: 'News',
    title: 'Department of Nephrology Achieves Milestone of 450 Successful Renal Transplants',
    date: 'July 29, 2026',
    summary: 'Achieved an outstanding 95.4% 5-year graft survival rate, with over 60 complex ABO-incompatible transplants.',
    content: 'Apex Memorial Hospital marked its 450th successful renal transplant today. The transplant team led by Dr. Devendra Deshmukh highlighted their dedicated living and deceased donor program, which has provided subsidized transplantation to patients through charitable trusts and corporate CSR funds.',
    readTime: '3 min read',
    imageAlt: 'Renal transplant team smiling in recovery suite'
  }
];
