import BarsanaPacketYellow from "../assets/Barsana-D.webp"
import BarsanaPacketPink from "../assets/BarsanaPink.webp"
import BarsanaPacketRed from "../assets/Barsana-Packet.webp"
import BuffSpecial from "../assets/buff-special.webp"
import Churi from "../assets/Churi.webp"
import MultiGranChukar from "../assets/multi-grain-chokar.webp"
import RoyalMixture from "../assets/Royal-Mixture.webp"
import Super from "../assets/super.webp"
import SupremePlus from "../assets/supreme-plus.webp"
import eightThousand from "../assets/eigth-thousand.webp"
import sudarshan from "../assets/barsana-sudarshan.webp"
import gold from "../assets/gold.webp"


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
  phones: ["+91 7571001640", "+91 9554588775", "+91 7571001620"],
  whatsapp: "919554588775",
};

// ── Gallery Images ─────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  BarsanaPacketRed,
  BuffSpecial,
  Churi,
  MultiGranChukar,
  RoyalMixture,
  sudarshan,
  Super,
  gold,
  SupremePlus,
  eightThousand
];



export const PRODUCTS = [

  // Super
  {
    slug: "barsana-super",
    name: "Barsana/Super",
    nameHi: "बरसाना/सुपर",
    tag: "New",
    tagHi: "नया",
    accent: "#4a148c",
    image: Super,
    summary:
      "Barsana's newest mash formula, launched on popular customer demand for cattle with a daily milk yield of 6-7 litres, delivering balanced protein and fat for top-grade health and productivity.",
    summaryHi:
      "ग्राहकों की भारी माँग पर लॉन्च किया गया बरसाना का नवीनतम मैश फॉर्मूला, 6-7 लीटर प्रतिदिन दूध देने वाले पशुओं के लिए, जो स्वास्थ्य और उत्पादकता के लिए संतुलित प्रोटीन और फैट प्रदान करता है।",
    yield: "6–7 L/day",
    yieldHi: "6–7 लीटर/दिन",
    protein: "18%",
    fat: "2.5%",
    benefits: [
      "Balanced 2.5% fat content",
      "18% protein for healthy lactation",
      "Ideal for cattle yielding 6-7 L/day",
      "Newest product launched on customer demand",
      "Highly important for daily cattle nutrition",
      "Top-grade quality in its category",
    ],
    benefitsHi: [
      "संतुलित 2.5% फैट सामग्री",
      "स्वस्थ दुधारूपन के लिए 18% प्रोटीन",
      "6-7 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "ग्राहकों की माँग पर लॉन्च किया गया नवीनतम प्रोडक्ट",
      "रोज़ाना पशु पोषण के लिए अत्यंत महत्वपूर्ण",
      "इस श्रेणी में सर्वोच्च गुणवत्ता",
    ],
},
  



// Churi
    {
    slug: "barsana-churi",
    name: "Barsana/Churi",
    nameHi: "बरसाना/चूरी",
    tag: "Essential",
    tagHi: "आवश्यक",
    accent: "#8a2a1a",
    image: Churi,
    summary:
      "A mineral-enriched everyday feed for cattle with a daily milk yield of 10-12 litres, boosting milk production capacity while strengthening disease resistance.",
    summaryHi:
      "10-12 लीटर प्रतिदिन दूध देने वाले पशुओं के लिए एक मिनरल-समृद्ध दैनिक आहार, जो दूध उत्पादन की शक्ति बढ़ाने के साथ-साथ रोग प्रतिरोधक क्षमता को भी मज़बूत करता है।",
    yield: "10–12 L/day",
    yieldHi: "10–12 लीटर/दिन",
    protein: "20%",
    fat: "3%",
    benefits: [
      "Balanced 3% fat content",
      "20% protein for higher lactation",
      "Ideal for cattle yielding 10-12 L/day",
      "Boosts milk production capacity",
      "Strengthens disease resistance",
      "Enriched with essential minerals, calcium and phosphorus",
    ],
    benefitsHi: [
      "संतुलित 3% फैट सामग्री",
      "अधिक दुधारूपन के लिए 20% प्रोटीन",
      "10-12 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "दूध उत्पादन की शक्ति बढ़ाता है",
      "रोग प्रतिरोधक क्षमता को मज़बूत करता है",
      "आवश्यक मिनरल्स, कैल्शियम और फॉस्फोरस से समृद्ध",
    ],
},



// Barsana GOld 

{
    slug: "barsana-gold",
    name: "Barsana/Gold",
    nameHi: "बरसाना/गोल्ड",
    tag: "Premium",
    tagHi: "प्रीमियम",
    accent: "#c9650a",
    image: gold,
    summary:
      "Also known as Barsana 'HiPro', formulated for cattle with a daily milk yield of more than 18-20 litres, delivering the highest-grade quality enriched with a variety of vitamins.",
    summaryHi:
      "बरसाना 'हाइप्रो' के नाम से भी जाना जाता है, उन पशुओं के लिए तैयार किया गया जिनकी दुधारू क्षमता प्रतिदिन 18-20 लीटर से अधिक है, जो विभिन्न प्रकार के विटामिन से युक्त सर्वोच्च गुणवत्ता प्रदान करता है।",
    yield: "18–20+ L/day",
    yieldHi: "18–20+ लीटर/दिन",
    protein: "22%",
    fat: "4%",
    benefits: [
      "Also known as Barsana 'HiPro'",
      "Balanced 4% fat content",
      "22% protein for higher lactation",
      "Ideal for cattle yielding 18-20+ L/day",
      "Top-grade quality in its category",
      "Enriched with a variety of vitamins",
    ],
    benefitsHi: [
      "बरसाना 'हाइप्रो' के नाम से भी जाना जाता है",
      "संतुलित 4% फैट सामग्री",
      "अधिक दुधारूपन के लिए 22% प्रोटीन",
      "18-20+ लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "इस श्रेणी में सर्वोच्च गुणवत्ता",
      "विभिन्न प्रकार के विटामिन से युक्त",
    ],
},




 //supreme plus
  {
    slug: "barsana-supreme-plus",
    name: "Barsana/Supreme +",
    nameHi: "बरसाना/सुप्रीम प्लस",
    tag: "New",
    tagHi: "नया",
    accent: "#4a148c",
    image: SupremePlus,
    summary:
      "Barsana's newest mash formula, launched on popular customer demand for cattle with a daily milk yield of 8-10 litres, delivering balanced protein and fat for top-grade health and productivity.",
    summaryHi:
      "ग्राहकों की भारी माँग पर लॉन्च किया गया बरसाना का नवीनतम मैश फॉर्मूला, 8-10 लीटर प्रतिदिन दूध देने वाले पशुओं के लिए, जो स्वास्थ्य और उत्पदकता के लिए संतुलित प्रोटीन और फैट प्रदान करता है।",
    yield: "8–10 L/day",
    yieldHi: "8–10 लीटर/दिन",
    protein: "20%",
    fat: "3%",
    benefits: [
      "Balanced 3% fat content",
      "20% protein for healthy lactation",
      "Ideal for cattle yielding 8-10 L/day",
      "Newest product launched on customer demand",
      "Highly important for daily cattle nutrition",
      "Top-grade quality in its category",
    ],
    benefitsHi: [
      "संतुलित 3% फैट सामग्री",
      "स्वस्थ दुधारूपन के लिए 20% प्रोटीन",
      "8-10 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "ग्राहकों की माँग पर लॉन्च किया गया नवीनतम प्रोडक्ट",
      "रोज़ाना पशु पोषण के लिए अत्यंत महत्वपूर्ण",
      "इस श्रेणी में सर्वोच्च गुणवत्ता",
    ],
},



// Special Dairy
{
    slug: "barsana-dairy-special",
    name: "Barsana/Dairy Special",
    nameHi: "बरसाना/डेयरी स्पेशल",
    tag: "Special",
    tagHi: "स्पेशल",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Extremely important for cattle with a daily milk yield of 15-18 litres, boosting milk-yielding capacity while improving the cow's reproductive cycle.",
    summaryHi:
      "उन पशुओं के लिए अत्यंत महत्वपूर्ण जिनकी दुधारू क्षमता 15-18 लीटर प्रतिदिन की है, जो दुधारू क्षमता बढ़ाने के साथ-साथ गाय के प्रजनन चक्र को भी बेहतर बनाता है।",
    yield: "15–18 L/day",
    yieldHi: "15–18 लीटर/दिन",
    protein: "21%",
    fat: "3.5%",
    benefits: [
      "Fat content up to 3.5%",
      "Minimum crude protein of 21%",
      "Maximum crude fibre of 11%",
      "Vitamin A enriched at 7000 IU/KG",
      "Maximum moisture of 12%",
      "Improves the cow's reproductive cycle",
      "Enriched with all essential minerals",
    ],
    benefitsHi: [
      "फैट की मात्रा 3.5% तक",
      "क्रूड प्रोटीन न्यूनतम 21%",
      "क्रूड फाइबर अधिकतम 11%",
      "विटामिन A-7000 IU/KG से समृद्ध",
      "नमी अधिकतम 12%",
      "गाय का प्रजनन चक्र बेहतर बनाता है",
      "सभी आवश्यक मिनरल्स से युक्त",
    ],
},




   // Multigran Chokar
   {
    slug: "barsana-multigrain-chokar",
    name: "Barsana/Multigrain Chokar",
    nameHi: "बरसाना/मल्टीग्रेन चोकर",
    tag: "Multigrain",
    tagHi: "मल्टीग्रेन",
    accent: "#a89a3a",
    image: MultiGranChukar,
    summary:
      "A steam-cooked feed made from a blend of sorghum, maize and mustard cake, designed for high digestion, better health and improved reproduction in cattle.",
    summaryHi:
      "ज्वार, मक्का और सरसों खली के मिश्रण से बना एक स्टीम से पका हुआ आहार, जो पशुओं में उच्च पाचन, बेहतर स्वास्थ्य और बेहतर प्रजनन के लिए तैयार किया गया है।",
    yield: "10–12%",
    yieldHi: "10–12%",
    protein: "20%",
    fat: "4%",
    benefits: [
      "Supports high digestion",
      "Improves overall health",
      "Steam-cooked for better quality",
      "Supports timely reproduction",
      "Increases milk yield",
      "Made from sorghum, maize and mustard cake",
    ],
    benefitsHi: [
      "उच्च पाचन को सहारा देता है",
      "बेहतर स्वास्थ्य प्रदान करता है",
      "बेहतर गुणवत्ता के लिए स्टीम से पका हुआ",
      "समय से प्रजनन को सहारा देता है",
      "अधिक दूध उत्पादन",
      "ज्वार, मक्का और सरसों खली से निर्मित",
    ],
},




{
    slug: "barsana-royal-mixture",
    name: "Barsana/Royal Mixture",
    nameHi: "बरसाना/रॉयल मिक्सचर",
    tag: "Royal",
    tagHi: "रॉयल",
    accent: "#a89a3a",
    image: RoyalMixture,
    summary:
      "A unique blend of standing ingredients and pellets — cotton seed, cotton cake, mustard cake, MDOC, maize, chana churi and matar churi — designed for high-yielding cattle producing more than 25 litres of milk per day. It is the premium, top-of-the-line product in this category.",
    summaryHi:
      "रॉयल मिक्सचर खड़े अवयव और पैलेट्स का एक अद्वितीय मिश्रण है, जो कॉटन सीड्स, कॉटन केक, मस्टर्ड केक, एमडीओसी, मक्का, चन्ना चूरी और मटर चूरी से मिलकर बना है। यह उत्पाद उन पशुओं के लिए तैयार किया गया है जिनकी दुधारू क्षमता 25 लीटर प्रतिदिन से अधिक है। यह इस श्रेणी का सर्वाधिक उच्च कोटि का उत्पाद है।",
    yield: "25+ litres/day",
    yieldHi: "25+ लीटर/दिन",
    protein: "23%",
    fat: "5.5%",
    benefits: [
      "Designed for cattle yielding 25+ litres of milk per day",
      "Unique blend of standing ingredients and pellets",
      "Made from cotton seed, cotton cake, mustard cake, MDOC, maize, chana churi and matar churi",
      "Highest quality product in its category",
      "Supports high digestion and improved reproduction",
      "Increases milk yield",
    ],
    benefitsHi: [
      "25+ लीटर प्रतिदिन दूध देने वाले पशुओं के लिए तैयार",
      "खड़े अवयव और पैलेट्स का अद्वितीय मिश्रण",
      "कॉटन सीड्स, कॉटन केक, मस्टर्ड केक, एमडीओसी, मक्का, चन्ना चूरी और मटर चूरी से निर्मित",
      "इस श्रेणी का सर्वाधिक उच्च कोटि का उत्पाद",
      "उच्च पाचन और बेहतर प्रजनन को सहारा देता है",
      "अधिक दूध उत्पादन",
    ],
},





// Eight Thousand 

{
    slug: "barsana-8000",
    name: "Barsana/8000",
    nameHi: "बरसाना/8000",
    tag: "Most Popular",
    tagHi: "सबसे लोकप्रिय",
    accent: "#c9650a",
    image: eightThousand,
    summary:
      "Barsana's most preferred and highest-demand product, formulated for cattle with a daily milk yield of 20-25 litres, fulfilling essential nutrient deficiencies and supporting overall body development.",
    summaryHi:
      "बरसाना का सबसे ज्यादा पसंद किया जाने वाला और सर्वाधिक मांग वाला उत्पाद, उन पशुओं के लिए तैयार किया गया जिनकी दुधारू क्षमता 20-25 लीटर प्रतिदिन की है, जो आवश्यक तत्वों की कमी को पूरा करता है और शरीर के सम्पूर्ण विकास को सहारा देता है।",
    yield: "20–25 L/day",
    yieldHi: "20–25 लीटर/दिन",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Balanced 5% fat content",
      "24% protein for higher lactation",
      "Ideal for cattle yielding 20-25 L/day",
      "Fulfils essential nutrient deficiencies",
      "Supports complete body development",
      "Most preferred, highest-demand product",
    ],
    benefitsHi: [
      "संतुलित 5% फैट सामग्री",
      "अधिक दुधारूपन के लिए 24% प्रोटीन",
      "20-25 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "आवश्यक तत्वों की कमी को पूरा करता है",
      "शरीर का सम्पूर्ण विकास करता है",
      "सबसे ज्यादा पसंद किया जाने वाला, सर्वाधिक मांग वाला उत्पाद",
    ],
},




