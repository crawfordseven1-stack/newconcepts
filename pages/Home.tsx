import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Video, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      heroTitle: <>Recovery, Compliance, & <span className="text-teal-400">New Beginnings</span></>,
      heroDesc: "Expert DOT SAP Evaluations, DUI Assessments, and Substance Abuse Counseling. Over 30 years of experience helping individuals get back on track.",
      bookBtn: "Book Appointment",
      viewServicesBtn: "View Services",
      whyChooseUs: "Why Choose Us?",
      whyItems: [
        "Military Discounts Available",
        "Same-day & Evening Appointments",
        "Spanish Speaking Services",
        "Virtual / Telehealth Available"
      ],
      servicesTitle: "Comprehensive Recovery Services",
      servicesDesc: "Specialized evaluations and counseling tailored to your unique needs.",
      service1Title: "Return-to-Duty (SAP)",
      service1Desc: "DOT Qualified SAP assessments and referrals. We guide you through the entire Return-to-Duty process efficiently.",
      service2Title: "DUI/DWI Assessments",
      service2Desc: "Out-of-state DUI/DWI assessments and license restoration services. Recognized expertise in inter-state revocations.",
      service3Title: "Addiction Counseling",
      service3Desc: "One-on-one telehealth or in-person counseling for substance abuse, codependency, and trauma.",
      learnMore: "Learn more",
      howItWorksTitle: "Getting Started is Easy",
      howItWorksDesc: "We streamline the process so you can focus on what matters.",
      step1Title: "Book An Appointment",
      step1Desc: "Call, text, or use our contact form to schedule.",
      step2Title: "Assessment",
      step2Desc: "Free 15-minute consultation to understand your needs.",
      step3Title: "First Session",
      step3Desc: "Begin your journey via Telehealth or In-Person.",
      scheduleConsultBtn: "Schedule Your Free Consultation",
      urgentTitle: "Need expedited SAP evaluation details?",
      urgentDesc: "Text us for the fastest response time.",
      textBtn: "TEXT (619) 829-7899"
    },
    es: {
      heroTitle: <>Recuperación, Cumplimiento y <span className="text-teal-400">Nuevos Comienzos</span></>,
      heroDesc: "Evaluaciones expertas de SAP del DOT, evaluaciones de DUI y consejería de abuso de sustancias. Más de 30 años de experiencia ayudando a las personas a retomar el camino.",
      bookBtn: "Reservar Cita",
      viewServicesBtn: "Ver Servicios",
      whyChooseUs: "¿Por Qué Elegirnos?",
      whyItems: [
        "Descuentos Militares Disponibles",
        "Citas el Mismo Día y por la Tarde",
        "Servicios en Español",
        "Virtual / Telemedicina Disponible"
      ],
      servicesTitle: "Servicios Integrales de Recuperación",
      servicesDesc: "Evaluaciones especializadas y consejería adaptada a sus necesidades únicas.",
      service1Title: "Retorno al Deber (SAP)",
      service1Desc: "Evaluaciones y referencias de SAP calificadas por el DOT. Le guiamos a través de todo el proceso de Retorno al Deber de manera eficiente.",
      service2Title: "Evaluaciones DUI/DWI",
      service2Desc: "Evaluaciones de DUI/DWI fuera del estado y servicios de restauración de licencias. Experiencia reconocida en revocaciones interestatales.",
      service3Title: "Consejería de Adicciones",
      service3Desc: "Consejería individual por telemedicina o en persona para abuso de sustancias, codependencia y trauma.",
      learnMore: "Más información",
      howItWorksTitle: "Comenzar es Fácil",
      howItWorksDesc: "Simplificamos el proceso para que pueda concentrarse en lo importante.",
      step1Title: "Reserve una Cita",
      step1Desc: "Llame, envíe un mensaje de texto o use nuestro formulario.",
      step2Title: "Evaluación",
      step2Desc: "Consulta gratuita de 15 minutos para entender sus necesidades.",
      step3Title: "Primera Sesión",
      step3Desc: "Comience su viaje a través de Telemedicina o en Persona.",
      scheduleConsultBtn: "Programe su Consulta Gratuita",
      urgentTitle: "¿Necesita detalles urgentes de evaluación SAP?",
      urgentDesc: "Envíenos un mensaje de texto para la respuesta más rápida.",
      textBtn: "TEXTO (619) 829-7899"
    }
  };

  const current = language === 'en' ? content.en : content.es;

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
            <img 
                src="images/hero-bg.jpg" 
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://picsum.photos/1920/1080?grayscale&blur=2";
                }}
                alt="Calm water background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {current.heroTitle}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              {current.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-bold text-lg text-center transition-colors">
                {current.bookBtn}
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-md font-bold text-lg text-center transition-colors">
                {current.viewServicesBtn}
              </Link>
            </div>
          </div>
          
          {/* Hero Card overlay */}
          <div className="md:w-1/3 mt-12 md:mt-0 md:pl-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-2xl">
                <h3 className="text-xl font-bold mb-4 flex items-center"><Award className="mr-2 text-yellow-400"/> {current.whyChooseUs}</h3>
                <ul className="space-y-3 text-sm">
                    {current.whyItems.map((item, idx) => (
                      <li key={idx} className="flex items-center"><CheckCircle size={16} className="mr-2 text-teal-400"/> <span>{item}</span></li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">{current.servicesTitle}</h2>
                <p className="mt-4 text-lg text-slate-600">{current.servicesDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                        <CheckCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{current.service1Title}</h3>
                    <p className="text-slate-600 mb-6">{current.service1Desc}</p>
                    <Link to="/services" className="text-blue-600 font-semibold flex items-center hover:underline">{current.learnMore} <ArrowRight size={16} className="ml-1"/></Link>
                </div>

                {/* Service 2 */}
                <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                        <Award size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{current.service2Title}</h3>
                    <p className="text-slate-600 mb-6">{current.service2Desc}</p>
                    <Link to="/services" className="text-teal-600 font-semibold flex items-center hover:underline">{current.learnMore} <ArrowRight size={16} className="ml-1"/></Link>
                </div>

                 {/* Service 3 */}
                 <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                        <Video size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{current.service3Title}</h3>
                    <p className="text-slate-600 mb-6">{current.service3Desc}</p>
                    <Link to="/services" className="text-indigo-600 font-semibold flex items-center hover:underline">{current.learnMore} <ArrowRight size={16} className="ml-1"/></Link>
                </div>
            </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900">{current.howItWorksTitle}</h2>
                  <p className="mt-4 text-lg text-slate-600">{current.howItWorksDesc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
                   {/* Connector Line (Desktop) */}
                   <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0"></div>

                  {/* Step 1 */}
                  <div className="relative z-10">
                      <div className="w-24 h-24 bg-white border-4 border-blue-500 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-2xl font-bold">1</div>
                      <h3 className="text-xl font-bold mb-2">{current.step1Title}</h3>
                      <p className="text-slate-600">{current.step1Desc}</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10">
                      <div className="w-24 h-24 bg-white border-4 border-teal-500 text-teal-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-2xl font-bold">2</div>
                      <h3 className="text-xl font-bold mb-2">{current.step2Title}</h3>
                      <p className="text-slate-600">{current.step2Desc}</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10">
                      <div className="w-24 h-24 bg-white border-4 border-indigo-500 text-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-2xl font-bold">3</div>
                      <h3 className="text-xl font-bold mb-2">{current.step3Title}</h3>
                      <p className="text-slate-600">{current.step3Desc}</p>
                  </div>
              </div>

              <div className="text-center mt-12">
                   <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                        <Clock className="mr-2" size={20}/> {current.scheduleConsultBtn}
                   </Link>
              </div>
          </div>
      </section>

      {/* Urgent Call to Action */}
      <section className="bg-blue-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold">{current.urgentTitle}</h2>
                  <p className="text-blue-200">{current.urgentDesc}</p>
              </div>
              <a href="sms:6198297899" className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-6 py-3 rounded-md font-bold transition-colors">
                  {current.textBtn}
              </a>
          </div>
      </section>
    </div>
  );
};

export default Home;