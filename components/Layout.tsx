import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe, MapPin, Mail, Facebook, Youtube, Twitter } from 'lucide-react';
import { NavItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems: NavItem[] = [
    { label: t('Home', 'Inicio'), path: '/' },
    { label: t('Services', 'Servicios'), path: '/services' },
    { label: t('Telehealth', 'Telemedicina'), path: '/telehealth' },
    { label: t('Intake Form', 'Formulario de Admisión'), path: '/intake' },
    { label: t('About', 'Nosotros'), path: '/about' },
    { label: t('FAQ', 'Preguntas'), path: '/faq' },
    { label: t('Insurance', 'Seguros'), path: '/rates' },
    { label: t('Contact', 'Contacto'), path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Top Bar - Alerts & Quick Contact */}
      <div className="bg-blue-900 text-white py-3 px-4 text-sm relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          
          {/* Left: Alert */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <span className="bg-yellow-500 text-blue-900 font-bold px-2 py-0.5 rounded text-xs uppercase tracking-wider shrink-0">
              ALERT
            </span>
            <span className="text-center md:text-left text-xs sm:text-sm">
              {t('COVID-19 Updates: Telehealth & Virtual Appointments Available', 'Actualizaciones COVID-19: Telemedicina y Citas Virtuales Disponibles')}
            </span>
          </div>

          {/* Right: Contact & Language */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto text-xs sm:text-sm">
            <a href="tel:6198297899" className="flex items-center hover:text-blue-200 transition-colors whitespace-nowrap">
              <Phone size={14} className="mr-1.5" />
              <span className="font-medium">(619) 829-7899</span>
            </a>
            <span className="text-blue-500 hidden sm:inline">|</span>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-yellow-300 font-medium hover:text-white transition-colors focus:outline-none whitespace-nowrap"
              title="Switch Language"
            >
              <Globe size={14} className="mr-1.5" />
              {language === 'en' ? 'Nosotros hablamos Español' : 'Switch to English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col shrink-0 mr-4 group" onClick={closeMenu}>
              <span className="text-2xl sm:text-3xl font-bold text-blue-900 leading-none tracking-tight group-hover:text-blue-700 transition-colors">
                New Concepts
              </span>
              <span className="text-lg sm:text-xl font-medium text-teal-600 leading-none tracking-wide mt-1">
                In Recovery
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 mt-1.5 uppercase tracking-widest font-semibold hidden sm:block">
                Ky Washington • SAP & Counselor
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    location.pathname === item.path 
                      ? 'text-blue-700 bg-blue-50' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions: Sticky Book Now Button & Mobile Toggle */}
            <div className="flex items-center gap-4 shrink-0 pl-4">
               <Link 
                to="/intake" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                {t('Book Now', 'Reservar Ahora')}
              </Link>
              
               {/* Mobile Menu Button */}
               <div className="lg:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-slate-600 hover:text-blue-600 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-colors"
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl animate-fade-in max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold tracking-wide uppercase border-b border-slate-700 pb-2 inline-block">
                {t('Contact Us', 'Contáctenos')}
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white mb-1">{t('Office Location:', 'Oficina:')}</p>
                    <p className="text-slate-400 leading-relaxed">1625 Sweetwater Road, C1<br/>National City, CA 91950</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 text-teal-400 shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <a href="tel:6198297899" className="hover:text-white transition-colors font-medium">(619) 829-7899</a>
                    <span className="hidden sm:inline text-slate-600">|</span>
                    <a href="tel:6197310125" className="hover:text-white transition-colors font-medium">(619) 731-0125</a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 text-teal-400 shrink-0" />
                  <a href="mailto:ky@newconceptsinrecovery.com" className="hover:text-white transition-colors break-all">ky@newconceptsinrecovery.com</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold tracking-wide uppercase border-b border-slate-700 pb-2 inline-block">
                {t('Quick Links', 'Enlaces Rápidos')}
              </h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>{t('DOT SAP Evaluations', 'Evaluaciones DOT SAP')}</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>{t('Out of State DUI Assessments', 'Evaluaciones DUI Fuera del Estado')}</Link></li>
                <li><Link to="/telehealth" className="hover:text-teal-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>{t('Telehealth Room', 'Sala de Telemedicina')}</Link></li>
                <li><Link to="/rates" className="hover:text-teal-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>{t('Rates & Military Discount', 'Tarifas y Descuento Militar')}</Link></li>
                <li><Link to="/intake" className="hover:text-teal-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>{t('Intake Form', 'Formulario de Admisión')}</Link></li>
              </ul>
            </div>

            {/* Social & Certs */}
            <div className="space-y-6">
              <h3 className="text-white text-lg font-bold tracking-wide uppercase border-b border-slate-700 pb-2 inline-block">
                {t('Connect', 'Conectar')}
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition-all duration-300"><Facebook size={20} /></a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-sky-500 hover:text-white text-slate-400 transition-all duration-300"><Twitter size={20} /></a>
                <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-red-600 hover:text-white text-slate-400 transition-all duration-300"><Youtube size={20} /></a>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 mt-4">
                 <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-2">Accreditations</p>
                 <p className="text-sm text-slate-200 font-medium">
                    Certified SAP, LAADC, ICADC, CADC II
                 </p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} New Concepts in Recovery. {t('All rights reserved.', 'Todos los derechos reservados.')}</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-300 transition-colors">{t('Privacy Policy', 'Política de Privacidad')}</a>
              <a href="#" className="hover:text-slate-300 transition-colors">{t('Terms & Conditions', 'Términos y Condiciones')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;