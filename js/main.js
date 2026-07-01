(() => {
  const productLabels = {
    fr: [
      ["Crème Été", "Sélection premium été haute qualité."],
      ["Crème Hiver", "Articles hiver premium triés."],
      ["Grade A - Été", "Vêtements Grade A été pour export."],
      ["Grade A - Hiver", "Sélection hiver Grade A."],
      ["Grade B - Été", "Articles Grade B été pour export."],
      ["Grade B - Hiver", "Produits hiver Grade B triés."],
      ["Original Camion 18T", "Original non trié, chargement complet."],
      ["Chaussures & Sacs", "Maroquinerie triée pour export."],
      ["Matière Recyclage", "Laine, jeans, coton recyclables."],
    ],
    en: [
      ["Summer Cream", "Premium high-quality summer selection."],
      ["Winter Cream", "Premium sorted winter items."],
      ["Grade A - Summer", "Grade A summer clothing for export."],
      ["Grade A - Winter", "Grade A winter selection."],
      ["Grade B - Summer", "Grade B summer items for export."],
      ["Grade B - Winter", "Sorted Grade B winter products."],
      ["Original 18T Truck", "Unsorted original, full truck load."],
      ["Shoes & Bags", "Sorted leather goods and shoes for export."],
      ["Recycling Material", "Recyclable wool, jeans and cotton."],
    ],
  };

  const detailProducts = {
    fr: {
      "card-1": {
        title: "Crème Été",
        desc: "Sélection premium été haute qualité, idéale pour l’export international.",
        extra: `
          <h3>Caractéristiques principales :</h3>
          <ul>
            <li>Qualité supérieure triée à la main</li>
            <li>Vêtements légers et colorés d’été</li>
            <li>Parfait pour les marchés européens et africains</li>
            <li>Conditionnement en balles compressées</li>
            <li>Grandes quantités disponibles toute l’année</li>
          </ul>
        `,
      },
      "card-2": {
        title: "Crème Hiver",
        desc: "Articles hiver premium triés avec soin pour l’export.",
        extra: `
          <h3>Points forts :</h3>
          <ul>
            <li>Pulls, vestes, manteaux et polaires</li>
            <li>Tri rigoureux par qualité et saison</li>
            <li>Excellente présentation et état</li>
            <li>Idéal pour les climats tempérés</li>
          </ul>
        `,
      },
      "card-3": {
        title: "Grade A - Été",
        desc: "Vêtements Grade A été de haute qualité destinés à l’export.",
        extra: `
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Qualité Grade A, très bon état</li>
            <li>Trié par catégorie et par saison</li>
            <li>Excellente réputation sur le marché international</li>
            <li>Chargements complets disponibles</li>
          </ul>
        `,
      },
      "card-4": {
        title: "Grade A - Hiver",
        desc: "Sélection hiver Grade A premium pour l’export.",
        extra: `
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Vêtements chauds de qualité Grade A</li>
            <li>Tri professionnel et contrôle qualité strict</li>
            <li>Adapté aux marchés exigeants</li>
          </ul>
        `,
      },
      "card-5": {
        title: "Grade B - Été",
        desc: "Articles Grade B été à excellent rapport qualité/prix.",
        extra: `
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Bon rapport qualité/prix</li>
            <li>Qualité correcte et propre</li>
            <li>Idéal pour les marchés émergents</li>
            <li>Volumes importants disponibles</li>
          </ul>
        `,
      },
      "card-6": {
        title: "Grade B - Hiver",
        desc: "Produits hiver Grade B triés pour l’export.",
        extra: `
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Vêtements d’hiver Grade B</li>
            <li>Trié et nettoyé avec soin</li>
            <li>Très bon rapport qualité/prix</li>
          </ul>
        `,
      },
      "card-7": {
        title: "Original Camion 18T",
        desc: "Lot original non trié en chargement complet de camion.",
        extra: `
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Chargement complet de 18 tonnes</li>
            <li>Produit original non trié</li>
            <li>Idéal pour recycleurs et grossistes</li>
            <li>Prix très compétitif</li>
          </ul>
        `,
      },
      "card-8": {
        title: "Chaussures & Sacs",
        desc: "Maroquinerie et chaussures triées pour l’export.",
        extra: `
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Chaussures triées par paire</li>
            <li>Sacs et articles de maroquinerie</li>
            <li>Qualité export sélectionnée</li>
            <li>Conditionnement en sacs de 25 kg</li>
          </ul>
        `,
      },
      "card-9": {
        title: "Matière Recyclage",
        desc: "Textiles recyclables : laine, jeans, coton, etc.",
        extra: `
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Matériaux destinés au recyclage</li>
            <li>Jeans, pulls, coton, laine, etc.</li>
            <li>Balles compressées</li>
            <li>Idéal pour les industries du recyclage textile</li>
          </ul>
        `,
      },
    },
    en: {
      "card-1": {
        title: "Summer Cream",
        desc: "Premium high-quality summer selection, ideal for international export.",
        extra: `
          <h3>Main features:</h3>
          <ul>
            <li>Superior quality, hand sorted</li>
            <li>Light and colorful summer clothing</li>
            <li>Suitable for European and African markets</li>
            <li>Packed in compressed bales</li>
            <li>Large quantities available all year round</li>
          </ul>
        `,
      },
      "card-2": {
        title: "Winter Cream",
        desc: "Premium winter items carefully sorted for export.",
        extra: `
          <h3>Highlights:</h3>
          <ul>
            <li>Sweaters, jackets, coats and fleece items</li>
            <li>Strict sorting by quality and season</li>
            <li>Excellent presentation and condition</li>
            <li>Ideal for temperate climates</li>
          </ul>
        `,
      },
      "card-3": {
        title: "Grade A - Summer",
        desc: "High-quality Grade A summer clothing for export.",
        extra: `
          <h3>Features:</h3>
          <ul>
            <li>Grade A quality, very good condition</li>
            <li>Sorted by category and season</li>
            <li>Strong reputation on international markets</li>
            <li>Full loads available</li>
          </ul>
        `,
      },
      "card-4": {
        title: "Grade A - Winter",
        desc: "Premium Grade A winter selection for export.",
        extra: `
          <h3>Features:</h3>
          <ul>
            <li>Warm Grade A quality clothing</li>
            <li>Professional sorting and strict quality control</li>
            <li>Suitable for demanding markets</li>
          </ul>
        `,
      },
      "card-5": {
        title: "Grade B - Summer",
        desc: "Grade B summer items with excellent value for money.",
        extra: `
          <h3>Features:</h3>
          <ul>
            <li>Good value for money</li>
            <li>Clean and correct quality</li>
            <li>Ideal for emerging markets</li>
            <li>Large volumes available</li>
          </ul>
        `,
      },
      "card-6": {
        title: "Grade B - Winter",
        desc: "Sorted Grade B winter products for export.",
        extra: `
          <h3>Features:</h3>
          <ul>
            <li>Grade B winter clothing</li>
            <li>Carefully sorted and cleaned</li>
            <li>Very good value for money</li>
          </ul>
        `,
      },
      "card-7": {
        title: "Original 18T Truck",
        desc: "Unsorted original lot in a full truck load.",
        extra: `
          <h3>Features:</h3>
          <ul>
            <li>Full 18-ton truck load</li>
            <li>Unsorted original product</li>
            <li>Ideal for recyclers and wholesalers</li>
            <li>Very competitive pricing</li>
          </ul>
        `,
      },
      "card-8": {
        title: "Shoes & Bags",
        desc: "Sorted shoes and leather goods for export.",
        extra: `
          <h3>Features:</h3>
          <ul>
            <li>Shoes sorted by pair</li>
            <li>Bags and leather goods</li>
            <li>Selected export quality</li>
            <li>Packed in 25 kg bags</li>
          </ul>
        `,
      },
      "card-9": {
        title: "Recycling Material",
        desc: "Recyclable textiles: wool, jeans, cotton and more.",
        extra: `
          <h3>Features:</h3>
          <ul>
            <li>Materials intended for textile recycling</li>
            <li>Jeans, sweaters, cotton, wool and more</li>
            <li>Compressed bales</li>
            <li>Ideal for textile recycling industries</li>
          </ul>
        `,
      },
    },
  };

  const text = {
    fr: {
      title: "AMIRATEX - Collecte • Tri • Export Textile International",
      description:
        "AMIRATEX est spécialisée dans la collecte, le tri et l’exportation internationale de textiles de seconde main.",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      nav: ["Accueil", "Société", "Produits", "Logistique", "Catalogues", "Galerie", "Contact"],
      heroSubtitle: "COLLECTE • TRI • EXPORT TEXTILE INTERNATIONAL",
      heroText:
        "Votre partenaire professionnel pour le tri, la valorisation et l’exportation de vêtements et textiles de seconde main.",
      heroButtons: ["Découvrir nos produits", "Télécharger nos catalogues"],
      aboutTitle: "À PROPOS D'AMIRATEX",
      about1:
        "<strong>AMIRATEX</strong> est spécialisée dans la collecte, le tri et l'exportation de vêtements et textiles de seconde main destinés aux marchés internationaux. Nous proposons des solutions fiables et professionnelles répondant aux besoins des grossistes, importateurs, distributeurs et revendeurs.",
      about2:
        "Grâce à un réseau solide de partenaires et de fournisseurs, nous sélectionnons des textiles de qualité répondant aux exigences des grossistes, importateurs et professionnels du secteur.",
      aboutPresence: "Notre présence en Europe",
      aboutPresenceText:
        "AMIRATEX s'appuie sur un vaste réseau de collecte et d'approvisionnement en textiles originaux dans plusieurs pays européens :",
      aboutCountries: "France • Belgique • Allemagne • Pays-Bas • Espagne • Portugal",
      aboutCommitment: "Notre engagement",
      aboutCommitmentText:
        "Nous mettons l'accent sur la qualité, la transparence, la réactivité et la satisfaction de nos clients afin de construire des partenariats durables partout dans le monde.",
      aboutStrong:
        "<strong>AMIRATEX, votre partenaire de confiance pour un approvisionnement textile durable, compétitif et de qualité.</strong>",
      learnMore: "En savoir plus",
      servicesBadge: "AMIRATEX EXPERTISE",
      servicesTitle: "SOLUTIONS TEXTILES<br />& LOGISTIQUES INTERNATIONALES",
      servicesIntro:
        "Des solutions professionnelles haut de gamme pour la collecte, le tri, le conditionnement et l’export textile international.",
      services: [
        ["Collecte", "Collecte de textiles à partir de conteneurs implantés dans différentes communes en France ainsi qu’auprès de sources partenaires professionnelles."],
        ["Tri Rigoureux", "Classification professionnelle des textiles selon les catégories, qualités et standards export."],
        ["Conditionnement", "Préparation export professionnelle, mise en balles et optimisation logistique."],
        ["Export International", "Expéditions internationales fiables, rapides et sécurisées vers plusieurs pays."],
      ],
      processTitle: "UN PROCESSUS MAÎTRISÉ",
      processIntro:
        "De la collecte à l’expédition internationale, chaque étape est contrôlée avec rigueur.",
      steps: [
        ["1. Collecte", "Collecte organisée auprès de sources partenaires."],
        ["2. Tri", "Tri rigoureux selon les standards qualité."],
        ["3. Conditionnement", "Préparation des balles pour l’export."],
        ["4. Expédition", "Logistique internationale sécurisée."],
      ],
      logisticsTitle: "Solution Logistique Internationale",
      logisticsText:
        "AMIRATEX collabore avec des transporteurs internationaux afin de garantir des expéditions rapides et fiables. Nous nous occupons de toutes les démarches de transport : chargement, documentation, logistique export et suivi des expéditions jusqu’à destination.",
      logisticsButtons: ["Demander une expédition", "Télécharger nos catalogues"],
      productsBadge: "AMIRATEX PRODUITS",
      productsTitle: "NOS PRODUITS TEXTILES DESTINÉS À L’EXPORT",
      productsIntro:
        "Découvrez notre sélection professionnelle de textiles et vêtements destinés aux marchés internationaux.",
      sliderHint:
        "<strong>Sélectionnez un produit</strong> pour consulter ses détails et télécharger son catalogue spécifique.",
      catalogComplete: "Télécharger le catalogue complet",
      download: "Télécharger",
      loadMore: "Voir plus",
      galleryTitle: "GALERIE",
      galleryIntro: "Découvrez nos installations et activités.",
      statsTitle: "AMIRATEX EN CHIFFRES",
      stats: ["Tonnes traitées", "Pays desservis", "Partenaires professionnels", "Conteneurs exportés"],
      contactTitle: "CONTACTEZ-NOUS",
      contactIntro: "Notre équipe est disponible pour répondre à vos demandes.",
      form: {
        name: "Nom *",
        company: "Société",
        email: "Email *",
        phone: "Téléphone / WhatsApp",
        message: "Message *",
        namePlaceholder: "Nom",
        companyPlaceholder: "Société",
        emailPlaceholder: "Email",
        phonePlaceholder: "Téléphone / WhatsApp",
        messagePlaceholder: "Votre message",
        submit: "Envoyer",
      },
      footerBaseline: "Collecte • Tri • Export Textile International.",
      social: "Réseaux sociaux",
      copyright: "© 2026 AMIRATEX — Tous droits réservés.",
      detailDownload: "Télécharger le catalogue",
      imageExpanded: "Image agrandie",
      previousImage: "Image précédente",
      nextImage: "Image suivante",
      close: "Fermer",
    },
    en: {
      title: "AMIRATEX - Textile Collection • Sorting • International Export",
      description:
        "AMIRATEX specializes in the collection, sorting and international export of second-hand textiles.",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      nav: ["Home", "Company", "Products", "Logistics", "Catalogues", "Gallery", "Contact"],
      heroSubtitle: "TEXTILE COLLECTION • SORTING • INTERNATIONAL EXPORT",
      heroText:
        "Your professional partner for sorting, valorizing and exporting second-hand clothing and textiles.",
      heroButtons: ["Discover our products", "Download our catalogues"],
      aboutTitle: "ABOUT AMIRATEX",
      about1:
        "<strong>AMIRATEX</strong> specializes in the collection, sorting and export of second-hand clothing and textiles for international markets. We provide reliable, professional solutions for wholesalers, importers, distributors and resellers.",
      about2:
        "Thanks to a strong network of partners and suppliers, we select quality textiles that meet the requirements of wholesalers, importers and textile professionals.",
      aboutPresence: "Our presence in Europe",
      aboutPresenceText:
        "AMIRATEX relies on a wide collection and sourcing network for original textiles across several European countries:",
      aboutCountries: "France • Belgium • Germany • Netherlands • Spain • Portugal",
      aboutCommitment: "Our commitment",
      aboutCommitmentText:
        "We focus on quality, transparency, responsiveness and customer satisfaction to build long-term partnerships worldwide.",
      aboutStrong:
        "<strong>AMIRATEX, your trusted partner for sustainable, competitive and high-quality textile supply.</strong>",
      learnMore: "Learn more",
      servicesBadge: "AMIRATEX EXPERTISE",
      servicesTitle: "TEXTILE & INTERNATIONAL<br />LOGISTICS SOLUTIONS",
      servicesIntro:
        "High-end professional solutions for textile collection, sorting, packing and international export.",
      services: [
        ["Collection", "Textile collection from containers installed in different towns in France and from professional partner sources."],
        ["Strict Sorting", "Professional classification of textiles by category, quality and export standards."],
        ["Packing", "Professional export preparation, baling and logistics optimization."],
        ["International Export", "Reliable, fast and secure international shipments to multiple countries."],
      ],
      processTitle: "A CONTROLLED PROCESS",
      processIntro:
        "From collection to international shipment, every step is carefully controlled.",
      steps: [
        ["1. Collection", "Organized collection from partner sources."],
        ["2. Sorting", "Strict sorting according to quality standards."],
        ["3. Packing", "Preparation of bales for export."],
        ["4. Shipping", "Secure international logistics."],
      ],
      logisticsTitle: "International Logistics Solution",
      logisticsText:
        "AMIRATEX works with international carriers to ensure fast and reliable shipments. We handle transport operations: loading, documentation, export logistics and shipment tracking through to destination.",
      logisticsButtons: ["Request a shipment", "Download our catalogues"],
      productsBadge: "AMIRATEX PRODUCTS",
      productsTitle: "TEXTILE PRODUCTS FOR EXPORT",
      productsIntro:
        "Discover our professional selection of textiles and clothing for international markets.",
      sliderHint:
        "<strong>Select a product</strong> to view details and download its specific catalogue.",
      catalogComplete: "Download the full catalogue",
      download: "Download",
      loadMore: "View more",
      galleryTitle: "GALLERY",
      galleryIntro: "Discover our facilities and operations.",
      statsTitle: "AMIRATEX IN NUMBERS",
      stats: ["Tons processed", "Countries served", "Professional partners", "Containers exported"],
      contactTitle: "CONTACT US",
      contactIntro: "Our team is available to answer your enquiries.",
      form: {
        name: "Name *",
        company: "Company",
        email: "Email *",
        phone: "Phone / WhatsApp",
        message: "Message *",
        namePlaceholder: "Name",
        companyPlaceholder: "Company",
        emailPlaceholder: "Email",
        phonePlaceholder: "Phone / WhatsApp",
        messagePlaceholder: "Your message",
        submit: "Send",
      },
      footerBaseline: "Textile Collection • Sorting • International Export.",
      social: "Social media",
      copyright: "© 2026 AMIRATEX — All rights reserved.",
      detailDownload: "Download catalogue",
      imageExpanded: "Enlarged image",
      previousImage: "Previous image",
      nextImage: "Next image",
      close: "Close",
    },
  };

  let currentLanguage = localStorage.getItem("amiratex_lang") || "fr";

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setHtml(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  }

  function setAll(selector, values, mode = "text") {
    document.querySelectorAll(selector).forEach((element, index) => {
      const value = values[index % values.length];
      if (value === undefined) return;
      if (mode === "html") element.innerHTML = value;
      else element.textContent = value;
    });
  }

  function setAttr(selector, attr, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attr, value);
  }

  function applyProductLabels(lang) {
    const products = productLabels[lang];
    document.querySelectorAll(".product-card").forEach((card, index) => {
      const data = products[index];
      if (!data) return;
      setText(`#${card.id} .product-content h3`, data[0]);
      setText(`#${card.id} .product-content p`, data[1]);
      const img = card.querySelector("img");
      if (img) img.alt = data[0];
    });
    document.querySelectorAll(".mini-product").forEach((item, index) => {
      const data = products[index % products.length];
      const label = item.querySelector("span");
      const img = item.querySelector("img");
      if (label) label.textContent = data[0];
      if (img) img.alt = data[0];
    });
  }

  function applyLanguage(lang) {
    const t = text[lang] || text.fr;
    currentLanguage = lang;
    localStorage.setItem("amiratex_lang", lang);
    document.documentElement.lang = lang;
    document.title = t.title;
    setAttr('meta[name="description"]', "content", t.description);

    setText(".skip-link", lang === "fr" ? "Aller au contenu" : "Skip to content");
    setAll(".nav-links a", t.nav);
    setText(".hero h2", t.heroSubtitle);
    setText(".hero p", t.heroText);
    setAll(".hero .buttons a", t.heroButtons);

    setText(".about-text h2", t.aboutTitle);
    setHtml(".about-text p:nth-of-type(1)", t.about1);
    setText(".about-text p:nth-of-type(2)", t.about2);
    setText(".about-text h3:nth-of-type(1)", t.aboutPresence);
    setText(".about-text p:nth-of-type(3)", t.aboutPresenceText);
    setText(".about-text p:nth-of-type(4)", t.aboutCountries);
    setText(".about-text h3:nth-of-type(2)", t.aboutCommitment);
    setText(".about-text p:nth-of-type(5)", t.aboutCommitmentText);
    setHtml(".about-text p:nth-of-type(6)", t.aboutStrong);
    setText(".about-text .btn", t.learnMore);

    setText(".services-section > .container > .section-title .section-badge", t.servicesBadge);
    setHtml(".services-section > .container > .section-title h2", t.servicesTitle);
    setText(".services-section > .container > .section-title p", t.servicesIntro);
    document.querySelectorAll(".service-card").forEach((card, index) => {
      const data = t.services[index];
      if (!data) return;
      const title = card.querySelector("h3");
      const paragraph = card.querySelector("p");
      if (title) title.textContent = data[0];
      if (paragraph) paragraph.textContent = data[1];
    });
    setText(".process-panel .section-title h2", t.processTitle);
    setText(".process-panel .section-title p", t.processIntro);
    document.querySelectorAll(".process-steps .step").forEach((step, index) => {
      const data = t.steps[index];
      if (!data) return;
      const title = step.querySelector("h3");
      const paragraph = step.querySelector("p");
      if (title) title.textContent = data[0];
      if (paragraph) paragraph.textContent = data[1];
    });
    setText(".combined-logistic h3", t.logisticsTitle);
    setText(".combined-logistic .logistic-text", t.logisticsText);
    setAll(".combined-logistic .btn-group a", t.logisticsButtons);

    setText("#nos-produits .section-badge", t.productsBadge);
    setText("#nos-produits .section-title h2", t.productsTitle);
    setText("#nos-produits .section-title p", t.productsIntro);
    setHtml(".slider-hint", t.sliderHint);
    setText(".catalog-download-wrap .btn", t.catalogComplete);
    setAll(".download-btn", Array(9).fill(t.download));
    setText("#loadMoreBtn", t.loadMore);
    applyProductLabels(lang);

    setText("#gallery .section-title h2", t.galleryTitle);
    setText("#gallery .section-title p", t.galleryIntro);
    setText(".stats .section-title h2", t.statsTitle);
    setAll(".stat-box p", t.stats);

    setText(".contact .section-title h2", t.contactTitle);
    setText(".contact .section-title p", t.contactIntro);
    setText('label[for="name"]', t.form.name);
    setText('label[for="company"]', t.form.company);
    setText('label[for="email"]', t.form.email);
    setText('label[for="phone"]', t.form.phone);
    setText('label[for="message"]', t.form.message);
    setAttr("#name", "placeholder", t.form.namePlaceholder);
    setAttr("#company", "placeholder", t.form.companyPlaceholder);
    setAttr("#email", "placeholder", t.form.emailPlaceholder);
    setAttr("#phone", "placeholder", t.form.phonePlaceholder);
    setAttr("#message", "placeholder", t.form.messagePlaceholder);
    setText("#contact-submit .btn-text", t.form.submit);

    setText(".footer-col:nth-child(1) p", t.footerBaseline);
    setText(".footer-col:nth-child(2) h3", t.nav[0] === "Home" ? "Navigation" : "Navigation");
    setAll(".footer-col:nth-child(2) a", [t.nav[0], t.nav[1], t.nav[2], t.nav[4], t.nav[6]]);
    setText(".footer-col:nth-child(4) h3", t.social);
    setText(".footer-bottom", t.copyright);

    setText("#detail-download", t.detailDownload);
    setAttr(".detail-close", "aria-label", t.close);
    setAttr(".close-lightbox", "aria-label", t.close);
    setAttr("#lightbox", "aria-label", t.imageExpanded);
    setAttr("#lightbox-img", "alt", t.imageExpanded);
    setAttr("#prev", "aria-label", t.previousImage);
    setAttr("#next", "aria-label", t.nextImage);

    const menuBtn = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav-links");
    if (menuBtn) {
      menuBtn.textContent = nav && nav.classList.contains("active") ? "×" : "☰";
      menuBtn.setAttribute(
        "aria-label",
        nav && nav.classList.contains("active") ? t.menuClose : t.menuOpen,
      );
    }

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === lang);
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });

    const openDetail = document.getElementById("product-detail-view");
    if (openDetail && openDetail.style.display === "block") {
      const currentTitle = document.getElementById("detail-title")?.textContent;
      const entry = Object.entries(detailProducts[lang]).find(([, value]) => value.title === currentTitle);
      if (entry) translateProductDetail(entry[0]);
    }
  }

  function translateProductDetail(cardId) {
    const data = detailProducts[currentLanguage]?.[cardId];
    if (!data) return;
    setText("#detail-title", data.title);
    setText("#detail-desc", data.desc);
    setHtml("#detail-content-extra", data.extra);
    setText("#detail-download", text[currentLanguage].detailDownload);
  }

  window.amiratexText = (key) => text[currentLanguage]?.[key] || text.fr[key] || key;
  window.amiratexCurrentLanguage = () => currentLanguage;
  window.applyAmiratexLanguage = applyLanguage;
  window.translateProductDetail = translateProductDetail;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.lang || "fr"));
    });
    applyLanguage(currentLanguage);
  });
})();

