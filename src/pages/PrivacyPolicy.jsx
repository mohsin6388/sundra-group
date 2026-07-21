import React from "react";
import { Link } from "react-router-dom";

/**
 * Privacy Policy page — generic agri/feed-business template.
 * Replace the placeholder clauses inside CONTENT with your final
 * legal text once ready. Structure (sections, numbering) can stay.
 *
 * `lang` is controlled by the App-level language state (same as
 * every other page) and passed down as a prop — no internal toggle here.
 */

const CONTENT = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    intro:
      "This Privacy Policy explains how Sundra Group collects, uses, and protects any information you share with us when you visit this website, contact us, or interact with our dealer network. By using this website, you agree to the practices described below.",
    sections: [
      {
        heading: "1. Information we collect",
        body: "We may collect information you provide directly to us, such as your name, phone number, email address, and location, when you fill out a contact or enquiry form, reach out to us via email, or communicate with our dealers. We may also collect basic technical information, such as browser type and pages visited, through standard website analytics.",
      },
      {
        heading: "2. How we use your information",
        body: "We use the information collected to respond to enquiries, connect you with our authorised dealers, improve our products and website, and communicate updates about our products where relevant. We do not use your personal information for any purpose beyond what is reasonably necessary for these activities.",
      },
      {
        heading: "3. Sharing of information",
        body: "We do not sell or rent your personal information to third parties. We may share your information with our authorised dealers solely to fulfil enquiries or orders, and with service providers who assist us in operating this website, subject to appropriate confidentiality obligations.",
      },
      {
        heading: "4. Cookies & analytics",
        body: "This website may use cookies or similar technologies to understand how visitors use our site and to improve user experience. You can disable cookies through your browser settings, though some features of the website may not function as intended.",
      },
      {
        heading: "5. Data storage & security",
        body: "We take reasonable technical and organisational measures to protect the information you share with us from unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
      },
      {
        heading: "6. Data retention",
        body: "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law.",
      },
      {
        heading: "7. Your choices",
        body: "You may contact us at any time to ask what information we hold about you, to request corrections, or to request that your information be deleted, subject to any legal or record-keeping requirements that may apply.",
      },
      {
        heading: "8. Third-party links",
        body: "Our website may contain links to third-party websites, including dealer or social media pages. We are not responsible for the privacy practices or content of those external websites.",
      },
      {
        heading: "9. Children's privacy",
        body: "This website is not directed at children, and we do not knowingly collect personal information from children.",
      },
      {
        heading: "10. Changes to this policy",
        body: "We may update this Privacy Policy from time to time without prior notice. Continued use of the website after changes are posted constitutes acceptance of the revised policy.",
      },
      {
        heading: "11. Governing law",
        body: "This policy is governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts at Kanpur, Uttar Pradesh.",
      },
      {
        heading: "12. Contact",
        body: "For any questions regarding this Privacy Policy or how your information is handled, please reach out to us at sundragroup@gmail.com.",
      },
    ],
  },
  hi: {
    eyebrow: "कानूनी जानकारी",
    title: "गोपनीयता नीति",
    updated: "अंतिम बार अपडेट: जून 2026",
    intro:
      "यह गोपनीयता नीति बताती है कि जब आप इस वेबसाइट पर आते हैं, हमसे संपर्क करते हैं, या हमारे डीलर नेटवर्क के साथ बातचीत करते हैं, तो Sundra Group आपकी जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करता है। इस वेबसाइट का उपयोग करके, आप नीचे दी गई प्रक्रियाओं से सहमत होते हैं।",
    sections: [
      {
        heading: "1. हम कौन सी जानकारी एकत्र करते हैं",
        body: "जब आप संपर्क या पूछताछ फॉर्म भरते हैं, हमें ईमेल करते हैं, या हमारे डीलरों से संवाद करते हैं, तो हम आपके द्वारा दी गई जानकारी जैसे नाम, फोन नंबर, ईमेल पता और स्थान एकत्र कर सकते हैं। हम मानक वेबसाइट एनालिटिक्स के माध्यम से ब्राउज़र प्रकार और देखे गए पृष्ठों जैसी बुनियादी तकनीकी जानकारी भी एकत्र कर सकते हैं।",
      },
      {
        heading: "2. हम आपकी जानकारी का उपयोग कैसे करते हैं",
        body: "हम एकत्रित जानकारी का उपयोग पूछताछ का जवाब देने, आपको हमारे अधिकृत डीलरों से जोड़ने, हमारे उत्पादों और वेबसाइट में सुधार करने, तथा जहां प्रासंगिक हो वहां उत्पाद अपडेट के बारे में सूचित करने के लिए करते हैं। हम आपकी व्यक्तिगत जानकारी का उपयोग इन गतिविधियों के लिए उचित रूप से आवश्यक से परे किसी अन्य उद्देश्य के लिए नहीं करते।",
      },
      {
        heading: "3. जानकारी साझा करना",
        body: "हम आपकी व्यक्तिगत जानकारी किसी तीसरे पक्ष को नहीं बेचते या किराए पर नहीं देते। हम आपकी जानकारी केवल पूछताछ या ऑर्डर पूरा करने के उद्देश्य से हमारे अधिकृत डीलरों के साथ, और उचित गोपनीयता दायित्वों के अधीन इस वेबसाइट को संचालित करने में सहायता करने वाले सेवा प्रदाताओं के साथ साझा कर सकते हैं।",
      },
      {
        heading: "4. कुकीज़ एवं एनालिटिक्स",
        body: "यह वेबसाइट आगंतुकों के उपयोग को समझने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए कुकीज़ या समान तकनीकों का उपयोग कर सकती है। आप अपनी ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को अक्षम कर सकते हैं, हालांकि वेबसाइट की कुछ सुविधाएं तब सही ढंग से कार्य नहीं कर सकतीं।",
      },
      {
        heading: "5. डेटा भंडारण एवं सुरक्षा",
        body: "हम आपके द्वारा साझा की गई जानकारी को अनधिकृत पहुंच, हानि या दुरुपयोग से बचाने के लिए उचित तकनीकी और संगठनात्मक उपाय करते हैं। हालांकि, इंटरनेट पर प्रसारण की कोई भी विधि पूर्णतः सुरक्षित नहीं होती, और हम पूर्ण सुरक्षा की गारंटी नहीं दे सकते।",
      },
      {
        heading: "6. डेटा प्रतिधारण",
        body: "हम व्यक्तिगत जानकारी को केवल इस नीति में बताए गए उद्देश्यों को पूरा करने के लिए आवश्यक समय तक, या लागू कानून द्वारा आवश्यक समय तक ही सुरक्षित रखते हैं।",
      },
      {
        heading: "7. आपके विकल्प",
        body: "आप किसी भी समय हमसे संपर्क कर यह पूछ सकते हैं कि हमारे पास आपकी कौन सी जानकारी है, सुधार का अनुरोध कर सकते हैं, या अपनी जानकारी हटाने का अनुरोध कर सकते हैं, बशर्ते लागू कानूनी या रिकॉर्ड-रखरखाव आवश्यकताएं इसकी अनुमति दें।",
      },
      {
        heading: "8. तृतीय-पक्ष लिंक",
        body: "हमारी वेबसाइट में तृतीय-पक्ष वेबसाइटों, जिसमें डीलर या सोशल मीडिया पेज शामिल हो सकते हैं, के लिंक हो सकते हैं। हम उन बाहरी वेबसाइटों की गोपनीयता प्रथाओं या सामग्री के लिए उत्तरदायी नहीं हैं।",
      },
      {
        heading: "9. बच्चों की गोपनीयता",
        body: "यह वेबसाइट बच्चों को लक्षित नहीं करती, और हम जानबूझकर बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते।",
      },
      {
        heading: "10. नीति में परिवर्तन",
        body: "हम समय-समय पर बिना पूर्व सूचना के इस गोपनीयता नीति को अपडेट कर सकते हैं। परिवर्तन प्रकाशित होने के बाद वेबसाइट का निरंतर उपयोग संशोधित नीति की स्वीकृति माना जाएगा।",
      },
      {
        heading: "11. शासकीय कानून",
        body: "यह नीति भारत के कानूनों द्वारा शासित है, और कोई भी विवाद कानपुर, उत्तर प्रदेश के न्यायालयों के क्षेत्राधिकार के अधीन होगा।",
      },
      {
        heading: "12. संपर्क",
        body: "इस गोपनीयता नीति या आपकी जानकारी को कैसे संभाला जाता है, इस संबंध में किसी भी प्रश्न के लिए, कृपया हमसे sundragroup@gmail.com पर संपर्क करें।",
      },
    ],
  },
};

