import React from 'react';
import { motion } from 'framer-motion';
import screensImg from '../assets/screens.png'; 

// 1. استلام setPage كبروب
const Services = ({ setPage }) => {

  // 2. دالة للتنقل إلى صفحة الخدمات تفصيلية (ServicesPage)
  const navigateToServicesPage = () => {
    setPage('services'); // تحديث الـ State لعرض الصفحة
    window.history.pushState({}, '', '/services'); // تحديث الرابط في المتصفح
    window.scrollTo(0, 0); // العودة لبداية الصفحة فوق
  };

  return (
    // الخلفية الكحلية الغامقة الأساسية للسكشن كله
    <section className="relative w-full py-24 bg-[#080d20] flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-16 w-full max-w-7xl">
        
        {/* حاوية تجمع النصوص والصورة */}
        <motion.div 
          className="w-full flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* قسم النصوص (على اليمين) - بدون مربع خلفي */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-6 z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              نقدم جميع الحلول <br />
              <span className="text-[#cde000]">التقنية المتكاملة</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              من تصميم وتطوير المواقع والتطبيقات، إلى حلول السحابة والأمن السيبراني. نحن نبني منتجات رقمية قابلة للتوسع وتلبي احتياجات عملك بالكامل.
            </p>
            
            {/* 3. إضافة onClick للدالة */}
            <button 
              onClick={navigateToServicesPage}
              className="mt-4 px-8 py-3 bg-[#cde000] text-[#0d122b] rounded-full hover:bg-white transition-all duration-300 font-bold text-xl flex items-center gap-3 group shadow-[0_0_15px_rgba(205,224,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              اكتشف جميع الخدمات
            </button>
          </div>

          {/* قسم الصورة (على اليسار) - هنا خلينا المربع النيلي */}
          <div className="w-full md:w-1/2 flex justify-center lg:justify-end items-center relative">
              
             {/* المربع النيلي كخلفية للصورة */}
             <div className="w-full max-w-[550px] lg:max-w-[650px] bg-[#12193b] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative flex items-center justify-center min-h-[300px]">
                
                {/* تأثير الإضاءة الفسفورية المخفية خلف الصورة */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#cde000] rounded-full opacity-10 blur-[60px] z-0"></div>

                <img 
                  src={screensImg} 
                  alt="شاشات عرض الخدمات" 
                  // الصورة راح تكون فوق الإضاءة والمربع
                  className="w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
                />
             </div>

          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Services;