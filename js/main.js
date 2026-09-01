
(() => {
  // SECTION: PRODUCT DATA & DETAIL VIEW
  // Dictionnaire de titres et descriptions pour chaque produit.
  // Utilisé pour mettre à jour le texte des cartes produits selon la langue active.
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
      ["Ecrémé", "Sélection Ecrémé pour l'export."],
      ["Mixte Tropical", "Textiles seconde main légers mixte pour climats chauds."],
      ["Palette Export 500 kg", "Export en palette dès 500 kg – Livraison à domicile (+350 € de transport)"],
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
      ["Appoint", "Ecrémé selection for export."],
      ["Mixed Tropical", "Second-hand mixed light clothing for warm climates."],
      ["Export Pallet 500 kg", "Pallet export from 500 kg – Home delivery (+€350 transport)"],
    ],
  };

  // Contenus détaillés affichés dans la vue produit.
  // Chaque carte produit est identifiée par son id HTML (par exemple card-1, card-2...).
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
        desc: "Désigne la collecte textile brute, telle qu'elle est récupérée directement dans les conteneurs ou lors de collectes en porte-à-porte. Il s'agit d'un produit non trié, non ouvert et non transformé, contenant un mélange de vêtements, chaussures et maroquinerie, dans l'état exact où les donateurs les ont déposés.",
        extra: `
          <h3>Description :</h3>
          <p>Original 18T correspond à la collecte brute telle qu'elle est récupérée depuis les conteneurs ou lors de collectes porte-à-porte. Les lots sont livrés non triés, non ouverts et non transformés.</p>
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Collecte textile brute depuis conteneurs ou collectes porte-à-porte</li>
            <li>Produit non trié, non ouvert et non transformé</li>
            <li>Mélange de vêtements, chaussures et maroquinerie</li>
            <li>Livré dans l'état exact déposé par les donateurs</li>
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
      "card-10": {
        title: "Ecrémé",
        desc: "Considéré comme le « second choix associatif » : articles restants après un premier tri. Inclut aussi les invendus et retours boutiques précédemment exposés en magasin.",
        extra: `
          <h3>Définition :</h3>
          <p>Ecrémé désigne les articles conservés après le premier tri — le second choix. Il comprend également les invendus et retours de boutiques qui ont été exposés en magasin.</p>
          <h3>Caractéristiques :</h3>
          <ul>
            <li>Articles triés une première fois puis séparés comme second choix</li>
            <li>Peut inclure des vêtements présentant des signes d'exposition en magasin</li>
            <li>Bonne option pour marchés à prix compétitif</li>
            <li>Conditionnement en balles selon demande</li>
          </ul>
        `,
      },
      "card-11": {
  title: "Mixte Tropical ",
  desc: "Textiles seconde main mixte (hommes/femmes) légers et adaptés aux climats tropicaux.",
  extra: `
    <h3>Description :</h3>
    <p>Textiles seconde main mixte composés d’articles légers pour hommes et femmes, idéaux pour les climats chauds et les saisons estivales.</p>
    
    <h3>Caractéristiques principales :</h3>
    <ul>
      <li>Sélection mixte hommes et femmes</li>
      <li>Pièces légères et respirantes (coton, lin, viscose...)</li>
      <li>Shorts, t-shirts, robes d’été, chemises légères</li>
      <li>Parfait pour l’export vers régions tropicales</li>
    </ul>

    <h3>Conditionnement standard :</h3>
    <ul>
      <li>Balles compressées de 45 kg, 55 kg, 80 kg ou 100 kg</li>
      <li>Emballage plastique haute densité cerclé et étiqueté</li>
    </ul>

    <h3>Export & Chargement :</h3>
    <ul>
      <li>Conteneur 20 pieds : environ 10 à 12 tonnes</li>
      <li>Conteneur 40 pieds HC : environ 24 à 28 tonnes</li>
    </ul>
  `
},
"card-12": {
  title: "Palette Export 500 kg",
  desc: "Export en palette dès 500 kg avec livraison à domicile. Frais de transport : +350 €.",
  extra: `
    <h3>Description :</h3>
    <p>Solution d’export en palette à partir de 500 kg minimum, avec livraison à domicile.</p>

    <h3>Caractéristiques :</h3>
    <ul>
      <li>Quantité minimum : 500 kg</li>
      <li>Livraison à domicile disponible</li>
      <li>Frais de transport : 350 € (forfait)</li>
      <li>Idéal pour les petits et moyens volumes</li>
    </ul>

    <h3>Conditionnement :</h3>
    <ul>
      <li>Palette standard sécurisée</li>
      <li>Emballage professionnel adapté à l’export</li>
    </ul>
  `
}
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
        desc: "Refers to raw collected textiles as retrieved directly from containers or during door-to-door collections. This is an unsorted, unopened and unprocessed product containing a mix of clothing, shoes and leather goods in the exact condition donors left them.",
        extra: `
          <h3>Description:</h3>
          <p>Original 18T denotes raw collections taken from containers or door-to-door pickups. Lots are delivered unsorted, unopened and unprocessed.</p>
          <h3>Features:</h3>
          <ul>
            <li>Raw textile collection from containers or door-to-door pickups</li>
            <li>Unsorted, unopened and unprocessed product</li>
            <li>Contains a mixture of clothing, shoes and leather goods</li>
            <li>Delivered in the exact condition left by donors</li>
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
      "card-10": {
        title: "Appoint",
        desc: "Considered the 'second-choice' — items remaining after an initial sort; also includes unsold shop returns previously displayed in stores.",
        extra: `
          <h3>Definition:</h3>
          <p>Appoint refers to items kept after a first sorting pass — the second choice. It also covers unsold stock and store returns that have been displayed.</p>
          <h3>Features:</h3>
          <ul>
            <li>Items separated after initial sorting as second-choice</li>
            <li>May include garments showing signs of in-store display</li>
            <li>Good option for value-driven markets</li>
            <li>Packed in bales according to request</li>
          </ul>
        `,
      },
      "card-11": {
  title: "Mixed Tropical",
  desc: "Second-hand mixed clothing (men/women) light and suitable for tropical climates.",
  extra: `
    <h3>Description:</h3>
    <p>Second-hand mixed textiles for men and women, consisting of light items ideal for warm climates and summer seasons.</p>
    
    <h3>Main Features:</h3>
    <ul>
      <li>Mixed selection for men and women</li>
      <li>Light and breathable fabrics (cotton, linen, viscose...)</li>
      <li>Shorts, t-shirts, summer dresses, light shirts</li>
      <li>Perfect for export to tropical regions</li>
    </ul>

    <h3>Standard Packing:</h3>
    <ul>
      <li>Compressed bales of 45 kg, 55 kg, 80 kg or 100 kg</li>
      <li>High-density plastic wrapping, strapped and labeled</li>
    </ul>

    <h3>Export & Loading:</h3>
    <ul>
      <li>20ft Container: approx. 10 to 12 tons</li>
      <li>40ft HC Container: approx. 24 to 28 tons</li>
    </ul>
  `
},
"card-12": {
  title: "Export Pallet 500 kg",
  desc: "Pallet export from 500 kg with home delivery. Transport fee: +€350.",
  extra: `
    <h3>Description:</h3>
    <p>Pallet export solution starting from 500 kg minimum, with home delivery option.</p>

    <h3>Features:</h3>
    <ul>
      <li>Minimum quantity: 500 kg</li>
      <li>Home delivery available</li>
      <li>Transport fee: €350 (flat rate)</li>
      <li>Ideal for small and medium volumes</li>
    </ul>

    <h3>Packing:</h3>
    <ul>
      <li>Standard secured pallet</li>
      <li>Professional export packaging</li>
    </ul>
  `
},
    },
  };

  // Informations média associées aux produits.
  // Contient le lien de téléchargement et la galerie d'images/vidéos.
  const detailMedia = {
     fr: {
      "card-1": {
        download: "catalogues/CATALOGUE_CREME_ETE.pdf",
        gallery: [{ type: "img", src: "images/enfants2.webp",title: "Crème extra été " },
         { type: "img", src: "images/creme_extra.webp",title: "T-shirt crème extra été " },
         { type: "img", src: "images/creme_chargee.webp",title: "chargement balles crème " },
          { type: "img", src: "images/creme.webp",title: "Vêtements crème avant conditionnement " }, 
          { type: "img", src: "images/rummage enfant.webp",title: "Crème été extra enfant " },       
          { type: "img", src: "images/installation-tri.webp",title: "installation de tri " },
          { type: "img", src: "images/conditionnement-service.webp",title: "stockage balles crème été " },
          { type: "video", src: "videos/chargement_original_big_bags.mp4",title: "Chargement original big bags " },
        ],
      },
      "card-2": {
        download: "catalogues/CATALOGUES_CREME_GRADEB.pdf",
        gallery: [
          { type: "img", src: "images/balles2.webp",title: "Stockage balles hiver " },
          { type: "img", src: "images/balles4.webp",title: "Balles hiver " },
        ],
      },
      "card-3": {
        download: "catalogues/catalogue AMIRATEX.pdf",
        gallery: [{ type: "img", src: "images/camion_ptte_balle_gradeA_B.webp",title: "Chargement Grade A été " },],
      },
      "card-4": {
        download: "catalogues/catalogue AMIRATEX.pdf",
        gallery: [{ type: "img", src: "images/balles_stock.webp",title: "Stockage  grade A hiver " }],
      },
      "card-5": {
        download: "catalogues/CATALOGUE_GRADE_B_ETE_GLOBAL.pdf",
        gallery: [{ type: "img", src: "images/balles2.webp",title: "Stocks grade B été " }],
      },
      "card-6": {
        download: "catalogues/CATALOGUES_CREME_GRADEB.pdf",
        gallery: [{ type: "img", src: "images/balles4.webp",title: "Balles grade B Hiver " }],
      },
      "card-7": {
        download: "catalogues/catalogue_recyclage_original.pdf",
        gallery: [
           { type: "img", src: "images/borne _de_collecte.webp",title: "borne de collecte " },
          { type: "img", src: "images/textile_original.webp",title: "textile original " },
          { type: "img", src: "images/original.webp",title: "original " },          
         { type: "img", src: "images/original small_bags.webp",title: "original small bags " },
          { type: "img", src: "images/original_smallbags.webp",title: "original small bags " },        
          { type: "img", src: "images/original-smallbags1.webp",title: "original small bags 1" },
          { type: "img", src: "images/original_chargement_small_bags.webp",title: "original chargement small bags " },
          { type: "img", src: "images/camion_big_bags.webp",title: "Chargement original big bags " },
          { type: "video", src: "videos/chargement_original_big_bags.mp4",title: "Chargement original big bags " },
          { type: "video", src: "videos/original_big_bags.mp4",title: "stocks original big bags " }
        ],
      },
      "card-8": {
        download: "catalogues/catalogue_general.pdf",
        gallery: [{ type: "img", src: "images/Chaussures-Triées-Sac-de-25-kg.webp",title: "Chaussures triées Sac de 25 kg " }],
      },
      "card-9": {
        download: "catalogues/catalogue_recyclage_original.pdf",
        gallery:
         [
          { type: "img", src: "images/recyclage_sweater2.webp",title: "Sweater pour recyclage " }, 
          { type: "img", src: "images/recyclage_sweater.webp",title: "Sweater pour recyclage " },  
                 { type: "img", src: "images/recyclage_chiffon_blanc.webp",title: "Chiffon blanc pour recyclage " },  
          { type: "img", src: "images/recyclage_chiffon_couleur.webp",title: "Chiffon couleur pour recyclage " },  
          { type: "img", src: "images/recyclage_hhr.webp",title: "HHR pour recyclage " },          
         { type: "img", src: "images/recyclage_jeans.webp",title: "Jeans pour recyclage " },  
          { type: "img", src: "images/recyclage_jeans2.webp",title: "Jeans pour recyclage " },        
                    
          { type: "img", src: "images/recyclage_sweater3.webp",title: "Sweater pour recyclage " },  
          { type: "img", src: "images/recyclage_sweater4.webp",title: "Sweater pour recyclage " },
          { type: "img", src: "images/recyclage-wool.webp",title: "Laine pour recyclage "},
          { type: "video", src: "videos/video_chargement.mp4" },
        ],
      },
      "card-10": {
        download: "catalogues/CATALOGUE_ECREME.pdf",
        gallery: [{ type: "img", src: "images/Appoint.webp",title: "Stock écrémé " }, ],
      },
      "card-11": {
  download: "catalogues/CATALOGUE_MIXTE_TROPICAL.pdf",
  gallery: [
    { type: "img", src: "images/stock_mix_tropical.webp",title: "Balles mixte tropical été  " },
    { type: "img", src: "images/mixte_tropical_ete.webp",title: "Balles mixte tropical été " },
    
  ]
  
},
"card-12": {
  download: "catalogues/CATALOGUE_MIXTE_TROPICAL.pdf",
  gallery: [
    { type: "img", src: "images/export_palette1.webp",title: "Export pallette 500 kg minimum " },
        { type: "img", src: "images/export_palette2.webp",title: "Export pallette 500 kg minimum " },
    
  ]
  
},
    },
    en: {
       "card-1": {
    download: "catalogues/CATALOGUE_CREME_ETE.pdf",
    gallery: [
      { type: "img", src: "images/enfants2.webp", title: "Extra summer cream" },
      { type: "img", src: "images/creme_extra.webp", title: "Extra summer cream T-shirt" },
      { type: "img", src: "images/creme_chargee.webp", title: "Cream bales loading" },
      { type: "img", src: "images/creme.webp", title: "Cream clothing before packing" },
      { type: "img", src: "images/rummage enfant.webp", title: "Extra summer cream kids" },
      { type: "img", src: "images/installation-tri.webp", title: "Sorting facility" },
      { type: "img", src: "images/conditionnement-service.webp", title: "Summer cream bales storage" },
      { type: "video", src: "videos/chargement_original_big_bags.mp4", title: "Original big bags loading" },
    ],
  },
  "card-2": {
    download: "catalogues/CATALOGUES_CREME_GRADEB.pdf",
    gallery: [
      { type: "img", src: "images/balles2.webp", title: "Winter bales storage" },
      { type: "img", src: "images/balles4.webp", title: "Winter bales" },
    ],
  },
  "card-3": {
    download: "catalogues/catalogue AMIRATEX.pdf",
    gallery: [
      { type: "img", src: "images/camion_ptte_balle_gradeA_B.webp", title: "Grade A summer loading" },
    ],
  },
  "card-4": {
    download: "catalogues/catalogue AMIRATEX.pdf",
    gallery: [
      { type: "img", src: "images/balles_stock.webp", title: "Grade A winter storage" },
    ],
  },
  "card-5": {
    download: "catalogues/CATALOGUE_GRADE_B_ETE_GLOBAL.pdf",
    gallery: [
      { type: "img", src: "images/balles2.webp", title: "Grade B summer stocks" },
    ],
  },
  "card-6": {
    download: "catalogues/CATALOGUES_CREME_GRADEB.pdf",
    gallery: [
      { type: "img", src: "images/balles4.webp", title: "Grade B winter bales" },
    ],
  },
  "card-7": {
    download: "catalogues/catalogue_recyclage_original.pdf",
    gallery: [
      { type: "img", src: "images/borne _de_collecte.webp", title: "Collection bin" },
      { type: "img", src: "images/textile_original.webp", title: "Original textile" },
      { type: "img", src: "images/original.webp", title: "Original" },
      { type: "img", src: "images/original small_bags.webp", title: "Original small bags" },
      { type: "img", src: "images/original_smallbags.webp", title: "Original small bags" },
      { type: "img", src: "images/original-smallbags1.webp", title: "Original small bags 1" },
      { type: "img", src: "images/original_chargement_small_bags.webp", title: "Original small bags loading" },
      { type: "img", src: "images/camion_big_bags.webp", title: "Original big bags loading" },
      { type: "video", src: "videos/chargement_original_big_bags.mp4", title: "Original big bags loading" },
      { type: "video", src: "videos/original_big_bags.mp4", title: "Original big bags stock" },
    ],
  },
  "card-8": {
    download: "catalogues/catalogue_general.pdf",
    gallery: [
      { type: "img", src: "images/Chaussures-Triées-Sac-de-25-kg.webp", title: "Sorted shoes 25 kg bag" },
    ],
  },
  "card-9": {
    download: "catalogues/catalogue_recyclage_original.pdf",
    gallery: [
      { type: "img", src: "images/recyclage_sweater2.webp", title: "Sweater for recycling" },
      { type: "img", src: "images/recyclage_sweater.webp", title: "Sweater for recycling" },
      { type: "img", src: "images/recyclage_chiffon_blanc.webp", title: "White rags for recycling" },
      { type: "img", src: "images/recyclage_chiffon_couleur.webp", title: "Coloured rags for recycling" },
      { type: "img", src: "images/recyclage_hhr.webp", title: "HHR for recycling" },
      { type: "img", src: "images/recyclage_jeans.webp", title: "Jeans for recycling" },
      { type: "img", src: "images/recyclage_jeans2.webp", title: "Jeans for recycling" },
      { type: "img", src: "images/recyclage_sweater3.webp", title: "Sweater for recycling" },
      { type: "img", src: "images/recyclage_sweater4.webp", title: "Sweater for recycling" },
      { type: "img", src: "images/recyclage-wool.webp", title: "Wool for recycling" },
      { type: "video", src: "videos/video_chargement.mp4" },
    ],
  },
  "card-10": {
    download: "catalogues/CATALOGUE_ECREME.pdf",
    gallery: [
      { type: "img", src: "images/Appoint.webp", title: "Appoint stock" },
    ],
  },
  "card-11": {
    download: "catalogues/CATALOGUE_MIXTE_TROPICAL.pdf",
    gallery: [
      { type: "img", src: "images/stock_mix_tropical.webp", title: "Mixed tropical summer bales" },
      { type: "img", src: "images/mixte_tropical_ete.webp", title: "Mixed tropical summer bales" },
    ],
  },
  "card-12": {
    download: "catalogues/CATALOGUE_MIXTE_TROPICAL.pdf",
    gallery: [
      { type: "img", src: "images/export_palette1.webp", title: "Export pallet 500 kg minimum" },
      { type: "img", src: "images/export_palette2.webp", title: "Export pallet 500 kg minimum" },
    
  ]
 }, 
},
  };
  // Expose les données de détail produit globalement pour d'autres scripts.
  window.amiratexDetailProducts = detailProducts;
  window.amiratexDetailMedia = detailMedia;

  const text = {
  fr: {
    title: "AMIRATEX - Collecte • Tri • Export Textile International",
    description: "AMIRATEX est spécialisée dans la collecte, le tri et l’exportation internationale de textiles de seconde main.",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    nav: ["Accueil", "Société", "Produits", "Logistique", "Catalogues", "Galerie", "Contact"],
    heroSubtitle: "COLLECTE • TRI • EXPORT TEXTILE INTERNATIONAL",
    heroText: "Votre partenaire professionnel pour le tri, la valorisation et l’exportation de vêtements et textiles de seconde main.",
    heroButtons: ["Découvrir nos produits", "Télécharger nos catalogues"],

    Title: "À PROPOS D'AMIRATEX",
    about1: "<strong>AMIRATEX</strong> est spécialisée dans la collecte, le tri et l'exportation de vêtements et textiles de seconde main destinés aux marchés internationaux. Nous proposons des solutions fiables et professionnelles répondant aux besoins des grossistes, importateurs, distributeurs et revendeurs.",
    about2: "Grâce à un réseau solide de partenaires et de fournisseurs, nous sélectionnons des textiles de qualité répondant aux exigences des grossistes, importateurs et professionnels du secteur.",
    aboutPresence: "Notre présence en Europe",
    aboutPresenceText: "AMIRATEX s'appuie sur un vaste réseau de collecte et d'approvisionnement en textiles originaux dans plusieurs pays européens :",
    aboutCountries: "France • Belgique • Allemagne • Pays-Bas • Espagne • Portugal",
    aboutCommitment: "Notre engagement",
    aboutCoaboutmmitmentText: "Nous mettons l'accent sur la qualité, la transparence, la réactivité et la satisfaction de nos clients afin de construire des partenariats durables partout dans le monde.",
    aboutStrong: "<strong>AMIRATEX, votre partenaire de confiance pour un approvisionnement textile durable, compétitif et de qualité.</strong>",
    aboutSubtitle: "Société & savoir-faire",
    aboutFeature1Title: "Collecte responsable",
    aboutFeature1Text: "Récupération de textiles en Europe avec un tri initial sur site et une sélection rigoureuse.",
    aboutFeature2Title: "Tri professionnel",
    aboutFeature2Text: "Tri manuel et vérification qualité pour garantir des lots homogènes, propres et prêts à l'export.",
    aboutFeature3Title: "Export sécurisé",
    aboutFeature3Text: "Expédition fiable vers l'Afrique, l'Asie et le Moyen-Orient avec une prise en charge complète de la logistique.",
    aboutGeo: "France • Belgique • Allemagne • Pays-Bas • Espagne • Portugal",
    aboutBenefitsText: "Nous mettons l'accent sur la qualité, la transparence et la satisfaction client pour construire des partenariats durables.",
    aboutBenefitsItems: [
      "Contrôle qualité à chaque étape du tri",
      "Assortiments adaptés aux besoins des acheteurs",
      "Expédition sûre et accompagnement douanier"
    ],
    learnMore: "En savoir plus",

    // Nouvelles clés pour la structure About
    aboutMainTitle: "Votre partenaire européen de confiance",
    aboutTrustedTitle: "AMIRATEX, votre partenaire de confiance",
    aboutText1: "<strong>AMIRATEX</strong> est spécialisée dans la collecte, le tri et l'exportation de vêtements et textiles de seconde main destinés aux marchés internationaux. Nous proposons des solutions fiables et professionnelles répondant aux besoins des grossistes, importateurs, distributeurs et revendeurs.",
    aboutText2: "Grâce à un réseau solide de partenaires et de fournisseurs européens, nous sélectionnons des textiles répondant aux exigences des professionnels les plus exigeants.",
    aboutSummary: "Grâce à nos installations et à notre réseau européen, AMIRATEX assure un suivi complet de la collecte et de l'approvisionnement, avec des exportations partout dans le monde.",
    aboutProcessTitle: "Nos pays partenaires en Europe",
    timelineCollectTitle: "France",
    timelineCollectText: "Partenariats établis pour la collecte et l'approvisionnement local.",
    timelineSortTitle: "Belgique",
    timelineSortText: "Réseau européen de partenaires pour le tri et la logistique.",
    timelineControlTitle: "Allemagne",
    timelineControlText: "Approvisionnement contrôlé avec des partenaires allemands fiables.",
    timelineExportTitle: "Espagne & Portugal",
    timelineExportText: "Collaborations de proximité avec des partenaires ibériques.",
    statExperience: "Années d'expérience",
    statCountries: "Pays desservis",
    statTons: "Tonnes exportées",
    statQuality: "Contrôle qualité",
    aboutBtnProducts: "Découvrir nos produits",
    aboutBtnCatalog: "Télécharger le catalogue PDF",
    aboutBtnRequest: "Demander un devis personnalisé",
    aboutCommitmentItems: [
      "Produits soigneusement sélectionnés",
      "Contrôle qualité rigoureux",
      "Expédition sécurisée",
      "Service client réactif",
      "Relations commerciales durables"
    ],

    // Sections restantes (services, process, etc.)
    servicesBadge: "AMIRATEX EXPERTISE",
    servicesTitle: "SOLUTIONS TEXTILES<br />& LOGISTIQUES INTERNATIONALES",
    servicesIntro: "Des solutions professionnelles haut de gamme pour la collecte, le tri, le conditionnement et l’export textile international.",
    services: [
      ["Collecte", "Collecte de textiles à partir de conteneurs implantés dans différentes communes en France ainsi qu’auprès de sources partenaires professionnelles."],
      ["Tri Rigoureux", "Classification professionnelle des textiles selon les catégories, qualités et standards export."],
      ["Conditionnement", "Préparation export professionnelle, mise en balles et optimisation logistique."],
      ["Export International", "Expéditions internationales fiables, rapides et sécurisées vers plusieurs pays."]
    ],
    processTitle: "UN PROCESSUS MAÎTRISÉ",
    processIntro: "De la collecte à l’expédition internationale, chaque étape est contrôlée avec rigueur.",
    steps: [
      ["1. Collecte", "Collecte organisée auprès de sources partenaires."],
      ["2. Tri", "Tri rigoureux selon les standards qualité."],
      ["3. Conditionnement", "Préparation des balles pour l’export."],
      ["4. Expédition", "Logistique internationale sécurisée."]
    ],
    logisticsTitle: "Solution Logistique Internationale",
    logisticsText: "AMIRATEX collabore avec des transporteurs internationaux afin de garantir des expéditions rapides et fiables. Nous nous occupons de toutes les démarches de transport : chargement, documentation, logistique export et suivi des expéditions jusqu’à destination.",
    logisticsButtons: ["Demander une expédition", "Télécharger nos catalogues"],
    productsBadge: "AMIRATEX PRODUITS",
    productsTitle: "NOS PRODUITS TEXTILES DESTINÉS À L’EXPORT",
    productsIntro: "Découvrez notre sélection professionnelle de textiles et vêtements destinés aux marchés internationaux.",
    sliderHint: "<strong>Sélectionnez un produit</strong> pour consulter ses détails et télécharger son catalogue spécifique.",
    catalogComplete: "Télécharger le catalogue complet",
    download: "Télécharger",
    loadMore: "Voir plus de produits",
    galleryTitle: "GALERIE",
    galleryIntro: "Découvrez nos installations et activités.",
    galleryTitles: [
  "ENTREPÔTS VUE DE L'EXTÉRIEUR",
  "Presse",
  "Borne de collecte",
  "AMIRATEX VUE DU HAUT",
  "TRI-SERVICE",
  "ESPACE DE TRI",
  "RUMMAGE ENFANT",
  "COULOIR DE STOCKAGE",
  "BALLES DE VÊTEMENTS DE SECONDE MAIN PRÊTES POUR L'EXPORT",
  "BALLES DE VÊTEMENTS DE SECONDE MAIN PRÊTES POUR L'EXPORT",
  "CHARGEMENT DE CONTENEUR TEXTILES DE SECONDE MAIN",
  "CHARGEMENTS BIG BAGS",
  "CHARGEMENT CONTENEUR",
  "CHARGEMENT CONTENEUR",
  "CONTENEURS PRÊTS À L'EXPORT",
  "CONTENEURS PRÊTS À L'EXPORT",
],
    statsTitle: "AMIRATEX EN CHIFFRES",
    statsIntro: "Des résultats concrets au service de nos partenaires internationaux. ",
    stats: ["Année d'expérience", "Pays desservis", "Tonnes traitées", "Conteneurs exportés"],
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
      submit: "Envoyer"
    },
    footerBaseline: "Collecte • Tri • Export Textile International.",
    mapSectionTitle: "Réseau d'Approvisionnement & Exportation Mondiale",
    mapSectionSubtitle: "Survolez une région ou cliquez sur les boutons ci-dessous pour plus de détails.",
    mapLegendEurope: "Collecte & Sourcing Européen",
    mapLegendExport: "Destinations d'Exportation Mondiale",
    mapStatusActive: "Réseau actif",
    mapInfoDefault: "Survolez une région ou cliquez sur un bouton ci-dessous.",
    mapRegionNames: {
      "north-america": "Amérique du Nord",
      "south-america": "Amérique du Sud",
      europe: "Europe",
      africa: "Afrique",
      asia: "Asie & Moyen-Orient",
      oceania: "Océanie"
    },
    mapRegionInfo: {
      "north-america": "Exportation par conteneurs vers nos partenaires importateurs.",
      "south-america": "Expédition et approvisionnement en textiles et friperie.",
      europe: "Suivi complet de la collecte, du tri et du sourcing de textiles recyclés.",
      africa: "Exportation régulière de vêtements triés, balles textiles et articles recyclés.",
      asia: "Fourniture et livraison de conteneurs pour marchés industriels et commerciaux.",
      oceania: "Exportation et distribution internationale sur demande."
    },
    mapButtons: [
      "🇪🇺 Europe (Collecte)",
      "🌍 Afrique (Export)",
      "🌏 Asie & Moyen-Orient (Export)",
      "🌎 Amériques (Export)"
    ],
    social: "Réseaux sociaux",
    copyright: "© 2026 AMIRATEX — Tous droits réservés.",
    detailDownload: "Télécharger le catalogue",
    imageExpanded: "Image agrandie",
    previousImage: "Image précédente",
    nextImage: "Image suivante",
   close: "Fermer",
zoom: "Agrandir",
noMedia: "Aucun média disponible",
viewDetails: "Voir détails",
requestQuote: "Demander un devis"
  },

  en: {
    title: "AMIRATEX - Textile Collection • Sorting • International Export",
    description: "AMIRATEX specializes in the collection, sorting and international export of second-hand textiles.",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    nav: ["Home", "Company", "Products", "Logistics", "Catalogues", "Gallery", "Contact"],
    heroSubtitle: "TEXTILE COLLECTION • SORTING • INTERNATIONAL EXPORT",
    heroText: "Your professional partner for sorting, valorizing and exporting second-hand clothing and textiles.",
    heroButtons: ["Discover our products", "Download our catalogues"],

    aboutTitle: "ABOUT AMIRATEX",
    aboutMainTitle: "Your Trusted European Partner",
    aboutSubtitle: "Collection • Sorting • Quality Control • International Export",
    aboutTrustedTitle: "AMIRATEX, Your Trusted Partner",
    aboutText1: "<strong>AMIRATEX</strong> specializes in the collection, sorting and export of second-hand clothing and textiles for international markets.",
    aboutText2: "Thanks to our extensive European partner network, we carefully select quality textiles meeting the highest international standards.",
    aboutSummary: "Through our facilities and European network, AMIRATEX provides end-to-end support from collection to international transport, with exports worldwide.",
    aboutPresence: "Our Presence Across Europe",
    aboutPresenceText: "Our sourcing network covers Europe's leading second-hand textile markets.",
    aboutCommitment: "Our Commitment",
    aboutCommitmentItems: [
      "Carefully selected products",
      "Strict quality control",
      "Secure international shipping",
      "Responsive customer support",
      "Long-term business partnerships"
    ],
    aboutProcessTitle: "Our partner countries in Europe",
    timelineCollectTitle: "France",
    timelineCollectText: "Local sourcing partnerships for collection and supply.",
    timelineSortTitle: "Belgium",
    timelineSortText: "European partner network for sorting and logistics.",
    timelineControlTitle: "Germany",
    timelineControlText: "Verified supply chains with reliable German partners.",
    timelineExportTitle: "Spain & Portugal",
    timelineExportText: "Close collaborations with partners across the Iberian Peninsula.",
    statExperience: "Years of Experience",
    statCountries: "Countries Served",
    statTons: "Exported Tons",
    statQuality: "Quality Control",
    aboutBtnProducts: "Discover Our Products",
    aboutBtnCatalog: "Download PDF Catalogue",
    aboutBtnRequest: "Request a Quote",
    servicesBadge: "AMIRATEX EXPERTISE",
    servicesTitle: "TEXTILE & INTERNATIONAL<br />LOGISTICS SOLUTIONS",
    servicesIntro: "High-end professional solutions for textile collection, sorting, packing and international export.",
    services: [
      ["Collection", "Textile collection from containers installed in different towns in France and from professional partner sources."],
      ["Strict Sorting", "Professional classification of textiles by category, quality and export standards."],
      ["Packing", "Professional export preparation, baling and logistics optimization."],
      ["International Export", "Reliable, fast and secure international shipments to multiple countries."]
    ],
    processTitle: "A CONTROLLED PROCESS",
    processIntro: "From collection to international shipment, every step is carefully controlled.",
    steps: [
      ["1. Collection", "Organized collection from partner sources."],
      ["2. Sorting", "Strict sorting according to quality standards."],
      ["3. Packing", "Preparation of bales for export."],
      ["4. Shipping", "Secure international logistics."]
    ],
    logisticsTitle: "International Logistics Solution",
    logisticsText: "AMIRATEX works with international carriers to ensure fast and reliable shipments. We handle transport operations: loading, documentation, export logistics and shipment tracking through to destination.",
    logisticsButtons: ["Request a shipment", "Download our catalogues"],
    productsBadge: "AMIRATEX PRODUCTS",
    productsTitle: "TEXTILE PRODUCTS FOR EXPORT",
    productsIntro: "Discover our professional selection of textiles and clothing for international markets.",
    sliderHint: "<strong>Select a product</strong> to view details and download its specific catalogue.",
    catalogComplete: "Download the full catalogue",
    download: "Download",
    loadMore: "View more products",
    loadMore: "View more products",
    
    galleryTitle: "GALLERY",
    galleryIntro: "Discover our facilities and operations.",
    galleryTitles: [
  "WAREHOUSES EXTERIOR VIEW",
  "Press",
  "Collection bin",
  "AMIRATEX AERIAL VIEW",
  "SORTING SERVICE",
  "SORTING AREA",
  "CHILDREN'S RUMMAGE",
  "STORAGE AISLE",
  "SECOND-HAND CLOTHING BALES READY FOR EXPORT",
  "SECOND-HAND CLOTHING BALES READY FOR EXPORT",
  "LOADING SECOND-HAND TEXTILE CONTAINER",
  "BIG BAGS LOADING",
  "CONTAINER LOADING",
  "CONTAINER LOADING",
  "CONTAINERS READY FOR EXPORT",
  "CONTAINERS READY FOR EXPORT",
],
    statsTitle: "AMIRATEX IN NUMBERS",
    statsIntro: "Concrete results in the service of our international partners.",
    stats: ["Years of Experience", "Countries Served", "Exported Tons", "Containers Exported"],
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
      submit: "Send"
    },
    footerBaseline: "Textile Collection • Sorting • International Export.",
    social: "Social media",
    copyright: "© 2026 AMIRATEX — All rights reserved.",
    mapSectionTitle: "Global Supply & Export Network",
    mapSectionSubtitle: "Hover over a region or click the buttons below for more details.",
    mapLegendEurope: "European Sourcing & Collection",
    mapLegendExport: "Global Export Destinations",
    mapStatusActive: "Active network",
    mapInfoDefault: "Hover over a region or click a button below.",
    mapRegionNames: {
      "north-america": "North America",
      "south-america": "South America",
      europe: "Europe",
      africa: "Africa",
      asia: "Asia & Middle East",
      oceania: "Oceania"
    },
    mapRegionInfo: {
      "north-america": "Container exports to our importing partners.",
      "south-america": "Shipping and supply of textiles and second-hand goods.",
      europe: "End-to-end collection, sorting and sourcing of recycled textiles.",
      africa: "Regular export of sorted clothing, textile bales and recycled items.",
      asia: "Container supply and delivery for industrial and commercial markets.",
      oceania: "Export and international distribution on demand."
    },
    mapButtons: [
      "🇪🇺 Europe (Collection)",
      "🌍 Africa (Export)",
      "🌏 Asia & Middle East (Export)",
      "🌎 Americas (Export)"
    ],
    social: "Social media",
