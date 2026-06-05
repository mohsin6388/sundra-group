// Contact.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { 
//   ArrowRight, 
//   Mail, 
//   MapPin, 
//   MessageCircle, 
//   Phone, 
//   Clock, 
//   Globe,
//   Send,
//   CheckCircle,
//   AlertCircle
// } from "lucide-react";
// import { toast, Toaster } from "sonner";
// import { COMPANY } from "../lib/products";

// const API = `${import.meta.env.VITE_BACKEND_URL || ""}/api`;

// const InfoCard = ({ icon: Icon, title, children, delay = 0 }) => (
//   <div 
//     className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl 
//                transition-all duration-300 hover:-translate-y-1 border border-gray-100"
//     style={{ animationDelay: `${delay}s` }}
//   >
//     <div className="flex items-center gap-3 mb-4">
//       <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 
//                       flex items-center justify-center text-green-600
//                       group-hover:scale-110 transition-transform duration-300">
//         <Icon size={20} />
//       </div>
//       <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
//     </div>
//     <div className="space-y-2">
//       {children}
//     </div>
//   </div>
// );

// const FormField = ({ label, required, icon: Icon, error, ...props }) => (
//   <div className="space-y-2">
//     <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <div className="relative">
//       {Icon && (
//         <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//           <Icon size={18} />
//         </div>
//       )}
//       <input
//         {...props}
//         className={`w-full px-4 py-3 rounded-xl border transition-all duration-200
//                    ${Icon ? 'pl-10' : 'pl-4'}
//                    ${error 
//                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
//                      : 'border-gray-200 focus:border-green-500 focus:ring-green-200'}
//                    bg-white outline-none focus:ring-2 hover:border-gray-300`}
//       />
//     </div>
//     {error && (
//       <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
//         <AlertCircle size={12} />
//         {error}
//       </p>
//     )}
//   </div>
// );

// const Kicker = ({ children }) => (
//   <div className="inline-flex items-center gap-2 px-4 py-2 
//                   bg-gradient-to-r from-green-100 to-emerald-100 
//                   text-green-700 rounded-full text-sm font-semibold 
//                   uppercase tracking-wider mb-6">
//     <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
//     {children}
//   </div>
// );

