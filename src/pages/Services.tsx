import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProcessSteps } from '../components/ProcessSteps';
import { CtaBanner } from '../components/CtaBanner';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function Services() {
  useSEO({
    title: 'Roofing Services in Austin TX | WDR Roofing',
    description: 'Complete roofing services in Austin TX: roof inspection, repair, replacement, hail damage, water damage restoration & more. GAF Master Elite certified. Free estimates. Call (512) 820-6505.',
    canonical: '/services',
  });

  return (
    <div className="bg-[#09090a]">
      <PageHero eyebrow="What We Do" title={<>Every Roof, <em>Every Need</em>.</>} image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Services' }]} />
        
        <div className="space-y-32 mb-32">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                 <div className={`relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden glass ${!isEven ? 'lg:order-2' : ''}`}>
                   <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover rounded-2xl" />
                 </div>
                 <div className={!isEven ? 'lg:order-1' : ''}>
                    <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-4">WDR Solutions</h3>
                    <h2 className="font-display text-4xl text-[#f3ede0] mb-6"><em>{service.name}</em></h2>
                    <div className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9] mb-8 space-y-4">
                      <p>{service.fullDesc}</p>
                    </div>
                    <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.includes.slice(0, 4).map((inc, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <LucideIcons.CheckCircle className="w-4 h-4 text-[#c9a96e]" />
                          <span className="text-[0.9rem] text-[#f3ede0]">{inc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={`/services/${service.slug}`} className="btn-ghost rounded-full text-center">Learn More &rarr;</Link>
                      <Link to="/contact" className="btn-gold rounded-full text-center">Get a Quote</Link>
                    </div>
                 </div>
              </div>
            )
          })}
        </div>

        <div className="mb-28">
           <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-16">Our <em>Methods</em></h3>
           <ProcessSteps steps={[
             { n: '1', title: 'Consultation', desc: 'Detailed scoping of your roofing needs or damage.' },
             { n: '2', title: 'Assessment', desc: 'Drone or physical inspection of the decking and shingles.' },
             { n: '3', title: 'Execution', desc: 'Flawless install, precise repairs, or rapid mitigation.' },
             { n: '4', title: 'Guarantee', desc: 'Supported by industry-leading warranties and guarantees.' }
           ]} />
        </div>

        <CtaBanner headline="Ready to start your project?" />
      </div>
    </div>
  )
}
