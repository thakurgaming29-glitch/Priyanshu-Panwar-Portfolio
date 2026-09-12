import React, { useState } from 'react';
import { 
  FileCode2, 
  Palette, 
  Code2, 
  Layers, 
  Smartphone, 
  Sparkles, 
  GitBranch, 
  FolderGit2, 
  Globe, 
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { skills } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  FileCode2: <FileCode2 className="w-5 h-5 text-orange-400" />,
  Palette: <Palette className="w-5 h-5 text-sky-400" />,
  Code2: <Code2 className="w-5 h-5 text-yellow-400" />,
  Layers: <Layers className="w-5 h-5 text-cyan-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-rose-400" />,
  FolderGit2: <FolderGit2 className="w-5 h-5 text-indigo-400" />,
  Globe: <Globe className="w-5 h-5 text-teal-400" />
};

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'styling' | 'tools'>('all');

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-20 relative bg-neutral-950/60 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-emerald-400 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400">
            Core technical foundation used to construct modern, fast, and responsive web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            type="button"
            id="skills-filter-all"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'all'
                ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
            }`}
          >
            All Skills ({skills.length})
          </button>
          <button
            type="button"
            id="skills-filter-frontend"
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'frontend'
                ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
            }`}
          >
            Core Frontend
          </button>
          <button
            type="button"
            id="skills-filter-styling"
            onClick={() => setFilter('styling')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'styling'
                ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
            }`}
          >
            Design & Styling
          </button>
          <button
            type="button"
            id="skills-filter-tools"
            onClick={() => setFilter('tools')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              filter === 'tools'
                ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
            }`}
          >
            Tools & Deployment
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div id="skills-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const icon = iconMap[skill.iconName] || <Code2 className="w-5 h-5 text-emerald-400" />;

            return (
              <div
                key={skill.name}
                id={`skill-card-${index}`}
                className="group relative rounded-2xl bg-neutral-900/60 border border-neutral-800/80 p-5 hover:border-neutral-700/90 hover:bg-neutral-900 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-750 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{skill.level}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Subtle indicator bar */}
                <div className="mt-4 w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-full rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
