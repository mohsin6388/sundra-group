// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { content } from "../lib/translate";


// // ---------------------------------------------------------------
// // Design tokens (kept as plain JS objects since all styling here
// // is inline, per request — no external CSS / classes used)
// // ---------------------------------------------------------------
// const tokens = {
//   cream: "#FAF3E6",
//   paper: "#FFFEFB",
//   green: "#1F4D2C",
//   greenSoft: "#3C6B45",
//   amber: "#C97A2B",
//   amberSoft: "#E3A35C",
//   clay: "#8B5E3C",
//   ink: "#2B2620",
//   inkSoft: "#6B6358",
//   line: "#E2D5BD",
//   serif: "'Lora', Georgia, serif",
//   sans: "'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//   mono: "'JetBrains Mono', 'Courier New', monospace",
// };


// // ---------------------------------------------------------------
// // Main component
// // ---------------------------------------------------------------
// export default function BarsanaAbout({lang}) {
//   const isMobile = useIsMobile(760);

//   const [current, setCurrent] = useState(0);
//     const [isTransitioning, setIsTransitioning] = useState(true);
//     const intervalRef = useRef(null);
  
//      const t = (key) => content[key][lang];
//      console.log( "HEllo ===> ",lang)


//  const MILESTONES = [
//   {
//     year: "Yr 1–4",
//     title: t("about.one_step_head"),
//     desc:  t("about.one_step_desc"),
//     modern: false,
//   },
//   {
//     year: "Yr 5–8",
//     title: t("about.two_step_head"),
//     desc:  t("about.two_step_desc"),
//     modern: false,
//   },
//   {
//     year: "Yr 9–11",
//     title: t("about.third_step_head"),
//     desc:  t("about.third_step_desc"),
//     modern: true,
//   },
//   {
//     year: "Today",
//     title: t("about.four_step_head"),
//     desc:  t("about.four_step_desc"),
//     modern: true,
//   },
// ];


// // ---------------------------------------------------------------
// // Hook: tracks viewport so we can switch road <-> path timeline
// // ---------------------------------------------------------------
// function useIsMobile(breakpoint = 760) {
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
//   );

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
//     window.addEventListener("resize", onResize);
//     onResize();
//     return () => window.removeEventListener("resize", onResize);
//   }, [breakpoint]);

//   return isMobile;
// }

