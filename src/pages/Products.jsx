import React from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../lib/products";

export default function Products({lang}) {
  return (
    <div className="Main">
      {/* HEADER */}

      <section
        style={{
          maxWidth: "1180px",
          fontFamily: "'Inter', sans-serif",
          margin: "0 auto",
          padding: "160px 40px 40px",
        }}
      >
        <div
          style={{
            color: "#c9871f",
            fontWeight: "600",
            // letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "25px",
          }}
        >
          {lang == "hi" ? "बरसाना रेंज" : "The Barsana Range"}
        </div>

        <div
          className="products-header-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "end",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.5rem, 3vw, 40px)",
              lineHeight: "1.5",
              margin: 0,
              color: "#222",
              fontWeight: "600",
            }}
          >
            {lang == "hi" ? "हर ज़रूरत के लिए प्रीमियम फ़ीड्स" : "A wide range of premium feeds."}
            <br />
            <span
              style={{
                color: "#1f4d2c",
                // fontStyle: "italic",
              }}
            >
              {lang == "hi" ? "एक भरोसेमंद गुणवत्ता।" : "One promise."}
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            {lang == "hi"
              ? "बरसाना पशु आहार की हर फ़ीड वर्षों के अनुभव और वैज्ञानिक पोषण अनुसंधान पर आधारित है, ताकि पशुओं को हर जीवन-अवस्था में सर्वोत्तम स्वास्थ्य, शक्ति और उत्पादन क्षमता मिल सके।"
              : "Every Barsana Animal Feed product is backed by years of experience and scientific nutritional research, helping livestock achieve optimal health, greater strength, and enhanced productivity throughout every stage of life."}
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "35px",
          }}
          className="products-grid"
        >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .products-header-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .Main{
           padding: 0 2px;
           
          }

          .products-grid{
          padding: 0 auto !important;
          
          }
        }
      `}</style>
    </div>
  );
}
