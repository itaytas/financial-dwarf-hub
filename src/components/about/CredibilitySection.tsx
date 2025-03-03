
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { BadgeCheck, CheckCheck, Star } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';

const CredibilitySection = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const metrics = [
    {
      value: "₪20M+",
      label: "סך הכל הוחזר ללקוחות"
    },
    {
      value: "₪8,000",
      label: "החזר ממוצע"
    },
    {
      value: formatNumber(5000) + "+",
      label: "לקוחות מרוצים"
    },
    {
      value: "98%",
      label: "אחוז הצלחה בהחזרים"
    }
  ];
  
  const certifications = [
    "חברים בלשכת רואי החשבון בישראל",
    "מורשים לייצוג מול רשות המסים",
    "בעלי תעודת סוכן פנסיוני",
    "חברים בהתאחדות יועצי המס"
  ];
  
  const testimonials = [
    {
      quote: "תודות לגמד הפיננסי, קיבלתי החזר של ₪10,000!",
      author: "אבי ג., חיפה"
    },
    {
      quote: "פנייה אחת חסכה לי המון זמן והביאה לי ₪6,500 בחזרה.",
      author: "מיכל ס., תל אביב"
    },
    {
      quote: "שירות מעולה, צוות מקצועי ותוצאות מרשימות!",
      author: "יוסי ק., ירושלים"
    }
  ];

  return (
    <section ref={ref} className={`py-16 bg-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">למה לבחור בנו?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Metrics */}
          <div>
            <h3 className="text-2xl font-bold mb-6">המספרים מדברים</h3>
            
            <div className="glass-card">
              <div className="grid grid-cols-2 divide-x-2 rtl:divide-x-reverse divide-y-2">
                {metrics.map((metric, index) => (
                  <div key={index} className="p-6 text-center">
                    <p className="text-2xl font-bold text-brand-blue mb-2">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">תעודות והסמכות</h3>
            
            <div className="glass-card p-6">
              <ul className="space-y-4">
                {certifications.map((certification, index) => (
                  <li key={index} className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-brand-blue ml-2 mt-0.5 flex-shrink-0" />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold mb-6">לקוחות מספרים</h3>
            
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex text-brand-gold mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">"{testimonial.quote}"</p>
                  <p className="text-sm text-gray-500">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Case Study */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">סיפור הצלחה</h3>
          
          <div className="glass-card p-8 border-r-4 border-brand-gold">
            <h4 className="text-xl font-bold mb-4">איך חסכנו לאחות ₪7,000</h4>
            
            <p className="mb-4">
              שרה, אחות במקצועה עם ותק של 8 שנים, לא ידעה שהיא זכאית להחזרי מס על נסיעות, השתלמויות מקצועיות וביטוח אובדן כושר עבודה.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-bold mb-2">האתגר:</p>
              <p>התיקים הכספיים של שרה היו מפוזרים ולא מאורגנים, והיא לא הייתה בטוחה לגבי זכויותיה.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-bold mb-2">הפתרון שלנו:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCheck className="h-4 w-4 text-brand-blue ml-2 mt-1 flex-shrink-0" />
                  <span>ניתחנו את 6 השנים האחרונות של תלושי השכר שלה</span>
                </li>
                <li className="flex items-start">
                  <CheckCheck className="h-4 w-4 text-brand-blue ml-2 mt-1 flex-shrink-0" />
                  <span>זיהינו 3 קטגוריות שבהן היא הייתה זכאית להחזרים</span>
                </li>
                <li className="flex items-start">
                  <CheckCheck className="h-4 w-4 text-brand-blue ml-2 mt-1 flex-shrink-0" />
                  <span>הגשנו תביעה מקיפה לרשויות המס</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-blue/10 p-4 rounded-lg">
              <p className="font-bold mb-2">התוצאה:</p>
              <p className="text-xl font-bold text-brand-blue">שרה קיבלה החזר של ₪7,000 תוך 21 יום!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