copyright: "© 2026 AMIRATEX — All rights reserved.",
        detailDownload: "Download catalogue",
    imageExpanded: "Enlarged image",
    previousImage: "Previous image",
    nextImage: "Next image",
    close: "Close",
    zoom: "Enlarge",
    noMedia: "No media available",
    viewDetails: "View details",
    requestQuote: "Request a quote"
  }
};
  

  let currentLanguage = localStorage.getItem("amiratex_lang") || "fr";

  

  // SECTION: LANGUAGE CONTENT
  // Helpers simples pour mettre à jour le contenu du DOM.
  // Ces fonctions évitent d'écrire document.querySelector(...) à chaque fois.
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

  // Applique les titres et descriptions de chaque carte produit selon la langue.
  function applyProductLabels(lang) {
    const products = productLabels[lang];

    // Met à jour chaque carte produit visible sur la page.
    document.querySelectorAll(".product-card").forEach((card, index) => {
      const data = products[index];
      if (!data) return;
      setText(`#${card.id} .product-content h3`, data[0]);
      setText(`#${card.id} .product-content p`, data[1]);
      const img = card.querySelector("img");
      if (img) img.alt = data[0];
    });

    // Met à jour aussi les labels des mini-produits du carrousel.
    document.querySelectorAll(".mini-product").forEach((item, index) => {
      const data = products[index % products.length];
      const label = item.querySelector("span");
      const img = item.querySelector("img");
      if (label) label.textContent = data[0];
      if (img) img.alt = data[0];
    });
  }

  // Met à jour tous les textes de la page selon la langue sélectionnée.
  function applyLanguage(lang) {
    // Récupère les textes pour la langue choisie ou Français par défaut.
    const t = text[lang] || text.fr;
    currentLanguage = lang;
    localStorage.setItem("amiratex_lang", lang);
    document.documentElement.lang = lang;
    document.title = t.title;
    setAttr('meta[name="description"]', "content", t.description);

    // Mise à jour des éléments statiques principaux.
    setText(".skip-link", lang === "fr" ? "Aller au contenu" : "Skip to content");
    setAll(".nav-links a", t.nav);
    setText(".hero h2", t.heroSubtitle);
    setText(".hero p", t.heroText);
    setAll(".hero .buttons a", t.heroButtons);

        // ====================== SECTION ABOUT (version avec IDs) ======================
        
    

// En-tête de section
setText("#about-badge", t.aboutBadge || t.aboutTitle || t.Title);
setText("#about-main-title", t.aboutMainTitle);
setText("#about-subtitle", t.aboutSubtitle);

// Présentation
setText("#about-trusted-title", t.aboutTrustedTitle);
setHtml("#about-text-1", t.aboutText1 || t.about1);
setHtml("#about-text-2", t.aboutText2 || t.about2);
setText("#about-summary", t.aboutSummary);

// Présence en Europe
setText("#about-presence-title", t.aboutPresenceTitle || t.aboutPresence);
setText("#about-presence-text", t.aboutPresenceText);
// ====================== BADGES PAYS ======================
const countriesDiv = document.getElementById("about-countries");
if (countriesDiv) {
  if (lang === "fr") {
    countriesDiv.innerHTML = `
      <span>France</span>
      <span>Belgique</span>
      <span>Allemagne</span>
      <span>Pays-Bas</span>
      <span>Espagne</span>
      <span>Portugal</span>
    `;
  } else {
    countriesDiv.innerHTML = `
      <span>France</span>
      <span>Belgium</span>
      <span>Germany</span>
      <span>Netherlands</span>
      <span>Spain</span>
      <span>Portugal</span>
    `;
  }
}
// Liste "Notre engagement" 
setText("#about-commitment-title", t.aboutCommitmentTitle || t.aboutCommitment);

const commitmentList = document.getElementById("about-commitment-list");
if (commitmentList) {
  commitmentList.innerHTML = "";
  const items = Array.isArray(t.aboutCommitmentItems) ? t.aboutCommitmentItems : [];

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `✔ ${item}`;
    commitmentList.appendChild(li);
  });
}

