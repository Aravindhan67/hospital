import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Search, 
  Users, 
  PhoneCall, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Activity
} from 'lucide-react';
import { DEPARTMENTS, Department } from '../../data/hospitalData';

export const DepartmentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDepts = DEPARTMENTS.filter(dept => 
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-hospital-mint/60 to-white py-14 border-b border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="badge-teal">Centers of Excellence</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-hospital-text-primary tracking-tight">
            Medical Departments & Specialties
          </h1>
          <p className="text-hospital-text-secondary text-base max-w-2xl mx-auto">
            Explore our 11 clinical departments staffed by board-certified physicians, 
            supported by specialized clinical infrastructure and 24/7 diagnostic labs.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-hospital-text-secondary/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search departments (e.g. Cardiology, Pediatrics)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="med-input pl-10 pr-4 py-3 text-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map((dept) => (
            <div key={dept.id} className="med-card flex flex-col justify-between hover:border-hospital-primary/60 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-hospital-mint text-hospital-primary flex items-center justify-center font-bold">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <span className="badge-teal font-mono text-xs">{dept.code}</span>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-hospital-text-primary">{dept.name}</h3>
                  <p className="text-xs text-hospital-text-secondary mt-1.5 leading-relaxed">{dept.description}</p>
                </div>

                <div className="pt-3 border-t border-hospital-border space-y-2">
                  <p className="text-xs font-semibold text-hospital-text-primary uppercase tracking-wider">Clinical Services:</p>
                  <ul className="space-y-1 text-xs text-hospital-text-secondary">
                    {dept.services.map((srv, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-hospital-primary shrink-0" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-hospital-border text-xs text-hospital-text-secondary space-y-1">
                  <p>Head: <strong className="text-hospital-text-primary">{dept.headOfDepartment}</strong></p>
                  <p>Direct Desk: <span className="font-mono text-hospital-primary">{dept.phone}</span></p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-hospital-border flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">
                  {dept.doctorCount} Active Specialists
                </span>
                <Link
                  to="/appointments/book"
                  className="med-btn-primary py-2 px-3.5 text-xs flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Slot</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDepts.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-base font-semibold text-hospital-text-secondary">No departments found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="med-btn-secondary text-xs"
            >
              Clear Search Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default DepartmentsPage;
