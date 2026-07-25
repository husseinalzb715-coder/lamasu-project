import React from 'react';
import { motion } from 'framer-motion';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const ServicesPage = () => {
  // 5 خدمات فقط
  const services = [
    {
      id: '01',
      title: 'الأمان السيبراني وحماية الأنظمة',
      desc: 'نوفر بيئة رقمية درعها لا يُخترق. نقدم فحوصات دقيقة واختبارات اختراق (Penetration Testing) متقدمة لتأمين مواقعك وتطبيقاتك. نعالج الثغرات الأمنية ونضمن حماية بياناتك من أي هجمات سيبرانية.',
      features: ['اختبار الاختراق', 'تشفير متقدم', 'معالجة الثغرات'],
      textRight: true,
      image: image1,
    },
    {
      id: '02',
      title: 'بناء وتطوير المواقع الإلكترونية',
      desc: 'نحن لا نصمم مواقع فقط، بل نبني تجارب مستخدم إبداعية. نبرمج مواقع تفاعلية باستخدام أحدث التقنيات مثل React و Next.js و ASP.NET لتكون متوافقة تماماً مع كافة الشاشات وبأداء فائق السرعة.',
      features: ['واجهات UI/UX إبداعية', 'تطوير Full-Stack', 'أداء عالي'],
      textRight: false,
      image: image2,
    },
    {
      id: '03',
      title: 'تطوير تطبيقات الهواتف الذكية',
      desc: 'مهما كانت فكرتك معقدة، نحن نحولها إلى تطبيق واقعي سلس وقابل للتوسع. نبني تطبيقات أصلية وهجينة تعمل بكفاءة على جميع المنصات (iOS و Android) لتصل إلى مستخدميك أينما كانوا.',
      features: ['iOS & Android', 'تجربة مستخدم سلسة', 'تكامل شامل'],
      textRight: true,
      image: image3,
    },
    {
      id: '04',
      title: 'حلول الذكاء الاصطناعي وتعلم الآلة',
      desc: 'نجعل الأنظمة تفكر من أجلك. نقوم ببناء وتدريب نماذج ذكاء اصطناعي وتعلم عميق (Deep Learning) مخصصة لتلبي احتياجاتك بدقة، من تحليل الأنماط إلى أتمتة العمليات المعقدة.',
      features: ['نماذج مخصصة', 'تحليل البيانات', 'أتمتة العمليات'],
      textRight: false,
      image: image4,
    },
    {
      id: '05',
      title: 'الحوسبة السحابية واستضافة الأنظمة',
      desc: 'نوفر بيئات استضافة سحابية آمنة ومستقرة، وقواعد بيانات قوية (مثل PostgreSQL) تضمن بقاء خدماتك متاحة 24/7 مع قدرة عالية على التوسع التلقائي عند زيادة ضغط المستخدمين.',
      features: ['استضافة سحابية', 'قواعد بيانات آمنة', 'نسخ احتياطي'],
      textRight: true,
      image: image5,
    }
  ];

  return (
    <div className="w-full bg-[#f4f1ea] pt-26 pb-24 min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        {/* عنوان الصفحة مع حركة بسيطة من الأسفل */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0d122b] leading-tight">
            خدمات <span className="text-[#cde000]">لاماسو</span>
          </h1>
          <p className="text-xl text-gray-600 font-semibold mt-4">
            حلول برمجية وتقنية متكاملة صُممت لتدفع أعمالك نحو المستقبل.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* ضفنا index علمود نعرف رقم الخدمة (فردي أو زوجي) */}
          {services.map((service, index) => {
            
            // تحديد إذا كانت الخدمة فردية (الاندكس 0, 2, 4 يعني الخدمات 1, 3, 5)
            const isOdd = index % 2 === 0;

            // اتجاه حركة النص:
            // في الفردي: يجي من اليمين (100) | في الزوجي: يجي من اليسار (-100)
            const textInitialX = isOdd ? 100 : -100;

            // اتجاه حركة الصورة (عكس النص دائماً):
            // في الفردي: تجي من اليسار (-100) | في الزوجي: تجي من اليمين (100)
            const imageInitialX = isOdd ? -100 : 100;

            return (
              <div 
                key={service.id}
                className={`flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 ${!service.textRight ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* === قسم النصوص (يتحرك حسب textInitialX) === */}
                <motion.div 
                  className="w-full md:flex-1 flex flex-col items-start justify-center gap-4"
                  initial={{ opacity: 0, x: textInitialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <span className="text-[#0d122b] text-6xl font-light opacity-50 block mb-2">{service.id}</span>
                  <span className="text-gray-500 font-bold text-sm tracking-wide">خدمة - {service.id}</span>
                  
                  <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0d122b] leading-tight mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg lg:text-xl text-gray-700 font-semibold leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {service.features.map((feat, i) => (
                      <span key={i} className="px-4 py-2 bg-[#0d122b]/5 text-[#0d122b] font-bold text-sm rounded-full border border-[#0d122b]/10 whitespace-nowrap">
                        {feat}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* === قسم الصورة (يتحرك حسب imageInitialX) === */}
                <motion.div 
                  className="w-full md:flex-1 rounded-3xl overflow-hidden shadow-2xl relative group bg-white shrink-0"
                  initial={{ opacity: 0, x: imageInitialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  // ضفنا تأخير 0.2 ثانية للصورة حتى تنطي تأثير متسلسل يجنن
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
                  viewport={{ once: true, amount: 0.2 }}
                >
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-in-out block"
                   />
                   <div className="absolute inset-0 bg-[#0d122b]/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;