// Titre du processus
setText("#about-process-title", t.aboutProcessTitle);
    // Timeline
    setText("#timeline-collect-title", t.timelineCollectTitle);
    setText("#timeline-collect-text", t.timelineCollectText);
    setText("#timeline-sort-title", t.timelineSortTitle);
    setText("#timeline-sort-text", t.timelineSortText);
    setText("#timeline-control-title", t.timelineControlTitle);
    setText("#timeline-control-text", t.timelineControlText);
    setText("#timeline-export-title", t.timelineExportTitle);
    setText("#timeline-export-text", t.timelineExportText);

    // Statistiques
    setText("#stat-experience", t.statExperience);
    setText("#stat-countries", t.statCountries);
    setText("#stat-tons", t.statTons);
    setText("#stat-quality", t.statQuality);

    // Boutons
    setText("#about-btn-products", t.aboutBtnProducts);
    setText("#about-btn-catalog", t.aboutBtnCatalog);
    setText("#about-btn-request", t.aboutBtnRequest);
    //  les anciennes mises à jour 
    //setText(".about-text h2", t.aboutTitle || t.Title);           // fallback
    //setHtml(".about-text p:nth-of-type(1)", t.about1);
    //setText(".about-text p:nth-of-type(2)", t.about2);
    // Section services.
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

    // Section processus.
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

    // Section logistique.
    setText(".combined-logistic h3", t.logisticsTitle);
    setText(".combined-logistic .logistic-text", t.logisticsText);
    setAll(".combined-logistic .btn-group a", t.logisticsButtons);

    // Section produits.
    setText("#nos-produits .section-badge", t.productsBadge);
    setText("#nos-produits .section-title h2", t.productsTitle);
    setText("#nos-produits .section-title p", t.productsIntro);
    setHtml(".slider-hint", t.sliderHint);
    setText(".catalog-download-wrap .btn", t.catalogComplete);
    document.querySelectorAll(".download-btn").forEach((btn) => {
      btn.textContent = t.download;
    });
    setText("#loadMoreBtn", t.loadMore);
    applyProductLabels(lang);

    // Section réseau mondial.
    setText(".amiratex-net-title", t.mapSectionTitle);
    setText(".amiratex-net-subtitle", t.mapSectionSubtitle);
    const mapLegendItems = document.querySelectorAll(".amiratex-net-legend .amiratex-net-legend-item");
    if (mapLegendItems[0]) {
      mapLegendItems[0].innerHTML = '<span class="amiratex-net-dot europe"></span> ' + t.mapLegendEurope;
    }
    if (mapLegendItems[1]) {
      mapLegendItems[1].innerHTML = '<span class="amiratex-net-dot export"></span> ' + t.mapLegendExport;
    }
    setHtml(".amiratex-map-status", '<i></i> ' + t.mapStatusActive);
    setText(".amiratex-infobox", t.mapInfoDefault);
    document.querySelectorAll(".amiratex-buttons .amiratex-btn").forEach((button, index) => {
      button.textContent = t.mapButtons[index] || button.textContent;
    });
    document.querySelectorAll(".amiratex-region").forEach((region) => {
      const key = region.dataset.regionKey;
      if (!key) return;
      const regionName = t.mapRegionNames?.[key];
      const regionInfo = t.mapRegionInfo?.[key];
      if (regionName) region.dataset.name = regionName;
      if (regionInfo) region.dataset.info = regionInfo;
    });

    // Section galerie et statistiques.
    setText("#gallery .section-title h2", t.galleryTitle);
    setText("#gallery .section-title p", t.galleryIntro);
       setText("#stats-title", t.statsTitle);
