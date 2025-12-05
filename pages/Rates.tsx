import React from 'react';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Rates: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Rates & Insurance",
      intro: "We believe in transparent and accessible care. Please contact us directly for a personalized quote based on your specific needs.",
      consultTitle: "Free Consultation",
      consultItems: [
        "Free 15 Minute Assessment",
        "Free Initial Phone Consultation",
        "Military Discounts Available!"
      ],
      bookConsultBtn: "Book Your Free Consult",
      ratesTitle: "Service Rates",
      ratesDesc: "Pricing varies depending on the type of service (e.g., DOT SAP Evaluation, DUI Assessment, or Weekly Counseling).",
      actionRequired: "Action Required: Please call or text the office directly for pricing specific to your situation.",
      callBtn: "Call (619) 829-7899",
      textBtn: "Text for Expedited SAP Info",
      insuranceTitle: "Payment & Insurance",
      insuranceDesc: "Insurance coverage can be complex. We encourage you to contact us to discuss payment options and verify if your insurance plan covers our counseling or evaluation services.",
      paymentCall: "Call (619) 731-0125 to discuss payment options."
    },
    es: {
      title: "Tarifas y Seguros",
      intro: "Creemos en una atención transparente y accesible. Comuníquese con nosotros directamente para obtener un presupuesto personalizado basado en sus necesidades específicas.",
      consultTitle: "Consulta Gratuita",
      consultItems: [
        "Evaluación gratuita de 15 minutos",
        "Consulta telefónica inicial gratuita",
        "¡Descuentos Militares Disponibles!"
      ],
      bookConsultBtn: "Reserve Su Consulta Gratuita",
      ratesTitle: "Tarifas de Servicio",
      ratesDesc: "El precio varía según el tipo de servicio (por ejemplo, Evaluación SAP DOT, Evaluación DUI o Consejería Semanal).",
      actionRequired: "Acción Requerida: Llame o envíe un mensaje de texto a la oficina directamente para obtener precios específicos para su situación.",
      callBtn: "Llamar (619) 829-7899",
      textBtn: "Texto para Info SAP Urgente",
      insuranceTitle: "Pago y Seguros",
      insuranceDesc: "La cobertura de seguro puede ser compleja. Le recomendamos que se comunique con nosotros para discutir las opciones de pago y verificar si su plan de seguro cubre nuestros servicios de consejería o evaluación.",
      paymentCall: "Llame al (619) 731-0125 para discutir opciones de pago."
    }
  };

  const current = language === 'en' ? content.en : content.es;

  return (
    <div className="animate-fade-in bg-white font-sans">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{current.title}</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    {current.intro}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                {/* Consultation Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-10 shadow-xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 border-b border-blue-500 pb-4">{current.consultTitle}</h2>
                        <ul className="space-y-5 mb-10">
                            {current.consultItems.map((item, idx) => (
                                <li key={idx} className="flex items-center text-lg">
                                    <ShieldCheck className="mr-4 text-teal-300 shrink-0" size={24} />
                                    <span className={idx === 2 ? "font-bold text-yellow-300" : "font-medium"}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/contact" className="block w-full text-center bg-white text-blue-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-lg">
                        {current.bookConsultBtn}
                    </Link>
                </div>

                {/* Rates Info Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">{current.ratesTitle}</h2>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                            {current.ratesDesc}
                        </p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
                            <p className="text-base text-yellow-900 font-semibold leading-relaxed">
                                {current.actionRequired}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                         <a href="tel:6198297899" className="flex items-center justify-center w-full bg-slate-200 text-slate-800 font-bold py-4 rounded-xl hover:bg-slate-300 transition-colors text-lg">
                            <Phone className="mr-3" size={20}/> {current.callBtn}
                        </a>
                        <a href="sms:6198297899" className="flex items-center justify-center w-full border-2 border-slate-300 text-slate-700 font-bold py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors text-lg">
                            <MessageSquare className="mr-3" size={20}/> {current.textBtn}
                        </a>
                    </div>
                </div>
            </div>

            {/* Insurance Section */}
            <div className="bg-slate-100 rounded-2xl p-10 md:p-12 text-center max-w-4xl mx-auto border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{current.insuranceTitle}</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                    {current.insuranceDesc}
                </p>
                <a href="tel:6197310125" className="inline-block bg-blue-900 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors">
                    {current.paymentCall}
                </a>
            </div>
       </div>
    </div>
  );
};

export default Rates;