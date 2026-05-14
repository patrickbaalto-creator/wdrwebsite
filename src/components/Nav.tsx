import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('wdr-dark');
    return saved ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const toggle = () => setDark(d => {
    const next = !d;
    localStorage.setItem('wdr-dark', String(next));
    document.documentElement.classList.toggle('dark', next);
    return next;
  });
  // apply on mount
  useState(() => { document.documentElement.classList.toggle('dark', dark); });
  return { dark, toggle };
}


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
    { name: 'Pflugerville', href: '/service-area/pflugerville' },
    { name: 'Dripping Springs', href: '/service-area/dripping-springs' },
  ]},
  { name: 'Residential', href: '/residential' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex bg-[#1e3a5f] text-white text-xs px-6 md:px-12 py-2 items-center justify-between">
        <span>Austin's Premier Roofing & Water Damage Contractor — Serving Since 2012</span>
        <div className="flex items-center gap-6">
          <span>9711 Beck Cir, Austin, TX 78758</span>
          <a href="tel:5128206505" className="font-bold hover:text-blue-300 flex items-center gap-1"><Phone className="w-3 h-3" /> (512) 820-6505</a>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 h-[72px] transition-all duration-300 px-6 md:px-12 flex items-center justify-between bg-white
        ${scrolled ? 'shadow-md border-b border-gray-200' : 'border-b border-gray-100'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-[#1e3a5f] text-white font-bold text-lg px-3 py-1.5 rounded font-display tracking-wide">WDR</div>
          <div className="hidden sm:block">
            <div className="text-[#1e3a5f] font-bold text-sm leading-tight">Austin Roofing</div>
            <div className="text-[#64748b] text-xs leading-tight">& Water Damage</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          {navLinks.map((item, idx) => (
            <div key={idx} className="relative group h-full flex items-center">
              {item.isDropdown ? (
                <>
                  <div className={`h-full flex items-center gap-1 px-3 text-[0.78rem] font-semibold cursor-pointer transition-colors ${location.pathname.startsWith('/' + item.name.toLowerCase().replace(' ', '-')) ? 'text-[#1d4ed8]' : 'text-[#334155] hover:text-[#1d4ed8]'}`}>
                    {item.name} <ChevronDown className="w-3 h-3 opacity-50" />
                  </div>
                  <div className="absolute top-full left-0 pt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      {item.links?.map((link, lidx) => (
                        <Link key={lidx} to={link.href} className={`block text-[0.8rem] px-4 py-2.5 transition-colors ${location.pathname === link.href ? 'text-[#1d4ed8] bg-blue-50' : 'text-[#475569] hover:text-[#1d4ed8] hover:bg-blue-50'}`}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={item.href!} className={`h-full flex items-center px-3 text-[0.78rem] font-semibold transition-colors ${location.pathname === item.href ? 'text-[#1d4ed8]' : 'text-[#334155] hover:text-[#1d4ed8]'}`}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle dark mode" className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-[#1e3a5f] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="tel:5128206505" className="btn-gold rounded-md py-2.5 px-5 flex items-center gap-2">
            <Phone className="w-4 h-4" /> (512) 820-6505
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-[#1e3a5f]">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-[72px] overflow-y-auto pb-24"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              <div className="flex gap-3">
                <a href="tel:5128206505" className="btn-gold text-center rounded-lg py-4 text-base flex items-center justify-center gap-2 flex-1">
                  <Phone className="w-5 h-5" /> Call (512) 820-6505
                </a>
                <button onClick={toggle} aria-label="Toggle dark mode" className="w-14 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-[#1e3a5f] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
              {navLinks.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  {item.isDropdown ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-[0.75rem] uppercase tracking-wider text-[#1d4ed8] font-bold">{item.name}</span>
                      <div className="pl-3 flex flex-col gap-2">
                        {item.links?.map((link, lidx) => (
                          <Link key={lidx} to={link.href} className="text-[#475569] text-base">{link.name}</Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={item.href!} className="text-[#1e3a5f] text-lg font-semibold">{item.name}</Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