// // ---------------------------------------------------------------
// // Desktop: horizontal "road" timeline (dirt path -> highway)
// // ---------------------------------------------------------------
// function DesktopTimeline() {
//   return (
//     <div style={{ position: "relative", zIndex: 1, padding: "44px 0 8px" }}>
//       <svg
//         viewBox="0 0 1180 64"
//         preserveAspectRatio="none"
//         style={{ width: "100%", height: 64, display: "block" }}
//       >
//         <line
//           x1="20" y1="32" x2="320" y2="32"
//           stroke={tokens.clay} strokeWidth="2.5"
//           strokeDasharray="2 9" strokeLinecap="round"
//         />
//         <line
//           x1="320" y1="32" x2="620" y2="32"
//           stroke={tokens.amber} strokeWidth="2.5"
//           strokeDasharray="7 7" strokeLinecap="round"
//         />
//         <line
//           x1="620" y1="32" x2="1160" y2="32"
//           stroke={tokens.green} strokeWidth="3" strokeLinecap="round"
//         />
//       </svg>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: 20,
//           marginTop: -8,
//         }}
//       >
//         {MILESTONES.map((m, i) => (
//           <div
//             key={i}
//             style={{
//               position: "relative",
//               paddingTop: 28,
//               background: tokens.paper,
//               border: `1px solid ${tokens.line}`,
//               borderRadius: 14,
//               padding: "28px 18px 20px",
//             }}
//           >
//             <span
//               style={{
//                 position: "absolute",
//                 top: -7,
//                 left: 17,
//                 width: 13,
//                 height: 13,
//                 borderRadius: "50%",
//                 background: tokens.paper,
//                 border: `3px solid ${m.modern ? tokens.green : tokens.amber}`,
//                 boxShadow: `0 0 0 5px ${tokens.cream}`,
//                 boxSizing: "border-box",
//               }}
//             />
//             <div
//               style={{
//                 fontFamily: tokens.mono,
//                 fontWeight: 700,
//                 fontSize: 21,
//                 letterSpacing: "-0.01em",
//                 color: m.modern ? tokens.green : tokens.amber,
//               }}
//             >
//               {m.year}
//             </div>
//             <div
//               style={{
//                 fontFamily: tokens.serif,
//                 fontWeight: 600,
//                 fontSize: 16,
//                 color: tokens.ink,
//                 marginTop: 10,
//                 lineHeight: 1.35,
//               }}
//             >
//               {m.title}
//             </div>
//             <div
//               style={{
//                 fontFamily: tokens.sans,
//                 fontSize: 13.4,
//                 color: tokens.inkSoft,
//                 lineHeight: 1.6,
//                 marginTop: 8,
//               }}
//             >
//               {m.desc}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ---------------------------------------------------------------
// // Mobile: vertical path timeline with dashed -> solid line
// // ---------------------------------------------------------------
// function MobileTimeline() {
//   return (
//     <div style={{ position: "relative", zIndex: 1, padding: "30px 0 10px" }}>
//       <div style={{ position: "relative", paddingLeft: 30 }}>
//         {/* the connecting path itself, segmented per milestone below */}
//         {MILESTONES.map((m, i) => {
//           const isLast = i === MILESTONES.length - 1;
//           return (
//             <div
//               key={i}
//               style={{ position: "relative", paddingBottom: isLast ? 4 : 30 }}
//             >
//               {!isLast && (
//                 <span
//                   style={{
//                     position: "absolute",
//                     left: -25,
//                     top: 24,
//                     bottom: -6,
//                     width: 2,
//                     backgroundImage: m.modern
//                       ? "none"
//                       : `repeating-linear-gradient(to bottom, ${tokens.clay} 0px, ${tokens.clay} 6px, transparent 6px, transparent 12px)`,
//                     backgroundColor: m.modern ? tokens.greenSoft : "transparent",
//                   }}
//                 />
//               )}
//               <span
//                 style={{
//                   position: "absolute",
//                   left: -30,
//                   top: 2,
//                   width: 22,
//                   height: 22,
//                   borderRadius: "50%",
//                   background: tokens.paper,
//                   border: `2.5px solid ${m.modern ? tokens.green : tokens.amber}`,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <span
//                   style={{
//                     width: 6,
//                     height: 6,
//                     borderRadius: "50%",
//                     background: m.modern ? tokens.green : tokens.amber,
//                   }}
//                 />
//               </span>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "baseline",
//                   gap: 10,
//                   marginBottom: 6,
//                 }}
//               >
//                 <span
//                   style={{
//                     fontFamily: tokens.mono,
//                     fontWeight: 700,
//                     fontSize: 19,
//                     color: m.modern ? tokens.green : tokens.clay,
//                   }}
//                 >
//                   {m.year}
//                 </span>
//                 <span
//                   style={{
//                     fontFamily: tokens.serif,
//                     fontWeight: 600,
//                     fontSize: 14,
//                     color: tokens.ink,
//                   }}
//                 >
//                   {m.title}
//                 </span>
//               </div>
//               <p
//                 style={{
//                   fontFamily: tokens.sans,
//                   fontSize: 13,
//                   color: tokens.inkSoft,
//                   lineHeight: 1.55,
//                   paddingRight: 4,
//                   margin: 0,
//                 }}
//               >
//                 {m.desc}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }





//   return (
//     <div
//       style={{
//             maxWidth: 1180,
//             margin: "0 auto",
//             padding: "20px 32px",
//             fontFamily: "'Inter', sans-serif",
//     }}
//     >
//       {/* Google Fonts (Lora, Work Sans, JetBrains Mono) */}
//       {/* <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=Work+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
//       /> */}

//       {/* subtle grain texture, purely decorative */}
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           pointerEvents: "none",
//           zIndex: 0,
//           opacity: 0.5,
//           backgroundImage:
//             "radial-gradient(circle at 1px 1px, rgba(43,38,32,0.05) 1px, transparent 0)",
//           backgroundSize: "14px 14px",
//         }}
//       />

