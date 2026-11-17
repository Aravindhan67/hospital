import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Stethoscope, 
  ChevronRight, 
  ArrowLeft, 
  FileText, 
  ShieldCheck, 
  Printer 
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, Doctor } from '../../data/hospitalData';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialDoctorId = searchParams.get('doctor') || '';
  const initialDeptId = searchParams.get('dept') || '';

  const [step, setStep] = useState<number>(1);
  const [selectedDeptId, setSelectedDeptId] = useState<string>(initialDeptId);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(initialDoctorId);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0] // Tomorrow
  );
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM');

  // Patient Info
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientGender, setPatientGender] = useState('Male');
  const [patientAge, setPatientAge] = useState('');
  const [symptoms, setSymptoms] = useState('');

  // Confirmation state
  const [bookingPassId, setBookingPassId] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Filter doctors by selected department
  const availableDoctors = selectedDeptId
    ? DOCTORS.filter((d) => d.departmentId === selectedDeptId)
    : DOCTORS;

  const selectedDoctor = DOCTORS.find((d) => d.id === selectedDoctorId);
  const selectedDept = DEPARTMENTS.find((d) => d.id === selectedDeptId) || 
    (selectedDoctor ? DEPARTMENTS.find(d => d.id === selectedDoctor.departmentId) : undefined);

  useEffect(() => {
    if (initialDoctorId) {
      const doc = DOCTORS.find((d) => d.id === initialDoctorId);
      if (doc) {
        setSelectedDoctorId(doc.id);
        setSelectedDeptId(doc.departmentId);
      }
    }
  }, [initialDoctorId]);

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `APT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingPassId(generatedId);
    setBookingSuccess(true);
    setStep(4);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-hospital-mint/60 to-white py-12 border-b border-hospital-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <span className="badge-teal">Easy Online Scheduling</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-hospital-text-primary tracking-tight">
            Book an Outpatient Consultation
          </h1>
          <p className="text-hospital-text-secondary text-sm max-w-xl mx-auto">
            Reserve your consultation slot with our specialists in just 3 quick steps. 
            Instant digital confirmation and SMS notification.
          </p>

          {/* Stepper indicator */}
          {!bookingSuccess && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 pt-4 text-[11px] sm:text-xs font-semibold">
              <span className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${step >= 1 ? 'bg-hospital-primary text-white shadow-xs' : 'bg-slate-100 text-slate-500'}`}>
                1. Doctor & Dept
              </span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${step >= 2 ? 'bg-hospital-primary text-white shadow-xs' : 'bg-slate-100 text-slate-500'}`}>
                2. Date & Slot
              </span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${step >= 3 ? 'bg-hospital-primary text-white shadow-xs' : 'bg-slate-100 text-slate-500'}`}>
                3. Patient Details
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className="med-card p-4 sm:p-8 lg:p-10 shadow-card">
          {/* STEP 1: Department & Doctor Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-hospital-text-primary">Step 1: Choose Department & Specialist</h3>
                <p className="text-xs text-hospital-text-secondary mt-1">Select the medical department or doctor you wish to consult.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1.5">
                    Medical Department
                  </label>
                  <select
                    value={selectedDeptId}
                    onChange={(e) => {
                      setSelectedDeptId(e.target.value);
                      setSelectedDoctorId('');
                    }}
                    className="med-input"
                  >
                    <option value="">-- All Departments --</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name} ({dept.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1.5">
                    Consulting Specialist
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                    {availableDoctors.map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => setSelectedDoctorId(doc.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                          selectedDoctorId === doc.id
                            ? 'border-hospital-primary bg-hospital-mint/60 ring-2 ring-hospital-primary/20'
                            : 'border-hospital-border bg-white hover:border-hospital-primary/40'
                        }`}
                      >
                        <img 
                          src={doc.avatar} 
                          alt={doc.name} 
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-xs text-hospital-text-primary truncate">{doc.name}</p>
                          <p className="text-xs text-hospital-primary font-medium truncate">{doc.departmentName}</p>
                          <p className="text-[11px] text-hospital-text-secondary mt-0.5">${doc.consultationFee} fee • {doc.availability}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-hospital-border flex justify-end">
                <button
                  type="button"
                  disabled={!selectedDoctorId}
                  onClick={() => setStep(2)}
                  className="med-btn-primary flex items-center gap-2"
                >
                  <span>Continue to Date & Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Date & Slot Selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-hospital-text-primary">Step 2: Select Date & Time Slot</h3>
                  <p className="text-xs text-hospital-text-secondary mt-1">Pick a convenient consultation schedule with {selectedDoctor?.name}.</p>
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="text-xs text-hospital-primary hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1.5">
                    Consultation Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="med-input font-medium"
                  />
                  <p className="text-[11px] text-hospital-text-secondary mt-1.5">
                    Doctor schedule: {selectedDoctor?.availability}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1.5">
                    Available Time Slot
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(selectedDoctor?.slots || ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM']).map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          selectedSlot === slot
                            ? 'bg-hospital-primary text-white border-hospital-primary shadow-xs'
                            : 'bg-white border-hospital-border text-hospital-text-primary hover:border-hospital-primary/50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Doctor Summary Pill */}
              {selectedDoctor && (
                <div className="p-3.5 rounded-xl bg-hospital-mint/40 border border-teal-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img src={selectedDoctor.avatar} alt={selectedDoctor.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-hospital-text-primary">{selectedDoctor.name}</p>
                      <p className="text-hospital-text-secondary">{selectedDoctor.specialization}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-hospital-primary">${selectedDoctor.consultationFee}</p>
                    <p className="text-slate-500">Consultation Fee</p>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-hospital-border flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="med-btn-outline text-xs"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="med-btn-primary flex items-center gap-2"
                >
                  <span>Continue to Patient Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleConfirmBooking} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-hospital-text-primary">Step 3: Patient Information</h3>
                  <p className="text-xs text-hospital-text-secondary mt-1">Please provide the attendee's details for clinical registration.</p>
                </div>
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-hospital-primary hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                    Full Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnathan Smith"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="med-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="8274627637"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
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
                    placeholder="john@example.com"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="med-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                      Gender
                    </label>
                    <select
                      value={patientGender}
                      onChange={(e) => setPatientGender(e.target.value)}
                      className="med-input"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 38"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      className="med-input"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                    Symptoms or Reason for Visit
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your symptoms or medical concern (e.g. chest discomfort, routine cardiac checkup)..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="med-input"
                  />
                </div>
              </div>

              {/* Booking Summary Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-hospital-border text-xs space-y-2">
                <div className="flex items-center justify-between font-semibold text-hospital-text-primary">
                  <span>Appointment: {selectedDoctor?.name} ({selectedDept?.name})</span>
                  <span className="text-hospital-primary">${selectedDoctor?.consultationFee}</span>
                </div>
                <div className="text-hospital-text-secondary flex items-center justify-between">
                  <span>Schedule: {selectedDate} at {selectedSlot}</span>
                  <span>Payment at Desk or Online</span>
                </div>
              </div>

              <div className="pt-4 border-t border-hospital-border flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="med-btn-outline text-xs"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="med-btn-primary flex items-center gap-2 px-6 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm & Book Appointment</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Printable Pass */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="badge-success text-xs">Appointment Confirmed</span>
                <h3 className="text-2xl font-bold text-hospital-text-primary mt-2">
                  Your Consultation Has Been Booked!
                </h3>
                <p className="text-xs text-hospital-text-secondary mt-1">
                  A confirmation SMS & email have been sent to <strong>{patientPhone}</strong>.
                </p>
              </div>

              {/* Printable Appointment Pass */}
              <div id="appointment-pass" className="max-w-md mx-auto med-card bg-slate-50/80 border-dashed border-2 border-hospital-primary/30 text-left p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-hospital-border pb-3">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-hospital-primary tracking-wider">Appointment Pass</p>
                    <p className="font-mono text-lg font-bold text-hospital-text-primary">{bookingPassId}</p>
                  </div>
                  <span className="badge-teal text-[11px]">Confirmed</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500 text-[11px]">Patient Name</p>
                    <p className="font-semibold text-hospital-text-primary">{patientName || 'Visitor'}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[11px]">Department</p>
                    <p className="font-semibold text-hospital-text-primary">{selectedDept?.name}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[11px]">Consulting Doctor</p>
                    <p className="font-semibold text-hospital-text-primary">{selectedDoctor?.name}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[11px]">Date & Time</p>
                    <p className="font-semibold text-hospital-text-primary">{selectedDate} @ {selectedSlot}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-hospital-border text-[11px] text-slate-500 space-y-1">
                  <p>📍 Room 204, OPD Wing, St. Jude Medical Center</p>
                  <p>⚠️ Please arrive 15 minutes early for initial vital signs triage.</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={handlePrint}
                  className="med-btn-outline text-xs flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Booking Pass</span>
                </button>

                <Link
                  to="/"
                  className="med-btn-primary text-xs"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