// BuffSpecial
  {
    slug: "barsana-buff-special",
    name: "Barsana/Buff Special",
    nameHi: "बरसाना/भैंस स्पेशल",
    tag: "Buffalo Specialist",
    tagHi: "भैंस विशेषज्ञ",
    accent: "#2d6a3e",
    image: BuffSpecial,
    summary:
      "Extremely important for cattle with a daily milk yield of more than 15 litres, enriched with a variety of vitamins for top-grade health and productivity.",
    summaryHi:
      "उन पशुओं के लिए अत्यंत महत्वपूर्ण जिनकी दुधारू क्षमता प्रतिदिन 15 लीटर से अधिक है, विभिन्न प्रकार के विटामिन से युक्त, उत्तम स्वास्थ्य और उत्पादकता के लिए।",
    yield: ">15 L/day",
    yieldHi: ">15 लीटर/दिन",
    protein: "22%",
    fat: "7%",
    benefits: [
      "Extremely important for >15 L/day cattle",
      "Fat content up to 7%",
      "Minimum crude protein of 22%",
      "Enriched with a variety of vitamins",
      "Top-grade quality in its category",
      "Highest-grade product of its kind",
    ],
    benefitsHi: [
      "15 लीटर/दिन से अधिक देने वाले पशुओं के लिए अत्यंत महत्वपूर्ण",
      "फैट की मात्रा 7% तक",
      "क्रूड प्रोटीन न्यूनतम 22%",
      "विभिन्न प्रकार के विटामिन से युक्त",
      "इस श्रेणी में सर्वोत्तम गुणवत्ता",
      "अपनी श्रेणी का सर्वाधिक उच्च कोटि का उत्पाद",
    ],
},
  


  
];


