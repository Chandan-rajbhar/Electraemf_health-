import React, { useState } from 'react';
import { 
  Search, MapPin, MessageSquare, Phone, Mail, 
  ArrowRight, ChevronRight, Star, AlertCircle,
  Activity, ShieldCheck, Scale, Zap, CheckCircle2,
  Sliders, Compass
} from 'lucide-react';
import { electraData } from '../data/electraData';

export default function HomeDashboard({ 
  onNavigate, 
  onOpenSearch,
  onOpenChat, 
  onOpenCall, 
  onSelectService,
  onOpenAssessmentModal
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Studies', count: 14 },
    { id: 'residential', label: 'Residential EMF', count: 6 },
    { id: 'commercial', label: 'Commercial EMF', count: 4 },
    { id: 'medical', label: 'Medical / ICD', count: 3 },
    { id: 'legal', label: 'Legal Witness', count: 2 },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch(searchQuery);
    } else {
      onNavigate('services');
    }
  };

  return (
    <div className="space-y-3.5 pb-24">
      {/* 1. TOP SEARCH BAR (Exact Image 2) */}
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onFocus={() => {
              if (onOpenSearch) onOpenSearch(searchQuery);
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search EMF testing, 5G/6G, power lines"
            className="w-full bg-white rounded-full pl-9 pr-24 py-2.5 text-xs text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-xs placeholder:text-slate-400 font-medium cursor-pointer"
          />
          <button
            type="submit"
            className="h-9 px-4.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold transition-all shadow-xs active:scale-95 absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center"
          >
            Search
          </button>
        </div>
      </form>

      {/* 2. LICENSED SERVICE AREA STRIP (Exact Image 2) */}
      <div className="bg-white rounded-2xl p-2.5 px-3.5 border border-slate-100 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 block leading-tight">
              LICENSED SERVICE AREA
            </span>
            <span className="text-xs font-bold text-slate-800 truncate block leading-tight mt-0.5">
              NY, NJ, CT, PA, DE <span className="text-slate-400 font-normal">(Tri-State Metro...)</span>
            </span>
          </div>
        </div>
        <button
          onClick={() => onNavigate('profile')}
          className="h-7.5 px-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 text-[11px] font-bold transition-all active:scale-95 shrink-0 flex items-center justify-center"
        >
          Change
        </button>
      </div>

      {/* 3. OUR LICENSED EXPERTS ARE HERE TO HELP (Exact Image 2) */}
      <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-xs space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 leading-snug">
              <span>Our Licensed Experts are here to help.</span>
              <span className="text-rose-500">❤️</span>
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
              IBEW Licensed Electronics Engineers & Clinical Industrial Hygienists since 2003. Zero-fee triage.
            </p>
          </div>

          {/* Expert Avatar */}
          <div className="flex flex-col items-center text-center shrink-0">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border-2 border-white shadow-xs">
                <img 
                  src="/assets/IBEW-Engineer-for-EMF-Testing-in-NYC.jpg" 
                  alt="Dr. J. Dumanov" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-xs" />
            </div>
            <span className="text-[10px] font-bold text-slate-800 mt-1">Dr. J. Dumanov</span>
            <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-1 py-0.2 rounded border border-blue-200/50 mt-0.5">
              IBEW & Chief DX
            </span>
          </div>
        </div>

        {/* 3 Action Buttons */}
        <div className="grid grid-cols-3 gap-2 pt-0.5">
          <button
            onClick={onOpenChat}
            className="h-11 px-2.5 rounded-xl bg-blue-50/90 hover:bg-blue-100/90 text-blue-700 text-xs font-extrabold transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs border border-blue-100/50"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Chat</span>
          </button>

          <button
            onClick={onOpenCall}
            className="h-11 px-2.5 rounded-xl bg-blue-50/90 hover:bg-blue-100/90 text-blue-700 text-xs font-extrabold transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs border border-blue-100/50"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>Call Direct</span>
          </button>

          <button
            onClick={() => onNavigate('profile')}
            className="relative h-11 px-2.5 rounded-xl bg-blue-50/90 hover:bg-blue-100/90 text-blue-700 text-xs font-extrabold transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs border border-blue-100/50"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Free Consult</span>
            <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-blue-600 text-white text-[7.5px] font-black uppercase shadow-xs">
              Free
            </span>
          </button>
        </div>
      </div>

      {/* 4. MAIN HERO BANNER (Exact Image 2) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c234a] via-[#0d346c] to-[#124285] text-white p-5 shadow-lg">
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-bold text-cyan-200 border border-white/15 uppercase tracking-wide">
            <span className="text-amber-300">⚡</span>
            <span>COURT-CERTIFIED CLINICAL & LEGAL EXPERTS</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug font-heading">
            Professional EMF Testing, Health & Safety Experts
          </h1>

          <p className="text-xs text-blue-100/90 leading-relaxed max-w-sm">
            Advanced electromagnetic exposure diagnostics, technical remediation & court-recognized legal due diligence since 2003.
          </p>

          <div className="flex items-center gap-2.5 pt-1.5">
            <button
              onClick={() => onNavigate('services')}
              className="flex-1 sm:flex-none h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold shadow-md shadow-blue-950/30 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('profile')}
              className="flex-1 sm:flex-none h-11 px-4.5 rounded-xl bg-white/15 hover:bg-white/20 text-white text-xs font-bold border border-white/20 active:scale-95 transition-all flex items-center justify-center text-center backdrop-blur-xs"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* 5. EXPLORE BY CATEGORY (Exact Image 2) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
            EXPLORE BY CATEGORY
          </h2>
          <button 
            onClick={() => onNavigate('services')}
            className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-0.5"
          >
            Full Technical Guide
          </button>
        </div>

        {/* Scrollable Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 h-8.5 px-3.5 rounded-full text-xs whitespace-nowrap transition-all active:scale-95 ${
                  isSelected
                    ? 'bg-[#0b162c] text-white font-extrabold shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 font-bold'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. FOUR 2-COLUMN ACTION CARDS (Exact Image 2 Colors & Typography) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Card 1: Dark Navy #0f1f3d */}
        <button
          onClick={() => onNavigate('services')}
          className="text-left rounded-3xl p-4 bg-[#0f1f3d] text-white shadow-md active:scale-98 transition-all flex flex-col justify-between h-36"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="px-2 py-0.5 rounded-full bg-blue-600/80 text-[10px] font-bold text-white">
              14 Protocols
            </span>
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-sm sm:text-base leading-tight flex items-center gap-1">
              <span>Find Services</span>
              <ChevronRight className="w-4 h-4 opacity-80" />
            </h3>
            <p className="text-[10px] text-slate-300 mt-1 line-clamp-2">
              Residential, Commercial & Schools
            </p>
          </div>
        </button>

        {/* Card 2: Forest Emerald #0f593b */}
        <button
          onClick={() => onNavigate('reports')}
          className="text-left rounded-3xl p-4 bg-[#0f593b] text-white shadow-md active:scale-98 transition-all flex flex-col justify-between h-36"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Sliders className="w-4 h-4 text-white" />
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-white">
              Interactive
            </span>
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-sm sm:text-base leading-tight flex items-center gap-1">
              <span>EMF vs EMI Guide</span>
              <ChevronRight className="w-4 h-4 opacity-80" />
            </h3>
            <p className="text-[10px] text-emerald-100 mt-1 line-clamp-2">
              Low freq 60Hz to 60GHz RFR
            </p>
          </div>
        </button>

        {/* Card 3: Warm Rust/Caramel #934510 */}
        <button
          onClick={() => onNavigate('experts')}
          className="text-left rounded-3xl p-4 bg-[#934510] text-white shadow-md active:scale-98 transition-all flex flex-col justify-between h-36"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-white">
              sC-Ve ®™
            </span>
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-sm sm:text-base leading-tight flex items-center gap-1">
              <span>Clinical DX</span>
              <ChevronRight className="w-4 h-4 opacity-80" />
            </h3>
            <p className="text-[10px] text-amber-100 mt-1 line-clamp-2">
              Neuropathology & cancer risk evaluation
            </p>
          </div>
        </button>

        {/* Card 4: Deep Ocean Blue #0b578c */}
        <button
          onClick={() => onNavigate('experts')}
          className="text-left rounded-3xl p-4 bg-[#0b578c] text-white shadow-md active:scale-98 transition-all flex flex-col justify-between h-36"
        >
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold text-white">
              Court Proven
            </span>
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-sm sm:text-base leading-tight flex items-center gap-1">
              <span>Legal & Realty</span>
              <ChevronRight className="w-4 h-4 opacity-80" />
            </h3>
            <p className="text-[10px] text-blue-100 mt-1 line-clamp-2">
              Buyer/seller due diligence & expert witness
            </p>
          </div>
        </button>
      </div>

      {/* 7. CLIENT ENDORSEMENT CARD (Exact Image 2) */}
      <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-xs space-y-2.5">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            Client Endorsement
          </span>
        </div>

        <p className="text-xs text-slate-700 italic leading-relaxed">
          "My professional clients have been very pleased with me for locating the only fully licensed EMF technical and medical expert. Comprehensive and highly detailed technical and clinical exposure services."
        </p>

        <div className="flex items-center justify-between pt-1 border-t border-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
              AB
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">Abe Berman</p>
              <p className="text-[10px] text-slate-400 leading-none mt-0.5">Licensed Agent • Princeton, NJ</p>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">June 17</span>
        </div>
      </div>

      {/* 8. IMMEDIATE EXPOSURE CONCERNS CALLOUT (Exact Image 2) */}
      <div className="bg-[#f0f4fc] rounded-3xl p-3.5 border border-blue-100 flex items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <span className="text-[9px] font-extrabold uppercase tracking-wide text-rose-600 block leading-tight">
              IMMEDIATE EXPOSURE CONCERNS?
            </span>
            <p className="text-xs font-extrabold text-slate-900 leading-tight mt-0.5">
              Call Direct: 347-491-9867
            </p>
            <p className="text-[10px] text-slate-500 truncate leading-tight mt-0.5">
              EMFmedicalExpert@gmail.com
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCall}
          className="h-10 px-4.5 rounded-xl bg-[#0c1f3d] hover:bg-[#122e5a] text-white text-xs font-extrabold flex items-center gap-1.5 shadow-sm shrink-0 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </button>
      </div>
    </div>
  );
}
