/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Package, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Factory,
  ArrowUpRight,
  TrendingUp,
  Plane,
  Scale
} from 'lucide-react';
import ChatWidget from './components/ChatWidget';
import SamplePackModal from './components/SamplePackModal';
import CookieBanner from './components/CookieBanner';
import { Routes, Route, Link } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import SupplyChainMap from './components/SupplyChainMap';

const translations = {
  NL: {
    nav: { about: "Over Ons", services: "Diensten", why: "Waarom H&O?", cases: "Portfolio", quote: "Offerte Aanvragen" },
    hero: { spoc: "Supply Chain & Merchandise Partner", p1: "H&O Worldwide ", p2: "optimaliseert", p3: " uw merkvisibiliteit.", desc: "Wij ontwerpen en produceren hoogwaardige merchandise-oplossingen waarbij we de volledige logistieke keten overnemen. Efficiëntie en ontzorging voor corporates en premium merken.", quote: "Vraag een Sample Pack aan", discover: "Bekijk de voordelen" },
    about: { title: "Van idee naar fysiek premium product, zonder zorgen.", p1: "Grote organisaties hebben geen behoefte aan een standaard catalogus. Ze zoeken een strategische partner die de merkidentiteit feilloos vertaalt naar tastbare producten en de volledige executie overneemt.", p2: "Door de inzet van in-house designers en krachtige productiehubs in Turkije en China zorgen wij voor oplossingen die niet alleen esthetisch perfect zijn, maar ook schaalbaar en conform alle internationale normen.", p3: "Wij nemen de volledige logistieke keten over. U behoudt de regie, wij doen het werk.", stat1: "100%", stat2: "Ontzorging &\nCompliance Garantié" },
    services: { subtitle: "Onze Expertise", title: "End-to-End Sourcing Oplossingen", viewAll: "Bekijk Alle Mogelijkheden",
      s1: { title: "Custom Made Productie", desc: "Volledig maatwerk dat aansluit bij uw brand guidelines. Van de juiste Pantone-kleur tot doordachte materiaalkeuze voor een premium positionering." },
      s2: { title: "Strategische Hubs", desc: "Onze focus-zones: Turkije voor hoogwaardig textiel en ultra-snelle levering (near-shoring), China voor technologische gadgets en maximale schaalvoordelen." },
      s3: { title: "Full-Service Logistiek", desc: "Efficiëntie is key. Na de productiefase dragen wij zorg voor QC, douane-afhandeling, warehousing en de uiteindelijke last-mile delivery." },
      s4: { title: "Kwaliteit & Ethiek", desc: "Absolute compliance-zekerheid. Al onze partnerfabrieken opereren volgens strikte EU-normen (incl. CE-markeringen) en strikte sociale audits." }
    },
    cases: { subtitle: "Concept Cases", title: "Premium oplossingen, tastbaar gemaakt", 
      items: [
        { title: "Consultancy Onboarding Box", desc: "Luxe matzwarte geschenkdoos met Moleskine-achtige notitieboeken, premium pennen en een gepersonaliseerde powerbank. Volledig in lijn met ingetogen corporate identiteit." },
        { title: "Tech Event Swag", desc: "Duurzaam geproduceerde rPET backpacks, gecombineerd met draadloze snelladers (CE gecertificeerd) van de hoogste kwaliteit, direct geleverd op locatie." },
        { title: "FMCG Zomerpromotie", desc: "Volume-ordening van badstof handdoeken (geproduceerd in Turkije voor snelle marktlancering) en hoogwaardige koeltassen voor nationale naamsbekendheid." }
      ]
    },
    why: { title: "De H&O Garantie", desc: "Waarom grote spelers ons hun promotionele inkoop en distributie toevertrouwen.",
      features: [
        { title: "Ontzorging van A tot Z", desc: "Wij elimineren de complexiteit. Geen kopzorgen over importheffingen, defecten of communicatie. Wij zijn uw dedicated SPOC." },
        { title: "Transparante Schaalvoordelen", desc: "We elimineren de tussenlaag. Onze directe inkoop en volume bundling garanderen de scherpste procurement-voorwaarden." },
        { title: "Europese Compliance en Kwaliteit", desc: "Van CE-markeringen op elektronica tot BSCI-gecertificeerde kleding, wij leveren 100% veiligheid aan uw inkoopafdeling." },
        { title: "Snelheid (Near-Shoring)", desc: "Via onze Turkse textielcentra kunnen we ongekend snel schakelen wanneer er onmiddellijk op markttrends gereageerd moet worden." }
      ]
    },
    break: "Schaalbare oplossingen. Zonder kwaliteitsverlies.",
    contact: { ready: "Uw logistieke keten vereenvoudigen?", title: "Elevate your corporate gifting.", desc: "Contacteer onze Senior Account Managers om te bespreken hoe H&O Worldwide uw promotionele efficiëntie kan verhogen.", quote: "Vraag een Sample Pack aan", call: "Contacteer Ons" },
    footer: { desc: "H&O Worldwide Solutions is uw B2B partner in custom sourcing, ethical production en full-service merchandise logistics.", menu: "Navigatie", offices: "Operationele Hubs", hq: "Hoofdkantoor EU", privacy: "Privacybeleid & Cookies" },
    cookie: { title: "Wij respecteren uw privacy", desc: "We gebruiken noodzakelijke cookies om de website goed te laten werken. Daarnaast gebruiken we optionele cookies voor analytische doeleinden om onze dienstverlening te verbeteren. Door op 'Weigeren' te klikken worden alleen noodzakelijke cookies geplaatst.", accept: "Beide Accepteren", reject: "Weiger Optioneel" }
  },
  EN: {
    nav: { about: "About Us", services: "Services", why: "Why H&O?", cases: "Portfolio", quote: "Request Quote" },
    hero: { spoc: "Supply Chain & Merchandise Partner", p1: "H&O Worldwide ", p2: "optimizes", p3: " your brand visibility.", desc: "We design and produce high-end merchandise solutions while taking over the entire logistics chain. Efficiency and unburdening for corporates and premium brands.", quote: "Request a Sample Pack", discover: "Discover the benefits" },
    about: { title: "From concept to premium physical product, hassle-free.", p1: "Large organizations do not need a standard catalog. They seek a strategic partner that translates their brand identity into tangible products seamlessly.", p2: "By deploying in-house designers and powerful production hubs in Turkey and China, we ensure solutions that are aesthetically perfect, scalable, and fully compliant with international norms.", p3: "We take full control of the supply chain. You keep the direction, we do the work.", stat1: "100%", stat2: "Unburdening &\nCompliance Guarantee" },
    services: { subtitle: "Our Expertise", title: "End-to-End Sourcing Solutions", viewAll: "View All Options",
      s1: { title: "Custom Made Production", desc: "Fully tailored to your brand guidelines. From exact Pantone matching to deliberate material choices for premium positioning." },
      s2: { title: "Strategic Hubs", desc: "Our core areas: Turkey for premium textiles and ultra-fast near-shoring, China for tech gadgets and maximum economies of scale." },
      s3: { title: "Full-Service Logistics", desc: "Efficiency is key. Post-production, we handle QC, customs clearance, warehousing, and the ultimate last-mile delivery." },
      s4: { title: "Quality & Ethics", desc: "Absolute compliance security. All partner factories conform to stringent EU standards (including CE) and pass strict social audits." }
    },
    cases: { subtitle: "Portfolio", title: "Premium solutions, made tangible", 
      items: [
        { title: "Consultancy Onboarding Box", desc: "Luxury matte black gift box featuring Moleskine-style notebooks, premium pens, and a bespoke powerbank. Perfectly aligned with a sophisticated corporate identity." },
        { title: "Tech Event Swag", desc: "Sustainably produced rPET backpacks bundled with top-tier (CE-certified) wireless fast chargers, delivered straight to the venue." },
        { title: "FMCG Summer Promo", desc: "High-volume order of terry cloth towels (fast-tracked in Turkey) combined with premium cooler bags for deep national brand penetration." }
      ]
    },
    why: { title: "The H&O Guarantee", desc: "Why major players entrust us with their promotional procurement and distribution.",
      features: [
        { title: "End-to-End Unburdening", desc: "We eliminate complexity. No concerns about import duties, flaws, or communication. We are your dedicated SPOC." },
        { title: "Transparent Economies of Scale", desc: "We cut out the middleman. Our direct purchasing and volume bundling guarantee sharp procurement rates." },
        { title: "European Compliance & Quality", desc: "From CE marks on electronics to BSCI-certified clothing, we guarantee 100% safety and peace of mind for your purchasing department." },
        { title: "Speed (Near-Shoring)", desc: "Through our Turkish textile hubs, we can act remarkably fast when instant market trend reactions are required." }
      ]
    },
    break: "Scalable solutions. Zero compromises.",
    contact: { ready: "Ready to simplify your supply chain?", title: "Elevate your corporate gifting.", desc: "Contact our Senior Account Managers to discuss how H&O Worldwide can elevate your promotional efficiency.", quote: "Request a Sample Pack", call: "Contact Us" },
    footer: { desc: "H&O Worldwide Solutions is your B2B partner in custom sourcing, ethical production, and full-service merchandise logistics.", menu: "Navigation", offices: "Operational Hubs", hq: "Headquarters EU", privacy: "Privacy Policy & Cookies" },
    cookie: { title: "We respect your privacy", desc: "We use essential cookies to make our site work. We also use optional cookies for analytics to improve our services. By clicking 'Reject', only strictly necessary cookies will be set.", accept: "Accept All", reject: "Reject Optional" }
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState<'NL' | 'EN'>('NL');
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900">
      
      {/* Navigation */}
      <nav id="main-navigation" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-slate-200 shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
                <Globe className={`w-8 h-8 ${isScrolled ? 'text-indigo-900' : 'text-white'}`} />
                <span className={`font-extrabold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  H&O Worldwide
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/#about" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-200 hover:text-white'}`}>{t.nav.about}</a>
              <a href="/#services" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-200 hover:text-white'}`}>{t.nav.services}</a>
              <a href="/#portfolio" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-200 hover:text-white'}`}>{t.nav.cases}</a>
              <a href="/#why-us" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-200 hover:text-white'}`}>{t.nav.why}</a>
              
              <div className={`flex items-center rounded-full p-1 border ml-4 ${isScrolled ? 'bg-slate-100 border-slate-200' : 'bg-white/10 border-white/10 backdrop-blur-sm'}`}>
                <button
                  onClick={() => setLanguage('NL')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'NL' ? 'bg-indigo-600 text-white shadow-sm' : (isScrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white')}`}
                >
                  NL
                </button>
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'EN' ? 'bg-indigo-600 text-white shadow-sm' : (isScrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/70 hover:text-white')}`}
                >
                  EN
                </button>
              </div>

              <a href="/#contact" className={`ml-4 px-6 py-2.5 rounded-md text-sm font-semibold shadow-sm transition-all ${isScrolled ? 'bg-indigo-900 text-white hover:bg-indigo-800' : 'bg-white text-indigo-900 hover:bg-slate-100'}`}>
                {t.nav.quote}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${isScrolled ? 'text-indigo-900' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 border-t border-slate-100">
            <div className="flex justify-center mb-2">
              <div className="flex items-center rounded-full p-1 border bg-slate-100 border-slate-200">
                <button
                  onClick={() => { setLanguage('NL'); setMobileMenuOpen(false); }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${language === 'NL' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  NL
                </button>
                <button
                  onClick={() => { setLanguage('EN'); setMobileMenuOpen(false); }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${language === 'EN' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  EN
                </button>
              </div>
            </div>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium px-4 py-2 hover:text-indigo-600 border-l-2 border-transparent hover:border-indigo-600">{t.nav.about}</a>
            <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium px-4 py-2 hover:text-indigo-600 border-l-2 border-transparent hover:border-indigo-600">{t.nav.services}</a>
            <a href="/#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium px-4 py-2 hover:text-indigo-600 border-l-2 border-transparent hover:border-indigo-600">{t.nav.cases}</a>
            <a href="/#why-us" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium px-4 py-2 hover:text-indigo-600 border-l-2 border-transparent hover:border-indigo-600">{t.nav.why}</a>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="bg-indigo-900 hover:bg-indigo-800 text-white text-center py-4 rounded-lg font-semibold mt-4 shadow-sm w-full mx-auto">
              {t.nav.quote}
            </a>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop" 
            alt="Corporate Branding and Premium Merchandise" 
            className="w-full h-full object-cover object-center translate-y-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          {/* Subtle gradient for added depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-indigo-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/80 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">{t.hero.spoc}</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              {t.hero.p1}<br/><span className="text-indigo-400">{t.hero.p2}</span>{t.hero.p3}
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {t.hero.desc}
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-200 transition-colors rounded-lg font-bold text-sm shadow-lg hover:shadow-xl"
              >
                {t.hero.quote}
                <ChevronRight className="w-4 h-4" />
              </button>
              <a href="#services" className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-slate-600 bg-slate-900/40 backdrop-blur-sm text-white hover:bg-slate-800 transition-colors font-bold text-sm rounded-lg shadow-sm">
                {t.hero.discover}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Summary */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
                {t.about.title}
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                {t.about.p1}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                {t.about.p2}
              </p>
              <p className="text-lg text-slate-900 font-bold">
                {t.about.p3}
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-slate-100 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern global logistics and warehousing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-indigo-900 text-white p-8 rounded-xl shadow-2xl hidden md:block border border-indigo-800">
                <p className="text-4xl font-black tracking-tight mb-2 text-indigo-100">{t.about.stat1}</p>
                <p className="text-sm text-indigo-300 uppercase tracking-widest font-bold whitespace-pre-wrap">{t.about.stat2}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3 block">{t.services.subtitle}</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                {t.services.title}
              </h2>
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors pb-2 border-b-2 border-transparent hover:border-indigo-800">
              {t.services.viewAll} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Service 1 */}
            <Link to="/details/services/s1">
              <motion.div variants={fadeIn} className="bg-white p-10 border border-slate-200 hover:shadow-xl transition-all duration-300 group rounded-2xl h-full flex flex-col">
                <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300">
                  <Factory className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.s1.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {t.services.s1.desc}
                </p>
                <div className="mt-auto pt-6 text-indigo-600 font-bold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">Meer info <ChevronRight className="w-4 h-4 ml-1"/></div>
              </motion.div>
            </Link>

            {/* Service 2 */}
            <Link to="/details/services/s2">
              <motion.div variants={fadeIn} className="bg-white p-10 border border-slate-200 hover:shadow-xl transition-all duration-300 group rounded-2xl h-full flex flex-col">
                <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.s2.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-8">
                  {t.services.s2.desc}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-2 rounded border border-slate-200">
                    <Truck className="w-3.5 h-3.5 text-indigo-600" /> Turkije (Fast)
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-2 rounded border border-slate-200">
                     <Plane className="w-3.5 h-3.5 text-indigo-600" /> China (Scale)
                  </div>
                </div>
                <div className="mt-6 text-indigo-600 font-bold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">Meer info <ChevronRight className="w-4 h-4 ml-1"/></div>
              </motion.div>
            </Link>

            {/* Service 3 */}
            <Link to="/details/services/s3">
              <motion.div variants={fadeIn} className="bg-indigo-900 p-10 shadow-xl group rounded-2xl border border-indigo-800 h-full flex flex-col hover:bg-indigo-800 transition-colors">
                <div className="w-14 h-14 bg-indigo-800 rounded-lg flex items-center justify-center mb-8">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.services.s3.title}</h3>
                <p className="text-indigo-200 leading-relaxed font-medium">
                  {t.services.s3.desc}
                </p>
                <div className="mt-auto pt-6 text-indigo-300 font-bold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">Meer info <ChevronRight className="w-4 h-4 ml-1"/></div>
              </motion.div>
            </Link>

            {/* Service 4 */}
            <Link to="/details/services/s4">
              <motion.div variants={fadeIn} className="bg-white p-10 border border-slate-200 hover:shadow-xl transition-all duration-300 group rounded-2xl h-full flex flex-col">
                <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.services.s4.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {t.services.s4.desc}
                </p>
                <div className="mt-auto pt-6 text-indigo-600 font-bold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">Meer info <ChevronRight className="w-4 h-4 ml-1"/></div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Concept Cases Section / Portfolio */}
      <section id="portfolio" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3 block">{t.cases.subtitle}</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                {t.cases.title}
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.cases.items.map((item: any, i: number) => {
               const images = [
                  "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=800&h=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&h=600&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800&h=600&auto=format&fit=crop"
               ];
               return (
                <Link to={`/details/cases/${i}`} key={i}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 group h-full flex flex-col hover:border-indigo-100 transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
                      <img 
                        src={images[i]} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-900 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                      <div className="mt-auto pt-6 text-indigo-600 font-bold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">Meer info <ChevronRight className="w-4 h-4 ml-1"/></div>
                    </div>
                  </motion.div>
                </Link>
               );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              {t.why.title}
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              {t.why.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {t.why.features.map((feature: any, i: number) => (
              <Link to={`/details/guarantees/${i}`} key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col group hover:bg-slate-50 p-4 -ml-4 rounded-xl transition-colors h-full"
                >
                  <div className="mt-1 flex items-start">
                    <CheckCircle2 className="w-8 h-8 text-indigo-600 stroke-[2px] mb-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">{feature.desc}</p>
                  <div className="mt-4 text-indigo-600 font-bold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">Meer info <ChevronRight className="w-4 h-4 ml-1"/></div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image break - Worldwide scale */}
      <section className="h-[40vh] min-h-[500px] relative bg-slate-900 border-t border-slate-800 overflow-hidden shadow-2xl">
          <SupplyChainMap />
          {/* Text positioned at bottom left to clear the Eurasian map lines and balance visual weight */}
          <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12 lg:p-20 pointer-events-none z-20">
             <div className="max-w-2xl">
               <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)] text-left leading-tight">
                  {t.break}
               </h2>
             </div>
          </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-indigo-600 to-blue-800 text-white relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-indigo-200 uppercase mb-4 block">{t.contact.ready}</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
            {t.contact.title}
          </h2>
          <p className="text-lg text-indigo-100 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.contact.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-indigo-700 hover:bg-slate-100 transition-colors rounded-lg font-bold text-sm shadow-xl"
            >
              <Package className="w-4 h-4" />
              {t.contact.quote}
            </button>
            <a href="mailto:info@howorldwide.com" className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-indigo-400 bg-indigo-900/30 text-white hover:bg-indigo-900/60 transition-colors rounded-lg font-bold text-sm shadow-sm">
              {t.contact.call}
            </a>
          </div>

          <div className="flex justify-center border-t border-indigo-400/30 pt-10">
            <div className="flex flex-col items-center gap-2 text-indigo-100">
               <span className="font-bold text-white">Of bereik ons direct:</span>
               <span>info@howorldwide.com</span>
               <span>+31 (0) 20 123 4567</span>
            </div>
          </div>
        </div>
      </section>
          </>
        } />
        <Route path="/details/:type/:id" element={<DetailPage language={language} />} />
        <Route path="/privacy" element={<PrivacyPolicyPage language={language} />} />
      </Routes>

      {/* Footer */}
      <footer id="footer" className="bg-slate-950 py-12 text-slate-400 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">H&O</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Worldwide Solutions
              </span>
            </div>
            <p className="max-w-sm mb-6 font-medium leading-relaxed">
              {t.footer.desc}
            </p>
            <p className="text-slate-500 uppercase tracking-widest text-[10px]">© 2026 H&O Worldwide Solutions. All rights reserved.</p>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">{t.footer.menu}</h5>
            <ul className="space-y-3">
              <li><Link to="/#about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/#why-us" className="hover:text-white transition-colors">{t.nav.why}</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors text-indigo-400">{t.footer.privacy}</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">{t.footer.offices}</h5>
            <ul className="space-y-3">
              <li>{t.footer.hq}</li>
              <li>Sourcing Hub Turkey</li>
              <li>Logistics Bay China</li>
            </ul>
          </div>
        </div>
      </footer>
      
      <ChatWidget t={t} />

      <SamplePackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        language={language}
      />
      
      <CookieBanner language={language} translations={translations} />
    </div>
  );
}

