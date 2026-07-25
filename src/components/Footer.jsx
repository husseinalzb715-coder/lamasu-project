import React from 'react';

const Footer = () => {
  return (
    // خلفية الفوتر كحلية غامقة
    <footer className="w-full bg-[#080d20] pt-16 pb-8 border-t border-[#12193b]">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        {/* === القسم العلوي للفوتر === */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-white/10">
          
          {/* الجانب الأيمن: الشعار والعبارة */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
             <div className="text-4xl font-extrabold tracking-widest text-white">
<span className="font-black tracking-widest text-white text-2xl md:text-3xl">
  LAM<span className="text-[#cde000]">A</span>SSU
</span>
             </div>
             <p className="text-[#cde000] text-2xl font-bold italic mt-2">
                "الأمان يبدأ من أول سطر كود."
             </p>
             <p className="text-gray-400 max-w-sm mt-2 leading-relaxed">
                شركة مختصة بتقديم حلول برمجية متكاملة، وآمنة، وقابلة للتوسع لتلبية كافة احتياجات أعمالك.
             </p>
          </div>

          {/* الجانب الأيسر: معلومات التواصل */}
          <div className="w-full md:w-1/2 flex flex-col md:items-end gap-4 text-gray-300 font-semibold">
             <h4 className="text-white text-xl font-bold mb-2">تواصل معنا</h4>
             
             {/* الايميل */}
             <div className="flex flex-row-reverse md:flex-row items-center justify-end gap-3 hover:text-[#cde000] transition-colors cursor-pointer">
                <span>info@lamassu.iq</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </div>
             
             {/* الأرقام */}
             <div className="flex flex-row-reverse md:flex-row items-center justify-end gap-3 hover:text-[#cde000] transition-colors cursor-pointer">
                <span dir="ltr">+964 780 000 0000</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
             </div>
             
             {/* العنوان */}
             <div className="flex flex-row-reverse md:flex-row items-center justify-end gap-3 text-right">
                <span>العراق، محافظة بابل، مدينة الحلة</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
          </div>

        </div>

        {/* === القسم السفلي للفوتر (الحقوق ومواقع التواصل) === */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 gap-6">
           
           {/* الحقوق (على اليمين) */}
           <div className="text-gray-400 text-sm font-semibold">
              © 2026 شركة لاماسو للحلول التقنية. جميع الحقوق محفوظة.
           </div>

           {/* مواقع التواصل الاجتماعي (على اليسار) في دوائر مثل الصورة */}
           <div className="flex items-center gap-4">
              
              {/* أيقونة فيسبوك */}
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#cde000] hover:text-[#cde000] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              
              {/* أيقونة انستغرام */}
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#cde000] hover:text-[#cde000] transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              
              {/* أيقونة X (تويتر) */}
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#cde000] hover:text-[#cde000] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              
              {/* أيقونة لينكد إن */}
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#cde000] hover:text-[#cde000] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;