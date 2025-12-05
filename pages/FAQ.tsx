import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
        title: "Common Questions",
        subtitle: "Answers to frequently asked questions about SAP evaluations, recovery, and our services.",
        q: "Q.",
        a: "A.",
        groups: [
            {
            category: "The DOT SAP Process",
            items: [
                {
                question: "What is the SAP Return-to-Duty process?",
                answer: "The SAP (Substance Abuse Professional) oversees the DOT return-to-duty process. It involves an Initial Evaluation, followed by recommended Education/Treatment, subsequent Follow-Up Testing, and finally a Return-to-Duty Evaluation to determine fitness for safety-sensitive duties."
                },
                {
                question: "What happens in the Initial Evaluation?",
                answer: "You meet with a DOT Qualified SAP for a thorough assessment. We gather information on your drug/alcohol use history, family history, physical health, mental health, and identify your positive support system."
                }
            ]
            },
            {
            category: "Counseling & Therapy Topics",
            items: [
                {
                question: "What is Codependency?",
                answer: "Codependency is an emotional and behavioral condition that affects an individual's ability to have a healthy, mutually satisfying relationship. It often involves placing the needs of others ahead of your own to a self-destructive point."
                },
                {
                question: "How does therapy help with Codependency?",
                answer: "Therapy helps break the cycle. Effective treatments may include Cognitive Behavioral Therapy (CBT), Inner child work, and Family systems therapy to rebuild self-esteem and set healthy boundaries."
                },
                {
                    question: "What are key strategies for Relapse Prevention?",
                    answer: "Top strategies include identifying triggers (internal and external), developing coping skills to manage stress, building a strong support network, and practicing mindfulness."
                }
            ]
            },
            {
                category: "Logistics & Services",
                items: [
                    {
                        question: "Do you offer Spanish-speaking services?",
                        answer: "Yes, Nosotros hablamos Español. We provide full assessments and counseling in Spanish."
                    },
                    {
                        question: "Do you conduct assessments for out-of-state DUI/DWI violations?",
                        answer: "Yes, we offer Out of State DUI / DWI Assessments and specialize in helping clients with inter-state and out-of-state DUI revocations."
                    }
                ]
            }
        ]
    },
    es: {
        title: "Preguntas Frecuentes",
        subtitle: "Respuestas a preguntas comunes sobre evaluaciones SAP, recuperación y nuestros servicios.",
        q: "P.",
        a: "R.",
        groups: [
            {
            category: "El Proceso SAP del DOT",
            items: [
                {
                question: "¿Qué es el proceso de Retorno al Deber de SAP?",
                answer: "El SAP (Profesional de Abuso de Sustancias) supervisa el proceso de retorno al deber del DOT. Implica una Evaluación Inicial, seguida de Educación/Tratamiento recomendado, Pruebas de Seguimiento posteriores y, finalmente, una Evaluación de Retorno al Deber para determinar la aptitud para funciones sensibles a la seguridad."
                },
                {
                question: "¿Qué sucede en la Evaluación Inicial?",
                answer: "Usted se reúne con un SAP calificado por el DOT para una evaluación exhaustiva. Recopilamos información sobre su historial de uso de drogas/alcohol, historial familiar, salud física, salud mental e identificamos su sistema de apoyo positivo."
                }
            ]
            },
            {
            category: "Temas de Consejería y Terapia",
            items: [
                {
                question: "¿Qué es la Codependencia?",
                answer: "La codependencia es una condición emocional y conductual que afecta la capacidad de una persona para tener una relación sana y mutuamente satisfactoria. A menudo implica poner las necesidades de los demás por delante de las propias hasta un punto autodestructivo."
                },
                {
                question: "¿Cómo ayuda la terapia con la Codependencia?",
                answer: "La terapia ayuda a romper el ciclo. Los tratamientos efectivos pueden incluir Terapia Cognitivo-Conductual (TCC), trabajo con el niño interior y terapia de sistemas familiares para reconstruir la autoestima y establecer límites saludables."
                },
                {
                    question: "¿Cuáles son las estrategias clave para la Prevención de Recaídas?",
                    answer: "Las mejores estrategias incluyen identificar los desencadenantes (internos y externos), desarrollar habilidades de afrontamiento para manejar el estrés, construir una red de apoyo sólida y practicar la atención plena."
                }
            ]
            },
            {
                category: "Logística y Servicios",
                items: [
                    {
                        question: "¿Ofrecen servicios en español?",
                        answer: "Sí, Nosotros hablamos Español. Ofrecemos evaluaciones completas y consejería en español."
                    },
                    {
                        question: "¿Realizan evaluaciones para violaciones de DUI/DWI fuera del estado?",
                        answer: "Sí, ofrecemos Evaluaciones de DUI / DWI Fuera del Estado y nos especializamos en ayudar a los clientes con revocaciones de DUI interestatales y fuera del estado."
                    }
                ]
            }
        ]
    }
  };

  const current = language === 'en' ? content.en : content.es;

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in font-sans">
      <div className="bg-white border-b border-slate-100 py-20 mb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{current.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">{current.subtitle}</p>
          </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        {current.groups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-3 inline-block">{group.category}</h2>
            <div className="space-y-6">
              {group.items.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start">
                        <span className="text-blue-600 mr-4 text-2xl leading-none font-black opacity-30 select-none">{current.q}</span>
                        <span className="mt-1">{faq.question}</span>
                    </h3>
                    <div className="flex items-start">
                        <span className="text-teal-600 mr-4 text-2xl leading-none font-black opacity-30 select-none">{current.a}</span>
                        <p className="text-slate-600 leading-relaxed text-lg mt-1">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;