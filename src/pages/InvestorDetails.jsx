
import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { INVESTOR_SECTIONS } from "./Investor" // adjust path as per your folder structure

const InvestorDetails = ({ lang = "hi" }) => {
  const { slug } = useParams();
  const location = useLocation();

  // 1) If user clicked a card, data is already passed via route state — use it directly.
  // 2) Otherwise (direct URL visit / page refresh), find it from the slug.
  const section =
    location.state?.section ??
    INVESTOR_SECTIONS.find((s) => s.slug === slug);

  if (!section) {
    return (
      <div className="investor-details">
        <p>{lang === "hi" ? "यह पेज नहीं मिला।" : "Page not found."}</p>
        <Link to="/investors" className="investor-back-link">
          &larr; {lang === "hi" ? "सभी निवेशक सेक्शन" : "All Investor Sections"}
        </Link>
      </div>
    );
  }

  return (
    <div className="investor-details">
      <Link to="/investor" className="investor-back-link">
        &larr; {lang === "hi" ? "सभी निवेशक सेक्शन" : "All Investor Sections"}
      </Link>

      <h1 className="investor-details-title">
        {lang === "hi" ? section.hi : section.en}
      </h1>

      <p className="investor-details-body">
        {lang === "hi" ? section.content.hi : section.content.en}
      </p>

      <style>{`
        .investor-details {
          background: #fbf8f2;
          min-height: 100vh;
          padding: 100px 24px;
          max-width: full;
          margin: 0 auto;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .investor-back-link {
          color: #a8690f;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
        }
        .investor-back-link:hover { text-decoration: underline; }
        .investor-details-title {
          font-family: Georgia, serif;
          color: #16261b;
          font-size: clamp(26px, 4vw, 36px);
          margin: 24px 0 16px;
        }
        .investor-details-body {
          color: #5b6b5e;
          font-size: 16px;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
};

export default InvestorDetails;