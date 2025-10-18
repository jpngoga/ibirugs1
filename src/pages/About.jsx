import React from "react";
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side: text + video under it */}
        <div className="about-text">
          <h2>About Ibirugs</h2>
          <p>Founded in August 2024, Ibirugs creates incredible handmade rugs that bring warmth and style to every home.</p>
          <p>Each rug is crafted with care, using vibrant colors and textures that stand out beautifully.</p>
          <p>We combine traditional tufting techniques with modern designs to create unique pieces.</p>
          <p>Our mission is to transform floors into statements of comfort and creativity.</p>
          <p>Every rug is durable, soft, and designed to last for years of enjoyment.</p>
          <p>We believe in sustainable practices and thoughtful materials in every product.</p>
          <p>From small apartments to large spaces, Ibirugs rugs elevate any room effortlessly.</p>
          <p>Join us on our journey of creativity, comfort, and stunning floor art.</p>

          {/* Video under the text */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/7fyazSOkDB8"
              title="Ibirugs Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right side: image + another video */}
      <div className="about-media">
  <img 
    src="https://img.joomcdn.net/dc4d82d93248d0f2c091bf25099bbd4cc4b5b619_original.jpeg" 
    alt="Ibirugs rug" 
  />

  <div className="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // ✅ working video ID
      title="Tufting Tutorial"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
      </div>
    </section>
  );
}
