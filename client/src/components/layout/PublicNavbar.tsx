import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Stethoscope, 
  PhoneCall, 
  Clock, 
  Calendar, 
  LogIn, 
  Menu, 
  X, 
  MapPin,
  ChevronRight
} from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

export const PublicNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-hospital-border shadow-sm">
      {/* Top Clinical & Emergency Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a 
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 text-rose-400 font-semibold tracking-wide hover:text-rose-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
              <span>24/7 Emergency: <strong className="font-mono text-white underline decoration-rose-500/50">{HOSPITAL_INFO.emergencyPhone}</strong></span>
            </a>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              OPD: Mon - Sat 8:00 AM - 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300 shrink-0">
            <span className="hidden sm:flex items-center gap-1.5 text-xs">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{HOSPITAL_INFO.address}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-hospital-primary to-hospital-secondary text-white flex items-center justify-center shadow-md shadow-hospital-primary/20 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-base sm:text-xl text-hospital-text-primary tracking-tight block leading-tight">
                St. Jude Healthcare
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-hospital-primary tracking-wider uppercase">
                Medical Center
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= lg) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-hospital-primary bg-hospital-mint font-semibold shadow-xs'
                      : 'text-hospital-text-secondary hover:text-hospital-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop / Tablet) */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <Link
              to="/appointments/book"
              className="med-btn-primary py-2 px-3.5 lg:py-2.5 lg:px-4 text-xs lg:text-sm shadow-sm flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Actions (< sm) */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              to="/appointments/book"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-hospital-primary text-white shadow-xs"
            >
              Book
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-hospital-text-secondary hover:text-hospital-primary hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Tablet hamburger trigger (sm to lg) */}
          <div className="hidden sm:flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-hospital-text-secondary hover:text-hospital-primary hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Full-width Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-hospital-border bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Quick Call in Mobile Menu */}
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
            className="flex items-center justify-between p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-semibold text-xs mb-3"
          >
            <span className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-rose-600 animate-pulse" />
              <span>Call Emergency Hotline</span>
            </span>
            <span className="font-mono font-bold">{HOSPITAL_INFO.emergencyPhone}</span>
          </a>

          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-hospital-mint text-hospital-primary font-bold'
                    : 'text-hospital-text-primary hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-hospital-text-secondary/50" />
              </Link>
            );
          })}

          <div className="pt-4 border-t border-hospital-border">
            <Link
              to="/appointments/book"
              onClick={() => setMobileMenuOpen(false)}
              className="med-btn-primary w-full py-3 text-sm shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Book Online Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
