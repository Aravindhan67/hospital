export interface Department {
  id: string;
  name: string;
  code: string;
  iconName: string;
  description: string;
  headOfDepartment: string;
  doctorCount: number;
  phone: string;
  services: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  departmentName: string;
  specialization: string;
  qualification: string;
  experienceYears: number;
  consultationFee: number;
  avatar: string;
  rating: number;
  reviewsCount: number;
  availability: string;
  availableDays: string[];
  slots: string[];
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  department: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'dept-gen-med',
    name: 'General Medicine',
    code: 'GEN',
    iconName: 'Stethoscope',
    description: 'Comprehensive primary healthcare, routine physicals, chronic illness management, and preventive medical screenings.',
    headOfDepartment: 'Dr. Arthur Vance, MD, FACP',
    doctorCount: 8,
    phone: '8274627637',
    services: ['Preventive Health Checkups', 'Hypertension & Diabetes Control', 'Infectious Disease Care', 'Adult Immunization']
  },
  {
    id: 'dept-cardio',
    name: 'Cardiology',
    code: 'CARD',
    iconName: 'HeartPulse',
    description: 'Advanced cardiovascular diagnostics, interventional cardiology, electrophysiology, and comprehensive cardiac rehabilitation.',
    headOfDepartment: 'Dr. Sarah Jenkins, MD, FACC',
    doctorCount: 6,
    phone: '8274627637',
    services: ['Echocardiography & ECG', 'Cardiac Catheterization', 'Angioplasty & Stenting', 'Heart Failure Management']
  },
  {
    id: 'dept-ortho',
    name: 'Orthopedics & Joint Care',
    code: 'ORTH',
    iconName: 'Bone',
    description: 'Specialized diagnosis and treatment of musculoskeletal disorders, sports trauma, joint replacements, and spine surgery.',
    headOfDepartment: 'Dr. Marcus Sterling, MS, FRCS',
    doctorCount: 5,
    phone: '8274627637',
    services: ['Total Knee & Hip Replacement', 'Arthroscopic Surgery', 'Spine & Trauma Care', 'Sports Rehabilitation']
  },
  {
    id: 'dept-peds',
    name: 'Pediatrics & Neonatology',
    code: 'PED',
    iconName: 'Baby',
    description: 'Compassionate medical care from newborn neonates to young adolescents, with pediatric intensive care (NICU/PICU).',
    headOfDepartment: 'Dr. Elena Rostova, MD, FAAP',
    doctorCount: 7,
    phone: '8274627637',
    services: ['Newborn Intensive Care (NICU)', 'Pediatric Vaccinations', 'Growth & Development Assessment', 'Childhood Asthma Clinic']
  },
  {
    id: 'dept-neuro',
    name: 'Neurology & Neurosurgery',
    code: 'NEUR',
    iconName: 'Brain',
    description: 'Expert medical and surgical management for brain, spinal cord, peripheral nerve, and neuromuscular disorders.',
    headOfDepartment: 'Dr. David Alverez, MD, PhD',
    doctorCount: 4,
    phone: '8274627637',
    services: ['Stroke Management Unit', 'Epilepsy Monitoring', 'Neurosurgical Interventions', 'Parkinson’s & Movement Clinic']
  },
  {
    id: 'dept-gyn',
    name: 'Obstetrics & Gynecology',
    code: 'OBGYN',
    iconName: 'UserCheck',
    description: 'Complete women’s healthcare, high-risk pregnancy monitoring, minimally invasive laparoscopic surgery, and fertility guidance.',
    headOfDepartment: 'Dr. Rachel Chen, MD, FACOG',
    doctorCount: 6,
    phone: '8274627637',
    services: ['High-Risk Maternity Care', 'Minimally Invasive Surgery', 'Gynecological Oncology', 'Prenatal Screening']
  },
  {
    id: 'dept-derm',
    name: 'Dermatology & Skin Care',
    code: 'DERM',
    iconName: 'Sparkles',
    description: 'Clinical dermatology, pediatric skin conditions, advanced dermatopathology, and medical laser therapies.',
    headOfDepartment: 'Dr. Sophia Loren, MD',
    doctorCount: 4,
    phone: '8274627637',
    services: ['Clinical Skin Diagnostics', 'Eczema & Psoriasis Therapy', 'Mole Evaluation & Biopsies', 'Laser Skin Treatments']
  },
  {
    id: 'dept-ent',
    name: 'ENT & Head-Neck Surgery',
    code: 'ENT',
    iconName: 'Ear',
    description: 'Comprehensive medical and surgical solutions for ear, nose, throat, voice disorders, and head/neck pathologies.',
    headOfDepartment: 'Dr. James Campbell, MS (ENT)',
    doctorCount: 3,
    phone: '8274627637',
    services: ['Sinus Endoscopy', 'Audiometry & Hearing Aids', 'Tonsil & Adenoid Surgery', 'Snoring & Sleep Apnea Care']
  },
  {
    id: 'dept-opht',
    name: 'Ophthalmology',
    code: 'OPHT',
    iconName: 'Eye',
    description: 'State-of-the-art vision care, cataract microsurgery, glaucoma management, and pediatric ophthalmology.',
    headOfDepartment: 'Dr. Priya Patel, MD',
    doctorCount: 4,
    phone: '8274627637',
    services: ['Cataract Phacoemulsification', 'Glaucoma Laser Therapy', 'Retina Diagnostics', 'Refractive Vision Correction']
  },
  {
    id: 'dept-dent',
    name: 'Dentistry & Maxillofacial',
    code: 'DENT',
    iconName: 'Smile',
    description: 'Advanced dental restorations, orthodontics, oral implants, and emergency trauma maxillofacial surgery.',
    headOfDepartment: 'Dr. Kenneth Cole, DDS, OMFS',
    doctorCount: 3,
    phone: '8274627637',
    services: ['Dental Implants', 'Orthodontic Aligners', 'Endodontics & Root Canals', 'Oral Maxillofacial Surgery']
  },
  {
    id: 'dept-emg',
    name: '24/7 Emergency & Trauma',
    code: 'EMG',
    iconName: 'Ambulance',
    description: 'Level-1 Emergency Trauma Center staffed around the clock by board-certified emergency medicine physicians and critical care nurses.',
    headOfDepartment: 'Dr. Robert Torres, MD, FACEP',
    doctorCount: 10,
    phone: '8274627637',
    services: ['Immediate Triage & Resuscitation', 'Acute Coronary Protocol', 'Polytrauma Emergency Care', 'Rapid Stroke Intervention']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-001',
    name: 'Dr. Sarah Jenkins',
    title: 'Senior Interventional Cardiologist',
    departmentId: 'dept-cardio',
    departmentName: 'Cardiology',
    specialization: 'Interventional Cardiology & Coronary Angioplasty',
    qualification: 'MD (Cardiology), FACC, Harvard Medical School',
    experienceYears: 16,
    consultationFee: 150,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    rating: 4.9,
    reviewsCount: 312,
    availability: 'Mon - Fri',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    slots: ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM'],
    bio: 'Dr. Sarah Jenkins is an internationally acclaimed interventional cardiologist with over 16 years of experience in catheterization and coronary stent placement.'
  },
  {
    id: 'doc-002',
    name: 'Dr. Marcus Sterling',
    title: 'Chief Orthopedic Surgeon',
    departmentId: 'dept-ortho',
    departmentName: 'Orthopedics & Joint Care',
    specialization: 'Total Joint Replacement & Sports Traumatology',
    qualification: 'MS (Orthopedics), FRCS (Edin), Johns Hopkins Fellow',
    experienceYears: 19,
    consultationFee: 140,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    rating: 4.8,
    reviewsCount: 245,
    availability: 'Mon, Wed, Fri',
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    slots: ['09:30 AM', '11:00 AM', '02:30 PM', '04:00 PM'],
    bio: 'Dr. Sterling specializes in minimally invasive joint replacements, sports injuries, and advanced arthroscopic procedures.'
  },
  {
    id: 'doc-003',
    name: 'Dr. Elena Rostova',
    title: 'Lead Pediatrician & Neonatologist',
    departmentId: 'dept-peds',
    departmentName: 'Pediatrics & Neonatology',
    specialization: 'Neonatal Care & Pediatric Pulmonology',
    qualification: 'MD (Pediatrics), FAAP, Stanford University',
    experienceYears: 14,
    consultationFee: 120,
    avatar: 'https://images.unsplash.com/photo-1594824813579-9f44f6f03be2?auto=format&fit=crop&q=80&w=300',
    rating: 5.0,
    reviewsCount: 420,
    availability: 'Mon - Thu',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    slots: ['10:00 AM', '11:30 AM', '03:00 PM', '04:30 PM'],
    bio: 'Dr. Elena Rostova brings deep compassion to pediatric healthcare, offering preventive developmental monitoring and neonatal intensive care.'
  },
  {
    id: 'doc-004',
    name: 'Dr. David Alverez',
    title: 'Director of Neurology',
    departmentId: 'dept-neuro',
    departmentName: 'Neurology & Neurosurgery',
    specialization: 'Epilepsy, Neuro-vascular Disorders & Stroke Care',
    qualification: 'MD, PhD (Neuroscience), Mayo Clinic Alumnus',
    experienceYears: 18,
    consultationFee: 160,
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
    rating: 4.9,
    reviewsCount: 198,
    availability: 'Tue, Thu, Sat',
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    slots: ['09:00 AM', '10:30 AM', '01:30 PM', '03:00 PM'],
    bio: 'Dr. Alverez leads our comprehensive stroke center and has authored over 40 peer-reviewed papers on neural rehabilitation.'
  },
  {
    id: 'doc-005',
    name: 'Dr. Rachel Chen',
    title: 'Senior Obstetrician & Gynecologist',
    departmentId: 'dept-gyn',
    departmentName: 'Obstetrics & Gynecology',
    specialization: 'High-Risk Obstetrics & Laparoscopic Surgery',
    qualification: 'MD, FACOG, University of California San Francisco',
    experienceYears: 15,
    consultationFee: 130,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
    rating: 4.9,
    reviewsCount: 380,
    availability: 'Mon, Wed, Fri',
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    slots: ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM'],
    bio: 'Dr. Rachel Chen is devoted to patient-centered maternal-fetal medicine, personalized labor plans, and minimally invasive treatments.'
  },
  {
    id: 'doc-006',
    name: 'Dr. Arthur Vance',
    title: 'Senior Consultant Physician',
    departmentId: 'dept-gen-med',
    departmentName: 'General Medicine',
    specialization: 'Internal Medicine & Chronic Disease Management',
    qualification: 'MD, FACP, Columbia University',
    experienceYears: 22,
    consultationFee: 100,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    rating: 4.8,
    reviewsCount: 512,
    availability: 'Mon - Sat',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    slots: ['08:30 AM', '10:00 AM', '11:30 AM', '03:00 PM'],
    bio: 'With over two decades of clinical mastery, Dr. Vance provides rigorous diagnostic evaluations for complex medical conditions.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-001',
    title: '24/7 Emergency & Level-1 Trauma',
    iconName: 'Ambulance',
    shortDesc: 'Rapid triage, acute resuscitation suites, and trauma surgeons on standby 24 hours a day, 365 days a year.',
    fullDesc: 'Our Emergency Department is designated as a comprehensive regional emergency center equipped with dedicated cardiac resuscitation rooms, CT scanners right next to triage, and direct rooftop helipad transport.',
    features: ['Immediate triage within 3 minutes', 'Dedicated emergency operating theatres', 'On-site 24/7 laboratory & blood bank', 'Emergency ambulance fleet with mobile ICU units'],
    department: 'Emergency & Trauma'
  },
  {
    id: 'srv-002',
    title: 'Intensive Care Units (ICU, NICU & CCU)',
    iconName: 'Activity',
    shortDesc: 'Continuous computerized physiological monitoring with 1:1 specialist nursing care in advanced critical suites.',
    fullDesc: 'We maintain 36 private intensive care suites featuring HEPA positive-pressure air filtration, invasive hemodynamic monitoring, and multi-modal life support systems.',
    features: ['1:1 Critical nurse-to-patient ratio', 'High-frequency oscillatory ventilators', 'Continuous renal replacement therapy (CRRT)', 'In-room family consultation suites'],
    department: 'Critical Care'
  },
  {
    id: 'srv-003',
    title: 'Advanced Diagnostic Pathology & Imaging',
    iconName: 'ScanLine',
    shortDesc: 'Ultra-low-dose 3T MRI, 128-slice CT scans, 4D ultrasound, and rapid automated clinical laboratory diagnostics.',
    fullDesc: 'Our diagnostics wing delivers accurate pathology reports within 45 minutes for emergency labs, backed by subspecialty board-certified radiologists and pathologists.',
    features: ['3.0 Tesla Silent MRI imaging', '128-Slice High Speed Cardiac CT', 'Molecular and PCR genetic pathology', 'Digital PACS portal for patient record access'],
    department: 'Laboratory & Radiology'
  },
  {
    id: 'srv-004',
    title: 'Modern Inpatient Suites & Patient Care',
    iconName: 'Bed',
    shortDesc: 'Single, semi-private, and executive suites engineered for clinical hygiene, natural light, and quiet recovery.',
    fullDesc: 'Designed to feel calming rather than clinical, every inpatient room features ergonomically motorized beds, private en-suite bathrooms, guest seating, and nurse call systems.',
    features: ['Motorized anti-decubitus medical beds', 'Dedicated dietary meal planning by clinical nutritionists', 'Daily attending physician rounds', 'Electronic patient bedside charting'],
    department: 'Inpatient Medicine'
  },
  {
    id: 'srv-005',
    title: 'Robotic & Fully Stocked In-Hospital Pharmacy',
    iconName: 'Pill',
    shortDesc: '24-hour pharmaceutical dispensing with computerized cross-allergy checks and medicine counseling.',
    fullDesc: 'Our pharmacy stocks over 3,000 certified formulations, utilizing automated barcode dispensing to guarantee 100% accuracy in dosages and patient medication schedules.',
    features: ['Computerized drug-interaction validation', 'Cold-chain storage for biologicals & vaccines', '24/7 prescription delivery for inpatients', 'Personalized pharmacist medication counseling'],
    department: 'Pharmacy Services'
  },
  {
    id: 'srv-006',
    title: 'Digital Electronic Health Records (EHR)',
    iconName: 'FileText',
    shortDesc: 'Encrypted, HIPAA-aligned digital portal for lab reports, doctor consultation notes, and prescription history.',
    fullDesc: 'Patients and authorized physicians have instant, secure cloud access to clinical summaries, lab trend graphs, and digital invoices across any device.',
    features: ['Encrypted patient health records', 'Real-time lab result push notifications', 'Digital prescription refills', 'Consolidated billing and receipt downloads'],
    department: 'Digital Health'
  }
];

