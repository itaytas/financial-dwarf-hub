
import React, { useState } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      question: 'כמה זמן לוקח להשיג החזר מס?',
      answer: 'התהליך אורך בממוצע 7-14 ימי עסקים מרגע שכל המסמכים הדרושים נמצאים בידינו. עם זאת, במקרים מסוימים התהליך עשוי להתארך בהתאם למורכבות התיק ועומס העבודה ברשויות המס.'
    },
    {
      question: 'האם אני צריך לשלם עבור השירות מראש?',
      answer: 'לא! אנחנו עובדים בשיטת "אין החזר - אין תשלום". כלומר, תשלום העמלה מתבצע רק לאחר שקיבלת את החזר המס בפועל. אם מסיבה כלשהי לא נצליח להשיג עבורך החזר, לא תשלם דבר.'
    },
    {
      question: 'לכמה שנים אחורה ניתן לדרוש החזר מס?',
      answer: 'על פי חוקי מס הכנסה בישראל, ניתן לדרוש החזרי מס עבור שש השנים האחרונות. למשל, בשנת 2025 ניתן לדרוש החזרים עבור השנים 2019-2024.'
    },
    {
      question: 'אילו מסמכים אני צריך לספק?',
      answer: 'המסמכים הבסיסיים הנדרשים כוללים: תלושי משכורת שנתיים או טופס 106, צילום תעודת זהות, פרטי חשבון בנק, וטפסים נוספים בהתאם למצבך האישי (כגון אישורי תרומות, הוצאות רפואיות, או קבלות על הוצאות מוכרות). צוות המומחים שלנו ינחה אותך באופן אישי לגבי המסמכים הספציפיים הנדרשים במקרה שלך.'
    },
    {
      question: 'האם כל אחד זכאי להחזר מס?',
      answer: 'לא כל אחד זכאי להחזר מס, אך רבים זכאים ואינם מודעים לכך. גורמים רבים משפיעים על הזכאות, כגון: שינויים במצב המשפחתי, החלפת מקום עבודה במהלך השנה, עבודה במשרה חלקית, הוצאות מוכרות שלא נוצלו, ועוד. המומחים שלנו יבחנו את המקרה שלך ויאמרו לך בכנות אם אתה זכאי להחזר ובאיזה סכום.'
    }
  ];
  
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section ref={ref} className={`section bg-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">שאלות נפוצות</h2>
        <p className="section-subtitle">מצאו תשובות לשאלות הנפוצות ביותר בנושא החזרי מס</p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-right p-5 flex items-center justify-between glass-card transition-all duration-300 ${
                  openIndex === index ? 'shadow-md' : 'hover:shadow-sm'
                }`}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center">
                  <HelpCircle className={`h-5 w-5 ml-3 flex-shrink-0 ${openIndex === index ? 'text-brand-blue' : 'text-gray-400'}`} />
                  <h3 className={`font-bold ${openIndex === index ? 'text-brand-blue' : 'text-gray-800'}`}>{faq.question}</h3>
                </div>
                
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-blue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 bg-gray-50 rounded-b-lg animate-fade-in">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
