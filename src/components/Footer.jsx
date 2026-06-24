import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Logo from "./Logo";

function Footer() {
  const COMPANY = {
    name: "Sundra Group",
    founder: "Deific Digital",
    established: "2010",
    regOffice:
      "307, 10/433 Ratan Shanti Apartment, Khalasi Line, Kanpur, 208001",
    email: "sundragroup@gmail.com",
    phones_1: ["+91-9554588775"],
    phones_2: ["+91-"],
    phones_3: ["+91-9554588775"],
  };

  return (
    <>
      <style>{`
        .footer{
          background:#1d1d1d;
          color:#fff;
          margin-top:80px;
        }

        .footer-container{
          max-width:1200px;
          margin:auto;
          padding:60px 20px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:40px;
        }

        .footer-logo{
          background:#fff;
          padding:10px;
          border-radius:12px;
          display:inline-block;
        }

        .footer p{
          color:#ccc;
          line-height:1.7;
        }

        .footer h3{
          margin-bottom:20px;
        }

        .footer ul{
          list-style:none;
          padding:0;
          margin:0;
        }

        .footer li{
          margin-bottom:10px;
          
        }

        .footer a{
          color:#ddd;
          text-decoration:none;
          transition:.3s;
        }

        .footer a:hover{
          color:#d89b25;
        }

        .contact-item{
          display:flex;
          gap:10px;
          margin-bottom:15px;
          align-items:flex-start;
        }

        .social-icons{
          display:flex;
          gap:10px;
          margin-top:20px;
          flex-wrap:wrap;
        }

        .social-icons a{
          width:40px;
          height:40px;
          border:1px solid #444;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        }

        .social-icons a:hover{
          background:#d89b25;
          border-color:#d89b25;
          color:#fff;
        }

        .footer-bottom{
          border-top:1px solid #333;
          text-align:center;
          padding:20px;
          color:#999;
          font-size:14px;
        }

        .footer-head li{
          color:#999;
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

            <p style={{ marginTop: "20px" }}>
              Premium animal feed trusted by dairy farmers across India.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <ul className="footer-head">
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
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Products</h3>
            <ul>
              <li>
                <Link to="/products">Dairy Special</Link>
              </li>
              <li>
                <Link to="/products">Buff Special</Link>
              </li>
              <li>
                <Link to="/products">Royal Mixture</Link>
              </li>
              <li>
                <Link to="/products">Sudarshan</Link>
              </li>
              <li>
                <Link to="/products">Super</Link>
              </li>
              <li>
                <Link to="/products">Supreme Plus</Link>
              </li>
               <li>
                <Link to="/products">Multigran Chukar</Link>
              </li>
               <li>
                <Link to="/products">Churi</Link>
              </li>
              <li>
                <Link to="/products">Eight Thousand</Link>
              </li>
            </ul>
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

            <div className="social-icons">
              <a href="https://www.facebook.com/share/1D7oLv5jyi/?mibextid=wwXIfr">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/barsanapashuaahar?igsh=eXMwMzBjc2Y3cGln&utm_source=qr">
                <Instagram size={18} />
              </a>
              <a href="#">
                <Youtube size={18} />
              </a>
              <a href="#">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} {COMPANY.name} | Designed by{" "}
          {COMPANY.founder}
        </div>
      </footer>
    </>
  );
}

export default Footer;
