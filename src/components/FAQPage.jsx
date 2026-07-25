import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. استلام setPage كبروب
const FAQPage = ({ setPage }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 2. دالة للتنقل إلى صفحة تواصل معنا
  const navigateToContact = () => {
    setPage('contact'); // تحديث الـ State لعرض الصفحة
    window.history.pushState({}, '', '/contact'); // تحديث الرابط في المتصفح
    window.scrollTo(0, 0); // العودة لبداية الصفحة فوق
  };

  const faqs = [
    {
      question: "ما هي الخدمات الأساسية التي تقدمها لاماسو؟",
      answer: "نقدم حلولاً برمجية متكاملة تشمل الأمان السيبراني واختبار الاختراق، بناء وتطوير المواقع وتطبيقات الهواتف، برمجة نماذج الذكاء الاصطناعي، وتأسيس البنية التحتية والاستضافة السحابية."
    },
    {
      question: "كم يستغرق بناء موقع أو تطبيق إلكتروني؟",
      answer: "يعتمد الوقت على تعقيد المشروع والميزات المطلوبة. المشاريع المتوسطة عادةً ما تستغرق من 4 إلى 8 أسابيع، بدءاً من مرحلة التخطيط وتصميم واجهات المستخدم (UI/UX) وحتى الفحص والإطلاق النهائي."
    },
    {
      question: "هل توفرون خدمات الاستضافة والدعم الفني بعد الإطلاق؟",
      answer: "نعم، نوفر استضافة سحابية آمنة ومستقرة لضمان بقاء نظامك متاحاً 24/7. كما نقدم باقات دعم فني وصيانة دورية لمعالجة أي مشاكل وتحديث النظام بشكل مستمر."
    },
    {
      question: "كيف تضمنون أمان المواقع والتطبيقات التي تبنونها؟",
      answer: "الأمان هو أولويتنا. نقوم بتطبيق أعلى معايير التشفير وإجراء اختبارات اختراق (Penetration Testing) دورية للأنظمة لاكتشاف ومعالجة أي ثغرات أمنية قبل استغلالها، مما يضمن حماية تامة لبياناتك."
    },
    {
      question: "هل يمكنكم دمج الذكاء الاصطناعي (AI) في نظامي الحالي؟",
      answer: "بالتأكيد. يمكننا تدريب وبناء نماذج ذكاء اصطناعي وتعلم آلي (Machine Learning) مخصصة لتحليل البيانات، أتمتة العمليات المعقدة، ودمجها بسلاسة مع أنظمتك الحالية لزيادة الإنتاجية."
    },
    {
      question: "ما هي التقنيات ولغات البرمجة التي تستخدمونها؟",
      answer: "نعتمد على أحدث التقنيات وأكثرها استقراراً، مثل React و Next.js لتطوير الواجهات الأمامية، و Node.js و ASP.NET و PostgreSQL للخوادم وقواعد البيانات، مما يضمن أداءً فائقاً وقابلية للتوسع."
    },
    {
      question: "هل التطبيقات التي تبنونها تعمل على نظامي iOS و Android؟",
      answer: "نعم، نقوم بتطوير تطبيقات هواتف ذكية (أصلية وهجينة) تعمل بكفاءة عالية على كل من أجهزة آبل وأندرويد، لتصل إلى جميع مستخدميك بتجربة سلسة وموحدة."
    },
    {
      question: "هل يمكننا طلب تعديلات أو إضافة ميزات بعد تسليم المشروع؟",
      answer: "نحن نؤمن بالمرونة والتطوير المستمر. يمكنك دائماً طلب إضافة ميزات جديدة أو تعديل أجزاء من النظام، وسنقوم بتنفيذها ضمن خطط التطوير الخاصة بنا."
    },
    {
      question: "كيف يتم تحديد تكلفة المشروع؟",
      answer: "يتم تحديد التكلفة بشفافية بناءً على حجم المشروع، تعقيد الميزات، والتقنيات المستخدمة. بعد الجلسة الاستشارية الأولى وفهم متطلباتك بدقة، نقدم لك عرض سعر تفصيلي بخطة زمنية واضحة."
    },
    {
      question: "كيف يمكنني البدء بمشروع جديد مع لاماسو؟",
      answer: "الأمر بسيط جداً! يمكنك التواصل معنا عبر صفحة 'تواصل معنا' أو عبر أرقامنا المتاحة. سيقوم فريقنا بترتيب اجتماع أولي لمناقشة فكرتك وتحويلها إلى خطة عمل تنفيذية."
    }
  ];

  return (
    <div className="w-full bg-[#f4f1ea] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        
        {/* عنوان الصفحة */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0d122b] mb-4">
            الأسئلة <span className="relative inline-block text-[#0d122b] px-2">
              الشائعة
              <span className="absolute bottom-2 right-0 w-full h-1/2 bg-[#cde000] -z-10 rounded-sm"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-semibold mt-4">
            كل ما تحتاج معرفته عن خدماتنا وآلية عملنا في لاماسو.
          </p>
        </div>

        {/* قائمة الأسئلة */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#0d122b] bg-white shadow-lg' : 'border-gray-200 bg-white/50 hover:bg-white'
                }`}
              >
{/* رأس السؤال */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-right focus:outline-none gap-4"
                >
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#0d122b]' : 'text-gray-700'}`}>
                    {faq.question}
                  </h3>
                  
                  {/* الدائرة والأيقونات (موسنترة 100% باستخدام SVG) */}
                  <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#cde000] rotate-180' : 'bg-[#0d122b]'}`}>
                    {isOpen ? (
                      // علامة الناقص
                      <svg className="w-5 h-5 text-[#0d122b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      // علامة الزائد
                      <svg className="w-5 h-5 text-[#cde000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
                      </svg>
                    )}
                  </div>
                </button>

                {/* الإجابة (تفتح وتغلق بحركة ناعمة) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed font-medium border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* دعوة لاتخاذ إجراء (Call to Action) */}
        <div className="mt-16 text-center bg-[#0d122b] rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#cde000] opacity-20 blur-[50px] rounded-full"></div>
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-gray-300 mb-8 relative z-10 text-lg">فريقنا التقني مستعد للرد على كافة استفساراتك ومناقشة متطلبات مشروعك.</p>
          
          {/* 3. إضافة onClick للدالة */}
          <button 
            onClick={navigateToContact}
            className="relative z-10 px-8 py-3 bg-[#cde000] text-[#0d122b] rounded-full hover:bg-white transition-all duration-300 font-bold text-lg"
          >
            تواصل معنا الآن
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQPage;