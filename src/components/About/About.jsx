import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`about-painter ${visible ? "show" : ""}`}
    >
     
    
        <div className="about-content">
          <h2>About Our Painting Services</h2>

          <p>
            We are a professional painting service specializing in
            interior and exterior wall painting for homes and
            businesses. With attention to detail and high-quality
            materials, we deliver clean, precise and durable results.
          </p>

          <div className="features">
            <div className="feature">
              <h3>✔ Interior & Exterior</h3>
              <p>Complete wall and house painting solutions.</p>
            </div>

            <div className="feature">
              <h3>✔ Clean & Precise</h3>
              <p>Neat finishes and careful protection of your space.</p>
            </div>

            <div className="feature">
              <h3>✔ Reliable & On Time</h3>
              <p>Professional service you can trust.</p>
            </div>
          </div>

          {/* <button className="about-btn">
            Request a Free Quote
          </button> */}
        </div>
     
    </section>
  );
};

export default About;