setText("#stats-intro", t.statsIntro);
setAll(".stat-box p", t.stats);
if (Array.isArray(t.galleryTitles)) {
  document.querySelectorAll("#gallery .gallery-title").forEach((el, index) => {
    if (t.galleryTitles[index]) el.textContent = t.galleryTitles[index];
  });
  document.querySelectorAll("#gallery .gallery-item").forEach((img, index) => {
    if (t.galleryTitles[index]) img.alt = t.galleryTitles[index];
  });
}
    // Section contact.
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

    // Footer.
    setText(".footer-col:nth-child(1) p", t.footerBaseline);
    setText(".footer-col:nth-child(2) h3", t.nav[0] === "Home" ? "Navigation" : "Navigation");
    setAll(".footer-col:nth-child(2) a", [t.nav[0], t.nav[1], t.nav[2], t.nav[4], t.nav[6]]);
    setText(".footer-col:nth-child(4) h3", t.social);
    setText(".footer-bottom", t.copyright);

    // Mise à jour des attributs de la vue détaillée et de la lightbox.
    setText("#detail-download", t.detailDownload);
    setText("#detail-quote", t.requestQuote);
    setAttr(".detail-close", "aria-label", t.close);
    setAttr(".close-lightbox", "aria-label", t.close);
    setAttr("#lightbox", "aria-label", t.imageExpanded);
    setAttr("#lightbox-img", "alt", t.imageExpanded);
    setAttr("#prev", "aria-label", t.previousImage);
    setAttr("#next", "aria-label", t.nextImage);
    setAttr("#next", "aria-label", t.nextImage);