//       <div
//         style={{
//           maxWidth: 1180,
//           margin: "0 auto",
//           padding: isMobile ? "0 18px" : "0 24px",
//         }}
//       >
//         {/* ============ ABOUT US ============ */}
//         <header
//           style={{
//             position: "relative",
//             zIndex: 1,
//             padding: isMobile ? "36px 0 30px" : "64px 0 56px",
//           }}
//         >
//           <span
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 10,
//               fontSize: "0.9rem",
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 600,
//             //   letterSpacing: "0.18em",
//               color: "#c9922a",
//               textTransform: "uppercase",
//               marginBottom: isMobile ? 16 : 22,
//             }}
//           >
            
//            {t("about.label")}
//           </span>

//           <h1
//             style={{
//                   fontSize:
//                     lang === "hi"
//                       ? "clamp(2rem, 4vw, 3rem)"
//                       : "clamp(2rem, 4vw, 3rem)",
//                   color: "#1a1a2e",
//                   lineHeight: 1.2,
//                   marginTop: 14,
//                   fontWeight: 500,
//                 }}
//           >
//            <span style={{ color: "#2D6A3E" }}>
//                   {t("about.first_headline")}
//                 </span>{" "}
//                 {t("about.headline")}
//           </h1>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr",
//               gap: isMobile ? 22 : 28,
//               marginTop: isMobile ? 22 : 36,
//             //   maxWidth: 640,
//             }}
//           >
//             <div>
//               <p
//                 style={{
//                   fontSize: isMobile ? 15 : 17,
//                   lineHeight: isMobile ? 1.65 : 1.75,
//                   color: tokens.inkSoft,
//                   maxWidth: "640px",
//                   padding: "20px",
//                   margin: 0,
//                 }}
//               >
//                  {t("about.description")}
//               </p>
//             </div>

//             <div
//               style={{
//                 background: tokens.green,
//                 width: "100%",
//                 color: tokens.cream,
//                 borderRadius: isMobile ? 16 : 18,
//                 padding: isMobile ? "22px 20px" : "26px 28px",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <span
//                 style={{
//                   position: "absolute",
//                   right: -30,
//                   top: -30,
//                   width: 140,
//                   height: 140,
//                   borderRadius: "50%",
//                   background:
//                     "radial-gradient(circle, rgba(255,255,255,0.10), transparent 70%)",
//                 }}
//               />
//               <span
//                 style={{
//                   fontFamily: tokens.mono,
//                   fontSize: 11,
//                   letterSpacing: "0.16em",
//                   textTransform: "uppercase",
//                   color: tokens.amberSoft,
//                   fontWeight: 600,
//                   marginBottom: 14,
//                   display: "block",
//                 }}
//               >
//                 Our Promise
//               </span>
//               <p
//                 style={{
//                   fontSize: isMobile ? 14.5 : 15.5,
//                   lineHeight: 1.7,
//                   color: "#EFEAE0",
//                   margin: 0,
//                   position: "relative",
//                   zIndex: 1,
//                 }}
//               >
//                  {t("about.short_description")}
//               </p>
//             </div>
//           </div>
//         </header>

//         {/* ============ TIMELINE SECTION HEADER ============ */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 1,
//             padding: isMobile ? "28px 0 4px" : "36px 0 4px",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 600,
//               fontStyle: "italic",
//               fontSize: isMobile ? 23 : "clamp(26px, 3.4vw, 38px)",
//               color: tokens.ink,
//               margin: 0,
//             }}
//           >
//             {t("about.year_timeline_head")}
//           </h2>
//           <p
//             style={{
//               fontSize: isMobile ? 13 : 15.5,
//               color: tokens.inkSoft,
//               maxWidth: isMobile ? "none" : 640,
//               lineHeight: isMobile ? 1.55 : 1.7,
//               fontFamily: tokens.sans,
//               margin: isMobile ? "8px 0 0" : "12px 0 0",
//             }}
//           >
//             {t("about.year_timeline_desc")}
//           </p>
//         </div>

