import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, AlertCircle, FileText, Send } from 'lucide-react';

const Intake: React.FC = () => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  
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
  // Shows if DOT SAP Evaluation OR DUI/DWI Assessment is selected
  const showComplianceSection = selectedServices.some(s => 
    s === 'DOT SAP Evaluation / Return to Duty Process' || 
    s === 'DUI/DWI Assessment / License Restoration'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
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
      successTitle: "Thank You",
      successMsg: "We have received your intake form. A counselor will contact you shortly to confirm your Free 15 Minute Assessment or first session appointment."
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
      successTitle: "Gracias",
      successMsg: "Hemos recibido su formulario de admisión. Un consejero se comunicará con usted en breve para confirmar su Evaluación Gratuita de 15 Minutos o cita de primera sesión."
    }
  };

  const current = language === 'en' ? content.en : content.es;

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{current.successTitle}</h2>
          <p className="text-slate-600 mb-8">{current.successMsg}</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-semibold hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{current.title}</h1>
          <p className="text-xl text-teal-600 font-medium">{current.subtitle}</p>
        </div>

        {/* Intro Prompt Card */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm mb-10">
          <h2 className="text-lg font-bold text-blue-900 mb-2">{current.introTitle}</h2>
          <p className="text-blue-800 leading-relaxed italic">
            "{current.introText}"
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Section 1 */}
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
              {current.sec1Title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">{current.fullName} *</label>
                <input required type="text" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">{current.email} *</label>
                <input required type="email" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-700 mb-1">{current.phone} *</label>
              <input required type="tel" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="(555) 123-4567" />
              <p className="text-xs text-slate-500 mt-1">{current.phoneNote}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{current.prefMethod}</label>
                <div className="flex space-x-4">
                   {current.methods.map((m) => (
                     <label key={m} className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="contactMethod" className="text-blue-600 bg-slate-100 focus:ring-blue-500" />
                        <span className="text-slate-700 text-sm">{m}</span>
                     </label>
                   ))}
                </div>
              </div>
              <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">{current.apptType}</label>
                 <select className="w-full bg-slate-50 px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500">
                    {current.appts.map(a => <option key={a}>{a}</option>)}
                 </select>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-md">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 bg-slate-100 text-blue-600 rounded focus:ring-blue-500 border-slate-300" />
                <span className="text-slate-700 font-medium">{current.flexibility}</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-5 h-5 bg-slate-100 text-teal-600 rounded focus:ring-teal-500 border-slate-300" />
                <span className="text-teal-700 font-bold">{current.freeConsult}</span>
              </label>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                {current.sec2Title}
            </h3>
            <p className="text-slate-600 mb-4 text-sm">{current.sec2Desc}</p>
            
            <div className="grid grid-cols-1 gap-3">
               {/* English/Spanish Service Mapping is tricky with simple arrays. 
                   We will map by index since arrays are parallel. */}
               {current.services.map((svc, idx) => {
                 // We use the English string value for logic checks to keep it consistent across languages
                 // Logic check value:
                 const logicValue = content.en.services[idx]; 
                 
                 return (
                  <label key={idx} className={`flex items-start p-3 rounded-lg border transition-all cursor-pointer ${selectedServices.includes(logicValue) ? 'bg-blue-50 border-blue-500 shadow-sm' : 'bg-slate-50 border-slate-200 hover:border-blue-300'}`}>
                      <input 
                        type="checkbox" 
                        className="mt-1 w-5 h-5 text-blue-600 bg-slate-100 rounded focus:ring-blue-500 shrink-0 border-slate-300"
                        onChange={() => handleServiceChange(logicValue)}
                        checked={selectedServices.includes(logicValue)}
                      />
                      <span className="ml-3 text-slate-800 font-medium">{svc}</span>
                  </label>
                 );
               })}
            </div>
          </div>

          {/* Section 3 (Conditional) */}
          {showComplianceSection && (
            <div className="p-8 border-b border-slate-100 bg-yellow-50 animate-fade-in">
                <h3 className="text-xl font-bold text-yellow-900 mb-6 flex items-center">
                    <span className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                    {current.sec3Title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                   <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">{current.dateViolation}</label>
                       <input type="date" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-yellow-500 outline-none" />
                   </div>
                   <div>
                       <label className="block text-sm font-bold text-slate-700 mb-1">{current.duiLoc}</label>
                       <select className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-yellow-500 outline-none">
                           {current.duiOpts.map(opt => <option key={opt}>{opt}</option>)}
                       </select>
                   </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-bold text-slate-700 mb-1">{current.substances}</label>
                    <input type="text" className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-yellow-500 outline-none" placeholder={current.substancesPlace} />
                </div>

                <div className="bg-white p-4 rounded-md border border-yellow-200">
                    <label className="flex items-start space-x-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-5 h-5 text-red-600 bg-slate-100 rounded focus:ring-red-500 border-slate-300" />
                        <div>
                            <span className="text-slate-900 font-bold">{current.expedite}</span>
                            <p className="text-xs text-red-600 mt-1 font-semibold flex items-center">
                                <AlertCircle size={12} className="mr-1"/> {current.expediteNote}
                            </p>
                        </div>
                    </label>
                </div>
            </div>
          )}

          {/* Section 4 */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">{showComplianceSection ? '4' : '3'}</span>
                {current.sec4Title}
            </h3>

            <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">{current.describe}</label>
                <textarea 
                    rows={5} 
                    className="w-full bg-slate-50 px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder={current.describePlace}
                ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">{current.military}</label>
                   <div className="flex space-x-6">
                       <label className="flex items-center cursor-pointer">
                           <input type="radio" name="military" className="text-blue-600 bg-slate-100 focus:ring-blue-500 border-slate-300"/>
                           <span className="ml-2">Yes</span>
                       </label>
                       <label className="flex items-center cursor-pointer">
                           <input type="radio" name="military" className="text-blue-600 bg-slate-100 focus:ring-blue-500 border-slate-300"/>
                           <span className="ml-2">No</span>
                       </label>
                   </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{current.langPref}</label>
                    <select className="w-full bg-slate-50 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none">
                        {current.langs.map(l => <option key={l}>{l}</option>)}
                    </select>
                </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center text-lg">
                <Send className="mr-2" size={20}/> {current.submitBtn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Intake;