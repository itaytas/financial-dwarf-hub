
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Lock } from 'lucide-react';

interface FooterProps {
  language: 'he' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const year = new Date().getFullYear();
  
  const translations = {
    he: {
      financialDwarf: 'הגמד הפיננסי',
      description: 'המומחים להחזרי מס בישראל, מסייעים ללקוחות לקבל את הכסף שמגיע להם מרשויות המס.',
      quickNav: 'ניווט מהיר',
      home: 'בית',
      howItWorks: 'איך זה עובד',
      about: 'מי אנחנו',
      blog: 'בלוג',
      contact: 'צור קשר',
      taxRefunds: 'החזרי מס',
      employeeRefund: 'החזר מס לשכירים',
      freelanceRefund: 'החזר מס לעצמאים',
      pensionRefund: 'החזר מס לפנסיונרים',
      medicalRefund: 'החזר מס על הוצאות רפואיות',
      checkEligibility: 'בדיקת זכאות',
      updates: 'קבלו עדכונים',
      newsletter: 'הירשמו לניוזלטר שלנו לקבלת עדכונים ומידע חשוב',
      yourEmail: 'האימייל שלך',
      ssl: 'SSL מאובטח',
      rights: '© {year} הגמד הפיננסי | כל הזכויות שמורות',
      privacy: 'מדיניות פרטיות',
      terms: 'תנאי שימוש',
      sitemap: 'מפת האתר'
    },
    ar: {
      financialDwarf: 'القزم المالي',
      description: 'خبراء استرداد الضرائب في إسرائيل، نساعد العملاء على استعادة أموالهم من سلطات الضرائب.',
      quickNav: 'تصفح سريع',
      home: 'الرئيسية',
      howItWorks: 'كيف يعمل',
      about: 'من نحن',
      blog: 'مدونة',
      contact: 'اتصل بنا',
      taxRefunds: 'استرداد الضرائب',
      employeeRefund: 'استرداد ضريبي للموظفين',
      freelanceRefund: 'استرداد ضريبي للمستقلين',
      pensionRefund: 'استرداد ضريبي للمتقاعدين',
      medicalRefund: 'استرداد ضريبي للنفقات الطبية',
      checkEligibility: 'التحقق من الأهلية',
      updates: 'احصل على التحديثات',
      newsletter: 'اشترك في نشرتنا الإخبارية للحصول على التحديثات والمعلومات المهمة',
      yourEmail: 'بريدك الإلكتروني',
      ssl: 'SSL آمن',
      rights: '© {year} القزم المالي | جميع الحقوق محفوظة',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      sitemap: 'خريطة الموقع'
    }
  };
  
  const t = translations[language];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Financial Dwarf"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-bold ml-2">{t.financialDwarf}</span>
            </Link>
            <p className="text-gray-400 mb-6">
              {t.description}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t.quickNav}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">{t.home}</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">{t.howItWorks}</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t.about}</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">{t.blog}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t.contact}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t.taxRefunds}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/refunds/employee" className="text-gray-400 hover:text-white transition-colors">{t.employeeRefund}</Link>
              </li>
              <li>
                <Link to="/refunds/freelance" className="text-gray-400 hover:text-white transition-colors">{t.freelanceRefund}</Link>
              </li>
              <li>
                <Link to="/refunds/pension" className="text-gray-400 hover:text-white transition-colors">{t.pensionRefund}</Link>
              </li>
              <li>
                <Link to="/refunds/medical" className="text-gray-400 hover:text-white transition-colors">{t.medicalRefund}</Link>
              </li>
              <li>
                <Link to="/refunds/eligibility" className="text-gray-400 hover:text-white transition-colors">{t.checkEligibility}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t.updates}</h3>
            <p className="text-gray-400 mb-4">{t.newsletter}</p>
            
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t.yourEmail}
                  className="bg-gray-800 text-white px-4 py-2 rounded-r-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <button
                  type="submit"
                  className="bg-brand-blue px-4 py-2 rounded-l-lg"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            
            <div className="flex items-center text-gray-400">
              <Lock className="h-4 w-4 ml-2" />
              <span className="text-sm">{t.ssl}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t.rights.replace('{year}', year.toString())}
            </p>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t.privacy}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t.terms}
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t.sitemap}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
