
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Quote } from 'lucide-react';

const FounderMessage = () => {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section ref={ref} className={`py-16 bg-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">מסר ממייסד החברה</h2>
          
          <div className="glass-card p-8 md:p-12 relative border-r-4 border-brand-gold">
            <div className="absolute top-6 right-6 text-brand-blue">
              <Quote className="h-16 w-16 rotate-180 opacity-20" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-brand-blue flex-shrink-0">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="דני כהן, מייסד ומנכ״ל" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold">דני כהן</h3>
                <p className="text-lg text-gray-600">מייסד ומנכ״ל הגמד הפיננסי</p>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl relative z-10">
              <p className="mb-4">
                כשהקמתי את הגמד הפיננסי, חזיתי חברה שמשנה את המשוואה בתחום החזרי המס. רציתי להנגיש את הזכויות המגיעות לכל אזרח, במיוחד לאלו שאין להם את הידע או הזמן להתמודד עם הבירוקרטיה.
              </p>
              <p className="mb-4">
                היום, אני גאה בצוות המקצועי שלנו שעוזר לאלפי ישראלים מדי שנה לקבל בחזרה את הכסף שמגיע להם. אנחנו לא רק מחזירים כסף - אנחנו נותנים לאנשים תחושת שליטה וביטחון כלכלי.
              </p>
              <p>
                אני כאן כדי להבטיח שתקבלו את המקסימום, ושהתהליך יהיה פשוט, שקוף ונטול דאגות עבורכם.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
