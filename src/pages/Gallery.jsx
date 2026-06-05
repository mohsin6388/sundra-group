// Gallery.jsx
// import React, { useState, useEffect, useCallback } from "react";
// import { X, ChevronLeft, ChevronRight, Download, ZoomIn } from "lucide-react";
// import { GALLERY_IMAGES } from "../lib/products";

// const GalleryImage = ({ src, index, onClick, layout }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <button
//       onClick={() => onClick(index)}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`group relative overflow-hidden rounded-2xl bg-gray-100
//                  transform transition-all duration-500 hover:shadow-xl
//                  ${layout === 'featured' ? 'md:row-span-2 md:col-span-2' : ''}
//                  ${layout === 'tall' ? 'md:row-span-2' : ''}
//                  ${layout === 'wide' ? 'md:col-span-2' : ''}`}
//     >
//       {/* Loading skeleton */}
//       {!isLoaded && (
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
//       )}
      
//       {/* Image */}
//       <img
//         src={src}
//         alt={`Gallery image ${index + 1}`}
//         loading="lazy"
//         onLoad={() => setIsLoaded(true)}
//         className={`w-full h-full object-cover transition-all duration-700
//                    ${isHovered ? 'scale-110 rotate-1' : 'scale-100'}
//                    ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//       />
      
//       {/* Overlay on hover */}
//       <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
//                       transition-opacity duration-300 flex items-end justify-start p-4
//                       ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//         <div className="text-white">
//           <ZoomIn size={20} className="mb-1" />
//           <p className="text-sm font-medium">Click to view</p>
//         </div>
//       </div>
//     </button>
//   );
// };

// const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
//   const [scale, setScale] = useState(1);
//   const [isZoomed, setIsZoomed] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') onClose();
//       if (e.key === 'ArrowRight') onNext();
//       if (e.key === 'ArrowLeft') onPrev();
//     };
    
//     document.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';
    
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'unset';
//     };
//   }, [onClose, onNext, onPrev]);

//   const handleZoom = () => {
//     if (isZoomed) {
//       setScale(1);
//       setIsZoomed(false);
//     } else {
//       setScale(2);
//       setIsZoomed(true);
//     }
//   };

//   const handleDownload = async () => {
//     try {
//       const response = await fetch(images[currentIndex]);
//       const blob = await response.blob();
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = `gallery-image-${currentIndex + 1}.jpg`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Download failed:', error);
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
//       onClick={onClose}
//     >
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full 
//                    bg-white/10 hover:bg-white/20 backdrop-blur-sm
//                    text-white transition-all duration-300
//                    flex items-center justify-center group"
//         aria-label="Close lightbox"
//       >
//         <X size={24} className="group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Zoom button */}
//       <button
//         onClick={handleZoom}
//         className="absolute top-4 right-20 z-10 w-12 h-12 rounded-full 
//                    bg-white/10 hover:bg-white/20 backdrop-blur-sm
//                    text-white transition-all duration-300
//                    flex items-center justify-center group"
//         aria-label="Zoom image"
//       >
//         <ZoomIn size={20} className="group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Download button */}
//       <button
//         onClick={handleDownload}
//         className="absolute top-4 right-36 z-10 w-12 h-12 rounded-full 
//                    bg-white/10 hover:bg-white/20 backdrop-blur-sm
//                    text-white transition-all duration-300
//                    flex items-center justify-center group"
//         aria-label="Download image"
//       >
//         <Download size={20} className="group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Previous button */}
//       <button
//         onClick={(e) => { e.stopPropagation(); onPrev(); }}
//         className="absolute left-4 z-10 w-12 h-12 rounded-full 
//                    bg-white/10 hover:bg-white/20 backdrop-blur-sm
//                    text-white transition-all duration-300
//                    flex items-center justify-center group"
//         aria-label="Previous image"
//       >
//         <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Next button */}
//       <button
//         onClick={(e) => { e.stopPropagation(); onNext(); }}
//         className="absolute right-4 z-10 w-12 h-12 rounded-full 
//                    bg-white/10 hover:bg-white/20 backdrop-blur-sm
//                    text-white transition-all duration-300
//                    flex items-center justify-center group"
//         aria-label="Next image"
//       >
//         <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
//       </button>

//       {/* Image counter */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2
//                       px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm
//                       text-white text-sm font-medium">
//         {currentIndex + 1} / {images.length}
//       </div>