//         {/* ============ TIMELINE: switches by viewport ============ */}
//         {isMobile ? <MobileTimeline /> : <DesktopTimeline />}

//         {/* ============ CLOSING ============ */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 1,
//             margin: isMobile ? "40px 0 0" : "60px 0 0",
//             padding: isMobile ? "30px 0 50px" : "40px 0 70px",
//             borderTop: `1px solid ${tokens.line}`,
//             display: "flex",
//             flexDirection: isMobile ? "column" : "row",
//             alignItems: isMobile ? "flex-start" : "center",
//             justifyContent: "space-between",
//             gap: 24,
//             flexWrap: "wrap",
//           }}
//         >
//           <p
//             style={{
//               fontFamily: tokens.serif,
//               fontStyle: "italic",
//               fontWeight: 500,
//               fontSize: isMobile ? 16 : 19,
//               color: tokens.ink,
//               maxWidth: 480,
//               margin: 0,
//             }}
//           >
//             Every year on this road,{" "}
//             <strong style={{ fontStyle: "normal", color: tokens.green, fontWeight: 700 }}>
//               one promise stayed the same
//             </strong>{" "}
//             — pure nutrition, real results.
//           </p>
//           <Link
//           to="/about"
//             style={{
//               fontFamily: tokens.sans,
//               fontWeight: 600,
//               fontSize: isMobile ? 13.5 : 14,
//               background: tokens.green,
//               color: tokens.cream,
//               padding: isMobile ? "12px 22px" : "14px 26px",
//               borderRadius: 999,
//               border: "none",
//               cursor: "pointer",
//               whiteSpace: "nowrap",
//             }}
//           >
//             See the full data
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { content } from "../lib/translate";

// ---------------------------------------------------------------
// Design tokens (kept as plain JS objects since all styling here
// is inline, per request — no external CSS / classes used)
// ---------------------------------------------------------------
const tokens = {
  cream: "#FAF3E6",
  paper: "#FFFEFB",
  green: "#1F4D2C",
  greenSoft: "#3C6B45",
  amber: "#C97A2B",
  amberSoft: "#E3A35C",
  clay: "#8B5E3C",
  ink: "#2B2620",
  inkSoft: "#6B6358",
  line: "#E2D5BD",
  serif: "'Lora', Georgia, serif",
  sans: "'Work Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "'JetBrains Mono', 'Courier New', monospace",
};

// ---------------------------------------------------------------
// Hook: tracks viewport so we can switch road <-> path timeline
// ---------------------------------------------------------------
function useIsMobile(breakpoint = 760) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

