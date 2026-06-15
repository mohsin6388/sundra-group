import BarsanaPacketYellow from "../assets/Barsana-D.webp"
import BarsanaPacketPink from "../assets/BarsanaPink.webp"
import BarsanaPacketRed from "../assets/Barsana-Packet.webp"
import BuffSpecial from "../assets/Buff-Special.webp"
import Churi from "../assets/Churi.webp"
import MultiGranChukar from "../assets/Multigran-Chokar.webp"
import RoyalMixture from "../assets/Royal-Mixture.webp"
import Sudarshan from "../assets/Sudarshan.webp"
import Super from "../assets/Super.webp"
import SupremePlus from "../assets/Supremeplus.webp"
import eightThousand from "../assets/8000.webp"


// ── Company Info ──────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "Sundra Group",
  brand: "Sundra Group",
  group: "Sundra Group",
  founder: "Deific Digital",
  established: "2010",
  tagline: "Madhur Swad, Behti Doodh Dhar",
  taglineHi: "मधुर स्वाद, बहती दूध धार",
  regOffice: "Kanpur, Uttar Pradesh, India",
  unit: "Kanpur Dehat, Uttar Pradesh, India",
  email: "info@barsana.com",
  phones: ["+91 9876543210", "+91 9876543211"],
  whatsapp: "919876543210",
};

// ── Gallery Images ─────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  BarsanaPacketYellow, // cow farm
  BarsanaPacketPink, // cow farm
  BarsanaPacketRed, // cow farm
  BuffSpecial,
  Churi,
  MultiGranChukar,
  RoyalMixture,
  Sudarshan,
  Super,
  SupremePlus,
  eightThousand
];



