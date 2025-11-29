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
    <div className="animate-fade-in bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-6">{current.title}</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    {current.intro}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Consultation Card */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">{current.consultTitle}</h2>
                    <ul className="space-y-4 mb-8">
                        {current.consultItems.map((item, idx) => (
                            <li key={idx} className="flex items-center">
                                <ShieldCheck className="mr-3 text-teal-300" />
                                <span className={idx === 2 ? "font-bold text-yellow-300" : ""}>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="block w-full text-center bg-white text-blue-900 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                        {current.bookConsultBtn}
                    </Link>
                </div>

                {/* Rates Info Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{current.ratesTitle}</h2>
                    <p className="text-slate-600 mb-6">
                        {current.ratesDesc}
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <p className="text-sm text-yellow-800 font-medium">
                            {current.actionRequired}
                        </p>
                    </div>
                    <div className="space-y-3">
                         <a href="tel:6198297899" className="flex items-center justify-center w-full bg-slate-200 text-slate-800 font-bold py-3 rounded-lg hover:bg-slate-300 transition-colors">
                            <Phone className="mr-2" size={20}/> {current.callBtn}
                        </a>
                        <a href="sms:6198297899" className="flex items-center justify-center w-full border-2 border-slate-300 text-slate-700 font-bold py-3 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
                            <MessageSquare className="mr-2" size={20}/> {current.textBtn}
                        </a>
                    </div>
                </div>
            </div>

            {/* Insurance Section */}
            <div className="bg-slate-100 rounded-xl p-8 text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{current.insuranceTitle}</h3>
                <p className="text-slate-600 mb-6">
                    {current.insuranceDesc}
                </p>
                <p className="font-medium text-blue-800">
                    {current.paymentCall}
                </p>
            </div>
       </div>
    </div>
  );
};

export default Rates;