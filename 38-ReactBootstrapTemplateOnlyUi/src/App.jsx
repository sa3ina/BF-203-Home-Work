import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Recent from "./pages/portfolio/Recent";
import Impossible from "./pages/portfolio/Impossible";
import Map from "./pages/map/Map";
import Footer from "./pages/footer/Footer";
function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Recent />
      <Impossible />
      <Map />
      <Footer />
    </>
  );
}

export default App;