document.addEventListener("DOMContentLoaded", () => {
        /* ========================= */
        /* HERO SLIDER */
        /* ========================= */
        const slides = document.querySelectorAll(".hero-slide");
        let currentSlide = 0;

        function showSlide(index) {
          if (!slides.length) return;
          slides.forEach((slide) => slide.classList.remove("active"));
          slides[index].classList.add("active");
        }

        function nextSlide() {
          if (!slides.length) return;
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }

        function prevSlide() {
          if (!slides.length) return;
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
        }

        window.nextSlide = nextSlide;
        window.prevSlide = prevSlide;

        let slideInterval = null;
        let initialTimer = null;
        let clickPaused = false;
        const INITIAL_DELAY = 5000;
        const AUTO_DELAY = 4000;

        // Lance le défilement automatique uniquement s'il y a plusieurs slides.
        function startAutoSlide() {
          if (slides.length > 1 && !slideInterval) {
            slideInterval = setInterval(nextSlide, AUTO_DELAY);
          }
        }

        function stopAutoSlide() {
          if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
          }
        }

        // Attend quelques secondes avant de démarrer le slider automatiquement.
        function scheduleInitialStart() {
          if (
            slides.length > 1 &&
            !slideInterval &&
            !clickPaused &&
            !initialTimer
          ) {
            initialTimer = setTimeout(() => {
              startAutoSlide();
              initialTimer = null;
            }, INITIAL_DELAY);
          }
        }

        // Un clic sur le hero met en pause ou relance le slider.
        function toggleSlidePause() {
          if (slideInterval) {
            stopAutoSlide();
            clickPaused = true;
            if (initialTimer) clearTimeout(initialTimer);
            initialTimer = null;
          } else {
            clickPaused = false;
            if (initialTimer) clearTimeout(initialTimer);
            initialTimer = null;
            startAutoSlide();
          }
        }

        scheduleInitialStart();

        const heroSection = document.querySelector(".hero");
        if (heroSection) {
          heroSection.addEventListener("click", toggleSlidePause);
          heroSection.title =
            "Cliquer pour mettre en pause / reprendre le slider";
        }

        document
          .querySelectorAll(".slider-buttons button")
          .forEach((button) => {
            // Évite qu'un clic sur les flèches déclenche aussi la pause du hero.
            button.addEventListener("click", (e) => e.stopPropagation());
          });

        /* ========================= */
        /* LIGHTBOX GALLERY */
        /* ========================= */
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const closeLightbox = document.querySelector(".close-lightbox");

        const images = document.querySelectorAll(
          ".gallery-grid img, .service-card img, .product-card img, .about-images img",
        );

        let currentSectionImages = [];
        let currentIndex = 0;

        // Récupère seulement les images de la section cliquée.
        function getSectionImages(clickedImage) {
          const section = clickedImage.closest("section");
          if (!section) return [];
          return Array.from(section.querySelectorAll("img")).filter((img) =>
            img.matches(
              ".gallery-grid img, .service-card img, .product-card img, .about-images img",
            ),
          );
        }

        // Ferme la lightbox et rend le scroll de la page au visiteur.
        function closeCurrentLightbox() {
          if (!lightbox) return;
          lightbox.style.display = "none";
          document.body.style.overflow = "";
        }

        // Ouvre l'image en grand et bloque le scroll derrière la lightbox.
        function openLightbox(sectionImages, index) {
          if (!lightbox || !lightboxImg || sectionImages.length === 0) return;
          currentSectionImages = sectionImages;
          currentIndex = index;
          lightbox.style.display = "flex";
          document.body.style.overflow = "hidden";
          lightboxImg.src = currentSectionImages[currentIndex].src;
          lightboxImg.alt =
            currentSectionImages[currentIndex].alt || "Image agrandie";
        }

        function nextImage() {
          if (!currentSectionImages.length) return;
          currentIndex = (currentIndex + 1) % currentSectionImages.length;
          lightboxImg.src = currentSectionImages[currentIndex].src;
          lightboxImg.alt =
            currentSectionImages[currentIndex].alt || "Image agrandie";
        }

        function prevImage() {
          if (!currentSectionImages.length) return;
          currentIndex =
            (currentIndex - 1 + currentSectionImages.length) %
            currentSectionImages.length;
          lightboxImg.src = currentSectionImages[currentIndex].src;
          lightboxImg.alt =
            currentSectionImages[currentIndex].alt || "Image agrandie";
        }

        images.forEach((img) => {
          img.style.cursor = "zoom-in";
          img.addEventListener("click", () => {
            const sectionImages = getSectionImages(img);
            const index = sectionImages.indexOf(img);
            openLightbox(sectionImages, index);
          });
        });

        if (closeLightbox) {
          closeLightbox.addEventListener("click", closeCurrentLightbox);
        }

        if (lightbox) {
          lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeCurrentLightbox();
          });
        }

        document.addEventListener("keydown", (e) => {
          if (!lightbox || lightbox.style.display !== "flex") return;
          if (e.key === "ArrowRight") nextImage();
          if (e.key === "ArrowLeft") prevImage();
          if (e.key === "Escape") closeCurrentLightbox();
        });

        const nextBtn = document.getElementById("next");
        const prevBtn = document.getElementById("prev");
        if (nextBtn) {
          nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            nextImage();
          });
        }
        if (prevBtn) {
          prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            prevImage();
          });
        }
      });

