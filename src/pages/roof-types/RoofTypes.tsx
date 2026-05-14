import { PageHero } from '../../components/PageHero';
import { Breadcrumb } from '../../components/Breadcrumb';
import { CtaBanner } from '../../components/CtaBanner';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { useEffect } from 'react';

export default function RoofTypes() {
  useEffect(() => { document.title = "Roof Types Austin | WDR"; }, []);

  const types = [
    { title: 'Metal Roofing', slug: 'metal-roofing', img: 'https://images.unsplash.com/photo-1587293852726-70cfd4013bcd?auto=format&fit=crop&w=800&q=80', desc: 'Exceptional longevity and energy efficiency.' },
    { title: 'Standing Seam', slug: 'metal-roofing/standing-seam', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80', desc: 'Hidden fasteners for a clean, modern aesthetic.' },
    { title: 'Snap Lock', slug: 'metal-roofing/snap-lock-standing-seam', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80', desc: 'High-performance quick-install metal panels.' },
    { title: 'Double Locked Hem', slug: 'metal-roofing/double-locked-hemmed-seam', img: 'https://images.unsplash.com/photo-1587293852726-70cfd4013bcd?auto=format&fit=crop&w=800&q=80', desc: 'Maximum wind resistance for extreme conditions.' },
    { title: 'Flat Seam', slug: 'metal-roofing/flat-seam', img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80', desc: 'Solderable seams ideal for low slopes.' },
    { title: 'Exposed Fastener', slug: 'metal-roofing/exposed-fastener', img: 'https://images.unsplash.com/photo-1570168007204-a5af6dbb4c98?auto=format&fit=crop&w=800&q=80', desc: 'Economical, rugged metal roofing.' },
    { title: 'Asphalt Shingle', slug: 'asphalt-shingle', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', desc: 'Traditional, cost-effective, architectural beauty.' },
    { title: 'Tile Roof', slug: 'tile-roof', img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80', desc: 'Classic Mediterranean or Spanish aesthetic.' }
  ];

  return (
    <div className="bg-[#09090a]">
      <PageHero eyebrow="Materials" title={<>Choose the Right Roof for <em>You</em>.</>} height="50vh" image="https://images.unsplash.com/photo-1587293852726-70cfd4013bcd?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Roof Types' }]} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28 mt-8">
           {types.map(t => (
             <Link key={t.slug} to={`/roof-types/${t.slug}`} className="glass overflow-hidden rounded-2xl group hover:border-[#c9a96e]/30 transition-all flex flex-col h-full">
               <div className="h-48 overflow-hidden relative">
                 <img src={t.img} alt={t.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-[#f3ede0] mb-2">{t.title}</h3>
                  <p className="text-[#f3ede0]/60 text-[0.9rem] font-light mb-6 flex-1">{t.desc}</p>
                  <span className="text-[#c9a96e] text-xs font-semibold tracking-wider uppercase flex items-center gap-1">Learn More <LucideIcons.ArrowRight className="w-3 h-3"/></span>
               </div>
             </Link>
           ))}
        </div>

        <CtaBanner headline="Not sure which material is best?" sub="Our estimators provide free consultations with material samples." />
      </div>
    </div>
  )
}
