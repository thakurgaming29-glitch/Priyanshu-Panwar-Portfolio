import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  ArrowRight,
  Github,
  Linkedin,
  Instagram
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Prepare mailto link with form details so user can send immediately
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open default mail client with pre-filled content
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-neutral-950 border-t border-neutral-900">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl sm:leading-tight font-extrabold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400">
            Have a website project in mind or looking for a responsive developer? Reach out directly via WhatsApp or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels & Large WhatsApp Button */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Large WhatsApp Card */}
            <div
              id="whatsapp-cta-card"
              className="rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-7 relative overflow-hidden shadow-lg group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">WhatsApp Chat</h3>
                    <p className="text-xs text-neutral-400">Fastest direct messaging</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Online
                </span>
              </div>

              <p className="text-sm text-neutral-300 mb-6">
                Direct WhatsApp line:{' '}
                <span className="font-mono text-emerald-300 font-semibold">{personalInfo.whatsapp}</span>
              </p>

              {/* Large WhatsApp Action Button */}
              <a
                id="large-whatsapp-button"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-neutral-950" />
                <span>Message on WhatsApp</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
              </a>
            </div>

            {/* Email Contact Card */}
            <div
              id="email-contact-card"
              className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-7 shadow-sm hover:border-neutral-700 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email Address</h3>
                  <p className="text-xs text-neutral-400">For detailed inquiries & briefs</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 bg-neutral-950/80 rounded-xl border border-neutral-850 mb-4">
                <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  id="copy-email-button"
                  onClick={copyEmail}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors shrink-0 text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>

              <a
                id="direct-email-button"
                href={`mailto:${personalInfo.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm bg-neutral-800 hover:bg-neutral-750 text-white border border-neutral-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Send Email Directly</span>
              </a>
            </div>

            {/* Social Channels Widget */}
            <div id="social-links-box" className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Social Profiles & Networks
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  id="social-whatsapp"
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2.5 rounded-xl bg-neutral-800/80 text-emerald-400 hover:bg-emerald-500 hover:text-neutral-950 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  id="social-email"
                  href={socialLinks.email}
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-neutral-800/80 text-sky-400 hover:bg-sky-500 hover:text-neutral-950 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  id="social-github"
                  href={socialLinks.github}
                  aria-label="GitHub (placeholder)"
                  className="p-2.5 rounded-xl bg-neutral-800/80 text-neutral-300 hover:bg-white hover:text-neutral-950 transition-colors"
                  title="GitHub profile (configured in portfolioData.ts)"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="social-linkedin"
                  href={socialLinks.linkedin}
                  aria-label="LinkedIn (placeholder)"
                  className="p-2.5 rounded-xl bg-neutral-800/80 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                  title="LinkedIn profile (configured in portfolioData.ts)"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="social-instagram"
                  href={socialLinks.instagram}
                  aria-label="Instagram (placeholder)"
                  className="p-2.5 rounded-xl bg-neutral-800/80 text-pink-400 hover:bg-pink-500 hover:text-white transition-colors"
                  title="Instagram profile (configured in portfolioData.ts)"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-card"
              className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 backdrop-blur-sm relative"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-neutral-400 mb-6">
                Fill in the details below to initiate a conversation regarding your website project.
              </p>

              {formSubmitted ? (
                <div
                  id="form-submitted-alert"
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Prepared</h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
                    Your email application was triggered with your message. You can also message Thakur Priyanshu Panwar instantly via WhatsApp for faster communication.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-800 text-neutral-200 hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Your Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Project Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your website goals, requirements, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="form-submit-button"
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-400 text-center pt-1">
                    Structured for direct email triggering or future backend/email API integration.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
