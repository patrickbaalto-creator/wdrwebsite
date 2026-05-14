import { useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProcessSteps } from '../components/ProcessSteps';
import { RelatedServices } from '../components/RelatedServices';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaBanner } from '../components/CtaBanner';
import { services } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import { useSEO } from '../utils/seo';

function ServicePage({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug);

  useSEO(service ? {
    title: `${service.name} in Austin TX | WDR Roofing`,
    description: `${service.shortDesc} Serving Austin, Round Rock, Cedar Park & surrounding areas. GAF Master Elite certified. Call (512) 820-6505.`,
    canonical: `/services/${slug}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.name,
      'description': service.fullDesc,
      'provider': { '@type': 'RoofingContractor', 'name': 'WDR Roofing Austin', 'telephone': '(512) 820-6505' },
      'areaServed': { '@type': 'State', 'name': 'Texas' },
    },
  } : { title: 'Service Not Found | WDR', description: '' });

  if (!service) return <NotFound />;
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as any || LucideIcons.Wrench;

  return (
    <div className="bg-[#09090a]">
      <PageHero image={service.heroImage} title={<>{service.name}</>} eyebrow="Our Services" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: service.name }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-gold p-2">
            <img src={service.heroImage} alt={`${service.name} in Austin TX`} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div>
            <h2 className="font-display text-4xl text-[#f3ede0] mb-6">Expert <em>{service.name}</em></h2>
            <p className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9] mb-8">{service.fullDesc}</p>

            <div className="glass p-6 rounded-2xl border-[#c9a96e]/20 mb-8">
              <h4 className="text-[#c9a96e] text-[0.8rem] uppercase tracking-widest font-semibold mb-4 flex items-center gap-2"><Icon className="w-4 h-4"/> What's Included</h4>
              <ul className="space-y-3">
                {service.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <LucideIcons.CheckCircle className="w-5 h-5 text-[#c9a96e] shrink-0" />
                    <span className="text-[#f3ede0]/80 font-light text-[0.95rem]">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-28">
          <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-16">Our <em>Process</em></h3>
          <ProcessSteps steps={service.steps} />
        </div>

        <div className="bg-[#111113] -mx-6 lg:-mx-12 px-6 lg:px-12 py-28 mb-28 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-display text-4xl text-[#f3ede0] mb-12">Warning <em>Signs</em></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="glass p-6 rounded-xl flex items-start gap-4">
                  <LucideIcons.AlertTriangle className="w-6 h-6 text-[#c9a96e] shrink-0" />
                  <div>
                    <h4 className="text-[#f3ede0] font-semibold mb-1">Issue Indicator #{i}</h4>
                    <p className="text-[#f3ede0]/60 text-sm font-light">Watch out for subtle signs of roofing component failure that lead to leaks.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="font-display text-4xl text-[#f3ede0] mb-12">Related <em>Services</em></h3>
        <RelatedServices current={service.slug} />

        <div className="mt-28">
          <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-16">Client <em>Testimonials</em></h3>
          <TestimonialsSection />
        </div>

        <CtaBanner headline="Ready to secure your home?" />
      </div>
    </div>
  );
}

function CityPage({ slug }: { slug: string }) {
  const cityData = serviceAreas.find(s => s.slug === slug);

  useSEO(cityData ? {
    title: `Roofing Contractor in ${cityData.city}, TX | WDR Roofing`,
    description: `Top-rated roofing company serving ${cityData.city}, TX. ${cityData.description} GAF Master Elite certified. Free inspections. Call (512) 820-6505.`,
    canonical: `/service-area/${slug}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      'name': 'WDR Roofing Austin',
      'telephone': '(512) 820-6505',
      'address': { '@type': 'PostalAddress', 'streetAddress': '9711 Beck Cir', 'addressLocality': 'Austin', 'addressRegion': 'TX', 'postalCode': '78758' },
      'areaServed': { '@type': 'City', 'name': cityData.city, 'containedInPlace': { '@type': 'State', 'name': 'Texas' } },
      'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '5', 'bestRating': '5', 'reviewCount': '1382' },
    },
  } : { title: 'Area Not Found | WDR', description: '' });

  if (!cityData) return <NotFound />;

  return (
    <div className="bg-[#09090a]">
      <PageHero
        eyebrow={`Roofing Services in ${cityData.city}, TX`}
        title={<>{cityData.city}'s Most <em>Trusted Roofer.</em></>}
        subtitle={cityData.description}
        image="https://images.unsplash.com/photo-1560185893-a55b4e1f1f1f?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Service Areas', href: '/service-area' }, { label: cityData.city }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <h2 className="font-display text-4xl text-[#f3ede0] mb-6">Serving <em>{cityData.city}</em></h2>
            <p className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9] mb-6">
              {cityData.city} experiences drastic weather swings—from blistering summer heat to sudden, severe hail storms. At WDR, we understand the specific roofing challenges {cityData.city} homeowners face and build durable solutions capable of withstanding the Texas climate.
            </p>
            <div className="glass p-6 rounded-2xl border-[#c9a96e]/20 mb-8">
              <h4 className="text-[#c9a96e] text-[0.8rem] uppercase tracking-widest font-semibold mb-3 flex items-center gap-2"><LucideIcons.MapPin className="w-4 h-4"/> Neighborhoods Served</h4>
              <div className="flex flex-wrap gap-2">
                {cityData.neighborhoods.map(n => (
                  <span key={n} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-sm text-[#f3ede0]/80">{n}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-gold p-8 rounded-3xl text-center">
              <h3 className="font-display text-2xl text-[#f3ede0] mb-2">{cityData.localTrust}</h3>
              <p className="text-[#f3ede0]/60 text-sm mb-6">Usually within 2 hours response time in {cityData.city}.</p>
              <div className="glass bg-[#09090a]/50 p-6 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[140px]">
                <p className="text-[#f3ede0] font-medium mb-3 relative z-10 flex items-center gap-2">
                  <LucideIcons.MapPin className="text-[#c9a96e]"/> Serving {cityData.city}, TX {cityData.zip}
                </p>
                <a
                  href={`https://www.google.com/maps/search/WDR+Roofing+${encodeURIComponent(cityData.city)}+TX`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#c9a96e] uppercase tracking-wider relative z-10 font-semibold"
                >
                  View on Google Maps &rarr;
                </a>
                <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80")', backgroundSize: 'cover'}}/>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-28">
          <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-12">Services in <em>{cityData.city}</em></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => {
              const Icon = LucideIcons[s.icon as keyof typeof LucideIcons] as any || LucideIcons.Wrench;
              return (
                <Link to={`/services/${s.slug}`} key={i} className="glass p-8 rounded-3xl service-card group relative">
                  <Icon className="w-8 h-8 text-[#c9a96e] mb-4" />
                  <h3 className="font-display text-xl text-[#f3ede0] mb-2">{s.name}</h3>
                  <p className="text-[#f3ede0]/60 font-light text-[0.9rem] leading-relaxed mb-6">{s.shortDesc}</p>
                  <span className="text-[#c9a96e] text-xs font-semibold tracking-wider uppercase service-link flex items-center gap-1">Learn More <LucideIcons.ArrowRight className="w-4 h-4" /></span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mb-28 flex flex-col items-center text-center">
          <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-4">Also Serving Nearby</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {cityData.nearbyAreas.map(areaSlug => {
              const nearby = serviceAreas.find(s => s.slug === areaSlug);
              return nearby ? <Link key={areaSlug} to={`/service-area/${areaSlug}`} className="btn-ghost rounded-full border border-white/10 px-6">{nearby.city}</Link> : null;
            })}
          </div>
        </div>

        <div className="mt-28">
          <h3 className="text-center font-display text-4xl text-[#f3ede0] mb-16">Local <em>Reviews</em></h3>
          <TestimonialsSection />
        </div>

        <CtaBanner headline={`Need a roofer in ${cityData.city}?`} />
      </div>
    </div>
  );
}

function RoofTypePage({ slug }: { slug: string }) {
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  useSEO({
    title: `${name} Roofing in Austin TX | WDR Roofing`,
    description: `Expert ${name} roofing installation and repair in Austin, TX. GAF Master Elite certified contractor. Durable solutions engineered for the Texas climate. Call (512) 820-6505.`,
    canonical: `/roof-types/${slug}`,
  });

  return (
    <div className="bg-[#09090a]">
      <PageHero title={<>{name}</>} eyebrow="Roof Types" image="https://images.unsplash.com/photo-1587293852726-70cfd4013bcd?auto=format&fit=crop&w=1920&q=80"/>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Roof Types', href: '/roof-types' }, { label: name }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <h2 className="font-display text-4xl text-[#f3ede0] mb-6">About <em>{name}</em></h2>
            <p className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9] mb-6">
              Premium specialized roofing engineered for the specific demands of Central Texas. We employ Master-certified installation techniques to ensure the integrity, durability, and visual appeal of your {name} system.
            </p>
            <div className="glass p-6 rounded-2xl border-[#c9a96e]/20 mb-8 inline-block">
              <h4 className="text-[#c9a96e] text-[0.8rem] uppercase tracking-widest font-semibold mb-3">Best Used For:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#c9a96e]/10 text-[#c9a96e] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">Durability</span>
                <span className="bg-[#c9a96e]/10 text-[#c9a96e] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">High Winds</span>
                <span className="bg-[#c9a96e]/10 text-[#c9a96e] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">Energy Efficiency</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl text-center">
              <LucideIcons.ThumbsUp className="w-8 h-8 text-[#c9a96e] mx-auto mb-3"/>
              <h4 className="text-[#f3ede0] font-semibold mb-2">Pros</h4>
              <p className="text-[#f3ede0]/60 font-light text-sm">Long lifespan, highly resilient, excellent weather resistance.</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <LucideIcons.ThumbsDown className="w-8 h-8 text-[#7a756e] mx-auto mb-3"/>
              <h4 className="text-[#f3ede0] font-semibold mb-2">Cons</h4>
              <p className="text-[#f3ede0]/60 font-light text-sm">Higher upfront investment compared to standard materials.</p>
            </div>
          </div>
        </div>
        <CtaBanner headline="Interested in this style?" />
      </div>
    </div>
  );
}

export default function FactoryComponent({ type }: { type: 'service' | 'city' | 'rooftype' }) {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <NotFound />;
  if (type === 'service') return <ServicePage slug={slug} />;
  if (type === 'city') return <CityPage slug={slug} />;
  return <RoofTypePage slug={slug} />;
}
