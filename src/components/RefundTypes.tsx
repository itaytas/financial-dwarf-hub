
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/utils/animations';
import { Briefcase, Heart, Baby, Lightbulb, ChevronLeft, Plus } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const RefundTypes: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const refundTypes = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'הוצאות עבודה',
      amount: 3200,
      description: 'הוצאות נסיעה, אש"ל, ביגוד, כלי עבודה ועוד',
      color: 'bg-blue-500'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'הוצאות רפואיות',
      amount: 4100,
      description: 'טיפולים, תרופות, ביטוח פרטי, נסיעות לטיפולים',
      color: 'bg-red-500'
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: 'נקודות זיכוי לילדים',
      amount: 5600,
      description: 'הטבות להורים עם ילדים מתחת לגיל 18',
      color: 'bg-green-500'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'השכלה והכשרה',
      amount: 2800,
      description: 'לימודים אקדמיים, קורסים מקצועיים והכשרות',
      color: 'bg-purple-500'
    }
  ];
  
  return (
    <section ref={ref} className={`section bg-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">סוגי החזרים נפוצים</h2>
        <p className="section-subtitle">לא משנה מה מצבך התעסוקתי, ייתכן שמגיעים לך החזרי מס מסוגים שונים</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {refundTypes.map((type, index) => (
            <div key={index} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <div className={`${type.color} p-5 flex items-center justify-center text-white`}>
                {type.icon}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">החזר ממוצע</span>
                  <span className="text-lg font-bold text-brand-blue">{formatCurrency(type.amount)}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 border-t border-gray-100">
                <Link to="/refunds" className="text-brand-blue text-sm font-medium flex items-center justify-center group-hover:text-blue-700">
                  <span>קרא עוד</span>
                  <ChevronLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/refunds" className="inline-flex items-center text-brand-blue hover:text-blue-700 font-medium">
            <span>עוד סוגי החזרים</span>
            <Plus className="h-4 w-4 mr-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RefundTypes;
