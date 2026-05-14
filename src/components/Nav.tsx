import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const navLinks = [
  { name: 'Services', isDropdown: true, links: [
    { name: 'Roof Inspection', href: '/services/roof-inspection' },
    { name: 'Roof Estimate', href: '/services/roof-estimate' },
    { name: 'Roof Installation', href: '/services/roof-installation' },
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Reroof', href: '/services/reroof' },
    { name: 'Hail Damage Roofing', href: '/services/hail-damage-roofing' },
    { name: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
  ]},
  { name: 'Roof Types', isDropdown: true, links: [
    { name: 'Metal Roofing', href: '/roof-types/metal-roofing' },
    { name: 'Asphalt Shingle', href: '/roof-types/asphalt-shingle' },
    { name: 'Tile Roof', href: '/roof-types/tile-roof' },
  ]},
  { name: 'Service Area', isDropdown: true, links: [
    { name: 'Austin', href: '/service-area/austin' },
    { name: 'Round Rock', href: '/service-area/round-rock' },
    { name: 'Cedar Park', href: '/service-area/cedar-park' },
    { name: 'Lakeway', href: '/service-area/lakeway' },
    { name: 'Georgetown', href: '/service-area/georgetown' },
    { name: 'Leander', href: '/service-area/leander' },
    { name: 'Buda', href: '/service-area/buda' },
    { name: 'Bee Cave', href: '/service-area/bee-cave' },
  ]},
  { name: 'Residential', href: '/residential' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[76px] transition-all duration-300 px-6 md:px-12 flex items-center justify-between glass-dark
        ${scrolled ? 'border-b border-white/5 shadow-2xl' : 'border-b border-transparent'}`}>
        <Link to="/" className="font-display text-2xl tracking-widest text-[#f3ede0]">
          WDR<span className="text-[#c9a96e]">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((item, idx) => (
            <div key={idx} className="relative group h-full flex items-center">
              {item.isDropdown ? (
                <>
                  <div className={`h-full flex items-center gap-1 text-[0.78rem] uppercase tracking-wider font-semibold cursor-pointer transition-colors ${location.pathname.startsWith('/' + item.name.toLowerCase().replace(' ', '-')) ? 'text-[#c9a96e]' : 'text-[#f3ede0] hover:text-[#c9a96e]'}`}>
                    {item.name} <ChevronDown className="w-3 h-3 opacity-50" />
                  </div>
                  <div className="absolute top-full left-0 pt-2 lg:pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-150 group-hover:delay-0 z-50">
                    <div className="glass-dark rounded-2xl p-2 flex flex-col gap-1 shadow-2xl border border-white/10">
                      {item.links?.map((link, lidx) => (
                        <Link key={lidx} to={link.href} className={`text-[0.74rem] uppercase tracking-wider px-4 py-3 rounded-xl transition-colors ${location.pathname === link.href ? 'text-[#c9a96e] bg-[#c9a96e]/10' : 'text-[#f3ede0]/70 hover:text-[#c9a96e] hover:bg-white/5'}`}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={item.href!} className={`h-full flex items-center text-[0.78rem] uppercase tracking-wider font-semibold transition-colors ${location.pathname === item.href ? 'text-[#c9a96e]' : 'text-[#f3ede0] hover:text-[#c9a96e]'}`}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:5128206505" className="text-[0.8rem] text-[#c9a96e] hover:text-[#e8c98a] flex items-center gap-2 font-medium tracking-wide">
            <Phone className="w-3 h-3" /> (512) 820-6505
          </a>
          <Link to="/contact" className="btn-gold rounded-sm px-6 py-3">Free Estimate</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#f3ede0]">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#09090a] pt-[76px] overflow-y-auto pb-24"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-6">
                  {item.isDropdown ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-[0.8rem] uppercase tracking-wider text-[#c9a96e] font-semibold">{item.name}</span>
                      <div className="pl-4 flex flex-col gap-4">
                        {item.links?.map((link, lidx) => (
                          <Link key={lidx} to={link.href} className="text-[#f3ede0] text-lg font-light">{link.name}</Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={item.href!} className="text-[#f3ede0] text-xl font-light">{item.name}</Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="tel:5128206505" className="btn-ghost text-center rounded-lg py-4">Call (512) 820-6505</a>
                <Link to="/contact" className="btn-gold text-center rounded-lg py-4">Get a Free Estimate</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
