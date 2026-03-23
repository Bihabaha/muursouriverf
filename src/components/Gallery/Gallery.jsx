// src/components/ClientMarquee.jsx


import darkRedWall from "../assets/images/DarkRedWall.jpeg"
import wallRoo from "../assets/images/wallRoo.jpeg"
import wallRoom from "../assets/images/wallRoom.jpeg"
import wallStairs from "../assets/images/wallStairs.jpeg"
import bluestairs from "../assets/images/BlueStairs.jpeg"

import stairs from "../assets/images/stairs.jpeg"

import "./Gallery.css"
export default function Gallery() {
  return (
    <section className="marquee-section">
      <h2 className="section-title">Gallery</h2>
     

      <div className="marquee-wrapper">
        <div className="marquee-content">

          {logos.concat(logos).map((logo, index) => (
            <div key={index} className={`logo-card ${logo.glow}`}>
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

const logos = [
  {
    
    src:bluestairs,
    alt: "BlueStairs",
    glow: "google-glow"
  },
  {
    src: wallStairs,
    alt: "wallStairs",
    glow: "tesla-glow"
  },
  {
    src: stairs,
    alt: "stairs",
    glow: "openai-glow"
  },
  {
    src: wallRoo,
    alt: "wallRoo",
    glow: "microsoft-glow"
  },
  {
    src: wallRoom,
    alt: "wallRoom",
    glow: "amazon-glow"
  },
  {
    src: darkRedWall,
    alt: "darkRedwall",
    glow: "twitter-glow"
  }
];
 