import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { ProcessSteps } from '../components/ProcessSteps';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function Commercial() {
  useSEO({
    title: 'Commercial Roofing Austin TX | WDR Roofing',
    description: 'Expert commercial roofing in Austin TX. TPO, EPDM, metal roofing for businesses, warehouses & multi-unit properties. GAF certified. Free commercial inspections. Call (512) 820-6505.',
    canonical: '/commercial',
  });

  return (
    <div className="bg-[#09090a]">
      <PageHero eyebrow="Enterprise Systems" title={<>Commercial Roofing Built to <em>Last</em>.</>} image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Commercial' }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
           <div>
             <h2 className="font-display text-4xl text-[#f3ede0] mb-6">Flat & Metal <em>Specialists</em></h2>
             <p className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9] mb-6">
               Commercial structures require vastly different materials, insurance protections, and zoning compliances than residential homes. Our Commercial Division is certified in installing seamless TPO, durable EPDM, and Custom Architectural Metal profiles for massive square footages.
             </p>
             <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><LucideIcons.CheckCircle className="w-5 h-5 text-[#c9a96e] shrink-0" /> <span className="text-[#f3ede0] font-light">TPO & PVC Single-Ply Membranes</span></li>
                <li className="flex items-center gap-3"><LucideIcons.CheckCircle className="w-5 h-5 text-[#c9a96e] shrink-0" /> <span className="text-[#f3ede0] font-light">EPDM Rubber Roofing Systems</span></li>
                <li className="flex items-center gap-3"><LucideIcons.CheckCircle className="w-5 h-5 text-[#c9a96e] shrink-0" /> <span className="text-[#f3ede0] font-light">Commercial Roof Coatings (Silicone/Acrylic)</span></li>
             </ul>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-gold p-1 -mt-8"><img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover rounded-xl" alt="TPO Install"/></div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass p-1 mt-8"><img src="https://images.unsplash.com/photo-1587293852726-70cfd4013bcd?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover rounded-xl" alt="Commercial Metal"/></div>
           </div>
        </div>

        <div className="mb-28 text-center bg-[#111113] -mx-6 lg:-mx-12 px-6 lg:px-12 py-28 border-y border-white/5">
           <div className="max-w-7xl mx-auto">
             <h3 className="font-display text-4xl text-[#f3ede0] mb-12">Industries We <em>Serve</em></h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {['Property Management', 'Retail Centers', 'Industrial Parks', 'Healthcare', 'Education', 'Hospitality'].map(ind => (
                 <div key={ind} className="glass p-6 text-center rounded-xl flex flex-col items-center justify-center min-h-[120px]">
                    <span className="text-[#f3ede0] font-medium tracking-wide uppercase text-sm">{ind}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        <div className="mb-28">
           <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-12">Our Commercial <em>Process</em></h3>
           <ProcessSteps steps={[
             { n: '1', title: 'Core Testing', desc: 'We take core samples to assess deck condition and moisture.' },
             { n: '2', title: 'Phased Logistics', desc: 'Work is staged to keep your business fully functional.' },
             { n: '3', title: 'Application', desc: 'Expert sealing of penetrations, HVAC units, and parapet walls.' },
             { n: '4', title: 'Maintenance Dept', desc: 'Enrollment in preventative maintenance to maximize ROI.' }
           ]} />
        </div>

        <CtaBanner headline="Scale your building's protection." sub="Request an enterprise estimate and bid package." />
      </div>
    </div>
  )
}
