import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-dark border-t border-[#c9a96e]/15 p-3 flex gap-3">
      <a href="tel:5128206505" className="flex-1 btn-ghost text-center py-3 flex items-center justify-center gap-2">
        <Phone className="w-4 h-4" /> (512) 820-6505
      </a>
      <Link to="/contact" className="flex-1 btn-gold text-center py-3 flex items-center justify-center">
        Free Estimate
      </Link>
    </div>
  )
}