setAttr(".gallery-nav.prev", "aria-label", t.previousImage);  
setAttr(".gallery-nav.next", "aria-label", t.nextImage);      
document.body.setAttribute("data-lang", lang);                 
document.documentElement.lang = lang;

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
const quoteBtn = document.getElementById('detail-quote');
const detailView = document.getElementById("product-detail-view");

if (quoteBtn) {
  quoteBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // 1. Fermer la vue détaillée de la même manière que votre code le gère
    if (detailView) {
      detailView.style.display = "none"; // Masque la vue
      
    }

    // 2. S'assurer que le body et les interactions sont libérés
    document.body.style.overflow = ""; // Réactive le scroll de la page
    
    // 3. Rediriger vers le formulaire de contact 
    const contactSection = document.getElementById('contact'); 
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
    // Met à jour tous les badges produits multilingues selon la langue active
    document.querySelectorAll('.product-badge').forEach((badge) => {
      const frText = badge.dataset.badgeFr;
      const enText = badge.dataset.badgeEn;
      if (lang === 'fr') badge.textContent = frText || badge.textContent;
      else badge.textContent = enText || badge.textContent;
    });

    // Si la vue détail est déjà ouverte, on traduit aussi son contenu.
    const openDetail = document.getElementById("product-detail-view");
    if (openDetail && openDetail.style.display === "block") {
      const currentTitle = document.getElementById("detail-title")?.textContent;
      const entry = Object.entries(detailProducts[lang]).find(([, value]) => value.title === currentTitle);
      if (entry) translateProductDetail(entry[0]);
    }
  }

  // Traduit le contenu de la vue détail produit lorsque la langue change.
  function translateProductDetail(cardId) {
    const data = detailProducts[currentLanguage]?.[cardId];
    const media = window.amiratexDetailMedia?.[currentLanguage]?.[cardId] || window.amiratexDetailMedia?.fr?.[cardId];
    if (!data && !media) return;
    setText("#detail-title", data?.title || "");
    setText("#detail-desc", data?.desc || "");
    setHtml("#detail-content-extra", data?.extra || "");
    setAttr("#detail-download", "href", media?.download || "#");
    setText("#detail-download", text[currentLanguage]?.detailDownload || text.fr.detailDownload);
  }

  // Fonctions globales accessibles depuis d'autres scripts ou depuis la console.
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
        /* SECTION: HERO SLIDER */
        /* ========================= */
        // Gestion du slider dans la section hero.
        // Le slider avance automatiquement et peut être mis en pause au clic.
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
     

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
            LANGUE
    =====================================================*/

    let currentLang = localStorage.getItem("lang") || "fr";

    function updateLanguage(lang) {

        currentLang = lang;

        localStorage.setItem("lang", lang);

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-fr]").forEach(el => {

            const value = lang === "fr"
                ? el.dataset.fr
                : el.dataset.en;

            if (value)
                el.innerHTML = value;

        });

    }

    updateLanguage(currentLang);

    /* Boutons langue */

    const frBtn = document.querySelector(".lang-fr");

    const enBtn = document.querySelector(".lang-en");

    if(frBtn){

        frBtn.addEventListener("click",()=>{

            updateLanguage("fr");

        });

    }

    if(enBtn){

        enBtn.addEventListener("click",()=>{

            updateLanguage("en");

        });

    }

    /*=====================================================
            REVEAL AU SCROLL
    =====================================================*/

    const reveals=document.querySelectorAll(

        ".reveal,.reveal-left,.reveal-right"

    );

    const revealObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(el=>revealObserver.observe(el));

    /*=====================================================
            ANIMATION DES COMPTEURS
    =====================================================*/

    const counters=document.querySelectorAll(".stat-item h3");

    function animateCounter(counter){

        const txt=counter.textContent;

        const target=parseInt(txt.replace(/\D/g,""));

        if(!target)return;

        const suffix=

            txt.includes("%") ? "%"

            : txt.includes("+") ? "+"

            : "";

        let value=0;

        const step=Math.max(1,Math.ceil(target/120));

        function update(){

            value+=step;

            if(value>=target){

                counter.textContent=

                target.toLocaleString("fr-FR")+suffix;

            }

            else{

                counter.textContent=

                value.toLocaleString("fr-FR")+suffix;

                requestAnimationFrame(update);

            }

        }

        update();

    }

    const counterObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:.6

    });

    counters.forEach(c=>counterObserver.observe(c));

    /*=====================================================
            TIMELINE
    =====================================================*/

    const timeline=document.querySelectorAll(".timeline-item, .timeline-line");

    const timelineObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },{

        threshold:.25

    });

    timeline.forEach(item=>timelineObserver.observe(item));

    /*=====================================================
            BADGES EUROPE
    =====================================================*/

    document.querySelectorAll(".country-badges span")

    .forEach((badge,index)=>{

        badge.style.animationDelay=(index*.12)+"s";

    });

    /*=====================================================
            PARALLAX CARTE EUROPE
    =====================================================*/

    const map=document.querySelector(".europe-map img");

    if(map){

        window.addEventListener("mousemove",(e)=>{

            const x=(e.clientX/window.innerWidth-.5)*8;

            const y=(e.clientY/window.innerHeight-.5)*8;

            map.style.transform=

            `translate(${x}px,${y}px) scale(1.02)`;

        });

    }

    /*=====================================================
            HOVER DES CARTES
    =====================================================*/

    document.querySelectorAll(

        ".engagement li,.stat-item,.timeline-item,.europe-card"

    ).forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.classList.add("hover");

        });

        card.addEventListener("mouseleave",()=>{

            card.classList.remove("hover");

        });

    });

    /*=====================================================
            SCROLL PROGRESS
    =====================================================*/

    const progress=document.createElement("div");

    progress.id="scroll-progress";

    document.body.appendChild(progress);

    window.addEventListener("scroll",()=>{

        const h=document.documentElement;

        const percent=

        h.scrollTop/

        (h.scrollHeight-h.clientHeight);

        progress.style.width=(percent*100)+"%";

    });

});

        /* ========================= */
        /* SECTION: LIGHTBOX GALLERY */
        /* ========================= */
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const closeLightbox = document.querySelector(".close-lightbox");

       const images = document.querySelectorAll(
  ".gallery-grid img, .service-card img, .about-images img",
);
const detailView = document.getElementById("product-detail-view");
if (detailView) {
  detailView.classList.remove("is-lightbox-open");
}
if (detailView && detailView.style.display === "block") {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "";
} else {
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
}
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

        // Ouvre l'image en grand, active la lightbox et bloque le défilement de fond.
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

        // Chaque image reçoit un clic pour ouvrir la lightbox de la même section.
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

// SECTION: LOAD MORE PRODUCTS
// Bouton "Voir plus" : révèle progressivement les produits masqués.
      (function () {
        const hiddenCards = document.querySelectorAll(".product-card.hidden");
        const btnMore = document.getElementById("loadMoreBtn");

        if (!btnMore || hiddenCards.length === 0) return;

        let currentItems = 0;
        const itemsToShow = 4;

        // À chaque clic, on affiche 4 cartes supplémentaires.
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
            btnMore.textContent =
  window.amiratexText?.("loadMore") || "View more products";
          }
        });
      })();

