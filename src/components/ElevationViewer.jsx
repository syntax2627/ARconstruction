import React, { useState } from 'react';
import { Layers, Sparkles, CheckCircle2, ShieldCheck, Compass, Eye, ArrowRight } from 'lucide-react';

export default function ElevationViewer({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('floorplan');

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      <div className="glow-background" />

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge-gold">
            <Compass className="w-4 h-4" /> Architectural Precision
          </div>
          <h2>Interactive 3D Floor Plan & Elevation Experience</h2>
          <p className="text-slate-400">
            Every AN Constructions project is engineered with 3D structural blueprints, maximum ventilation, and 100% Vastu compliance before laying the first brick.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: 'floorplan', label: '3D Floor Plan Layout', icon: Layers },
            { id: 'materials', label: 'Certified Material Quality', icon: ShieldCheck }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-102'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850'
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Tab 1: 3D Floor Plan */}
        {activeTab === 'floorplan' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 luxury-card p-4 overflow-hidden relative group">
              <img 
                src="/images/floor_plan_3d.jpg" 
                alt="3D Floor Plan Layout Hyderabad Villa" 
                className="w-full h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Interactive Hotspot Pills */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="bg-slate-950/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Double-Height Italian Marble Living Room
                </span>
                <span className="bg-slate-950/90 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% East/North Vastu Layout
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">Master Design Blueprint</span>
              <h3 className="text-3xl font-extrabold text-white">
                Spacious 4BHK Villa Floor Plan with Zero Wasted Space
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Designed specifically for Hyderabad plot sizes (30x40, 40x60, 50x80). Features expansive master suites with walk-in closets, modular kitchen layout with utility balcony, and private terrace garden.
              </p>

              <div className="space-y-3 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Stilt parking space for 2 SUVs + 2 Two-wheelers</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Integrated lift shaft provisioning for senior citizens</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Overhead tank + 10,000L underground sump capacity</span>
                </div>
              </div>

              <button 
                onClick={onOpenQuoteModal}
                className="btn-primary py-3.5 px-6 text-sm"
              >
                Request Custom 3D Floor Plan for Your Plot <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Content Tab 2: Materials */}
        {activeTab === 'materials' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 luxury-card p-4 overflow-hidden relative group">
              <img 
                src="/images/material_quality.jpg" 
                alt="Luxury Construction Materials Sample" 
                className="w-full h-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">Uncompromising Quality</span>
              <h3 className="text-3xl font-extrabold text-white">
                Only Factory-Certified Primary Brands Used
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                We never use secondary or re-rolled steel. Every structural batch is accompanied by mill test certificates directly from Jindal, Tata Tiscon, or Vizag Steel.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">TMT Steel Grade</span>
                  <span className="font-bold text-amber-400 text-sm">Primary Fe550D</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Cement Brand</span>
                  <span className="font-bold text-white text-sm">UltraTech 53 OPC</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Main Door Carpentry</span>
                  <span className="font-bold text-white text-sm">Teakwood Frame</span>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">CP & Sanitaryware</span>
                  <span className="font-bold text-amber-400 text-sm">Kohler / Jaquar</span>
                </div>
              </div>

              <button 
                onClick={onOpenQuoteModal}
                className="btn-primary py-3.5 px-6 text-sm"
              >
                Inspect Sample Materials at Kukatpally Office <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