// const MapEmbed = () => (
//   <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.294!2d80.270!3d26.470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI4JzEyLjAiTiA4MMKwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
//       width="100%"
//       height="250"
//       style={{ border: 0 }}
//       allowFullScreen=""
//       loading="lazy"
//       title="Company Location"
//       className="grayscale hover:grayscale-0 transition-all duration-500"
//     />
//   </div>
// );

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: ""
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error for this field
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name?.trim()) {
//       newErrors.name = "Name is required";
//     }
    
//     if (!formData.phone?.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Please enter a valid 10-digit phone number";
//     }
    
//     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
    
//     if (!formData.message?.trim()) {
//       newErrors.message = "Message is required";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       toast.error("Please fill in all required fields correctly");
//       return;
//     }
    
//     setLoading(true);
    
//     try {
//       // Remove empty fields
//       const payload = Object.fromEntries(
//         Object.entries(formData).filter(([_, value]) => value?.trim() !== "")
//       );
      
//       await axios.post(`${API}/contact`, payload);
      
//       toast.success(
//         "✓ Message sent successfully! Our team will respond within 24 hours.",
//         {
//           duration: 5000,
//           icon: <CheckCircle className="text-green-500" />,
//         }
//       );
      
//       // Reset form
//       setFormData({
//         name: "",
//         phone: "",
//         email: "",
//         subject: "",
//         message: ""
//       });
//     } catch (err) {
//       const errorMessage = err?.response?.data?.detail || "Failed to send message. Please try again.";
//       toast.error(errorMessage, { duration: 4000 });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-center" richColors />
      
//       <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
//         {/* Hero Section */}
//         <section className="relative overflow-hidden">
//           {/* Decorative elements */}
//           <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-20" />
          
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//             <Kicker>Get in Touch</Kicker>
            
//             <div className="grid lg:grid-cols-12 gap-12 items-center">
//               <div className="lg:col-span-7">
//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight
//                                bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   We'd love to hear from you.
//                 </h1>
//               </div>
              
//               <div className="lg:col-span-5">
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Whether you're a farmer, retailer or potential distributor — our team is here
//                   to answer your questions and help you get the right Barsana feed.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Info & Form Section */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
//           <div className="grid lg:grid-cols-12 gap-8">
//             {/* Left Column - Contact Info */}
//             <div className="lg:col-span-5 space-y-5">
//               <InfoCard icon={Phone} title="Call Us" delay={0.1}>
//                 <div className="space-y-2">
//                   {COMPANY.phones.map((phone, idx) => (
//                     <a
//                       key={idx}
//                       href={`tel:${phone.replace(/\D/g, "")}`}
//                       className="block text-xl font-semibold text-gray-800 
//                                  hover:text-green-600 transition-colors group"
//                     >
//                       {phone}
//                       <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 
//                                       transition-all duration-200 transform translate-x-0 
//                                       group-hover:translate-x-1">
//                         →
//                       </span>
//                     </a>
//                   ))}
//                 </div>
//                 <div className="mt-3 pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-2 text-sm text-gray-500">
//                     <Clock size={14} />
//                     <span>Mon-Sat: 9 AM - 7 PM</span>
//                   </div>
//                 </div>
//               </InfoCard>

//               <InfoCard icon={MessageCircle} title="WhatsApp Business" delay={0.2}>
//                 <a
//                   href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
//                     "Hello Sundra Group, I'd like to enquire about Barsana Pashu Aahar."
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-green-600 font-semibold 
//                              hover:gap-3 transition-all duration-300 group"
//                 >
//                   <span>Chat on WhatsApp</span>
//                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <p className="text-xs text-gray-500 mt-2">Response within 2-4 hours</p>
//               </InfoCard>

//               <InfoCard icon={Mail} title="Email Us" delay={0.3}>
//                 <a
//                   href={`mailto:${COMPANY.email}`}
//                   className="text-gray-800 hover:text-green-600 transition-colors 
//                              break-all font-medium"
//                 >
//                   {COMPANY.email}
//                 </a>
//                 <p className="text-xs text-gray-500 mt-2">We respond within 24 hours</p>
//               </InfoCard>

//               <InfoCard icon={MapPin} title="Our Locations" delay={0.4}>
//                 <div className="space-y-3">
//                   <div>
//                     <p className="text-sm font-semibold text-gray-700 mb-1">Registered Office</p>
//                     <p className="text-sm text-gray-600 leading-relaxed">{COMPANY.regOffice}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-gray-700 mb-1">Manufacturing Unit</p>
//                     <p className="text-sm text-gray-600 leading-relaxed">{COMPANY.unit}</p>
//                   </div>
//                 </div>
//                 <MapEmbed />
//               </InfoCard>

//               <InfoCard icon={Globe} title="Business Hours" delay={0.5}>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Monday - Friday</span>
//                     <span className="font-medium text-gray-800">9:00 AM - 7:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Saturday</span>
//                     <span className="font-medium text-gray-800">10:00 AM - 5:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Sunday</span>
//                     <span className="font-medium text-gray-400">Closed</span>
//                   </div>
//                 </div>
//               </InfoCard>
//             </div>

//             {/* Right Column - Contact Form */}
//             <div className="lg:col-span-7">
//               <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl 
//                                                        border border-gray-100 p-6 lg:p-8 
//                                                        space-y-6">
//                 <div className="text-center mb-6">
//                   <h2 className="text-2xl font-bold text-gray-800">Send us a message</h2>
//                   <p className="text-gray-500 text-sm mt-2">
//                     Fill out the form below and we'll get back to you soon
//                   </p>
//                 </div>

//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <FormField
//                     label="Full Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     icon={null}
//                     error={errors.name}
//                     placeholder="John Doe"
//                   />
                  
//                   <FormField
//                     label="Phone Number"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     icon={null}
//                     error={errors.phone}
//                     placeholder="9876543210"
//                   />
                  
//                   <FormField
//                     label="Email Address"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     icon={null}
//                     error={errors.email}
//                     placeholder="john@example.com"
//                   />
                  
//                   <FormField
//                     label="Subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     icon={null}
//                     placeholder="How can we help?"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
//                     Message <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     required
//                     placeholder="Please describe your inquiry or requirements in detail..."
//                     className={`w-full px-4 py-3 rounded-xl border transition-all duration-200
//                                ${errors.message 
//                                  ? 'border-red-300 focus:border-red-500' 
//                                  : 'border-gray-200 focus:border-green-500'}
//                                bg-white outline-none focus:ring-2 focus:ring-green-200
//                                resize-none hover:border-gray-300`}
//                   />
//                   {errors.message && (
//                     <p className="text-xs text-red-500 flex items-center gap-1">
//                       <AlertCircle size={12} />
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-gradient-to-r from-green-600 to-emerald-600 
//                              hover:from-green-700 hover:to-emerald-700
//                              text-white py-4 rounded-xl font-semibold
//                              flex items-center justify-center gap-2
//                              transform transition-all duration-200
//                              disabled:opacity-70 disabled:cursor-not-allowed
//                              shadow-md hover:shadow-lg group"
//                 >
//                   {loading ? (
//                     <>
//                       <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" 
//                                 stroke="currentColor" strokeWidth="4" fill="none"/>
//                         <path className="opacity-75" fill="currentColor" 
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <Send size={18} className="group-hover:translate-x-1 transition-transform" />
//                     </>
//                   )}
//                 </button>

//                 <p className="text-center text-xs text-gray-400">
//                   By submitting this form, you agree to our privacy policy. 
//                   We'll never share your information.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { COMPANY } from "../lib/products";

const API = `${import.meta.env.VITE_BACKEND_URL || ""}/api`;

/* ─── tiny helpers ─────────────────────────────────────── */

const Tag = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold
                   tracking-widest uppercase text-emerald-700 bg-emerald-50
                   border border-emerald-200 px-3 py-1 rounded-full">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
    {children}
  </span>
);

