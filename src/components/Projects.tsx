import React from 'react';
import { ExternalLink, FolderGit2, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative bg-neutral-950/70 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400">
            A selection of modern web projects showcasing responsive layouts, clean code structure, and intuitive interfaces.
          </p>
        </div>

        {/* Dynamic Projects Rendering or Empty State */}
        {projects && projects.length > 0 ? (
          <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col rounded-2xl bg-neutral-900/60 border border-neutral-800/80 overflow-hidden hover:border-neutral-700/90 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1"
              >
                {/* Project Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                  
                  {project.featured && (
                    <span className="absolute top-3 right-3 text-[11px] font-semibold text-emerald-300 bg-neutral-900/90 border border-emerald-500/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-neutral-800/70 border border-neutral-750 text-xs font-medium text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Live Demo & GitHub */}
                  <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3">
                    <a
                      id={`project-${project.id}-live-demo`}
                      href={project.liveUrl}
                      target={project.liveUrl !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      id={`project-${project.id}-github`}
                      href={project.githubUrl}
                      target={project.githubUrl !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-750 text-neutral-200 hover:text-white border border-neutral-700 transition-colors"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-neutral-400" />
                      <span>GitHub</span>
                    </a>
                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State as requested: "Projects coming soon" in a professional way */
          <div
            id="projects-empty-state"
            className="rounded-2xl bg-neutral-900/40 border border-dashed border-neutral-800 p-12 text-center max-w-xl mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl bg-neutral-850 border border-neutral-750 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Projects coming soon</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              New website development projects are currently being developed and will be showcased here shortly.
            </p>
          </div>
        )}

        {/* Developer Customization Hint Banner */}
        <div className="mt-14 rounded-xl bg-neutral-900/40 border border-neutral-850 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span>
              All project cards are dynamically driven from <code className="text-emerald-400 font-mono">portfolioData.ts</code>. Add new items anytime to expand this showcase.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold whitespace-nowrap"
          >
            <span>Propose a project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
