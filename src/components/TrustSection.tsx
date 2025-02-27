
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Star, Rocket, Shield, Users, Lock } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';

const TrustSection: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const trustItems = [
    {
      icon: <Star className="h-8 w-8 text-brand-gold" />,
      title: 'מומחיות',
      description: 'צוות רואי חשבון ויועצי מס עם ניסיון של מעל 10 שנים'
    },
    {
      icon: <Rocket className="h-8 w-8 text-brand-gold" />,
      title: 'מהירות',
      description: 'ממוצע של 14 ימי טיפול להשלמת התהליך מרגע קבלת כל המסמכים'
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-gold" />,
      title: 'ללא תשלום מראש',
      description: 'תשלום רק לאחר קבלת ההחזר. אם אין החזר - אין תשלום!'
    },
    {
      icon: <Users className="h-8 w-8 text-brand-gold" />,
      title: 'אלפי לקוחות',
      description: 'יותר מ-5,000 לקוחות מרוצים שקיבלו החזרי מס'
    }
  ];
  
  return (
    <section ref={ref} className={`section bg-gradient-to-b from-white to-gray-50 ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">למה לבחור בנו?</h2>
        <p className="section-subtitle">אנחנו מתמחים בהשגת החזרי מס מקסימליים עבור לקוחותינו, כבר למעלה מעשור</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustItems.map((item, index) => (
            <div key={index} className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="glass-card p-8 text-center">
            <p className="text-sm text-gray-600 mb-2">סה"כ החזרים</p>
            <p className="text-3xl font-bold text-brand-blue">₪{formatNumber(15000000)}+</p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <p className="text-sm text-gray-600 mb-2">החזר ממוצע</p>
            <p className="text-3xl font-bold text-brand-blue">₪{formatNumber(4500)}</p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <p className="text-sm text-gray-600 mb-2">החזרים מוצלחים</p>
            <p className="text-3xl font-bold text-brand-blue">{formatNumber(5000)}+</p>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center bg-white py-3 px-6 rounded-full shadow-sm">
            <Lock className="h-5 w-5 text-brand-blue ml-2" />
            <span className="text-gray-700 font-medium">כל הנתונים שלך מוגנים ומאובטחים</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