const Dot = () => (
  <span className="inline-block w-1 h-1 rounded-full bg-gray-300 mx-2 align-middle" />
);

/* ─── info row inside a contact card ───────────────────── */
const Row = ({ icon: Icon, label, href, children }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
    <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-50
                     flex items-center justify-center text-emerald-600">
      <Icon size={14} />
    </span>
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
        {label}
      </p>
      {href ? (
        <a href={href}
           target={href.startsWith("http") ? "_blank" : undefined}
           rel="noopener noreferrer"
           className="text-sm font-medium text-gray-800 hover:text-emerald-600
                      transition-colors break-all">
          {children}
        </a>
      ) : (
        <p className="text-sm text-gray-700 leading-relaxed">{children}</p>
      )}
    </div>
  </div>
);

/* ─── form field ────────────────────────────────────────── */
const Field = ({ label, required, error, textarea, ...props }) => (
  <div className="group">
    <label className="block text-[11px] font-semibold uppercase tracking-wider
                      text-gray-400 mb-1.5">
      {label}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>

    {textarea ? (
      <textarea
        {...props}
        rows={5}
        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-gray-50/50
                   outline-none resize-none transition-all duration-200
                   placeholder:text-gray-300
                   focus:bg-white focus:ring-2 focus:ring-emerald-500/20
                   ${error
                     ? "border-red-300 focus:border-red-400"
                     : "border-gray-200 focus:border-emerald-400 hover:border-gray-300"
                   }`}
      />
    ) : (
      <input
        {...props}
        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-gray-50/50
                   outline-none transition-all duration-200
                   placeholder:text-gray-300
                   focus:bg-white focus:ring-2 focus:ring-emerald-500/20
                   ${error
                     ? "border-red-300 focus:border-red-400"
                     : "border-gray-200 focus:border-emerald-400 hover:border-gray-300"
                   }`}
      />
    )}

    {error && (
      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
        <AlertCircle size={11} />
        {error}
      </p>
    )}
  </div>
);