//       {/* Main image */}
//       <div 
//         className="relative max-w-[90vw] max-h-[90vh] overflow-auto cursor-zoom-in"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <img
//           src={images[currentIndex]}
//           alt={`Gallery ${currentIndex + 1}`}
//           className="max-w-full max-h-[90vh] object-contain rounded-xl
//                      transition-transform duration-300"
//           style={{ transform: `scale(${scale})`, cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
//           onClick={handleZoom}
//         />
//       </div>
//     </div>
//   );
// };

// const Kicker = ({ children }) => (
//   <div className="inline-flex items-center gap-2 px-4 py-2 
//                   bg-gradient-to-r from-green-100 to-emerald-100 
//                   text-green-700 rounded-full text-sm font-semibold 
//                   uppercase tracking-wider mb-6">
//     <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
//     {children}
//   </div>
// );

// export default function Gallery() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Shuffle images for dynamic layout
//     const shuffled = [...GALLERY_IMAGES].sort(() => Math.random() - 0.5);
//     setImages(shuffled);
//   }, []);

//   const openLightbox = useCallback((index) => {
//     setCurrentImageIndex(index);
//     // Prevent body scroll
//     document.body.style.overflow = 'hidden';
//   }, []);

//   const closeLightbox = useCallback(() => {
//     setCurrentImageIndex(null);
//     document.body.style.overflow = 'unset';
//   }, []);

//   const nextImage = useCallback(() => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   }, [images.length]);

//   const prevImage = useCallback(() => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
//   }, [images.length]);

//   // Determine layout for each image
//   const getLayout = (index) => {
//     const layouts = ['standard', 'standard', 'featured', 'tall', 'wide', 'standard'];
//     return layouts[index % layouts.length];
//   };

//   return (
//     <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute top-20 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30" />
//         <div className="absolute bottom-20 left-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30" />
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//           <div className="text-center lg:text-left">
//             <Kicker>Gallery</Kicker>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight
//                            bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent
//                            max-w-4xl">
//               Behind every bag — the brand, the people and the herds.
//             </h1>
            
//             <p className="mt-6 text-gray-600 text-lg max-w-2xl leading-relaxed">
//               Explore our journey through images — from sustainable farming practices 
//               to happy, healthy herds across India and Nepal.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
//             <p className="text-2xl font-bold text-green-600">{images.length}+</p>
//             <p className="text-sm text-gray-600">Moments Captured</p>
//           </div>
//           <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
//             <p className="text-2xl font-bold text-green-600">10K+</p>
//             <p className="text-sm text-gray-600">Happy Farmers</p>
//           </div>
//           <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
//             <p className="text-2xl font-bold text-green-600">50+</p>
//             <p className="text-sm text-gray-600">Partner Farms</p>
//           </div>
//           <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
//             <p className="text-2xl font-bold text-green-600">2</p>
//             <p className="text-sm text-gray-600">Countries</p>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
//                         gap-4 auto-rows-[200px] md:auto-rows-[250px]">
//           {images.map((src, index) => (
//             <GalleryImage
//               key={`${src}-${index}`}
//               src={`${src}`}
//               index={index}
//               onClick={openLightbox}
//               layout={getLayout(index)}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Lightbox */}
//       {currentImageIndex !== null && images.length > 0 && (
//         <Lightbox
//           images={images}
//           currentIndex={currentImageIndex}
//           onClose={closeLightbox}
//           onNext={nextImage}
//           onPrev={prevImage}
//         />
//       )}

//       {/* Add custom styles */}
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .gallery-item {
//           animation: fadeIn 0.6s ease-out forwards;
//           opacity: 0;
//         }
        
//         .gallery-item:nth-child(1) { animation-delay: 0.05s; }
//         .gallery-item:nth-child(2) { animation-delay: 0.10s; }
//         .gallery-item:nth-child(3) { animation-delay: 0.15s; }
//         .gallery-item:nth-child(4) { animation-delay: 0.20s; }
//         .gallery-item:nth-child(5) { animation-delay: 0.25s; }
//         .gallery-item:nth-child(6) { animation-delay: 0.30s; }
//       `}</style>
//     </main>
//   );
// }

import React from "react";
import { GALLERY_IMAGES } from "../lib/products";

export default function Gallery() {
  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Our Gallery
          </h1>

          <p className="mt-3 text-gray-600">
            Explore our products, farms and dairy operations.
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