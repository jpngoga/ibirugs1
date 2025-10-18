import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p>
        At Ibirugs, we provide high-quality handmade rug services tailored to
        your needs. From unique designs to custom projects, our team ensures
        excellence in every stitch.
      </p>

      <div className="services-list">
        <div className="service-card">
          <img
            src="https://image.made-in-china.com/202f0j00bYevPIqCMSoJ/Home-Tape-3D-Printed-HD-Floor-Mat-Carpet-Decoration-Living-Room-Traditional-Oriental-Sitting-Room-Carpet-and-Rugs-Luxury.webp"
            alt="Custom Rug Design"
            className="service-image"
          />
          <h3>Custom Rug Design</h3>
          <p>
            Work with our artisans to create a one-of-a-kind rug that matches
            your space and personality.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://m.media-amazon.com/images/I/51htr-IyjdL._UF894,1000_QL80_.jpg"
            alt="Repair & Restoration"
            className="service-image"
          />
          <h3>Repair & Restoration</h3>
          <p>
            We restore old and damaged rugs to their former beauty, preserving
            history and quality craftsmanship.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://4.imimg.com/data4/JB/MT/ANDROID-30150591/product.jpeg"
            alt="Interior Consultation"
            className="service-image"
          />
          <h3>Interior Consultation</h3>
          <p>
            Our experts help you choose the perfect rug style, color, and size
            to elevate your home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
