import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
  return (
    // الخلفية البيجية نفس خلفية واجهة الترحيب
    <section className="w-full py-24 bg-[#f4f1ea] flex justify-center">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        {/* === القسم العلوي: العناوين === */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          
          {/* العنوان (يمين) */}
          <div className="w-full md:w-1/2">
            <span className="text-gray-500 font-bold text-sm tracking-wide mb-2 block">
              لماذا تختار شريك متكامل؟
            </span>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-[#0d122b] leading-[1.2]">
              ثلاثة موردين... <br />
              <span className="font-light">أم واحد؟</span>
            </h2>
          </div>

          {/* النص الوصفي (يسار) */}
          <div className="w-full md:w-1/2 md:text-left">
            <p className="text-xl text-gray-700 font-semibold leading-relaxed max-w-md mx-auto md:ml-0 md:mr-auto">
              تتعامل معظم الشركات مع مصمم واجهات، ومبرمج مستقل، وشركة استضافة — كلٌ على حدة. هكذا يتشتت العمل، وتضيع المسؤولية... وهكذا نغير نحن الواقع.
            </p>
          </div>
        </div>

        {/* === القسم السفلي: البطاقات === */}
        <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* 1. المربع الكحلي (على اليمين) - حل لاماسو */}
          <motion.div 
            className="w-full md:w-1/2 bg-[#080d20] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[450px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* تأثير إضاءة بسيط */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#cde000] opacity-5 blur-[80px] rounded-full"></div>

            <div className="relative z-10">
              <div className="flex justify-end items-center gap-2 mb-10">
                <span className="text-[#cde000] font-bold">لاماسو</span>
                <span className="w-2 h-2 rounded-full bg-[#cde000]"></span>
              </div>

              <h3 className="text-5xl font-extrabold text-white leading-tight mb-12">
                عقد واحد. <br />
                <span className="text-[#cde000] italic">ثلاثة تخصصات.</span>
              </h3>

              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-xl text-white font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cde000]"></span>
                  مدير مشروع واحد. تواصل مباشر.
                </li>
                <li className="flex items-center gap-4 text-xl text-white font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cde000]"></span>
                  كود نظيف متوافق مع التصميم.
                </li>
                <li className="flex items-center gap-4 text-xl text-white font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cde000]"></span>
                  فريق متكامل، بيئة عمل موحدة.
                </li>
              </ul>
            </div>

            <div className="relative z-10 border-t border-white/10 mt-10 pt-6">
              <p className="text-gray-400 text-sm font-semibold">
                شريك تقني واحد. فاتورة واحدة. استقرار تام لمشروعك.
              </p>
            </div>
          </motion.div>

          {/* 2. المربعات الفاتحة (على اليسار) - الطريقة التقليدية */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
            <div className="text-left text-gray-500 font-bold text-sm mb-2">الطريقة المعتادة</div>
            
            {/* بطاقة 1 */}
            <motion.div 
              className="bg-[#e9e6dc] rounded-2xl p-6 lg:p-8 flex justify-between items-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}
            >
              <div>
                <span className="text-gray-500 text-sm font-bold block mb-1">المسؤولية</span>
                <h4 className="text-2xl text-[#0d122b] font-extrabold">ثلاث جهات. ولا أحد يتحمل الخطأ.</h4>
              </div>
              <span className="text-gray-400 font-light text-xl">01</span>
            </motion.div>

            {/* بطاقة 2 */}
            <motion.div 
              className="bg-[#e9e6dc] rounded-2xl p-6 lg:p-8 flex justify-between items-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}
            >
              <div>
                <span className="text-gray-500 text-sm font-bold block mb-1">الأكواد والتصميم</span>
                <h4 className="text-2xl text-[#0d122b] font-extrabold">تصميم جميل. وبرمجة لا تدعمه.</h4>
              </div>
              <span className="text-gray-400 font-light text-xl">02</span>
            </motion.div>

            {/* بطاقة 3 */}
            <motion.div 
              className="bg-[#e9e6dc] rounded-2xl p-6 lg:p-8 flex justify-between items-center border border-gray-200"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }}
            >
              <div>
                <span className="text-gray-500 text-sm font-bold block mb-1">الطاقة التشغيلية</span>
                <h4 className="text-2xl text-[#0d122b] font-extrabold">ثلاث فواتير. ثلاث اختناقات.</h4>
              </div>
              <span className="text-gray-400 font-light text-xl">03</span>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;