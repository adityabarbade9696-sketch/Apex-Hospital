export interface HospitalService {
  id: string;
  title: string;
  category: 'Critical Care' | 'Diagnostics & Imaging' | 'Surgical & Procedural' | 'Support & Special Units';
  tagline: string;
  description: string;
  features: string[];
  timing: string;
  contactExtension: string;
  iconName: string;
}

export const HOSPITAL_SERVICES: HospitalService[] = [
  {
    id: 'emergency-trauma',
    title: '24/7 Level-1 Emergency & Trauma Care',
    category: 'Critical Care',
    tagline: 'Instant Triaged Resuscitation with Immediate CT & Cath Lab Access',
    description: 'A 50-bed emergency department functioning round-the-clock with dedicated red-zone resuscitation bays, on-site 128-slice CT scanner, point-of-care lab, and ATLS-certified emergency physicians.',
    features: ['Code STEMI (< 50 min door-to-balloon)', 'Code Stroke (< 45 min door-to-needle)', 'Dedicated 24/7 emergency surgical theater', 'Mobile ICU ambulances with telemetry'],
    timing: '24 Hours, 365 Days',
    contactExtension: '+91 (020) 2612-4000 / Ext 101',
    iconName: 'Ambulance'
  },
  {
    id: 'diagnostics-imaging',
    title: 'State-of-the-Art Radiology & Diagnostic Imaging',
    category: 'Diagnostics & Imaging',
    tagline: '3T MRI, 128-Slice Dual Source CT, Digital Mammography & PET-CT',
    description: 'Fully integrated picture archiving (PACS) radiological suite offering ultra-high resolution non-invasive imaging, cardiac CT angiography, functional brain MRI, and interventional radiology procedures.',
    features: ['Siemens 3T Magnetom Vida MRI with BioMatrix', '128-Slice Low Dose Dual Energy CT', 'Digital Breast Tomosynthesis & Bone Densitometry (DEXA)', 'Interventional Radiology guided biopsies & embolizations'],
    timing: '24/7 for Inpatient & Emergency / 8:00 AM – 8:00 PM for OPD',
    contactExtension: '+91 (020) 2612-4020 / Ext 201',
    iconName: 'ScanLine'
  },
  {
    id: 'blood-bank',
    title: '24/7 NABH-Accredited Blood Centre & Component Therapy',
    category: 'Support & Special Units',
    tagline: '100% Component Separation, Apheresis & Nucleic Acid Testing (NAT)',
    description: 'Apex Blood Centre is a licensed regional blood transfusion facility preparing high-purity packed red blood cells, single-donor platelets (SDP), fresh frozen plasma, and cryoprecipitate tested by advanced NAT technology.',
    features: ['Nucleic Acid Testing (NAT) for ultra-safe blood safety', 'Automated Platelet Apheresis Units', 'Therapeutic Plasma Exchange (TPE)', 'Round-the-clock voluntary blood donation & issue'],
    timing: '24 Hours Open',
    contactExtension: '+91 (020) 2612-4050 / Ext 105',
    iconName: 'Droplet'
  },
  {
    id: 'robotic-surgery',
    title: 'Robotic & Minimally Invasive Surgical Suite',
    category: 'Surgical & Procedural',
    tagline: 'Da Vinci Xi 4th Gen Dual-Console Robotic Surgery System',
    description: 'Pioneering minimally invasive precision operations across urology, surgical oncology, gynecology, and gastrointestinal surgery, resulting in negligible blood loss, minimal scarring, and quick recovery.',
    features: ['High-definition 3D stereoscopic vision with 10x magnification', 'EndoWrist instruments with 7 degrees of freedom', 'Laminar airflow cleanrooms (Class 100)', 'Rapid post-operative rehabilitation pathways'],
    timing: 'Elective & 24/7 Emergency Operations',
    contactExtension: '+91 (020) 2612-4030 / Ext 302',
    iconName: 'Cpu'
  },
  {
    id: 'intensive-care-units',
    title: 'Advanced Intensive Care Units (ICU, CCU, NICU, PICU)',
    category: 'Critical Care',
    tagline: '180+ High-Dependency & Critical Care Beds with 1:1 Nursing',
    description: 'Multi-tiered intensive care units led by full-time European-certified intensivists. Includes Medical ICU, Surgical ICU, Coronary Care Unit, Neuro ICU, and Level III-B Neonatal Intensive Care.',
    features: ['1:1 nurse-to-patient ratio for ventilated patients', 'Extracorporeal Membrane Oxygenation (ECMO) & CRRT units', 'Centralized physiological monitoring consoles', 'Infection-controlled HEPA-filtered positive/negative isolation'],
    timing: '24 Hours Operational',
    contactExtension: '+91 (020) 2612-4040 / Ext 401',
    iconName: 'ShieldAlert'
  },
  {
    id: 'organ-transplant',
    title: 'Apex Comprehensive Organ Transplant Centre',
    category: 'Surgical & Procedural',
    tagline: 'Licensed for Living & Deceased Donor Kidney, Liver & Heart Transplants',
    description: 'Government-authorized organ transplantation institute supported by dedicated transplant coordinators, specialized transplant ICUs, HLA immunogenetics lab, and lifetime post-transplant follow-up clinics.',
    features: ['Kidney Transplants (including ABO-incompatible & pediatric)', 'Adult & Pediatric Living Donor Liver Transplants', 'Heart Transplantation and LVAD Implants', 'State organ sharing registry (ROTTO / SOTTO) affiliation'],
    timing: 'Consultation: Mon – Sat / Emergency 24/7',
    contactExtension: '+91 (020) 2612-4060 / Ext 505',
    iconName: 'HeartHandshake'
  },
  {
    id: 'dialysis-centre',
    title: '24/7 Advanced Hemodialysis & Renal Care Centre',
    category: 'Support & Special Units',
    tagline: '40 High-Flux Dialysis Stations with Dual RO Water Purification',
    description: 'One of the largest dialysis facilities in the city, performing over 2,600 sessions monthly. Separate dedicated machines for seropositive patients, nocturnal dialysis options, and bedside ICU CRRT.',
    features: ['State-of-the-art Fresenius 5008S machines', 'Ultrapure dual-stage reverse osmosis water plant', 'Bedside CRRT and SLED for unstable ICU patients', 'Comprehensive vascular access management'],
    timing: '24/7 (3 shifts + emergency shift)',
    contactExtension: '+91 (020) 2612-4070 / Ext 601',
    iconName: 'Activity'
  },
  {
    id: 'daycare-chemo',
    title: 'Day Care Chemotherapy & Infusion Lounge',
    category: 'Support & Special Units',
    tagline: 'Painless, Dignified Same-Day Oncology Infusions',
    description: 'A 30-bed comfortable day care suite equipped with ergonomic recliner chairs, specialized oncology pharmacists preparing drugs in laminar biosafety hoods, and round-the-clock emergency backup.',
    features: ['Central venous port & PICC line care expertise', 'Cold-cap therapy for hair-fall prevention', 'Nutritional and psychological counseling during infusion', 'Same-day discharge within 3 to 6 hours'],
    timing: '8:00 AM – 8:00 PM (Mon – Sat)',
    contactExtension: '+91 (020) 2612-4080 / Ext 702',
    iconName: 'Sparkles'
  }
];
