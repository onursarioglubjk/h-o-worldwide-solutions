import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cookie } from 'lucide-react';

interface CookieBannerProps {
  language: 'NL' | 'EN';
  translations: Record<'NL' | 'EN', any>;
}

export default function CookieBanner({ language, translations }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
    // Here you would initialize analytics (e.g., Google Analytics / Meta Pixel)
  };

  const handleRejectOptional = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
    // Make sure analytics are disabled
  };

  const t = translations[language].cookie;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-[110] p-4 sm:p-6 md:p-8 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 pointer-events-auto border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.title}</h3>
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
                {t.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
              <button
                onClick={handleRejectOptional}
                className="px-6 py-3 border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors rounded-lg font-bold text-sm shadow-sm"
              >
                {t.reject}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors rounded-lg font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Cookie className="w-4 h-4" />
                {t.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
