import React from 'react';
import { Video, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Telehealth: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Telehealth Waiting Room",
      subtitle: "Secure, HIPAA-Compliant Virtual Sessions",
      desc: "Welcome to our virtual office. Please click the button below or wait for the room to load to check in for your appointment. No download is required.",
      tipsTitle: "Tips for a successful session:",
      tips: [
        "Ensure you have a stable internet connection.",
        "Use a private, quiet space.",
        "Use a device with a working camera and microphone (Computer, Tablet, or Smartphone).",
        "Please check in 5 minutes before your scheduled time."
      ],
      openBtn: "Open Waiting Room in New Window"
    },
    es: {
      title: "Sala de Espera de Telemedicina",
      subtitle: "Sesiones Virtuales Seguras y Cumplidoras de HIPAA",
      desc: "Bienvenido a nuestra oficina virtual. Haga clic en el botón a continuación o espere a que cargue la sala para registrarse para su cita. No se requiere descarga.",
      tipsTitle: "Consejos para una sesión exitosa:",
      tips: [
        "Asegúrese de tener una conexión a Internet estable.",
        "Use un espacio privado y tranquilo.",
        "Use un dispositivo con cámara y micrófono que funcionen (Computadora, Tableta o Teléfono inteligente).",
        "Por favor regístrese 5 minutos antes de su hora programada."
      ],
      openBtn: "Abrir Sala de Espera en Nueva Ventana"
    }
  };

  const current = language === 'en' ? content.en : content.es;

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in">
      {/* Header */}
      <div className="bg-white shadow-sm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
            <Video size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{current.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{current.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Iframe Area */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
               <div className="aspect-[4/3] md:aspect-video w-full h-[600px] md:h-[800px]">
                 <iframe 
                   src="https://doxy.me/newconceptsinrecovery" 
                   allow="camera; microphone; display-capture" 
                   className="w-full h-full border-0"
                   title="Doxy.me Waiting Room"
                 ></iframe>
               </div>
            </div>
            <div className="mt-4 text-center lg:hidden">
                <a 
                  href="https://doxy.me/newconceptsinrecovery" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-bold hover:underline"
                >
                  {current.openBtn}
                </a>
            </div>
          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-1 order-1 lg:order-2 space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                   <ShieldCheck className="mr-2 text-teal-500" /> Secure Connection
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                   {current.desc}
                </p>
             </div>

             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                   <Clock className="mr-2" /> {current.tipsTitle}
                </h3>
                <ul className="space-y-3">
                   {current.tips.map((tip, idx) => (
                     <li key={idx} className="flex items-start text-sm text-blue-800">
                       <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 shrink-0"></span>
                       {tip}
                     </li>
                   ))}
                </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Telehealth;