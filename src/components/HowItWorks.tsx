
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/utils/animations';
import { Upload, Search, CreditCard, ChevronLeft } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-brand-blue" />,
      title: 'העלה מסמכים',
      description: 'העלה את תלושי המשכורת או דוחות פיננסיים רלוונטיים בקלות דרך המערכת שלנו.'
    },
    {
      icon: <Search className="h-10 w-10 text-brand-blue" />,
      title: 'בדיקת מומחים',
      description: 'המומחים שלנו עוברים על כל הפרטים ופועלים מול רשויות המס להשיג את ההחזר המקסימלי.'
    },
    {
      icon: <CreditCard className="h-10 w-10 text-brand-blue" />,
      title: 'קבל את הכסף',
      description: 'הכסף מועבר ישירות לחשבון הבנק שלך, בדרך כלל תוך 7-14 ימי עסקים.'
    }
  ];
  
  return (
    <section ref={ref} className={`section bg-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">3 צעדים פשוטים להחזר</h2>
        <p className="section-subtitle">תהליך קבלת החזר המס פשוט, יעיל ומהיר – ואנחנו עושים את כל העבודה בשבילך</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              
              {/* Connector Line (between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200 z-0" />
              )}
              
              {/* Step Card */}
              <div className="glass-card p-8 text-center transition-all duration-300 hover:shadow-xl relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="btn-primary group inline-flex items-center">
            <span>התחל עכשיו</span>
            <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
