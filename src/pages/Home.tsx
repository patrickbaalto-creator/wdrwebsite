import { Link } from 'react-router-dom';
import { ProcessSteps } from '../components/ProcessSteps';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FadeUp } from '../components/FadeUp';
import { services } from '../data/services';
import { posts } from '../data/posts';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function Home() {
  useSEO({
    title: 'Austin Roofing Company & Water Damage Restoration | WDR',
    description: "Austin's #1 rated roofing contractor. GAF Master Elite certified. Roof replacement, repair, hail damage & water damage restoration. Serving Austin since 2012. Named Austin Business Journal Top 50. Call (512) 820-6505.",
    canonical: '/',
  });

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn-genah.nitrocdn.com/aCeRYObydmPvAkBCsJIPFdlzlxATatuh/assets/images/optimized/rev-f6df6c9/austinroofingandwaterdamage.com/wp-content/uploads/WDR-team.jpg"
            alt="Roofing professionals at work in Austin TX"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <LucideIcons.Star className="w-3.5 h-3.5 fill-white" /> GAF Master Elite Certified · 1,382+ Five-Star Reviews
            </div>
            <h1 className="font-display text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Austin's Most Trusted<br/><span className="text-blue-300">Roofing Company</span>
            </h1>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8 max-w-xl">
              WDR has been serving Austin since 2012, drawing on 25+ years of combined roofing experience. We also provide full-service water damage restoration — available 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:5128206505" className="btn-gold rounded-lg text-base py-4 px-8 flex items-center gap-2">
                <LucideIcons.Phone className="w-5 h-5" /> Call (512) 820-6505
              </a>
              <Link to="/contact" className="btn-glass-hero">
                Free Roof Inspection
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/20">
              {[
                { label: 'Years Serving Austin', val: '13+' },
                { label: 'Five-Star Reviews', val: '1,382+' },
                { label: 'Emergency Service', val: '24/7' },
              ].map(s => (
                <div key={s.label} className="glass-hero-stat px-5 py-3 rounded-xl">
                  <div className="text-3xl font-bold text-white font-display">{s.val}</div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="bg-[#1e3a5f] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm font-medium">
          {['GAF Master Elite Certified', 'BBB A+ Rated', 'Available 24/7', 'Free Roof Inspections', 'Austin Business Journal Top 50', 'Fully Licensed & Insured'].map(t => (
            <span key={t} className="flex items-center gap-2">
              <LucideIcons.CheckCircle className="w-4 h-4 text-blue-300 shrink-0" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT / INTRO ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1080&q=80"
                alt="WDR roofing crew installing a new roof in Austin Texas"
                className="w-full h-full object-cover"
              />
            </div>
            {/* ABJ Award Banner */}
            <div className="mt-6 glass-dark-card text-white rounded-xl p-5 flex items-center gap-4">
              <LucideIcons.Award className="w-10 h-10 text-yellow-300 shrink-0" />
              <div>
                <div className="font-bold text-sm">Austin Business Journal</div>
                <div className="text-xs text-white/80 mt-0.5">Top 50 Fastest-Growing Companies in Central Texas — 2020 &amp; 2021</div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15} className="space-y-6">
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest">About WDR</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1e3a5f] leading-tight">
              Austin's Premier<br/>Roofing Contractor
            </h2>
            <p className="text-[#475569] text-lg font-light leading-relaxed">
              Austin Roofing Company &amp; Water Damage | WDR is proud to be the premier central Texas roof repair contractor. Our team of expert roofing professionals offers water damage restoration and roofing services, including reroofing, emergency water removal, roof inspection, commercial, metal, residential roofing, roof repair, and total roof replacements.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Our knowledgeable and experienced team of expert roofers can help with your water damage, roof repair, and replacement needs. Serving Austin homeowners since 2012 with 25+ years of combined experience.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['GAF Master Elite', 'BBB A+ Rated', 'ABJ Top 50 — 2020 & 2021', 'Fully Insured'].map(b => (
                <span key={b} className="bg-blue-50 border border-blue-100 text-[#1d4ed8] px-4 py-2 rounded-full text-xs font-semibold">{b}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href="tel:5128206505" className="btn-gold rounded-lg">Call Now</a>
              <Link to="/about" className="btn-ghost rounded-lg">Our Story</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">What We Do</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1e3a5f]">Complete Roofing &amp; Restoration Services</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, i) => {
              const Icon = (LucideIcons[service.icon as keyof typeof LucideIcons] as any) || LucideIcons.Wrench;
              return (
                <Link to={`/services/${service.slug}`} key={i} className="glass p-7 rounded-2xl service-card group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-[#1d4ed8] transition-colors">
                    <Icon className="w-6 h-6 text-[#1d4ed8] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{service.name}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                  <span className="text-[#1d4ed8] text-xs font-bold uppercase tracking-wider service-link flex items-center gap-1">
                    Learn More <LucideIcons.ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-ghost rounded-lg">See All Roofing Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY WDR ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">Why Choose WDR</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1e3a5f]">The WDR Difference</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ShieldCheck', title: 'GAF Master Elite Certified', desc: 'Only the top 3% of roofing contractors earn GAF Master Elite status. This means access to the Golden Pledge warranty — up to 50 years of coverage.' },
              { icon: 'Clock', title: 'Available 24/7', desc: 'Roof emergencies don\'t wait for business hours. Our rapid-response crews are on call around the clock for tarping, emergency repairs, and water extraction.' },
              { icon: 'FileText', title: 'Insurance Claim Experts', desc: 'We work directly with your insurance adjuster and handle all the paperwork to ensure you get the maximum coverage for storm and hail damage.' },
              { icon: 'Star', title: '1,382+ Five-Star Reviews', desc: 'Our track record speaks for itself — over 1,382 five-star Google reviews from Austin homeowners and businesses.' },
              { icon: 'Award', title: 'ABJ Top 50 Company', desc: 'Named to the Austin Business Journal\'s Top 50 Fastest-Growing Companies in Central Texas in both 2020 and 2021.' },
              { icon: 'Home', title: 'Full-Service Restoration', desc: 'From the first missing shingle to full water damage mitigation — we handle roofing AND interior restoration so you only need one call.' },
            ].map((item, i) => {
              const Icon = (LucideIcons[item.icon as keyof typeof LucideIcons] as any) || LucideIcons.CheckCircle;
              return (
                <FadeUp key={i} delay={i * 0.05} className="flex gap-5 p-6 rounded-2xl bg-[#f8fafc] border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">How We Work</div>
            <h2 className="font-display text-4xl lg:text-5xl text-white">Our Simple 4-Step Process</h2>
          </FadeUp>
          <ProcessSteps steps={[
            { n: '1', title: 'Free Inspection', desc: 'We inspect your roof at no charge and provide a detailed report with photos of any damage found.' },
            { n: '2', title: 'Clear Estimate', desc: 'You receive a transparent, itemized quote with good/better/best material options — no hidden fees.' },
            { n: '3', title: 'Expert Installation', desc: 'Our GAF-certified crews install using premium materials and manufacturer-specified techniques.' },
            { n: '4', title: 'Final Sweep & Warranty', desc: 'We magnetic-sweep your yard, conduct a final walkthrough, and register your manufacturer warranty.' },
          ]} />
          <div className="text-center mt-12">
            <a href="tel:5128206505" className="btn-gold rounded-lg text-base py-4 px-10 inline-flex items-center gap-2">
              <LucideIcons.Phone className="w-5 h-5" /> Schedule Your Free Inspection
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <FadeUp>
              <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">Our Work</div>
              <h2 className="font-display text-4xl text-[#1e3a5f]">Featured Projects</h2>
            </FadeUp>
            <Link to="/video-gallery" className="hidden md:inline-block btn-ghost rounded-lg text-sm">Full Portfolio</Link>
          </div>
          <div className="gallery-grid rounded-2xl overflow-hidden">
            <div className="gallery-item gallery-item-large">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80" alt="Premium asphalt shingle roof installation in Round Rock TX by WDR Roofing" />
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Premium Asphalt Install — Round Rock</div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80" alt="Standing seam metal roof on Lake Travis home by WDR" />
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Standing Seam Metal — Lake Travis</div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" alt="Tile roof restoration in Cedar Park TX by WDR Roofing" />
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Tile Roof Restoration — Cedar Park</div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80" alt="Emergency roof tarping after storm damage in Austin TX" />
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Emergency Tarping — Austin</div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80" alt="Commercial TPO flat roof installation in Georgetown TX by WDR" />
              <div className="gallery-overlay"></div>
              <div className="gallery-label">Commercial TPO — Georgetown</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">Client Reviews</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1e3a5f]">What Austin Homeowners Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => <LucideIcons.Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              <span className="text-[#475569] font-medium ml-2">4.9 · 1,382+ Google Reviews</span>
            </div>
          </FadeUp>
          <TestimonialsSection />
          <div className="text-center mt-10">
            <a href="https://g.page/r/REVIEW_LINK/review" target="_blank" rel="noopener noreferrer" className="btn-ghost rounded-lg">Write a Review</a>
          </div>
        </div>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">Resources</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#1e3a5f]">Roofing Tips &amp; Guides</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="glass rounded-2xl overflow-hidden group block hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-[#1d4ed8] text-xs font-bold uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-bold text-[#1e3a5f] text-lg mt-2 mb-3 leading-snug group-hover:text-[#1d4ed8] transition-colors">{post.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                      <span className="text-[#94a3b8] text-xs">{post.date}</span>
                      <span className="text-[#1d4ed8] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        Read More <LucideIcons.ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-ghost rounded-lg">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── LOCATION / MAP ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp className="space-y-6">
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest">Find Us</div>
            <h2 className="font-display text-4xl text-[#1e3a5f]">Visit Our Austin Office</h2>
            <div className="space-y-4">
              {[
                { icon: 'MapPin', label: 'Address', val: '9711 Beck Cir, Austin, TX 78758' },
                { icon: 'Phone', label: 'Phone', val: '(512) 820-6505', href: 'tel:5128206505' },
                { icon: 'Clock', label: 'Hours', val: 'Open 24 hours / 7 days a week' },
              ].map(item => {
                const Icon = (LucideIcons[item.icon as keyof typeof LucideIcons] as any) || LucideIcons.Info;
                return (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#94a3b8] uppercase tracking-wider">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="text-[#1e3a5f] font-semibold hover:text-[#1d4ed8]">{item.val}</a>
                        : <div className="text-[#1e3a5f] font-semibold">{item.val}</div>
                      }
                    </div>
                  </div>
                );
              })}
            </div>
            <a href="https://www.google.com/maps/place/Austin+Roofing+Company+%26+Water+Damage+%7C+WDR/@30.3761555,-97.7127597,21z/data=!4m6!3m5!1s0x8644cbeec398bf49:0x735fa6fbe3b9bd5f!8m2!3d30.3761739!4d-97.7127123!16s%2Fg%2F11gbk2fppq?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn-gold rounded-lg inline-flex items-center gap-2">
              <LucideIcons.MapPin className="w-4 h-4" /> Get Directions
            </a>
          </FadeUp>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80">
            <iframe
              title="Austin Roofing Company & Water Damage | WDR"
              width="100%" height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5!2d-97.7127123!3d30.3761739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a4f8b0c1a3%3A0x9c1f2d3e4a5b6c7d!2sAustin+Roofing+Company+%26+Water+Damage+%7C+WDR!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6 bg-[#1d4ed8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">Ready to Protect Your Home?</h2>
          <p className="text-blue-100 text-lg mb-8">Get a free, no-obligation roof inspection from Austin's #1 rated contractor. We respond fast — most inspections scheduled within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:5128206505" className="inline-flex items-center gap-2 bg-white text-[#1d4ed8] font-bold text-sm uppercase tracking-wide py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              <LucideIcons.Phone className="w-5 h-5" /> Call (512) 820-6505
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-sm uppercase tracking-wide py-4 px-8 rounded-lg hover:bg-white/10 transition-colors">
              Request Free Inspection
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
