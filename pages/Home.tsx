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
    <div className="animate-fade-in font-sans">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/3 space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {current.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
              {current.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all transform hover:-translate-y-1 shadow-lg">
                {current.bookBtn}
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all">
                {current.viewServicesBtn}
              </Link>
            </div>
          </div>
          
          {/* Hero Card overlay */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center border-b border-white/20 pb-4"><Award className="mr-3 text-yellow-400" size={24}/> {current.whyChooseUs}</h3>
                <ul className="space-y-4">
                    {current.whyItems.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={20} className="mr-3 text-teal-400 shrink-0 mt-0.5"/> 
                        <span className="font-medium text-blue-50 leading-snug">{item}</span>
                      </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{current.servicesTitle}</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{current.servicesDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Service 1 */}
                <div className="bg-slate-50 rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{current.service1Title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">{current.service1Desc}</p>
                    <Link to="/services" className="text-blue-600 font-bold flex items-center hover:underline">{current.learnMore} <ArrowRight size={20} className="ml-2"/></Link>
                </div>

                {/* Service 2 */}
                <div className="bg-slate-50 rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <Award size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{current.service2Title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">{current.service2Desc}</p>
                    <Link to="/services" className="text-teal-600 font-bold flex items-center hover:underline">{current.learnMore} <ArrowRight size={20} className="ml-2"/></Link>
                </div>

                 {/* Service 3 */}
                 <div className="bg-slate-50 rounded-2xl p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Video size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{current.service3Title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">{current.service3Desc}</p>
                    <Link to="/services" className="text-indigo-600 font-bold flex items-center hover:underline">{current.learnMore} <ArrowRight size={20} className="ml-2"/></Link>
                </div>
            </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{current.howItWorksTitle}</h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{current.howItWorksDesc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
                   {/* Connector Line (Desktop) */}
                   <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-slate-200 z-0 rounded-full"></div>

                  {/* Step 1 */}
                  <div className="relative z-10">
                      <div className="w-24 h-24 bg-white border-4 border-blue-500 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-3xl font-bold">1</div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{current.step1Title}</h3>
                      <p className="text-slate-600 leading-relaxed px-4">{current.step1Desc}</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10">
                      <div className="w-24 h-24 bg-white border-4 border-teal-500 text-teal-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-3xl font-bold">2</div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{current.step2Title}</h3>
                      <p className="text-slate-600 leading-relaxed px-4">{current.step2Desc}</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10">
                      <div className="w-24 h-24 bg-white border-4 border-indigo-500 text-indigo-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg text-3xl font-bold">3</div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{current.step3Title}</h3>
                      <p className="text-slate-600 leading-relaxed px-4">{current.step3Desc}</p>
                  </div>
              </div>

              <div className="text-center mt-20">
                   <Link to="/contact" className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        <Clock className="mr-3" size={24}/> {current.scheduleConsultBtn}
                   </Link>
              </div>
          </div>
      </section>

      {/* Urgent Call to Action */}
      <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{current.urgentTitle}</h2>
                  <p className="text-blue-200 text-lg">{current.urgentDesc}</p>
              </div>
              <a href="sms:6198297899" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg whitespace-nowrap">
                  {current.textBtn}
              </a>
          </div>
      </section>
    </div>
  );
};

export default Home;