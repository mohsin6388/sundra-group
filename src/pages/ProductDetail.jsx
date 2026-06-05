import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Droplets,
  Wheat,
  Phone,
} from "lucide-react";

// import BarsanaPacketYellow from "../assets/Barsana-D.webp"
// import BarsanaPacketPink from "../assets/BarsanaPink.webp"
// import BarsanaPacketRed from "../assets/Barsana-Packet.webp"
// import BuffSpecial from "../assets/Buff-Special.webp"
// import Churi from "../assets/Churi.webp"
// import MultiGranChukar from "../assets/Multigran-Chokar.webp"
// import RoyalMixture from "../assets/Royal-Mixture.webp"
// import Sudarshan from "../assets/Sudarshan.webp"
// import Super from "../assets/Super.webp"
// import SupremePlus from "../assets/Supremeplus.webp"
// import eightThousand from "../assets/8000.webp"

import { findProduct, PRODUCTS, COMPANY } from "../lib/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = findProduct(slug);

  console.log("Yeh kya hai bhai ---> ",product)

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const others = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main data-testid={`product-detail-${slug}`}>
      {/* Back Button */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-10">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"
        >
          <ArrowLeft size={16} />
          All Products
        </Link>
      </section>

      {/* Product Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-16">
        <div className="product-detail-hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}>
          <div>
            <div
              className="relative overflow-hidden rounded-3xl border"
              style={{
                aspectRatio: "4/5",
                background: `linear-gradient(150deg, ${product.accent}25, transparent 70%)`,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div>
            <span
              className="text-[11px] uppercase tracking-[3px] font-semibold rounded-full px-3 py-1 text-white"
              style={{ background: product.accent }}
            >
              {product.tag}
            </span>

            <h1 className="font-bold mt-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {product.name}
            </h1>

            <p className="text-2xl text-green-700 mt-2">
              {product.nameHi}
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {product.summary}
            </p>

            {/* Specs */}
            <div className="product-detail-specs" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginTop: "32px",
            }}>
              {[
                { k: "Yield", v: product.yield },
                { k: "Protein", v: product.protein },
                { k: "Fat", v: product.fat },
              ].map((item) => (
                <div
                  key={item.k}
                  className="bg-white border rounded-2xl p-5 shadow-sm"
                >
                  <div className="text-[10px] uppercase tracking-[2px] text-gray-500">
                    {item.k}
                  </div>

                  <div className="text-xl font-semibold mt-1">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Key Benefits
              </h3>

              <ul className="grid sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <BadgeCheck
                      size={18}
                      className="text-green-700 mt-1 shrink-0"
                    />

                    <span className="text-sm text-gray-700">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                  `Hello Sundra Group, I'd like to know more about ${product.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-700 text-white hover:bg-green-800"
              >
                Enquire on WhatsApp
                <ArrowRight size={16} />
              </a>

              <a
                href={`tel:${COMPANY.phones[0].replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border hover:bg-gray-100"
              >
                <Phone size={16} />
                {COMPANY.phones[0]}
              </a>
            </div>

            {/* Extra Info */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Wheat size={14} />
                Steam cooked
              </div>

              <div className="flex items-center gap-2">
                <Droplets size={14} />
                Net wt. 50 KG
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck size={14} />
                ISO 9001:2015
              </div>

              <div className="flex items-center gap-2">
                Keep away from moisture
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .product-detail-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .product-detail-specs {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 400px) {
          .product-detail-specs {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
