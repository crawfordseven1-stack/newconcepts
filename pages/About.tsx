import React from 'react';
import { Award, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

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
    <div className="bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image Placeholder */}
          <div className="md:w-1/3">
             {/* Using a placeholder for Ky Washington */}
             <div className="aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden shadow-lg relative">
                <img 
                    src="https://picsum.photos/400/600?grayscale" 
                    alt="Ky Washington" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 text-white p-4">
                    <p className="font-bold text-lg">Ky Washington</p>
                    <p className="text-sm text-blue-200">Program Director & Counselor</p>
                </div>
             </div>
          </div>

          {/* Bio Content */}
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{current.title}</h1>
            <h2 className="text-xl text-teal-600 font-medium mb-6">{current.role}</h2>
            
            <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
              <p>{current.bio1}</p>
              <p>{current.bio2}</p>
              <p>{current.bio3}</p>
            </div>

            {/* Certifications Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-3">
                   <Award className="text-blue-600 mr-2" />
                   <h3 className="font-bold text-slate-900">{current.certsTitle}</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {current.certs.map((cert, idx) => <li key={idx}>{cert}</li>)}
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-teal-600">
                <div className="flex items-center mb-3">
                   <GraduationCap className="text-teal-600 mr-2" />
                   <h3 className="font-bold text-slate-900">{current.expertiseTitle}</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {current.expertise.map((exp, idx) => <li key={idx}>{exp}</li>)}
                </ul>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-blue-900 text-white rounded-xl flex items-start">
                <Users className="shrink-0 mr-4 mt-1" size={24}/>
                <div>
                    <h4 className="font-bold text-lg mb-1">{current.spanishTitle}</h4>
                    <p className="text-blue-200">{current.spanishDesc}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;