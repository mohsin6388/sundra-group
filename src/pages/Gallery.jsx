import React from "react";
import { GALLERY_IMAGES } from "../lib/products";

export default function Gallery({lang}) {
  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
          { lang == "hi"?
            "हमारी गैलरी"
            :
           "Our Gallery"
          }
          </h1>

          <p className="mt-3 text-gray-600">
           { lang == "hi"?
           "हमारे उत्पाद, फार्म और डेयरी संचालन को करीब से देखें।"
           :
           "Explore our products, farms and dairy operations."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
              }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}