import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="fancy-footer">
      <div className="footer-content">
        <h2 className="footer-title">Muursouriverf</h2>
        <p className="footer-subtitle">Bringing walls to life with color 🎨</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="social-icons">
      
          <Link href="https://instagram.com" target="_blank" rel="noreferrer">
               Instagram <FaInstagramSquare /> 
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook /> Facebook
          </Link>
          
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Muursouri. All Rights Reserved.
        </p>
      </div>

      <div className="footer-background"></div>
    </footer>
  );
};

export default Footer;