export const HOSPITAL_STATS = [
  { label: 'Board-Certified Specialists', value: '45+', icon: 'Award' },
  { label: 'Licensed Inpatient Beds', value: '180', icon: 'BedDouble' },
  { label: 'Patient Satisfaction', value: '99.4%', icon: 'HeartHandshake' },
  { label: 'Emergency Response Time', value: '< 4 Min', icon: 'Clock' }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Margaret H. Collins',
    age: 58,
    treatment: 'Cardiology Care & Stent Procedure',
    doctor: 'Dr. Sarah Jenkins',
    comment: 'The calm professionalism and cleanliness of St. Jude gave me complete confidence. Dr. Jenkins explained every step of my procedure with clarity and compassion.',
    rating: 5,
    location: 'Seattle, WA'
  },
  {
    id: 't-2',
    name: 'David & Emily Miller',
    age: 34,
    treatment: 'Maternity & Neonatal Delivery',
    doctor: 'Dr. Rachel Chen',
    comment: 'Our daughter was born safely in their maternity suite. The nursing team was attentive 24/7, and the digital portal made tracking our pediatric appointments effortless.',
    rating: 5,
    location: 'Bellevue, WA'
  },
  {
    id: 't-3',
    name: 'Robert Henderson',
    age: 46,
    treatment: 'Knee Arthroscopy & Joint Therapy',
    doctor: 'Dr. Marcus Sterling',
    comment: 'From online scheduling to post-operative physiotherapy, everything was smooth, prompt, and high quality. Back on my feet in less than three weeks!',
    rating: 5,
    location: 'Tacoma, WA'
  }
];

export const HOSPITAL_INFO = {
  name: 'St. Jude Healthcare & Medical Center',
  tagline: 'Excellence in Clinical Care, Compassion in Every Step',
  emergencyPhone: '8274627637',
  generalPhone: '8274627637',
  appointmentPhone: '8274627637',
  email: 'care@stjude-hospital.org',
  address: '46/42 Rangampalayam',
  city: 'Rangampalayam',
  hours: '24/7 Emergency Always Open | Outpatient OPD: 08:00 AM - 08:00 PM',
  visitingHours: 'General Wards: 10:00 AM - 01:00 PM & 04:00 PM - 07:00 PM'
};
