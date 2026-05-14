import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { Breadcrumb } from '../components/Breadcrumb';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function Contact() {
  useSEO({
    title: 'Contact WDR Roofing Austin | Free Roof Inspection',
    description: 'Contact WDR Roofing in Austin TX. Schedule a free roof inspection or get a same-day estimate. Call (512) 820-6505 or fill out our online form. Available 24/7 for emergencies.',
    canonical: '/contact',
  });

  return (
    <div style={{ backgroundColor: '#09090a' }}>
      <PageHero height="40vh" eyebrow="Reach Out" title={<>Let's Talk <em>Roofing</em>.</>} image="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1920&q=80" />
      
      {/* Emergency Strip */}
      <div className="bg-[#c9a96e] px-4 py-4 text-center border-y border-[#e8c98a]">
         <p className="text-[#09090a] font-semibold text-[0.85rem] uppercase tracking-widest flex items-center justify-center flex-wrap gap-2">
            <LucideIcons.AlertTriangle className="w-4 h-4"/> 
            Roof emergency? Available 24/7. &rarr; 
            <a href="tel:5128206505" className="underline decoration-2 underline-offset-2 hover:text-[#111113]">(512) 820-6505</a>
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20 mt-8">
           <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="font-display text-4xl text-[#f3ede0] mb-6">Contact <em>WDR</em></h2>
                <p className="text-[1.05rem] font-light text-[#f3ede0]/70 leading-[1.9]">
                  Send us a message using the form, or reach out directly via phone or email. Our customer service team operates exactly like our roofing crews: fast, friendly, and honest.
                </p>
              </div>

              <div className="space-y-6 bg-[#111113] p-8 rounded-2xl border border-white/5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center shrink-0">
                    <LucideIcons.Phone className="text-[#c9a96e] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7a756e] uppercase tracking-wider mb-1">Direct Line</p>
                    <a href="tel:5128206505" className="text-xl text-[#f3ede0] font-medium font-display">(512) 820-6505</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                    <LucideIcons.Mail className="text-[#c9a96e] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7a756e] uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:info@austinroofingandwaterdamage.com" className="text-[0.95rem] text-[#f3ede0] font-light hover:text-[#c9a96e]">info@austinwdr.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                    <LucideIcons.MapPin className="text-[#c9a96e] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7a756e] uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-[0.95rem] text-[#f3ede0] font-light">9711 Beck Cir<br/>Austin, TX 78758</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                    <LucideIcons.Clock className="text-[#c9a96e] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#7a756e] uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-[0.95rem] text-[#f3ede0] font-light">Mon-Fri: 7am - 6pm<br/><span className="text-[#c9a96e] font-medium">Emergency: 24/7</span></p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10" style={{height: '240px'}}>
                <iframe
                  title="Austin Roofing Company & Water Damage | WDR Location"
                  width="100%"
                  height="240"
                  style={{border: 0}}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5!2d-97.7127123!3d30.3761739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a4f8b0c1a3%3A0x9c1f2d3e4a5b6c7d!2sAustin+Roofing+Company+%26+Water+Damage+%7C+WDR!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/Austin+Roofing+Company+%26+Water+Damage+%7C+WDR/@30.3761555,-97.7127597,21z/data=!4m6!3m5!1s0x8644cbeec398bf49:0x735fa6fbe3b9bd5f!8m2!3d30.3761739!4d-97.7127123!16s%2Fg%2F11gbk2fppq?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a96e] text-sm font-semibold uppercase tracking-wider hover:text-[#e8c98a]"
              >
                <LucideIcons.MapPin className="w-4 h-4" /> Get Directions on Google Maps &rarr;
              </a>

              <div className="flex gap-4">
                <a href="https://www.facebook.com/waterdamageandroofingaustin/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-[#c9a96e]/40 hover:text-[#c9a96e] text-[#f3ede0] transition-colors"><LucideIcons.Facebook className="w-5 h-5" /></a>
                <a href="https://twitter.com/wdraustin" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:border-[#c9a96e]/40 hover:text-[#c9a96e] text-[#f3ede0] transition-colors"><LucideIcons.Twitter className="w-5 h-5" /></a>
              </div>
           </div>
           
           <div className="lg:col-span-7">
              <div className="glass-dark p-8 md:p-12 rounded-3xl border border-[#c9a96e]/20 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a96e]/5 blur-3xl rounded-full"></div>
                 <h3 className="font-display text-3xl text-[#f3ede0] mb-8 relative z-10">Request a Free Estimate</h3>
                 <div className="relative z-10"><ContactForm /></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
