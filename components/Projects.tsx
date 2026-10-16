import React from 'react';
import { ExternalLink, Github, Bot, TrendingUp, Code, Cpu } from 'lucide-react';

interface ProjectsProps {
  lang: 'ar' | 'en';
}

export function Projects({ lang }: ProjectsProps) {
  const content = {
    ar: {
      sectionTitle: "مشاريعي التقنية",
      sectionSubtitle: "نماذج من أعمالي في تطوير الويب، الذكاء الاصطناعي، وتقنيات التداول.",
      viewCode: "الكود المصدرى",
      liveDemo: "معاينة حية",
      projectsList: [
        {
          title: "منصة التداول الذكية والتحليل",
          description: "نظام تحليل وتتبع أسواق المال باستخدام خوارزميات الذكاء الاصطناعي وإدارة المخاطر.",
          tags: ["React", "TypeScript", "AI", "Tailwind CSS"],
          icon: TrendingUp,
          link: "#"
        },
        {
          title: "مساعد الذكاء الاصطناعي التفاعلي",
          description: "شات بوت ذكي مبني بتقنيات الحديثة لتقديم استشارات وتحليلات برمجية فورية.",
          tags: ["React", "Machine Learning", "API Integration"],
          icon: Bot,
          link: "#"
        },
        {
          title: "موقع GHAZI.IT الشخصي",
          description: "الموقع المهني الخاص بي لعرض المهارات، والمشاريع، والأهداف التقنية.",
          tags: ["React", "Tailwind CSS", "Modular Architecture"],
          icon: Code,
          link: "#"
        }
      ]
    },
    en: {
      sectionTitle: "Featured Projects",
      sectionSubtitle: "A showcase of my work in web development, AI engineering, and trading tech.",
      viewCode: "Source Code",
      liveDemo: "Live Demo",
      projectsList: [
        {
          title: "Smart Trading & Analytics Platform",
          description: "Financial market analysis and tracking system powered by AI algorithms and risk management.",
          tags: ["React", "TypeScript", "AI", "Tailwind CSS"],
          icon: TrendingUp,
          link: "#"
        },
        {
          title: "Interactive AI Assistant Bot",
          description: "Intelligent chatbot built with modern tech to deliver instant coding consultations and analytics.",
          tags: ["React", "Machine Learning", "API Integration"],
          icon: Bot,
          link: "#"
        },
        {
          title: "GHAZI.IT Portfolio",
          description: "My personal professional website showcasing skills, projects, and tech goals.",
          tags: ["React", "Tailwind CSS", "Modular Architecture"],
          icon: Code,
          link: "#"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.sectionTitle}</h2>
          <p className="text-gray-400 text-lg">{t.sectionSubtitle}</p>
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projectsList.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-800/80 space-y-4">
                  {/* التقنيات المستخدمة */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2.5 py-1 rounded-md bg-gray-800 text-gray-300 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* الروابط */}
                  <div className="flex items-center justify-between pt-2">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center space-x-1.5 space-x-reverse text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t.viewCode}</span>
                    </a>
                    <a 
                      href={project.link} 
                      className="inline-flex items-center space-x-1.5 space-x-reverse text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <span>{t.liveDemo}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;

