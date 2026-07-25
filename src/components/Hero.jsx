import React from 'react';
import { motion } from 'framer-motion';
import lamasuImg from '../assets/lamasu.png'; 

// 1. استلام setPage كبروب
const Hero = ({ setPage }) => {
  
  // 2. دالة للتنقل إلى صفحة تواصل معنا
  const navigateToContact = () => {
    setPage('contact'); // تحديث الـ State لعرض الصفحة
    window.history.pushState({}, '', '/contact'); // تحديث الرابط في المتصفح
    window.scrollTo(0, 0); // العودة لبداية الصفحة فوق
  };

  return (
    // إزالة min-h-screen وتقليل المسافات (Padding) المكررة
    <section className="relative w-full bg-[#f4f1ea] pt-16 pb-8 lg:pt-24 lg:pb-12 overflow-hidden">
      
      {/* حاوية رئيسية تضمن ترتيب العناصر جنباً إلى جنب بالشاشات الكبيرة وفوق بعض بالشاشات الصغيرة */}
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* 1. قسم الصورة (على اليمين) */}
        <motion.div 
          className="w-full md:w-[55%] flex justify-center md:justify-start items-center relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src={lamasuImg} 
            alt="لاماسو" 
            className="w-full max-w-[400px] lg:max-w-[600px] object-contain drop-shadow-2xl md:ml-[-40px]"
          />
        </motion.div>

        {/* 2. قسم النصوص (على اليسار) */}
        <motion.div 
          className="w-full md:w-[45%] flex flex-col items-start gap-6 lg:gap-8 z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] text-[#0d122b]">
            مستعد تسوي <br/>
            <span className="relative inline-block mt-2">
              ويب سايت؟
              <span className="absolute bottom-2 lg:bottom-4 right-0 w-full h-3 lg:h-5 bg-[#cde000] -z-10"></span>
            </span>
          </h1>
          
          <p className="text-lg lg:text-2xl text-gray-700 max-w-lg leading-relaxed font-semibold mt-2">
            نحول أفكارك إلى منتجات برمجية نطلقها، ونشغلها، ونوقع عليها باسمنا. حلول تقنية متكاملة بانتظارك.
          </p>
          
          {/* 3. إضافة onClick للدالة */}
          <button 
            onClick={navigateToContact}
            className="mt-4 px-10 py-4 bg-[#0d122b] text-[#cde000] rounded-full hover:bg-[#cde000] hover:text-[#0d122b] transition-all duration-300 font-bold text-xl lg:text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            تواصل معنا
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;