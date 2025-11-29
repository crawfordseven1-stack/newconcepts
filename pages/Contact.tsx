import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Contact Me",
      subtitle: "Take the first step to help. We are here to support you.",
      callTextTitle: "Call or Text",
      textInfo: "Text (619) 829-7899 for expedited SAP details.",
      locationsTitle: "Locations",
      physical: "Physical Office",
      mailing: "Mailing Address",
      availabilityTitle: "Availability",
      avail1: "Same-day and evening appointments available.",
      avail2: "Face-to-face evaluations for San Diego County. Secure Telehealth available statewide.",
      formTitle: "Send a Message",
      nameLabel: "Full Name",
      namePlace: "John Doe",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      serviceLabel: "Service Interested In",
      langLabel: "Preferred Language",
      msgLabel: "Message",
      msgPlace: "How can we help you?",
      submitBtn: "Request Appointment",
      services: [
        "DOT SAP Evaluation",
        "DUI/DWI Assessment",
        "Addiction Counseling",
        "Other / General Inquiry"
      ]
    },
    es: {
      title: "Contáctenos",
      subtitle: "Dé el primer paso para obtener ayuda. Estamos aquí para apoyarle.",
      callTextTitle: "Llamar o Textear",
      textInfo: "Envíe un mensaje de texto al (619) 829-7899 para detalles urgentes de SAP.",
      locationsTitle: "Ubicaciones",
      physical: "Oficina Física",
      mailing: "Dirección Postal",
      availabilityTitle: "Disponibilidad",
      avail1: "Citas disponibles el mismo día y por la tarde.",
      avail2: "Evaluaciones presenciales para el condado de San Diego. Telemedicina segura disponible en todo el estado.",
      formTitle: "Envíe un Mensaje",
      nameLabel: "Nombre Completo",
      namePlace: "Juan Pérez",
      phoneLabel: "Número de Teléfono",
      emailLabel: "Correo Electrónico",
      serviceLabel: "Servicio de Interés",
      langLabel: "Idioma Preferido",
      msgLabel: "Mensaje",
      msgPlace: "¿Cómo podemos ayudarle?",
      submitBtn: "Solicitar Cita",
      services: [
        "Evaluación DOT SAP",
        "Evaluación DUI/DWI",
        "Consejería de Adicciones",
        "Otro / Consulta General"
      ]
    }
  };

  const current = language === 'en' ? content.en : content.es;

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
       <div className="bg-blue-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">{current.title}</h1>
                <p className="text-xl text-blue-200">{current.subtitle}</p>
            </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Contact Info Sidebar */}
               <div className="lg:col-span-1 space-y-6">
                    {/* Card 1: Phones */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center"><Phone className="mr-2 text-teal-500"/> {current.callTextTitle}</h3>
                        <div className="space-y-3">
                            <a href="tel:6198297899" className="block text-slate-600 hover:text-blue-600 font-medium">(619) 829-7899</a>
                            <a href="tel:6197310125" className="block text-slate-600 hover:text-blue-600 font-medium">(619) 731-0125</a>
                            <p className="text-sm text-slate-500 mt-2">{current.textInfo}</p>
                        </div>
                    </div>

                    {/* Card 2: Location */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center"><MapPin className="mr-2 text-teal-500"/> {current.locationsTitle}</h3>
                        <div className="mb-4">
                            <p className="font-semibold text-sm text-slate-400 uppercase">{current.physical}</p>
                            <p className="text-slate-700">1625 Sweetwater Road, C1</p>
                            <p className="text-slate-700">National City, CA 91950</p>
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-slate-400 uppercase">{current.mailing}</p>
                            <p className="text-slate-700">P.O.Box 390178</p>
                            <p className="text-slate-700">San Diego, CA 92149</p>
                        </div>
                    </div>

                     {/* Card 3: Hours */}
                     <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center"><Clock className="mr-2 text-teal-500"/> {current.availabilityTitle}</h3>
                        <p className="text-slate-700 mb-2">{current.avail1}</p>
                        <p className="text-slate-700 text-sm italic">{current.avail2}</p>
                    </div>
               </div>

               {/* Contact Form */}
               <div className="lg:col-span-2">
                   <div className="bg-white rounded-lg shadow-lg p-8">
                       <h2 className="text-2xl font-bold text-slate-900 mb-6">{current.formTitle}</h2>
                       <form className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div>
                                   <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{current.nameLabel}</label>
                                   <input type="text" id="name" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={current.namePlace} />
                               </div>
                               <div>
                                   <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">{current.phoneLabel}</label>
                                   <input type="tel" id="phone" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="(555) 123-4567" />
                               </div>
                           </div>

                           <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{current.emailLabel}</label>
                                <input type="email" id="email" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="john@example.com" />
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div>
                                   <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">{current.serviceLabel}</label>
                                   <select id="service" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                                       {current.services.map((svc, i) => <option key={i}>{svc}</option>)}
                                   </select>
                               </div>
                               <div>
                                   <label htmlFor="language" className="block text-sm font-medium text-slate-700 mb-1">{current.langLabel}</label>
                                   <select id="language" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                                       <option>English</option>
                                       <option>Español</option>
                                   </select>
                               </div>
                           </div>

                           <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{current.msgLabel}</label>
                                <textarea id="message" rows={4} className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={current.msgPlace}></textarea>
                           </div>

                           <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors text-lg">
                               {current.submitBtn}
                           </button>
                       </form>
                   </div>
               </div>
           </div>
       </div>

       {/* Map Placeholder */}
       <div className="w-full h-96 bg-slate-200 mt-16 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-slate-300 animate-pulse"></div>
            <div className="relative z-10 text-slate-500 font-medium flex flex-col items-center">
                <MapPin size={48} className="mb-2"/>
                <span>Google Maps Embed Placeholder</span>
                <span className="text-sm">1625 Sweetwater Road, C1, National City, CA 91950</span>
            </div>
       </div>
    </div>
  );
};

export default Contact;