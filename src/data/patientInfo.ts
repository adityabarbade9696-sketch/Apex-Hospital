export interface RoomCategory {
  name: string;
  description: string;
  amenities: string[];
  approxTariff: string;
}

export interface TpaPartner {
  name: string;
  type: 'Private Insurer' | 'TPA (Third Party Administrator)' | 'Government Scheme';
  cashlessFacility: boolean;
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    name: 'General Ward',
    description: 'Spacious, well-ventilated shared accommodation with 24/7 dedicated nursing attention, curtains for patient privacy, and individual bedside lockers.',
    amenities: ['Central oxygen & suction ports', 'Nurse call bell at bedside', 'Shared hygienic restrooms', 'Common visitor waiting lounge', 'Full clinical monitoring'],
    approxTariff: '₹1,500 / day (inclusive of nursing)'
  },
  {
    name: 'Semi-Private (Twin Sharing)',
    description: 'Two-bedded air-conditioned room with partition curtain, individual television, bedside attendant chair-bed, and attached washroom.',
    amenities: ['Air conditioning', 'Attendant cot/recliner', 'Attached bathroom with hot water', 'Cable TV & Free Wi-Fi', 'Individual wardrobe & storage'],
    approxTariff: '₹3,200 / day'
  },
  {
    name: 'Single Private AC Room',
    description: 'Exclusive private room designed for peace, privacy, and restful recovery. Includes private attendant sofa-bed and telephone.',
    amenities: ['Private air-conditioned suite', 'Attendant convertible sofa-bed', 'Flat screen smart TV & high-speed Wi-Fi', 'Attached private modern bathroom', 'Dietitian-approved custom meals'],
    approxTariff: '₹5,800 / day'
  },
  {
    name: 'Deluxe Suite',
    description: 'Premium two-room suite featuring a patient recovery room and an adjoining visitor lounge with kitchenette, refrigerator, and microwave.',
    amenities: ['Separate patient room and living lounge', 'Refrigerator, microwave & electric kettle', 'Two smart LED televisions', 'Dedicated attendant couch & dining area', 'Priority billing & pharmacy delivery'],
    approxTariff: '₹11,500 / day'
  }
];

export const TPA_PARTNERS: TpaPartner[] = [
  { name: 'Star Health & Allied Insurance', type: 'Private Insurer', cashlessFacility: true },
  { name: 'ICICI Lombard General Insurance', type: 'Private Insurer', cashlessFacility: true },
  { name: 'HDFC ERGO Health Insurance', type: 'Private Insurer', cashlessFacility: true },
  { name: 'Niva Bupa Health Insurance (Max Bupa)', type: 'Private Insurer', cashlessFacility: true },
  { name: 'Care Health Insurance (Religare)', type: 'Private Insurer', cashlessFacility: true },
  { name: 'Bajaj Allianz General Insurance', type: 'Private Insurer', cashlessFacility: true },
  { name: 'Tata AIG General Insurance', type: 'Private Insurer', cashlessFacility: true },
  { name: 'New India Assurance Co. Ltd.', type: 'Private Insurer', cashlessFacility: true },
  { name: 'National Insurance Company', type: 'Private Insurer', cashlessFacility: true },
  { name: 'Oriental Insurance Company', type: 'Private Insurer', cashlessFacility: true },
  { name: 'Medi Assist Insurance TPA Pvt. Ltd.', type: 'TPA (Third Party Administrator)', cashlessFacility: true },
  { name: 'Paramount Health Services & Insurance TPA', type: 'TPA (Third Party Administrator)', cashlessFacility: true },
  { name: 'Vidal Health Insurance TPA Pvt. Ltd.', type: 'TPA (Third Party Administrator)', cashlessFacility: true },
  { name: 'MDIndia Health Insurance TPA Pvt. Ltd.', type: 'TPA (Third Party Administrator)', cashlessFacility: true },
  { name: 'Heritage Health Insurance TPA', type: 'TPA (Third Party Administrator)', cashlessFacility: true },
  { name: 'FHPL (Family Health Plan Insurance TPA)', type: 'TPA (Third Party Administrator)', cashlessFacility: true },
  { name: 'Ayushman Bharat PM-JAY Scheme', type: 'Government Scheme', cashlessFacility: true },
  { name: 'Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)', type: 'Government Scheme', cashlessFacility: true },
  { name: 'CGHS / ECHS Defense & Central Govt Scheme', type: 'Government Scheme', cashlessFacility: true }
];

export const PATIENT_FAQS = [
  {
    question: 'How do I register for an Outpatient (OPD) consultation?',
    answer: 'You can register online through our website or arrive at the Central OPD Registration Counter on the Ground Floor. First-time visitors are issued a unique UHID (Unique Hospital Identification) card that securely records your lifelong electronic health records.'
  },
  {
    question: 'What documents are required for Cashless Mediclaim / Insurance admission?',
    answer: 'Please present your Health Insurance TPA Card, valid photo ID (Aadhaar / Voter ID / Passport), and the treating doctor’s admission advice note at our 24/7 TPA Desk. Our team initiates pre-authorization within 30 minutes.'
  },
  {
    question: 'What are the visiting hours for inpatients and ICUs?',
    answer: 'General Wards & Private Rooms: 04:30 PM to 07:00 PM daily (maximum 2 visitors per patient at a time with visitor pass). Intensive Care Units (ICU/CCU/NICU): 11:30 AM to 12:30 PM & 05:00 PM to 06:00 PM (1 immediate family member only, strictly following infection-control attire).'
  },
  {
    question: 'How does the hospital discharge process work?',
    answer: 'During morning clinical rounds, your primary physician issues the discharge order. The nursing team finalizes the discharge summary and medication reconciliation, followed by pharmacy returns and billing clearance. The complete discharge package is typically ready between 12:00 PM and 02:00 PM.'
  },
  {
    question: 'Are blood donors required for emergency or elective surgeries?',
    answer: 'Apex Blood Centre maintains an extensive inventory of all blood groups. However, family replacement voluntary donations are encouraged to help replenish blood components for the community.'
  }
];

export const PATIENT_RIGHTS = [
  'Right to receive considerate, respectful, and dignified medical care irrespective of race, religion, gender, or social background.',
  'Right to complete, understandable information regarding diagnosis, proposed treatment alternatives, expected recovery, and financial estimates.',
  'Right to informed consent prior to any invasive surgical or diagnostic procedure, and the right to seek a second medical opinion.',
  'Right to confidentiality of personal health information and privacy during physical examinations and treatments.',
  'Right to inspect medical records and receive a detailed, itemized hospital bill.',
  'Right to voice grievances or concerns through the Patient Welfare & Grievance Redressal Committee.'
];
