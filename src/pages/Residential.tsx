import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/services';
import { useSEO } from '../utils/seo';

export default function Residential() {
  useSEO({
    title: 'Residential Roofing Austin TX | WDR Roofing',
    description: "Austin's premier residential roofing contractor. Expert roof replacement, repair, hail damage & water damage for homeowners. GAF Master Elite certified. Free inspections. Call (512) 820-6505.",
    canonical: '/residential',
  });

  const resServices = services.filter(s => ['roof-inspection', 'roof-replacement', 'roof-repair', 'hail-damage-roofing'].includes(s.slug));

  return (
    <div className="bg-[#09090a]">
      <PageHero eyebrow="Home Roofing" title={<>Austin's Premier <em>Residential</em> Roofer.</>} image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Residential' }]} />
        
        <div className="mb-28 mt-8">
           <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-12">Why Homeowners <em>Choose WDR</em></h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="glass p-8 rounded-2xl border-[#c9a96e]/20">
               <LucideIcons.ShieldCheck className="w-10 h-10 text-[#c9a96e] mb-6"/>
               <h4 className="text-xl font-semibold text-[#f3ede0] mb-3">Lifetime Warranties</h4>
               <p className="text-[#f3ede0]/60 font-light text-[0.95rem]">As a Master Elite contractor, we offer the Golden Pledge warranty—up to 50 years of material coverage.</p>
             </div>
             <div className="glass p-8 rounded-2xl border-[#c9a96e]/20">
               <LucideIcons.HeartHandshake className="w-10 h-10 text-[#c9a96e] mb-6"/>
               <h4 className="text-xl font-semibold text-[#f3ede0] mb-3">Property Respect</h4>
               <p className="text-[#f3ede0]/60 font-light text-[0.95rem]">We cover your landscaping, protect your siding, and perform multi-pass magnetic sweeps to ensure zero nails are left behind.</p>
             </div>
             <div className="glass p-8 rounded-2xl border-[#c9a96e]/20">
               <LucideIcons.Home className="w-10 h-10 text-[#c9a96e] mb-6"/>
               <h4 className="text-xl font-semibold text-[#f3ede0] mb-3">Complete Transparency</h4>
               <p className="text-[#f3ede0]/60 font-light text-[0.95rem]">Photo-documented inspections, straightforward pricing blocks, and a dedicated project manager for your home.</p>
             </div>
           </div>
        </div>

        <div className="mb-28">
           <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-12">Residential <em>Expertise</em></h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resServices.map((s, i) => {
                const Icon = LucideIcons[s.icon as keyof typeof LucideIcons] as any || LucideIcons.Wrench;
                return (
                  <div key={i} className="glass p-8 rounded-2xl flex gap-6 items-start">
                     <div className="w-14 h-14 rounded-full glass-gold flex items-center justify-center shrink-0">
                       <Icon className="w-6 h-6 text-[#c9a96e]" />
                     </div>
                     <div>
                       <h4 className="text-xl font-semibold text-[#f3ede0] mb-2">{s.name}</h4>
                       <p className="text-[#f3ede0]/60 text-sm font-light mb-4">{s.shortDesc}</p>
                       <Link to={`/services/${s.slug}`} className="text-[#c9a96e] text-xs font-semibold tracking-wider uppercase flex items-center gap-1 hover:text-[#e8c98a]">View Service <LucideIcons.ArrowRight className="w-3 h-3"/></Link>
                     </div>
                  </div>
                )
              })}
           </div>
        </div>

        <CtaBanner headline="Protect your biggest investment." sub="Schedule a comprehensive home roof inspection today." />
      </div>
    </div>
  )
}
