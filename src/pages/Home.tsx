import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Marquee } from '../components/Marquee';
import { ProcessSteps } from '../components/ProcessSteps';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaBanner } from '../components/CtaBanner';
import { FadeUp } from '../components/FadeUp';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function Home() {
  useSEO({
    title: "Austin Roofing Company & Water Damage Restoration | WDR",
    description: "Austin's #1 rated roofing contractor. GAF Master Elite certified. Roof replacement, repair, hail damage & water damage restoration. Serving Austin since 2012. Call (512) 820-6505.",
    canonical: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'WDR Roofing Austin — Home',
      'url': 'https://fleshedout-roofing-website.vercel.app/',
      'description': "Austin's #1 rated roofing contractor. GAF Master Elite certified.",
    },
  });

  return (
    <>
      <PageHero 
        height="100svh"
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
        eyebrow="GAF Master Elite · Austin's #1 Rated Roofer · Available 24/7"
        title={<>Austin's Most <em>Trusted</em>.<br/>Roofing & Water Damage.</>}
        subtitle="Serving Austin since 2012 with 25+ years of combined experience."
      />
      <div className="absolute top-[85svh] left-0 right-0 flex justify-center z-30">
         <div className="glass-dark p-2 rounded-full flex gap-2 border border-white/10 shadow-2xl">
           <a href="tel:5128206505" className="btn-gold rounded-full truncate">Call (512) 820-6505</a>
           <Link to="/services" className="btn-ghost rounded-full border-transparent hover:border-transparent bg-white/5 hover:bg-white/10">Our Services</Link>
         </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30 pointer-events-none">
        <LucideIcons.ChevronDown className="w-8 h-8 text-[#c9a96e] scroll-cue" />
      </div>

      <Marquee items={['GAF Master Elite Certified', 'Available 24/7', 'Residential Roofing', 'Commercial Roofing', 'Water Damage Restoration', 'Hail & Storm Specialists', 'Free Inspections', 'Austin Business Journal Top 50']} />

      {/* About Teaser */}
      <section className="py-28 px-6 lg:px-12 max-w-7xl mx-auto bg-[#09090a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1080&q=80" alt="WDR Team" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090a] via-transparent to-transparent opacity-80" />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="glass p-4 rounded-xl text-center"><p className="font-display text-2xl text-[#c9a96e]">13+</p><p className="text-[0.65rem] uppercase tracking-wider text-[#7a756e] mt-1">Years Local</p></div>
              <div className="glass p-4 rounded-xl text-center"><p className="font-display text-2xl text-[#c9a96e]">1,382</p><p className="text-[0.65rem] uppercase tracking-wider text-[#7a756e] mt-1">5-Star Reviews</p></div>
              <div className="glass p-4 rounded-xl text-center"><p className="font-display text-2xl text-[#c9a96e]">24/7</p><p className="text-[0.65rem] uppercase tracking-wider text-[#7a756e] mt-1">Emergency Service</p></div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="space-y-6">
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e]">About WDR</h3>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f3ede0] leading-[1.1] font-light">Built on <em>Integrity</em>. Driven by Craftsmanship.</h2>
            <p className="text-[1rem] font-light text-[#f3ede0]/70 leading-[2]">Austin Roofing Company & Water Damage | WDR is proud to be the premier central Texas roof repair contractor. Our team of expert roofing professionals offers water damage restoration and roofing services, including reroofing, emergency water removal, roof inspection, commercial, metal, residential roofing, roof repair, and total roof replacements.</p>
            <p className="text-[1rem] font-light text-[#f3ede0]/70 leading-[2]">Serving Austin since 2012 with 25+ years of combined experience — and named to the Austin Business Journal's Top 50 Fastest-Growing Companies two years running.</p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="glass-gold px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e8c98a]">GAF Master Elite</span>
              <span className="glass-gold px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e8c98a]">BBB A+ Rated</span>
              <span className="glass-gold px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e8c98a]">ABJ Top 50</span>
              <span className="glass-gold px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e8c98a]">Fully Insured</span>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center shrink-0">
                <LucideIcons.MapPin className="text-[#c9a96e] w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#c9a96e] font-semibold tracking-wide uppercase">Austin Headquarters</p>
                <p className="text-[0.95rem] text-[#f3ede0] font-light mt-1">9711 Beck Cir<br/>Austin, TX 78758</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 px-6 lg:px-12 bg-[#111113]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-4">Our Expertise</h3>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f3ede0] leading-[1.1] font-light">Complete <em>Roofing</em> & Restoration.</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => {
              // @ts-ignore
              const Icon = (LucideIcons[service.icon as keyof typeof LucideIcons] as any) || LucideIcons.Wrench;
              return (
                <Link to={`/services/${service.slug}`} key={i} className="glass p-10 rounded-3xl service-card group relative">
                  <Icon className="w-10 h-10 text-[#c9a96e] mb-6 transform group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="font-display text-2xl text-[#f3ede0] mb-3">{service.name}</h3>
                  <p className="text-[#f3ede0]/60 font-light text-[0.95rem] leading-relaxed mb-8">{service.shortDesc}</p>
                  <span className="text-[#c9a96e] text-xs font-semibold tracking-wider uppercase service-link flex items-center gap-1">Learn More <LucideIcons.ArrowRight className="w-4 h-4" /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28 px-6 lg:px-12 bg-[#09090a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <FadeUp>
              <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-4">Our Work</h3>
              <h2 className="font-display text-4xl lg:text-5xl text-[#f3ede0] leading-[1.1] font-light">Featured <em>Projects</em>.</h2>
            </FadeUp>
            <Link to="/video-gallery" className="hidden md:inline-block btn-ghost rounded-full">Full Portfolio</Link>
          </div>
          <div className="gallery-grid rounded-2xl overflow-hidden">
             <div className="gallery-item gallery-item-large">
               <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80" alt="Premium asphalt shingle roof installation in Round Rock TX by WDR Roofing" />
               <div className="gallery-overlay"></div>
               <div className="gallery-label">Premium Asphalt Install — Round Rock</div>
             </div>
             <div className="gallery-item">
               <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80" alt="Standing seam metal roof installation on Lake Travis home by WDR" />
               <div className="gallery-overlay"></div>
               <div className="gallery-label">Standing Seam Metal — Lake Travis</div>
             </div>
             <div className="gallery-item">
               <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="Tile roof restoration project in Cedar Park TX by WDR Roofing" />
               <div className="gallery-overlay"></div>
               <div className="gallery-label">Tile Roof Restoration — Cedar Park</div>
             </div>
             <div className="gallery-item">
               <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80" alt="Emergency roof tarping after storm damage in Austin TX by WDR" />
               <div className="gallery-overlay"></div>
               <div className="gallery-label">Emergency Tarping — Austin</div>
             </div>
             <div className="gallery-item">
               <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80" alt="Commercial TPO flat roof installation in Georgetown TX by WDR Roofing" />
               <div className="gallery-overlay"></div>
               <div className="gallery-label">Commercial TPO — Georgetown</div>
             </div>
          </div>
          <Link to="/video-gallery" className="md:hidden mt-8 w-full btn-ghost rounded-full text-center">Full Portfolio</Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 lg:px-12 bg-[#111113]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-4">How we work</h3>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f3ede0] leading-[1.1] font-light">The WDR <em>Standard</em>.</h2>
          </FadeUp>
          <ProcessSteps steps={[
            { n: '1', title: 'Free Assessment', desc: 'We inspect your roof and provide a detailed report with photos.' },
            { n: '2', title: 'Clear Estimate', desc: 'You receive transparent pricing and multiple material options.' },
            { n: '3', title: 'Precision Install', desc: 'Our certified crews install the highest-quality systems safely.' },
            { n: '4', title: 'Final Sweep', desc: 'We magnetic-sweep your yard and conduct a final quality check.' }
          ]} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 lg:px-12 bg-[#09090a]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h3 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-4">Client Reviews</h3>
            <h2 className="font-display text-4xl lg:text-5xl text-[#f3ede0] leading-[1.1] font-light">Trusted by <em>Austin</em>.</h2>
          </FadeUp>
          <TestimonialsSection />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
