import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export function CtaBanner({
  headline = 'Ready for a durable, beautiful roof?',
  sub = 'Get a free, no-obligation inspection within 24 hours.',
  phone = false,
  link = '/contact',
  linkLabel = 'Get a Free Quote'
}: { headline?: string; sub?: string; phone?: boolean; link?: string; linkLabel?: string }) {
  return (
    <div className="relative overflow-hidden py-20 px-6 text-center rounded-2xl my-16">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        alt="Roofing crew working on Austin home"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1e3a5f]/85" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">{headline}</h2>
        <p className="text-white/70 mb-10 text-lg">{sub}</p>
        {phone ? (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="tel:5128206505" className="inline-flex items-center gap-2 text-2xl text-blue-300 font-bold hover:text-white transition-colors">
              <Phone className="w-6 h-6" /> (512) 820-6505
            </a>
            <span className="hidden sm:inline text-white/40">or</span>
            <Link to={link} className="btn-gold rounded-lg">{linkLabel}</Link>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:5128206505" className="inline-flex items-center gap-2 bg-white text-[#1d4ed8] font-bold text-sm uppercase tracking-wide py-3.5 px-8 rounded-lg hover:bg-blue-50 transition-colors">
              <Phone className="w-4 h-4" /> (512) 820-6505
            </a>
            <Link to={link} className="btn-gold rounded-lg">{linkLabel}</Link>
          </div>
        )}
      </div>
    </div>
  );
}
