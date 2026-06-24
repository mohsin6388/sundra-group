import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Terms & Conditions page — generic agri/feed-business template.
 * Replace the placeholder clauses inside CONTENT with your final
 * legal text once ready. Structure (sections, numbering) can stay.
 */

const CONTENT = {
  en: {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    updated: "Last updated: June 2026",
    intro:
      "These Terms & Conditions govern your use of the Sundra Group website and the purchase of any products listed on it. By accessing this website or placing an order, you agree to be bound by the terms below.",
    sections: [
      {
        heading: "1. General",
        body: "Sundra Group (\"we\", \"us\", \"our\") manufactures and sells cattle and poultry feed products under its brands, including Barsana Pashu Aahar. These terms apply to all visitors, dealers, and customers who use this website or purchase our products.",
      },
      {
        heading: "2. Product information",
        body: "We make every effort to ensure product descriptions, nutritional values, and images on this website are accurate. However, actual packaging, composition, or formulation may vary slightly due to ongoing quality improvements. We reserve the right to modify product specifications without prior notice.",
      },
      {
        heading: "3. Orders & dealers",
        body: "Products are made available through our authorised dealer network. Orders placed through dealers are subject to the dealer's own terms of sale, stock availability, and applicable delivery timelines. Sundra Group is not responsible for delays caused by third-party transport or local dealer-level issues.",
      },
      {
        heading: "4. Pricing",
        body: "Prices for our products are determined by the company and may vary by region, dealer margins, and prevailing raw material costs. Prices displayed on this website, if any, are indicative and may differ from actual dealer pricing.",
      },
      {
        heading: "5. Quality & usage",
        body: "Our feed products are manufactured under quality-controlled conditions. Recommended usage, dosage, and storage instructions are provided on product packaging. Sundra Group is not liable for outcomes arising from improper storage, handling, or usage inconsistent with stated instructions.",
      },
      {
        heading: "6. Intellectual property",
        body: "All trademarks, logos, product names, and content on this website, including text and images, are the property of Sundra Group and may not be copied, reproduced, or used without written permission.",
      },
      {
        heading: "7. Limitation of liability",
        body: "To the extent permitted by law, Sundra Group shall not be liable for any indirect, incidental, or consequential loss arising from the use of this website or its products, beyond the value of the product purchased.",
      },
      {
        heading: "8. Changes to terms",
        body: "We may update these terms from time to time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
      },
      {
        heading: "9. Governing law",
        body: "These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts at Kanpur, Uttar Pradesh.",
      },
      {
        heading: "10. Contact",
        body: "For any questions regarding these Terms & Conditions, please reach out to us at sundragroup@gmail.com.",
      },
    ],
  },
  hi: {
    eyebrow: "कानूनी जानकारी",
    title: "नियम एवं शर्तें",
    updated: "अंतिम बार अपडेट: जून 2026",
    intro:
      "ये नियम एवं शर्तें Sundra Group की वेबसाइट के उपयोग और इस पर सूचीबद्ध किसी भी उत्पाद की खरीद को नियंत्रित करती हैं। इस वेबसाइट का उपयोग करने या ऑर्डर देने पर, आप इन शर्तों से बंधे होने के लिए सहमत होते हैं।",
    sections: [
      {
        heading: "1. सामान्य",
        body: "Sundra Group (\"हम\", \"हमारा\") अपने ब्रांडों के अंतर्गत पशु एवं पोल्ट्री आहार उत्पादों का निर्माण और विक्रय करता है, जिनमें बरसाना पशु आहार शामिल है। ये शर्तें इस वेबसाइट का उपयोग करने वाले या हमारे उत्पाद खरीदने वाले सभी आगंतुकों, डीलरों और ग्राहकों पर लागू होती हैं।",
      },
      {
        heading: "2. उत्पाद जानकारी",
        body: "हम इस वेबसाइट पर उत्पाद विवरण, पोषण मूल्य और चित्रों की सटीकता सुनिश्चित करने का हर संभव प्रयास करते हैं। हालांकि, गुणवत्ता सुधार के चलते वास्तविक पैकेजिंग, संरचना या फॉर्मूलेशन में थोड़ा अंतर हो सकता है। हम बिना पूर्व सूचना के उत्पाद विवरण में बदलाव करने का अधिकार रखते हैं।",
      },
      {
        heading: "3. ऑर्डर एवं डीलर",
        body: "हमारे उत्पाद हमारे अधिकृत डीलर नेटवर्क के माध्यम से उपलब्ध कराए जाते हैं। डीलर के माध्यम से दिए गए ऑर्डर, डीलर की अपनी बिक्री शर्तों, स्टॉक उपलब्धता और लागू डिलीवरी समय-सीमा के अधीन होते हैं। तीसरे पक्ष के परिवहन या स्थानीय डीलर-स्तर की समस्याओं से होने वाली देरी के लिए Sundra Group उत्तरदायी नहीं है।",
      },
      {
        heading: "4. मूल्य निर्धारण",
        body: "हमारे उत्पादों की कीमतें कंपनी द्वारा निर्धारित की जाती हैं और क्षेत्र, डीलर मार्जिन, तथा प्रचलित कच्चे माल की लागत के अनुसार भिन्न हो सकती हैं। इस वेबसाइट पर दिखाई गई कीमतें, यदि कोई हों, संकेतात्मक हैं और वास्तविक डीलर मूल्य से भिन्न हो सकती हैं।",
      },
      {
        heading: "5. गुणवत्ता एवं उपयोग",
        body: "हमारे आहार उत्पाद गुणवत्ता-नियंत्रित परिस्थितियों में निर्मित किए जाते हैं। अनुशंसित उपयोग, मात्रा और भंडारण निर्देश उत्पाद पैकेजिंग पर दिए गए हैं। अनुचित भंडारण, संचालन, या निर्देशों के विपरीत उपयोग से उत्पन्न परिणामों के लिए Sundra Group उत्तरदायी नहीं है।",
      },
      {
        heading: "6. बौद्धिक संपदा",
        body: "इस वेबसाइट पर मौजूद सभी ट्रेडमार्क, लोगो, उत्पाद नाम और सामग्री, जिसमें पाठ और चित्र शामिल हैं, Sundra Group की संपत्ति हैं और लिखित अनुमति के बिना इनकी नकल, पुनरुत्पादन या उपयोग नहीं किया जा सकता।",
      },
      {
        heading: "7. दायित्व की सीमा",
        body: "कानून द्वारा अनुमत सीमा तक, Sundra Group इस वेबसाइट या इसके उत्पादों के उपयोग से उत्पन्न किसी भी अप्रत्यक्ष, आकस्मिक या परिणामी हानि के लिए, खरीदे गए उत्पाद के मूल्य से अधिक उत्तरदायी नहीं होगा।",
      },
      {
        heading: "8. शर्तों में परिवर्तन",
        body: "हम समय-समय पर बिना पूर्व सूचना के इन शर्तों को अपडेट कर सकते हैं। परिवर्तन प्रकाशित होने के बाद वेबसाइट का निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।",
      },
      {
        heading: "9. शासकीय कानून",
        body: "ये शर्तें भारत के कानूनों द्वारा शासित हैं, और कोई भी विवाद कानपुर, उत्तर प्रदेश के न्यायालयों के क्षेत्राधिकार के अधीन होगा।",
      },
      {
        heading: "10. संपर्क",
        body: "इन नियम एवं शर्तों से संबंधित किसी भी प्रश्न के लिए, कृपया हमसे sundragroup@gmail.com पर संपर्क करें।",
      },
    ],
  },
};

