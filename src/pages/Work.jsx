import React from "react";

export default function Work() {
  const rugs = [
    { title: "Rug 1", img: "https://i.etsystatic.com/36989881/r/il/bc7cac/7163698131/il_1588xN.7163698131_iyhp.jpg" },
    { title: "Rug 2", img: "https://i.etsystatic.com/60319319/r/il/b52164/7156322841/il_1588xN.7156322841_7rv2.jpg" },
    { title: "Rug 3", img: "https://i.etsystatic.com/36044456/r/il/55212c/6704789076/il_1588xN.6704789076_g0de.jpg" },
    { title: "Rug 4", img: "https://i.etsystatic.com/22669682/r/il/96cea8/3513368976/il_1588xN.3513368976_9xca.jpg" },
    { title: "Rug 5", img: "https://i.etsystatic.com/61122803/r/il/6b9e26/7153212093/il_1588xN.7153212093_871c.jpg" },
    { title: "Rug 6", img: "https://i.etsystatic.com/47516456/r/il/e12589/6868737603/il_800x800.6868737603_jyd3.jpg" },
    { title: "Rug 7", img: "https://i.etsystatic.com/47090988/r/il/ee5568/6671187477/il_800x800.6671187477_ic8w.jpg" },
    { title: "Rug 8", img: "https://i.etsystatic.com/60542913/r/il/418fff/7167587019/il_1588xN.7167587019_kpyx.jpg" },
  ];

  return (
    <section className="work-section">
      <div className="work-container">
        <div className="work-header">
          <h2>Our Work</h2>
          <p>Selected projects showcasing the incredible rugs we craft at Ibirugs.</p>
        </div>

        <div className="work-grid">
          {rugs.map((item, i) => (
            <figure key={i} className="work-card">
              <img src={item.img} alt={item.title} />
              <figcaption>
                <h3>{item.title}</h3>
                <p>Handmade • Creative • Durable</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
