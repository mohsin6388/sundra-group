import BarsanaPacketYellow from "../assets/Barsana-D.webp"
import BarsanaPacketPink from "../assets/BarsanaPink.webp"
import BarsanaPacketRed from "../assets/Barsana-Packet.webp"
import BuffSpecial from "../assets/buff-special.jpeg"
import Churi from "../assets/Churi.webp"
import MultiGranChukar from "../assets/multi-grain-chokar.jpeg"
import RoyalMixture from "../assets/Royal-Mixture.webp"
// import Sudarshan from "../assets/Sudarshan.webp"
import Super from "../assets/super.webp"
import SupremePlus from "../assets/supreme-plus.jpeg"
// import eightThousand from "../assets/8000.webp"
import eightThousand from "../assets/eigth-thousand.png"
import sudarshan from "../assets/barsana-sudarshan.png"
import churi from "../assets/barsana-churi.png"


// ── Company Info ──────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "Sundra Group",
  brand: "Sundra Group",
  group: "Sundra Group",
  founder: "Deific Digital",
  established: "2010",
  tagline: "Madhur Swad, Behti Doodh Dhar",
  taglineHi: "मधुर स्वाद, बहती दूध धार",
  regOffice: "307, 10/433 Ratan Shanti Apartment, Khalasi Line, Kanpur, 208001",
  unit: "Kanpur Dehat, Uttar Pradesh, India",
  email: ["info@barsana.com"],
  email_1: ["sundragroup@gmail.com"],
  phones: ["+91 7571001640", "+91 9554588775"],
  whatsapp: "919554588775",
};

// ── Gallery Images ─────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  BarsanaPacketRed,
  BuffSpecial,
  churi,
  MultiGranChukar,
  RoyalMixture,
  sudarshan,
  Super,
  SupremePlus,
  eightThousand
];



