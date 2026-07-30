import React, { useState } from 'react';

const ContactPage = () => {
  // حالة (State) لحفظ بيانات الفورمة
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '', // تمت إضافة الهاتف بناءً على تصميمك
    Email: '',
    Message: ''
  });

  // حالة للتحكم برسائل النجاح أو الخطأ
  const [status, setStatus] = useState({ message: '', type: '' });
  // حالة للتحكم بزر الإرسال أثناء التحميل
  const [isSubmitting, setIsSubmitting] = useState(false);

  // دالة لتحديث البيانات عند الكتابة
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // دالة إرسال البيانات إلى الـ API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: 'جاري الإرسال...', type: 'info' });

    try {
      // جلب الرابط من ملف .env
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/Contact`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ message: data.message || 'تم استلام رسالتك بنجاح!', type: 'success' });
        // تفريغ الحقول بعد النجاح
        setFormData({ Name: '', Phone: '', Email: '', Message: '' });
      } else {
        setStatus({ message: 'حدث خطأ يرجى التأكد من البيانات المدخلة.', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ message: 'عذراً، لا يمكن الاتصال بالخادم حالياً.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f4f1ea] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        {/* عنوان الصفحة */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0d122b] mb-4">
            تواصل <span className="relative inline-block text-[#0d122b] px-2">
              معنا
              <span className="absolute bottom-2 right-0 w-full h-1/2 bg-[#cde000] -z-10 rounded-sm"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-semibold mt-4">
            نحن هنا للإجابة على استفساراتك والبدء في تحويل أفكارك إلى واقع.
          </p>
        </div>

        {/* تقسيم الصفحة: فورمة ومعلومات / خريطة */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
          
          {/* القسم الأول: معلومات الاتصال وفورمة المراسلة */}
          <div className="space-y-8">
            
            {/* معلومات الاتصال السريعة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#f4f1ea] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#0d122b] text-[#cde000] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-[#0d122b] mb-1">اتصل بنا</h3>
                <p className="text-gray-600 font-medium" dir="ltr">+964 780 000 0000</p>
              </div>

              <div className="bg-[#f4f1ea] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-[#0d122b] text-[#cde000] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-[#0d122b] mb-1">موقعنا</h3>
                <p className="text-gray-600 font-medium">العراق، بابل، الحلة</p>
              </div>
            </div>

            {/* فورمة المراسلة */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0d122b] font-bold mb-2">الاسم الكامل</label>
                  <input 
                    type="text" 
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    placeholder="اكتب اسمك هنا" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#cde000] focus:ring-0 transition-colors outline-none bg-gray-50 focus:bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-[#0d122b] font-bold mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXXX" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#cde000] focus:ring-0 transition-colors outline-none bg-gray-50 focus:bg-white text-right" 
                    dir="ltr" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[#0d122b] font-bold mb-2">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                  placeholder="example@lamassu.com" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#cde000] focus:ring-0 transition-colors outline-none bg-gray-50 focus:bg-white text-right" 
                  dir="ltr" 
                />
              </div>

              <div>
                <label className="block text-[#0d122b] font-bold mb-2">رسالتك</label>
                <textarea 
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder="كيف يمكننا مساعدتك؟" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#cde000] focus:ring-0 transition-colors outline-none bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              {/* عرض حالة الإرسال (نجاح أو خطأ) */}
              {status.message && (
                <div className={`p-4 rounded-xl font-bold ${
                  status.type === 'success' ? 'bg-green-100 text-green-700' : 
                  status.type === 'error' ? 'bg-red-100 text-red-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full font-bold text-lg py-4 rounded-xl transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-[#0d122b] text-white hover:bg-[#cde000] hover:text-[#0d122b]'
                }`}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>

          {/* القسم الثاني: خريطة الموقع (iframe) */}
          <div className="h-[400px] lg:h-full w-full rounded-2xl overflow-hidden shadow-inner border-2 border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106990.22295627237!2d44.36442655!3d32.4831608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155986e680a6dcd1%3A0x6b498e94ed3c4cc0!2sHillah%2C%20Iraq!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              className="w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة لاماسو"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;