export interface HealthArticle {
  id: string;
  category: 'Heart Health' | 'Neurology' | 'Diabetes & Endocrine' | 'Child Health' | 'Preventive Wellness' | 'Kidney Care';
  title: string;
  author: string;
  authorTitle: string;
  readTime: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  content: string[];
}

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'art-1',
    category: 'Heart Health',
    title: 'Recognizing Early Heart Attack Warning Signs: The Critical First 60 Minutes',
    author: 'Dr. Anand K. Varma',
    authorTitle: 'Director & Chief Interventional Cardiologist',
    readTime: '5 min read',
    date: 'September 2026',
    summary: 'Heart attacks do not always present as dramatic chest pain. Learn subtle signs like cold sweats, jaw ache, and unexplained nausea.',
    keyTakeaways: [
      'Chest heaviness or squeezing radiating to the left arm, neck, or jaw.',
      'Atypical presentations are common in women and diabetic patients (breathlessness, sudden weakness).',
      'Never drive yourself to the hospital; summon an Advanced Cardiac Life Support ambulance immediately.',
      'Door-to-Balloon time under 60 minutes saves maximum heart muscle from permanent necrosis.'
    ],
    content: [
      'Every minute counts during an acute coronary syndrome. In clinical cardiology, we emphasize that "Time is Muscle." When a coronary artery is abruptly occluded by a thrombus (blood clot), the myocardium begins to sustain irreversible ischemic damage within 20 to 30 minutes.',
      'Classic symptoms involve retrosternal crushing pressure often described as "an elephant sitting on the chest." However, over 30% of women and elderly individuals experience atypical manifestations: abrupt profound fatigue, epigastric heartburn unresponsive to antacids, jaw discomfort, or cold drenching perspiration.',
      'If you suspect someone is suffering a heart attack, keep the patient seated and calm, dissolve one 300mg chewable aspirin if not allergic, and dial emergency 1066 without delay.'
    ]
  },
  {
    id: 'art-2',
    category: 'Neurology',
    title: 'Act F.A.S.T.: How to Detect a Stroke and Protect Brain Cells',
    author: 'Dr. Meera S. Joshi',
    authorTitle: 'Head of Department & Senior Neurosurgeon',
    readTime: '4 min read',
    date: 'August 2026',
    summary: 'When a stroke strikes, 2 million neurons die every minute. Use the FAST test to recognize the emergency instantly.',
    keyTakeaways: [
      'F - Face Drooping: Does one side of the face droop when smiling?',
      'A - Arm Weakness: Does one arm drift downward when raised?',
      'S - Speech Difficulty: Is speech slurred or strange?',
      'T - Time to Call Ambulance: Immediate hospital transit within 4.5 hours enables clot retrieval.'
    ],
    content: [
      'An acute ischemic stroke occurs when arterial blood supply to a portion of the cerebral cortex is compromised. Just as in cardiology, neurologists live by the maxim "Time is Brain."',
      'Modern neuro-interventional treatments such as intravenous tissue plasminogen activator (IV-tPA) and endovascular mechanical thrombectomy can literally reverse paralysis if performed within the golden window of 4.5 to 24 hours.',
      'Never give the patient food, water, or aspirin until a non-contrast CT brain scan confirms whether the stroke is ischemic or hemorrhagic.'
    ]
  },
  {
    id: 'art-3',
    category: 'Diabetes & Endocrine',
    title: 'Safeguarding Your Kidneys and Heart When Living with Type 2 Diabetes',
    author: 'Dr. Devendra P. Deshmukh',
    authorTitle: 'Head of Nephrology & Renal Sciences',
    readTime: '6 min read',
    date: 'July 2026',
    summary: 'Diabetes remains the leading cause of chronic kidney failure and cardiovascular disease. How regular microalbuminuria checks save organs.',
    keyTakeaways: [
      'Target an HbA1c below 7.0% for most adults, balanced against hypoglycemia risks.',
      'Undergo annual Urine Microalbumin and Serum Creatinine (eGFR) checks.',
      'Maintain blood pressure below 130/80 mmHg to reduce glomerular hyperfiltration.',
      'Stay physically active for at least 150 minutes of moderate aerobic exercise weekly.'
    ],
    content: [
      'Diabetic nephropathy is an insidious disease. The delicate filtering capillaries of the kidneys (glomeruli) can sustain silent injury for a decade before the patient notices swelling or fatigue.',
      'Simple, affordable screening with a spot urine Albumin-to-Creatinine Ratio (uACR) can detect microalbuminuria in its earliest, entirely reversible stage.',
      'Modern classes of medications like SGLT2 inhibitors and GLP-1 receptor agonists not only reduce blood sugar, but also provide profound organ protection for both the heart and kidneys.'
    ]
  },
  {
    id: 'art-4',
    category: 'Child Health',
    title: 'Essential Child Nutrition: Building Immunity and Growth from Infancy to Adolescence',
    author: 'Dr. Sunita V. Chordia',
    authorTitle: 'Director of Pediatrics & Neonatal Intensive Care',
    readTime: '5 min read',
    date: 'June 2026',
    summary: 'Practical dietary recommendations from pediatric specialists on avoiding processed sugars, fostering gut health, and micronutrient balance.',
    keyTakeaways: [
      'Exclusive breastfeeding for the first 6 months provides optimal immune protection.',
      'Introduce varied, nutrient-dense home-cooked complementary foods from 6 months.',
      'Eliminate sugar-sweetened beverages and ultra-processed snack foods before age 2.',
      'Ensure adequate daily Vitamin D, iron, and dietary calcium for bone mineralization.'
    ],
    content: [
      'The first 1,000 days of a child’s life—from conception to the second birthday—represent a critical neurodevelopmental window that shapes metabolic programming for adulthood.',
      'We witness an escalating prevalence of pediatric obesity and childhood fatty liver disease, primarily driven by excessive consumption of packaged snacks and screen-time sedentariness.',
      'Encourage colorful fruits, legumes, green leafy vegetables, and dairy while preserving family meal traditions.'
    ]
  }
];
