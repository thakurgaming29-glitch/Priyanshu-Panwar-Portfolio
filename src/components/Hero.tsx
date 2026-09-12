import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Terminal, Sparkles, CheckCircle2, Copy, Check, Camera } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { usePhotos } from '../context/PhotoContext';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer' | 'stack' | 'css'>('developer');
  const [copied, setCopied] = useState(false);
  const { iconPhoto, openModal } = usePhotos();

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyCode = () => {
    const codeSnippet = `const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.profession}",
  qualification: "${personalInfo.qualification}",
  skills: ["HTML5", "CSS3", "JavaScript", "React"],
  responsive: true
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Qualification & Status Badge with Mini Avatar */}
            <div
              id="hero-badge"
              onClick={() => openModal('icon')}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 font-medium mb-6 shadow-sm backdrop-blur-md cursor-pointer hover:border-emerald-500/50 hover:bg-neutral-850 transition-all group"
              title="Click to select or upload your original photo for Icon & Favicon"
            >
              <img
                src={iconPhoto}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-6 h-6 rounded-full object-cover border border-emerald-500/60 shadow-sm group-hover:scale-110 transition-transform"
              />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">{personalInfo.qualification}</span>
              <span className="text-neutral-600">•</span>
              <span>{personalInfo.status}</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded-full border border-neutral-700/60 ml-1 group-hover:text-emerald-300 group-hover:border-emerald-500/40">
                <Camera className="w-3 h-3" />
                <span>Photos</span>
              </span>
            </div>

            {/* Greeting */}
            <p className="text-base sm:text-lg text-emerald-400/90 font-medium tracking-wide mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Hi, I'm {personalInfo.name}
            </p>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              {personalInfo.profession}
            </h1>

            {/* Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-neutral-350 leading-relaxed max-w-2xl mb-9 text-neutral-300 font-normal"
            >
              I create modern, responsive and user-friendly websites with clean design and smooth user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-view-projects-button"
                type="button"
                onClick={() => handleScroll('#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-me-button"
                type="button"
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 hover:border-neutral-700 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </button>

              <button
                id="hero-set-photos-button"
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm bg-neutral-900/60 hover:bg-neutral-850 text-neutral-300 hover:text-emerald-400 border border-neutral-800 hover:border-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
                title="Select your uploaded WhatsApp photos with no changes to the face"
              >
                <Camera className="w-4 h-4 text-emerald-400" />
                <span>Set Uploaded Photos</span>
              </button>
            </div>

            {/* Quick Metrics / Highlights */}
            <div className="mt-12 pt-8 border-t border-neutral-850 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">BCA</div>
                <div className="text-xs text-neutral-400 mt-0.5">Computer Applications</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">100%</div>
                <div className="text-xs text-neutral-400 mt-0.5">Responsive Design</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Modern</div>
                <div className="text-xs text-neutral-400 mt-0.5">Frontend Stack</div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Developer-Themed Visual (Code Editor Graphic) */}
          <div className="lg:col-span-5 w-full">
            <div
              id="hero-code-editor-visual"
              className="relative rounded-2xl bg-neutral-900/95 border border-neutral-800 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl group hover:border-neutral-750 transition-all duration-300"
            >
              {/* Window Header / Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-950/80 border-b border-neutral-850">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                    developer-workspace
                  </span>
                </div>

                <button
                  id="copy-code-button"
                  type="button"
                  onClick={copyCode}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/80 transition-colors text-xs flex items-center gap-1"
                  title="Copy code snippet"
                  aria-label="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Editor Tabs */}
              <div className="flex items-center gap-1 px-3 pt-2 bg-neutral-950/40 border-b border-neutral-850 overflow-x-auto text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('developer')}
                  className={`px-3 py-1.5 rounded-t-lg border-t border-x transition-colors flex items-center gap-2 ${
                    activeTab === 'developer'
                      ? 'bg-neutral-900 border-neutral-800 text-emerald-400 font-medium'
                      : 'border-transparent text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Developer.tsx
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('stack')}
                  className={`px-3 py-1.5 rounded-t-lg border-t border-x transition-colors flex items-center gap-2 ${
                    activeTab === 'stack'
                      ? 'bg-neutral-900 border-neutral-800 text-sky-400 font-medium'
                      : 'border-transparent text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  TechStack.json
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('css')}
                  className={`px-3 py-1.5 rounded-t-lg border-t border-x transition-colors flex items-center gap-2 ${
                    activeTab === 'css'
                      ? 'bg-neutral-900 border-neutral-800 text-violet-400 font-medium'
                      : 'border-transparent text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                  Responsive.css
                </button>
              </div>

              {/* Code Content Area */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-neutral-900/60 min-h-[260px]">
                {activeTab === 'developer' && (
                  <div className="space-y-1">
                    <p className="text-neutral-500">// Personal Profile & Focus</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">name:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">role:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.profession}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">education:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.qualification}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">focus:</span>{' '}
                      <span className="text-emerald-300">"Modern & Responsive Websites"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">cleanCode:</span>{' '}
                      <span className="text-amber-400">true</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">openToWork:</span>{' '}
                      <span className="text-emerald-400">true</span>
                    </p>
                    <p>&#125;;</p>
                    <p className="pt-2 text-neutral-400 flex items-center gap-1.5">
                      <span className="text-purple-400">export default</span> developer;
                      <span className="inline-block w-1.5 h-4 bg-emerald-400 animate-pulse ml-1" />
                    </p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1 text-neutral-300">
                    <p className="text-neutral-500">// Core Web Technologies</p>
                    <p>&#123;</p>
                    <p className="pl-4">
                      <span className="text-sky-300">"frontend"</span>: [
                      <span className="text-emerald-300">"HTML5"</span>,{' '}
                      <span className="text-emerald-300">"CSS3"</span>,{' '}
                      <span className="text-emerald-300">"JavaScript"</span>,{' '}
                      <span className="text-emerald-300">"React"</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">"design"</span>: [
                      <span className="text-emerald-300">"Responsive Web Design"</span>,{' '}
                      <span className="text-emerald-300">"UI/UX"</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">"versionControl"</span>: [
                      <span className="text-emerald-300">"Git"</span>,{' '}
                      <span className="text-emerald-300">"GitHub"</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">"deployment"</span>: [
                      <span className="text-emerald-300">"Netlify"</span>,{' '}
                      <span className="text-emerald-300">"Vercel"</span>
                      ]
                    </p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === 'css' && (
                  <div className="space-y-1 text-neutral-300">
                    <p className="text-neutral-500">/* Mobile-First Layout Rules */</p>
                    <p>
                      <span className="text-amber-400">.portfolio-viewport</span> &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">display</span>: flex;
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">flex-direction</span>: column;
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">overflow-x</span>: hidden;
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">scroll-behavior</span>: smooth;
                    </p>
                    <p>&#125;</p>
                    <p className="pt-2">
                      <span className="text-purple-400">@media</span> (min-width: 768px) &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-amber-400">.experience-grid</span> &#123;{' '}
                      <span className="text-sky-300">grid-template-columns</span>: repeat(3, 1fr); &#125;
                    </p>
                    <p>&#125;</p>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-neutral-950 border-t border-neutral-850 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-neutral-300">Ready for Deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-emerald-400">TypeScript / React</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
