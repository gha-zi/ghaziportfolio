import React from 'react';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  lang: 'ar' | 'en';
}

export function Hero({ lang }: HeroProps) {
  const content = {
    ar: {
      badge: "مهندس تقنية معلومات وشغوف بالذكاء الاصطناعي والتداول",
      title: "أهلاً بك، أنا غازي",
      subtitle: "أسعى للوصول إلى الحرية المالية والنفسية والحياتية من خلال التقنية والابتكار.",
      ctaPrimary: "استكشف مشاريعي",
      ctaSecondary: "تواصل معي",
    },
    en: {
      badge: "IT Engineering Student & AI/Trading Enthusiast",
      title: "Welcome, I'm Ghazi",
      subtitle: "Building the path toward financial, mental, and lifestyle freedom through technology and innovation.",
      ctaPrimary: "Explore Projects",
      ctaSecondary: "Get in Touch",
    }
  };

  const t = content[lang];

  return (
    <div className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          
          {/* شارة التعريف */}
          <div className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>{t.badge}</span>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            {t.title} <span className="text-indigo-500">GHAZI.IT</span>
          </h1>

          {/* الوصف والنبذة */}
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            {t.subtitle}
          </p>

          {/* أزرار التفاعل */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-600/25"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#footer"
              className="flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800/50 font-medium transition-all"
            >
              <span>{t.ctaSecondary}</span>
              <Code2 className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
