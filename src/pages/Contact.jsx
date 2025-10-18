import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out via social or send us a message.</p>

        <div className="contact-socials">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social instagram">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="tiktok">
            <FaTiktok /> <span>TikTok</span>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="whatsapp">
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="email" placeholder="Your Email" className="contact-input" />
          <textarea placeholder="Your Message" rows="6" className="contact-textarea" />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
