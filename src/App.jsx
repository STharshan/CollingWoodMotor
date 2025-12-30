import React, { useEffect } from 'react';
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
import TermsConditions from './components/Term';
import PrivacyPolicy from './components/PrivacyPolicy';
import GDPRConsent from './components/GDPRButton';
import ReviewPage from './pages/Review';

// AOS Import
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS globally

function App() {
  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Set your preferred animation duration
      easing: 'ease-out-cubic', // You can use different easing methods
      once: true,  // Only trigger animations once
      mirror: false, // Set to true if you want animations to trigger when they come back into view
    });
  }, []);

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
            <Route path='/review' element={<ReviewPage />} />
            <Route path="/services/mechanical" element={<Mechanical />} />
            <Route path="/services/mot" element={<MOT />} />
            <Route path="/services/wheel-alignment" element={<WheelAlignement />} />
            <Route path="/services/window-tint" element={<Window />} />
            <Route path="/services/service" element={<BodyService />} />
            <Route path="/services/belts-chains" element={<Belts />} />
            <Route path="/services/diagnostics" element={<Diagnostics />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <GDPRConsent />
      </div>
    </Router>
  );
}

export default App;
