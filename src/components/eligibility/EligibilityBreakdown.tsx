
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { formatCurrency } from '@/utils/formatters';
import { 
  Briefcase, Heart, Baby, GraduationCap, 
  Landmark, Car, FileCheck, Info 
} from 'lucide-react';

interface EligibilityCardProps {
  title: string;
  description: string;
  amount: number;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

const EligibilityCard: React.FC<EligibilityCardProps> = ({ 
  title, description, amount, icon, color, hoverColor 
}) => {
  return (
    <div className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 group`}>
      <div className={`${color} group-hover:${hoverColor} p-5 transition-colors`}>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <div className="bg-white/20 p-2 rounded-full">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4 min-h-[60px]">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">החזר ממוצע</span>
          <span className="text-xl font-bold text-brand-blue">{formatCurrency(amount)}</span>
        </div>
        
        <div className="border-t border-gray-100 mt-4 pt-4">
          <div className="flex items-start text-sm text-gray-600">
            <FileCheck className="h-4 w-4 mr-2 flex-shrink-0 text-green-500 mt-1" />
            <span>נדרשת הוכחה: תלושי שכר, קבלות, אישורים רשמיים</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EligibilityBreakdown: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const cards = [
    {
      title: 'הוצאות עבודה',
      description: 'כולל הוצאות נסיעה, ביגוד מקצועי, כלי עבודה, השתלמויות מקצועיות ועוד.',
      amount: 3800,
      icon: <Briefcase className="h-6 w-6 text-white" />,
      color: 'bg-blue-600',
      hoverColor: 'bg-blue-700'
    },
    {
      title: 'הוצאות רפואיות',
      description: 'טיפולים רפואיים, תרופות, ביטוחים פרטיים, נסיעות לטיפולים ועוד.',
      amount: 4200,
      icon: <Heart className="h-6 w-6 text-white" />,
      color: 'bg-red-500',
      hoverColor: 'bg-red-600'
    },
    {
      title: 'נקודות זיכוי לילדים',
      description: 'הטבות מס להורים עם ילדים מתחת לגיל 18, כולל נקודות זיכוי לילדים.',
      amount: 5600,
      icon: <Baby className="h-6 w-6 text-white" />,
      color: 'bg-green-500',
      hoverColor: 'bg-green-600'
    },
    {
      title: 'השכלה וקורסים',
      description: 'לימודים אקדמיים, קורסים מקצועיים והכשרות המזכים בנקודות זיכוי.',
      amount: 3300,
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      color: 'bg-purple-500',
      hoverColor: 'bg-purple-600'
    },
    {
      title: 'פנסיה וקרנות',
      description: 'הפקדות לפנסיה, קרנות השתלמות וחסכונות פיננסיים מוכרים.',
      amount: 4900,
      icon: <Landmark className="h-6 w-6 text-white" />,
      color: 'bg-amber-500',
      hoverColor: 'bg-amber-600'
    },
    {
      title: 'החזקת רכב',
      description: 'הוצאות רכב לצרכי עבודה, כולל דלק, ביטוח, תיקונים ואחזקה שוטפת.',
      amount: 2700,
      icon: <Car className="h-6 w-6 text-white" />,
      color: 'bg-cyan-500',
      hoverColor: 'bg-cyan-600'
    }
  ];

  return (
    <section ref={ref} className={`section bg-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">קטגוריות זכאות נפוצות</h2>
        <p className="section-subtitle">ישנן מגוון קטגוריות שיכולות לזכות אותך בהחזר מס, הנה החשובות שבהן</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <EligibilityCard key={index} {...card} />
          ))}
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 max-w-3xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <Info className="h-6 w-6 text-brand-blue mr-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">האם ידעת?</h3>
              <p className="text-gray-700">
                רוב האנשים זכאים להחזר מס בגובה 3 עד 8 משכורות חודשיות ברוטו, ולא מודעים לכך! אבל ניתן לתבוע החזר רק עד 6 שנים אחורה, אחרי זה הכסף פשוט הולך לאיבוד.
              </p>
              <div className="mt-4">
                <a href="/contact" className="text-brand-blue font-medium hover:underline">
                  בדוק זכאות עכשיו
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityBreakdown;
