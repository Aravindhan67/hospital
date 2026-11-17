import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Target, 
  CheckCircle2, 
  Building2, 
  Users, 
  Clock, 
  Stethoscope, 
  ArrowRight 
} from 'lucide-react';
import { HOSPITAL_INFO, HOSPITAL_STATS } from '../../data/hospitalData';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-hospital-mint/60 to-white py-14 lg:py-20 border-b border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="badge-teal">About St. Jude Healthcare</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-hospital-text-primary tracking-tight">
            Caring for Generations with <br />
            <span className="text-hospital-primary">Uncompromising Clinical Excellence</span>
          </h1>
          <p className="text-hospital-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to deliver human-centered, technologically advanced tertiary medical care, 
            St. Jude Healthcare & Medical Center has grown into the region's most trusted hospital campus.
          </p>
        </div>
      </section>

      {/* Heritage & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Mission/Vision */}
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-teal">Our Story & Purpose</span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-hospital-text-primary leading-tight">
              Where Cutting-Edge Science Meets <br className="hidden sm:inline" />
              <span className="text-hospital-primary">Human Compassion</span>
            </h2>

            <p className="text-hospital-text-secondary text-sm sm:text-base leading-relaxed">
              Designed around patient safety, natural light, and clinical efficiency, St. Jude combines 
              advanced medical technology with personalized, compassionate healthcare.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="med-card p-5 bg-white border border-hospital-border hover:border-hospital-primary/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-hospital-mint text-hospital-primary flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-hospital-primary" />
                </div>
                <h3 className="font-bold text-base text-hospital-text-primary">Our Mission</h3>
                <p className="text-xs text-hospital-text-secondary mt-1 leading-relaxed">
                  Deliver safe, accessible, and world-class healthcare.
                </p>
              </div>

              <div className="med-card p-5 bg-white border border-hospital-border hover:border-hospital-primary/40 transition-all">
                <div className="w-10 h-10 rounded-lg bg-hospital-mint text-hospital-primary flex items-center justify-center mb-3">
                  <HeartHandshake className="w-5 h-5 text-hospital-primary" />
                </div>
                <h3 className="font-bold text-base text-hospital-text-primary">Our Vision</h3>
                <p className="text-xs text-hospital-text-secondary mt-1 leading-relaxed">
                  Setting the standard in clinical excellence and patient trust.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Unified Medical Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background ambient glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-hospital-primary/10 via-teal-300/10 to-transparent rounded-3xl blur-xl -z-10" />

              {/* Main Feature Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-hospital-border bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                  alt="St. Jude Healthcare Modern Facility" 
                  className="w-full h-[400px] sm:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Embedded bottom caption pill */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-white/40 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-hospital-primary text-white flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-hospital-text-primary truncate">Main Healthcare Campus</p>
                      <p className="text-[11px] text-hospital-text-secondary truncate">Designed for healing, acoustic peace & patient safety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-hospital-surface py-16 border-y border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="badge-teal">Ethical Framework</span>
            <h2 className="text-3xl font-bold tracking-tight text-hospital-text-primary">
              Our Guiding Principles
            </h2>
            <p className="text-hospital-text-secondary text-sm">
              The values that dictate every clinical decision, protocol, and bedside interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Patient Safety First', desc: 'Zero compromise on sterile protocols, cross-infection prevention, and surgical safety checks.' },
              { title: 'Clinical Rigor', desc: 'Practicing evidence-based medicine informed by international clinical trials and multidisciplinary boards.' },
              { title: 'Transparent Communication', desc: 'Full patient autonomy, honest diagnostic discussions, and clear, itemized financial billing.' },
              { title: 'Holistic Compassion', desc: 'Treating the human being, offering psychological reassurance, and accommodating family support.' }
            ].map((v, idx) => (
              <div key={idx} className="med-card space-y-3">
                <span className="font-display font-black text-2xl text-hospital-primary/30">0{idx + 1}</span>
                <h3 className="font-bold text-base text-hospital-text-primary">{v.title}</h3>
                <p className="text-xs text-hospital-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & Infrastructure Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="med-card bg-slate-900 text-white p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="badge-teal bg-teal-900/60 text-teal-300 border-teal-700 text-xs">
              Campus Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Engineered for Rapid Healing & Safety</h2>
            <p className="text-slate-400 text-sm">
              Our modern hospital campus spans 250,000 square feet designed specifically for efficient healthcare delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-800">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400">180</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Inpatient & ICU Beds</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400">14</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Modular Surgical Theaters</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400">3.0T</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Silent MRI & 128-Slice CT</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400">24/7</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Emergency & Level-1 Trauma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-hospital-text-primary">
          Experience World-Class Healthcare First-Hand
        </h2>
        <div className="flex items-center justify-center gap-4">
          <Link to="/appointments/book" className="med-btn-primary">
            Book an Appointment
          </Link>
          <Link to="/doctors" className="med-btn-outline">
            Browse Our Doctors
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
