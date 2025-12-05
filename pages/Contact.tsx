import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Loader2, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", "New Contact Inquiry - New Concepts Website");
    formData.append("_template", "table");

    try {
        const response = await fetch("https://formsubmit.co/ajax/ky@newconceptsinrecovery.com", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            setSubmitted(true);
            window.scrollTo(0, 0);
        } else {
            setError("Something went wrong. Please try again or call us directly.");
        }
    } catch (err) {
        setError("Network error. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

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
      ],
      successTitle: "Message Sent",
      successMsg: "Thank you for contacting New Concepts in Recovery. We have received your message via email and will get back to you shortly."
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
      ],
      successTitle: "Mensaje Enviado",
      successMsg: "Gracias por contactar a New Concepts in Recovery. Hemos recibido su mensaje por correo electrónico y le responderemos en breve."
    }
  };

  const current = language === 'en' ? content.en : content.es;

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
       <div className="bg-blue-900 text-white py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{current.title}</h1>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto">{current.subtitle}</p>
            </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
               {/* Contact Info Sidebar */}
               <div className="lg:col-span-1 space-y-6">
                    {/* Card 1: Phones */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                        <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center"><Phone className="mr-3 text-teal-500" size={24}/> {current.callTextTitle}</h3>
                        <div className="space-y-4">
                            <a href="tel:6198297899" className="block text-slate-700 hover:text-blue-600 font-semibold text-lg transition-colors">(619) 829-7899</a>
                            <a href="tel:6197310125" className="block text-slate-700 hover:text-blue-600 font-semibold text-lg transition-colors">(619) 731-0125</a>
                            <p className="text-sm text-slate-500 pt-2 border-t border-slate-100">{current.textInfo}</p>
                        </div>
                    </div>

                    {/* Card 2: Location */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                        <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center"><MapPin className="mr-3 text-teal-500" size={24}/> {current.locationsTitle}</h3>
                        <div className="mb-6">
                            <p className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">{current.physical}</p>
                            <p className="text-slate-800 font-medium">1625 Sweetwater Road, C1</p>
                            <p className="text-slate-800 font-medium">National City, CA 91950</p>
                        </div>
                        <div>
                            <p className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">{current.mailing}</p>
                            <p className="text-slate-800 font-medium">P.O.Box 390178</p>
                            <p className="text-slate-800 font-medium">San Diego, CA 92149</p>
                        </div>
                    </div>

                     {/* Card 3: Hours */}
                     <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                        <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center"><Clock className="mr-3 text-teal-500" size={24}/> {current.availabilityTitle}</h3>
                        <p className="text-slate-800 font-medium mb-3">{current.avail1}</p>
                        <p className="text-slate-600 text-sm italic leading-relaxed">{current.avail2}</p>
                    </div>
               </div>

               {/* Contact Form */}
               <div className="lg:col-span-2">
                   <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border border-slate-100 h-full">
                       {submitted ? (
                           <div className="flex flex-col items-center justify-center h-full text-center py-10">
                               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                   <CheckCircle size={40} />
                               </div>
                               <h2 className="text-3xl font-bold text-slate-900 mb-4">{current.successTitle}</h2>
                               <p className="text-lg text-slate-600 mb-8">{current.successMsg}</p>
                               <button onClick={() => setSubmitted(false)} className="text-blue-600 hover:underline font-semibold">Send another message</button>
                           </div>
                       ) : (
                           <>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">{current.formTitle}</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.nameLabel}</label>
                                        <input required name="Name" type="text" id="name" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder={current.namePlace} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.phoneLabel}</label>
                                        <input required name="Phone" type="tel" id="phone" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="(555) 123-4567" />
                                    </div>
                                </div>

                                <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.emailLabel}</label>
                                        <input required name="Email" type="email" id="email" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.serviceLabel}</label>
                                        <select name="Service" id="service" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                                            {current.services.map((svc, i) => <option key={i} value={svc}>{svc}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="language" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.langLabel}</label>
                                        <select name="Language" id="language" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                                            <option value="English">English</option>
                                            <option value="Spanish">Español</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.msgLabel}</label>
                                        <textarea required name="Message" id="message" rows={5} className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder={current.msgPlace}></textarea>
                                </div>

                                {error && (
                                    <p className="text-red-600 bg-red-50 p-3 rounded-md text-sm font-medium">{error}</p>
                                )}

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-0.5 text-lg shadow-md flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2" size={20} />}
                                    {current.submitBtn}
                                </button>
                            </form>
                           </>
                       )}
                   </div>
               </div>
           </div>
       </div>

       {/* Map Placeholder */}
       <div className="w-full h-96 bg-slate-200 border-t border-slate-300 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-slate-300 animate-pulse"></div>
            <div className="relative z-10 text-slate-500 font-medium flex flex-col items-center">
                <MapPin size={48} className="mb-2"/>
                <span className="text-lg">Google Maps Embed Placeholder</span>
                <span className="text-sm">1625 Sweetwater Road, C1, National City, CA 91950</span>
            </div>
       </div>
    </div>
  );
};

export default Contact;