/* ─── hours table row ───────────────────────────────────── */
const HourRow = ({ day, time, closed }) => (
  <div className="flex justify-between items-center py-1.5
                  border-b border-gray-100 last:border-0 text-sm">
    <span className="text-gray-500">{day}</span>
    <span className={closed ? "text-gray-300" : "font-medium text-gray-700"}>
      {time}
    </span>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) {
      e.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      e.phone = "Enter a valid 10-digit number";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) { toast.error("Please fix the errors above"); return; }
    setLoading(true);
    try {
      const payload = Object.fromEntries(
        Object.entries(form).filter(([, v]) => v.trim())
      );
      await axios.post(`${API}/contact`, payload);
      toast.success("Message sent! We'll reply within 24 hours.", {
        duration: 5000,
        icon: <CheckCircle className="text-emerald-500" size={18} />,
      });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(
        err?.response?.data?.detail || "Failed to send. Please try again.",
        { duration: 4000 }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />

      <main className="min-h-screen bg-[#f7f8f6]">

        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative bg-white border-b border-gray-100">
          {/* subtle grid bg */}
          <div className="absolute inset-0 opacity-[0.03]"
               style={{
                 backgroundImage:
                   "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
                 backgroundSize: "40px 40px",
               }} />

          <div className="relative max-w-6xl mx-auto px-6 py-14 lg:py-18">
            <Tag>Get in touch</Tag>

            <div className="mt-5 flex flex-col lg:flex-row lg:items-end
                            lg:justify-between gap-4">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900
                             leading-[1.15]">
                We'd love to<br className="hidden lg:block" /> hear from you.
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm lg:text-right">
                Farmer, retailer, or distributor — our team is here to help you
                get the right Barsana feed.
              </p>
            </div>

            {/* quick-contact strip */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              {COMPANY.phones?.map((p, i) => (
                <a key={i} href={`tel:${p.replace(/\D/g,"")}`}
                   className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                  <Phone size={13} /> {p}
                </a>
              ))}
              <a href={`mailto:${COMPANY.email}`}
                 className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                <Mail size={13} /> {COMPANY.email}
              </a>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Clock size={13} /> Mon–Sat: 9 AM – 7 PM
              </span>
            </div>
          </div>
        </section>

        {/* ── BODY ───────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
          <div className="grid lg:grid-cols-[340px_1fr] gap-6">

            {/* ── LEFT SIDEBAR ─────────────────────────── */}
            <aside className="space-y-4">

              {/* Contact details card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-widest
                              text-gray-400 mb-3">
                  Contact details
                </p>

                <Row icon={Phone} label="Phone"
                     href={`tel:${COMPANY.phones?.[0]?.replace(/\D/g,"")}`}>
                  {COMPANY.phones?.[0]}
                  {COMPANY.phones?.[1] && (
                    <><br />{COMPANY.phones[1]}</>
                  )}
                </Row>

                <Row icon={MessageCircle} label="WhatsApp"
                     href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                       "Hello Sundra Group, I'd like to enquire about Barsana Pashu Aahar."
                     )}`}>
                  Chat on WhatsApp →
                </Row>

                <Row icon={Mail} label="Email"
                     href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </Row>

                <Row icon={MapPin} label="Registered office">
                  {COMPANY.regOffice}
                </Row>

                <Row icon={MapPin} label="Manufacturing unit">
                  {COMPANY.unit}
                </Row>
              </div>

              {/* Business hours card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-emerald-600" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                    Business hours
                  </p>
                </div>
                <HourRow day="Monday – Friday" time="9:00 AM – 7:00 PM" />
                <HourRow day="Saturday"         time="10:00 AM – 5:00 PM" />
                <HourRow day="Sunday"            time="Closed" closed />
              </div>

              {/* Map card */}
              <div className="bg-white rounded-2xl border border-gray-100
                              overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.294!2d80.270!3d26.470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI4JzEyLjAiTiA4MMKwMTYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title="Company Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="px-4 py-3 border-t border-gray-100">
                  <a
                    href={`https://maps.google.com/?q=${COMPANY.regOffice}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium
                               text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <MapPin size={12} /> Open in Google Maps
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </aside>

            {/* ── FORM ─────────────────────────────────── */}
            <div className="bg-white rounded-2xl border border-gray-100
                            shadow-sm p-7 lg:p-8 h-fit">

              <div className="mb-6 pb-5 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-gray-400">
                  Fill in the form below and we'll get back to you shortly.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Full name" name="name"
                    value={form.name} onChange={handle}
                    required placeholder="Ramesh Kumar"
                    error={errors.name}
                  />
                  <Field
                    label="Phone number" name="phone" type="tel"
                    value={form.phone} onChange={handle}
                    required placeholder="9876543210"
                    error={errors.phone}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Email address" name="email" type="email"
                    value={form.email} onChange={handle}
                    placeholder="you@example.com"
                    error={errors.email}
                  />
                  <Field
                    label="Subject" name="subject"
                    value={form.subject} onChange={handle}
                    placeholder="How can we help?"
                  />
                </div>

                <Field
                  label="Your message" name="message"
                  value={form.message} onChange={handle}
                  required textarea
                  placeholder="Describe your requirements or inquiry in detail…"
                  error={errors.message}
                />

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row items-start
                                sm:items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                    By submitting, you agree to our privacy policy. We never share
                    your information.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3
                               bg-emerald-600 hover:bg-emerald-700
                               active:scale-[0.98]
                               text-white text-sm font-semibold rounded-xl
                               shadow-md shadow-emerald-600/20
                               transition-all duration-200
                               disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><Loader2 size={15} className="animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={15} /> Send message</>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}