// Bouton "Voir plus" : révèle progressivement les produits masqués.
      (function () {
        const hiddenCards = document.querySelectorAll(".product-card.hidden");
        const btnMore = document.getElementById("loadMoreBtn");

        if (!btnMore || hiddenCards.length === 0) return;

        let currentItems = 0;
        const itemsToShow = 4;

        btnMore.addEventListener("click", function () {
          const nextLimit = currentItems + itemsToShow;

          // Affiche 4 nouvelles cartes à chaque clic.
          for (let i = currentItems; i < nextLimit; i++) {
            const card = hiddenCards[i];
            if (card) {
              card.classList.remove("hidden");
              card.classList.add("revealed");
              card.addEventListener(
                "animationend",
                () => card.classList.remove("revealed"),
                { once: true },
              );
            }
          }
          currentItems = nextLimit;

          // Cache le bouton quand tous les produits sont visibles.
          if (currentItems >= hiddenCards.length) {
            btnMore.style.display = "none";
          } else {
            btnMore.textContent = "Voir plus";
          }
        });
      })();

(function () {
        if (typeof emailjs === "undefined") return;

        emailjs.init({ publicKey: "5d5VenwMkyf6Wq4tz" });

        const contactForm = document.getElementById("contact-form");
        if (!contactForm) return;

        const formMessage = document.getElementById("form-message");
        const submitBtn = document.getElementById("contact-submit");
        const spinner = document.getElementById("form-spinner");

        const COOLDOWN_MIN = 5;
        const COOLDOWN_KEY = "amiratex_last_submit";

        // Efface les anciens messages d'erreur avant une nouvelle validation.
        function clearErrors() {
          [
            "error-name",
            "error-company",
            "error-email",
            "error-phone",
            "error-message",
          ].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.textContent = "";
          });
          if (formMessage) {
            formMessage.textContent = "";
            formMessage.className = "";
          }
        }

        // Empêche plusieurs envois trop rapprochés depuis le même navigateur.
        function isInCooldown() {
          try {
            const last = localStorage.getItem(COOLDOWN_KEY);
            if (!last) return false;
            return Date.now() - parseInt(last, 10) < COOLDOWN_MIN * 60 * 1000;
          } catch (e) {
            return false;
          }
        }

        // Vérifie les champs obligatoires, l'email, le téléphone et le honeypot anti-spam.
        function validate() {
          clearErrors();
          let valid = true;
          const name = contactForm.querySelector("#name");
          const email = contactForm.querySelector("#email");
          const message = contactForm.querySelector("#message");
          const phone = contactForm.querySelector("#phone");
          const website = contactForm.querySelector("#website");

          if (website && website.value.trim() !== "") return false;

          if (!name || name.value.trim().length < 2) {
            document.getElementById("error-name").textContent =
              window.amiratexCurrentLanguage?.() === "en"
                ? "Please enter your name."
                : "Veuillez indiquer votre nom.";
            valid = false;
          }

          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            document.getElementById("error-email").textContent =
              window.amiratexCurrentLanguage?.() === "en"
                ? "Invalid email address."
                : "Email invalide.";
            valid = false;
          }

          if (!message || message.value.trim().length < 5) {
            document.getElementById("error-message").textContent =
              window.amiratexCurrentLanguage?.() === "en"
                ? "Message is too short."
                : "Message trop court.";
            valid = false;
          }

          if (phone && phone.value.trim().length > 0) {
            if (!/^[+0-9 ()-]{6,20}$/.test(phone.value)) {
              document.getElementById("error-phone").textContent =
                window.amiratexCurrentLanguage?.() === "en"
                  ? "Invalid phone number."
                  : "Téléphone invalide.";
              valid = false;
            }
          }

          return valid;
        }

        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          clearErrors();

          if (isInCooldown()) {
            const remain = Math.ceil(
              (COOLDOWN_MIN * 60 * 1000 -
                (Date.now() -
                  parseInt(localStorage.getItem(COOLDOWN_KEY), 10))) /
                1000,
            );
            if (formMessage) {
              formMessage.textContent =
                window.amiratexCurrentLanguage?.() === "en"
                  ? "You recently sent a message. Please try again later."
                  : "Vous avez récemment envoyé un message. Réessayez plus tard.";
              formMessage.className = "form-error";
            }
            return;
          }

          if (!validate()) {
            if (formMessage) {
              formMessage.textContent =
                window.amiratexCurrentLanguage?.() === "en"
                  ? "Please correct the errors."
                  : "Veuillez corriger les erreurs.";
              formMessage.className = "form-error";
            }
            return;
          }

          if (submitBtn) submitBtn.disabled = true;
          if (spinner) spinner.style.display = "inline-block";

          // Envoi du formulaire avec EmailJS, sans backend côté serveur.
          emailjs
            .sendForm("service_kcwe5xq", "template_cntri8v", this)
            .then(() => {
              if (formMessage) {
                formMessage.textContent =
                  window.amiratexCurrentLanguage?.() === "en"
                    ? "Message sent successfully."
                    : "Message envoyé avec succès.";
                formMessage.className = "form-success";
              }
              contactForm.reset();
              localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
            })
            .catch((error) => {
              if (formMessage) {
                formMessage.textContent =
                  window.amiratexCurrentLanguage?.() === "en"
                    ? "Error while sending. Please try again."
                    : "Erreur lors de l'envoi. Veuillez réessayer.";
                formMessage.className = "form-error";
              }
              console.error(error);
            })
            .finally(() => {
              if (submitBtn) submitBtn.disabled = false;
              if (spinner) spinner.style.display = "none";
              setTimeout(() => {
                if (formMessage) formMessage.textContent = "";
              }, 8000);
            });
        });
      })();

