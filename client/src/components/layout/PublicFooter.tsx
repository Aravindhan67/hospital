import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ArrowUpRight 
} from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

export const PublicFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Emergency Ribbon */}
      <div className="bg-hospital-primary text-white py-5 sm:py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" />
            </div>
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-teal-100 font-semibold">Immediate Medical Assistance</p>
              <h4 className="text-lg sm:text-2xl font-bold tracking-tight">Need Emergency Medical Care 24/7?</h4>
            </div>
          </div>
          <div className="w-full sm:w-auto flex items-center justify-center">
            <a 
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-white text-hospital-primary font-bold text-sm sm:text-base hover:bg-teal-50 transition-colors shadow-lg"
            >
              Call {HOSPITAL_INFO.emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Hospital Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-hospital-secondary text-white flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                St. Jude Healthcare
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              St. Jude Healthcare & Medical Center provides state-of-the-art clinical care, tertiary surgery, 
              and comprehensive medical diagnostics anchored by empathy, trust, and patient safety.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-teal-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              JCI Accredited & NABH Certified Hospital
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Patient Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">Medical Departments</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Find a Specialist</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Clinical Services</Link></li>
              <li><Link to="/appointments/book" className="hover:text-white transition-colors">Book Consultation</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Patient Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Medical Specialties */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Top Specialties</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/departments" className="hover:text-white transition-colors">Cardiology & Heart Care</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">Orthopedics & Joint Replacement</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">Pediatrics & Neonatology</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">Neurology & Stroke Unit</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">Obstetrics & Gynecology</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">24/7 Trauma Emergency</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact & Campus</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-teal-400 shrink-0" />
                <span>General: {HOSPITAL_INFO.generalPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{HOSPITAL_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">OPD Consultation Hours:</p>
                  <p>Mon - Sat: 08:00 AM - 08:00 PM</p>
                  <p className="text-emerald-400 font-semibold mt-1">Emergency: Open 24/7/365</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 St. Jude Healthcare & Medical Center. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Patient Rights</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Clinical Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
