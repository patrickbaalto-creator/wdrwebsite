import { Link } from 'react-router-dom';

export function CtaBanner({ 
  headline = 'Ready for a durable, beautiful roof?', 
  sub = 'Get a free, transparent estimate within 24 hours.', 
  phone = false, link = '/contact', linkLabel = 'Get a Quote →' 
}: { headline?: string; sub?: string; phone?: boolean; link?: string; linkLabel?: string }) {
  return (
    <div className="relative overflow-hidden py-24 px-6 text-center rounded-3xl mt-24 mb-16 max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-[#09090a]/80 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.15)_0%,transparent_70%)] z-10 mix-blend-screen" />
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="relative z-20 max-w-2xl mx-auto">
        <h2 className="font-display font-light text-4xl md:text-5xl text-[#f3ede0] leading-tight mb-4">{headline}</h2>
        <p className="text-[#f3ede0]/70 mb-10 font-light">{sub}</p>
        
        {phone ? (
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="tel:5128206505" className="text-3xl text-[#c9a96e] font-display font-medium hover:text-[#e8c98a] transition-colors whitespace-nowrap">(512) 820-6505</a>
            <span className="hidden sm:inline text-[#7a756e]">or</span>
            <Link to={link} className="btn-gold rounded-full">{linkLabel}</Link>
          </div>
        ) : (
          <Link to={link} className="btn-gold rounded-full text-sm">{linkLabel}</Link>
        )}
      </div>
    </div>
  )
}
