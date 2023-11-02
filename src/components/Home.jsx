import React from 'react'
import Nav from "./Nav.jsx";
import Landing from "./Landing";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer.jsx";

import littleLemonLogo from "../assets/Logo.svg";
import './Home.css';

function Home() {
  return (
    <div className="app__main">
      <div className="app__container">
        <Nav logo={littleLemonLogo} />
        <div className="backdrop">
          <Landing />
        </div>
        <Specials />
        <div className="backdrop" style={{ backgroundColor: "var(--secondary-pink)" }}>
          <Testimonials />
        </div>
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default Home;