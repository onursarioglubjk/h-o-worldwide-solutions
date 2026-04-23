export type Language = 'EN' | 'NL' | 'FR' | 'DE' | 'ES';

export const translations: Record<Language, any> = {
  NL: {
    nav: { about: "Over Ons", services: "Diensten", why: "Waarom H&O?", cases: "Portfolio", quote: "Offerte Aanvragen" },
    hero: { spoc: "Supply Chain & Merchandise Partner", p1: "H&O Worldwide ", p2: "optimaliseert", p3: " uw merkvisibiliteit.", desc: "Wij ontwerpen en produceren hoogwaardige merchandise-oplossingen waarbij we de volledige logistieke keten overnemen. Efficiëntie en ontzorging voor corporates en premium merken.", quote: "Offerte Aanvragen", samplePack: "Vraag een Sample Pack aan", discover: "Bekijk de voordelen" },
    about: { title: "Van idee naar fysiek premium product, zonder zorgen.", p1: "Grote organisaties hebben geen behoefte aan een standaard catalogus. Ze zoeken een strategische partner die de merkidentiteit feilloos vertaalt naar tastbare producten en de volledige executie overneemt.", p2: "Door de inzet van in-house designers en krachtige productiehubs in Turkije en China zorgen wij voor oplossingen die niet alleen esthetisch perfect zijn, maar ook schaalbaar en conform alle internationale normen.", p3: "Wij nemen de volledige logistieke keten over. U behoudt de regie, wij doen het werk.", stat1: "100%", stat2: "Ontzorging &\nCompliance Garantié" },
    services: { subtitle: "Onze Expertise", title: "End-to-End Sourcing Oplossingen", viewAll: "Bekijk Alle Mogelijkheden",
      s1: { title: "Custom Made Productie", desc: "Volledig maatwerk dat aansluit bij uw brand guidelines. Van de exacte Pantone™ PMS-kleuren tot doordachte materiaalkeuze voor een premium positionering." },
      s2: { title: "Strategische Hubs", desc: "Onze focus-zones: Turkije voor hoogwaardig textiel en ultra-snelle levering (near-shoring), China voor technologische gadgets en maximale schaalvoordelen." },
      s3: { title: "Full-Service Logistiek", desc: "Efficiëntie is key. Na de productiefase dragen wij zorg voor QC, douane-afhandeling, warehousing en de uiteindelijke last-mile delivery." },
      s4: { title: "Kwaliteit & Ethiek", desc: "Absolute compliance-zekerheid. Al onze partnerfabrieken opereren volgens strikte EU-normen (incl. CE-markeringen) en strikte sociale audits." }
    },
    nodes: { title: "Strategische Sourcing Nodes", desc: "Kies de supply chain blueprint die past bij uw missie.",
      tr: { title: "Hub Turkije", features: ["Focus: Duurzame Mode & Textiel", "Transport: Truck (Eco-vriendelijker)", "Lead-time: 2-3 weken", "Specialiteit: Snelheid & Near-Shoring"] },
      cn: { title: "Hub China", features: ["Focus: Tech-gadgets & Volume", "Transport: Zee- & Luchtvracht", "Lead-time: 8-12 weken", "Specialiteit: Schaal & Kostenefficiëntie"] }
    },
    journey: { title: "De H&O Journey", desc: "Onze waterdichte A-Z logistieke executie.",
      steps: [
        { title: "Conceptueel Design", desc: "Merkidentiteit vertalen naar tastbare premiums." },
        { title: "Node Routing", desc: "Keuze van de logistieke hub (Turkije vs China)." },
        { title: "Productie & Kwaliteit", desc: "Ethical manufacturing met AQL inspecties." },
        { title: "Last-Mile Delivery", desc: "Douane-afhandeling en drempellevering." }
      ]
    },
    cases: { subtitle: "Concept Cases", title: "Premium oplossingen, tastbaar gemaakt", 
      items: [
        { title: "Executive Onboarding Experience", desc: "Luxe 'Welcome-to-the-team' pakketten die de corporate identiteit feilloos vertalen naar een tastbaar moment van waardering voor nieuw talent.", longDesc: "Ontworpen voor high-level partners die streven naar een onvergetelijke eerste indruk. Deze executive boxen bevatten premium Moleskine-stijl notitieboeken, hoogwaardige schrijfwaren en gepersonaliseerde tech-essentials zoals bespoke powerbanks. Elk element wordt met zorg geselecteerd om de waarden en professionaliteit van uw kantoor te reflecteren, volledig ontzorgd van design tot distributie." },
        { title: "Premium Tech Event Solutions", desc: "Duurzame merkactivatie voor de tech-sector: hoogwaardige rPET-rugzakken gecombineerd met gecertificeerde innovatieve hardware.", longDesc: "Maak impact op uw volgende event met swag die écht wordt gebruikt. Wij combineren ecologisch verantwoorde rPET-rugzakken met top-tier, CE-gecertificeerde wireless fast-chargers. Onze full-service aanpak garandeert directe levering op de eventlocatie, waarbij technische perfectie en duurzaamheid hand in hand gaan. Ideaal voor grootschalige internationale tech-conferenties waar kwaliteit de norm is." },
        { title: "National Brand Activation", desc: "Grootschalige productie en razendsnelle 'fast-track' levering van merk-activatie kits voor landelijke marketingcampagnes.", longDesc: "Maximaliseer uw marktpenetratie met hoogwaardige consumentenproducten. Voor deze case leverden wij volumeprojecten van custom terry cloth handdoeken en premium koeltassen. Dankzij onze strategische productie-hubs in Turkije garanderen wij een extreem korte time-to-market, zelfs bij volumes van 10.000+ units. Wij beheren de volledige keten: van Pantone-matching tot de uiteindelijke last-mile delivery bij uw distributeurs." }
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
    footer: { desc: "H&O Worldwide Solutions is uw B2B partner in custom sourcing, ethical production en full-service merchandise logistics.", menu: "Navigatie", offices: "Operationele Hubs", hq: "Hoofdkantoor EU", privacy: "Privacybeleid & Cookies", certs: "Compliance Garantie door:" },
    cookie: { title: "Wij respecteren uw privacy", desc: "We gebruiken noodzakelijke cookies om de website goed te laten werken. Daarnaast gebruiken we optionele cookies voor analytische doeleinden om onze dienstverlening te verbeteren. Door op 'Weigeren' te klikken worden alleen noodzakelijke cookies geplaatst.", accept: "Beide Accepteren", reject: "Weiger Optioneel" }
  },
  EN: {
    nav: { about: "About Us", services: "Services", why: "Why H&O?", cases: "Portfolio", quote: "Request Quote" },
    hero: { spoc: "Supply Chain & Merchandise Partner", p1: "H&O Worldwide ", p2: "optimizes", p3: " your brand visibility.", desc: "We design and produce high-end merchandise solutions while taking over the entire logistics chain. Efficiency and unburdening for corporates and premium brands.", quote: "Request Quote", samplePack: "Request a Sample Pack", discover: "Discover the benefits" },
    about: { title: "From concept to premium physical product, hassle-free.", p1: "Large organizations do not need a standard catalog. They seek a strategic partner that translates their brand identity into tangible products seamlessly.", p2: "By deploying in-house designers and powerful production hubs in Turkey and China, we ensure solutions that are aesthetically perfect, scalable, and fully compliant with international norms.", p3: "We take full control of the supply chain. You keep the direction, we do the work.", stat1: "100%", stat2: "Unburdening &\nCompliance Guarantee" },
    services: { subtitle: "Our Expertise", title: "End-to-End Sourcing Solutions", viewAll: "View All Options",
      s1: { title: "Custom Made Production", desc: "Fully tailored to your brand guidelines. From exact Pantone™ PMS-matching to deliberate material choices for premium positioning." },
      s2: { title: "Strategic Hubs", desc: "Our core areas: Turkey for premium textiles and ultra-fast near-shoring, China for tech gadgets and maximum economies of scale." },
      s3: { title: "Full-Service Logistics", desc: "Efficiency is key. Post-production, we handle QC, customs clearance, warehousing, and the ultimate last-mile delivery." },
      s4: { title: "Quality & Ethics", desc: "Absolute compliance security. All partner factories conform to strict EU standards (including CE) and pass strict social audits." }
    },
    nodes: { title: "Strategic Sourcing Nodes", desc: "Choose the supply chain blueprint that fits your mission.",
      tr: { title: "Hub Turkey", features: ["Focus: Sustainable Fashion & Textiles", "Transport: Truck (Eco-friendlier)", "Lead-time: 2-3 weeks", "Specialty: Speed & Near-Shoring"] },
      cn: { title: "Hub China", features: ["Focus: Tech-gadgets & Volume", "Transport: Sea & Airfreight", "Lead-time: 8-12 weeks", "Specialty: Scale & Cost efficiency"] }
    },
    journey: { title: "The H&O Journey", desc: "Our airtight A-Z logistics pipeline.",
      steps: [
        { title: "Conceptual Design", desc: "Translating brand identity into physical premiums." },
        { title: "Node Routing", desc: "Choosing the strategic hub (Turkey vs China)." },
        { title: "Production & QC", desc: "Ethical manufacturing with strict AQL inspections." },
        { title: "Last-Mile Delivery", desc: "Customs clearance and doorstep delivery." }
      ]
    },
    cases: { subtitle: "Portfolio", title: "Premium solutions, made tangible", 
      items: [
        { title: "Executive Onboarding Experience", desc: "Luxury 'Welcome-to-the-team' packages that flawlessly translate corporate identity into a tangible moment of appreciation for new talent.", longDesc: "Designed for high-level partners striving for an unforgettable first impression. These executive boxes contain premium Moleskine-style notebooks, high-quality writing instruments, and personalized tech essentials such as bespoke power banks. Each element is carefully selected to reflect the values and professionalism of your firm, fully managed from design to distribution." },
        { title: "Premium Tech Event Solutions", desc: "Sustainable brand activation for the tech sector: high-quality rPET backpacks combined with certified innovative hardware.", longDesc: "Make an impact at your next event with swag that actually gets used. We combine ecologically responsible rPET backpacks with top-tier, CE-certified wireless fast chargers. Our full-service approach guarantees direct delivery to the event location, where technical perfection and sustainability go hand in hand. Ideal for large-scale international tech conferences where quality is the standard." },
        { title: "National Brand Activation", desc: "Large-scale production and lightning-fast track delivery of brand activation kits for nationwide marketing campaigns.", longDesc: "Maximize your market penetration with high-quality consumer products. For this case, we delivered volume projects of custom terry cloth towels and premium cooler bags. Thanks to our strategic production hubs in Turkey, we guarantee an extremely short time-to-market, even with volumes of 10,000+ units. We manage the entire chain: from Pantone matching to the final last-mile delivery to your distributors." }
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
    footer: { desc: "H&O Worldwide Solutions is your B2B partner in custom sourcing, ethical production, and full-service merchandise logistics.", menu: "Navigation", offices: "Operational Hubs", hq: "Headquarters EU", privacy: "Privacy Policy & Cookies", certs: "Compliance Guarantee by:" },
    cookie: { title: "We respect your privacy", desc: "We use essential cookies to make our site work. We also use optional cookies for analytics to improve our services. By clicking 'Reject', only strictly necessary cookies will be set.", accept: "Accept All", reject: "Reject Optional" }
  },
  FR: {
    nav: { about: "À Propos", services: "Services", why: "Pourquoi H&O?", cases: "Portfolio", quote: "Demander Devis" },
    hero: { spoc: "Partenaire Supply Chain & Marchandises", p1: "H&O Worldwide ", p2: "optimise", p3: " la visibilité de votre marque.", desc: "Nous concevons et produisons des solutions de marchandises haut de gamme tout en prenant en charge l'ensemble de la chaîne logistique. Efficacité pour les grandes entreprises et marques premium.", quote: "Demander un Devis", samplePack: "Demander un Pack Échantillon", discover: "Découvrez les avantages" },
    about: { title: "De l'idée au produit physique de qualité supérieure, sans tracas.", p1: "Les grandes organisations ne recherchent pas un catalogue standard. Elles cherchent un partenaire stratégique qui traduit parfaitement leur identité en produits tangibles.", p2: "Grâce à nos designers internes et nos puissants centres de production en Turquie et en Chine, nous assurons des solutions esthétiquement parfaites, évolutives et entièrement conformes aux normes internationales.", p3: "Nous contrôlons toute la chaîne logistique. Vous gardez la direction, nous faisons le reste.", stat1: "100%", stat2: "Garantie de Sérénité &\nConformité" },
    services: { subtitle: "Notre Expertise", title: "Solutions de Sourcing de A à Z", viewAll: "Voir toutes les options",
      s1: { title: "Production Sur-Mesure", desc: "Entièrement adapté à vos directives de marque. Du respect exact des couleurs Pantone™ PMS au choix des matériaux pour un positionnement premium." },
      s2: { title: "Hubs Stratégiques", desc: "Nos zones clés: la Turquie pour des textiles de qualité et un near-shoring ultra-rapide, la Chine pour les gadgets technologiques et des économies d'échelle maximales." },
      s3: { title: "Logistique Complète", desc: "L'efficacité est primordiale. Après la production, nous gérons le contrôle qualité (QC), le dédouanement, l'entreposage et la livraison finale." },
      s4: { title: "Qualité & Éthique", desc: "Sécurité absolue de conformité. Nos usines partenaires respectent les normes strictes de l'UE (y compris CE) et réussissent des audits sociaux rigoureux." }
    },
    nodes: { title: "Noeuds de Sourcing Stratégiques", desc: "Choisissez la logistique qui correspond à votre mission.",
      tr: { title: "Hub Turquie", features: ["Mise au point: Mode Durable & Textiles", "Transport: Camion (Plus Écologique)", "Délai de Livraison: 2-3 semaines", "Spécialité: Vitesse & Near-Shoring"] },
      cn: { title: "Hub Chine", features: ["Mise au point: Gadgets & Volume", "Transport: Fret Maritime & Aérien", "Délai de Livraison: 8-12 semaines", "Spécialité: Échelle & Efficacité des Coûts"] }
    },
    journey: { title: "Le Parcours H&O", desc: "Notre exécution logistique infaillible de A à Z.",
      steps: [
        { title: "Design Conceptuel", desc: "Traduire l'identité de marque en primes tangibles." },
        { title: "Routage des Nœuds", desc: "Choix du hub stratégique (Turquie ou Chine)." },
        { title: "Production & QC", desc: "Fabrication éthique avec des inspections AQL strictes." },
        { title: "Livraison Finale", desc: "Dédouanement et livraison à domicile." }
      ]
    },
    cases: { subtitle: "Portfolio", title: "Des solutions premium, rendues tangibles", 
      items: [
        { title: "Expérience d'Intégration Exécutive", desc: "Des packages 'Welcome-to-the-team' de luxe qui traduisent parfaitement l'identité de l'entreprise en un moment d'appréciation tangible pour les nouveaux talents.", longDesc: "Conçus pour les partenaires de haut niveau qui visent une première impression inoubliable. Ces boîtes exécutives contiennent des carnets de notes premium de style Moleskine, des instruments d'écriture de haute qualité et des accessoires technologiques personnalisés, tels que des batteries externes sur mesure. Chaque élément est soigneusement sélectionné pour refléter les valeurs et le professionnalisme de votre cabinet, avec une gestion complète de la conception à la distribution." },
        { title: "Solutions Événementielles Tech Premium", desc: "Activation de marque durable pour le secteur technologique : sacs à dos en rPET de haute qualité combinés à du matériel innovant certifié.", longDesc: "Faites impression lors de votre prochain événement avec des cadeaux promotionnels (swag) qui sont réellement utilisés. Nous combinons des sacs à dos en rPET écologiquement responsables avec des chargeurs rapides sans fil de premier ordre certifiés CE. Notre approche full-service garantit une livraison directe sur le lieu de l'événement, où perfection technique et durabilité vont de pair. Idéal pour les grandes conférences technologiques internationales où la qualité est la norme." },
        { title: "Activation de Marque Nationale", desc: "Production à grande échelle et livraison ultra-rapide de kits d'activation de marque pour des campagnes marketing nationales.", longDesc: "Maximisez votre pénétration du marché avec des produits de consommation de haute qualité. Pour ce projet, nous avons livré des volumes importants de serviettes éponge personnalisées et de sacs isothermes premium. Grâce à nos hubs de production stratégiques en Turquie, nous garantissons un délai de mise sur le marché extrêmement court, même pour des volumes de plus de 10 000 unités. Nous gérons toute la chaîne : de la correspondance Pantone à la livraison finale du dernier kilomètre chez vos distributeurs." }
      ]
    },
    why: { title: "La Garantie H&O", desc: "Pourquoi les grands acteurs nous confient leurs achats promotionnels et leur distribution.",
      features: [
        { title: "Sérénité Totale", desc: "Nous éliminons la complexité. Pas de soucis pour les droits d'importation, les défauts ou la communication. Un point de contact unique (SPOC)." },
        { title: "Économies d'Échelle", desc: "Nous éliminons les intermédiaires. Nos achats directs garantissent des tarifs très compétitifs." },
        { title: "Conformité & Qualité", desc: "Des normes CE sur l'électronique aux vêtements certifiés BSCI, nous garantissons une sécurité totale pour vos achats." },
        { title: "Rapidité (Near-Shoring)", desc: "Via nos centres textiles turcs, nous réagissons très vite aux tendances du marché." }
      ]
    },
    break: "Solutions évolutives. Zéro compromis.",
    contact: { ready: "Prêt à simplifier votre supply chain?", title: "Élevez vos cadeaux d'entreprise.", desc: "Contactez nos gestionnaires pour discuter de la façon dont H&O Worldwide peut améliorer votre efficacité promotionnelle.", quote: "Demander un Sample Pack", call: "Contactez-Nous" },
    footer: { desc: "H&O Worldwide Solutions est votre partenaire B2B pour l'approvisionnement sur mesure, la production éthique et la logistique complète.", menu: "Navigation", offices: "Hubs Opérationnels", hq: "Siège de l'UE", privacy: "Politique de Confidentialité", certs: "Garantie de Conformité par:" },
    cookie: { title: "Nous respectons votre vie privée", desc: "Nous utilisons des cookies essentiels. Nous utilisons également des cookies optionnels pour l'analyse. En cliquant sur 'Rejeter', seuls les cookies nécessaires seront définis.", accept: "Tout Accepter", reject: "Rejeter (Optionnel)" }
  },
  DE: {
    nav: { about: "Über Uns", services: "Leistungen", why: "Warum H&O?", cases: "Portfolio", quote: "Angebot Anfragen" },
    hero: { spoc: "Supply Chain & Merchandise Partner", p1: "H&O Worldwide ", p2: "optimiert", p3: " Ihre Markensichtbarkeit.", desc: "Wir entwerfen und produzieren High-End-Merchandise-Lösungen und übernehmen die gesamte Logistikkette. Effizienz und Entlastung für Unternehmen und Premium-Marken.", quote: "Angebot Anfragen", samplePack: "Musterpaket Anfragen", discover: "Vorteile entdecken" },
    about: { title: "Von der Idee zum physischen Premiumprodukt, stressfrei.", p1: "Große Organisationen brauchen keine Standardkataloge. Sie suchen einen strategischen Partner, der ihre Markenidentität in greifbare Produkte übersetzt.", p2: "Durch unsere Inhouse-Designer und Produktionszentren in der Türkei und China garantieren wir absolut perfekte, skalierbare und standardkonforme Lösungen.", p3: "Wir kontrollieren die gesamte Lieferkette. Sie behalten die Führung, wir erledigen die Arbeit.", stat1: "100%", stat2: "Entlastungs- & Konformitätsgarantie" },
    services: { subtitle: "Unsere Expertise", title: "End-to-End Sourcing-Lösungen", viewAll: "Alle Optionen anzeigen",
      s1: { title: "Custom Made Produktion", desc: "Komplett auf Ihre Markenrichtlinien zugeschnitten. Vom exakten Pantone™ PMS Abgleich bis hin zur Materialwahl." },
      s2: { title: "Strategische Hubs", desc: "Unsere Kernbereiche: Türkei für hochwertige Textilien und schnelles Near-Shoring, China für Tech-Gadgets und Skaleneffekte." },
      s3: { title: "Full-Service Logistik", desc: "Nach der Produktion kümmern wir uns um Qualitätskontrolle, Zollabfertigung, Lagerung und die Endauslieferung (Last-Mile)." },
      s4: { title: "Qualität & Ethik", desc: "Absolute Konformitätssicherheit. Alle Partnerwerke erfüllen strenge EU-Normen (inkl. CE) und bestehen Audits." }
    },
    nodes: { title: "Strategische Sourcing-Nodes", desc: "Wählen Sie das Lieferkettenkonzept, das zu Ihrer Mission passt.",
      tr: { title: "Hub Türkei", features: ["Fokus: Nachhaltige Mode & Textilien", "Transport: LKW (Umweltfreundlicher)", "Lieferzeit: 2-3 Wochen", "Spezialität: Geschwindigkeit & Near-Shoring"] },
      cn: { title: "Hub China", features: ["Fokus: Tech-Gadgets & Volumen", "Transport: See- & Luftfracht", "Lieferzeit: 8-12 Wochen", "Spezialität: Skalierung & Kosteneffizienz"] }
    },
    journey: { title: "Die H&O Journey", desc: "Unsere lückenlose Logistik-Pipeline von A bis Z.",
      steps: [
        { title: "Konzeptionelles Design", desc: "Übersetzung der Markenidentität in physische Prämien." },
        { title: "Node Routing", desc: "Wahl des strategischen Hubs (Türkei vs. China)." },
        { title: "Produktion & QC", desc: "Ethische Fertigung mit strengen AQL-Inspektionen." },
        { title: "Last-Mile Delivery", desc: "Zollabfertigung und Lieferung bis vor die Tür." }
      ]
    },
    cases: { subtitle: "Portfolio", title: "Premium-Lösungen, greifbar gemacht", 
      items: [
        { title: "Executive Onboarding Experience", desc: "Luxuriöse 'Welcome-to-the-team'-Pakete, die die Corporate Identity nahtlos in einen greifbaren Moment der Wertschätzung für neue Talente übersetzen.", longDesc: "Entwickelt für hochrangige Partner, die einen unvergesslichen ersten Eindruck hinterlassen möchten. Diese Executive-Boxen enthalten Premium-Notizbücher im Moleskine-Stil, hochwertige Schreibgeräte und personalisierte Tech-Essentials wie maßgeschneiderte Powerbanks. Jedes Element wird sorgfältig ausgewählt, um die Werte und Professionalität Ihrer Kanzlei widerzuspiegeln – komplett betreut vom Design bis zur Distribution." },
        { title: "Premium Tech Event Solutions", desc: "Nachhaltige Markenaktivierung für den Tech-Sektor: Hochwertige rPET-Rucksäcke kombiniert mit zertifizierter, innovativer Hardware.", longDesc: "Machen Sie Eindruck auf Ihrem nächsten Event mit Swag, der wirklich genutzt wird. Wir kombinieren ökologisch verantwortungsvolle rPET-Rucksäcke mit erstklassigen, CE-zertifizierten kabellosen Schnellladegeräten. Unser Full-Service-Ansatz garantiert die direkte Lieferung an den Veranstaltungsort, wobei technische Perfektion und Nachhaltigkeit Hand in Hand gehen. Ideal für große internationale Tech-Konferenzen, bei denen Qualität der Standard ist." },
        { title: "National Brand Activation", desc: "Großserienproduktion und blitzschnelle 'Fast-Track'-Lieferung von Markenaktivierungs-Kits für landesweite Marketingkampagnen.", longDesc: "Maximieren Sie Ihre Marktdurchdringung mit hochwertigen Konsumgütern. Für diesen Fall lieferten wir Volumenprojekte aus maßgeschneiderten Frotteehandtüchern und Premium-Kühltaschen. Dank unserer strategischen Produktionszentren in der Türkei garantieren wir eine extrem kurze Time-to-Market, selbst bei Volumina von 10.000+ Einheiten. Wir managen die gesamte Kette: vom Pantone-Matching bis zur abschließenden Last-Mile-Lieferung an Ihre Distributoren." }
      ]
    },
    why: { title: "Die H&O Garantie", desc: "Warum uns große Player ihren Einkaufs- und Vertriebsprozess anvertrauen.",
      features: [
        { title: "Komplette Entlastung", desc: "Wir eliminieren Komplexität. Keine Sorgen über Zölle, Mängel oder Kommunikation. Ihr dedizierter SPOC." },
        { title: "Transparente Skaleneffekte", desc: "Keine Zwischenhändler. Unser Direkteinkauf garantiert Ihnen die besten Beschaffungsraten." },
        { title: "Europäische Konformität", desc: "Von CE-Zeichen für Elektronik bis hin zu BSCI-zertifizierter Kleidung garantieren wir 100%ige Sicherheit." },
        { title: "Geschwindigkeit (Near-Shoring)", desc: "Durch unsere türkischen Textilhubs sind wir in der Lage, bei Markttrends besonders schnell zu agieren." }
      ]
    },
    break: "Skalierbare Lösungen. Keine Kompromisse.",
    contact: { ready: "Bereit, Ihre Lieferkette zu vereinfachen?", title: "Heben Sie Ihr Corporate Gifting an.", desc: "Kontaktieren Sie unsere Account-Manager, um zu besprechen, wie H&O Worldwide Ihre Werbeeffizienz steigern kann.", quote: "Musterpaket Anfragen", call: "Kontaktiere Uns" },
    footer: { desc: "H&O Worldwide Solutions ist Ihr B2B-Partner für Custom Sourcing, ethische Produktion und komplette Merchandise-Logistik.", menu: "Navigation", offices: "Operative Hubs", hq: "Hauptsitz EU", privacy: "Datenschutz & Cookies", certs: "Konformitätsgarantie durch:" },
    cookie: { title: "Wir respektieren Ihre Privatsphäre", desc: "Wir verwenden essenzielle Cookies, damit unsere Seite funktioniert. Für Analysen nutzen wir optionale Cookies. Ablehnen setzt nur die notwendigen Cookies.", accept: "Alle Akzeptieren", reject: "Optionale Ablehnen" }
  },
  ES: {
    nav: { about: "Sobre Nosotros", services: "Servicios", why: "¿Por qué H&O?", cases: "Portafolio", quote: "Cotización" },
    hero: { spoc: "Tu Socio en Logística y Merchandising", p1: "H&O Worldwide ", p2: "optimiza", p3: " la visibilidad de tu marca.", desc: "Diseñamos y producimos soluciones de merchandising de alta gama mientras nos hacemos cargo de toda la cadena logística. Eficiencia para marcas premium.", quote: "Solicitar Cotización", samplePack: "Solicitar Paquete de Muestra", discover: "Descubrir los beneficios" },
    about: { title: "De la gran idea a un producto físico premium, sin estrés.", p1: "Las grandes organizaciones no necesitan un catálogo estándar. Buscan un socio estratégico que traduzca su identidad en productos tangibles.", p2: "A través de diseñadores expertos y potentes hubs de producción en Turquía y China, aseguramos soluciones estéticamente perfectas, escalables y acordes a las normas internacionales.", p3: "Tomamos el control total de la cadena. Tú diriges, nosotros hacemos el trabajo.", stat1: "100%", stat2: "Garantía de Cumplimiento" },
    services: { subtitle: "Nuestra Experiencia", title: "Soluciones de Adquisición End-to-End", viewAll: "Ver Todas las Opciones",
      s1: { title: "Producción a Medida", desc: "Totalmente adaptado a tu marca. Desde colores Pantone™ PMS exactos hasta materiales elegidos para posicionamiento premium." },
      s2: { title: "Hubs Estratégicos", desc: "Nuestras áreas clave: Turquía para textiles premium y near-shoring ultra rápido, China para gadgets tecnológicos y máximas economías de escala." },
      s3: { title: "Logística Integral", desc: "Compenetración es la clave. Después de la producción, gestionamos aduanas, almacenaje y entrega de última milla." },
      s4: { title: "Calidad y Ética", desc: "Certeza de cumplimiento absoluto. Fábricas conformes a las más altas normas de la UE (incluido CE) con auditorías sociales." }
    },
    nodes: { title: "Nodos de Adquisición Estratégicos", desc: "Elige el modelo logístico que se adapte a tu misión.",
      tr: { title: "Hub Turquía", features: ["Enfoque: Moda Sostenible y Textiles", "Transporte: Camión (Más ecológico)", "Plazo: 2-3 semanas", "Especialidad: Velocidad y Near-Shoring"] },
      cn: { title: "Hub China", features: ["Enfoque: Tecnología y Volumen", "Transporte: Marítimo y Aéreo", "Plazo: 8-12 semanas", "Especialidad: Escala y Eficiencia"] }
    },
    journey: { title: "El Camino H&O", desc: "Nuestra ejecución de logística integral de A-Z.",
      steps: [
        { title: "Diseño Conceptual", desc: "Traduciendo la identidad en premios corporativos." },
        { title: "Enrutamiento", desc: "Eligiendo el hub estratégico (Turquía vs China)." },
        { title: "Producción y Calidad", desc: "Fabricación ética y rigor en auditorías AQL." },
        { title: "Entrega Final", desc: "Trámites aduaneros y entrega directa al destino." }
      ]
    },
    cases: { subtitle: "Portafolio", title: "Soluciones de clase mundial, palpables", 
      items: [
        { title: "Executive Onboarding Experience", desc: "Lujosos paquetes 'Welcome-to-the-team' que traducen a la perfección la identidad corporativa en un momento tangible de aprecio para el nuevo talento.", longDesc: "Diseñados para socios de alto nivel que buscan una primera impresión inolvidable. Estas cajas ejecutivas contienen cuadernos premium estilo Moleskine, artículos de escritura de alta calidad y elementos tecnológicos esenciales personalizados como powerbanks a medida. Cada elemento se selecciona cuidadosamente para reflejar los valores y el profesionalismo de su firma, con una gestión total desde el diseño hasta la distribución." },
        { title: "Premium Tech Event Solutions", desc: "Activación de marca sostenible para el sector tecnológico: mochilas de rPET de alta calidad combinadas con hardware innovador certificado.", longDesc: "Cause impacto en su próximo evento con obsequios (swag) que realmente se utilicen. Combinamos mochilas de rPET ecológicamente responsables con cargadores rápidos inalámbricos de primer nivel y certificación CE. Nuestro enfoque de servicio completo garantiza la entrega directa en el lugar del evento, uniendo la perfección técnica con la sostenibilidad. Ideal para conferencias tecnológicas internacionales a gran escala donde la calidad es la norma." },
        { title: "National Brand Activation", desc: "Producción a gran escala y entrega ultrarrápida 'fast-track' de kits de activación de marca para campañas de marketing a nivel nacional.", longDesc: "Maximice su penetración en el mercado con productos de consumo de alta calidad. Para este caso, entregamos proyectos en gran volumen de toallas de tela de rizo personalizadas y bolsas refrigeradoras premium. Gracias a nuestros centros de producción estratégicos en Turquía, garantizamos un tiempo de comercialización extremadamente corto, incluso con volúmenes de más de 10.000 unidades. Gestionamos toda la cadena: desde la igualación de colores Pantone hasta la entrega final de última milla a sus distribuidores." }
      ]
    },
    why: { title: "La Promesa H&O", desc: "Por qué las principales marcas nos confían sus pedidos.",
      features: [
        { title: "Liberación Total a Tu Servicio", desc: "Eliminamos lo complejo. Sin preocupaciones sobre aduanas o defectos de comunicación. Tu socio SPOC dedicado." },
        { title: "Transparencia Económica", desc: "Sin intermediarios, asegurando que pagas tarifas directas y agrupadas desde fábrica." },
        { title: "Conformidad Europea, Siempre", desc: "Hacemos que tu compra sea 100% libre de riesgos desde marcaje CE de electrónicos a textiles BSCI." },
        { title: "Agilidad en Near-Shoring Mundial", desc: "Las tendencias cambian; nosotros nos adaptamos velozmente desde nuestros centros en Turquía para escalar." }
      ]
    },
    break: "Soluciones escalables. Cero compromisos.",
    contact: { ready: "¿Listo para optimizar tu cadena de suministro?", title: "Eleva los regalos de tu empresa.", desc: "Habla con nuestros Asesores Senior sobre cómo potenciar tu impacto promocional en toda el área logística.", quote: "Solicitar Muestra", call: "Contactar Ahora" },
    footer: { desc: "H&O Worldwide Solutions es tu aliado estratégico global en aprovisionamiento y producción B2B a la medida.", menu: "Navegación", offices: "Centros Operativos", hq: "Zonal de la Unión Europea", privacy: "Privacidad y Cookies", certs: "Cumplimiento certificado por:" },
    cookie: { title: "Respetamos tu privacidad", desc: "Utilizamos cookies estrictamente necesarias para operar y cookies opcionales para fines analíticos.", accept: "Aceptar Todo", reject: "Rechazar Opcionales" }
  }
};