function PrivacyPolicy({ lang = "hi" }) {
  const t = CONTENT[lang] || CONTENT.hi;

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <Link to="/" className="privacy-back-link">
          &larr; {lang === "hi" ? "होम पर वापस जाएं" : "Back to home"}
        </Link>
      </div>

      <div className="privacy-content">
        <span className="privacy-eyebrow">{t.eyebrow}</span>
        <h1 className="privacy-title">{t.title}</h1>
        <p className="privacy-updated">{t.updated}</p>
        <p className="privacy-intro">{t.intro}</p>

        {t.sections.map((section) => (
          <div key={section.heading} className="privacy-section">
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>

      <style>{`
        .privacy-page {
          background: #fbf8f2;
          min-height: 100vh;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .privacy-header {
          max-width: 760px;
          margin: 0 auto;
          padding: 32px 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .privacy-back-link {
          color: #a8690f;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
        }
        .privacy-back-link:hover { text-decoration: underline; }

        .privacy-content {
          max-width: 760px;
          margin: 0 auto;
          padding: 32px 24px 80px;
        }
        .privacy-eyebrow {
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
        .privacy-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 5vw, 42px);
          color: #16261b;
          margin: 0 0 8px;
        }
        .privacy-updated {
          font-size: 13px;
          color: #8a958c;
          margin: 0 0 24px;
        }
        .privacy-intro {
          font-size: 16px;
          line-height: 1.75;
          color: #3a4a3e;
          margin: 0 0 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(28,42,32,0.1);
        }
        .privacy-section {
          margin-bottom: 32px;
        }
        .privacy-section h2 {
          font-size: 18px;
          font-weight: 600;
          color: #16261b;
          margin: 0 0 10px;
        }
        .privacy-section p {
          font-size: 15px;
          line-height: 1.75;
          color: #5b6b5e;
          margin: 0;
        }

        @media (max-width: 600px) {
          .privacy-content { padding: 24px 20px 64px; }
        }
      `}</style>
    </div>
  );
}

export default PrivacyPolicy;