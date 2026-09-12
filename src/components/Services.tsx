import React from 'react';
import { 
  Code, 
  MonitorSmartphone, 
  Rocket, 
  Briefcase, 
  Building2, 
  Check, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-emerald-400" />,
  MonitorSmartphone: <MonitorSmartphone className="w-6 h-6 text-sky-400" />,
  Rocket: <Rocket className="w-6 h-6 text-amber-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-violet-400" />,
  Building2: <Building2 className="w-6 h-6 text-teal-400" />
};

export const Services: React.FC = () => {
  const handleContactClick = () => {
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-emerald-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>What I Offer</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400">
            Dedicated web development services crafted with clean code, responsive layouts, and user-friendly design.
          </p>
        </div>

        {/* Services Grid (5 cards arranged in a balanced grid) */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const icon = iconMap[service.iconName] || <Code className="w-6 h-6 text-emerald-400" />;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group rounded-2xl bg-neutral-900/50 border border-neutral-800/80 p-6 sm:p-7 hover:border-neutral-700 hover:bg-neutral-900/90 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-750 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {icon}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 pt-4 border-t border-neutral-800/70 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Discuss this project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
