import React from 'react';
import { 
  Code2, 
  ArrowUp, 
  MessageSquare, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  Heart
} from 'lucide-react';
import { personalInfo, navigationLinks, socialLinks } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

export const Footer: React.FC = () => {
  const { iconPhoto, openModal } = usePhotos();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-neutral-850 pt-16 pb-12 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-850">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => openModal('icon')}
                className="cursor-pointer group/footer-avatar focus:outline-none"
                title="Click to change icon photo"
              >
                <img
                  src={iconPhoto}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-lg object-cover border border-neutral-750 group-hover/footer-avatar:border-emerald-500/60 transition-colors"
                />
              </button>
              <span className="font-bold text-white text-lg tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm">
              {personalInfo.profession} • {personalInfo.qualification}
            </p>
            <p className="text-xs text-neutral-400 max-w-md">
              Creating modern, responsive and user-friendly websites with clean design and smooth user experiences.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              id="footer-social-whatsapp"
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-neutral-950 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              id="footer-social-email"
              href={socialLinks.email}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-neutral-950 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              id="footer-social-github"
              href={socialLinks.github}
              aria-label="GitHub (placeholder)"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-neutral-950 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-social-linkedin"
              href={socialLinks.linkedin}
              aria-label="LinkedIn (placeholder)"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-social-instagram"
              href={socialLinks.instagram}
              aria-label="Instagram (placeholder)"
              className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Navigation & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Navigation Links */}
          <nav id="footer-nav" aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                id={`footer-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Copyright text */}
          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <span id="footer-copyright-text">
              © 2026 Thakur Priyanshu Panwar. All rights reserved.
            </span>
            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
