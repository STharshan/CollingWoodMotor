import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import Service from './pages/Service';
import Window from './pages/ExtraServices/Window';
import WheelAlignement from './pages/ExtraServices/WheelAlignment';
import MOT from './pages/ExtraServices/MOT';
import Mechanical from './pages/ExtraServices/Mechanical';
import Belts from './pages/ExtraServices/Belts';
import BodyService from './pages/ExtraServices/BodyService';
import Diagnostics from './pages/ExtraServices/Diagnostics';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/mechanical" element={<Mechanical />} />
            <Route path="/services/mot" element={<MOT />} />
            <Route path="/services/wheel-alignment" element={<WheelAlignement />} />
            <Route path="/services/window-tint" element={<Window />} />
            <Route path="/services/service" element={<BodyService />} />
            <Route path="/services/belts-chains" element={<Belts />} />
            <Route path="/services/diagnostics" element={<Diagnostics />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