// Optimisation : les images se chargent seulement quand elles approchent de l'écran.
      document.addEventListener("DOMContentLoaded", function () {
        try {
          document.querySelectorAll("img").forEach((img) => {
            if (!img.hasAttribute("loading"))
              img.setAttribute("loading", "lazy");
            if (!img.hasAttribute("decoding"))
              img.setAttribute("decoding", "async");
          });
          document.querySelectorAll("video").forEach((v) => {
            if (!v.hasAttribute("preload"))
              v.setAttribute("preload", "metadata");
          });
        } catch (e) {
          console.warn("Lazy init failed", e);
        }
      });
      /* ========================= */
      /* MENU BURGER MOBILE */
      /* ========================= */

      const menuBtn = document.getElementById("mobile-menu");
      const nav = document.getElementById("nav-links");

      if (menuBtn && nav) {
        // Ferme le menu mobile et remet l'icône burger.
        function closeMenu() {
          nav.classList.remove("active");
          menuBtn.textContent = "\u2630";
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.setAttribute("aria-label", "Ouvrir le menu");
        }

        // Ouvre le menu mobile et transforme l'icône en croix.
        function openMenu() {
          nav.classList.add("active");
          menuBtn.textContent = "\u00d7";
          menuBtn.setAttribute("aria-expanded", "true");
          menuBtn.setAttribute("aria-label", "Fermer le menu");
        }

        menuBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (nav.classList.contains("active")) {
            closeMenu();
          } else {
            openMenu();
          }
        });

        // Ferme le menu après le clic sur un lien de navigation.
        document.querySelectorAll("#nav-links a").forEach((link) => {
          link.addEventListener("click", () => {
            closeMenu();
          });
        });

        // Ferme le menu si l'utilisateur clique en dehors.
        document.addEventListener("click", (e) => {
          if (
            nav.classList.contains("active") &&
            !nav.contains(e.target) &&
            !menuBtn.contains(e.target)
          ) {
            closeMenu();
          }
        });

        // Ferme aussi le menu avec la touche Échap.
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && nav.classList.contains("active")) {
            closeMenu();
          }
        });

        // Sur retour desktop/tablette, on repart avec un menu fermé.
        window.addEventListener("resize", () => {
          if (window.innerWidth > 768) {
            closeMenu();
          }
        });
      }

