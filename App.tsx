import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        lang={lang} 
        setLang={setLang} 
      />
      
      <main>
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;
