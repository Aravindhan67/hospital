import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  HeartPulse, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Award, 
  Clock, 
  ArrowRight, 
  Star, 
  Users, 
  CheckCircle2, 
  Activity, 
  BedDouble, 
  Building2, 
  UserPlus, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, SERVICES, HOSPITAL_STATS, TESTIMONIALS, HOSPITAL_INFO } from '../../data/hospitalData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-hospital-mint/60 via-hospital-background to-white pt-8 pb-12 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-hospital-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-hospital-mint border border-teal-200 text-hospital-primary text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-hospital-primary shrink-0" />
                <span className="truncate">Premier JCI & NABH Accredited Healthcare</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-hospital-text-primary tracking-tight leading-[1.15]">
                Advanced Medical Excellence, <br />
                <span className="text-hospital-primary">Compassionate Patient Care.</span>
              </h1>

              <p className="text-hospital-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                St. Jude Healthcare combines world-class clinical specialists, modern robotic diagnostics, 
                and round-the-clock emergency care in a calm, patient-first environment designed for safe healing.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  to="/appointments/book"
                  className="med-btn-primary px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base shadow-md shadow-hospital-primary/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span>Book an Appointment</span>
                </Link>

                <Link
                  to="/doctors"
                  className="med-btn-outline px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5 text-hospital-primary shrink-0" />
                  <span>Meet Our Specialists</span>
                </Link>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-4 sm:pt-6 border-t border-hospital-border/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {HOSPITAL_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left p-2 rounded-lg bg-white/60 sm:bg-transparent">
                    <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-hospital-primary">
                      {stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-hospital-text-secondary font-medium mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-hospital-primary/10 to-teal-400/20 rounded-3xl blur-2xl -z-10" />

                <div className="bg-white rounded-2xl border border-hospital-border shadow-card overflow-hidden">
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                      alt="Modern Hospital Facility" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="badge-teal bg-white/90 text-hospital-primary font-bold text-xs mb-1 inline-flex">
                        Level-1 Emergency Trauma Center
                      </span>
                      <h3 className="font-bold text-lg leading-snug !text-white text-white drop-shadow-md">Rapid Resuscitation & 24/7 Surgical Care</h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-hospital-border">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-hospital-primary" />
                        <span className="text-xs font-semibold text-hospital-text-primary">Today's Outpatient OPD</span>
                      </div>
                      <span className="badge-success text-xs">Walk-ins & Online Active</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between text-hospital-text-secondary">
                        <span>Cardiology & Heart Station</span>
                        <span className="font-semibold text-emerald-600">Available Slots Today</span>
                      </div>
                      <div className="flex items-center justify-between text-hospital-text-secondary">
                        <span>Orthopedic & Joint Care</span>
                        <span className="font-semibold text-emerald-600">Available Slots Today</span>
                      </div>
                      <div className="flex items-center justify-between text-hospital-text-secondary">
                        <span>Pediatric Walk-in Clinic</span>
                        <span className="font-semibold text-emerald-600">Continuous 08:00 - 20:00</span>
                      </div>
                    </div>

                    <Link
                      to="/appointments/book"
                      className="w-full med-btn-secondary py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5"
                    >
                      <span>Check Doctor Availability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR QUICK ACTION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="med-card bg-gradient-to-br from-rose-50 to-white border-rose-200 hover:border-rose-300">
            <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-4 shadow-md shadow-rose-600/20">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">24/7 Emergency Care</h3>
            <p className="text-xs text-hospital-text-secondary leading-relaxed mb-4">
              Immediate triage, stroke resuscitation, trauma surgery, and cardiac life support.
            </p>
            <a 
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
            >
              Call {HOSPITAL_INFO.emergencyPhone} <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="med-card bg-gradient-to-br from-hospital-mint/50 to-white border-teal-200 hover:border-teal-300">
            <div className="w-12 h-12 rounded-xl bg-hospital-primary text-white flex items-center justify-center mb-4 shadow-md shadow-hospital-primary/20">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Book an Appointment</h3>
            <p className="text-xs text-hospital-text-secondary leading-relaxed mb-4">
              Select your preferred specialist, date, and time slot with instant digital confirmation.
            </p>
            <Link 
              to="/appointments/book"
              className="text-xs font-bold text-hospital-primary hover:text-hospital-primary-hover flex items-center gap-1"
            >
              Reserve Slot Online <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="med-card hover:border-hospital-primary/40">
            <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-4 shadow-md shadow-teal-600/20">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Find a Specialist</h3>
            <p className="text-xs text-hospital-text-secondary leading-relaxed mb-4">
              Explore profiles of our 45+ board-certified doctors across 11 clinical departments.
            </p>
            <Link 
              to="/doctors"
              className="text-xs font-bold text-hospital-primary hover:text-hospital-primary-hover flex items-center gap-1"
            >
              Browse Doctor Directory <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="med-card hover:border-hospital-primary/40">
            <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-4 shadow-md shadow-slate-800/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Patient Portal Access</h3>
            <p className="text-xs text-hospital-text-secondary leading-relaxed mb-4">
              Access your electronic medical records, lab test reports, and billing receipts safely.
            </p>
            <Link 
              to="/login"
              className="text-xs font-bold text-hospital-primary hover:text-hospital-primary-hover flex items-center gap-1"
            >
              Log in to Health Portal <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT HOSPITAL & CLINICAL PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card border border-hospital-border">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                alt="Doctors collaborating in hospital" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-5 rounded-xl border border-hospital-border shadow-modal max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-hospital-mint text-hospital-primary flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-hospital-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-hospital-text-primary">25+ Years of Care</p>
                  <p className="text-xs text-hospital-text-secondary">Dedicated to clinical excellence & patient trust</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="badge-teal">About St. Jude Healthcare</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-hospital-text-primary">
              Setting the Standard in Quality Healthcare and Patient Trust.
            </h2>
            <p className="text-hospital-text-secondary text-sm sm:text-base leading-relaxed">
              Founded with the belief that healthcare should be both clinically outstanding and deeply human, 
              St. Jude Healthcare & Medical Center serves thousands of families every month. 
              Our integrated healthcare system brings together outpatient clinics, specialized surgery suites, 
              and round-the-clock emergency infrastructure.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Zero-delay clinical response protocols for emergency coronary and stroke cases.',
                'State-of-the-art robotic laboratory with rapid automated pathology verification.',
                'Fully integrated Electronic Health Records (EHR) accessible securely by patients.',
                'Board-certified multi-disciplinary medical board reviewing complex diagnoses.'
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-hospital-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-hospital-text-primary font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/about" className="med-btn-primary flex items-center gap-2 w-fit">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEDICAL DEPARTMENTS SHOWCASE */}
      <section className="bg-hospital-surface py-16 border-y border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="badge-teal">Specialized Clinical Care</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-hospital-text-primary">
                Our Centers of Medical Excellence
              </h2>
              <p className="text-hospital-text-secondary text-sm sm:text-base">
                Discover our multidisciplinary departments equipped with cutting-edge medical technology 
                and headed by renowned specialists.
              </p>
            </div>
            <Link to="/departments" className="med-btn-outline flex items-center gap-2 w-fit shrink-0">
              <span>View All 11 Departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.slice(0, 6).map((dept) => (
              <div 
                key={dept.id} 
                className="med-card group hover:border-hospital-primary/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-hospital-mint text-hospital-primary flex items-center justify-center group-hover:bg-hospital-primary group-hover:text-white transition-colors">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <span className="badge-neutral text-xs font-semibold">{dept.code}</span>
                  </div>

                  <h3 className="font-bold text-lg text-hospital-text-primary group-hover:text-hospital-primary transition-colors">
                    {dept.name}
                  </h3>

                  <p className="text-xs text-hospital-text-secondary leading-relaxed line-clamp-2">
                    {dept.description}
                  </p>

                  <div className="pt-2 border-t border-hospital-border/60">
                    <p className="text-xs text-hospital-text-secondary font-medium">
                      Head: <span className="text-hospital-text-primary font-semibold">{dept.headOfDepartment}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-hospital-border flex items-center justify-between">
                  <span className="text-xs text-hospital-primary font-semibold">
                    {dept.doctorCount} Doctors On Duty
                  </span>
                  <Link
                    to="/appointments/book"
                    className="text-xs font-semibold text-hospital-primary hover:text-hospital-primary-hover flex items-center gap-1"
                  >
                    <span>Consult</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED DOCTORS & SPECIALISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="badge-teal">Expert Healthcare Providers</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-hospital-text-primary">
              Meet Our Board-Certified Specialists
            </h2>
            <p className="text-hospital-text-secondary text-sm sm:text-base">
              Our physicians, surgeons, and clinicians bring decades of combined international experience, 
              academic rigor, and empathetic patient relationships.
            </p>
          </div>
          <Link to="/doctors" className="med-btn-outline flex items-center gap-2 w-fit shrink-0">
            <span>Explore All Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.slice(0, 3).map((doctor) => (
            <div key={doctor.id} className="med-card overflow-hidden p-0 flex flex-col justify-between">
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                <img 
                  src={doctor.avatar} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-amber-600 flex items-center gap-1 shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{doctor.rating}</span>
                  <span className="text-slate-400 font-normal">({doctor.reviewsCount})</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium">
                  {doctor.departmentName}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-hospital-text-primary">{doctor.name}</h3>
                  <p className="text-xs font-semibold text-hospital-primary">{doctor.title}</p>
                  <p className="text-xs text-hospital-text-secondary mt-1">{doctor.qualification}</p>
                  <p className="text-xs text-hospital-text-secondary mt-2 line-clamp-2">{doctor.bio}</p>
                </div>

                <div className="pt-4 border-t border-hospital-border space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-hospital-text-secondary font-medium">Experience: {doctor.experienceYears} Years</span>
                    <span className="font-bold text-hospital-text-primary text-sm">${doctor.consultationFee} <span className="text-xs font-normal text-slate-500">/ visit</span></span>
                  </div>

                  <Link
                    to="/appointments/book"
                    className="med-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOSPITAL CLINICAL SERVICES */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="badge-teal bg-teal-900/60 text-teal-300 border-teal-700">Hospital Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Comprehensive Inpatient & Outpatient Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From routine diagnostic screenings to high-acuity intensive care units, 
              we provide holistic healthcare under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80 hover:border-teal-500/50 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-lg !text-white text-white">{service.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{service.shortDesc}</p>

                <ul className="space-y-1.5 pt-2 border-t border-slate-700 text-xs text-slate-400">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link to="/services" className="med-btn-primary bg-hospital-secondary hover:bg-teal-600 px-6 py-3">
              Explore All Clinical Services
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PATIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="badge-teal">Patient Voices</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-hospital-text-primary">
            Trusted by Thousands of Patients & Families
          </h2>
          <p className="text-hospital-text-secondary text-sm sm:text-base">
            Real stories of healing, recovery, and compassionate healthcare delivery at St. Jude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="med-card flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-hospital-text-primary italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-hospital-border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-hospital-text-primary">{t.name}</h4>
                  <p className="text-xs text-hospital-text-secondary">{t.treatment}</p>
                </div>
                <span className="text-xs font-semibold text-hospital-primary">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. READY TO CONSULT BANNER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-hospital-primary via-teal-800 to-slate-900 text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-modal">
          <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
            <span className="badge-teal bg-white/20 text-white border-white/30 text-xs">
              Seamless Online Consultations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Ready to Consult with Our Clinical Specialists?
            </h2>
            <p className="text-teal-100 text-xs sm:text-sm lg:text-base leading-relaxed">
              Book your appointment in under 2 minutes. Receive instant SMS confirmations, 
              directions, and digital intake forms right to your phone.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/appointments/book"
                className="med-btn-primary bg-white text-hospital-primary hover:bg-teal-50 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold shadow-lg"
              >
                Schedule Appointment Now
              </Link>
              <Link
                to="/contact"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg border border-white/30 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-colors text-center"
              >
                Contact Hospital Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
