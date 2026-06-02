import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Heart,
  Leaf,
  Sparkles,
  Wheat,
  BadgeCheck,
  Zap,
  Shield,
  Sun,
} from "lucide-react";
import { COMPANY } from "../lib/products";

const C = {
  ink: "#1b2316",
  forest: "#1f4d2c",
  gold: "#c9871f",
  cream: "#f8f1e1",
  cream2: "#f0e9d8",
  line: "rgba(27,35,22,0.12)",
};

const benefits = [
  {
    icon: Droplets,
    title: "More Milk",
    titleHi: "अधिक दूध",
    color: "#1f4d2c",
    desc:
      "Barsana feed is scientifically formulated to boost daily milk yield by up to 22%. Balanced energy and protein ratios ensure your herd reaches its genetic potential.",
    points: ["Up to +22% average milk yield", "Consistent output across seasons", "Higher fat & SNF percentages"],
  },
  {
    icon: Heart,
    title: "Better Health",
    titleHi: "बेहतर स्वास्थ्य",
    color: "#b34a25",
    desc:
      "Improved digestion, stronger immunity and better reproductive performance — Barsana's steam-cooked grains and mineral profile keep your herd thriving.",
    points: ["Steam cooked for 98% digestibility", "Reduces metabolic disorders", "Supports timely calving cycles"],
  },
  {
    icon: Sparkles,
    title: "Richer Fat",
    titleHi: "उच्च वसा",
    color: "#c9871f",
    desc:
      "Our fat-enriched variants push butterfat content to 6–7% in buffalo milk and 5–6% in cow milk — helping farmers earn premium prices.",
    points: ["6–7% fat in buffalo milk", "5–6% fat in cow milk", "Commands premium market rates"],
  },
  {
    icon: Wheat,
    title: "Natural Ingredients",
    titleHi: "प्राकृतिक अनाज",
    color: "#558b2f",
    desc:
      "Jwar, makka, sarson khali, kapas khali and mineral supplements — all-natural, non-GMO ingredients processed hygienically at our Kanpur Dehat plant.",
    points: ["100% natural grain base", "No synthetic preservatives", "ISO 9001:2015 certified process"],
  },
  {
    icon: Zap,
    title: "Faster Growth",
    titleHi: "तेज़ विकास",
    color: "#1565c0",
    desc:
      "For young calves and growing heifers, Barsana Calf Starter accelerates rumen development and body weight gain — setting up tomorrow's top producers.",
    points: ["Faster rumen maturation", "Higher weaning weights", "Reduces calf mortality risk"],
  },
  {
    icon: Shield,
    title: "Reproductive Health",
    titleHi: "प्रजनन स्वास्थ्य",
    color: "#6a1b9a",
    desc:
      "Optimised vitamin E, selenium and mineral balance shorten the calving interval and improve conception rates — directly impacting farm profitability.",
    points: ["Shorter calving intervals", "Higher conception rates", "Reduces silent heats"],
  },
];

export default function Benefits() {
  return (
    <main style={{ fontFamily: "sans-serif", color: C.ink, background: C.cream }}>
      {/* HERO */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px 60px" }}>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.gold,
            marginBottom: 20,
          }}
        >
          Why Barsana
        </div>
        <div
          className="benefits-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: 40,
            alignItems: "end",
          }}
        >
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              margin: 0,
              color: C.ink,
            }}
          >
            Six reasons dairy farmers trust{" "}
            <em style={{ color: C.forest, fontStyle: "italic" }}>Barsana</em>.
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: `${C.ink}b3` }}>
            From higher milk yield to better reproductive cycles — every benefit is backed by
            nutritional science and proven across 10,000+ farms.
          </p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map(({ icon: Icon, title, titleHi, color, desc, points }) => (
            <div
              key={title}
              style={{
                background: "#fffaf0",
                border: `1px solid ${C.line}`,
                borderRadius: 22,
                padding: 32,
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(27,35,22,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: `${color}1a`,
                  color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Icon size={24} />
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.5rem",
                  margin: 0,
                  color: C.ink,
                }}
              >
                {title}
              </h2>
              <div style={{ fontSize: "0.95rem", color, marginTop: 4, marginBottom: 16 }}>
                {titleHi}
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: `${C.ink}b3`, margin: 0 }}>
                {desc}
              </p>
              <ul style={{ marginTop: 20, paddingLeft: 0, listStyle: "none" }}>
                {points.map((pt) => (
                  <li
                    key={pt}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      marginBottom: 10,
                      fontSize: "0.875rem",
                      color: `${C.ink}cc`,
                    }}
                  >
                    <BadgeCheck size={16} style={{ color: C.forest, marginTop: 2, flexShrink: 0 }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px" }}>
        <div
          className="benefits-cta-grid"
          style={{
            background: C.forest,
            borderRadius: 28,
            padding: "56px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 32,
            alignItems: "center",
            color: C.cream,
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e3a73f",
                marginBottom: 16,
              }}
            >
              {COMPANY.brand}
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Ready to see the results on your farm?
            </h2>
            <p style={{ marginTop: 16, color: `${C.cream}cc`, maxWidth: 520 }}>
              Talk to our nutrition experts — free of cost — and get the right Barsana
              formula recommended for your herd.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <Link
              to="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 999,
                background: "#c9871f",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                color: C.cream,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .benefits-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .benefits-cta-grid {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
          }
        }
      `}</style>
    </main>
  );
}
