import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Intake from './pages/Intake';
import Telehealth from './pages/Telehealth';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intake" element={<Intake />} />
            <Route path="/telehealth" element={<Telehealth />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;