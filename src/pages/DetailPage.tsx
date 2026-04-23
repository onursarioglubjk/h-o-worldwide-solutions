import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { translations, Language } from '../translations';
import SEO from '../components/SEO';

export default function DetailPage({ language }: { language: Language }) {
  const { type, id } = useParams<{ type: string; id: string }>();
  const t = translations[language];

  let data = null;
  
  if (type === 'services') {
    const serviceKey = id as keyof typeof t.services;
    if (t.services[serviceKey] && typeof t.services[serviceKey] !== 'string') {
      const s = t.services[serviceKey] as any;
      if (s.title) {
        data = { title: s.title, desc: s.desc, longTitle: s.longTitle, longDesc: s.longDesc, label: t.nav.services };
      }
    }
  } else if (type === 'cases' && id) {
    const idx = parseInt(id, 10);
    const item = t.cases.items[idx];
    if (item) {
      data = { title: item.title, desc: item.desc, longDesc: item.longDesc, label: t.cases.title };
    }
  } else if (type === 'guarantees' && id) {
    const idx = parseInt(id, 10);
    const item = t.why.features[idx] as any;
    if (item) {
      data = { title: item.title, desc: item.desc, longTitle: item.longTitle, longDesc: item.longDesc, showBadges: item.showBadges, label: t.why.title };
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 relative pt-20">
         <div className="text-center p-8">
           <h1 className="text-3xl font-bold mb-4">404 - Niet Gevonden</h1>
           <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center justify-center gap-2 font-bold">
             <ArrowLeft className="w-4 h-4" /> Terug naar Home
           </Link>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={`${data.title} | ${data.label} | H&O Worldwide`} 
        description={data.desc.substring(0, 150) + "..."} 
      />
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {language === 'NL' ? 'Terug' : 'Back'}
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-4 block">
            {data.label}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            {data.title}
          </h1>
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {data.desc}
            </p>
            {/* Extended content for longDesc or fallback to dummy */}
            <div className="mt-8 pt-8 border-t border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-4">
                 {data.longTitle || (language === 'NL' ? 'Meer Details' : 'More Details')}
               </h3>
               {data.longDesc ? (
               <div className="text-slate-600 leading-relaxed font-medium space-y-4">
                 {data.longDesc.split('\n\n').map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                 ))}
                 
                 {data.showBadges && (
                    <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 shadow-sm">
                           <ShieldCheck className="w-5 h-5 text-indigo-600" />
                           <span className="font-bold text-slate-800 text-sm">CE Certified</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 shadow-sm">
                           <ShieldCheck className="w-5 h-5 text-indigo-600" />
                           <span className="font-bold text-slate-800 text-sm">BSCI Audited</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200 shadow-sm">
                           <ShieldCheck className="w-5 h-5 text-indigo-600" />
                           <span className="font-bold text-slate-800 text-sm">REACH / OEKO-TEX</span>
                        </div>
                    </div>
                 )}
               </div>
             ) : (
               <>
                   <p className="text-slate-600 mb-4">
                     {language === 'NL' ? 
                       "Om de implementatie en distributie te maximaliseren integreren we de nieuwste supply chain management principes. Binnen ons netwerk combineren we snelheid met uitstekende kwaliteitscontrole, direct vanaf de strategische hubs tot aan uw lokale distributiecentra." 
                       : "To maximize implementation and distribution we integrate the latest supply chain management principles. Within our network we combine speed with excellent quality control, direct from strategic hubs straight to your local distribution centers."}
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-slate-600">
                     <li>{language === 'NL' ? 'Volledig transparante voortgangsrapporten' : 'Fully transparent progress reporting'}</li>
                     <li>{language === 'NL' ? 'Striker focus op internationale wetgeving' : 'Strict focus on international compliance'}</li>
                     <li>{language === 'NL' ? 'Toegewijde account managers' : 'Dedicated account managers'}</li>
                   </ul>
                 </>
               )}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 pb-4">
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-slate-900 transition-colors">
              {language === 'NL' ? 'Bespreek uw project met een expert →' :
               language === 'FR' ? 'Discutez de votre projet avec un expert →' :
               language === 'DE' ? 'Besprechen Sie Ihr Projekt mit einem Experten →' :
               language === 'ES' ? 'Discuta su proyecto con un experto →' :
               'Discuss your project with an expert →'}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
