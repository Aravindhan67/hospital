import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  Lock, 
  Mail, 
  ShieldCheck, 
  LogIn, 
  CheckCircle2, 
  ArrowLeft,
  UserCheck,
  User,
  HeartPulse
} from 'lucide-react';
import { UserRole } from '../../types/auth';

const DEMO_ACCOUNTS: { role: UserRole; label: string; email: string; pass: string; desc: string }[] = [
  { role: 'SUPER_ADMIN', label: 'Super Admin', email: 'admin@hospital.com', pass: 'Admin@123', desc: 'System governance, global audit, settings' },
  { role: 'HOSPITAL_ADMIN', label: 'Hospital Admin', email: 'hospadmin@hospital.com', pass: 'Admin@123', desc: 'Hospital operations, departments, staff' },
  { role: 'DOCTOR', label: 'Doctor', email: 'doctor@hospital.com', pass: 'Doctor@123', desc: 'Clinical records, EMR, prescriptions, lab orders' },
  { role: 'RECEPTIONIST', label: 'Receptionist', email: 'reception@hospital.com', pass: 'Recept@123', desc: 'Patient registration, check-ins, appointments' },
  { role: 'NURSE', label: 'Nurse', email: 'nurse@hospital.com', pass: 'Nurse@123', desc: 'Inpatient vitals, nursing notes, triage' },
  { role: 'LABORATORY_TECHNICIAN', label: 'Lab Tech', email: 'lab@hospital.com', pass: 'Lab@123', desc: 'Specimen tracking, test results verification' },
  { role: 'PHARMACIST', label: 'Pharmacist', email: 'pharmacy@hospital.com', pass: 'Pharm@123', desc: 'Medicine inventory, dispensing records' },
  { role: 'ACCOUNTANT', label: 'Accountant', email: 'accountant@hospital.com', pass: 'Acct@123', desc: 'Patient billing, invoices, revenue tracking' },
  { role: 'PATIENT', label: 'Patient', email: 'patient@hospital.com', pass: 'Patient@123', desc: 'Personal health records, visits, invoices' },
];

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'PATIENT' | 'STAFF'>('PATIENT');
  const [email, setEmail] = useState('patient@hospital.com');
  const [password, setPassword] = useState('Patient@123');
  const [selectedRole, setSelectedRole] = useState<UserRole>('PATIENT');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSelectDemoRole = (account: typeof DEMO_ACCOUNTS[0]) => {
    setSelectedRole(account.role);
    setEmail(account.email);
    setPassword(account.pass);
    if (account.role === 'PATIENT') {
      setActiveTab('PATIENT');
    } else {
      setActiveTab('STAFF');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    // Store mock session token & role
    localStorage.setItem('hms_access_token', 'demo_jwt_token_2026');
    localStorage.setItem('hms_user_role', selectedRole);
    setTimeout(() => {
      // In subsequent phases we navigate to the respective dashboard view
      alert(`Logged in successfully as ${selectedRole}!`);
      setLoginSuccess(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-hospital-background flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-hospital-primary text-white flex items-center justify-center shadow-md">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-base text-hospital-text-primary tracking-tight block">
              St. Jude Healthcare
            </span>
            <span className="block text-[10px] font-semibold text-hospital-primary tracking-wider uppercase">
              Hospital Management System
            </span>
          </div>
        </Link>

        <Link to="/" className="med-btn-outline text-xs flex items-center gap-1.5 py-1.5 px-3">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Hospital Website</span>
        </Link>
      </div>

      {/* Main Login Card */}
      <div className="max-w-md w-full mx-auto my-8">
        <div className="med-card p-6 sm:p-8 shadow-card">
          <div className="text-center space-y-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-hospital-mint text-hospital-primary flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-hospital-text-primary">
              Portal Authentication
            </h2>
            <p className="text-xs text-hospital-text-secondary">
              Secure access for patients, physicians, and hospital personnel.
            </p>
          </div>

          {/* Portal Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-lg text-xs font-semibold mb-6">
            <button
              type="button"
              onClick={() => {
                setActiveTab('PATIENT');
                const pat = DEMO_ACCOUNTS.find(a => a.role === 'PATIENT')!;
                handleSelectDemoRole(pat);
              }}
              className={`py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'PATIENT'
                  ? 'bg-white text-hospital-primary shadow-xs'
                  : 'text-hospital-text-secondary hover:text-hospital-text-primary'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Patient Portal
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('STAFF');
                const doc = DEMO_ACCOUNTS.find(a => a.role === 'DOCTOR')!;
                handleSelectDemoRole(doc);
              }}
              className={`py-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'STAFF'
                  ? 'bg-white text-hospital-primary shadow-xs'
                  : 'text-hospital-text-secondary hover:text-hospital-text-primary'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              Staff & Clinicians
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-hospital-text-primary mb-1">
                Authorized Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="med-input pl-9"
                  placeholder="name@hospital.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-hospital-text-primary">
                  Password
                </label>
                <a href="#forgot" className="text-[11px] text-hospital-primary hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="med-input pl-9"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center text-xs text-hospital-text-secondary">
              <input type="checkbox" id="remember" defaultChecked className="rounded border-slate-300 text-hospital-primary mr-2" />
              <label htmlFor="remember">Keep this clinical workstation session active</label>
            </div>

            <button
              type="submit"
              disabled={loginSuccess}
              className="med-btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 shadow-md"
            >
              {loginSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In as {selectedRole.replace('_', ' ')}</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Role Switcher */}
          <div className="mt-6 pt-5 border-t border-hospital-border space-y-2.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-hospital-text-secondary text-center">
              Instant 9-Role Demo Switcher:
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {DEMO_ACCOUNTS.map((acc) => (
                <button
                  type="button"
                  key={acc.role}
                  onClick={() => handleSelectDemoRole(acc)}
                  className={`p-1.5 rounded-lg text-[10px] font-semibold border transition-all text-center truncate ${
                    selectedRole === acc.role
                      ? 'bg-hospital-primary text-white border-hospital-primary'
                      : 'bg-white border-hospital-border text-hospital-text-primary hover:border-hospital-primary/40'
                  }`}
                  title={`${acc.label}: ${acc.desc}`}
                >
                  {acc.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 text-center">
              Click any role button above to auto-populate credentials for instant verification.
            </p>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="text-center text-xs text-hospital-text-secondary">
        <p className="flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-hospital-primary" />
          <span>Encrypted Healthcare Portal • Compliant with Patient Privacy Standards</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
