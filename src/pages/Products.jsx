import React from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../lib/products";
import { Bold } from "lucide-react";

export default function Products({lang}) {
  return (
    <div className="Main">
      {/* HEADER */}

      <section
        style={{
          maxWidth: "1180px",
          fontFamily: "'Inter', sans-serif",
          margin: "0 auto",
          padding: "160px 40px 40px 5px",
          
        }}
      >
        <div

        className="product-header-heading"
          style={{
            color: "#c9871f",
            fontWeight: "600",
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
              ? "बरसाना पशु आहार की हर फ़ीड वर्षों के अनुभव और वैज्ञानिक पोषण अनुसंधान पर आधारित है, ताकि पशुओं को हर जीवन-अवस्था में सर्वोत्तम स्वास्थ्य, शक्ति और उत्पादन क्षमता मिल सके। चाहे पशु नया दूध देना शुरू कर रहा हो या उच्चतम उत्पादन क्षमता पर हो, हमारी हर फ़ीड को उसकी विशेष ज़रूरतों को ध्यान में रखकर सावधानीपूर्वक तैयार किया गया है।"
              : "Every Barsana Animal Feed product is backed by years of experience and scientific nutritional research, helping livestock achieve optimal health, greater strength, and enhanced productivity throughout every stage of life. Whether an animal is just starting to lactate or is at peak production, each feed is carefully formulated to meet its specific needs."}
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            {lang == "hi"
              ? "हम मानते हैं कि एक स्वस्थ पशु ही एक समृद्ध डेयरी व्यवसाय की नींव है। इसी सोच के साथ, बरसाना की टीम ने देश भर के किसानों और पशुपालकों के साथ मिलकर काम किया है, ताकि हर फ़ीड न सिर्फ पोषण से भरपूर हो, बल्कि सुलभ और किफ़ायती भी रहे। हमारी हर फ़ीड में सही मात्रा में प्रोटीन, फैट, आवश्यक मिनरल्स और विटामिन्स का संतुलन होता है, जो पशु के समग्र विकास, प्रजनन क्षमता और दूध की गुणवत्ता को बेहतर बनाता है।"
              : "We believe a healthy animal is the foundation of a thriving dairy business. With this in mind, the Barsana team has worked closely with farmers and cattle owners across the country to ensure every feed is not only nutrient-rich but also accessible and affordable. Each feed is balanced with the right proportion of protein, fat, essential minerals, and vitamins, improving the animal's overall growth, reproductive health, and milk quality."}
          </p>


          <p
           style={{
                    fontSize: "20px",
                    lineHeight: "1.8",
                    color: "#161111",
                    fontWeight: 600,
                  }}
          >
            {lang == "hi"
              ? "आज बरसाना देशभर के हज़ारों किसानों का भरोसा बन चुका है — क्योंकि हम सिर्फ फ़ीड नहीं बेचते, बल्कि हर पशु के स्वस्थ और समृद्ध भविष्य में साझेदार बनते हैं।"
              : "Today, Barsana is trusted by thousands of farmers across the country — because we don't just sell feed, we partner in the healthy and prosperous future of every animal."}
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
            padding: 0 20px;
          }

          .product-header-heading{
          padding:0 20px;
          }

          .Main{
           padding: 0 20px;
           
          }

      

          .products-grid{
          padding: 0 auto !important;
          
          }
        }
      `}</style>
    </div>
  );
}