export const PRODUCTS = [

  // Special Dairy
  {
    slug: "barsana-dairy-special",
    name: " Dairy Special",
    nameHi: " डेयरी स्पेशल",
    tag: "Special",
    tagHi: "स्पेशल",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Formulated for easy digestion and better nutrient absorption — extremely important for animals producing more than 15 litres of milk per day.",
    summaryHi:
      "आसान पाचन और बेहतर पोषक तत्व अवशोषण के लिए तैयार किया गया — उन पशुओं के लिए अत्यंत आवश्यक जो प्रतिदिन 15 लीटर से अधिक दूध देते हैं।",
    yield: "15+ L/day",
    yieldHi: "15+ लीटर/दिन",
    protein: "22%",
    fat: "3.5%",
    benefits: [
      "Targets 15+ L/day milk production",
      "Easy digestion, better nutrient absorption",
      "Supports overall well-being",
      "Strengthens immune system",
      "Balanced energy for daily lactation",
      "Ideal for everyday dairy herds",
    ],
    benefitsHi: [
      "15+ लीटर/दिन दुग्ध उत्पादन का लक्ष्य",
      "आसान पाचन, बेहतर पोषक तत्व अवशोषण",
      "समग्र स्वास्थ्य को सहारा",
      "रोग-प्रतिरोधक क्षमता को मजबूत करता है",
      "दैनिक दुग्ध उत्पादन के लिए संतुलित ऊर्जा",
      "रोज़ाना डेयरी पशुओं के लिए आदर्श",
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

  // Sudarshan
  {
    slug: "barsana-sudarshan",
    name: "Sudarshan",
    nameHi: "सुदर्शन",
    tag: "Organic",
    tagHi: "ऑर्गेनिक",
    accent: "#558b2f",
    image: sudarshan,
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

   {
    slug: "barsana-churi",
    name: "Churi",
    nameHi: " चुरी",
    tag: "Essential",
    tagHi: "आवश्यक",
    accent: "#8a2a1a",
    image: churi,
    summary:
      "A cost-effective everyday feed designed for animals with a milk production capacity of 10–12 litres per day, supporting steady energy and digestion.",
    summaryHi:
      "10–12 लीटर प्रतिदिन दुग्ध उत्पादन क्षमता वाले पशुओं के लिए एक किफायती दैनिक आहार, जो निरंतर ऊर्जा और पाचन को सहारा देता है।",
    yield: "10–12 L/day",
    yieldHi: "10–12 लीटर/दिन",
    protein: "20%",
    fat: "3%",
    benefits: [
      "Targets 10–12 L/day milk production",
      "Cost-effective everyday nutrition",
      "Supports steady energy levels",
      "Easy to digest, gentle on the gut",
      "Maintains consistent milk quality",
      "Ideal for regular dairy households",
    ],
    benefitsHi: [
      "10–12 लीटर/दिन दुग्ध उत्पादन का लक्ष्य",
      "किफायती दैनिक पोषण",
      "स्थिर ऊर्जा स्तर को सहारा",
      "आसानी से पचने वाला, पाचन तंत्र के लिए सरल",
      "दूध की निरंतर गुणवत्ता बनाए रखता है",
      "नियमित डेयरी परिवारों के लिए आदर्श",
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
  // Special Dairy
  {
    slug: "barsana-dairy-special",
    name: " Dairy Special",
    nameHi: "डेयरी स्पेशल",
    tag: "Special",
    tagHi: "स्पेशल",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Formulated for easy digestion and better nutrient absorption — extremely important for animals producing more than 15 litres of milk per day.",
    summaryHi:
      "आसान पाचन और बेहतर पोषक तत्व अवशोषण के लिए तैयार किया गया — उन पशुओं के लिए अत्यंत आवश्यक जो प्रतिदिन 15 लीटर से अधिक दूध देते हैं।",
    yield: "15+ L/day",
    yieldHi: "15+ लीटर/दिन",
    protein: "22%",
    fat: "3.5%",
    benefits: [
      "Targets 15+ L/day milk production",
      "Easy digestion, better nutrient absorption",
      "Supports overall well-being",
      "Strengthens immune system",
      "Balanced energy for daily lactation",
      "Ideal for everyday dairy herds",
    ],
    benefitsHi: [
      "15+ लीटर/दिन दुग्ध उत्पादन का लक्ष्य",
      "आसान पाचन, बेहतर पोषक तत्व अवशोषण",
      "समग्र स्वास्थ्य को सहारा",
      "रोग-प्रतिरोधक क्षमता को मजबूत करता है",
      "दैनिक दुग्ध उत्पादन के लिए संतुलित ऊर्जा",
      "रोज़ाना डेयरी पशुओं के लिए आदर्श",
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

  // Sudarshan
  {
    slug: "barsana-sudarshan",
    name: "Sudarshan",
    nameHi: "सुदर्शन",
    tag: "Organic",
    tagHi: "ऑर्गेनिक",
    accent: "#558b2f",
    image: sudarshan,
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

  // barsanaChuri
  {
    slug: "barsana-churi",
    name: "Churi",
    nameHi: "चुरी",
    tag: "Essential",
    tagHi: "आवश्यक",
    accent: "#8a2a1a",
    image: churi,
    summary:
      "A cost-effective everyday feed designed for animals with a milk production capacity of 10–12 litres per day, supporting steady energy and digestion.",
    summaryHi:
      "10–12 लीटर प्रतिदिन दुग्ध उत्पादन क्षमता वाले पशुओं के लिए एक किफायती दैनिक आहार, जो निरंतर ऊर्जा और पाचन को सहारा देता है।",
    yield: "10–12 L/day",
    yieldHi: "10–12 लीटर/दिन",
    protein: "20%",
    fat: "3%",
    benefits: [
      "Targets 10–12 L/day milk production",
      "Cost-effective everyday nutrition",
      "Supports steady energy levels",
      "Easy to digest, gentle on the gut",
      "Maintains consistent milk quality",
      "Ideal for regular dairy households",
    ],
    benefitsHi: [
      "10–12 लीटर/दिन दुग्ध उत्पादन का लक्ष्य",
      "किफायती दैनिक पोषण",
      "स्थिर ऊर्जा स्तर को सहारा",
      "आसानी से पचने वाला, पाचन तंत्र के लिए सरल",
      "दूध की निरंतर गुणवत्ता बनाए रखता है",
      "नियमित डेयरी परिवारों के लिए आदर्श",
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




export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
