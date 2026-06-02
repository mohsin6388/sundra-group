import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe2, Sprout, Users } from "lucide-react";
import { COMPANY, GALLERY_IMAGES } from "../lib/products";

export default function About() {
  return (
    <main>

      {/* HERO */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            color: "#c9871f",
            fontWeight: "600",
            marginBottom: "25px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          About {COMPANY.group}
        </div>

        <div
          className="about-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "50px",
            alignItems: "start",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 64px)",
              lineHeight: "1.1",
              margin: 0,
              color: "#222",
            }}
          >
            Feeding India's dairy revolution since{" "}
            <span style={{ color: "#c9871f" }}>
              {COMPANY.established}
            </span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            Founded by {COMPANY.founder}, Sundra Group entered
            the animal feed industry with one promise —
            scientifically engineered feed for healthier
            animals and higher milk production.
          </p>
        </div>
      </section>

      {/* IMAGE + STATS */}

      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div
          className="about-image-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "30px",
          }}
        >
          <div>
            <img
              src={GALLERY_IMAGES[2]}
              alt="Factory"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
          </div>

          <div
            className="about-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            {[
              {
                Icon: Sprout,
                k: "Estd.",
                v: COMPANY.established,
              },
              {
                Icon: Globe2,
                k: "Markets",
                v: "India · Nepal",
              },
              {
                Icon: Users,
                k: "Farmers",
                v: "10,000+",
              },
              {
                Icon: Award,
                k: "Certificate",
                v: "ISO 9001:2015",
              },
            ].map(({ Icon, k, v }) => (
              <div
                key={k}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "25px",
                  boxShadow:
                    "0 5px 25px rgba(0,0,0,.08)",
                }}
              >
                <Icon
                  size={24}
                  color="#1f4d2c"
                />

                <div
                  style={{
                    marginTop: "15px",
                    fontSize: "12px",
                    color: "#777",
                    textTransform: "uppercase",
                  }}
                >
                  {k}
                </div>

                <div
                  style={{
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .about-image-grid {
            grid-template-columns: 1fr !important;
          }
          .about-image-grid img {
            height: 300px !important;
          }
        }
        @media (max-width: 480px) {
          .about-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
