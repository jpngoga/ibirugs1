import React from "react";
import "./Footer.css";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import logoImage from "../components/image.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & description */}
        <div className="footer-logo">
          <div className="logo-box">
                      <img src={logoImage} alt="Ibirugs Logo" />
                    </div>
          <div className="logo-text">
            <span>Ibirugs</span>
            <div className="subtext">Creative Work</div>
          </div>
        </div>

        <p className="footer-description">
          Handmade rugs with love and creativity. Transform your space with style and comfort.
        </p>

        {/* Social links */}
        <div className="footer-socials">
  <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
    <FaInstagram /> Instagram
  </a>
  <a href="https://tiktok.com" className="tiktok" target="_blank" rel="noopener noreferrer">
    <FaTiktok /> TikTok
  </a>
  <a href="https://wa.me/1234567890" className="whatsapp" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp /> WhatsApp
  </a>
</div>


        <p className="footer-copy">© 2025 Ibirugs. All rights reserved.</p>
      </div>
    </footer>
  );
}
