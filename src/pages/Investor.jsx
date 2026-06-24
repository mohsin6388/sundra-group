// import React from "react";

// // Investors page — click "Investors" tab in navbar to land here.
// // Each card below represents one section. Swap `href` with the real
// // route/PDF link once content is shared by the client.

// const INVESTOR_SECTIONS = [
//   { en: "Shareholding Pattern", hi: "शेयरधारिता पैटर्न" },
//   { en: "Material Contracts & Documents", hi: "मुख्य अनुबंध एवं दस्तावेज़" },
//   { en: "Advertisements", hi: "विज्ञापन" },
//   { en: "Company Announcement", hi: "कंपनी की घोषणा" },
//   { en: "Notice", hi: "सूचना" },
//   { en: "Investor Contacts", hi: "निवेशक संपर्क" },
//   { en: "Composition of Board Committees", hi: "बोर्ड समितियों की संरचना" },
//   { en: "IPO Documents", hi: "आईपीओ दस्तावेज़" },
//   { en: "Annual Report & Annual Returns", hi: "वार्षिक रिपोर्ट एवं वार्षिक विवरण" },
//   { en: "Financial Results", hi: "वित्तीय परिणाम" },
//   { en: "Policies & Codes", hi: "नीतियां एवं संहिता" },
// ];

// function Investor({ lang = "en" }) {
//   return (
//     <div className="investors-page">
//       <div className="investors-header">
//         <span className="investors-eyebrow">
//           {lang === "hi" ? "निवेशक संबंध" : "Investor Relations"}
//         </span>
//         <h1 className="investors-title">
//           {lang === "hi" ? "निवेशक" : "Investors"}
//         </h1>
//         <p className="investors-sub">
//           {lang === "hi"
//             ? "पारदर्शिता और शासन से जुड़े सभी दस्तावेज़ और जानकारी यहां उपलब्ध हैं।"
//             : "All disclosures, reports and governance documents in one place."}
//         </p>
//       </div>

//       <div className="investors-grid">
//         {INVESTOR_SECTIONS.map((section, i) => (
//           <a
//             key={section.en}
//             href={`/investors/${section.en
//               .toLowerCase()
//               .replace(/[&]/g, "and")
//               .replace(/[^a-z0-9]+/g, "-")
//               .replace(/(^-|-$)/g, "")}`}
//             className="investor-card"
//           >
//             <span className="investor-card-index">
//               {String(i + 1).padStart(2, "0")}
//             </span>
//             <span className="investor-card-label">
//               {lang === "hi" ? section.hi : section.en}
//             </span>
//             <span className="investor-card-arrow" aria-hidden="true">
//               &rarr;
//             </span>
//           </a>
//         ))}
//       </div>

//       <style>{`
//         .investors-page {
//           background: #0f1a13;
//           min-height: 100vh;
//           padding: 152px 24px 96px;
//           color: #f8f1e1;
//           font-family: 'Inter', system-ui, sans-serif;
//         }
//         .investors-header {
//           max-width: 720px;
//           margin: 0 auto 56px;
//           text-align: center;
//         }
//         .investors-eyebrow {
//           display: inline-block;
//           font-size: 12px;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           color: #c9871f;
//           font-weight: 600;
//           margin-bottom: 12px;
//         }
//         .investors-title {
//           font-size: clamp(32px, 5vw, 48px);
//           font-weight: 700;
//           margin: 0 0 12px;
//           letter-spacing: -0.02em;
//         }
//         .investors-sub {
//           color: rgba(248,241,225,0.65);
//           font-size: 16px;
//           line-height: 1.6;
//           margin: 0;
//         }
//         .investors-grid {
//           max-width: 980px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 16px;
//         }
//         .investor-card {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 16px;
//           padding: 20px 22px;
//           text-decoration: none;
//           color: #f8f1e1;
//           transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
//         }
//         .investor-card:hover {
//           background: rgba(255,255,255,0.08);
//           border-color: rgba(201,135,31,0.5);
//           transform: translateY(-2px);
//         }
//         .investor-card-index {
//           font-size: 13px;
//           font-weight: 600;
//           color: #c9871f;
//           flex-shrink: 0;
//           width: 28px;
//         }
//         .investor-card-label {
//           font-size: 15px;
//           font-weight: 500;
//           flex: 1;
//           line-height: 1.4;
//         }
//         .investor-card-arrow {
//           color: rgba(248,241,225,0.4);
//           font-size: 16px;
//           transition: transform 0.2s ease, color 0.2s ease;
//         }
//         .investor-card:hover .investor-card-arrow {
//           color: #c9871f;
//           transform: translateX(3px);
//         }
//         @media (max-width: 720px) {
//           .investors-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Investor



import React from "react";
import { Link, useParams } from "react-router-dom";

/**
 * ------------------------------------------------------------
 * 1) DATA — single source of truth for all investor sections.
 *    Add `content` here once the client shares real data/PDFs.
 * ------------------------------------------------------------
 */
