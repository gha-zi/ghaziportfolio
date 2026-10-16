import React from 'react';
import { Globe, Moon, Sun, Terminal } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: 'ar' | 'en';
  setLang: (val: 'ar' | 'en') => void;
}

export function Navbar({ darkMode, setDarkMode, lang, setLang }: NavbarProps) {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      darkMode ? 'bg-gray-900/80 border-gray-800 text-white' : 'bg-white/80 border-gray-200 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* الشعار والهوية */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-wider">GHAZI.IT</span>
        </div>

        {/* أزرار التحكم والتبديل */}
        <div className="flex items-center space-x-3 space-x-reverse">
          {/* زر تبديل اللغة */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className={`flex items-center space-x-1 space-x-reverse px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* زر تبديل المظهر الداكن/الفاتح */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
