

import React, { useState } from "react";
import axios from "axios";
import {
  ArrowRight, Mail, MapPin, MessageCircle,
  Phone, Clock, Send, CheckCircle, AlertCircle, Loader2,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { COMPANY } from "../lib/products";
import { content } from "../lib/translate";

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
export default function Contact({ lang = "en" }) {
  const t = (key) => content[key]?.[lang] ?? key;

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
    if (!form.name.trim())    e.name    = t("contact.validation.name");
    if (!form.phone.trim()) {
      e.phone = t("contact.validation.phone");
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      e.phone = t("contact.validation.phone.invalid");
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("contact.validation.email");
    if (!form.message.trim()) e.message = t("contact.validation.message");
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) { toast.error(t("contact.form.error")); return; }
    setLoading(true);
    try {
      const payload = Object.fromEntries(
        Object.entries(form).filter(([, v]) => v.trim())
      );
      await axios.post(`${API}/contact`, payload);
      toast.success(t("contact.form.success"), {
        duration: 5000,
        icon: <CheckCircle className="text-emerald-500" size={18} />,
      });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error(
        err?.response?.data?.detail || t("contact.form.fail"),
        { duration: 4000 }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <main className="min-h-screen bg-[#f5f0e8] px-6">
        {/* ── HERO ───────────────────────────────────────── */}
        <section className="relative bg-white border-b border-gray-100">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 py-14 lg:py-18">
            <Tag>{t("contact.hero.tag")}</Tag>

            <div
              className="mt-5 flex flex-col lg:flex-row lg:items-end
                            lg:justify-between gap-4"
            >
              <h1
                className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900
                             leading-[1.15]"
              >
                {t("contact.hero.title")}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm lg:text-right">
                {t("contact.hero.desc")}
              </p>
            </div>

            {/* quick-contact strip */}
            {/* <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              {COMPANY.phones?.map((p, i) => (
                <a
                  key={i}
                  href={`tel:${p.replace(/\D/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
                >
                  <Phone size={13} /> {p}
                </a>
              ))}
              <div className="flex flex-col">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
                >
                  <Mail size={13} /> {COMPANY.email}
                </a>
              </div>

              <span className="flex items-center gap-1.5 text-gray-400">
                <Clock size={13} /> {t("contact.hero.hours")}
              </span>
            </div> */}
          </div>
        </section>

        {/* ── BODY ───────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto py-10 pb-20">


          <div className="grid lg:grid-cols-[340px_1fr] gap-16">


            {/* ── LEFT SIDEBAR ─────────────────────────── */}
            <aside className="space-y-4">
              {/* Complain details card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-lg">
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest
                              text-gray-800 mb-3"
                >
                  {t("contact.details.title")}
                </p>

                <Row
                  icon={Phone}
                  href={`tel: +91914701306`}
                >
                  {" +91 914701306"}
                </Row>

                

               
              </div>

               {/* Sales details card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-lg">
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest
                              text-gray-800 mb-3"
                >
                  {t("contact.sales.title")}
                </p>

                <Row
                  icon={Phone}
                  href={`tel:+917571001620`}
                >
                  {"+91 7571001640"}
                </Row>

                

               
              </div>


              
               {/* Customer details card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-lg">
                <p
                  className="text-[11px] font-semibold uppercase tracking-widest
                              text-gray-800 mb-3"
                >
                  {t("contact.customer.title")}
                </p>

                <Row
                  icon={Phone}
                  href={`tel:+917571001620`}
                >
                  {"+91 7571001620"}
                </Row>

                

               
              </div>


              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-lg">
               



                <Row
                  icon={Mail}
                  label={t("contact.details.email")}
                  href={`mailto:${COMPANY.email}`}
                >
                  {COMPANY.email_1}
                  
                  
                </Row>

                <Row icon={MapPin} label={t("contact.details.reg")}>
                  {COMPANY.regOffice}
                </Row>

               
              </div>

{/* 
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7142.167424098154!2d80.32406929196739!3d26.485249392845475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39c2d0211f15%3A0xd3cdae546f5aa789!2sRatan%20Shanti!5e0!3m2!1sen!2sin!4v1781592592323!5m2!1sen!2sin"
                  className="w-full h-[200px] block transition-all duration-500"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                />

                <div className="px-4 py-3 border-t border-gray-100">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      COMPANY.regOffice,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <MapPin size={12} />
                    {t("contact.map.open")}
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div> */}

              
            </aside>

            {/* ── FORM ─────────────────────────────────── */}
            <div
              className="bg-white rounded-2xl border border-gray-100
                            shadow-lg p-7 lg:p-12 h-fit "
            >
              <div className="mb-6 pb-5 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {t("contact.form.title")}
                </h2>
                <p className="text-sm text-gray-400">
                  {t("contact.form.desc")}
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={t("contact.field.name")}
                    name="name"
                    value={form.name}
                    onChange={handle}
                    required
                    placeholder={t("contact.placeholder.name")}
                    error={errors.name}
                  />
                  <Field
                    label={t("contact.field.phone")}
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handle}
                    required
                    placeholder={t("contact.placeholder.phone")}
                    error={errors.phone}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={t("contact.field.email")}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                    placeholder={t("contact.placeholder.email")}
                    error={errors.email}
                  />
                  <Field
                    label={t("contact.field.subject")}
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    placeholder={t("contact.placeholder.subject")}
                  />
                </div>

                <Field
                  label={t("contact.field.message")}
                  name="message"
                  value={form.message}
                  onChange={handle}
                  required
                  textarea
                  placeholder={t("contact.placeholder.message")}
                  error={errors.message}
                />

                {/* CTA row */}
                <div
                  className="flex flex-col sm:flex-row items-start
                                sm:items-center justify-between gap-4 pt-1"
                >
                  <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                    {t("contact.form.privacy")}
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
                      <>
                        <Loader2 size={15} className="animate-spin" />{" "}
                        {t("contact.form.submitting")}
                      </>
                    ) : (
                      <>
                        <Send size={15} /> {t("contact.form.submit")}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          


          </div>
        </section>

          <div className=" lg:max-w-6xl md:h-[300px] mx-auto mb-10 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7142.167424098154!2d80.32406929196739!3d26.485249392845475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39c2d0211f15%3A0xd3cdae546f5aa789!2sRatan%20Shanti!5e0!3m2!1sen!2sin!4v1781592592323!5m2!1sen!2sin"
                  className="w-full h-[300px] block transition-all duration-500"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                />

                <div className="px-4 py-3 border-t border-gray-100">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      COMPANY.regOffice,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <MapPin size={12} />
                    {t("contact.map.open")}
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
      </main>
    </>
  );
}