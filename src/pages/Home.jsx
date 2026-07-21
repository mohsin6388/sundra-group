import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Heart, Sparkles, Wheat, BadgeCheck, MapPin } from "lucide-react";
import { HERO_PRODUCTS, COMPANY, GALLERY_IMAGES } from "../lib/products";
import ProductCard from "../components/ProductCard";
import banner1 from "../assets/banner-main.webp";
import banner2 from "../assets/Sundra-banner.webp";
import farmer from "../assets/products-cat.webp";
import cow from "../assets/this-cow.webp";
import {content} from "../lib/translate";
import {reviews} from "../lib/translate"
import BarsanaAbout from "../components/BarsanaAbout";


const banners = [banner1, banner2, banner1, banner2];

const slides = [...banners, banners[0]];

// ── Design tokens (inline replacement for CSS variables) ──────────────────────
const C = {
  ink:        "#1a1a2e",
  forest:     "#1f4d2c",
  gold:       "#c9922a",
  gold2:      "#e8b84b",
  cream:      "#fdf8f0",
  cream2:     "#f5ede0",
  terracotta: "#c0522a",
  line:       "rgba(26,26,46,0.12)",
};

// ── Shared style objects ──────────────────────────────────────────────────────
const btnBase = {
  display:        "inline-flex",
  alignItems:     "center",
  gap:            8,
  borderRadius:   9999,
  padding:        "12px 24px",
  fontSize:       "0.9rem",
  fontWeight:     600,
  cursor:         "pointer",
  textDecoration: "none",
  transition:     "opacity 0.2s",
};

const btnPrimary = {
  ...btnBase,
  background: C.forest,
  color:      C.cream,
  border:     "none",
};

const btnGhost = {
  ...btnBase,
  background: "transparent",
  color:      C.ink,
  border:     `1.5px solid ${C.line}`,
};

const btnGold = {
  ...btnBase,
  background: C.gold,
  color:      "#fff",
  border:     "none",
};

const kicker = {
  display:       "inline-flex",
  alignItems:    "center",
  gap:           6,
  fontSize:      "1rem",
  fontWeight:    700,
  // letterSpacing: "0.18em",
  textTransform: "uppercase",
  color:         C.gold,
};

const cardSoft = {
  background:   C.cream,
  border:       `1px solid ${C.line}`,
  borderRadius: 20,
  transition:   "transform 0.2s",
};



export default function Home({ lang }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

   const t = (key) => content[key][lang];
   console.log( "HEllo ",lang)

   const stats = [
     { num: t("stats.farmers_count"), label: t("stats.farmers_label") },
    //  { num: t("stats.milk_increase"), label: t("stats.milk_label") },
     { num: t("stats.experience"), label: t("stats.experience_label") },
     { num: t("stats.dealers_count"), label: t("stats.dealers_label") },
   ];



  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    // Jab clone (last) pe pahunche — silently reset to real first
    if (current === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false); // transition band karo
        setCurrent(0); // silently pehle pe jao
      }, 600); // transition duration ke baad
    } else {
      setIsTransitioning(true); // baaki sab pe transition on
    }
  }, [current]);

  const [cur, setCur] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const VISIBLE = isMobile ? 2 : 3;
  const GAP = isMobile ? 16 : 24;
  const PADDING = isMobile ? 32 : 64; // total horizontal padding of section
  const steps = HERO_PRODUCTS.length - VISIBLE + 1;
  const CARD_WIDTH = `calc((min(1216px, 100vw - ${PADDING}px) - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`;

  useEffect(() => {
    setCur(0); // screen resize pe reset
  }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCur((c) => (c + 1) % steps);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps]);

  return (
    <>
      <style>
        {`

        .section-2{
          max-width: 100%;
          margin: 0 auto;
          padding: 64px 2px;
          font-family: 'Inter', sans-serif;
        }

        .section-2-img {
  width: 100%;
  max-width: 450px; /* apni layout ke hisaab se adjust karo */
  display: flex;
  align-items: center;
  justify-content: center;
  borderRadius: 10px;
}

.section-2-img img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
}

        .inside-section-2-1{
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .tagline{
          font-size: 12px;
          text-transform: uppercase;
          color: ${C.gold};
          font-weight: 700;
          margin-bottom: 16px;
        }

        @media (max-width: 786px){
          .section-2{
            padding: 0px 50px;
            width: 100%;
          }

          .tagline{
          font-size: 12px;
          text-transform: uppercase;
          text-align: center;
          color: ${C.gold};
          font-weight: 600;
          margin-bottom: 16px;
        }

          .inside-section-2-1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;  /* space-between → center, kyunki column mein better lagta hai */
            gap: 10px;                /* 50px → 20px, column mein itna gap zyada lagta hai */
          }
        }

        .heading-title {
  font-size: clamp(20px, 3vw, 30px);
  font-weight: 600;
  color: #111;
  line-height: 1.2;
  margin-bottom: 16px;
}

@media (max-width: 786px) {
  .heading-title {
    white-space: nowrap;
    font-size: clamp(14px, 4vw, 22px);
  }

  .heading-break {
    display: none; /* mobile pe br hata do */
  }
}

    `}
      </style>

      <main
        data-testid="home-page"
        style={{ fontFamily: "sans-serif", color: C.ink, background: C.cream }}
      >
        {/* ── HERO ─────────────────────────────────────────────────────────── */}

        <section
          style={{
            position: "relative",
            width: "100%",
            padding:" 0 0 10px 0",
            overflow: "hidden",
            // background: "red",
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(current * 100) / slides.length}%)`,
              transition: isTransitioning
                ? "transform 0.6s ease-in-out"
                : "none",
            }}
          >
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Banner ${i + 1}`}
                style={{
                  width: `${100 / slides.length}%`,
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            ))}
          </div>
        </section>

        <section
          className="section-2"
          style={{
            padding: "64px 42px",
            maxWidth: "1160px",
            margin: "0 auto",
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.8,
          }}
        >
          <div>
            <div className="inside-section-2-1">
              <div>
                {/* Tag */}
                <p
                  className="tagline"
                >
                  {t("hero.tagline")}
                  {/* Trusted by thousands */}
                </p>

                {/* Heading */}
               <h2 className="heading-title">
  {t("hero.headline_1")}
  <br className="heading-break" />
  <span style={{ color: "#2D6A3E" }}>
    {" "}
    {t("hero.headline_3")}
  </span>
