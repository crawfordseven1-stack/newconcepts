import React from 'react';
import { Truck, Scale, HeartHandshake, FileText, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { language, t } = useLanguage();

  // Bilingual content dictionary
  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive Counseling, Evaluation, and Compliance. Over 30 years of experience serving San Diego County and beyond.",
      specialtiesTitle: "Specialty Areas & Expertise",
      tags: ["Trauma & PTSD", "Men's Issues", "Self Esteem", "Spirituality", "Stress Management", "Life Coaching", "Ex-Offender Transitional Programs"],
      items: [
        {
          title: "DOT Substance Abuse Professional (SAP) Services",
          description: "We guide you through the official DOT Return-to-Duty process. As a qualified SAP, Ky Washington provides the federally mandated evaluations required for employees in safety-sensitive positions.",
          features: [
            "DOT Qualified SAP Assessments",
            "Referrals for Education and Treatment",
            "Return-to-Duty Evaluation",
            "Follow-Up Testing Plans",
            "Virtual SAP Appointments Available",
            "Evaluacion y formacion SAP en Espanol"
          ]
        },
        {
          title: "DUI/DWI and License Restoration",
          description: "Navigating the legal requirements for license recovery can be complex. We specialize in out-of-state assessments and interstate revocations.",
          features: [
            "Out of State DUI / DWI Assessments",
            "Assistance with Interstate Revocations",
            "License Recovery Assistance",
            "Alcohol Related Evaluations",
            "Court Ordered Substance Abuse Referrals"
          ]
        },
        {
          title: "Counseling & Therapy",
          description: "Individualized therapy sessions designed to address the root causes of addiction, trauma, and behavioral patterns.",
          features: [
            "One-on-One Drug and Alcohol Counseling",
            "Codependency Counseling",
            "Healing Drum Therapy",
            "Inner Child Work",
            "Dual Diagnosis Support"
          ]
        },
        {
          title: "Assessments & Case Management",
          description: "Comprehensive evaluations and ongoing support to ensure long-term recovery and compliance.",
          features: [
            "Substance Abuse Evaluations",
            "Relapse Prevention Education",
            "Clinically Sound Treatment Plans",
            "Case Management for Employers/Employees"
          ]
        }
      ]
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Consejería Integral, Evaluación y Cumplimiento. Más de 30 años de experiencia sirviendo al Condado de San Diego y más allá.",
      specialtiesTitle: "Áreas de Especialidad y Experiencia",
      tags: ["Trauma y TEPT", "Problemas de Hombres", "Autoestima", "Espiritualidad", "Manejo del Estrés", "Coaching de Vida", "Programas de Transición para Ex-Delincuentes"],
      items: [
        {
          title: "Servicios de Profesional de Abuso de Sustancias (SAP) del DOT",
          description: "Le guiamos a través del proceso oficial de Retorno al Deber del DOT. Como SAP calificado, Ky Washington proporciona las evaluaciones obligatorias federales requeridas para empleados en puestos sensibles a la seguridad.",
          features: [
            "Evaluaciones SAP Calificadas por el DOT",
            "Referencias para Educación y Tratamiento",
            "Evaluación de Retorno al Deber",
            "Planes de Pruebas de Seguimiento",
            "Citas SAP Virtuales Disponibles",
            "Evaluación y formación SAP en Español"
          ]
        },
        {
          title: "DUI/DWI y Restauración de Licencia",
          description: "Navegar los requisitos legales para la recuperación de la licencia puede ser complejo. Nos especializamos en evaluaciones fuera del estado y revocaciones interestatales.",
          features: [
            "Evaluaciones de DUI / DWI Fuera del Estado",
            "Asistencia con Revocaciones Interestatales",
            "Asistencia para Recuperación de Licencia",
            "Evaluaciones Relacionadas con Alcohol",
            "Referencias de Abuso de Sustancias Ordenadas por la Corte"
          ]
        },
        {
          title: "Consejería y Terapia",
          description: "Sesiones de terapia individualizada diseñadas para abordar las causas fundamentales de la adicción, el trauma y los patrones de comportamiento.",
          features: [
            "Consejería Individual de Drogas y Alcohol",
            "Consejería de Codependencia",
            "Terapia de Tambores Curativos",
            "Trabajo con el Niño Interior",
            "Apoyo para Diagnóstico Dual"
          ]
        },
        {
          title: "Evaluaciones y Gestión de Casos",
          description: "Evaluaciones integrales y apoyo continuo para asegurar la recuperación a largo plazo y el cumplimiento.",
          features: [
            "Evaluaciones de Abuso de Sustancias",
            "Educación para la Prevención de Recaídas",
            "Planes de Tratamiento Clínicamente Sólidos",
            "Gestión de Casos para Empleadores/Empleados"
          ]
        }
      ]
    }
  };

  const currentContent = language === 'en' ? content.en : content.es;
  
  // Icons array to map to the items
  const icons = [<Truck size={32} />, <Scale size={32} />, <HeartHandshake size={32} />, <FileText size={32} />];

  return (
    <div className="bg-white animate-fade-in">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{currentContent.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {currentContent.items.map((service, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
            
            {/* Visual/Icon Area */}
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-blue-50 p-12 rounded-full ring-8 ring-blue-50/50">
                    <div className="text-blue-600">
                        {icons[index]}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <div className="w-20 h-1 bg-teal-500 mb-6"></div>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4 uppercase tracking-wide text-sm">
                    {language === 'en' ? 'Key Features' : 'Características Clave'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start">
                      <ChevronRight size={18} className="text-teal-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Specialty Areas Badge Section */}
        <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-10">{currentContent.specialtiesTitle}</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {currentContent.tags.map((tag, i) => (
                    <span key={i} className="px-6 py-2 bg-white border border-slate-300 rounded-full text-slate-700 shadow-sm hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
