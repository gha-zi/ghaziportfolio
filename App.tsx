import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-950'} min-h-screen transition-colors duration-300 font-sans`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* 1. طبقة الهيدر والتنقل */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />
      
      {/* 2. طبقة الواجهة الترحيبية */}
      <Hero lang={lang} />
      
      {/* 3. طبقة عرض المشاريع (مثل متجر غازي) */}
      <Projects lang={lang} />
      
      {/* 4. طبقة المهارات التقنية والذكاء الاصطناعي */}
      <Skills lang={lang} />
      
      {/* 5. طبقة أسفل الصفحة والتواصل */}
      <Footer lang={lang} />
    </div>
  );
}

export default App;

