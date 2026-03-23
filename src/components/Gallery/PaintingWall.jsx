import React from "react";
import "./PaintingWall.css";
import Gallery from "./Gallery";

const PaintingWall = () => {
  return (
    <div className="painting-wall-container">
      <div className="paint-overlay"></div>
      <div className="content-overlay">
      <Gallery/>
    
      </div>
    </div>
  );
};

export default PaintingWall;
