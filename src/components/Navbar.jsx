import React, { useState } from 'react';

const Navbar = ({ setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (pageName, urlPath) => {
    setPage(pageName);
    window.history.pushState({}, '', urlPath);
    setIsMobileMenuOpen(false); 
  };

  return (
    // تم مسح shadow-sm لضمان عدم ظهور أي خط أو ظل
    <nav className="fixed top-0 left-0 w-full py-5 px-6 lg:px-16 flex justify-between items-center z-50 bg-[#f4f1ea]/95 backdrop-blur-md box-border">
      
      <div className="flex items-center gap-6 lg:gap-12">
        <div 
          className="cursor-pointer flex items-center shrink-0" 
          onClick={() => handleNavigation('home', '/')}
        >
           {/* تم تعديل مسار الصورة هنا ليقرأ من مجلد public مباشرة */}
           <img 
             src="/logo.png" 
             alt="شركة لاماسو" 
             className="h-14 lg:h-20 w-auto object-contain drop-shadow-sm" 
           />
        </div>

        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 text-lg lg:text-xl font-bold list-none m-0 p-0 shrink-0">
          <li className="relative group cursor-pointer pb-2" onClick={() => handleNavigation('home', '/')}>
            <span className="text-[#0d122b] group-hover:text-[#cde000] transition-colors duration-300">الرئيسية</span>
            <span className="absolute bottom-0 right-0 w-0 h-1 bg-[#cde000] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer pb-2" onClick={() => handleNavigation('services', '/services')}>
            <span className="text-[#0d122b] group-hover:text-[#cde000] transition-colors duration-300">الخدمات</span>
            <span className="absolute bottom-0 right-0 w-0 h-1 bg-[#cde000] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer pb-2" onClick={() => handleNavigation('faq', '/faq')}>
            <span className="text-[#0d122b] group-hover:text-[#cde000] transition-colors duration-300">الأسئلة الشائعة</span>
            <span className="absolute bottom-0 right-0 w-0 h-1 bg-[#cde000] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer pb-2" onClick={() => handleNavigation('contact', '/contact')}>
            <span className="text-[#0d122b] group-hover:text-[#cde000] transition-colors duration-300">تواصل معنا</span>
            <span className="absolute bottom-0 right-0 w-0 h-1 bg-[#cde000] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      <button 
        className="lg:hidden flex flex-col gap-1.5 focus:outline-none z-50 shrink-0"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className={`w-8 h-1 bg-[#0d122b] rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
        <div className={`w-8 h-1 bg-[#0d122b] rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-1 bg-[#0d122b] rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
      </button>

      <div 
        className={`absolute top-full left-0 w-full bg-[#f4f1ea] border-t border-gray-300 shadow-xl lg:hidden flex flex-col items-start px-8 gap-6 font-bold text-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-80 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <span className="cursor-pointer text-[#0d122b] hover:text-[#cde000] transition-colors" onClick={() => handleNavigation('home', '/')}>الرئيسية</span>
        <span className="cursor-pointer text-[#0d122b] hover:text-[#cde000] transition-colors" onClick={() => handleNavigation('services', '/services')}>الخدمات</span>
        <span className="cursor-pointer text-[#0d122b] hover:text-[#cde000] transition-colors" onClick={() => handleNavigation('faq', '/faq')}>الأسئلة الشائعة</span>
        <span className="cursor-pointer text-[#0d122b] hover:text-[#cde000] transition-colors" onClick={() => handleNavigation('contact', '/contact')}>تواصل معنا</span>
      </div>
    </nav>
  );
};

export default Navbar;