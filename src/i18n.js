import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      nav: { home: "الرئيسية", services: "الخدمات", faq: "الأسئلة الشائعة", contact: "تواصل معنا" },
      hero: {
        title: "مستعد تسوي",
        highlight: "ويب سايت؟",
        subtitle: "نحول أفكارك إلى منتجات برمجية نطلقها، ونشغلها، ونوقع عليها باسمنا. حلول تقنية متكاملة بانتظارك.",
        cta: "تواصل معنا"
      }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", services: "Services", faq: "FAQ", contact: "Contact Us" },
      hero: {
        title: "Ready to build a",
        highlight: "Website?",
        subtitle: "We turn your ideas into software products we launch, operate, and sign with our name. Integrated tech solutions await you.",
        cta: "Contact Us"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;