(function () {
        // SECTION: CONTACT FORM
        // Gestion du formulaire de contact avec EmailJS.
        // Si emailjs n'est pas chargé, on ne fait rien.
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
      // Optimisation des médias : lazy load pour les images et les vidéos.
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

// Si un lien du carrousel de produits pointe vers une carte cachée,
// on affiche cette carte immédiatement et on cache le bouton "Voir plus"
// si tous les produits sont désormais visibles.
document.querySelectorAll(".products-slider a").forEach((link) => {
        link.addEventListener("click", function (e) {
          const targetId = this.getAttribute("href"); // Récupère "#card-X"
          const targetCard = document.querySelector(targetId);

          if (targetCard) {
            // 1. Si la carte est cachée, on l'affiche
            if (targetCard.classList.contains("hidden")) {
              targetCard.classList.remove("hidden");
            }

            // 2. Bouton "voir plus" : si tous les produits sont exposés,
            //    on cache le conteneur du bouton.
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

// View détail produit : ouverture de la fenêtre modale avec contenu localisé.
document.addEventListener("DOMContentLoaded", function () {
  const detailView = document.getElementById("product-detail-view");
  const galleryTrack = document.getElementById("gallery-track-main");
  const galleryDots = document.getElementById("gallery-dots-main");
  const detailTitle = document.getElementById("detail-title");
  const detailDesc = document.getElementById("detail-desc");
  const detailExtra = document.getElementById("detail-content-extra");
  const detailDownload = document.getElementById("detail-download");
  const detailClose = document.querySelector(".detail-close");

  // Contenu statique de détail pour les produits dans cette vue locale.
  // Il s'agit d'une source de données dédiée à cette section.
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
       
         {type: "img", src: "images/creme_extra.webp"},
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
        {type: "img", src: "images/balles_hiver.webp"},
        {type: "img", src: "images/creme_extra.webp"},
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

  // Charge la galerie d'images/vidéos dans la vue détail.
// Charge la galerie d'images/vidéos dans la vue détail (avec overlay Agrandir + titre).
function loadGallery(items) {
  galleryTrack.innerHTML = "";
  galleryDots.innerHTML = "";
  galleryTrack.scrollLeft = 0;

  if (!Array.isArray(items) || items.length === 0) {
    const emptyMsg = window.amiratexText?.("noMedia") || "No media available";
    galleryTrack.innerHTML =
      '<div class="gallery-empty-msg" style="padding:20px;text-align:center;color:#888;">' +
      emptyMsg +
      "</div>";
    return;
  }

  items.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "gallery-item";

    const title = (item.title || "").trim();
    const mediaTitle = title || `Média ${index + 1}`;

    const mediaBlock = document.createElement("div");
    mediaBlock.className = "am-media-block";

    const wrapper = document.createElement("div");
    wrapper.className = "am-zoom-wrap";

    if (item.type === "video" || /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(item.src || "")) {
      const videoEl = document.createElement("video");
      videoEl.src = item.src;
      videoEl.muted = true;
      videoEl.loop = true;
      videoEl.controls = true;
      videoEl.playsInline = true;
      videoEl.setAttribute("preload", "metadata");
      if (title) {
        videoEl.setAttribute("aria-label", title);
      }
      // Pas d'attribut title natif : évite le tooltip navigateur qui apparaît puis disparaît
      wrapper.appendChild(videoEl);
    } else {
      const imgEl = document.createElement("img");
      imgEl.src = item.src;
      imgEl.alt = mediaTitle;
      imgEl.loading = "lazy";
      imgEl.decoding = "async";
      // Pas d'attribut title natif : le titre est géré par l'overlay + la légende
      wrapper.appendChild(imgEl);
    }

    // Calque de survol : badge "Agrandir" + titre (reste visible tant que le survol dure)
    function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const zoomLabel = window.amiratexText?.("zoom") || "Enlarge";
const overlay = document.createElement("div");
overlay.className = "am-hover-overlay";

const badge = document.createElement("span");
badge.className = "am-zoom-badge";
badge.textContent = "🔍 " + zoomLabel;
overlay.appendChild(badge);

if (title) {
  const titleEl = document.createElement("span");
  titleEl.className = "am-hover-title";
  titleEl.textContent = title; // textContent = sécurisé, pas de HTML
  overlay.appendChild(titleEl);
}

wrapper.appendChild(overlay);
mediaBlock.appendChild(wrapper);

    // Légende fixe sous l'image
    if (title) {
      const captionDiv = document.createElement("div");
      captionDiv.className = "media-caption";
      captionDiv.textContent = title;
      mediaBlock.appendChild(captionDiv);
    }

    slide.appendChild(mediaBlock);
    galleryTrack.appendChild(slide);

    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      const itemWidth = galleryTrack.clientWidth;
      galleryTrack.scrollTo({
        left: index * itemWidth,
        behavior: "smooth"
      });
      updateActiveDot(index);
    });
    galleryDots.appendChild(dot);
  });

  galleryTrack.onscroll = () => {
    const itemWidth = galleryTrack.clientWidth || 1;
    const index = Math.round(galleryTrack.scrollLeft / itemWidth);
    updateActiveDot(index);
  };
}

  function attachGalleryNav() {
    const prev = document.querySelector('.gallery-nav.prev');
    const next = document.querySelector('.gallery-nav.next');
    if (!galleryTrack) return;

    const getCurrentSlide = () => {
      const slideWidth = galleryTrack.clientWidth || 1;
      return Math.round(galleryTrack.scrollLeft / slideWidth);
    };

    const goToSlide = (index) => {
      const slideCount = galleryTrack.children.length;
      if (!slideCount) return;

      const targetIndex = (index + slideCount) % slideCount;
      galleryTrack.scrollTo({
        left: targetIndex * (galleryTrack.clientWidth || 600),
        behavior: "smooth"
      });
      updateActiveDot(targetIndex);
    };

    if (prev) {
      prev.onclick = () => {
        goToSlide(getCurrentSlide() - 1);
      };
    }
    if (next) {
      next.onclick = () => {
        goToSlide(getCurrentSlide() + 1);
      };
    }
  }

  function updateActiveDot(index) {
    Array.from(galleryDots.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Ouvre la vue détail d'un produit et remplit le contenu avec les données localisées.
  function openDetailView(cardId) {
    const lang = window.amiratexCurrentLanguage?.() || "fr";
    const localized =
      window.amiratexDetailProducts?.[lang]?.[cardId] ||
      window.amiratexDetailProducts?.fr?.[cardId];
    const media =
      window.amiratexDetailMedia?.[lang]?.[cardId] ||
      window.amiratexDetailMedia?.fr?.[cardId];
    if (!localized && !media) return;

    detailTitle.textContent = localized?.title || "";
    detailDesc.textContent = localized?.desc || "";
    detailExtra.innerHTML = localized?.extra || "";
    detailDownload.href = media?.download || "#";
    detailDownload.textContent =
      window.amiratexText?.("detailDownload") || "Télécharger le catalogue";

    loadGallery(media?.gallery || []);
    attachGalleryNav();

    detailView.style.display = "block";
    document.body.style.overflow = "hidden";
  }
window.openDetailView = openDetailView;
window.loadGallery = loadGallery;
window.attachGalleryNav = attachGalleryNav;
  // Ajoute un clic sur chaque produit du slider pour ouvrir la vue détail.
  document.querySelectorAll(".products-slider a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const cardId = this.getAttribute("href").replace("#", "");
      openDetailView(cardId);
    });
  });

  // Fermeture de la vue détail lorsqu'on clique sur la croix.
  detailClose.addEventListener("click", () => {
    detailView.style.display = "none";
    document.body.style.overflow = "";
  });
});
(function () {
  const slider = document.querySelector(".products-slider");
  const track  = document.querySelector(".products-slider-track");
  if (!slider || !track) return;

  const prevBtn = slider.querySelector(".slider-arrow-prev");
  const nextBtn = slider.querySelector(".slider-arrow-next");

  // ===== Configuration =====
  const AUTO_SPEED   = 0.6;    // px par frame
  const RESUME_DELAY = 4000;   // ms après interaction manuelle
  const STEP_CARDS   = 1;
  // =========================

  let position    = 0;
  let isDragging  = false;
  let startX      = 0;
  let startPos    = 0;
  let autoplay    = true;
  let hoverPause  = false;
  let resumeTimer = null;
  let loopWidth   = 0;
  let rafId       = null;

  function measure() {
    const cards = Array.from(track.querySelectorAll(".mini-product"));
    const copyLength = Math.floor(cards.length / 2);
    if (copyLength < 1) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 20;

    // Mesure fiable : somme des largeurs + gaps de la 1re copie
    let width = 0;
    for (let i = 0; i < copyLength; i++) {
      width += cards[i].offsetWidth + gap;
    }
    loopWidth = width;

    // Fallback si images pas encore chargées
    if (loopWidth < 10) {
      requestAnimationFrame(measure);
      return;
    }

    normalize();
    apply();
  }

  function normalize() {
    if (loopWidth <= 0) return;
    while (position <= -loopWidth) position += loopWidth;
    while (position > 0) position -= loopWidth;
  }

  function apply() {
    track.style.transform = "translate3d(" + position + "px, 0, 0)";
  }

  // ===== Autoplay =====
  function tick() {
    if (autoplay && !hoverPause && !isDragging) {
      position -= AUTO_SPEED;
      normalize();
      apply();
    }
    rafId = requestAnimationFrame(tick);
  }

  function stopAutoplay() {
    autoplay = false;
    clearTimeout(resumeTimer);
  }

  function scheduleResume() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(function () {
      autoplay = true;
    }, RESUME_DELAY);
  }

  // ===== Flèches =====
  function getCardWidth() {
    const first = track.querySelector(".mini-product");
    if (!first) return 220;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    return first.offsetWidth + gap;
  }

  function scrollByCards(direction) {
    stopAutoplay();
    position += getCardWidth() * STEP_CARDS * direction;
    normalize();
    apply();
    scheduleResume();
  }

  if (prevBtn) prevBtn.addEventListener("click", function () { scrollByCards(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { scrollByCards(1); });

  // ===== Pause au survol =====
  function setHoverPause(state) {
    hoverPause = state;
  }

  track.querySelectorAll(".mini-product").forEach(function (card) {
    card.addEventListener("mouseenter", function () { setHoverPause(true); });
    card.addEventListener("mouseleave", function () { setHoverPause(false); });
  });

  [prevBtn, nextBtn].forEach(function (btn) {
    if (!btn) return;
    btn.addEventListener("mouseenter", function () { setHoverPause(true); });
    btn.addEventListener("mouseleave", function () { setHoverPause(false); });
  });

  // ===== Drag / Swipe =====
  function onPointerDown(e) {
    if (e.target.closest(".slider-arrow")) return;
    isDragging = true;
    stopAutoplay();
    track.classList.add("is-dragging");
    startX = e.type.indexOf("touch") >= 0 ? e.touches[0].clientX : e.clientX;
    startPos = position;
    e.preventDefault();
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    var x = e.type.indexOf("touch") >= 0 ? e.touches[0].clientX : e.clientX;
    position = startPos + (x - startX);
    normalize();
    apply();
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove("is-dragging");
    scheduleResume();
  }

  track.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);

  track.addEventListener("touchstart", onPointerDown, { passive: false });
  window.addEventListener("touchmove", onPointerMove, { passive: false });
  window.addEventListener("touchend", onPointerUp);
  window.addEventListener("touchcancel", onPointerUp);

  // Empêche le clic lien après un drag
  var dragDistance = 0;
  track.addEventListener("mousedown", function () { dragDistance = 0; });
  track.addEventListener("mousemove", function (e) {
    if (isDragging) dragDistance = Math.abs(e.clientX - startX);
  });
  track.addEventListener("click", function (e) {
    if (dragDistance > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  // ===== Init =====
  if (document.readyState === "complete") {
    measure();
  } else {
    window.addEventListener("load", measure);
  }
  window.addEventListener("resize", measure);

  // Relance la mesure quand les images sont chargées
  track.querySelectorAll("img").forEach(function (img) {
    if (!img.complete) {
      img.addEventListener("load", measure);
    }
  });

  rafId = requestAnimationFrame(tick);
})();
  document.addEventListener("DOMContentLoaded", function () {
  // -------------------------------------------------------------
  // 1. GESTIONNAIRE DE LIGHTBOX (AVEC ZOOM AVANT / ARRIÈRE)
  // -------------------------------------------------------------
  let currentGallery = [];
  let currentIndex = 0;
  let currentZoom = 1; // 1 = 100%

  function isVideoUrl(url) {
    if (!url) return false;
    return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
  }

  function injectLightboxUI() {
    if (document.getElementById("amiratex-lightbox")) return;

    const lightboxHtml = `
      <div id="amiratex-lightbox" class="am-lightbox" style="display:none;">
        <span class="am-lightbox-close">&times;</span>
        
        <!-- Barre d'outils de Zoom -->
        <div class="am-lightbox-toolbar" id="am-zoom-toolbar">
          <button id="am-zoom-out" title="Zoom arrière">-</button>
          <span id="am-zoom-level">100%</span>
          <button id="am-zoom-in" title="Zoom avant">+</button>
        </div>

        <button class="am-lightbox-prev">&#10094;</button>
        <div class="am-lightbox-container-inner" style="display: flex; flex-direction: column; align-items: center;">
          <div class="am-lightbox-content" id="am-lightbox-media-container"></div>
          <div id="am-lightbox-caption" class="am-lightbox-caption"></div>
        </div>
        <button class="am-lightbox-next">&#10095;</button>
        <div class="am-lightbox-counter"><span id="am-current-idx">1</span> / <span id="am-total-idx">1</span></div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", lightboxHtml);

    const lb = document.getElementById("amiratex-lightbox");

    document.querySelector(".am-lightbox-close").onclick = closeLightbox;
    document.querySelector(".am-lightbox-prev").onclick = () => { resetZoom(); navigateLightbox(-1); };
    document.querySelector(".am-lightbox-next").onclick = () => { resetZoom(); navigateLightbox(1); };

    // Boutons de Zoom
    document.getElementById("am-zoom-in").onclick = (e) => {
      e.stopPropagation();
      changeZoom(0.25); // Augmente de 25%
    };
    document.getElementById("am-zoom-out").onclick = (e) => {
      e.stopPropagation();
      changeZoom(-0.25); // Diminue de 25%
    };

    lb.onclick = function (e) {
      if (e.target === lb || e.target.classList.contains("am-lightbox-container-inner")) {
        closeLightbox();
      }
    };
lb.addEventListener(
  "wheel",
  function (e) {
    const scrollable = e.target.closest(".am-lightbox-content");
    if (!scrollable) e.preventDefault();
    e.stopPropagation();
  },
  { passive: false }
);
lb.addEventListener(
  "touchmove",
  function (e) {
    const scrollable = e.target.closest(".am-lightbox-content");
    if (!scrollable) e.preventDefault();
    e.stopPropagation();
  },
  { passive: false }
);
    document.addEventListener("keydown", function (e) {
      if (lb.style.display !== "flex") return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") { resetZoom(); navigateLightbox(-1); }
      if (e.key === "ArrowRight") { resetZoom(); navigateLightbox(1); }
      if (e.key === "+" || e.key === "=") changeZoom(0.25);
      if (e.key === "-" || e.key === "_") changeZoom(-0.25);
    });
  }

  function changeZoom(step) {
    currentZoom = Math.min(Math.max(currentZoom + step, 1), 3); // Entre 100% (1) et 300% (3)
    const img = document.getElementById("am-lightbox-img");
    if (img) {
      img.style.transform = `scale(${currentZoom})`;
    }
    const zoomLevelEl = document.getElementById("am-zoom-level");
    if (zoomLevelEl) {
      zoomLevelEl.textContent = `${Math.round(currentZoom * 100)}%`;
    }
  }

  function resetZoom() {
    currentZoom = 1;
    const img = document.getElementById("am-lightbox-img");
    if (img) img.style.transform = `scale(1)`;
    const zoomLevelEl = document.getElementById("am-zoom-level");
    if (zoomLevelEl) zoomLevelEl.textContent = "100%";
  }

  function openLightbox(mediaArray, startingIndex = 0) {
  if (!mediaArray || mediaArray.length === 0) return;
  currentGallery = mediaArray;
  currentIndex = startingIndex;
  resetZoom();

  injectLightboxUI();
  updateLightboxMedia();

  const lb = document.getElementById("amiratex-lightbox");
  lb.style.display = "flex";

  const detailView = document.getElementById("product-detail-view");
  if (detailView) {
    detailView.dataset.prevOverflow = detailView.style.overflow || "";
    detailView.style.overflow = "hidden";
    detailView.classList.add("is-lightbox-open");
  }
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
}

  function updateLightboxMedia() {
    const container = document.getElementById("am-lightbox-media-container");
    const captionEl = document.getElementById("am-lightbox-caption");
    const toolbarEl = document.getElementById("am-zoom-toolbar");
    if (!container || !captionEl) return;

    container.innerHTML = "";
    const currentItem = currentGallery[currentIndex];
    const isVideo = isVideoUrl(currentItem.src);

    if (isVideo) {
      if (toolbarEl) toolbarEl.style.display = "none"; // Masque le zoom pour les vidéos
      const videoEl = document.createElement("video");
      videoEl.src = currentItem.src;
      videoEl.controls = true;
      videoEl.autoplay = true;
      videoEl.playsInline = true;
      videoEl.style.maxWidth = "100%";
      videoEl.style.maxHeight = "75vh";
      videoEl.style.borderRadius = "8px";
      container.appendChild(videoEl);
    } else {
      if (toolbarEl) toolbarEl.style.display = "flex"; // Affiche le zoom pour les images
      const imgEl = document.createElement("img");
      imgEl.id = "am-lightbox-img";
      imgEl.src = currentItem.src;
      imgEl.alt = currentItem.title || "";
      imgEl.style.transform = `scale(${currentZoom})`;
      container.appendChild(imgEl);
    }

    captionEl.textContent = currentItem.title || "";
    captionEl.style.display = currentItem.title ? "block" : "none";

    document.getElementById("am-current-idx").textContent = currentIndex + 1;
    document.getElementById("am-total-idx").textContent = currentGallery.length;

    const prevBtn = document.querySelector(".am-lightbox-prev");
    const nextBtn = document.querySelector(".am-lightbox-next");
    if (currentGallery.length <= 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
  }

  function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
    updateLightboxMedia();
  }

 function closeLightbox() {
  const lb = document.getElementById("amiratex-lightbox");
  if (lb) {
    lb.style.display = "none";
    const container = document.getElementById("am-lightbox-media-container");
    if (container) container.innerHTML = "";
  }

  const detailView = document.getElementById("product-detail-view");
  if (detailView) {
    detailView.style.overflow = detailView.dataset.prevOverflow || "auto";
    delete detailView.dataset.prevOverflow;
    detailView.classList.remove("is-lightbox-open");
  }
  if (detailView && detailView.style.display === "block") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
}

  // -------------------------------------------------------------
  // 2. ENVELOPPEMENT ET SURVOL "AGRANDIR"
  // -------------------------------------------------------------
  function enhanceDetailGalleryCaptions() {
    const detailContainer = document.getElementById("product-detail-view");
    if (!detailContainer) return;

    const mediaItems = detailContainer.querySelectorAll("img, video");
    mediaItems.forEach((el) => {
      if (el.closest(".am-lightbox") || el.closest(".am-media-block")) return;

      const mediaBlock = document.createElement("div");
      mediaBlock.className = "am-media-block";

      const wrapper = document.createElement("div");
      wrapper.className = "am-zoom-wrap";

      el.parentNode.insertBefore(mediaBlock, el);
      mediaBlock.appendChild(wrapper);
      wrapper.appendChild(el);

      const overlay = document.createElement("div");
      overlay.className = "am-zoom-overlay";
      overlay.innerHTML = `<span>🔍 Agrandir</span>`;
      wrapper.appendChild(overlay);

      const title = el.getAttribute("alt") || el.getAttribute("title");
      if (title) {
        const captionDiv = document.createElement("div");
        captionDiv.className = "media-caption";
        captionDiv.textContent = title;
        mediaBlock.appendChild(captionDiv);
      }
    });
  }

  const observer = new MutationObserver(() => {
    const detailView = document.getElementById("product-detail-view");
    if (detailView && detailView.style.display !== "none") {
      enhanceDetailGalleryCaptions();
    }
  });
  const detailViewElement = document.getElementById("product-detail-view");
  if (detailViewElement) {
    observer.observe(detailViewElement, { attributes: true, attributeFilter: ["style"] });
  }

  // -------------------------------------------------------------
  // 3. CAPTURE DES CLICS POUR LA LIGHTBOX
  // -------------------------------------------------------------
  document.addEventListener("click", function (e) {
    const clickedMedia = e.target.closest(
      "#product-detail-view img, #product-detail-view video, .modal img, .modal video, .detail-gallery img, .detail-gallery video, .slider img, .slider video"
    );

    if (!clickedMedia || clickedMedia.closest(".close-btn, .am-lightbox")) return;

    e.preventDefault();
    e.stopPropagation();

    const detailContainer =
      document.getElementById("product-detail-view") ||
      clickedMedia.closest(".detail-gallery, .modal, .slider");
    if (!detailContainer) return;

    const mediaSources = [];
    const allElements = Array.from(detailContainer.querySelectorAll("img, video"));

    allElements.forEach((el) => {
      let src = el.getAttribute("src");
      if (!src && el.tagName.toLowerCase() === "video") {
        const sourceChild = el.querySelector("source");
        if (sourceChild) src = sourceChild.getAttribute("src");
      }

      const title = el.getAttribute("alt") || el.getAttribute("title") || "";

      if (src && !mediaSources.some((m) => m.src === src) && !el.classList.contains("no-lightbox")) {
        mediaSources.push({ src: src, title: title });
      }
    });

    if (mediaSources.length === 0) return;

    let clickedSrc = clickedMedia.getAttribute("src");
    if (!clickedSrc && clickedMedia.tagName.toLowerCase() === "video") {
      const sourceChild = clickedMedia.querySelector("source");
      if (sourceChild) clickedSrc = sourceChild.getAttribute("src");
    }

    let startIndex = mediaSources.findIndex((m) => m.src === clickedSrc);
    if (startIndex === -1) startIndex = 0;

    openLightbox(mediaSources, startIndex);
  });

  // -------------------------------------------------------------
  // 4. ÉCOUTEURS SUR LES CARTES DE LA GRILLE PRODUIT
  // -------------------------------------------------------------
  document.querySelectorAll(".product-grid .product-card").forEach((card) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", function (e) {
      if (e.target.closest(".download-btn")) return;

      e.preventDefault();
      e.stopPropagation();

      const cardId = this.id;
      if (!cardId) return;

      if (typeof openDetailView === "function") {
        openDetailView(cardId);
      } else {
        const detailView = document.getElementById("product-detail-view");
        const lang = window.amiratexCurrentLanguage?.() || "fr";
        const localized =
          window.amiratexDetailProducts?.[lang]?.[cardId] ||
          window.amiratexDetailProducts?.fr?.[cardId];
        const media =
          window.amiratexDetailMedia?.[lang]?.[cardId] ||
          window.amiratexDetailMedia?.fr?.[cardId];

        if (!localized && !media) return;

        document.getElementById("detail-title").textContent = localized?.title || "";
        document.getElementById("detail-desc").textContent = localized?.desc || "";
        document.getElementById("detail-content-extra").innerHTML = localized?.extra || "";
        const dl = document.getElementById("detail-download");
        if (dl) {
          dl.href = media?.download || "#";
          dl.textContent = window.amiratexText?.("detailDownload") || "Télécharger le catalogue";
        }

        if (typeof loadGallery === "function") {
          loadGallery(media?.gallery || []);
        }
        if (typeof attachGalleryNav === "function") {
          attachGalleryNav();
        }

        if (detailView) {
          detailView.style.display = "block";
          document.body.style.overflow = "hidden";
        }
      }

      setTimeout(enhanceDetailGalleryCaptions, 50);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("amiratexInfoBox");
  var regions = document.querySelectorAll(".amiratex-region");
  var buttons = document.querySelectorAll(".amiratex-buttons .amiratex-btn");

  // Créer l'infobulle une seule fois
  var tip = document.getElementById("amiratex-map-tooltip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "amiratex-map-tooltip";
    document.body.appendChild(tip);
  }

  function readRegion(el) {
    if (!el) return null;
    var name = el.getAttribute("data-name");
    var info = el.getAttribute("data-info");
    if (!name || !info) return null;
    return { name: name, info: info };
  }

  function showTip(data, x, y) {
    if (!data) return;
    tip.innerHTML = "<strong>" + data.name + "</strong>" + data.info;
    tip.classList.add("show");

    var left = x + 16;
    var top = y + 16;
    if (left + 270 > window.innerWidth) left = x - 276;
    if (top + 100 > window.innerHeight) top = y - 100;

    tip.style.left = left + "px";
    tip.style.top = top + "px";

    if (box) {
      box.innerHTML = "<strong>" + data.name + " :</strong> " + data.info;
    }
  }

  function hideTip() {
    tip.classList.remove("show");
    if (box) {
      box.textContent =
  window.amiratexText?.("mapInfoDefault") ||
  "Hover over a region or click a button below.";
    }
  }

  // Survol des continents (SVG)
  regions.forEach(function (region) {
    region.addEventListener("mouseenter", function (e) {
      showTip(readRegion(region), e.clientX, e.clientY);
    });
    region.addEventListener("mousemove", function (e) {
      if (!tip.classList.contains("show")) return;
      var left = e.clientX + 16;
      var top = e.clientY + 16;
      if (left + 270 > window.innerWidth) left = e.clientX - 276;
      if (top + 100 > window.innerHeight) top = e.clientY - 100;
      tip.style.left = left + "px";
      tip.style.top = top + "px";
    });
    region.addEventListener("mouseleave", hideTip);
  });

  // Clic sur les boutons
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-region");
      if (!key) return;
      var region = document.querySelector(
        '.amiratex-region[data-region-key="' + key + '"]'
      );
      var data = readRegion(region);
      if (data && box) {
        box.innerHTML = "<strong>" + data.name + " :</strong> " + data.info;
      }
    });
  });
});
/**
 * Rendu dynamique de la galerie avec overlay au survol (Titre + Badge Agrandir).
 * @param {Array} galleryList - Liste des médias [{ type: 'img'|'video', src: '...', title: '...' }]
 * @param {string} productTitle - Titre de secours si aucun titre individuel n'est fourni
 */
function renderGallery(galleryList = [], productTitle = "") {
  const galleryTrack = document.getElementById("gallery-track-main");
  const galleryDots = document.getElementById("gallery-dots-main");

  if (!galleryTrack) return;

  galleryTrack.innerHTML = "";
  if (galleryDots) galleryDots.innerHTML = "";
  galleryTrack.scrollLeft = 0;

  if (!Array.isArray(galleryList) || galleryList.length === 0) {
    galleryTrack.innerHTML = `<div class="gallery-empty-msg" style="padding: 20px; text-align: center; color: #888;">Aucun média disponible</div>`;
    return;
  }

  galleryList.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "gallery-item";

    const mediaTitle = (item.title || "").trim() || productTitle || `Média ${index + 1}`;

    const mediaBlock = document.createElement("div");
    mediaBlock.className = "am-media-block";

    const wrapper = document.createElement("div");
    wrapper.className = "am-zoom-wrap";

    // Média (Vidéo ou Image)
    if (item.type === "video" || /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(item.src)) {
      const videoEl = document.createElement("video");
      videoEl.src = item.src;
      videoEl.muted = true;
      videoEl.loop = true;
      videoEl.controls = true;
      videoEl.playsInline = true;
      videoEl.setAttribute("preload", "metadata");
      wrapper.appendChild(videoEl);
    } else {
      const imgEl = document.createElement("img");
      imgEl.src = item.src;
      imgEl.alt = mediaTitle;
      imgEl.loading = "lazy";
      imgEl.decoding = "async";
      wrapper.appendChild(imgEl);
    }

    // Calque de survol : Badge "Agrandir" + Titre
    const overlay = document.createElement("div");
    overlay.className = "am-hover-overlay";
    overlay.innerHTML = `
      <span class="am-zoom-badge">🔍 Agrandir</span>
      ${mediaTitle ? `<span class="am-hover-title">${mediaTitle}</span>` : ""}
    `;
    wrapper.appendChild(overlay);

    mediaBlock.appendChild(wrapper);

    // Légende fixe sous l'image
    if (mediaTitle) {
      const captionDiv = document.createElement("div");
      captionDiv.className = "media-caption";
      captionDiv.textContent = mediaTitle;
      mediaBlock.appendChild(captionDiv);
    }

    slide.appendChild(mediaBlock);
    galleryTrack.appendChild(slide);

    // Puces (Dots)
    if (galleryDots) {
      const dot = document.createElement("span");
      if (index === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        const itemWidth = galleryTrack.clientWidth;
        galleryTrack.scrollTo({ left: index * itemWidth, behavior: "smooth" });
        updateActiveDot(index);
      });
      galleryDots.appendChild(dot);
    }
  });

  galleryTrack.onscroll = () => {
    const itemWidth = galleryTrack.clientWidth || 1;
    const index = Math.round(galleryTrack.scrollLeft / itemWidth);
    updateActiveDot(index);
  };

  if (typeof attachGalleryNav === "function") {
    attachGalleryNav();
  }
}

function updateActiveDot(index) {
  const galleryDots = document.getElementById("gallery-dots-main");
  if (!galleryDots) return;
  Array.from(galleryDots.children).forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

window.renderGallery = renderGallery;
window.updateActiveDot = updateActiveDot;
/* ==========================================================
   VIDÉO – PLAY dès entrée en vue / PAUSE dès sortie de vue
   ========================================================== */
(function () {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          // La vidéo devient visible → lecture
          // muted obligatoire pour autoplay dans la plupart des navigateurs
          video.muted = true;
          const playPromise = video.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {
              // Autoplay bloqué par le navigateur : on ignore silencieusement
            });
          }
        } else {
          // La vidéo sort de l’écran → pause immédiate
          video.pause();
        }
      });
    },
    {
      threshold: 0.35, // démarre quand ~35 % de la vidéo est visible
      // root: null = viewport
    }
  );

  function observeVideos(root = document) {
    root.querySelectorAll("video").forEach((video) => {
      if (video.dataset.amObserved === "1") return;
      video.dataset.amObserved = "1";

      // Prépare l’autoplay (recommandé)
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("muted", "");

      videoObserver.observe(video);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    observeVideos();

    // Pour les vidéos ajoutées dynamiquement (galerie produit, etc.)
    const mo = new MutationObserver(() => observeVideos());
    mo.observe(document.body, { childList: true, subtree: true });
  });
})();
// 1. Récupérer le bouton et la vue détaillée
const quoteBtn = document.getElementById('detail-quote');
const detailView = document.getElementById('product-detail-view'); // ou votre classe/ID de fermeture

if (quoteBtn) {
  quoteBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le saut instantané (qui est bloqué)

    // 2. Fermer la vue détaillée (ajustez selon votre logique d'affichage)
    detailView.style.display = 'none'; // ou retirez une classe active, ex: detailView.classList.remove('active');

    // 3. Rediriger/Scroller vers le formulaire de contact après la fermeture
    const contactSection = document.getElementById('contact'); // Mettez l'ID de votre formulaire
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}


