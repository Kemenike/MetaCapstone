import "./App.css";
import Nav from "./components/Nav.tsx";
import Landing from "./components/Landing";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer.tsx";

import littleLemonLogo from "./assets/Logo.svg";

function App() {
  return (
    <div className="app__main">
      <div className="app__container">
        <Nav logo={littleLemonLogo} />
        <main>
          <div className="backdrop">
            <Landing />
          </div>
          <Specials />
          <Testimonials />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
