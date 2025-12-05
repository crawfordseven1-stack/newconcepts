import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, AlertCircle, FileText, Send, Loader2 } from 'lucide-react';

const Intake: React.FC = () => {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // State for form fields that affect conditional logic
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Toggle service selection
  const handleServiceChange = (value: string) => {
    setSelectedServices(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  // Check if Section 3 should be visible
  const showComplianceSection = selectedServices.some(s => 
    s === 'DOT SAP Evaluation / Return to Duty Process' || 
    s === 'DUI/DWI Assessment / License Restoration'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    // Add selected services explicitly since they are custom handled
    formData.append("Services Interested", selectedServices.join(", "));
    formData.append("_subject", "New Intake Form Submission - New Concepts Website");
    formData.append("_template", "table"); // Makes the email look cleaner

    try {
        const response = await fetch("https://formsubmit.co/ajax/ky@newconceptsinrecovery.com", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            setSubmitted(true);
            window.scrollTo(0, 0);
        } else {
            setError("Something went wrong. Please try again or contact us directly.");
        }
    } catch (err) {
        setError("Network error. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const content = {
    en: {
      title: "SUD Intake Form",
      subtitle: "Tell Us About Your Needs",
      introTitle: "We’re here to support you.",
      introText: "Please use the space below to share anything you feel comfortable telling us about what you’re going through, what challenges you’re facing, and what kind of help you’re looking for. There are no right or wrong answers — just be honest in a way that feels safe for you. This information helps our counselors understand your situation and provide the support that fits your needs.",
      
      sec1Title: "1. Contact Information & Scheduling",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Primary Phone Number",
      phoneNote: "Texting available for expedited service",
      prefMethod: "Preferred Contact Method",
      methods: ["Call", "Text", "Email"],
      apptType: "Preferred Appointment Type",
      appts: ["Telehealth Evaluation", "In-Person (San Diego County)"],
      flexibility: "I need a same-day or evening appointment",
      freeConsult: "I would like to schedule my Free 15 Minute Assessment",

      sec2Title: "2. Service Selection",
      sec2Desc: "Select one or more options to categorize your inquiry:",
      services: [
        "DOT SAP Evaluation / Return to Duty Process",
        "DUI/DWI Assessment / License Restoration",
        "General Addiction/Substance Abuse Counseling",
        "Court-Ordered Substance Abuse Evaluation",
        "Specialty Counseling (Codependency, EAP, etc.)",
        "Case Management or Treatment Plan"
      ],

      sec3Title: "3. Detailed Compliance Information",
      dateViolation: "Date of Violation / Positive Test",
      substances: "Substance(s) Involved",
      substancesPlace: "e.g., Alcohol, Marijuana, etc.",
      duiLoc: "DUI/DWI Location",
      duiOpts: ["California", "Out-of-State / Interstate", "N/A"],
      expedite: "I require expedited SAP evaluation options",
      expediteNote: "For fastest service, please also TEXT (619) 829-7899 immediately after submitting.",

      sec4Title: "4. Counseling & Specific Needs",
      describe: "Describe Your Needs",
      describePlace: "Please describe your situation. Feel free to mention specific issues like Trauma, PTSD, Stress, Self Esteem, or Codependency...",
      military: "Are you eligible for a Military Discount?",
      langPref: "Language Preference",
      langs: ["English", "Spanish (Español)"],

      submitBtn: "Submit & Schedule Consultation",
      successTitle: "Form Submitted Successfully",
      successMsg: "Thank you for reaching out to New Concepts in Recovery. We have received your intake information via email. A counselor will review your details and contact you shortly to confirm your Free 15 Minute Assessment or first session appointment.",
      errorTitle: "Submission Error"
    },
    es: {
      title: "Formulario de Admisión SUD",
      subtitle: "Cuéntenos Sobre Sus Necesidades",
      introTitle: "Estamos aquí para apoyarle.",
      introText: "Por favor, utilice el espacio a continuación para compartir cualquier cosa que se sienta cómodo contándonos sobre lo que está pasando, qué desafíos enfrenta y qué tipo de ayuda está buscando. No hay respuestas correctas o incorrectas, solo sea honesto de una manera que se sienta segura para usted. Esta información ayuda a nuestros consejeros a entender su situación y brindar el apoyo que se ajusta a sus necesidades.",
      
      sec1Title: "1. Información de Contacto y Programación",
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono Principal",
      phoneNote: "Mensajes de texto disponibles para servicio expedito",
      prefMethod: "Método de Contacto Preferido",
      methods: ["Llamada", "Texto", "Email"],
      apptType: "Tipo de Cita Preferida",
      appts: ["Evaluación por Telemedicina", "En Persona (Condado de San Diego)"],
      flexibility: "Necesito una cita el mismo día o por la tarde",
      freeConsult: "Me gustaría programar mi Evaluación Gratuita de 15 Minutos",

      sec2Title: "2. Selección de Servicio",
      sec2Desc: "Seleccione una o más opciones para categorizar su consulta:",
      services: [
        "Evaluación DOT SAP / Proceso de Retorno al Deber",
        "Evaluación DUI/DWI / Restauración de Licencia",
        "Consejería General de Adicción/Abuso de Sustancias",
        "Evaluación de Abuso de Sustancias Ordenada por la Corte",
        "Consejería Especializada (Codependencia, EAP, etc.)",
        "Gestión de Casos o Plan de Tratamiento"
      ],

      sec3Title: "3. Información Detallada de Cumplimiento",
      dateViolation: "Fecha de Infracción / Prueba Positiva",
      substances: "Sustancia(s) Involucrada(s)",
      substancesPlace: "ej. Alcohol, Marihuana, etc.",
      duiLoc: "Ubicación de DUI/DWI",
      duiOpts: ["California", "Fuera del Estado / Interestatal", "N/A"],
      expedite: "Requiero opciones de evaluación SAP expeditas",
      expediteNote: "Para el servicio más rápido, por favor también ENVÍE UN TEXTO al (619) 829-7899 inmediatamente después de enviar.",

      sec4Title: "4. Consejería y Necesidades Específicas",
      describe: "Describa Sus Necesidades",
      describePlace: "Por favor describa su situación. Siéntase libre de mencionar problemas específicos como Trauma, TEPT, Estrés, Autoestima o Codependencia...",
      military: "¿Es elegible para un Descuento Militar?",
      langPref: "Preferencia de Idioma",
      langs: ["Inglés", "Español"],

      submitBtn: "Enviar y Programar Consulta",
      successTitle: "Formulario Enviado con Éxito",
      successMsg: "Gracias por contactar a New Concepts in Recovery. Hemos recibido su información de admisión por correo electrónico. Un consejero revisará sus detalles y se comunicará con usted en breve para confirmar su Evaluación Gratuita de 15 Minutos o cita de primera sesión.",
      errorTitle: "Error de Envío"
    }
  };

  const current = language === 'en' ? content.en : content.es;

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-12 text-center animate-fade-in border border-slate-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{current.successTitle}</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">{current.successMsg}</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-md"
          >
            {language === 'en' ? 'Return to Form' : 'Volver al Formulario'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{current.title}</h1>
          <p className="text-xl text-teal-600 font-medium">{current.subtitle}</p>
        </div>

        {/* Intro Prompt Card */}
        <div className="bg-white border-l-8 border-blue-600 p-8 rounded-r-xl shadow-md mb-12">
          <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <FileText className="mr-2" size={24}/> {current.introTitle}
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            "{current.introText}"
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Section 1 */}
          <div className="p-8 md:p-10 border-b border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <span className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 shadow-sm">1</span>
              {current.sec1Title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.fullName} *</label>
                <input required id="name" name="Full Name" type="text" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.email} *</label>
                <input required id="email" name="email" type="email" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.phone} *</label>
              <input required id="phone" name="Phone" type="tel" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="(555) 123-4567" />
              <p className="text-xs text-slate-500 mt-2 flex items-center"><CheckCircle size={12} className="mr-1 text-teal-500"/> {current.phoneNote}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">{current.prefMethod}</label>
                <div className="flex space-x-6">
                   {current.methods.map((m) => (
                     <label key={m} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="radio" name="Preferred Contact Method" value={m} className="w-5 h-5 text-blue-600 bg-slate-100 focus:ring-blue-500 border-slate-300" />
                        <span className="text-slate-700 text-base group-hover:text-blue-600 transition-colors">{m}</span>
                     </label>
                   ))}
                </div>
              </div>
              <div>
                 <label htmlFor="appt" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.apptType}</label>
                 <select id="appt" name="Appointment Type" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg text-base outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    {current.appts.map(a => <option key={a} value={a}>{a}</option>)}
                 </select>
              </div>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" name="Flexible" value="Yes" className="w-5 h-5 bg-white text-blue-600 rounded focus:ring-blue-500 border-slate-300" />
                <span className="text-slate-700 font-medium">{current.flexibility}</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" name="Free Consult" value="Yes" defaultChecked className="w-5 h-5 bg-white text-teal-600 rounded focus:ring-teal-500 border-slate-300" />
                <span className="text-teal-700 font-bold text-lg">{current.freeConsult}</span>
              </label>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 shadow-sm">2</span>
                {current.sec2Title}
            </h3>
            <p className="text-slate-600 mb-6 text-base italic">{current.sec2Desc}</p>
            
            <div className="grid grid-cols-1 gap-4">
               {current.services.map((svc, idx) => {
                 const logicValue = content.en.services[idx]; 
                 return (
                  <label key={idx} className={`flex items-start p-4 rounded-xl border transition-all cursor-pointer ${selectedServices.includes(logicValue) ? 'bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'}`}>
                      <input 
                        type="checkbox" 
                        className="mt-1 w-5 h-5 text-blue-600 bg-slate-50 rounded focus:ring-blue-500 shrink-0 border-slate-300"
                        onChange={() => handleServiceChange(logicValue)}
                        checked={selectedServices.includes(logicValue)}
                      />
                      <span className={`ml-4 text-base ${selectedServices.includes(logicValue) ? 'text-blue-900 font-bold' : 'text-slate-700 font-medium'}`}>{svc}</span>
                  </label>
                 );
               })}
            </div>
          </div>

          {/* Section 3 (Conditional) */}
          {showComplianceSection && (
            <div className="p-8 md:p-10 border-b border-slate-100 bg-amber-50/50 animate-fade-in">
                <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center">
                    <span className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 shadow-sm">3</span>
                    {current.sec3Title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                   <div>
                       <label htmlFor="violationDate" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.dateViolation}</label>
                       <input id="violationDate" name="Violation Date" type="date" className="w-full bg-white px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                   </div>
                   <div>
                       <label htmlFor="location" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.duiLoc}</label>
                       <select id="location" name="DUI Location" className="w-full bg-white px-5 py-3 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all">
                           {current.duiOpts.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                       </select>
                   </div>
                </div>

                <div className="mb-8">
                    <label htmlFor="substances" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.substances}</label>
                    <input id="substances" name="Substances" type="text" className="w-full bg-white px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder={current.substancesPlace} />
                </div>

                <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm">
                    <label className="flex items-start space-x-4 cursor-pointer">
                        <input type="checkbox" name="Expedite" value="Yes" className="mt-1 w-6 h-6 text-red-600 bg-slate-50 rounded focus:ring-red-500 border-slate-300" />
                        <div>
                            <span className="text-slate-900 font-bold text-lg">{current.expedite}</span>
                            <p className="text-sm text-red-600 mt-2 font-bold flex items-center">
                                <AlertCircle size={16} className="mr-2"/> {current.expediteNote}
                            </p>
                        </div>
                    </label>
                </div>
            </div>
          )}

          {/* Section 4 */}
          <div className="p-8 md:p-10 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <span className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 shadow-sm">{showComplianceSection ? '4' : '3'}</span>
                {current.sec4Title}
            </h3>

            <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.describe}</label>
                <textarea 
                    id="message"
                    name="Message"
                    rows={5} 
                    className="w-full bg-slate-50 px-5 py-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder={current.describePlace}
                ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">{current.military}</label>
                   <div className="flex space-x-8">
                       <label className="flex items-center cursor-pointer group">
                           <input type="radio" name="Military Discount" value="Yes" className="w-5 h-5 text-blue-600 bg-slate-100 focus:ring-blue-500 border-slate-300"/>
                           <span className="ml-3 text-slate-700 font-medium group-hover:text-blue-600">Yes</span>
                       </label>
                       <label className="flex items-center cursor-pointer group">
                           <input type="radio" name="Military Discount" value="No" className="w-5 h-5 text-blue-600 bg-slate-100 focus:ring-blue-500 border-slate-300"/>
                           <span className="ml-3 text-slate-700 font-medium group-hover:text-blue-600">No</span>
                       </label>
                   </div>
                </div>
                <div>
                    <label htmlFor="language" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{current.langPref}</label>
                    <select id="language" name="Language" className="w-full bg-slate-50 px-5 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                        {current.langs.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                    <AlertCircle size={20} className="mr-2" />
                    {error}
                </div>
            )}

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center text-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-3" size={22}/>} 
                {current.submitBtn}
            </button>
            <p className="text-center text-slate-400 text-sm mt-4">
                Secure 256-bit SSL Encryption
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Intake;