document.querySelectorAll(".products-slider a").forEach((link) => {
        link.addEventListener("click", function (e) {
          const targetId = this.getAttribute("href"); // Récupère "#card-X"
          const targetCard = document.querySelector(targetId);

          if (targetCard) {
            // 1. Si la carte est cachée, on l'affiche
            if (targetCard.classList.contains("hidden")) {
              targetCard.classList.remove("hidden");
            }

            // 2.  bouton "voir plus" qui gère l'affichage,
            //  masquer le bouton si on a cliqué sur un produit caché
            const hiddenCards = document.querySelectorAll(
              ".product-card.hidden",
            );
            if (hiddenCards.length === 0) {
              document.querySelector(".load-more-container").style.display =
                "none";
            }
          }
        });
      });

document.addEventListener("DOMContentLoaded", function () {
  const detailView = document.getElementById("product-detail-view");
  const galleryTrack = document.getElementById("gallery-track-main");
  const galleryDots = document.getElementById("gallery-dots-main");
  const detailTitle = document.getElementById("detail-title");
  const detailDesc = document.getElementById("detail-desc");
  const detailExtra = document.getElementById("detail-content-extra");
  const detailDownload = document.getElementById("detail-download");
  const detailClose = document.querySelector(".detail-close");

  const productData = {
    "card-1": {
      title: "Crème Été",
      desc: "Sélection premium été haute qualité, idéale pour l’export international.",
      extra: `
        <h3>Caractéristiques principales :</h3>
        <ul>
          <li>Qualité supérieure triée à la main</li>
          <li>Vêtements légers et colorés d’été</li>
          <li>Parfait pour les marchés européens et africains</li>
          <li>Conditionnement en balles compressées</li>
          <li>Grandes quantités disponibles toute l’année</li>
        </ul>
      `,
      download: "catalogues/CATALOGUE_CREME_ETE.pdf",
      gallery: [
        {type: "img", src: "images/creme.webp"},
        {type: "img", src: "images/tri-service.webp"},
        {type: "img", src: "images/tri1.webp"},
        {type: "img", src: "images/tri1.webp"},
        {type: "video", src: "videos/creme-tri.mp4"}
      ]
    },
    "card-2": {
      title: "Crème Hiver",
      desc: "Articles hiver premium triés avec soin pour l’export.",
      extra: `
        <h3>Points forts :</h3>
        <ul>
          <li>Pulls, vestes, manteaux et polaires</li>
          <li>Tri rigoureux par qualité et saison</li>
          <li>Excellente présentation et état</li>
          <li>Idéal pour les climats tempérés</li>
        </ul>
      `,
      download: "catalogues/CATALOGUES_CREME_GRADEB.pdf",
      gallery: [
        {type: "img", src: "images/balles1-.webp"},
        {type: "img", src: "images/balles_hiver.webp"}
      ]
    },
    "card-3": {
      title: "Grade A - Été",
      desc: "Vêtements Grade A été de haute qualité destinés à l’export.",
      extra: `
        <h3>Caractéristiques :</h3>
        <ul>
          <li>Qualité Grade A (très bon état)</li>
          <li>Trié par catégorie et par saison</li>
          <li>Excellente réputation sur le marché international</li>
          <li>Chargements complets disponibles</li>
        </ul>
      `,
      download: "catalogues/catalogue AMIRATEX.pdf",
      gallery: [{type: "img", src: "images/tri-service.webp"}]
    },
    "card-4": {
      title: "Grade A - Hiver",
      desc: "Sélection hiver Grade A premium pour l’export.",
      extra: `
        <h3>Caractéristiques :</h3>
        <ul>
          <li>Vêtements chauds de qualité Grade A</li>
          <li>Tri professionnel et contrôle qualité strict</li>
          <li>Adapté aux marchés exigeants</li>
        </ul>
      `,
      download: "catalogues/catalogue AMIRATEX.pdf",
      gallery: [{type: "img", src: "images/balles_stock.webp"}]
    },
    "card-5": {
      title: "Grade B - Été",
      desc: "Articles Grade B été à excellent rapport qualité/prix.",
      extra: `
        <h3>Caractéristiques :</h3>
        <ul>
          <li>Bon rapport qualité/prix</li>
          <li>Qualité correcte et propre</li>
          <li>Idéal pour les marchés émergents</li>
          <li>Volumes importants disponibles</li>
        </ul>
      `,
      download: "catalogues/CATALOGUE_GRADE_B_ETE_GLOBAL.pdf",
      gallery: [{type: "img", src: "images/balles2.webp"}]
    },
    "card-6": {
      title: "Grade B - Hiver",
      desc: "Produits hiver Grade B triés pour l’export.",
      extra: `
        <h3>Caractéristiques :</h3>
        <ul>
          <li>Vêtements d’hiver Grade B</li>
          <li>Trié et nettoyé avec soin</li>
          <li>Très bon rapport qualité/prix</li>
        </ul>
      `,
      download: "catalogues/CATALOGUES_CREME_GRADEB.pdf",
      gallery: [{type: "img", src: "images/balles4.webp"}]
    },
    "card-7": {
      title: "Original Camion 18T",
      desc: "Lot original non trié en chargement complet de camion.",
      extra: `
        <h3>Caractéristiques :</h3>
        <ul>
          <li>Chargement complet de 18 tonnes</li>
          <li>Produit original non trié</li>
          <li>Idéal pour recycleurs et grossistes</li>
          <li>Prix très compétitif</li>
        </ul>
      `,
      download: "catalogues/catalogue_recyclage_original.pdf",
      gallery: [{type: "img", src: "images/textile_original.webp"}]
    },
    "card-8": {
      title: "Chaussures & Sacs",
      desc: "Maroquinerie et chaussures triées pour l’export.",
      extra: `
        <h3>Caractéristiques :</h3>
        <ul>
          <li>Chaussures triées par paire</li>
          <li>Sacs et articles de maroquinerie</li>
          <li>Qualité export sélectionnée</li>
          <li>Conditionnement en sacs de 25 kg</li>
        </ul>
      `,
      download: "catalogues/catalogue_general.pdf",
      gallery: [{type: "img", src: "images/Chaussures-Triées-Sac-de-25-kg.webp"}]
    },
    "card-9": {
      title: "Matière Recyclage",
      desc: "Textiles recyclables : laine, jeans, coton, etc.",
      extra: `
        <h3>Caractéristiques :</h3>
        <ul>
          <li>Matériaux destinés au recyclage</li>
          <li>Jeans, pulls, coton, laine, etc.</li>
          <li>Balles compressées</li>
          <li>Idéal pour les industries du recyclage textile</li>
        </ul>
      `,
      download: "catalogues/catalogue_recyclage_original.pdf",
      gallery: [{type: "img", src: "images/balles recyclage.webp"}]
    }
  };

  function loadGallery(items) {
    galleryTrack.innerHTML = "";
    galleryDots.innerHTML = "";

    items.forEach((item, index) => {
      let html = item.type === "video" 
        ? `<video src="${item.src}" muted loop controls></video>` 
        : `<img src="${item.src}" alt="Image ${index+1}">`;
      
      galleryTrack.innerHTML += html;

      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        const itemWidth = galleryTrack.children[0] ? galleryTrack.children[0].offsetWidth : 800;
        galleryTrack.scrollTo({
          left: index * (itemWidth + 10),
          behavior: "smooth"
        });
        updateActiveDot(index);
      });
      galleryDots.appendChild(dot);
    });

    if (galleryDots.children.length > 0) {
      galleryDots.children[0].classList.add("active");
    }
  }

  function updateActiveDot(index) {
    Array.from(galleryDots.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function openDetailView(cardId) {
    const data = productData[cardId];
    if (!data) return;

    detailTitle.textContent = data.title;
    detailDesc.textContent = data.desc;
    detailExtra.innerHTML = data.extra || "";
    detailDownload.href = data.download;

    loadGallery(data.gallery || []);

    detailView.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  document.querySelectorAll(".products-slider a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const cardId = this.getAttribute("href").replace("#", "");
      openDetailView(cardId);
    });
  });

  detailClose.addEventListener("click", () => {
    detailView.style.display = "none";
    document.body.style.overflow = "";
  });
});