export const PRODUCTS = [
  // BarsanaPacketYellow
  {
    slug: "barsana-super",
    name: "Barsana Gold",
    nameHi: "बरसाना गोल्ड",
    tag: "Bestseller",
    tagHi: "बेस्टसेलर",
    accent: "#1f4d2c",
    image: BarsanaPacketYellow,
    summary:
      "Our flagship cattle feed for high-yielding cows and buffaloes. Balanced energy, protein and minerals for peak daily production.",
    summaryHi:
      "अधिक दूध देने वाली गायों और भैंसों के लिए हमारा प्रमुख पशु आहार। अधिकतम दैनिक उत्पादन के लिए संतुलित ऊर्जा, प्रोटीन और खनिज।",
    yield: "20–25 L/day",
    yieldHi: "20–25 लीटर/दिन",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Up to +22% milk yield increase",
      "Optimised protein-energy ratio",
      "Steam cooked for better digestion",
      "Rich in Vitamin A, D & E",
      "Zero artificial colours",
      "Ideal for HF, Sahiwal & Murrah",
    ],
    benefitsHi: [
      "दूध उत्पादन में +22% तक की वृद्धि",
      "प्रोटीन-ऊर्जा का अनुकूलित अनुपात",
      "बेहतर पाचन के लिए स्टीम कुक्ड",
      "विटामिन A, D और E से भरपूर",
      "शून्य कृत्रिम रंग",
      "HF, साहीवाल और मुर्रा के लिए आदर्श",
    ],
  },

  // BarsanaPacketPink
  {
    slug: "barsana-gold",
    name: "Barsana Super",
    nameHi: "बरसाना सुपर",
    tag: "Premium",
    tagHi: "प्रीमियम",
    accent: "#c9871f",
    image: BarsanaPacketPink,
    summary:
      "Premium formulation for elite dairy herds targeting 25+ litres per day with enriched micro-nutrient profile.",
    summaryHi:
      "25+ लीटर प्रतिदिन लक्ष्य करने वाले श्रेष्ठ डेयरी पशुओं के लिए प्रीमियम फॉर्मूलेशन, समृद्ध सूक्ष्म पोषक तत्वों के साथ।",
    yield: "25–30 L/day",
    yieldHi: "25–30 लीटर/दिन",
    protein: "26%",
    fat: "6%",
    benefits: [
      "Boosts butterfat content",
      "Mineral-chelate technology",
      "Supports reproductive health",
      "Enhanced rumen buffering",
      "Reduces somatic cell count",
      "For top-performing animals",
    ],
    benefitsHi: [
      "बटरफैट सामग्री को बढ़ाता है",
      "मिनरल-चीलेट तकनीक",
      "प्रजनन स्वास्थ्य को सहारा देता है",
      "उन्नत रूमेन बफरिंग",
      "सोमैटिक सेल काउंट कम करता है",
      "शीर्ष प्रदर्शन करने वाले पशुओं के लिए",
    ],
  },

  // BarsanaPacketRed
  {
    slug: "barsana-8000",
    name: "Barsana Pashu Aahar",
    nameHi: "बरसाना पशु आहार",
    tag: "Elite",
    tagHi: "एलीट",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Our elite formula engineered for breeds targeting 8,000+ kg annual lactation. Scientifically balanced for maximum output.",
    summaryHi:
      "8,000+ किलो वार्षिक दुग्ध उत्पादन लक्ष्य करने वाली नस्लों के लिए हमारा एलीट फॉर्मूला। अधिकतम आउटपुट के लिए वैज्ञानिक रूप से संतुलित।",
    yield: "30+ L/day",
    yieldHi: "30+ लीटर/दिन",
    protein: "28%",
    fat: "7%",
    benefits: [
      "Targets 8000 kg/year lactation",
      "Advanced amino-acid profile",
      "Rumen-protected fat inclusion",
      "High energy density",
      "Supports transition cow health",
      "For HF cross & elite buffaloes",
    ],
    benefitsHi: [
      "8000 किग्रा/वर्ष दुग्ध उत्पादन का लक्ष्य",
      "उन्नत अमीनो-एसिड प्रोफाइल",
      "रूमेन-प्रोटेक्टेड फैट इन्क्लूजन",
      "उच्च ऊर्जा घनत्व",
      "ट्रांजिशन गाय के स्वास्थ्य को सहारा",
      "HF क्रॉस और एलीट भैंसों के लिए",
    ],
  },

  // BuffSpecial
  {
    slug: "barsana-buff-special",
    name: "Buff Speciale",
    nameHi: "बफ स्पेशल",
    tag: "Buffalo Specialist",
    tagHi: "भैंस विशेषज्ञ",
    accent: "#2d6a3e",
    image: BuffSpecial,
    summary:
      "Formulated specifically for Murrah, Surti and other buffalo breeds to maximise fat-rich milk production.",
    summaryHi:
      "मुर्रा, सुरती और अन्य भैंस नस्लों के लिए विशेष रूप से तैयार, वसायुक्त दूध उत्पादन को अधिकतम करने के लिए।",
    yield: "15–22 L/day",
    yieldHi: "15–22 लीटर/दिन",
    protein: "22%",
    fat: "6.5%",
    benefits: [
      "Buffalo-optimised mineral mix",
      "Higher butterfat yield",
      "Improves coat and health",
      "Supports heavy body buffaloes",
      "Reduces heat stress",
      "Proven across U.P. & Punjab farms",
    ],
    benefitsHi: [
      "भैंस के लिए अनुकूलित मिनरल मिक्स",
      "अधिक बटरफैट उत्पादन",
      "त्वचा और स्वास्थ्य में सुधार",
      "भारी शरीर वाली भैंसों को सहारा",
      "गर्मी के तनाव को कम करता है",
      "यू.पी. और पंजाब के फार्मों पर सिद्ध",
    ],
  },

  // Churi
  {
    slug: "barsana-supreme-plus",
    name: "Supreme Plus",
    nameHi: "सुप्रीम प्लस",
    tag: "Value",
    tagHi: "वैल्यू",
    accent: "#c9871f",
    image: Churi,
    summary:
      "Everyday ration for small dairy farmers — reliable nutrition at accessible price points without compromising on quality.",
    summaryHi:
      "छोटे डेयरी किसानों के लिए रोज़ाना का राशन — गुणवत्ता से समझौता किए बिना किफायती कीमत पर विश्वसनीय पोषण।",
    yield: "12–18 L/day",
    yieldHi: "12–18 लीटर/दिन",
    protein: "20%",
    fat: "3.5%",
    benefits: [
      "Cost-effective daily feed",
      "Complete vitamin inclusion",
      "Suitable for mixed herds",
      "Easy on digestion",
      "Available in 25 & 50 KG bags",
      "Trusted across 10,000+ farms",
    ],
    benefitsHi: [
      "किफायती दैनिक चारा",
      "पूर्ण विटामिन समावेश",
      "मिश्रित झुंड के लिए उपयुक्त",
      "पाचन में आसान",
      "25 और 50 KG बैग में उपलब्ध",
      "10,000+ फार्मों पर भरोसेमंद",
    ],
  },

  // Multigran Chokar
  {
    slug: "barsana-multi-gran-chokar",
    name: "Multi Gran Chokar",
    nameHi: "मल्टी ग्रान चोकर",
    tag: "Young Stock",
    tagHi: "युवा पशु",
    accent: "#6d4c41",
    image: MultiGranChukar,
    summary:
      "Purpose-built starter feed for calves from 2 weeks to 3 months. Supports rumen development and healthy early growth.",
    summaryHi:
      "2 सप्ताह से 3 महीने तक के बछड़ों के लिए विशेष रूप से बना स्टार्टर फीड। रूमेन विकास और स्वस्थ प्रारंभिक वृद्धि को सहारा देता है।",
    yield: "—",
    yieldHi: "—",
    protein: "22%",
    fat: "4%",
    benefits: [
      "Accelerates rumen development",
      "High palatability for young stock",
      "Probiotics for gut health",
      "Reduces weaning stress",
      "Pellet form for easy intake",
      "For calves 2 weeks–3 months",
    ],
    benefitsHi: [
      "रूमेन विकास को तेज करता है",
      "युवा पशुओं के लिए उच्च स्वादिष्टता",
      "आंत स्वास्थ्य के लिए प्रोबायोटिक्स",
      "दूध छुड़ाने के तनाव को कम करता है",
      "आसान सेवन के लिए पेलेट फॉर्म",
      "2 सप्ताह–3 महीने के बछड़ों के लिए",
    ],
  },

  // RoyalMixture
  {
    slug: "barsana-royal-mixture",
    name: "Royal Mixture",
    nameHi: "रॉयल मिक्सचर",
    tag: "Supplement",
    tagHi: "सप्लीमेंट",
    accent: "#1565c0",
    image: RoyalMixture,
    summary:
      "Concentrated mineral and vitamin supplement to correct deficiencies and maintain year-round herd health.",
    summaryHi:
      "कमियों को दूर करने और साल भर झुंड के स्वास्थ्य को बनाए रखने के लिए केंद्रित खनिज और विटामिन सप्लीमेंट।",
    yield: "—",
    yieldHi: "—",
    protein: "—",
    fat: "—",
    benefits: [
      "Corrects calcium & phosphorus imbalances",
      "Prevents milk fever",
      "Improves conception rates",
      "Zinc & copper for hoof health",
      "Daily 50–80g dosing",
      "Compatible with all Barsana feeds",
    ],
    benefitsHi: [
      "कैल्शियम और फास्फोरस असंतुलन को ठीक करता है",
      "मिल्क फीवर को रोकता है",
      "गर्भाधान दर में सुधार करता है",
      "खुर स्वास्थ्य के लिए जिंक और कॉपर",
      "दैनिक 50–80g खुराक",
      "सभी बरसाना फीड के साथ संगत",
    ],
  },

  // Sudarshan
  {
    slug: "barsana-sudarshan",
    name: "Barsana Sudarshan",
    nameHi: "बरसाना सुदर्शन",
    tag: "Organic",
    tagHi: "ऑर्गेनिक",
    accent: "#558b2f",
    image: Sudarshan,
    summary:
      "Certified organic cattle feed for farms targeting organic dairy certification. No synthetic additives or preservatives.",
    summaryHi:
      "ऑर्गेनिक डेयरी प्रमाणीकरण के लक्ष्य रखने वाले फार्मों के लिए प्रमाणित ऑर्गेनिक पशु आहार। कोई सिंथेटिक एडिटिव या परिरक्षक नहीं।",
    yield: "16–22 L/day",
    yieldHi: "16–22 लीटर/दिन",
    protein: "21%",
    fat: "4.5%",
    benefits: [
      "Organic India certified",
      "Zero synthetic additives",
      "Non-GMO ingredients",
      "Ideal for organic dairy farms",
      "Supports premium milk pricing",
      "Sustainably sourced grains",
    ],
    benefitsHi: [
      "ऑर्गेनिक इंडिया प्रमाणित",
      "शून्य सिंथेटिक एडिटिव",
      "नॉन-GMO सामग्री",
      "ऑर्गेनिक डेयरी फार्मों के लिए आदर्श",
      "प्रीमियम दूध मूल्य निर्धारण को सहारा",
      "टिकाऊ रूप से प्राप्त अनाज",
    ],
  },

  // Super
  {
    slug: "barsana-super-economy",
    name: "Super",
    nameHi: "सुपर",
    tag: "New",
    tagHi: "नया",
    accent: "#4a148c",
    image: Super,
    summary:
      "A high-energy, cost-efficient formula designed to sustain baseline daily milk production and maintain healthy cattle body weight.",
    summaryHi:
      "एक उच्च-ऊर्जा, लागत-कुशल फॉर्मूला जो बेसलाइन दैनिक दूध उत्पादन को बनाए रखने और स्वस्थ पशु शरीर भार को बनाए रखने के लिए डिज़ाइन किया गया है।",
    yield: "14–20 L/day",
    yieldHi: "14–20 लीटर/दिन",
    protein: "21%",
    fat: "4.0%",
    benefits: [
      "Provides sustained daily energy",
      "Highly palatable mash texture",
      "Supports stable milk fat levels",
      "Maintains optimal body condition",
      "Enriched with standard trace minerals",
      "Budget-friendly commercial feed option",
    ],
    benefitsHi: [
      "निरंतर दैनिक ऊर्जा प्रदान करता है",
      "अत्यधिक स्वादिष्ट मैश टेक्सचर",
      "स्थिर मिल्क फैट स्तर को सहारा देता है",
      "इष्टतम शारीरिक स्थिति बनाए रखता है",
      "मानक ट्रेस मिनरल्स से समृद्ध",
      "बजट-अनुकूल व्यावसायिक चारा विकल्प",
    ],
  },

  // SupremePlus
  {
    slug: "barsana-supreme-plus-advanced",
    name: "Supreme Plus",
    nameHi: "सुप्रीम प्लस",
    tag: "New",
    tagHi: "नया",
    accent: "#7b1fa2",
    image: SupremePlus,
    summary:
      "An advanced mid-tier feed specifically calibrated with an enhanced protein profile to improve overall milk solids-not-fat (SNF) percentages.",
    summaryHi:
      "एक उन्नत मिड-टियर फीड जो समग्र मिल्क सॉलिड्स-नॉट-फैट (SNF) प्रतिशत में सुधार के लिए बेहतर प्रोटीन प्रोफाइल के साथ विशेष रूप से कैलिब्रेट किया गया है।",
    yield: "18–24 L/day",
    yieldHi: "18–24 लीटर/दिन",
    protein: "23%",
    fat: "5.5%",
    benefits: [
      "Significantly improves SNF levels",
      "Balanced calcium-to-phosphorus ratio",
      "Boosts immunity against local diseases",
      "Optimized for seasonal transition periods",
      "Contains gut-friendly live yeast cultures",
      "Ideal for commercial crossbreed cows",
    ],
    benefitsHi: [
      "SNF स्तर में उल्लेखनीय सुधार",
      "संतुलित कैल्शियम-से-फास्फोरस अनुपात",
      "स्थानीय बीमारियों के खिलाफ प्रतिरोधक क्षमता बढ़ाता है",
      "मौसमी संक्रमण काल के लिए अनुकूलित",
      "आंत-अनुकूल लाइव यीस्ट कल्चर युक्त",
      "व्यावसायिक क्रॉसब्रीड गायों के लिए आदर्श",
    ],
  },

  // eightThousand
  {
    slug: "barsana-eight-thousand-buffalo",
    name: "Eight Thousand",
    nameHi: "8000",
    tag: "New",
    tagHi: "नया",
    accent: "#e91e63",
    image: eightThousand,
    summary:
      "Our elite, high-fat formulation engineered specifically for high-potential Murrah buffaloes to maximize thick A2 fat-rich milk production.",
    summaryHi:
      "हमारा एलीट, उच्च-वसा फॉर्मूलेशन विशेष रूप से उच्च-क्षमता वाली मुर्रा भैंसों के लिए तैयार किया गया है, जो गाढ़े A2 वसायुक्त दूध उत्पादन को अधिकतम करता है।",
    yield: "20–28 L/day",
    yieldHi: "20–28 लीटर/दिन",
    protein: "25%",
    fat: "7.5%",
    benefits: [
      "Maximises heavy A2 fat output",
      "Rumen-protected bypass fat infusion",
      "Supports heavy prolonged lactation cycles",
      "Improves buffalo body condition score",
      "Advanced chelated zinc & copper complex",
      "Newly launching across U.P. & Bihar markets",
    ],
    benefitsHi: [
      "भारी A2 फैट आउटपुट को अधिकतम करता है",
      "रूमेन-प्रोटेक्टेड बाईपास फैट इन्फ्यूजन",
      "लंबे दुग्धकाल चक्र को सहारा देता है",
      "भैंस के शारीरिक स्कोर में सुधार",
      "उन्नत चीलेटेड जिंक और कॉपर कॉम्प्लेक्स",
      "यू.पी. और बिहार बाजारों में नई लॉन्च",
    ],
  },
];


