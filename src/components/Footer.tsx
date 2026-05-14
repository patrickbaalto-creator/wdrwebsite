import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export function Footer() {
  return (
    <footer className="bg-[#09090a] border-t border-[#c9a96e]/10 pt-20 pb-24 md:pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="font-display text-4xl tracking-widest text-[#f3ede0]">
            WDR<span className="text-[#c9a96e]">.</span>
          </Link>
          <p className="text-[#f3ede0]/60 text-sm leading-relaxed max-w-sm font-light">
            Austin’s premier roofing and water damage restoration experts. Over a decade of excellence protecting local homes and businesses.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="https://www.facebook.com/waterdamageandroofingaustin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-colors text-[#f3ede0]"><Facebook className="w-4 h-4" /></a>
            <a href="https://twitter.com/wdraustin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-colors text-[#f3ede0]"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-6">Services</h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Roof Types */}
        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-6">Roof Types</h4>
          <ul className="space-y-3">
            <li><Link to="/roof-types/metal-roofing" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">Metal Roofing</Link></li>
            <li><Link to="/roof-types/asphalt-shingle" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">Asphalt Shingle</Link></li>
            <li><Link to="/roof-types/tile-roof" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">Tile Roof</Link></li>
          </ul>
          
          <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mt-10 mb-6">Company</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">About Us</Link></li>
            <li><Link to="/residential" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">Residential</Link></li>
            <li><Link to="/commercial" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">Commercial</Link></li>
            <li><Link to="/service-area" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">Service Area</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-[#c9a96e] mb-6">Contact</h4>
          <ul className="space-y-5">
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-[#c9a96e] mt-0.5" />
              <span className="text-[#f3ede0]/70 text-sm font-light leading-relaxed">9711 Beck Cir<br/>Austin, TX 78758</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-[#c9a96e]" />
              <a href="tel:5128206505" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">(512) 820-6505</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-[#c9a96e]" />
              <a href="mailto:info@austinwdr.com" className="text-[#f3ede0]/70 hover:text-[#e8c98a] text-sm transition-colors font-light">info@austinwdr.com</a>
            </li>
            <li className="flex gap-3 items-start">
              <Clock className="w-4 h-4 text-[#c9a96e] mt-0.5" />
              <span className="text-[#f3ede0]/70 text-sm font-light leading-relaxed">Mon-Fri: 7am - 6pm<br/><span className="text-[#c9a96e]">Emergency: 24/7</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#7a756e] text-xs uppercase tracking-wider">© {new Date().getFullYear()} Austin Roofing Company & Water Damage.</p>
        <div className="flex gap-6">
          <Link to="/" className="text-[#7a756e] hover:text-[#f3ede0] text-xs uppercase tracking-wider transition-colors">Privacy Policy</Link>
          <Link to="/" className="text-[#7a756e] hover:text-[#f3ede0] text-xs uppercase tracking-wider transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
