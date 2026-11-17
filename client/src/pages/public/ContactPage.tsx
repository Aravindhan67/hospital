import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../../data/hospitalData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Medical Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-hospital-mint/60 to-white py-14 border-b border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="badge-teal">We Are Here For You</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-hospital-text-primary tracking-tight">
            Contact St. Jude Healthcare
          </h1>
          <p className="text-hospital-text-secondary text-base max-w-2xl mx-auto">
            Have questions about specialized treatments, hospital admissions, or insurance coverage? 
            Reach our patient support team 24 hours a day.
          </p>
        </div>
      </section>

      {/* Emergency & Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="med-card bg-rose-50 border-rose-200">
            <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-4">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">24/7 Emergency Care</h3>
            <p className="text-xs text-slate-600 mb-3">For acute chest pain, trauma accidents, or stroke:</p>
            <a 
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="text-base font-bold text-rose-600 block hover:underline"
            >
              {HOSPITAL_INFO.emergencyPhone}
            </a>
          </div>

          <div className="med-card">
            <div className="w-12 h-12 rounded-xl bg-hospital-mint text-hospital-primary flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-hospital-text-primary mb-1">Outpatient & Visiting Hours</h3>
            <p className="text-xs text-hospital-text-secondary">
              OPD Clinics: Mon - Sat 08:00 AM - 08:00 PM<br />
              Visiting Hours: 10:00 AM - 01:00 PM & 04:00 PM - 07:00 PM
            </p>
          </div>

          <div className="med-card">
            <div className="w-12 h-12 rounded-xl bg-hospital-mint text-hospital-primary flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-hospital-text-primary mb-1">Hospital Campus</h3>
            <p className="text-xs text-hospital-text-secondary">
              {HOSPITAL_INFO.address}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Department Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7 med-card p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-hospital-text-primary mb-2">Send an Inquiry to Our Desk</h3>
            <p className="text-xs text-hospital-text-secondary mb-6">
              Our patient relations team typically responds within 2 hours during OPD operations.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-900">Message Received</h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. Your inquiry has been forwarded to the appropriate clinical department. 
                  A healthcare coordinator will contact you at <strong>{email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="med-btn-primary text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Davis"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="med-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="med-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="8274627637"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="med-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                      Inquiry Department
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="med-input"
                    >
                      <option>General Medical Inquiry</option>
                      <option>Appointment Scheduling</option>
                      <option>Billing & Insurance Queries</option>
                      <option>Inpatient Admission Information</option>
                      <option>Laboratory & Test Reports</option>
                      <option>Feedback & Grievance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How may our clinical team assist you today? Please include any pertinent details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="med-input"
                  />
                </div>

                <button
                  type="submit"
                  className="med-btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Department Phone Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="med-card space-y-4">
              <h3 className="font-bold text-lg text-hospital-text-primary">Department Direct Extensions</h3>
              <p className="text-xs text-hospital-text-secondary">For rapid department inquiries or scheduling direct consultations:</p>

              <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1 text-xs">
                {DEPARTMENTS.slice(0, 7).map((dept) => (
                  <div key={dept.id} className="p-2.5 rounded-lg bg-hospital-background flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-hospital-text-primary">{dept.name}</p>
                      <p className="text-[11px] text-hospital-text-secondary">Desk: {dept.headOfDepartment}</p>
                    </div>
                    <span className="font-mono text-hospital-primary font-bold">{dept.phone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="med-card bg-hospital-mint/40 border-teal-200 p-5 space-y-2">
              <div className="flex items-center gap-2 text-hospital-primary font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Patient Confidentiality Commitment</span>
              </div>
              <p className="text-xs text-hospital-text-secondary leading-relaxed">
                All inquiries submitted through this portal are treated as privileged health information and protected under standard healthcare privacy protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
