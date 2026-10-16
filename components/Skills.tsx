import React from 'react';
import { Cpu, TrendingUp, Network, Brain, ShieldAlert, Compass } from 'lucide-react';

interface SkillsProps {
  lang: 'ar' | 'en';
}

export function Skills({ lang }: SkillsProps) {
  const content = {
    ar: {
      sectionTitle: "تخصصاتي ومهاراتي الاستراتيجية",
      sectionSubtitle: "مزيج فريد يجمع بين هندسة التقنية، أسواق المال، وعمق الفهم البشري.",
      skillsList: [
        {
          category: "هندسة الشبكات وتحليل النظم",
          description: "تصميم وبناء الأطقم والأنظمة التقنية، وإدارة البنية التحتية للشبكات باحترافية.",
          icon: Network,
          items: ["Network Engineering", "System Analysis & Design", "Cisco Packet Tracer", "Infrastructure Setup"]
        },
        {
          category: "أسواق المال والتداول الفني",
          description: "تطبيق التحليل الفني المتقدم وقراءة حركة الأسواق بناءً على سلوك السيولة وبنية الأسعار.",
          icon: TrendingUp,
          items: ["Financial Technical Analysis", "TradingView & MT5", "Smart Money Concepts", "Risk & Money Management"]
        },
        {
          category: "الذكاء الاصطناعي وتطوير النظم",
          description: "استكشاف وتوظيف خوارزميات الذكاء الاصطناعي لبناء حلول أنظمة ذكية ومستقبلية.",
          icon: Cpu,
          items: ["AI Integration", "System Architecture", "Automation & Logic", "Problem Formulation"]
        },
        {
          category: "التفكير الاستراتيجي وعلم النفس البشري",
          description: "مهارات متقدمة في التخطيط الاستراتيجي، بناء المنظومات، وفهم دوافع وتفكير السلوك البشري.",
          icon: Brain,
          items: ["Strategic Thinking & Planning", "Human Psychology & Behavior", "System Building", "Decision Making"]
        }
      ]
    },
    en: {
      sectionTitle: "Specializations & Strategic Skills",
      sectionSubtitle: "A unique blend combining technical engineering, financial markets, and deep human psychology.",
      skillsList: [
        {
          category: "Network Engineering & System Analysis",
          description: "Designing and building technical frameworks and managing network infrastructures professionally.",
          icon: Network,
          items: ["Network Engineering", "System Analysis & Design", "Cisco Packet Tracer", "Infrastructure Setup"]
        },
        {
          category: "Financial Markets & Trading",
          description: "Applying advanced technical analysis and reading market movements based on liquidity and price action.",
          icon: TrendingUp,
          items: ["Financial Technical Analysis", "TradingView & MT5", "Smart Money Concepts", "Risk & Money Management"]
        },
        {
          category: "Artificial Intelligence & Systems",
          description: "Exploring and deploying AI algorithms to build smart and futuristic system solutions.",
          icon: Cpu,
          items: ["AI Integration", "System Architecture", "Automation & Logic", "Problem Formulation"]
        },
        {
          category: "Strategic Thinking & Human Psychology",
          description: "Advanced skills in strategic planning, system building, and understanding human behavioral drivers.",
          icon: Brain,
          items: ["Strategic Thinking & Planning", "Human Psychology & Behavior", "System Building", "Decision Making"]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-gray-900/30 border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.sectionTitle}</h2>
          <p className="text-gray-400 text-lg">{t.sectionSubtitle}</p>
        </div>

        {/* شبكة المهارات والتخصصات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.skillsList.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-indigo-500/50 transition-all duration-300 space-y-6"
              >
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{skillGroup.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/50 text-gray-200 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
          
