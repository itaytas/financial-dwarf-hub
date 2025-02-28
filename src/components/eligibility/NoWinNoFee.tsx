
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Link } from 'react-router-dom';
import { Shield, Check, ArrowRight } from 'lucide-react';

const NoWinNoFee: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`section bg-gray-50 ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-brand-blue p-8 text-white flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
                  <Shield className="h-14 w-14" />
                </div>
                <h2 className="text-3xl font-bold mb-4">אם לא קיבלת החזר, לא תשלם!</h2>
                <p className="mb-6">
                  אנו גובים תשלום רק לאחר שהשגנו עבורך החזר מס בפועל. אם מסיבה כלשהי לא נצליח להשיג החזר, לא תשלם דבר!
                </p>
                <Link 
                  to="/terms" 
                  className="inline-block border border-white/60 hover:border-white text-white py-2 px-4 rounded-lg transition-colors"
                >
                  קרא את תנאי השימוש המלאים
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="font-bold text-xl mb-4">מה מבטיחה השיטה שלנו?</h3>
              
              <ul className="space-y-4">
                <li className="flex">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold">שקיפות מלאה</p>
                    <p className="text-gray-600">תמיד תדע בדיוק מה קורה בתיק שלך ומה הסטטוס</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold">אפס סיכון</p>
                    <p className="text-gray-600">רק אם נשיג לך החזר, תשלם עמלה (בד"כ 20% מסכום ההחזר)</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold">חיסכון בזמן</p>
                    <p className="text-gray-600">אנחנו מטפלים בכל הבירוקרטיה מולך רשויות המס</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold">ליווי אישי</p>
                    <p className="text-gray-600">מומחה אישי ילווה אותך לאורך כל התהליך</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="btn-secondary inline-flex items-center"
                >
                  בדוק אם אתה זכאי
                  <ArrowRight className="h-5 w-5 mr-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoWinNoFee;
