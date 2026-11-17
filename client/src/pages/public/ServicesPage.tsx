import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Ambulance, 
  ScanLine, 
  Bed, 
  Pill, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';
import { SERVICES, HOSPITAL_INFO } from '../../data/hospitalData';

export const ServicesPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-hospital-mint/60 to-white py-14 border-b border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="badge-teal">Comprehensive Care</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-hospital-text-primary tracking-tight">
            Clinical Services & Facilities
          </h1>
          <p className="text-hospital-text-secondary text-base max-w-2xl mx-auto">
            From round-the-clock emergency trauma response to sophisticated robotic pharmacy dispensing, 
            explore our integrated patient services.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="med-card p-8 space-y-5 hover:border-hospital-primary/50 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-hospital-mint text-hospital-primary flex items-center justify-center shadow-xs">
                    <Activity className="w-7 h-7" />
                  </div>
                  <span className="badge-teal text-xs font-semibold">{service.department}</span>
                </div>

                <h3 className="text-2xl font-bold text-hospital-text-primary">{service.title}</h3>
                <p className="text-sm text-hospital-text-secondary leading-relaxed">{service.fullDesc}</p>

                <div className="pt-4 border-t border-hospital-border space-y-2">
                  <h4 className="text-xs font-bold text-hospital-text-primary uppercase tracking-wider">Service Highlights:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-hospital-text-secondary">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-hospital-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-hospital-border flex items-center justify-between">
                <span className="text-xs text-slate-500">Available 24/7/365</span>
                <Link
                  to="/appointments/book"
                  className="med-btn-primary py-2 px-4 text-xs flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Service</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Assurance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="med-card bg-rose-50 border-rose-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-rose-600/30">
              <Ambulance className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900">Need Immediate Emergency or Trauma Care?</h3>
              <p className="text-xs text-slate-600 mt-1">Our emergency ambulance fleet and resuscitation unit is active right now.</p>
            </div>
          </div>

          <a 
            href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
            className="med-btn-primary bg-rose-600 hover:bg-rose-700 px-6 py-3 shrink-0 shadow-md shadow-rose-600/20 text-sm font-bold"
          >
            Emergency Hotline: {HOSPITAL_INFO.emergencyPhone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
