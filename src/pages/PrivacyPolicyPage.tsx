import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { translations } from '../translations';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage({ language }: { language: 'NL' | 'EN' }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    NL: {
      title: "Privacybeleid & Cookies",
      lastUpdated: "Laatst bijgewerkt: April 2026",
      back: "Terug naar Home",
      sections: [
        {
          title: "1. Introductie",
          body: "Bij H&O Worldwide Solutions (hierna \"wij\", \"ons\" of \"H&O\") hechten we veel waarde aan uw privacy. In dit Privacy- en Cookiebeleid leggen wij uit welke persoonsgegevens wij verzamelen, met welk doel wij dit doen, en hoe we voldoen aan de Algemene Verordening Gegevensbescherming (AVG/GDPR). Dit beleid is van toepassing op uw gebruik van onze website en diensten."
        },
        {
          title: "2. Verzameling van Persoonsgegevens",
          body: "We verzamelen en verwerken persoonsgegevens wanneer u interactie heeft met onze website, bijvoorbeeld bij het aanvragen van een 'Sample Pack', via ons contactformulier of de live chatfunctie.\n\nDe verwerkte gegevens kunnen omvatten:\n- Voornaam en achternaam\n- Zakelijk e-mailadres\n- Telefoonnummer\n- Bedrijfsnaam en functie\n- Gegevens over uw activiteiten op onze website (IP-adres, browsertype, apparaatgegevens)"
        },
        {
          title: "3. Doeleinden van Verwerking",
          body: "Uw gegevens worden uitsluitend verzameld en verwerkt voor de volgende doeleinden:\n- Uitzenden van de aangevraagde Sample Packs of offertes.\n- Onderhouden van zakelijk contact en klantbeheer.\n- Verbeteren van onze websitefunctionaliteit en gebruikservaring.\n- Voldoen aan wettelijke en administratieve verplichtingen."
        },
        {
          title: "4. Gegevensdeling en Beveiliging",
          body: "H&O Worldwide Solutions verkoopt uw persoonsgegevens nooit aan derden. Wij delen uw gegevens uitsluitend met betrouwbare IT-partners (bijv. cloudservers en database-oplossingen, zoals Google Cloud / Firebase) die strikt voldoen aan de AVG-wetgeving middels een verwerkersovereenkomst.\n\nUw gegevens worden veilig opgeslagen via encryptie en toegangsbeheersoftware. Wij hanteren strikte interne richtlijnen om ongeautoriseerde toegang, wijziging of verlies van persoonsgegevens te voorkomen."
        },
        {
          title: "5. Cookiebeleid",
          body: "Onze website plaatst kleine tekstbestandjes (cookies) op uw apparaat. Wij maken gebruik van:\n- **Strikt Noodzakelijke Cookies:** Zorgen ervoor dat basisfuncties, zoals paginanavigatie en veilige inlog, werken. Deze cookies hebben geen toestemming nodig.\n- **Analytische Cookies:** Helpen ons inzien hoe bezoekers de website gebruiken, door anoniem gegevens te verzamelen (bijv. Google Analytics met IP-anonimisering).\n\nVia onze Cookie Banner kunt u te allen tijde zelf bepalen of u niet-noodzakelijke cookies accepteert of weigert."
        },
        {
          title: "6. Uw Rechten (GDPR)",
          body: "Onder de Europese privacywetgeving heeft u verschillende rechten met betrekking tot uw persoonsgegevens:\n- **Recht op inzage:** U mag opvragen welke gegevens we van u hebben.\n- **Recht op rectificatie:** U kunt foutieve gegevens laten corrigeren.\n- **Recht op vergetelheid:** U mag ons verzoeken uw gegevens volledig te verwijderen.\n- **Recht op bezwaar en beperking:** U kunt bezwaar maken tegen specifieke verwerkingen.\n\nOm uw rechten uit te oefenen kunt u contact met ons opnemen via de onderstaande contactgegevens."
        },
        {
          title: "7. Contact",
          body: "Heeft u vragen of opmerkingen over ons Privacybeleid? Neem contact op via:\nE-mail: privacy@howorldwide.com\nTelefoon: +31 (0) 20 123 4567\nPost: [Vestigingsadres Hoofdkantoor EU]"
        }
      ]
    },
    EN: {
      title: "Privacy Policy & Cookies",
      lastUpdated: "Last updated: April 2026",
      back: "Back to Home",
      sections: [
        {
          title: "1. Introduction",
          body: "At H&O Worldwide Solutions (hereinafter \"we\", \"us\", or \"H&O\"), we highly value your privacy. In this Privacy & Cookie Policy, we explain what personal data we collect, why we collect it, and how we comply with the General Data Protection Regulation (GDPR). This policy applies to your use of our website and services."
        },
        {
          title: "2. Collection of Personal Data",
          body: "We process personal data when you interact with our website, such as when requesting a 'Sample Pack', filling out our contact form, or using our chat widget.\n\nThe data we process may include:\n- First and last name\n- Corporate email address\n- Telephone number\n- Company name and job title\n- Website activity data (IP address, browser type, device information)"
        },
        {
          title: "3. Purposes of Processing",
          body: "Your data is strictly collected and processed for the following purposes:\n- Delivering requested Sample Packs or quotations.\n- Maintaining business relations and customer relationship management.\n- Improving website functionality and user experience.\n- Complying with legal and administrative obligations."
        },
        {
          title: "4. Data Sharing and Security",
          body: "H&O Worldwide Solutions will never sell your personal data to third parties. We only share information with trusted IT partners (e.g., cloud hosting and database solutions like Google Cloud / Firebase) who strictly comply with GDPR regulations through binding Data Processing Agreements.\n\nYour data is securely stored using encryption and access control software. We enforce strict internal guidelines to prevent unauthorized access, alteration, or loss of personal data."
        },
        {
          title: "5. Cookie Policy",
          body: "Our website places small text files (cookies) on your device. We use:\n- **Strictly Necessary Cookies:** Enable basic functions like page navigation and secure logins. These do not require user consent.\n- **Analytical Cookies:** Help us understand how visitors interact with the website by collecting anonymous statistics (e.g., Google Analytics with IP anonymization).\n\nThrough our Cookie Banner, you can manage your preferences at any time to accept or reject non-essential cookies."
        },
        {
          title: "6. Your Rights (GDPR)",
          body: "Under European privacy legislation, you have several rights regarding our processing of your personal data:\n- **Right of access:** Request access to the data we hold about you.\n- **Right to rectification:** Ask us to correct inaccurate or incomplete data.\n- **Right to erasure:** Request the deletion of your data (the 'right to be forgotten').\n- **Right to object and restriction:** Request limitations on how we use your data.\n\nTo exercise these rights, please contact us using the details below."
        },
        {
          title: "7. Contact",
          body: "If you have any questions or concerns regarding our Privacy Policy? Reach out to us via:\nEmail: privacy@howorldwide.com\nPhone: +31 (0) 20 123 4567\nMail: [EU Headquarters Address]"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={`${t.title} | H&O Worldwide`} 
        description={t.sections[0].body.substring(0, 150) + "..."} 
      />
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t.back}
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-12"
        >
          <div className="mb-10 pb-6 border-b border-slate-100 flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                {t.title}
              </h1>
              <p className="text-slate-500 font-medium text-sm">{t.lastUpdated}</p>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            {t.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
