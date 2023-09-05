import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer.tsx";

import littleLemonLogo from './assets/Logo.svg';

function App() {
  return (
    <>
      <Nav logo = {littleLemonLogo}/>
      <main>
        <Landing />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