export const HERO_PRODUCTS = [
  // BarsanaPacketYellow
  {
    slug: "barsana-super",
    name: "Barsana Gold",
    nameHi: "बरसाना गोल्ड",
    tag: "Bestseller",
    tagHi: "बेस्टसेलर",
    accent: "#1f4d2c",
    image: BarsanaPacketYellow,
    summary:
      "Our flagship cattle feed for high-yielding cows and buffaloes. Balanced energy, protein and minerals for peak daily production.",
    summaryHi:
      "अधिक दूध देने वाली गायों और भैंसों के लिए हमारा प्रमुख पशु आहार। अधिकतम दैनिक उत्पादन के लिए संतुलित ऊर्जा, प्रोटीन और खनिज।",
    yield: "20–25 L/day",
    yieldHi: "20–25 लीटर/दिन",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Up to +22% milk yield increase",
      "Optimised protein-energy ratio",
      "Steam cooked for better digestion",
      "Rich in Vitamin A, D & E",
      "Zero artificial colours",
      "Ideal for HF, Sahiwal & Murrah",
    ],
    benefitsHi: [
      "दूध उत्पादन में +22% तक की वृद्धि",
      "प्रोटीन-ऊर्जा का अनुकूलित अनुपात",
      "बेहतर पाचन के लिए स्टीम कुक्ड",
      "विटामिन A, D और E से भरपूर",
      "शून्य कृत्रिम रंग",
      "HF, साहीवाल और मुर्रा के लिए आदर्श",
    ],
  },

  // BarsanaPacketPink
  {
    slug: "barsana-gold",
    name: "Barsana Super",
    nameHi: "बरसाना सुपर",
    tag: "Premium",
    tagHi: "प्रीमियम",
    accent: "#c9871f",
    image: BarsanaPacketPink,
    summary:
      "Premium formulation for elite dairy herds targeting 25+ litres per day with enriched micro-nutrient profile.",
    summaryHi:
      "25+ लीटर प्रतिदिन लक्ष्य करने वाले श्रेष्ठ डेयरी पशुओं के लिए प्रीमियम फॉर्मूलेशन, समृद्ध सूक्ष्म पोषक तत्वों के साथ।",
    yield: "25–30 L/day",
    yieldHi: "25–30 लीटर/दिन",
    protein: "26%",
    fat: "6%",
    benefits: [
      "Boosts butterfat content",
      "Mineral-chelate technology",
      "Supports reproductive health",
      "Enhanced rumen buffering",
      "Reduces somatic cell count",
      "For top-performing animals",
    ],
    benefitsHi: [
      "बटरफैट सामग्री को बढ़ाता है",
      "मिनरल-चीलेट तकनीक",
      "प्रजनन स्वास्थ्य को सहारा देता है",
      "उन्नत रूमेन बफरिंग",
      "सोमैटिक सेल काउंट कम करता है",
      "शीर्ष प्रदर्शन करने वाले पशुओं के लिए",
    ],
  },

  // BarsanaPacketRed
  {
    slug: "barsana-8000",
    name: "Barsana Pashu Aahar",
    nameHi: "बरसाना पशु आहार",
    tag: "Elite",
    tagHi: "एलीट",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Our elite formula engineered for breeds targeting 8,000+ kg annual lactation. Scientifically balanced for maximum output.",
    summaryHi:
      "8,000+ किलो वार्षिक दुग्ध उत्पादन लक्ष्य करने वाली नस्लों के लिए हमारा एलीट फॉर्मूला। अधिकतम आउटपुट के लिए वैज्ञानिक रूप से संतुलित।",
    yield: "30+ L/day",
    yieldHi: "30+ लीटर/दिन",
    protein: "28%",
    fat: "7%",
    benefits: [
      "Targets 8000 kg/year lactation",
      "Advanced amino-acid profile",
      "Rumen-protected fat inclusion",
      "High energy density",
      "Supports transition cow health",
      "For HF cross & elite buffaloes",
    ],
    benefitsHi: [
      "8000 किग्रा/वर्ष दुग्ध उत्पादन का लक्ष्य",
      "उन्नत अमीनो-एसिड प्रोफाइल",
      "रूमेन-प्रोटेक्टेड फैट इन्क्लूजन",
      "उच्च ऊर्जा घनत्व",
      "ट्रांजिशन गाय के स्वास्थ्य को सहारा",
      "HF क्रॉस और एलीट भैंसों के लिए",
    ],
  },

  //== Repeat ===
  // BarsanaPacketYellow
  {
    slug: "barsana-super",
    name: "Barsana Gold",
    nameHi: "बरसाना गोल्ड",
    tag: "Bestseller",
    tagHi: "बेस्टसेलर",
    accent: "#1f4d2c",
    image: BarsanaPacketYellow,
    summary:
      "Our flagship cattle feed for high-yielding cows and buffaloes. Balanced energy, protein and minerals for peak daily production.",
    summaryHi:
      "अधिक दूध देने वाली गायों और भैंसों के लिए हमारा प्रमुख पशु आहार। अधिकतम दैनिक उत्पादन के लिए संतुलित ऊर्जा, प्रोटीन और खनिज।",
    yield: "20–25 L/day",
    yieldHi: "20–25 लीटर/दिन",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Up to +22% milk yield increase",
      "Optimised protein-energy ratio",
      "Steam cooked for better digestion",
      "Rich in Vitamin A, D & E",
      "Zero artificial colours",
      "Ideal for HF, Sahiwal & Murrah",
    ],
    benefitsHi: [
      "दूध उत्पादन में +22% तक की वृद्धि",
      "प्रोटीन-ऊर्जा का अनुकूलित अनुपात",
      "बेहतर पाचन के लिए स्टीम कुक्ड",
      "विटामिन A, D और E से भरपूर",
      "शून्य कृत्रिम रंग",
      "HF, साहीवाल और मुर्रा के लिए आदर्श",
    ],
  },

  // BarsanaPacketPink
  {
    slug: "barsana-gold",
    name: "Barsana Super",
    nameHi: "बरसाना सुपर",
    tag: "Premium",
    tagHi: "प्रीमियम",
    accent: "#c9871f",
    image: BarsanaPacketPink,
    summary:
      "Premium formulation for elite dairy herds targeting 25+ litres per day with enriched micro-nutrient profile.",
    summaryHi:
      "25+ लीटर प्रतिदिन लक्ष्य करने वाले श्रेष्ठ डेयरी पशुओं के लिए प्रीमियम फॉर्मूलेशन, समृद्ध सूक्ष्म पोषक तत्वों के साथ।",
    yield: "25–30 L/day",
    yieldHi: "25–30 लीटर/दिन",
    protein: "26%",
    fat: "6%",
    benefits: [
      "Boosts butterfat content",
      "Mineral-chelate technology",
      "Supports reproductive health",
      "Enhanced rumen buffering",
      "Reduces somatic cell count",
      "For top-performing animals",
    ],
    benefitsHi: [
      "बटरफैट सामग्री को बढ़ाता है",
      "मिनरल-चीलेट तकनीक",
      "प्रजनन स्वास्थ्य को सहारा देता है",
      "उन्नत रूमेन बफरिंग",
      "सोमैटिक सेल काउंट कम करता है",
      "शीर्ष प्रदर्शन करने वाले पशुओं के लिए",
    ],
  },

  // BarsanaPacketRed
  {
    slug: "barsana-8000",
    name: "Barsana Pashu Aahar",
    nameHi: "बरसाना पशु आहार",
    tag: "Elite",
    tagHi: "एलीट",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Our elite formula engineered for breeds targeting 8,000+ kg annual lactation. Scientifically balanced for maximum output.",
    summaryHi:
      "8,000+ किलो वार्षिक दुग्ध उत्पादन लक्ष्य करने वाली नस्लों के लिए हमारा एलीट फॉर्मूला। अधिकतम आउटपुट के लिए वैज्ञानिक रूप से संतुलित।",
    yield: "30+ L/day",
    yieldHi: "30+ लीटर/दिन",
    protein: "28%",
    fat: "7%",
    benefits: [
      "Targets 8000 kg/year lactation",
      "Advanced amino-acid profile",
      "Rumen-protected fat inclusion",
      "High energy density",
      "Supports transition cow health",
      "For HF cross & elite buffaloes",
    ],
    benefitsHi: [
      "8000 किग्रा/वर्ष दुग्ध उत्पादन का लक्ष्य",
      "उन्नत अमीनो-एसिड प्रोफाइल",
      "रूमेन-प्रोटेक्टेड फैट इन्क्लूजन",
      "उच्च ऊर्जा घनत्व",
      "ट्रांजिशन गाय के स्वास्थ्य को सहारा",
      "HF क्रॉस और एलीट भैंसों के लिए",
    ],
  },

  // === Repeat ===
  // BarsanaPacketYellow
  {
    slug: "barsana-super",
    name: "Barsana Gold",
    nameHi: "बरसाना गोल्ड",
    tag: "Bestseller",
    tagHi: "बेस्टसेलर",
    accent: "#1f4d2c",
    image: BarsanaPacketYellow,
    summary:
      "Our flagship cattle feed for high-yielding cows and buffaloes. Balanced energy, protein and minerals for peak daily production.",
    summaryHi:
      "अधिक दूध देने वाली गायों और भैंसों के लिए हमारा प्रमुख पशु आहार। अधिकतम दैनिक उत्पादन के लिए संतुलित ऊर्जा, प्रोटीन और खनिज।",
    yield: "20–25 L/day",
    yieldHi: "20–25 लीटर/दिन",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Up to +22% milk yield increase",
      "Optimised protein-energy ratio",
      "Steam cooked for better digestion",
      "Rich in Vitamin A, D & E",
      "Zero artificial colours",
      "Ideal for HF, Sahiwal & Murrah",
    ],
    benefitsHi: [
      "दूध उत्पादन में +22% तक की वृद्धि",
      "प्रोटीन-ऊर्जा का अनुकूलित अनुपात",
      "बेहतर पाचन के लिए स्टीम कुक्ड",
      "विटामिन A, D और E से भरपूर",
      "शून्य कृत्रिम रंग",
      "HF, साहीवाल और मुर्रा के लिए आदर्श",
    ],
  },

  // BarsanaPacketPink
  {
    slug: "barsana-gold",
    name: "Barsana Super",
    nameHi: "बरसाना सुपर",
    tag: "Premium",
    tagHi: "प्रीमियम",
    accent: "#c9871f",
    image: BarsanaPacketPink,
    summary:
      "Premium formulation for elite dairy herds targeting 25+ litres per day with enriched micro-nutrient profile.",
    summaryHi:
      "25+ लीटर प्रतिदिन लक्ष्य करने वाले श्रेष्ठ डेयरी पशुओं के लिए प्रीमियम फॉर्मूलेशन, समृद्ध सूक्ष्म पोषक तत्वों के साथ।",
    yield: "25–30 L/day",
    yieldHi: "25–30 लीटर/दिन",
    protein: "26%",
    fat: "6%",
    benefits: [
      "Boosts butterfat content",
      "Mineral-chelate technology",
      "Supports reproductive health",
      "Enhanced rumen buffering",
      "Reduces somatic cell count",
      "For top-performing animals",
    ],
    benefitsHi: [
      "बटरफैट सामग्री को बढ़ाता है",
      "मिनरल-चीलेट तकनीक",
      "प्रजनन स्वास्थ्य को सहारा देता है",
      "उन्नत रूमेन बफरिंग",
      "सोमैटिक सेल काउंट कम करता है",
      "शीर्ष प्रदर्शन करने वाले पशुओं के लिए",
    ],
  },

  // BarsanaPacketRed
  {
    slug: "barsana-8000",
    name: "Barsana Pashu Aahar",
    nameHi: "बरसाना पशु आहार",
    tag: "Elite",
    tagHi: "एलीट",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Our elite formula engineered for breeds targeting 8,000+ kg annual lactation. Scientifically balanced for maximum output.",
    summaryHi:
      "8,000+ किलो वार्षिक दुग्ध उत्पादन लक्ष्य करने वाली नस्लों के लिए हमारा एलीट फॉर्मूला। अधिकतम आउटपुट के लिए वैज्ञानिक रूप से संतुलित।",
    yield: "30+ L/day",
    yieldHi: "30+ लीटर/दिन",
    protein: "28%",
    fat: "7%",
    benefits: [
      "Targets 8000 kg/year lactation",
      "Advanced amino-acid profile",
      "Rumen-protected fat inclusion",
      "High energy density",
      "Supports transition cow health",
      "For HF cross & elite buffaloes",
    ],
    benefitsHi: [
      "8000 किग्रा/वर्ष दुग्ध उत्पादन का लक्ष्य",
      "उन्नत अमीनो-एसिड प्रोफाइल",
      "रूमेन-प्रोटेक्टेड फैट इन्क्लूजन",
      "उच्च ऊर्जा घनत्व",
      "ट्रांजिशन गाय के स्वास्थ्य को सहारा",
      "HF क्रॉस और एलीट भैंसों के लिए",
    ],
  },

  // === Repeat ==

  // BarsanaPacketYellow
  {
    slug: "barsana-super",
    name: "Barsana Gold",
    nameHi: "बरसाना गोल्ड",
    tag: "Bestseller",
    tagHi: "बेस्टसेलर",
    accent: "#1f4d2c",
    image: BarsanaPacketYellow,
    summary:
      "Our flagship cattle feed for high-yielding cows and buffaloes. Balanced energy, protein and minerals for peak daily production.",
    summaryHi:
      "अधिक दूध देने वाली गायों और भैंसों के लिए हमारा प्रमुख पशु आहार। अधिकतम दैनिक उत्पादन के लिए संतुलित ऊर्जा, प्रोटीन और खनिज।",
    yield: "20–25 L/day",
    yieldHi: "20–25 लीटर/दिन",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Up to +22% milk yield increase",
      "Optimised protein-energy ratio",
      "Steam cooked for better digestion",
      "Rich in Vitamin A, D & E",
      "Zero artificial colours",
      "Ideal for HF, Sahiwal & Murrah",
    ],
    benefitsHi: [
      "दूध उत्पादन में +22% तक की वृद्धि",
      "प्रोटीन-ऊर्जा का अनुकूलित अनुपात",
      "बेहतर पाचन के लिए स्टीम कुक्ड",
      "विटामिन A, D और E से भरपूर",
      "शून्य कृत्रिम रंग",
      "HF, साहीवाल और मुर्रा के लिए आदर्श",
    ],
  },

  // BarsanaPacketPink
  {
    slug: "barsana-gold",
    name: "Barsana Super",
    nameHi: "बरसाना सुपर",
    tag: "Premium",
    tagHi: "प्रीमियम",
    accent: "#c9871f",
    image: BarsanaPacketPink,
    summary:
      "Premium formulation for elite dairy herds targeting 25+ litres per day with enriched micro-nutrient profile.",
    summaryHi:
      "25+ लीटर प्रतिदिन लक्ष्य करने वाले श्रेष्ठ डेयरी पशुओं के लिए प्रीमियम फॉर्मूलेशन, समृद्ध सूक्ष्म पोषक तत्वों के साथ।",
    yield: "25–30 L/day",
    yieldHi: "25–30 लीटर/दिन",
    protein: "26%",
    fat: "6%",
    benefits: [
      "Boosts butterfat content",
      "Mineral-chelate technology",
      "Supports reproductive health",
      "Enhanced rumen buffering",
      "Reduces somatic cell count",
      "For top-performing animals",
    ],
    benefitsHi: [
      "बटरफैट सामग्री को बढ़ाता है",
      "मिनरल-चीलेट तकनीक",
      "प्रजनन स्वास्थ्य को सहारा देता है",
      "उन्नत रूमेन बफरिंग",
      "सोमैटिक सेल काउंट कम करता है",
      "शीर्ष प्रदर्शन करने वाले पशुओं के लिए",
    ],
  },

  // BarsanaPacketRed
  {
    slug: "barsana-8000",
    name: "Barsana Pashu Aahar",
    nameHi: "बरसाना पशु आहार",
    tag: "Elite",
    tagHi: "एलीट",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Our elite formula engineered for breeds targeting 8,000+ kg annual lactation. Scientifically balanced for maximum output.",
    summaryHi:
      "8,000+ किलो वार्षिक दुग्ध उत्पादन लक्ष्य करने वाली नस्लों के लिए हमारा एलीट फॉर्मूला। अधिकतम आउटपुट के लिए वैज्ञानिक रूप से संतुलित।",
    yield: "30+ L/day",
    yieldHi: "30+ लीटर/दिन",
    protein: "28%",
    fat: "7%",
    benefits: [
      "Targets 8000 kg/year lactation",
      "Advanced amino-acid profile",
      "Rumen-protected fat inclusion",
      "High energy density",
      "Supports transition cow health",
      "For HF cross & elite buffaloes",
    ],
    benefitsHi: [
      "8000 किग्रा/वर्ष दुग्ध उत्पादन का लक्ष्य",
      "उन्नत अमीनो-एसिड प्रोफाइल",
      "रूमेन-प्रोटेक्टेड फैट इन्क्लूजन",
      "उच्च ऊर्जा घनत्व",
      "ट्रांजिशन गाय के स्वास्थ्य को सहारा",
      "HF क्रॉस और एलीट भैंसों के लिए",
    ],
  },
];




export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
