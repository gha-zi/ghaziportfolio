import React from 'react';
import { Github, Facebook, Instagram, Linkedin, Mail, Phone, Terminal } from 'lucide-react';

interface FooterProps {
  lang: 'ar' | 'en';
}

export function Footer({ lang }: FooterProps) {
  const content = {
    ar: {
      title: "GHAZI.IT",
      subtitle: "نسعى للحرية المالية والنفسية والحياتية من خلال التقنية والابتكار.",
      rights: "جميع الحقوق محفوظة © 2026 غازي محمد",
      socialTitle: "تواصل معي عبر منصاتي الرسمية"
    },
    en: {
      title: "GHAZI.IT",
      subtitle: "Pursuing financial, mental, and lifestyle freedom through technology and innovation.",
      rights: "All rights reserved © 2026 Ghazi Mohammed",
      socialTitle: "Connect with my official profiles"
    }
  };

  const t = content[lang];

  return (
    <footer id="footer" className="bg-gray-950 border-t border-gray-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* الشعار والنبذة */}
          <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-right">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-wider">{t.title}</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">{t.subtitle}</p>
          </div>

          {/* وسائل التواصل الحقيقية */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <span className="text-sm font-medium text-gray-300">{t.socialTitle}</span>
            <div className="flex items-center flex-wrap justify-center gap-3">
              
              {/* GitHub */}
              <a 
                href="https://github.com/sssssopoc1234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/Gha_zi24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Email */}
              <a 
                href="mailto:sssssopoc1234@gmail.com" 
                className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Phone / WhatsApp */}
              <a 
                href="tel:0993370618" 
                className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
