import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Package, CheckCircle2 } from 'lucide-react';

interface SamplePackModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'NL' | 'EN';
}

export default function SamplePackModal({ isOpen, onClose, language }: SamplePackModalProps) {
  const [submitted, setSubmitted] = useState(false);
  
  const text = {
    NL: {
      title: "Vraag uw Sample Pack aan",
      desc: "Geef ons wat meer informatie over uw project, zodat wij de juiste materialen en premiums voor u kunnen selecteren.",
      company: "Bedrijfsnaam",
      name: "Contactpersoon",
      email: "E-mailadres",
      phone: "Telefoonnummer",
      interests: "Waar bent u naar op zoek?",
      interests_placeholder: "Bv. textiel, tech gadgets, duurzame relatiegeschenken...",
      volume: "Verwacht volume / Aantal stuks",
      submit: "Sample Pack Aanvragen",
      success_title: "Aanvraag Ontvangen!",
      success_desc: "We hebben uw aanvraag in goede orde ontvangen. Een van onze account managers neemt binnen 24 uur contact met u op om de details af te stemmen.",
      close: "Sluiten",
    },
    EN: {
      title: "Request your Sample Pack",
      desc: "Provide us with some details about your project so we can select the right materials and premiums for you.",
      company: "Company Name",
      name: "Contact Person",
      email: "Email Address",
      phone: "Phone Number",
      interests: "What are you looking for?",
      interests_placeholder: "E.g., textiles, tech gadgets, sustainable corporate gifts...",
      volume: "Expected volume / Quantity",
      submit: "Request Sample Pack",
      success_title: "Request Received!",
      success_desc: "We have successfully received your request. One of our account managers will contact you within 24 hours to align on the details.",
      close: "Close",
    }
  };

  const t = text[language];

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real application, you'd integrate your API here
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-indigo-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Package className="w-5 h-5" />
                <h3 className="font-bold">{t.title}</h3>
              </div>
              <button 
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.success_title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">
                    {t.success_desc}
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors w-full"
                  >
                    {t.close}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-slate-600 mb-6 font-medium">
                    {t.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.company} *</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all font-medium" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.name} *</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all font-medium" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.email} *</label>
                      <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all font-medium" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.phone}</label>
                      <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.volume}</label>
                    <input type="text" placeholder="500 - 1000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all font-medium" />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.interests} *</label>
                    <textarea required placeholder={t.interests_placeholder} rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all font-medium resize-none"></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 mt-4 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    {t.submit}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