// ---------------------------------------------------------------
// Desktop: horizontal "road" timeline (dirt path -> highway)
// NOTE: milestones is now passed in as a prop — this function lives
// outside BarsanaAbout, so it cannot see that component's local
// MILESTONES variable. This was the cause of the original crash.
// ---------------------------------------------------------------
function DesktopTimeline({ milestones }) {
  return (
    <div style={{ position: "relative", zIndex: 1, padding: "44px 0 8px" }}>
      <svg
        viewBox="0 0 1180 64"
        preserveAspectRatio="none"
        style={{ width: "100%", height: 64, display: "block" }}
      >
        <line
          x1="20" y1="32" x2="320" y2="32"
          stroke={tokens.clay} strokeWidth="2.5"
          strokeDasharray="2 9" strokeLinecap="round"
        />
        <line
          x1="320" y1="32" x2="620" y2="32"
          stroke={tokens.amber} strokeWidth="2.5"
          strokeDasharray="7 7" strokeLinecap="round"
        />
        <line
          x1="620" y1="32" x2="1160" y2="32"
          stroke={tokens.green} strokeWidth="3" strokeLinecap="round"
        />
      </svg>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginTop: -8,
        }}
      >
        {milestones.map((m, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              paddingTop: 28,
              background: tokens.paper,
              border: `1px solid ${tokens.line}`,
              borderRadius: 14,
              padding: "28px 18px 20px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -7,
                left: 17,
                width: 13,
                height: 13,
                borderRadius: "50%",
                background: tokens.paper,
                border: `3px solid ${m.modern ? tokens.green : tokens.amber}`,
                boxShadow: `0 0 0 5px ${tokens.cream}`,
                boxSizing: "border-box",
              }}
            />
            <div
              style={{
                fontFamily: tokens.mono,
                fontWeight: 700,
                fontSize: 21,
                letterSpacing: "-0.01em",
                color: m.modern ? tokens.green : tokens.amber,
              }}
            >
              {m.year}
            </div>
            <div
              style={{
                fontFamily: tokens.serif,
                fontWeight: 600,
                fontSize: 16,
                color: tokens.ink,
                marginTop: 10,
                lineHeight: 1.35,
              }}
            >
              {m.title}
            </div>
            <div
              style={{
                fontFamily: tokens.sans,
                fontSize: 13.4,
                color: tokens.inkSoft,
                lineHeight: 1.6,
                marginTop: 8,
              }}
            >
              {m.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Mobile: vertical path timeline with dashed -> solid line
// NOTE: milestones is now passed in as a prop, same fix as above.
// ---------------------------------------------------------------
function MobileTimeline({ milestones }) {
  return (
    <div style={{ position: "relative", zIndex: 1, padding: "30px 0 10px" }}>
      <div style={{ position: "relative", paddingLeft: 30 }}>
        {/* the connecting path itself, segmented per milestone below */}
        {milestones.map((m, i) => {
          const isLast = i === milestones.length - 1;
          return (
            <div
              key={i}
              style={{ position: "relative", paddingBottom: isLast ? 4 : 30 }}
            >
              {!isLast && (
                <span
                  style={{
                    position: "absolute",
                    left: -25,
                    top: 24,
                    bottom: -6,
                    width: 2,
                    backgroundImage: m.modern
                      ? "none"
                      : `repeating-linear-gradient(to bottom, ${tokens.clay} 0px, ${tokens.clay} 6px, transparent 6px, transparent 12px)`,
                    backgroundColor: m.modern ? tokens.greenSoft : "transparent",
                  }}
                />
              )}
              <span
                style={{
                  position: "absolute",
                  left: -30,
                  top: 2,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: tokens.paper,
                  border: `2.5px solid ${m.modern ? tokens.green : tokens.amber}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: m.modern ? tokens.green : tokens.amber,
                  }}
                />
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: tokens.mono,
                    fontWeight: 700,
                    fontSize: 19,
                    color: m.modern ? tokens.green : tokens.clay,
                  }}
                >
                  {m.year}
                </span>
                <span
                  style={{
                    fontFamily: tokens.serif,
                    fontWeight: 600,
                    fontSize: 14,
                    color: tokens.ink,
                  }}
                >
                  {m.title}
                </span>
              </div>
              <p
                style={{
                  fontFamily: tokens.sans,
                  fontSize: 13,
                  color: tokens.inkSoft,
                  lineHeight: 1.55,
                  paddingRight: 4,
                  margin: 0,
                }}
              >
                {m.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------
// Main component
// ---------------------------------------------------------------
export default function BarsanaAbout({ lang }) {
  const isMobile = useIsMobile(760);

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  // Safe lookup: falls back to the key itself instead of crashing
  // if a translation key is missing from content (lib/translate.js).
  const t = (key) => content?.[key]?.[lang] ?? key;

  // Keys below match lib/translate.js EXACTLY:
  // about.one_step_head / about.one_step_desc
  // about.second_step_head / about.second_step_desc   (NOT "two_step")
  // about.third_step_head / about.sthird_step_desc     (NOTE the "sthird" typo on the desc key — kept as-is to match translate.js)
  // about.four_step_head / about.four_step_desc
  const MILESTONES = [
    {
      year: "Yr 1–4",
      title: t("about.one_step_head"),
      desc: t("about.one_step_desc"),
      modern: false,
    },
    {
      year: "Yr 5–8",
      title: t("about.second_step_head"),
      desc: t("about.second_step_desc"),
      modern: false,
    },
    {
      year: "Yr 9–11",
      title: t("about.third_step_head"),
      desc: t("about.third_step_desc"),
      modern: true,
    },
    {
      year: "Today",
      title: t("about.four_step_head"),
      desc: t("about.four_step_desc"),
      modern: true,
    },
  ];

  return (
    <div
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "20px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* subtle grain texture, purely decorative */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.5,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(43,38,32,0.05) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: isMobile ? "0 18px" : "0 24px",
        }}
      >
        {/* ============ ABOUT US ============ */}
        <header
          style={{
            position: "relative",
            zIndex: 1,
            padding: isMobile ? "36px 0 30px" : "64px 0 56px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: "0.9rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: "#c9922a",
              textTransform: "uppercase",
              marginBottom: isMobile ? 16 : 22,
            }}
          >
            {t("about.label")}
          </span>

          <h1
            style={{
              fontSize:
                lang === "hi"
                  ? "clamp(2rem, 4vw, 3rem)"
                  : "clamp(2rem, 4vw, 3rem)",
              color: "#1a1a2e",
              lineHeight: 1.2,
              marginTop: 14,
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#2D6A3E" }}>
              {t("about.first_headline")}
            </span>{" "}
            {t("about.headline")}
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: isMobile ? 22 : 28,
              marginTop: isMobile ? 22 : 36,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: isMobile ? 15 : 17,
                  lineHeight: isMobile ? 1.65 : 1.75,
                  color: tokens.inkSoft,
                  maxWidth: "640px",
                  padding: "20px",
                  margin: 0,
                }}
              >
                {t("about.description")}
              </p>
            </div>

            <div
              style={{
                background: tokens.green,
                width: "100%",
                color: tokens.cream,
                borderRadius: isMobile ? 16 : 18,
                padding: isMobile ? "22px 20px" : "26px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: -30,
                  top: -30,
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.10), transparent 70%)",
                }}
              />
              <span
                style={{
                  fontFamily: tokens.mono,
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: tokens.amberSoft,
                  fontWeight: 600,
                  marginBottom: 14,
                  display: "block",
                }}
              >
                Our Promise
              </span>
              <p
                style={{
                  fontSize: isMobile ? 14.5 : 15.5,
                  lineHeight: 1.7,
                  color: "#EFEAE0",
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t("about.short_description")}
              </p>
            </div>
          </div>
        </header>

        {/* ============ TIMELINE SECTION HEADER ============ */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: isMobile ? "28px 0 4px" : "36px 0 4px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontStyle: "italic",
              fontSize: isMobile ? 23 : "clamp(26px, 3.4vw, 38px)",
              color: tokens.ink,
              margin: 0,
            }}
          >
            {t("about.year_timeline_head")}
          </h2>
          <p
            style={{
              fontSize: isMobile ? 13 : 15.5,
              color: tokens.inkSoft,
              maxWidth: isMobile ? "none" : 640,
              lineHeight: isMobile ? 1.55 : 1.7,
              fontFamily: tokens.sans,
              margin: isMobile ? "8px 0 0" : "12px 0 0",
            }}
          >
            {t("about.year_timeline_desc")}
          </p>
        </div>

        {/* ============ TIMELINE: switches by viewport ============ */}
        {isMobile ? (
          <MobileTimeline milestones={MILESTONES} />
        ) : (
          <DesktopTimeline milestones={MILESTONES} />
        )}

        {/* ============ CLOSING ============ */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            margin: isMobile ? "40px 0 0" : "60px 0 0",
            padding: isMobile ? "30px 0 50px" : "40px 0 70px",
            borderTop: `1px solid ${tokens.line}`,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: tokens.serif,
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: isMobile ? 16 : 19,
              color: tokens.ink,
              maxWidth: 480,
              margin: 0,
            }}
          >
            Every year on this road,{" "}
            <strong style={{ fontStyle: "normal", color: tokens.green, fontWeight: 700 }}>
              one promise stayed the same
            </strong>{" "}
            — pure nutrition, real results.
          </p>
          <Link
            to="/about"
            style={{
              fontFamily: tokens.sans,
              fontWeight: 600,
              fontSize: isMobile ? 13.5 : 14,
              background: tokens.green,
              color: tokens.cream,
              padding: isMobile ? "12px 22px" : "14px 26px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            See the full data
          </Link>
        </div>
      </div>
    </div>
  );
}