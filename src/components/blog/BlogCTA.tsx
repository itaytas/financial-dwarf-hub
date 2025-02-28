
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';

const BlogCTA: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 p-8 md:p-12">
              <span className="inline-block bg-blue-100 text-brand-blue text-sm font-medium px-3 py-1 rounded-full mb-5">
                משה קיבל החזר של ₪9,000 - גם אתה יכול!
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                גלה כמה כסף מגיע לך בחזרה עוד היום
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                בדיקת הזכאות שלנו תיקח לך פחות מ-3 דקות,
                ותוכל לגלות מיד כמה כסף אתה יכול לקבל מרשויות המס.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-400 p-1 rounded-full text-white mr-2 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-white">בדיקת זכאות מהירה ופשוטה</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-400 p-1 rounded-full text-white mr-2 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-white">אין התחייבות, ללא תשלום מראש</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-400 p-1 rounded-full text-white mr-2 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-white">אלפי לקוחות מרוצים כבר קיבלו החזרים</span>
                </div>
              </div>
              
              <Link
                to="/eligibility"
                className="inline-flex items-center bg-brand-gold hover:bg-amber-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-colors"
              >
                בדוק זכאותך עכשיו
                <ArrowLeft className="h-5 w-5 mr-2" />
              </Link>
            </div>
            
            <div className="md:w-2/5 relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="בדוק זכאותך להחזר מס"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;
