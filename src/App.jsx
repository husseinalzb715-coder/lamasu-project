import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Comparison from './components/Comparison';
import ServicesPage from './components/ServicesPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  // دالة لتحديد الصفحة الحالية بناءً على الرابط في المتصفح
  const getInitialPage = () => {
    const path = window.location.pathname;
    if (path === '/services') return 'services';
    if (path === '/faq') return 'faq';
    if (path === '/contact') return 'contact';
    return 'home';
  };
  
  // تعيين الصفحة الحالية في الـ State
  const [page, setPage] = useState(getInitialPage());

  // الاستماع لتغييرات الرابط (عند استخدام أزرار الرجوع والتقدم في المتصفح)
  useEffect(() => {
    const handlePopState = () => {
      setPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#f4f1ea]" dir="rtl">
      {/* النافبار يظهر دائماً في كل الصفحات */}
      <Navbar setPage={setPage} />
      
      {/* التحكم بعرض الصفحات بناءً على الـ State */}
      {page === 'home' ? (
        <>
          {/* تمرير setPage لزر تواصل معنا */}
          <Hero setPage={setPage} />
          {/* تمرير setPage لزر استكشاف الخدمات */}
          <Services setPage={setPage} />
          <Comparison />
        </>
      ) : page === 'services' ? (
        <ServicesPage />
      ) : page === 'faq' ? (
        /* تمرير setPage لزر تواصل معنا داخل الـ FAQ تم تصحيح التعليق هنا */
        <FAQPage setPage={setPage} />
      ) : page === 'contact' ? ( 
        <ContactPage />
      ) : null}

      {/* الفوتر يظهر دائماً في كل الصفحات */}
      <Footer />
    </div>
  );
}

export default App;