export const INVESTOR_SECTIONS = [
  {
    slug: "shareholding-pattern",
    en: "Shareholding Pattern",
    hi: "शेयरधारिता पैटर्न",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "material-contracts-and-documents",
    en: "Material Contracts & Documents",
    hi: "मुख्य अनुबंध एवं दस्तावेज़",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "advertisements",
    en: "Advertisements",
    hi: "विज्ञापन",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "company-announcement",
    en: "Company Announcement",
    hi: "कंपनी की घोषणा",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "notice",
    en: "Notice",
    hi: "सूचना",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "investor-contacts",
    en: "Investor Contacts",
    hi: "निवेशक संपर्क",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "composition-of-board-committees",
    en: "Composition of Board Committees",
    hi: "बोर्ड समितियों की संरचना",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "ipo-documents",
    en: "IPO Documents",
    hi: "आईपीओ दस्तावेज़",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "annual-report-and-annual-returns",
    en: "Annual Report & Annual Returns",
    hi: "वार्षिक रिपोर्ट एवं वार्षिक विवरण",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "financial-results",
    en: "Financial Results",
    hi: "वित्तीय परिणाम",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
  {
    slug: "policies-and-codes",
    en: "Policies & Codes",
    hi: "नीतियां एवं संहिता",
    content: { en: "Content coming soon.", hi: "जानकारी जल्द उपलब्ध होगी।" },
  },
];

/**
 * ------------------------------------------------------------
 * 2) LISTING PAGE — /investors
 *    Each card is a <Link>, not <a>. React Router intercepts
 *    the click, so no full reload — and we pass the section's
 *    data forward via route `state` (in addition to the slug
 *    being in the URL for direct linking/refresh).
 * ------------------------------------------------------------
 */

function Investor({ lang = "hi" }) {
  return (
    <div className="investors-page">
      <div className="investors-header">
        <span className="investors-eyebrow">
          {lang === "hi" ? "निवेशक संबंध" : "Investor Relations"}
        </span>
        <h1 className="investors-title">
          {lang === "hi" ? "निवेशक" : "Investors"}
        </h1>
      </div>

      <div className="investors-grid">
        {INVESTOR_SECTIONS.map((section, i) => (
          <Link
            key={section.slug}
            to={`/investors/${section.slug}`}
            state={{ section }} // <-- data sent to the next page
            className="investor-card"
          >
            <span className="investor-card-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="investor-card-label">
              {lang === "hi" ? section.hi : section.en}
            </span>
            <span className="investor-card-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        ))}
      </div>

      {/* <style>{`
        .investors-page { background: #fbf8f2; min-height: 100vh; padding: 64px 24px; font-family: 'Inter', system-ui, sans-serif; }
        .investors-header { max-width: 720px; margin: 0 auto 40px; text-align: center; }
        .investors-eyebrow { display:inline-block; padding:6px 16px; border:1px solid rgba(201,135,31,0.35); border-radius:999px; background:rgba(201,135,31,0.08); color:#a8690f; font-size:12.5px; font-weight:600; margin-bottom:16px; }
        .investors-title { font-family: Georgia, serif; font-size: clamp(30px,5vw,44px); color:#16261b; margin:0; }
        .investors-grid { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .investor-card { display:flex; align-items:center; gap:16px; background:#fff; border:1px solid rgba(28,42,32,0.1); border-radius:14px; padding:20px 22px; text-decoration:none; color:#1c2a20; transition: border-color .2s, transform .2s, box-shadow .2s; }
        .investor-card:hover { border-color: rgba(201,135,31,0.55); transform: translateY(-2px); box-shadow: 0 6px 18px rgba(28,42,32,0.08); }
        .investor-card-index { font-size:13px; font-weight:700; color:#c9871f; width:26px; flex-shrink:0; }
        .investor-card-label { font-size:15px; font-weight:500; flex:1; line-height:1.4; }
        .investor-card-arrow { color: rgba(28,42,32,0.3); transition: transform .2s, color .2s; }
        .investor-card:hover .investor-card-arrow { color:#c9871f; transform: translateX(3px); }
        @media (max-width: 600px) { .investors-grid { grid-template-columns: 1fr; } }
      `}</style> */}


        <style>{`
        .investors-page {
          background: #0f1a13;
          min-height: 100vh;
          padding: 152px 24px 96px;
          color: #f8f1e1;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .investors-header {
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .investors-eyebrow {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c9871f;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .investors-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 700;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }
        .investors-sub {
          color: rgba(248,241,225,0.65);
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }
        .investors-grid {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .investor-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 20px 22px;
          text-decoration: none;
          color: #f8f1e1;
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }
        .investor-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(201,135,31,0.5);
          transform: translateY(-2px);
        }
        .investor-card-index {
          font-size: 13px;
          font-weight: 600;
          color: #c9871f;
          flex-shrink: 0;
          width: 28px;
        }
        .investor-card-label {
          font-size: 15px;
          font-weight: 500;
          flex: 1;
          line-height: 1.4;
        }
        .investor-card-arrow {
          color: rgba(248,241,225,0.4);
          font-size: 16px;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .investor-card:hover .investor-card-arrow {
          color: #c9871f;
          transform: translateX(3px);
        }
        @media (max-width: 720px) {
          .investors-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}




export default Investor

/**
 * ------------------------------------------------------------
 * 3) DETAIL PAGE — /investors/:slug
 *    Reads the slug from the URL. If the user clicked a card,
 *    `location.state.section` is already there (instant, no
 *    lookup needed). If the user landed directly via URL/refresh
 *    (state is empty), it falls back to finding the section by
 *    slug from INVESTOR_SECTIONS — so the page still works.
 * ------------------------------------------------------------
 */


/**
 * ------------------------------------------------------------
 * 4) ROUTES — wire this into your main router (e.g. App.jsx)
 * ------------------------------------------------------------
 *
 * import { BrowserRouter, Routes, Route } from "react-router-dom";
 * import { InvestorsPage, InvestorDetailPage } from "./InvestorsPage";
 *
 * <BrowserRouter>
 *   <Routes>
 *     <Route path="/investors" element={<InvestorsPage lang="hi" />} />
 *     <Route path="/investors/:slug" element={<InvestorDetailPage lang="hi" />} />
 *   </Routes>
 * </BrowserRouter>
 */