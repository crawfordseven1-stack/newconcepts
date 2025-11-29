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
    { label: t('Intake Form', 'Formulario de Admisión'), path: '/intake' },
    { label: t('About', 'Nosotros'), path: '/about' },
    { label: t('FAQ', 'Preguntas'), path: '/faq' },
    { label: t('Insurance', 'Seguros'), path: '/rates' },
    { label: t('Contact', 'Contacto'), path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Bar - Alerts & Quick Contact */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-500 text-blue-900 font-bold px-2 py-0.5 rounded text-xs">ALERT</span>
            <span>{t('COVID-19 Updates: Telehealth & Virtual Appointments Available', 'Actualizaciones COVID-19: Telemedicina y Citas Virtuales Disponibles')}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6198297899" className="flex items-center hover:text-blue-200 transition-colors">
              <Phone size={14} className="mr-1" />
              (619) 829-7899
            </a>
            <span className="hidden sm:inline">|</span>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-yellow-300 font-medium hover:text-white transition-colors focus:outline-none"
              title="Switch Language"
            >
              <Globe size={14} className="mr-1" />
              {language === 'en' ? 'Nosotros hablamos Español' : 'Switch to English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col shrink-0 mr-2" onClick={closeMenu}>
              <span className="text-xl sm:text-2xl font-bold text-blue-800 leading-none">New Concepts</span>
              <span className="text-base sm:text-lg font-medium text-teal-600 leading-none">In Recovery</span>
              <span className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-widest hidden sm:block">Ky Washington • SAP & Counselor</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.path ? 'text-blue-700 font-bold border-b-2 border-blue-700' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions: Sticky Book Now Button & Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 pl-4 lg:pl-8">
               <Link 
                to="/intake" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                {t('Book Now', 'Reservar Ahora')}
              </Link>
              
               {/* Mobile Menu Button */}
               <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-slate-600 hover:text-blue-600 focus:outline-none p-1"
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
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-3 py-3 rounded-md text-base font-medium border-b border-slate-50 last:border-0 ${
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
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">{t('Contact Us', 'Contáctenos')}</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{t('Office Location:', 'Oficina:')}</p>
                    <p>1625 Sweetwater Road, C1</p>
                    <p>National City, CA 91950</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-blue-400 shrink-0" />
                  <a href="tel:6198297899" className="hover:text-white transition-colors">(619) 829-7899</a>
                  <span className="mx-2">or</span>
                  <a href="tel:6197310125" className="hover:text-white transition-colors">(619) 731-0125</a>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-blue-400 shrink-0" />
                  <a href="mailto:ky@newconceptsinrecovery.com" className="hover:text-white transition-colors">ky@newconceptsinrecovery.com</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">{t('Quick Links', 'Enlaces Rápidos')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('DOT SAP Evaluations', 'Evaluaciones DOT SAP')}</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('Out of State DUI Assessments', 'Evaluaciones DUI Fuera del Estado')}</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('Addiction Counseling', 'Consejería de Adicciones')}</Link></li>
                <li><Link to="/rates" className="hover:text-blue-400 transition-colors">{t('Rates & Military Discount', 'Tarifas y Descuento Militar')}</Link></li>
                <li><Link to="/intake" className="hover:text-blue-400 transition-colors">{t('Intake Form', 'Formulario de Admisión')}</Link></li>
              </ul>
            </div>

            {/* Social & Certs */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">{t('Connect', 'Conectar')}</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-red-600 transition-colors"><Youtube size={20} /></a>
              </div>
              <div className="border-t border-slate-700 pt-4 mt-4">
                 <p className="text-xs text-slate-500">
                    Certified SAP, LAADC, ICADC, CADC II
                 </p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} New Concepts in Recovery. {t('All rights reserved.', 'Todos los derechos reservados.')}</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-slate-300">{t('Privacy Policy', 'Política de Privacidad')}</a>
              <a href="#" className="hover:text-slate-300">{t('Terms & Conditions', 'Términos y Condiciones')}</a>
              <a href="#" className="hover:text-slate-300">{t('Accessibility', 'Accesibilidad')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;