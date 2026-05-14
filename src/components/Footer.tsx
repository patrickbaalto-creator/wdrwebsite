import { Facebook, Twitter, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white pt-16 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="bg-white text-[#1e3a5f] font-bold text-lg px-3 py-1.5 rounded font-display">WDR</div>
            <div>
              <div className="font-bold text-sm">Austin Roofing</div>
              <div className="text-white/60 text-xs">& Water Damage</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Austin's premier roofing and water damage restoration contractor. GAF Master Elite certified. Serving Central Texas since 2012.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/waterdamageandroofingaustin/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="https://twitter.com/wdraustin" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-5">Services</h4>
          <ul className="space-y-2.5">
            {services.map(s => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-white/70 hover:text-white text-sm transition-colors">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-5">Company</h4>
          <ul className="space-y-2.5 mb-8">
            <li><Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
            <li><Link to="/residential" className="text-white/70 hover:text-white text-sm transition-colors">Residential Roofing</Link></li>
            <li><Link to="/commercial" className="text-white/70 hover:text-white text-sm transition-colors">Commercial Roofing</Link></li>
            <li><Link to="/roof-types/metal-roofing" className="text-white/70 hover:text-white text-sm transition-colors">Metal Roofing</Link></li>
            <li><Link to="/roof-types/asphalt-shingle" className="text-white/70 hover:text-white text-sm transition-colors">Asphalt Shingle</Link></li>
            <li><Link to="/roof-types/tile-roof" className="text-white/70 hover:text-white text-sm transition-colors">Tile Roof</Link></li>
            <li><Link to="/service-area" className="text-white/70 hover:text-white text-sm transition-colors">Service Area</Link></li>
            <li><Link to="/blog" className="text-white/70 hover:text-white text-sm transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
              <span className="text-white/70 text-sm">9711 Beck Cir<br/>Austin, TX 78758</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-blue-300 shrink-0" />
              <a href="tel:5128206505" className="text-white/70 hover:text-white text-sm transition-colors">(512) 820-6505</a>
            </li>
            <li className="flex gap-3 items-start">
              <Clock className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" />
              <span className="text-white/70 text-sm">Open 24 hours / 7 days<br/><span className="text-blue-300 font-semibold">Emergency: 24/7</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} Austin Roofing Company &amp; Water Damage | WDR. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</Link>
          <Link to="/" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms &amp; Conditions</Link>
          <Link to="/contact" className="text-white/40 hover:text-white/70 text-xs transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