</h2>

                {/* Subtext */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#666",
                    lineHeight: 1.7,
                    maxWidth: "480px",
                    marginBottom: "48px",
                  }}
                >
                  {t("hero.description")}
                </p>
              </div>

              <div className="section-2-img" style={{ maxWidth: "450px", width: "100%" }}>
                <img src={cow} alt="" style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "16px"  }} />
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid #e5e5e5",
                marginBottom: "40px",
                marginTop: "15px"
              }}
            />

            {/* Stats */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "48px",
                flexWrap: "wrap",
              }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: "clamp(32px, 4vw, 44px)",
                      fontWeight: 500,
                      color: "#2D6A3E",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#888",
                      marginTop: "6px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          style={{
            borderTop: "1px solid #e5e5e5",
            marginBottom: "30px",
            marginTop: "20px",
            marginLeft: "80px",
            marginRight: "80px",
          }}
        />

        <BarsanaAbout lang={lang}/>


        {/* ── FEATURED PRODUCTS ────────────────────────────────────────────── */}

        <section
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: isMobile ? "40px 36px" : "64px 32px",
            borderTop: "1px solid #e5e5e5",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: isMobile ? 24 : 40,
            }}
          >
            <div>
              <div style={kicker}>{t("range.label")}</div>
              <h2
                style={{
                  fontSize: isMobile ? "1.6rem" : "clamp(2rem, 3vw, 2rem)",
                  color: C.ink,
                  marginTop: 16,
                }}
              >
                {t("range.headline")}
              </h2>
            </div>
            <Link
              to="/products"
              style={btnGhost}
              data-testid="home-view-all-products"
            >
              {t("range.cta")} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Slider */}
          <div
            style={{
              overflow: "hidden",
              padding: isMobile ? "10px 8px" : "10px 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: GAP,
                transition: "transform 0.55s cubic-bezier(.4,0,.2,1)",
                transform: `translateX(calc(-${cur} * (${CARD_WIDTH} + ${GAP}px)))`,
              }}
            >
              {HERO_PRODUCTS.map((p) => (
                <div
                  key={p.slug}
                  style={{
                    minWidth: CARD_WIDTH,
                    maxWidth: CARD_WIDTH,
                    flexShrink: 0,
                  }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 20,
            }}
          >
            {Array.from({ length: steps }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                style={{
                  width: i === cur ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  background: i === cur ? C.ink : "#ccc",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </section>

        <section
          style={{ background: C.forest, color: C.cream, marginTop: 40 }}
        >
          <div
            className="science-grid"
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "80px 32px",
              display: "grid",
              gridTemplateColumns: "6fr 6fr",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              {/* <div style={{ ...kicker, color: C.gold2 }}>
                {t("science.label")}
              </div> */}
              <h2
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.5rem)",
                  lineHeight: 1.2,
                  marginTop: 16,
                }}
              >
                {t("science.headline_1")}{" "}
                <em style={{ fontStyle: "italic", color: C.gold2 }}>
                  {t("science.headline_2")}
                </em>
              </h2>
              <p
                style={{
                  marginTop: 24,
                  color: `${C.cream}cc`,
                  maxWidth: 520,
                  lineHeight: 1.65,
                }}
              >
                {t("science.description")}
              </p>
              <Link
                to="/benefits"
                style={{ ...btnGold, marginTop: 32, display: "inline-flex" }}
                data-testid="science-cta"
              >
                {t("science.cta")} <ArrowRight size={16} />
              </Link>
            </div>

            <div
              className="science-specs-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {["energy", "protein", "fibre", "fat", "moisture", "vitamin"].map(
                (key) => (
                  <div
                    key={key}
                    style={{
                      background: "rgba(253,248,240,0.10)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      borderRadius: 16,
                      padding: 20,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.65rem",
                        textTransform: "uppercase",
                        // letterSpacing: "0.2em",
                        color: C.gold2,
                        fontWeight: 700,
                      }}
                    >
                      {t(`science.${key}.label`)}
                    </div>
                    <div
                      style={{
                        
                        fontSize: "1.5rem",
                        marginTop: 4,
                      }}
                    >
                      {t(`science.${key}.value`)}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}

        <section className="review-section" style={{ padding: "96px 30px" }}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "0 0 40px 0px",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1rem, 1vw, 20px)",
                fontWeight: 600,
                color: "#B47D1A",

                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {t("testimonial.label")}
            </div>
            <div
              style={{
                fontSize: "clamp(2rem, 3vw, 2.5rem)",
                fontWeight: 500,
                color: C.ink,
                marginBottom: 32,
                color: "#1F4D2C",
              }}
            >
              {lang === "hi"
                ? "जो नतीजे बोलते हैं"
                : "Results That Speak for Themselves"}
            </div>
          </div>

          <div
            style={{
              overflow: "hidden",
              maxWidth: 1180,
              margin: "0 auto",
              paddingLeft: 36,
            }}
          >
            <div
              className="marquee-track"
              style={{
                display: "flex",
                gap: 16,
                width: "max-content",
                animation: "scrollLeft 32s linear infinite",
              }}
            >
              {[...reviews, ...reviews].map((r, i) => (
                <div
                  key={i}
                  style={{
                    width: 300,
                    flexShrink: 0,
                    background: "#fff",
                    border: `1px solid ${C.line}`,
                    borderRadius: 16,
                    padding: "20px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", gap: 3 }}>
                    {[...Array(5)].map((_, si) => (
                      <span key={si} style={{ color: "#BA7517", fontSize: 14 }}>
                        ★
                      </span>
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: `${C.ink}b3`,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    "{r.quote[lang]}"
                  </p>

                  <div style={{ height: "0.5px", background: C.line }} />

                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "#EAF3DE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#3B6D11",
                        flexShrink: 0,
                      }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: C.ink,
                          margin: 0,
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{ fontSize: 11, color: `${C.ink}99`, margin: 0 }}
                      >
                        {r.location}{" "}
                        <span
                          style={{
                            background: "#EAF3DE",
                            color: "#3B6D11",
                            padding: "2px 8px",
                            borderRadius: 999,
                            fontSize: 11,
                            marginLeft: 4,
                          }}
                        >
                          {r.product}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track:hover { animation-play-state: paused; }
  `}</style>
        </section>


        <section
          style={{
            maxWidth: 1180,
            margin: "80px auto",
            padding: "0 32px 80px",
          }}
        >
          <div
            className="cta-band-grid"
            style={{
              background: C.cream2,
              border: `1px solid ${C.line}`,
              borderRadius: 28,
              padding: "56px",
              display: "grid",
              gridTemplateColumns: "8fr 4fr",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              <div style={kicker}>{t("dealer.label")}</div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.75rem, 2vw, 2rem)",
                  lineHeight: 1.2,
                  marginTop: 16,
                }}
              >
                {t("dealer.headline")}
              </h2>
              <p style={{ marginTop: 16, color: `${C.ink}b3`, maxWidth: 600 }}>
                {t("dealer.description")}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/dealers"
                style={btnPrimary}
                data-testid="cta-dealer-btn"
              >
                {t("dealer.apply")} <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                style={btnGhost}
                data-testid="cta-contact-btn"
              >
                {t("dealer.contact")}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Keyframes + Responsive CSS ───────────────────────────────────── */}
        <style>{`
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .review-section{
           padding: "96px 120px";
        }

        /* Value props header: stack on mobile */
        @media (max-width: 768px) {
          
          .value-header-grid {
            grid-template-columns: 1fr !important;
          }
          .value-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .featured-products-grid {
            grid-template-columns: 1fr !important;
            padding: 0 40px;
            gap: 24px !important;
          }
          .science-grid {
            grid-template-columns: 1fr !important;
          }
          .science-specs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-band-grid {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
          }
          .cta-band-grid > div:last-child {
            justify-content: flex-start !important;
          }
          .hero-cta-wrap {
            right: 16px !important;
            bottom: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .value-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .science-specs-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Section padding on mobile */
        @media (max-width: 600px) {
          section[style*="padding: 80px 32px"],
          section[style*="padding: 64px 32px"],
          section[style*="padding: 96px 32px"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
      </main>
    </>
  );
}
