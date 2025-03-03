
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Calendar } from 'lucide-react';

const BrandStory = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const milestones = [
    {
      year: 2019,
      title: "הקמת החברה",
      description: "דני הקים את הגמד הפיננסי כדי לעזור לישראלים לממש את זכויותיהם"
    },
    {
      year: 2022,
      title: "10 מיליון ₪ הוחזרו",
      description: "חצינו את רף 10 מיליון ₪ בהחזרי מס ללקוחותינו"
    },
    {
      year: 2025,
      title: "5,000 לקוחות",
      description: "הגענו ליותר מ-5,000 לקוחות מרוצים ברחבי הארץ"
    }
  ];

  return (
    <section ref={ref} className={`py-16 bg-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">הסיפור שלנו</h2>
          
          <div className="mb-12">
            <p className="text-lg mb-6">
              מייסדנו, דני, ראה איך חברים מפספסים החזרים וייסד את הגמד הפיננסי כדי לעזור לכל ישראלי לקבל את מה שמגיע לו.
            </p>
            
            <div className="glass-card p-8 border-r-4 border-brand-blue mb-10">
              <h3 className="text-xl font-bold mb-2">המשימה שלנו</h3>
              <p className="text-xl">להפוך החזרי מס לפשוטים וזמינים לכולם.</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">אבני דרך חשובות</h3>
          
          <div className="relative border-r-2 border-gray-200 mr-4 pr-8 space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="absolute right-[-35px] top-0">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                    <Calendar className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                <div className="glass-card p-6 transition-all hover:shadow-lg">
                  <span className="text-sm font-bold text-brand-blue">{milestone.year}</span>
                  <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
