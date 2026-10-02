export interface Department {
  id: string;
  name: string;
  category: 'Super Specialty' | 'Surgical Specialty' | 'Clinical Specialty' | 'Diagnostic & Critical Care';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  headOfDepartment: string;
  bedCount: number;
  keyServices: string[];
  specializedTreatments: string[];
  facilities: string[];
  faqs: { question: string; answer: string }[];
  doctorIds: string[];
  stats: { label: string; value: string }[];
  iconName: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Cardiovascular Surgery',
    category: 'Super Specialty',
    tagline: 'Comprehensive Heart Care & Advanced Interventional Cardiology',
    shortDescription: 'State-of-the-art cardiac catheterization labs, 24/7 primary angioplasty, electrophysiology, and adult & pediatric cardiac surgery.',
    fullDescription: 'The Apex Heart Institute is recognized among the premier cardiac tertiary referral centers in the region. Combining clinical acumen with breakthrough technology, we provide 24/7 Primary Percutaneous Coronary Intervention (PPCI), complex structural heart interventions (TAVR, MitraClip), minimally invasive coronary artery bypass surgery (CABG), and dedicated pediatric cardiology services.',
    headOfDepartment: 'Dr. Anand K. Varma, MD, DM (Cardiology), FACC',
    bedCount: 120,
    keyServices: [
      '24/7 Emergency Primary Angioplasty (Door-to-Balloon < 50 mins)',
      'Complex Coronary Angioplasty & Rotablation',
      'Transcatheter Aortic Valve Replacement (TAVR / TAVI)',
      'Electrophysiology Studies & 3D Arrhythmia Radiofrequency Ablation',
      'Minimally Invasive Beating Heart CABG',
      'Heart Failure Clinic & Ventricular Assist Devices (LVAD)'
    ],
    specializedTreatments: [
      'Coronary Artery Bypass Grafting (CABG)',
      'Mitral & Aortic Valve Repair / Replacement',
      'Pacemaker, ICD & CRT-D Implantation',
      'Pediatric Congenital Heart Defect Closures (ASD/VSD/PDA)',
      'Carotid Artery Stenting & Peripheral Vascular Interventions'
    ],
    facilities: [
      'Two Philips Azurion 7 Biplane Digital Flat-Panel Cath Labs',
      '18-bed Dedicated Coronary Care Unit (CCU) with Central Telemetry',
      'Dedicated Cardiac Surgical Intensive Care Unit (CSICU)',
      '3D 4D Transthoracic & Transesophageal Echocardiography (TEE)',
      'Nuclear Cardiology & Cardiac Stress Testing Laboratory'
    ],
    faqs: [
      {
        question: 'What is the procedure during an emergency cardiac event?',
        answer: 'Our Emergency Level 1 Department activates code STEMI immediately upon arrival. ECG is completed within 5 minutes and our 24/7 on-site Interventional Cardiologist initiates emergency catheterization within 50 minutes.'
      },
      {
        question: 'How long is the typical hospital stay after angioplasty?',
        answer: 'For elective coronary angioplasty, most patients are comfortably discharged within 24 to 48 hours following clinical observation and radial artery wound check.'
      },
      {
        question: 'Does the department accept cashless health insurance / mediclaim?',
        answer: 'Yes, our dedicated Insurance / TPA helpdesk supports over 35 major private insurers, TPAs, and state health schemes with cashless authorization.'
      }
    ],
    doctorIds: ['doc-1', 'doc-2', 'doc-15'],
    stats: [
      { label: 'Annual Angioplasties', value: '4,800+' },
      { label: 'Door-to-Balloon Time', value: '< 48 min' },
      { label: 'Cardiac Surgeries', value: '1,400+' },
      { label: 'Clinical Success Rate', value: '99.2%' }
    ],
    iconName: 'HeartPulse'
  },
  {
    id: 'neurology',
    name: 'Neurology & Neurosurgery',
    category: 'Super Specialty',
    tagline: 'Comprehensive Brain, Spine & Advanced Neuro-Intervention',
    shortDescription: 'Dedicated Comprehensive Stroke Center, neuro-navigation guided cranial surgery, epilepsy monitoring, and endoscopic spine surgery.',
    fullDescription: 'The Department of Neurological Sciences provides multidisciplinary care for complex brain, spinal cord, and peripheral nerve disorders. Our 24/7 Acute Stroke Team delivers rapid thrombolysis and mechanical thrombectomy. Our neurosurgical theaters feature intraoperative MRI guidance and robotic stereotaxy.',
    headOfDepartment: 'Dr. Meera S. Joshi, M.Ch (Neurosurgery), FINR',
    bedCount: 95,
    keyServices: [
      '24/7 Acute Stroke Thrombolysis & Mechanical Thrombectomy',
      'Micro-Neurosurgery for Brain Tumors & Aneurysms',
      'Minimally Invasive & Endoscopic Spine Surgery',
      'Comprehensive Epilepsy Care & Video-EEG Telemetry',
      'Movement Disorders, Parkinson’s Clinic & Deep Brain Stimulation (DBS)',
      'Neuro-Rehabilitation & Speech Therapy Center'
    ],
    specializedTreatments: [
      'Awake Craniotomy for Brain Lesions',
      'Endovascular Coiling for Cerebral Aneurysms',
      'Microvascular Decompression for Trigeminal Neuralgia',
      'Cervical & Lumbar Artificial Disc Replacement',
      'Pediatric Hydrocephalus & Craniofacial Reconstruction'
    ],
    facilities: [
      'Carl Zeiss Kinevo 900 3D 4K Robotic Neuro-Microscope',
      'Intraoperative Neuro-monitoring (IONM) System',
      '16-bed Dedicated Neuro-Intensive Care Unit (NICU)',
      '32-channel Digital Video-EEG Monitoring Suite',
      'Biplane Neuro-Interventional Suite for Catheter Angiography'
    ],
    faqs: [
      {
        question: 'What is the Golden Window for Acute Ischemic Stroke?',
        answer: 'Patients arriving within 4.5 hours of symptom onset are eligible for intravenous thrombolysis (clot-dissolving medicine), and selected patients up to 24 hours can undergo mechanical thrombectomy.'
      },
      {
        question: 'What is awake craniotomy?',
        answer: 'It is a specialized brain surgery technique performed while the patient is awake to map critical speech and motor pathways, ensuring maximum tumor resection with zero neurological deficit.'
      }
    ],
    doctorIds: ['doc-3', 'doc-4'],
    stats: [
      { label: 'Stroke Thrombolyses', value: '620+' },
      { label: 'Complex Neurosurgeries', value: '1,150+' },
      { label: 'Video-EEG Studies', value: '2,900+' },
      { label: 'Neuro-ICU Survival', value: '96.8%' }
    ],
    iconName: 'Brain'
  },
  {
    id: 'oncology',
    name: 'Apex Cancer Institute & Oncosurgery',
    category: 'Super Specialty',
    tagline: 'Compassionate Oncology, Precision Radiotherapy & Bone Marrow Transplant',
    shortDescription: 'Comprehensive cancer care with surgical oncology, medical oncology, TrueBeam stereotactic radiotherapy, and bone marrow transplantation.',
    fullDescription: 'Apex Cancer Institute operates as a multidisciplinary comprehensive cancer center. Every patient is reviewed by our institutional Tumor Board comprising surgical, medical, and radiation oncologists, pathologists, and radiologists to create an individualized, evidence-based treatment roadmap.',
    headOfDepartment: 'Dr. Vikramaditya Sen, MS, M.Ch (Surgical Oncology)',
    bedCount: 110,
    keyServices: [
      'Tumor Board Consultations & Precision Biomarker Sequencing',
      'Surgical Oncology & Organ-Preserving Cancer Resections',
      'Day Care Chemotherapy & Immunotherapy Infusion Center',
      'Stereotactic Radiosurgery (SRS / SBRT) & Image-Guided Radiotherapy (IGRT)',
      'Autologous & Allogeneic Bone Marrow Transplantation',
      'Palliative & Cancer Pain Management Services'
    ],
    specializedTreatments: [
      'HIPEC (Hyperthermic Intraperitoneal Chemotherapy)',
      'Robotic Pelvic & Thoracic Oncosurgery',
      'Breast Oncoplasty & Sentinel Lymph Node Biopsy',
      'Targeted Molecular Therapy & CAR-T Cell Therapy protocols',
      'Brachytherapy for Gynecological & Prostate Malignancies'
    ],
    facilities: [
      'Varian TrueBeam STx Linear Accelerator with RapidArc',
      'HEPA-filtered Positive Pressure Bone Marrow Transplant Unit (6 beds)',
      '30-bed Daycare Chemotherapy Lounge with Biosafety Cabinets',
      'Digital PET-CT with Gallium-68 & FDG tracers',
      'Molecular Pathology & Next Generation Sequencing (NGS) Laboratory'
    ],
    faqs: [
      {
        question: 'What happens in a Multidisciplinary Tumor Board?',
        answer: 'Experts across all oncology subspecialties review the patient biopsy, radiological scans, and health profile together to formulate the safest, most effective therapeutic roadmap.'
      },
      {
        question: 'Are chemotherapy infusions done on an outpatient basis?',
        answer: 'Yes, our 30-bed modern Day Care Chemotherapy Lounge provides comfortable recliner chairs, specialized nursing, and allows patients to return home the same day.'
      }
    ],
    doctorIds: ['doc-5', 'doc-6'],
    stats: [
      { label: 'Cancer Patients Treated', value: '14,000+' },
      { label: 'Radiation Therapies', value: '38,000+' },
      { label: 'Bone Marrow Transplants', value: '140+' },
      { label: 'Tumor Board Reviews', value: '100%' }
    ],
    iconName: 'Activity'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Reconstruction',
    category: 'Surgical Specialty',
    tagline: 'Pioneering Robotic Joint Replacements, Sports Injury & Spine Care',
    shortDescription: 'Computer-navigated knee and hip replacement, arthroscopic ligament reconstruction, pediatric orthopedics, and complex trauma fixation.',
    fullDescription: 'From high-speed highway polytrauma reconstructions to computer-navigated robotic joint replacements and elite athletic sports medicine, the Orthopedic Department combines world-class surgical craftsmanship with structured rapid-recovery rehabilitation.',
    headOfDepartment: 'Dr. Rajeshwari R. Kulkarni, MS (Ortho), M.Ch (UK), FIJR',
    bedCount: 90,
    keyServices: [
      'Robotic Total Knee & Hip Replacement (Unilateral & Bilateral)',
      'Arthroscopic ACL/PCL Reconstruction & Meniscal Repair',
      'Complex Polytrauma & Pelvi-Acetabular Reconstruction',
      'Spine Surgery for Disc Prolapse & Deformity Correction (Scoliosis)',
      'Pediatric Orthopedic Corrections (Clubfoot, DDH)',
      'Sports Medicine & Isokinetic Physical Rehabilitation'
    ],
    specializedTreatments: [
      'Kinematic Alignment Robotic Knee Arthroplasty',
      'Revision Joint Replacement for Failed Implants',
      'Shoulder Rotator Cuff & Bankart Repair',
      'Minimally Invasive Percutaneous Osteosynthesis (MIPO)',
      'Platelet-Rich Plasma (PRP) & Regenerative Orthobiologics'
    ],
    facilities: [
      'Stryker Mako Robotic-Arm Assisted Surgical Suite',
      'Laminar Airflow Cleanroom Class 100 Orthopedic Theaters',
      'Advanced Gait Analysis & Biomechanics Laboratory',
      'C-arm Fluoroscopy with 3D Reconstructive Imaging',
      'Hydrotherapy & Post-Operative Rehabilitation Gymnasium'
    ],
    faqs: [
      {
        question: 'When can a patient walk following robotic knee replacement?',
        answer: 'With our rapid-recovery protocol and robotic precision, over 90% of our patients take their first assisted steps within 4 to 6 hours after surgery.'
      },
      {
        question: 'How long do modern artificial joint implants last?',
        answer: 'With high-crosslinked polyethylene and ceramic-on-ceramic interfaces, today’s joint replacements have a proven longevity of 25 to 30 years.'
      }
    ],
    doctorIds: ['doc-7', 'doc-8'],
    stats: [
      { label: 'Robotic Joint Replacements', value: '3,200+' },
      { label: 'Arthroscopic Procedures', value: '2,100+' },
      { label: 'Trauma Reconstructions', value: '4,500+' },
      { label: 'Infection Rate', value: '< 0.2%' }
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology, Hepatology & GI Surgery',
    category: 'Super Specialty',
    tagline: 'Comprehensive Digestive Health, Advanced Endoscopy & Liver Care',
    shortDescription: 'Diagnostic and therapeutic GI endoscopy, ERCP, EUS, inflammatory bowel disease management, and liver disease & transplant services.',
    fullDescription: 'The Institute of Digestive Sciences manages disorders of the esophagus, stomach, intestine, pancreas, and liver. We house one of the busiest advanced endoscopy suites in Western India, offering third-space endoscopy (POEM), endoscopic ultrasound (EUS), and liver transplantation.',
    headOfDepartment: 'Dr. Suhas N. Pathak, MD, DM (Gastroenterology)',
    bedCount: 75,
    keyServices: [
      'Diagnostic & Therapeutic Upper GI Endoscopy & Colonoscopy',
      'Endoscopic Retrograde Cholangiopancreatography (ERCP)',
      'Endoscopic Ultrasound (EUS) Diagnostic & Interventional',
      'Third-Space Endoscopy: Peroral Endoscopic Myotomy (POEM)',
      'Comprehensive Chronic Liver Disease & Cirrhosis Management',
      'GI Bleed 24/7 Emergency Hemostasis Service'
    ],
    specializedTreatments: [
      'Living Donor & Deceased Donor Liver Transplantation',
      'Laparoscopic & Robotic Colorectal Cancer Resection',
      'Capsule Endoscopy for Obscure Gastrointestinal Bleeding',
      'Pancreatic Necrosectomy & Pseudocyst Drainage',
      'Metabolic & Bariatric Surgery for Severe Obesity'
    ],
    facilities: [
      'Olympus EVIS X1 High-Definition Endoscopy Towers with NBI',
      'Dedicated Liver Intensive Care Unit (LICU)',
      'SpyGlass Direct Visualization Cholangioscopy System',
      'FibroScan 502 Touch for Non-Invasive Liver Elastography',
      'State-of-the-Art Endoscopic Disinfection & Reprocessing Suite'
    ],
    faqs: [
      {
        question: 'Is endoscopy performed under sedation?',
        answer: 'Yes, routine and advanced endoscopic procedures are performed under conscious sedation managed by our anesthesiology team for painless, stress-free care.'
      },
      {
        question: 'What is FibroScan?',
        answer: 'It is a 5-minute painless ultrasound-based scan that measures liver stiffness and fat accumulation without requiring an invasive needle biopsy.'
      }
    ],
    doctorIds: ['doc-9', 'doc-10'],
    stats: [
      { label: 'Annual Endoscopies', value: '8,500+' },
      { label: 'ERCP & EUS Procedures', value: '1,900+' },
      { label: 'Liver Transplants', value: '120+' },
      { label: 'Same-Day Discharges', value: '94%' }
    ],
    iconName: 'Stethoscope'
  },
  {
    id: 'nephrology',
    name: 'Nephrology, Urology & Renal Transplant',
    category: 'Super Specialty',
    tagline: 'Advanced Kidney Care, Hemodialysis & Robotic Urological Surgery',
    shortDescription: 'Round-the-clock hemodialysis, peritoneal dialysis, laser stone treatments, prostate enucleation, and kidney transplantation.',
    fullDescription: 'Our Renal Sciences Center provides total kidney and urinary tract care. With a 40-station modern dialysis center running 24/7, advanced CRRT for ICU patients, state-of-the-art HoLEP laser prostate surgery, and kidney transplants with high graft survival.',
    headOfDepartment: 'Dr. Devendra P. Deshmukh, MD, DM (Nephrology), FISN',
    bedCount: 80,
    keyServices: [
      '24/7 Hemodialysis Unit with Dedicated Hepatitis B/C Stations',
      'Continuous Renal Replacement Therapy (CRRT) for Critical ICU Care',
      'Living-Donor & Cadaveric Renal Transplantation',
      'Holmium Laser Enucleation of the Prostate (HoLEP)',
      'Flexible Ureteroscopy (RIRS) with Laser Lithotripsy for Kidney Stones',
      'Pediatric Nephrology & Congenital Urinary Anomaly Corrections'
    ],
    specializedTreatments: [
      'ABO-Incompatible (Cross-Match Positive) Kidney Transplants',
      'Robotic Partial Nephrectomy & Radical Prostatectomy',
      'Vascular Access Creation (AV Fistula & Permacath Insertions)',
      'Percutaneous Nephrolithotomy (PCNL) & Mini-PCNL',
      'Automated Peritoneal Dialysis (APD) Training for Home Care'
    ],
    facilities: [
      '40 Fresenius 5008S High-Flux Hemodialysis Machines',
      'Aquaboss Dual-Stage Reverse Osmosis Water Treatment Plant',
      'Lumenis Pulse 120H Holmium Laser with MOSES 2.0 Technology',
      'Da Vinci Xi Dual-Console Robotic Surgical System',
      'Dedicated Post-Transplant Sterile Isolation Suites'
    ],
    faqs: [
      {
        question: 'What is RIRS for kidney stones?',
        answer: 'Retrograde Intrarenal Surgery (RIRS) uses a thin flexible scope passed through the natural urinary passage to dust kidney stones using laser, with no incisions or scars.'
      },
      {
        question: 'What are the qualifications for kidney donation in India?',
        answer: 'Under the Transplantation of Human Organs Act (THOA), first-degree relatives can donate voluntarily after thorough legal, immunological, and health verification by our Authorization Committee.'
      }
    ],
    doctorIds: ['doc-11', 'doc-12'],
    stats: [
      { label: 'Annual Dialysis Sessions', value: '32,000+' },
      { label: 'Kidney Transplants', value: '450+' },
      { label: 'Laser Stone Surgeries', value: '2,800+' },
      { label: '5-Year Graft Survival', value: '95.4%' }
    ],
    iconName: 'Crosshair'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics, Neonatology & Child Health',
    category: 'Clinical Specialty',
    tagline: 'Gentle, Specialized Care from Extreme Prematurity to Adolescence',
    shortDescription: 'Level III-B Neonatal ICU (NICU), Pediatric ICU (PICU), pediatric cardiology, surgery, genetics, and comprehensive developmental pediatrics.',
    fullDescription: 'Recognized as one of Western India’s top teaching referral centers for sick children, the Department of Child Health combines clinical excellence with child-friendly surroundings. Our Level III-B NICU routinely cares for micro-preemies born as early as 24 weeks gestation.',
    headOfDepartment: 'Dr. Sunita V. Chordia, MD (Pediatrics), DCH, FIAP',
    bedCount: 105,
    keyServices: [
      '24/7 Level III-B Neonatal Intensive Care Unit (NICU)',
      'Level III Pediatric Intensive Care Unit (PICU) with ECMO capability',
      'Pediatric Surgery & Minimally Invasive Laparoscopy',
      'Pediatric Neurology & Epilepsy Care',
      'Comprehensive Child Immunization & Growth Tracking Clinic',
      'Child Development Center for Autism & ADHD Intervention'
    ],
    specializedTreatments: [
      'High-Frequency Oscillatory Ventilation & Inhaled Nitric Oxide',
      'Therapeutic Hypothermia (Cool-Cap) for Birth Asphyxia',
      'Neonatal Surgery for Congenital Diaphragmatic Hernia & TEF',
      'Pediatric Bronchoscopy & Pulmonology',
      'Specialized Pediatric Nephrology & Peritoneal Dialysis'
    ],
    facilities: [
      '24-bed State-of-the-Art Level III-B NICU with Giraffe Incubators',
      '12-bed Dedicated Pediatric ICU (PICU)',
      'Neonatal Emergency Transport Ambulance with Mobile Incubator',
      'Dedicated Pediatric Emergency Resuscitation Bay',
      'Lactation Management Resource Center & Donor Human Milk Bank'
    ],
    faqs: [
      {
        question: 'Can parents visit their baby in the NICU?',
        answer: 'Yes! We follow family-centered care. Mothers and fathers are actively encouraged to practice Kangaroo Mother Care (KMC) and participate in daily rounds.'
      },
      {
        question: 'Are childhood vaccines available on all days?',
        answer: 'Yes, our Child Immunization Clinic operates Monday through Saturday from 8:30 AM to 5:00 PM, adhering strictly to WHO and IAP guidelines.'
      }
    ],
    doctorIds: ['doc-13', 'doc-14'],
    stats: [
      { label: 'NICU Admissions Handled', value: '1,800+' },
      { label: 'Extreme Preemie Survival', value: '92.3%' },
      { label: 'Childhood Vaccinations', value: '25,000+' },
      { label: 'Pediatric Surgeries', value: '950+' }
    ],
    iconName: 'Baby'
  },
  {
    id: 'emergency-trauma',
    name: 'Emergency Medicine & Level-1 Trauma Centre',
    category: 'Diagnostic & Critical Care',
    tagline: '24/7 Immediate Resuscitation, Disaster Response & Polytrauma Care',
    shortDescription: 'Equipped with dedicated resuscitation bays, CT suite in emergency, mobile ICU ambulances, and board-certified emergency physicians.',
    fullDescription: 'The Emergency Department at Apex Memorial operates round-the-clock 365 days a year. As an accredited Level 1 Trauma Center, our rapid-response trauma, code blue, stroke, and STEMI teams respond within seconds, backed by an on-floor radiology suite and dedicated emergency surgical theater.',
    headOfDepartment: 'Dr. Sameer R. Barve, MBBS, MD (Emergency Medicine), FACEE',
    bedCount: 50,
    keyServices: [
      '24/7 Board-Certified Emergency Physician Triage',
      'Dedicated Resuscitation Bay (Red Zone) with 6 Crash Carts',
      'Code STEMI (Heart Attack), Code Stroke & Code Trauma Protocols',
      'Advanced Cardiac Life Support (ACLS) & ATLS Certified Teams',
      '24/7 Mobile ICU Cardiac & Trauma Ambulance Fleet',
      'Mass Casualty & Disaster Management Decontamination Facility'
    ],
    specializedTreatments: [
      'Emergency Endotracheal Intubation & Video Laryngoscopy',
      'Point-of-Care Ultrasound (POCUS) & Focused Assessment in Trauma (FAST)',
      'Emergency Tube Thoracostomy & Needle Cricothyroidotomy',
      'Cardiopulmonary Resuscitation (CPR) with Mechanical Chest Compressors',
      'Emergency Antivenom Administration & Toxicology Management'
    ],
    facilities: [
      'Dedicated 128-Slice CT Scanner situated directly inside Emergency',
      'Dedicated Emergency Minor & Major Operating Theater',
      'Dedicated Emergency Pathology & Blood Gas (ABG) Lab with 10-min turnaround',
      'Fleet of 6 GPS-enabled Advanced Cardiac Ambulances',
      'Helipad Access for Aerial Patient Evacuation'
    ],
    faqs: [
      {
        question: 'Do I need prior registration or an appointment for Emergency?',
        answer: 'No appointment is needed. Emergency patients are admitted instantly through the Emergency triage bay, where clinical care takes priority before administrative paperwork.'
      },
      {
        question: 'What is the direct phone number for the 24/7 Emergency Ambulance?',
        answer: 'You can immediately call our toll-free 1066 or our direct hotline +91 (020) 2612-4000.'
      }
    ],
    doctorIds: ['doc-15', 'doc-16'],
    stats: [
      { label: 'Annual Emergency Visits', value: '75,000+' },
      { label: 'Immediate Triage Response', value: '< 2 mins' },
      { label: 'Polytrauma Saves', value: '3,100+' },
      { label: 'Ambulance Call-out Time', value: '< 3 mins' }
    ],
    iconName: 'Ambulance'
  },
  {
    id: 'pulmonology',
    name: 'Pulmonology, Sleep Medicine & Critical Care',
    category: 'Clinical Specialty',
    tagline: 'Comprehensive Respiratory Health, Asthma & Advanced Critical Care',
    shortDescription: 'Advanced bronchoscopy, endobronchial ultrasound (EBUS), sleep apnea laboratory, asthma allergy clinic, and respiratory intensive care.',
    fullDescription: 'Our Pulmonology division delivers specialized care for chronic obstructive pulmonary disease (COPD), severe asthma, interstitial lung disease (ILD), pulmonary hypertension, and post-COVID pulmonary fibrosis. Our Level 1 Sleep Lab provides diagnostic polysomnography for obstructive sleep apnea.',
    headOfDepartment: 'Dr. Aruna V. Singhania, MD, DNB (Respiratory Diseases)',
    bedCount: 65,
    keyServices: [
      'Diagnostic & Interventional Flexible Bronchoscopy',
      'Endobronchial Ultrasound (EBUS) with Transbronchial Needle Aspiration',
      'Comprehensive Pulmonary Function Testing (PFT & DLCO)',
      'Level 1 Overnight Diagnostic Sleep Study (Polysomnography)',
      'Severe Asthma, Allergy & Biologics Immunotherapy Clinic',
      'Pulmonary Rehabilitation & Smoking Cessation Clinic'
    ],
    specializedTreatments: [
      'Foreign Body Removal via Rigid & Flexible Bronchoscopy',
      'Pleural Fluid Aspiration, Biopsy & Medical Thoracoscopy',
      'Bronchial Thermoplasty for Refractory Severe Asthma',
      'Non-Invasive Ventilation (BiPAP/CPAP) Titration',
      'Inhaled Vasodilator Therapy for Pulmonary Hypertension'
    ],
    facilities: [
      'Olympus EBUS Scope & Ultrasound Processor',
      'Body Plethysmograph with Carbon Monoxide Diffusion Capacity',
      'Dedicated 14-bed Respiratory Intensive Care Unit (RICU)',
      'Dedicated 2-bed Acoustically Shielded Sleep Laboratory',
      'Negative Pressure Airborne Infection Isolation Rooms (AIIR)'
    ],
    faqs: [
      {
        question: 'What is EBUS and how does it help lung diagnosis?',
        answer: 'Endobronchial Ultrasound combines bronchoscopy with ultrasound to visualize and take needle samples from deep chest lymph nodes without needing open chest surgery.'
      },
      {
        question: 'When should someone take a sleep study?',
        answer: 'If you experience loud snoring, witnessed pauses in breathing at night, morning headaches, or severe daytime sleepiness, an overnight polysomnography is indicated.'
      }
    ],
    doctorIds: ['doc-17', 'doc-18'],
    stats: [
      { label: 'Annual Bronchoscopies', value: '1,450+' },
      { label: 'EBUS Procedures', value: '480+' },
      { label: 'Sleep Studies Conducted', value: '820+' },
      { label: 'PFT Assessments', value: '9,200+' }
    ],
    iconName: 'Wind'
  },
  {
    id: 'obstetrics-gynecology',
    name: 'Obstetrics, Gynecology & High-Risk Pregnancy',
    category: 'Clinical Specialty',
    tagline: 'Compassionate Women’s Health, Fetal Medicine & Advanced Laparoscopy',
    shortDescription: 'Specialized high-risk pregnancy care, painless delivery suites, advanced gynecological laparoscopy, and comprehensive fetal medicine.',
    fullDescription: 'Catering to every stage of a woman’s life, our department offers comprehensive antenatal, perinatology, and gynecological surgical care. We specialize in managing complex maternal medical complications like gestational diabetes, pre-eclampsia, and recurrent pregnancy loss with our Level III NICU support.',
    headOfDepartment: 'Dr. Nalini B. Merchant, MD (Obstetrics & Gyn), FRCOG (UK)',
    bedCount: 90,
    keyServices: [
      'Comprehensive Antenatal Care & 24/7 Painless Labor Delivery Suites',
      'High-Risk Pregnancy Unit backed by Adult ICU and Level III NICU',
      'Fetal Medicine & Advanced Genetic Screening / 3D Scans',
      'Laparoscopic Hysterectomy & Myomectomy (Fibroid Removal)',
      'Adolescent Gynecology & Menopause Wellness Clinic',
      'Gynecological Oncology Screening & Colposcopy'
    ],
    specializedTreatments: [
      'Total Laparoscopic Hysterectomy (TLH)',
      'Endometriosis Excision Surgery',
      'Amniocentesis & Chorionic Villus Sampling (CVS)',
      'Fertility-Enhancing Laparoscopic & Hysteroscopic Surgeries',
      'Urogynecology & Pelvic Floor Reconstruction'
    ],
    facilities: [
      '8 Individual State-of-the-Art LDR (Labor, Delivery, Recovery) Rooms',
      'Dedicated Obstetric Operation Theaters connected directly to NICU',
      'GE Voluson E10 High-End Ultrasound for Fetal Echocardiography',
      'Lactation & Postpartum Maternal Nursing Support Staff',
      'Pre-Natal Yoga & Lamaze Childbirth Education Classes'
    ],
    faqs: [
      {
        question: 'Are painless delivery epidural services available round the clock?',
        answer: 'Yes, our dedicated in-house obstetric anesthesiology team provides epidural analgesia 24 hours a day, 7 days a week.'
      },
      {
        question: 'What is an LDR room?',
        answer: 'An LDR (Labor, Delivery, Recovery) room allows expectant mothers to experience labor, deliver, and recover in the same private, luxurious room without moving beds.'
      }
    ],
    doctorIds: ['doc-13', 'doc-14'],
    stats: [
      { label: 'Annual Safe Deliveries', value: '4,200+' },
      { label: 'High-Risk Pregnancies', value: '1,350+' },
      { label: 'Minimally Invasive Surgeries', value: '1,800+' },
      { label: 'Maternal Safety Record', value: '99.9%' }
    ],
    iconName: 'HeartHandshake'
  }
];
