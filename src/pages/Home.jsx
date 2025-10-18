import React from "react";

export default function Home() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Beautiful, Rugs design <br /> products for you.</h1>
          <p>
            We craft incredible handmade rugs — blending creativity, comfort, and
            durability to transform any space. Each piece is designed with care,
            vibrant textures, and lasting quality that helps your home stand out.
          </p>

          <div className="hero-buttons">
            <a href="/work" className="btn-dark">View work</a>
            <a href="/contact" className="link">Start a project</a>
          </div>

          <div className="tags">
            <span>Branding</span>
            <span>Rugs design</span>
            <span>Custom your Design</span>
            <span>Product strategy</span>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img
              src="https://abigailahern.com/cdn/shop/files/holt-tufted-rug-abigail-ahern-1_d438ef49-2bf1-4ead-99d5-32b659fe4efa.jpg?v=1734616538&width=1946"
              alt="Hero rug"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/1400x800?text=Rug+Hero";
              }}
            />
          </div>
          <div className="blur-circle"></div>
        </div>
      </div>
    </section>
  );
}
