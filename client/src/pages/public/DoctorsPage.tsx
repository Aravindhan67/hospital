import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Star, 
  Calendar, 
  Clock, 
  Award, 
  ChevronRight, 
  DollarSign, 
  Filter 
} from 'lucide-react';
import { DOCTORS, DEPARTMENTS, Doctor } from '../../data/hospitalData';

export const DoctorsPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDept === 'ALL' || doc.departmentId === selectedDept;
    const matchesSearch = 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.departmentName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-hospital-mint/60 to-white py-14 border-b border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="badge-teal">Clinical Faculty</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-hospital-text-primary tracking-tight">
            Our Medical Specialists & Surgeons
          </h1>
          <p className="text-hospital-text-secondary text-base max-w-2xl mx-auto">
            Choose from our team of board-certified clinicians, internationally trained surgeons, 
            and dedicated specialists available for in-person and digital consultations.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-hospital-text-secondary/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search by specialist name, disease, or symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="med-input pl-10 pr-4 py-3 text-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs & Doctor Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Department Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth touch-pan-x">
          <button
            onClick={() => setSelectedDept('ALL')}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedDept === 'ALL'
                ? 'bg-hospital-primary text-white shadow-sm'
                : 'bg-white border border-hospital-border text-hospital-text-secondary hover:border-hospital-primary'
            }`}
          >
            All Specialists ({DOCTORS.length})
          </button>
          {DEPARTMENTS.slice(0, 6).map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedDept === dept.id
                  ? 'bg-hospital-primary text-white shadow-sm'
                  : 'bg-white border border-hospital-border text-hospital-text-secondary hover:border-hospital-primary'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="med-card overflow-hidden p-0 flex flex-col justify-between hover:border-hospital-primary/50 transition-all">
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <img 
                  src={doc.avatar} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-amber-600 flex items-center gap-1 shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{doc.rating}</span>
                  <span className="text-slate-400 font-normal">({doc.reviewsCount} reviews)</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-medium">
                  {doc.departmentName}
                </div>
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-bold text-lg text-hospital-text-primary">{doc.name}</h3>
                    <p className="text-xs font-semibold text-hospital-primary">{doc.title}</p>
                    <p className="text-xs text-hospital-text-secondary mt-1">{doc.qualification}</p>
                  </div>

                  <p className="text-xs text-hospital-text-secondary leading-relaxed line-clamp-2">
                    {doc.bio}
                  </p>

                  <div className="pt-2 border-t border-hospital-border text-xs text-hospital-text-secondary space-y-1">
                    <p className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-hospital-primary" />
                      <span>Available: <strong>{doc.availability}</strong></span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-hospital-primary" />
                      <span>Experience: <strong>{doc.experienceYears}+ Years</strong></span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-hospital-border space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-hospital-text-secondary font-medium">Consultation Fee</span>
                    <span className="font-bold text-hospital-text-primary text-base">
                      ${doc.consultationFee} <span className="text-xs font-normal text-slate-500">/ visit</span>
                    </span>
                  </div>

                  <Link
                    to={`/appointments/book?doctor=${doc.id}&dept=${doc.departmentId}`}
                    className="med-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-base font-semibold text-hospital-text-secondary">No doctors found matching your criteria</p>
            <button 
              onClick={() => { setSelectedDept('ALL'); setSearchQuery(''); }}
              className="med-btn-secondary text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default DoctorsPage;
