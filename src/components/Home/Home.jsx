import React from "react";

import Header from "../Header/Header";

import About from "../About/About";
import PaintingWall from "../Gallery/PaintingWall";
import Contact from "../Contact/Contact";



const Home = () => {
  return (
    <div>
      <Header />
   <PaintingWall />   {/* image gallery*/}

      <About />
      <Contact />
     
    </div>
  );
};

export default Home;