function TermsAndConditions({ lang: initialLang = "hi" }) {
  const [lang, setLang] = useState(initialLang);
  const t = CONTENT[lang];

  return (
    <div className="terms-page">
      <div className="terms-header">
        <Link to="/" className="terms-back-link">
          &larr; {lang === "hi" ? "होम पर वापस जाएं" : "Back to home"}
        </Link>

        <button
          className="terms-lang-toggle"
          onClick={() => setLang(lang === "hi" ? "en" : "hi")}
        >
          {lang === "hi" ? "EN" : "हि"}
        </button>
      </div>

      <div className="terms-content">
        <span className="terms-eyebrow">{t.eyebrow}</span>
        <h1 className="terms-title">{t.title}</h1>
        <p className="terms-updated">{t.updated}</p>
        <p className="terms-intro">{t.intro}</p>

        {t.sections.map((section) => (
          <div key={section.heading} className="terms-section">
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>

      <style>{`
        .terms-page {
          background: #fbf8f2;
          min-height: 100vh;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .terms-header {
          max-width: 760px;
          margin: 0 auto;
          padding: 32px 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .terms-back-link {
          color: #a8690f;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
        }
        .terms-back-link:hover { text-decoration: underline; }
        .terms-lang-toggle {
          background: #16261b;
          color: #fdfbf5;
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }
        .terms-lang-toggle:hover { opacity: 0.85; }

        .terms-content {
          max-width: 760px;
          margin: 0 auto;
          padding: 32px 24px 80px;
        }
        .terms-eyebrow {
          display: inline-block;
          padding: 6px 16px;
          border: 1px solid rgba(201,135,31,0.35);
          border-radius: 999px;
          background: rgba(201,135,31,0.08);
          color: #a8690f;
          font-size: 12.5px;
          font-weight: 600;
          margin-bottom: 18px;
        }
        .terms-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 5vw, 42px);
          color: #16261b;
          margin: 0 0 8px;
        }
        .terms-updated {
          font-size: 13px;
          color: #8a958c;
          margin: 0 0 24px;
        }
        .terms-intro {
          font-size: 16px;
          line-height: 1.75;
          color: #3a4a3e;
          margin: 0 0 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(28,42,32,0.1);
        }
        .terms-section {
          margin-bottom: 32px;
        }
        .terms-section h2 {
          font-size: 18px;
          font-weight: 600;
          color: #16261b;
          margin: 0 0 10px;
        }
        .terms-section p {
          font-size: 15px;
          line-height: 1.75;
          color: #5b6b5e;
          margin: 0;
        }

        @media (max-width: 600px) {
          .terms-content { padding: 24px 20px 64px; }
        }
      `}</style>
    </div>
  );
}




export default TermsAndConditions