export const HERO_PRODUCTS = [

  // Super
  {
    slug: "barsana-super",
    name: "Barsana/Super",
    nameHi: "बरसाना/सुपर",
    tag: "New",
    tagHi: "नया",
    accent: "#4a148c",
    image: Super,
    summary:
      "Barsana's newest mash formula, launched on popular customer demand for cattle with a daily milk yield of 6-7 litres, delivering balanced protein and fat for top-grade health and productivity.",
    summaryHi:
      "ग्राहकों की भारी माँग पर लॉन्च किया गया बरसाना का नवीनतम मैश फॉर्मूला, 6-7 लीटर प्रतिदिन दूध देने वाले पशुओं के लिए, जो स्वास्थ्य और उत्पादकता के लिए संतुलित प्रोटीन और फैट प्रदान करता है।",
    yield: "6–7 L/day",
    yieldHi: "6–7 लीटर/दिन",
    protein: "18%",
    fat: "2.5%",
    benefits: [
      "Balanced 2.5% fat content",
      "18% protein for healthy lactation",
      "Ideal for cattle yielding 6-7 L/day",
      "Newest product launched on customer demand",
      "Highly important for daily cattle nutrition",
      "Top-grade quality in its category",
    ],
    benefitsHi: [
      "संतुलित 2.5% फैट सामग्री",
      "स्वस्थ दुधारूपन के लिए 18% प्रोटीन",
      "6-7 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "ग्राहकों की माँग पर लॉन्च किया गया नवीनतम प्रोडक्ट",
      "रोज़ाना पशु पोषण के लिए अत्यंत महत्वपूर्ण",
      "इस श्रेणी में सर्वोच्च गुणवत्ता",
    ],
},
  



// Churi
    {
    slug: "barsana-churi",
    name: "Barsana/Churi",
    nameHi: "बरसाना/चूरी",
    tag: "Essential",
    tagHi: "आवश्यक",
    accent: "#8a2a1a",
    image: Churi,
    summary:
      "A mineral-enriched everyday feed for cattle with a daily milk yield of 10-12 litres, boosting milk production capacity while strengthening disease resistance.",
    summaryHi:
      "10-12 लीटर प्रतिदिन दूध देने वाले पशुओं के लिए एक मिनरल-समृद्ध दैनिक आहार, जो दूध उत्पादन की शक्ति बढ़ाने के साथ-साथ रोग प्रतिरोधक क्षमता को भी मज़बूत करता है।",
    yield: "10–12 L/day",
    yieldHi: "10–12 लीटर/दिन",
    protein: "20%",
    fat: "3%",
    benefits: [
      "Balanced 3% fat content",
      "20% protein for higher lactation",
      "Ideal for cattle yielding 10-12 L/day",
      "Boosts milk production capacity",
      "Strengthens disease resistance",
      "Enriched with essential minerals, calcium and phosphorus",
    ],
    benefitsHi: [
      "संतुलित 3% फैट सामग्री",
      "अधिक दुधारूपन के लिए 20% प्रोटीन",
      "10-12 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "दूध उत्पादन की शक्ति बढ़ाता है",
      "रोग प्रतिरोधक क्षमता को मज़बूत करता है",
      "आवश्यक मिनरल्स, कैल्शियम और फॉस्फोरस से समृद्ध",
    ],
},




// Special Dairy
{
    slug: "barsana-dairy-special",
    name: "Barsana/Dairy Special",
    nameHi: "बरसाना/डेयरी स्पेशल",
    tag: "Special",
    tagHi: "स्पेशल",
    accent: "#8a2a1a",
    image: BarsanaPacketRed,
    summary:
      "Extremely important for cattle with a daily milk yield of 15-18 litres, boosting milk-yielding capacity while improving the cow's reproductive cycle.",
    summaryHi:
      "उन पशुओं के लिए अत्यंत महत्वपूर्ण जिनकी दुधारू क्षमता 15-18 लीटर प्रतिदिन की है, जो दुधारू क्षमता बढ़ाने के साथ-साथ गाय के प्रजनन चक्र को भी बेहतर बनाता है।",
    yield: "15–18 L/day",
    yieldHi: "15–18 लीटर/दिन",
    protein: "21%",
    fat: "3.5%",
    benefits: [
      "Fat content up to 3.5%",
      "Minimum crude protein of 21%",
      "Maximum crude fibre of 11%",
      "Vitamin A enriched at 7000 IU/KG",
      "Maximum moisture of 12%",
      "Improves the cow's reproductive cycle",
      "Enriched with all essential minerals",
    ],
    benefitsHi: [
      "फैट की मात्रा 3.5% तक",
      "क्रूड प्रोटीन न्यूनतम 21%",
      "क्रूड फाइबर अधिकतम 11%",
      "विटामिन A-7000 IU/KG से समृद्ध",
      "नमी अधिकतम 12%",
      "गाय का प्रजनन चक्र बेहतर बनाता है",
      "सभी आवश्यक मिनरल्स से युक्त",
    ],
},



 //supreme plus
  {
    slug: "barsana-supreme-plus",
    name: "Barsana/Supreme +",
    nameHi: "बरसाना/सुप्रीम प्लस",
    tag: "New",
    tagHi: "नया",
    accent: "#4a148c",
    image: SupremePlus,
    summary:
      "Barsana's newest mash formula, launched on popular customer demand for cattle with a daily milk yield of 8-10 litres, delivering balanced protein and fat for top-grade health and productivity.",
    summaryHi:
      "ग्राहकों की भारी माँग पर लॉन्च किया गया बरसाना का नवीनतम मैश फॉर्मूला, 8-10 लीटर प्रतिदिन दूध देने वाले पशुओं के लिए, जो स्वास्थ्य और उत्पदकता के लिए संतुलित प्रोटीन और फैट प्रदान करता है।",
    yield: "8–10 L/day",
    yieldHi: "8–10 लीटर/दिन",
    protein: "20%",
    fat: "3%",
    benefits: [
      "Balanced 3% fat content",
      "20% protein for healthy lactation",
      "Ideal for cattle yielding 8-10 L/day",
      "Newest product launched on customer demand",
      "Highly important for daily cattle nutrition",
      "Top-grade quality in its category",
    ],
    benefitsHi: [
      "संतुलित 3% फैट सामग्री",
      "स्वस्थ दुधारूपन के लिए 20% प्रोटीन",
      "8-10 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "ग्राहकों की माँग पर लॉन्च किया गया नवीनतम प्रोडक्ट",
      "रोज़ाना पशु पोषण के लिए अत्यंत महत्वपूर्ण",
      "इस श्रेणी में सर्वोच्च गुणवत्ता",
    ],
},



// Barsana GOld 

{
    slug: "barsana-gold",
    name: "Barsana/Gold",
    nameHi: "बरसाना/गोल्ड",
    tag: "Premium",
    tagHi: "प्रीमियम",
    accent: "#c9650a",
    image: gold,
    summary:
      "Also known as Barsana 'HiPro', formulated for cattle with a daily milk yield of more than 18-20 litres, delivering the highest-grade quality enriched with a variety of vitamins.",
    summaryHi:
      "बरसाना 'हाइप्रो' के नाम से भी जाना जाता है, उन पशुओं के लिए तैयार किया गया जिनकी दुधारू क्षमता प्रतिदिन 18-20 लीटर से अधिक है, जो विभिन्न प्रकार के विटामिन से युक्त सर्वोच्च गुणवत्ता प्रदान करता है।",
    yield: "18–20+ L/day",
    yieldHi: "18–20+ लीटर/दिन",
    protein: "22%",
    fat: "4%",
    benefits: [
      "Also known as Barsana 'HiPro'",
      "Balanced 4% fat content",
      "22% protein for higher lactation",
      "Ideal for cattle yielding 18-20+ L/day",
      "Top-grade quality in its category",
      "Enriched with a variety of vitamins",
    ],
    benefitsHi: [
      "बरसाना 'हाइप्रो' के नाम से भी जाना जाता है",
      "संतुलित 4% फैट सामग्री",
      "अधिक दुधारूपन के लिए 22% प्रोटीन",
      "18-20+ लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "इस श्रेणी में सर्वोच्च गुणवत्ता",
      "विभिन्न प्रकार के विटामिन से युक्त",
    ],
},


// BuffSpecial
  {
    slug: "barsana-buff-special",
    name: "Barsana/Buff Special",
    nameHi: "बरसाना/भैंस स्पेशल",
    tag: "Buffalo Specialist",
    tagHi: "भैंस विशेषज्ञ",
    accent: "#2d6a3e",
    image: BuffSpecial,
    summary:
      "Extremely important for cattle with a daily milk yield of more than 15 litres, enriched with a variety of vitamins for top-grade health and productivity.",
    summaryHi:
      "उन पशुओं के लिए अत्यंत महत्वपूर्ण जिनकी दुधारू क्षमता प्रतिदिन 15 लीटर से अधिक है, विभिन्न प्रकार के विटामिन से युक्त, उत्तम स्वास्थ्य और उत्पादकता के लिए।",
    yield: ">15 L/day",
    yieldHi: ">15 लीटर/दिन",
    protein: "22%",
    fat: "7%",
    benefits: [
      "Extremely important for >15 L/day cattle",
      "Fat content up to 7%",
      "Minimum crude protein of 22%",
      "Enriched with a variety of vitamins",
      "Top-grade quality in its category",
      "Highest-grade product of its kind",
    ],
    benefitsHi: [
      "15 लीटर/दिन से अधिक देने वाले पशुओं के लिए अत्यंत महत्वपूर्ण",
      "फैट की मात्रा 7% तक",
      "क्रूड प्रोटीन न्यूनतम 22%",
      "विभिन्न प्रकार के विटामिन से युक्त",
      "इस श्रेणी में सर्वोत्तम गुणवत्ता",
      "अपनी श्रेणी का सर्वाधिक उच्च कोटि का उत्पाद",
    ],
},



{
    slug: "barsana-royal-mixture",
    name: "Barsana/Royal Mixture",
    nameHi: "बरसाना/रॉयल मिक्सचर",
    tag: "Royal",
    tagHi: "रॉयल",
    accent: "#a89a3a",
    image: RoyalMixture,
    summary:
      "A unique blend of standing ingredients and pellets — cotton seed, cotton cake, mustard cake, MDOC, maize, chana churi and matar churi — designed for high-yielding cattle producing more than 25 litres of milk per day. It is the premium, top-of-the-line product in this category.",
    summaryHi:
      "रॉयल मिक्सचर खड़े अवयव और पैलेट्स का एक अद्वितीय मिश्रण है, जो कॉटन सीड्स, कॉटन केक, मस्टर्ड केक, एमडीओसी, मक्का, चन्ना चूरी और मटर चूरी से मिलकर बना है। यह उत्पाद उन पशुओं के लिए तैयार किया गया है जिनकी दुधारू क्षमता 25 लीटर प्रतिदिन से अधिक है। यह इस श्रेणी का सर्वाधिक उच्च कोटि का उत्पाद है।",
    yield: "25+ litres/day",
    yieldHi: "25+ लीटर/दिन",
    protein: "23%",
    fat: "5.5%",
    benefits: [
      "Designed for cattle yielding 25+ litres of milk per day",
      "Unique blend of standing ingredients and pellets",
      "Made from cotton seed, cotton cake, mustard cake, MDOC, maize, chana churi and matar churi",
      "Highest quality product in its category",
      "Supports high digestion and improved reproduction",
      "Increases milk yield",
    ],
    benefitsHi: [
      "25+ लीटर प्रतिदिन दूध देने वाले पशुओं के लिए तैयार",
      "खड़े अवयव और पैलेट्स का अद्वितीय मिश्रण",
      "कॉटन सीड्स, कॉटन केक, मस्टर्ड केक, एमडीओसी, मक्का, चन्ना चूरी और मटर चूरी से निर्मित",
      "इस श्रेणी का सर्वाधिक उच्च कोटि का उत्पाद",
      "उच्च पाचन और बेहतर प्रजनन को सहारा देता है",
      "अधिक दूध उत्पादन",
    ],
},





// Eight Thousand 

{
    slug: "barsana-8000",
    name: "Barsana/8000",
    nameHi: "बरसाना/8000",
    tag: "Most Popular",
    tagHi: "सबसे लोकप्रिय",
    accent: "#c9650a",
    image: eightThousand,
    summary:
      "Barsana's most preferred and highest-demand product, formulated for cattle with a daily milk yield of 20-25 litres, fulfilling essential nutrient deficiencies and supporting overall body development.",
    summaryHi:
      "बरसाना का सबसे ज्यादा पसंद किया जाने वाला और सर्वाधिक मांग वाला उत्पाद, उन पशुओं के लिए तैयार किया गया जिनकी दुधारू क्षमता 20-25 लीटर प्रतिदिन की है, जो आवश्यक तत्वों की कमी को पूरा करता है और शरीर के सम्पूर्ण विकास को सहारा देता है।",
    yield: "20–25 L/day",
    yieldHi: "20–25 लीटर/दिन",
    protein: "24%",
    fat: "5%",
    benefits: [
      "Balanced 5% fat content",
      "24% protein for higher lactation",
      "Ideal for cattle yielding 20-25 L/day",
      "Fulfils essential nutrient deficiencies",
      "Supports complete body development",
      "Most preferred, highest-demand product",
    ],
    benefitsHi: [
      "संतुलित 5% फैट सामग्री",
      "अधिक दुधारूपन के लिए 24% प्रोटीन",
      "20-25 लीटर/दिन देने वाले पशुओं के लिए आदर्श",
      "आवश्यक तत्वों की कमी को पूरा करता है",
      "शरीर का सम्पूर्ण विकास करता है",
      "सबसे ज्यादा पसंद किया जाने वाला, सर्वाधिक मांग वाला उत्पाद",
    ],
},


  

   // Multigran Chokar
   {
    slug: "barsana-multigrain-chokar",
    name: "Barsana/Multigrain Chokar",
    nameHi: "बरसाना/मल्टीग्रेन चोकर",
    tag: "Multigrain",
    tagHi: "मल्टीग्रेन",
    accent: "#a89a3a",
    image: MultiGranChukar,
    summary:
      "A steam-cooked feed made from a blend of sorghum, maize and mustard cake, designed for high digestion, better health and improved reproduction in cattle.",
    summaryHi:
      "ज्वार, मक्का और सरसों खली के मिश्रण से बना एक स्टीम से पका हुआ आहार, जो पशुओं में उच्च पाचन, बेहतर स्वास्थ्य और बेहतर प्रजनन के लिए तैयार किया गया है।",
    yield: "10–12%",
    yieldHi: "10–12%",
    protein: "20%",
    fat: "4%",
    benefits: [
      "Supports high digestion",
      "Improves overall health",
      "Steam-cooked for better quality",
      "Supports timely reproduction",
      "Increases milk yield",
      "Made from sorghum, maize and mustard cake",
    ],
    benefitsHi: [
      "उच्च पाचन को सहारा देता है",
      "बेहतर स्वास्थ्य प्रदान करता है",
      "बेहतर गुणवत्ता के लिए स्टीम से पका हुआ",
      "समय से प्रजनन को सहारा देता है",
      "अधिक दूध उत्पादन",
      "ज्वार, मक्का और सरसों खली से निर्मित",
    ],
},
  


 


];




export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
