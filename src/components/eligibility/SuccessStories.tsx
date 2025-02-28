
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { formatCurrency } from '@/utils/formatters';
import { Quote, Star } from 'lucide-react';

interface SuccessStoryProps {
  name: string;
  profession: string;
  story: string;
  amount: number;
  image: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ name, profession, story, amount, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex">
        <div className="w-1/3">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-5">
          <div className="flex items-center mb-3">
            <Quote className="h-5 w-5 text-brand-blue ml-2 flex-shrink-0" />
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{story}</p>
          
          <div className="flex items-end justify-between mt-auto">
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-gray-600 text-sm">{profession}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">סכום ההחזר</p>
              <p className="font-bold text-brand-blue">{formatCurrency(amount)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const stories = [
    {
      name: 'דנה לוי',
      profession: 'עצמאית, מעצבת גרפית',
      story: 'בתור עצמאית, תמיד פחדתי מענייני מיסים. הגמד הפיננסי הפך את התהליך לפשוט והשיג לי החזר מס משמעותי שלא ידעתי שמגיע לי.',
      amount: 5200,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'אמיר כהן',
      profession: 'שכיר, מהנדס תוכנה',
      story: 'עבדתי בשני מקומות עבודה במקביל ולא ידעתי שמגיע לי החזר. אחרי פנייה להגמד הפיננסי, הם טיפלו בכל התהליך והצליחו להשיג לי החזר מס משמעותי.',
      amount: 7800,
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'נועה שמיר',
      profession: 'שכירה, מורה',
      story: 'בתור מורה, לא חשבתי שמגיע לי החזר מס. המומחים של הגמד הפיננסי גילו שמגיע לי החזר על הוצאות מקצועיות ולימודים שעשיתי.',
      amount: 4350,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section ref={ref} className={`section bg-white border-t border-gray-100 ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">סיפורי הצלחה מלקוחות שלנו</h2>
        <p className="section-subtitle">הנה כמה דוגמאות ללקוחות שכבר קיבלו את ההחזר שלהם</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/success-stories" 
            className="text-brand-blue font-medium hover:underline inline-flex items-center"
          >
            לעוד סיפורי הצלחה
            <ChevronLeft className="h-4 w-4 mr-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
