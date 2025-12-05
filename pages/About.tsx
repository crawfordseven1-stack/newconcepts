import React, { useState, createContext, useContext } from 'react';
// Lucide icons are correctly imported
import { Award, GraduationCap, Users, Globe } from 'lucide-react';

// --- Context Mockup for Single-File App ---
// Since the original code imported this context externally, we define a mock version 
// to ensure the single file is runnable and the language logic works.
const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
});

const useLanguage = () => useContext(LanguageContext);
// ----------------------------------------

const About = () => {
  // Use the mocked language context
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      title: "About Ky Washington",
      role: "Drug & Alcohol Counselor, Substance Abuse Professional (SAP)",
      bio1: "With over 30 years of experience in the field of addiction and recovery, Ky Washington serves as the driving force behind New Concepts in Recovery. His extensive background allows him to provide clinically sound assessments, effective treatment plans, and compassionate counseling for those navigating complex challenges.",
      bio2: "Ky specializes in helping individuals satisfy Department of Transportation (DOT) requirements through the SAP Return-to-Duty process. He also possesses deep expertise in assisting clients with out-of-state DUI/DWI assessments and license restoration.",
      bio3: "Beyond regulatory compliance, Ky is a dedicated counselor focusing on trauma, PTSD, men's issues, and codependency. He utilizes diverse therapeutic techniques, including Healing Drum Therapy, to facilitate emotional release and healing.",
      certsTitle: "Certifications",
      certs: [
        "LAADC (Licensed Advanced Alcohol & Drug Counselor)",
        "ICADC (Internat. Certified Alcohol & Drug Counselor)",
        "CADC II (Certified Alcohol Drug Counselor II)",
        "DOT Qualified SAP"
      ],
      expertiseTitle: "Expertise",
      expertise: [
        "Substance Abuse Evaluation",
        "Codependency & Trauma",
        "DUI/DWI Revocation",
        "Employee Assistance Programs (EAP)"
      ],
      spanishTitle: "Nosotros hablamos Español",
      spanishDesc: "We are proud to offer full evaluation and counseling services in Spanish to better serve our diverse community in San Diego and beyond."
    },
    es: {
      title: "Sobre Ky Washington",
      role: "Consejero de Drogas y Alcohol, Profesional de Abuso de Sustancias (SAP)",
      bio1: "Con más de 30 años de experiencia en el campo de la adicción y la recuperación, Ky Washington es la fuerza impulsora detrás de New Concepts in Recovery. Su amplia experiencia le permite proporcionar evaluaciones clínicamente sólidas, planes de tratamiento efectivos y consejería compasiva para aquellos que navegan desafíos complejos.",
      bio2: "Ky se especializa en ayudar a las personas a cumplir con los requisitos del Departamento de Transporte (DOT) a través del proceso SAP de Retorno al Deber. También posee una profunda experiencia ayudando a clientes con evaluaciones de DUI/DWI fuera del estado y restauración de licencias.",
      bio3: "Más allá del cumplimiento normativo, Ky es un consejero dedicado que se enfoca en el trauma, el TEPT, los problemas de los hombres y la codependencia. Utiliza diversas técnicas terapéuticas, incluida la Terapia de Tambores Curativos, para facilitar la liberación emocional y la curación.",
      certsTitle: "Certificaciones",
      certs: [
        "LAADC (Consejero Avanzado de Alcohol y Drogas con Licencia)",
        "ICADC (Consejero Internacional Certificado de Alcohol y Drogas)",
        "CADC II (Consejero Certificado de Alcohol y Drogas II)",
        "SAP Calificado por el DOT"
      ],
      expertiseTitle: "Experiencia",
      expertise: [
        "Evaluación de Abuso de Sustancias",
        "Codependencia y Trauma",
        "Revocación por DUI/DWI",
        "Programas de Asistencia al Empleado (EAP)"
      ],
      spanishTitle: "Nosotros hablamos Español",
      spanishDesc: "Estamos orgullosos de ofrecer servicios completos de evaluación y consejería en español para servir mejor a nuestra diversa comunidad en San Diego y más allá."
    }
  };

  const current = language === 'en' ? content.en : content.es;

  return (
    <div className="bg-white font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
            <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="flex items-center space-x-2 p-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition duration-150 text-sm font-medium shadow-sm"
            >
                <Globe size={18} />
                <span>{language === 'en' ? 'Español' : 'English'}</span>
            </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Image Column: This is where the specific image link is used */}
          <div className="lg:w-1/3 w-full lg:sticky lg:top-12">
            <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl relative group">
              <img 
                // *** YOUR IMAGE LINK IS HERE ***
                src="https://i.imgur.com/wY7dw9B.jpeg"
                // Fallback image in case the main URL fails
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://placehold.co/400x600/333/fff?text=Image+Not+Found";
                }}
                alt="Ky Washington - Drug & Alcohol Counselor"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Bio Content Column */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">{current.title}</h1>
            <h2 className="text-xl md:text-2xl text-teal-600 font-medium mb-10 border-b border-slate-100 pb-8">{current.role}</h2>
            
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
              <p>{current.bio1}</p>
              <p>{current.bio2}</p>
              <p>{current.bio3}</p>
            </div>

            {/* Credentials Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                   <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4">
                     <Award size={24} />
                   </div>
                   <h3 className="font-bold text-slate-900 text-xl">{current.certsTitle}</h3>
                </div>
                <ul className="space-y-3">
                    {current.certs.map((cert, idx) => (
                      <li key={idx} className="flex items-start text-base text-slate-700">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 shrink-0"></span>
                        {cert}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border-l-4 border-teal-600 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                   <div className="p-3 bg-teal-100 text-teal-600 rounded-full mr-4">
                     <GraduationCap size={24} />
                   </div>
                   <h3 className="font-bold text-slate-900 text-xl">{current.expertiseTitle}</h3>
                </div>
                <ul className="space-y-3">
                    {current.expertise.map((exp, idx) => (
                      <li key={idx} className="flex items-start text-base text-slate-700">
                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 mr-2 shrink-0"></span>
                        {exp}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-blue-900 text-white rounded-2xl flex flex-col sm:flex-row items-start shadow-xl border-b-4 border-blue-600">
                <div className="p-4 bg-blue-700 rounded-full mr-6 mb-4 sm:mb-0 shrink-0">
                   <Users size={28}/>
                </div>
                <div>
                    <h4 className="font-bold text-2xl mb-2">{current.spanishTitle}</h4>
                    <p className="text-blue-100 leading-relaxed">{current.spanishDesc}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The main App component wraps the About component in the LanguageContext provider.
const App = () => {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <About />
        </LanguageContext.Provider>
    );
}

export default App;
