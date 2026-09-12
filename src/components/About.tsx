import React from 'react';
import { GraduationCap, Briefcase, UserCheck, CheckCircle, Code, Smartphone, Sparkles, Send, ShieldCheck, Mail, MessageCircle, Camera } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

export const About: React.FC = () => {
  const { professionPhoto, openModal } = usePhotos();
  return (
    <section id="about" className="py-20 relative bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-emerald-400 mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Professional Background</span>
          </div>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400">
            Professional background, technical foundation, and dedication to building responsive, modern websites.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Personal Profile Card with Photo */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              id="about-profile-card"
              className="h-full rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden group hover:border-neutral-700 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Profile Photo Header with Status */}
                <div className="flex items-center gap-4 sm:gap-5 mb-6">
                  <div
                    className="relative cursor-pointer group/photo"
                    onClick={() => openModal('profession')}
                    title="Click to select or upload your WhatsApp photo for Profession profile"
                  >
                    <img
                      id="developer-profile-image"
                      src={professionPhoto}
                      alt={personalInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-center border-2 border-emerald-500/40 shadow-xl shadow-black/40 ring-4 ring-neutral-900 group-hover/photo:border-emerald-400 transition-all duration-200"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover/photo:opacity-100 flex flex-col items-center justify-center transition-opacity text-white text-[10px] font-semibold gap-1">
                      <Camera className="w-5 h-5 text-emerald-400" />
                      <span>Change Photo</span>
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-emerald-400/30"></span>
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-semibold mb-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Developer</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-emerald-400 text-sm font-semibold flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {personalInfo.profession}
                    </p>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-3 pt-5 border-t border-neutral-800/90 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1.5 border-b border-neutral-850/60">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      <span>Qualification</span>
                    </span>
                    <span className="text-neutral-100 font-semibold text-right">{personalInfo.qualification}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1.5 border-b border-neutral-850/60">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Code className="w-4 h-4 text-sky-400" />
                      <span>Specialization</span>
                    </span>
                    <span className="text-neutral-100 font-semibold text-right">Modern Website Development</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1.5 border-b border-neutral-850/60">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp</span>
                    </span>
                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold text-right transition-colors"
                    >
                      {personalInfo.whatsapp}
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1.5">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-violet-400" />
                      <span>Email</span>
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-neutral-200 hover:text-white font-medium text-right transition-colors truncate max-w-[200px]"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Profile Card */}
              <div className="mt-8 pt-5 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="about-whatsapp-cta"
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  id="about-contact-anchor"
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-750 text-white border border-neutral-700 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div
              id="about-narrative-card"
              className="rounded-2xl bg-neutral-900/50 border border-neutral-800/90 p-6 sm:p-8 backdrop-blur-sm"
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Professional Summary & Philosophy</span>
              </h4>
              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">{personalInfo.name}</strong>, a qualified{' '}
                  <strong className="text-white font-semibold">{personalInfo.profession}</strong> with formal training in{' '}
                  <strong className="text-white font-semibold">{personalInfo.qualification}</strong>.
                </p>
                <p>
                  My development philosophy centers around three core principles: <em>clarity in code</em>, <em>elegance in visual presentation</em>, and <em>responsiveness across every viewport</em>. Having studied Computer Applications, I blend computational structure with modern design patterns to turn requirements into fast, intuitive, and reliable digital experiences.
                </p>
                <p>
                  Whether crafting a custom business landing page, an engaging corporate website, or an interactive web application, I emphasize clean HTML5/CSS3 semantics, modern JavaScript & React component architecture, and fluid layouts that feel completely native on phones, tablets, and desktops.
                </p>
                <p className="text-neutral-400 text-sm pt-1">
                  I believe in transparent communication, punctual project delivery, and collaborative problem-solving to help businesses and individuals establish an authoritative online presence.
                </p>
              </div>
            </div>

            {/* Core Development Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div id="pillar-clean-code" className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-750 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h5 className="font-semibold text-white text-sm">Clean Coding</h5>
                <p className="text-xs text-neutral-400 mt-1 leading-normal">
                  Semantic HTML5, modular CSS3, and organized JavaScript/React for maintainability.
                </p>
              </div>

              <div id="pillar-responsive" className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-750 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h5 className="font-semibold text-white text-sm">Mobile-First</h5>
                <p className="text-xs text-neutral-400 mt-1 leading-normal">
                  Adaptive layouts thoroughly tested for fast rendering on mobile, tablet, and desktop.
                </p>
              </div>

              <div id="pillar-ux" className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-750 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h5 className="font-semibold text-white text-sm">User Experience</h5>
                <p className="text-xs text-neutral-400 mt-1 leading-normal">
                  Intuitive interaction, crisp typography hierarchy, and effortless navigation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
