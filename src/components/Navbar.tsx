import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2, Camera } from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { iconPhoto, openModal } = usePhotos();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navigationLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            id="navbar-brand"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-neutral-100 hover:text-white transition-colors"
          >
            <div className="relative">
              <img
                src={iconPhoto}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl object-cover border border-neutral-750 group-hover:border-emerald-500/60 shadow-sm transition-all"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-neutral-950"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                {personalInfo.profession}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-neutral-900/60 border border-neutral-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-neutral-800 shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button & Photo Manager Trigger */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="navbar-photo-btn"
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-emerald-300 border border-neutral-800 hover:border-emerald-500/40 transition-colors"
              title="Select or change your uploaded WhatsApp photos"
            >
              <Camera className="w-3.5 h-3.5 text-emerald-400" />
              <span>Photos</span>
            </button>

            <a
              id="navbar-cta-button"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all duration-200"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-container"
          className="md:hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn shadow-2xl"
        >
          <div className="space-y-1">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-emerald-400 border border-neutral-800'
                      : 'text-neutral-300 hover:bg-neutral-900/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 space-y-2">
            <button
              id="mobile-menu-photos-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-emerald-300 transition-colors"
            >
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>Set Uploaded Photos</span>
            </button>

            <a
              id="mobile-menu-cta-button"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-500/10 transition-colors"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
