import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { useSEO } from '../utils/seo';

export default function About() {
  useSEO({
    title: 'About WDR — Austin Roofing Company Since 2012',
    description: 'Learn about WDR, Austin\'s #1 roofing company since 2012. GAF Master Elite certified, BBB A+ rated, 1,382 five-star reviews. 25+ years combined experience in residential & commercial roofing.',
    canonical: '/about',
  });

  return (
    <div className="bg-[#09090a]">
      <PageHero eyebrow="Our Story" title={<>13 Years of <em>Excellence</em>.</>} subtitle="Founded in 2012, Austin Roofing Company & Water Damage (WDR) has dedicated itself to protecting Central Texas homes with uncompromising quality." />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'About Us' }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
           <div className="bg-[#111113] p-10 rounded-3xl glass text-center lg:text-left">
             <h2 className="font-display text-4xl text-[#f3ede0] mb-6">Our <em>Story</em></h2>
             <p className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9] mb-4">WDR began with a simple philosophy: treat every roof like it’s over our own family. What started as a small, specialized repair crew in 2012 has grown into Austin’s most trusted full-service roofing and restoration company.</p>
             <p className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9]">Our dual expertise in roofing and water damage restoration means we don't just patch a leak; we heal the entire structure. Our dedication to craftsmanship and transparent communication earned us consecutive Austin Business Journal Top 50 awards in 2020 and 2021.</p>
           </div>
           <div className="relative aspect-square rounded-3xl overflow-hidden glass-gold p-2">
             <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" alt="Roofing Team" className="w-full h-full object-cover rounded-2xl" />
           </div>
        </div>

        <div className="mb-28 text-center">
           <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-12">Core <em>Values</em></h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="glass p-8 rounded-2xl">
               <div className="w-16 h-16 mx-auto rounded-full glass-gold flex items-center justify-center mb-6"><span className="text-2xl text-[#c9a96e]">🛡️</span></div>
               <h4 className="text-xl font-display text-[#f3ede0] mb-3">Integrity</h4>
               <p className="text-[#f3ede0]/60 font-light text-[0.95rem]">We never recommend a replacement when a repair will do. Honest assessments are our foundation.</p>
             </div>
             <div className="glass p-8 rounded-2xl">
               <div className="w-16 h-16 mx-auto rounded-full glass-gold flex items-center justify-center mb-6"><span className="text-2xl text-[#c9a96e]">⚒️</span></div>
               <h4 className="text-xl font-display text-[#f3ede0] mb-3">Craftsmanship</h4>
               <p className="text-[#f3ede0]/60 font-light text-[0.95rem]">Using Master Elite materials and exhaustive safety protocols ensures an install that outlasts our warranties.</p>
             </div>
             <div className="glass p-8 rounded-2xl">
               <div className="w-16 h-16 mx-auto rounded-full glass-gold flex items-center justify-center mb-6"><span className="text-2xl text-[#c9a96e]">👁️</span></div>
               <h4 className="text-xl font-display text-[#f3ede0] mb-3">Transparency</h4>
               <p className="text-[#f3ede0]/60 font-light text-[0.95rem]">Clear pricing, complete photo documentation, and zero hidden fees. We communicate every step of the way.</p>
             </div>
           </div>
        </div>

        <div className="mb-28 text-center">
            <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-12">Meet the <em>Team</em></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Michael T.', role: 'Founder & Master Roofer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
                { name: 'Sarah J.', role: 'Operations Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
                { name: 'David R.', role: 'Lead Inspector', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
                { name: 'Elena C.', role: 'Restoration Specialist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' }
              ].map((member, i) => (
                <div key={i} className="glass p-6 rounded-2xl">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-2 border-[#c9a96e]/20"><img src={member.img} alt={member.name} className="w-full h-full object-cover"/></div>
                  <h4 className="font-display text-xl text-[#c9a96e] mb-1">{member.name}</h4>
                  <p className="text-[#7a756e] text-sm uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-[#f3ede0]/60 font-light text-[0.85rem]">Dedicated specialist bringing years of exceptional service to the WDR crew.</p>
                </div>
              ))}
            </div>
        </div>

        <div className="mb-28 border-y border-white/5 py-16">
          <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-12">Accreditations & <em>Awards</em></h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['GAF Master Elite', 'Owens Corning Preferred', 'CertainTeed Master', 'BBB A+ Accredited', 'Fully Licensed & Insured', 'Austin BJ Top 50 2020', 'Austin BJ Top 50 2021'].map(cert => (
              <span key={cert} className="glass-gold px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-[#e8c98a] border border-[#c9a96e]/30 shadow-lg">{cert}</span>
            ))}
          </div>
        </div>

        <div className="mb-28 max-w-4xl mx-auto relative">
           <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-16">Company <em>Timeline</em></h3>
           <div className="absolute left-[20px] md:left-1/2 top-[100px] bottom-0 w-[1px] bg-gradient-to-b from-[#c9a96e]/50 via-[#c9a96e]/20 to-transparent"></div>
           <div className="space-y-12">
             {[
               { year: '2001', title: 'The Early Days', desc: 'Origins established in the industry.'},
               { year: '2012', title: 'Expanded to Austin', desc: 'WDR officially launched to serve Central Texas.'},
               { year: '2016', title: 'Commercial Division', desc: 'Began providing TPO and EPDM flat roof solutions for businesses.'},
               { year: '2018', title: '500th 5-Star Review', desc: 'A major milestone in community trust.'},
               { year: '2020', title: 'Austin BJ Top 50', desc: 'Recognized as a leading fast-growth company.'},
               { year: '2024', title: 'Leader in Restoration', desc: 'Over 1,382 reviews and thriving.'}
             ].map((evt, i) => (
                <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-[60px] md:pl-0`}>
                   <div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full bg-[#c9a96e] transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(201,169,110,0.8)]"></div>
                   <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                     <span className="text-[#c9a96e] font-display text-3xl">{evt.year}</span>
                     <h4 className="text-[#f3ede0] text-xl mb-2 mt-1">{evt.title}</h4>
                     <p className="text-[#f3ede0]/60 font-light text-[0.95rem]">{evt.desc}</p>
                   </div>
                </div>
             ))}
           </div>
        </div>

        <CtaBanner headline="Meet our team in person." sub="Come visit us in Austin, or we'll come to you for a free assessment." />
      </div>
    </div>
  )
}
