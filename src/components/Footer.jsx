import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import Logo from "./Logo";

function Footer() {
  const COMPANY = {
    name: "Sundra Nutri Feed Limited",
    founder: "Deific Digital",
    founderUrl: "https://deificdigital.com/",
    established: "2010",
    regOffice:
      "307, 10/433 Ratan Shanti Apartment, Khalasi Line, Kanpur, 208001",
    email: "sundragroup@gmail.com",
    phones_1: ["+91-7571001640"],
  };

  return (
    <>
      <style>{`
        .footer{
          background:#16261b;
          color:#f8f1e1;
          
        }

        .footer-container{
          max-width:1200px;
          margin:auto;
          padding:60px 20px 40px;
          display:grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap:40px;
        }

        .footer-logo{
          background:#fff;
          padding:10px;
          border-radius:12px;
          display:inline-block;
        }

        .footer p{
          color:rgba(248,241,225,0.65);
          line-height:1.7;
          font-size:14px;
        }

        .footer h3{
          margin:0 0 20px;
          font-size:15px;
          font-weight:600;
          color:#f8f1e1;
          letter-spacing:0.02em;
        }

        .footer ul{
          list-style:none;
          padding:0;
          margin:0;
        }

        .footer li{
          margin-bottom:12px;
        }

        .footer a{
          color:rgba(248,241,225,0.75);
          text-decoration:none;
          transition:.2s;
          font-size:14px;
        }

        .footer a:hover{
          color:#c9871f;
        }

        .contact-item{
          display:flex;
          gap:10px;
          margin-bottom:16px;
          align-items:flex-start;
          color:rgba(248,241,225,0.75);
          font-size:14px;
        }

        .contact-item svg{
          color:#c9871f;
        }

        .social-icons{
          margin-top:24px;
        }

        .social-icons-label{
          font-size:13px;
          font-weight:600;
          color:#f8f1e1;
          margin-bottom:10px;
        }

        .social-icons-row{
          display:flex;
          gap:10px;
        }

        .social-icons-row a{
          width:36px;
          height:36px;
          border:1px solid rgba(248,241,225,0.25);
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          color:#f8f1e1;
        }

        .social-icons-row a:hover{
          background:#c9871f;
          border-color:#c9871f;
          color:#16261b;
        }

        .footer-bottom{
          border-top:1px solid rgba(248,241,225,0.12);
          text-align:center;
          padding:20px;
          color:rgba(248,241,225,0.5);
          font-size:13px;
        }

        @media(max-width:992px){
          .footer-container{
            grid-template-columns:1fr 1fr;
          }
        }

        @media(max-width:600px){
          .footer-container{
            grid-template-columns:1fr;
            padding:40px 20px;
            gap:32px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-logo">
              <Logo />
            </div>

            <p style={{ marginTop: "20px", marginRight: "120px"}}>
              Premium animal feed trusted by dairy farmers across India.
            </p>
          </div>

          <div>
            <h3>Other Pages</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/benefits">Why Barsana</Link>
              </li>
              <li>
                <Link to="/dealers">Dealers</Link>
              </li>
              <li>
                <Link to="/investor">Investor</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/terms-condition">Terms &amp; conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy policy</Link>
              </li>
              {/* <li>
                <Link to="/payment-policy">Payment policy</Link>
              </li>
              <li>
                <Link to="/refund-policy">Return &amp; refund policy</Link>
              </li> */}
            </ul>

            <div className="social-icons">
              <div className="social-icons-label">Follow us</div>
              <div className="social-icons-row">
                <a
                  href="https://www.facebook.com/share/1D7oLv5jyi/?mibextid=wwXIfr"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/barsanapashuaahar?igsh=eXMwMzBjc2Y3cGln&utm_source=qr"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>

               
              </div>
            </div>
          </div>

          <div>
            <h3>Contact Us</h3>

            <div className="contact-item">
              <MapPin size={18} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{COMPANY.regOffice}</span>
            </div>

            <div className="contact-item">
              <Phone size={18} style={{ flexShrink: 0, marginTop: 2 }} />
              <a href={`tel:${COMPANY.phones_1[0]}`}>{COMPANY.phones_1[0]}</a>
            </div>

            <div className="contact-item">
              <Mail size={18} style={{ flexShrink: 0, marginTop: 2 }} />
              <a
                href={`mailto:${COMPANY.email}`}
                style={{ wordBreak: "break-all" }}
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} {COMPANY.name} | Designed by{"   "}{" "}
          <a href={COMPANY.founderUrl} target="_blank" rel="noopener noreferrer">
            {COMPANY.founder}
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

