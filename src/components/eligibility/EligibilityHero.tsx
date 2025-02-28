
import React from 'react';
import { ArrowDown, CheckCircle, Clock } from 'lucide-react';

const EligibilityHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-blue to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            בדוק את זכאותך להחזר מס
          </h1>
          <p className="text-xl text-white/90 mb-10">
            השב על מספר שאלות פשוטות וגלה כמה כסף אתה יכול לקבל בחזרה מרשויות המס
          </p>
          
          <div className="glass-card bg-white/20 backdrop-blur-sm p-6 rounded-xl mb-6 inline-flex items-center mx-auto">
            <div className="text-center px-4 border-l border-white/30">
              <p className="text-white font-bold text-2xl">98%</p>
              <p className="text-white/80 text-sm">אחוזי הצלחה</p>
            </div>
            <div className="text-center px-4 border-l border-white/30">
              <p className="text-white font-bold text-2xl">₪8,500</p>
              <p className="text-white/80 text-sm">החזר ממוצע</p>
            </div>
            <div className="text-center px-4">
              <p className="text-white font-bold text-2xl">דק' 3</p>
              <p className="text-white/80 text-sm">זמן בדיקה</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => {
                const calculatorSection = document.getElementById('eligibility-calculator');
                if (calculatorSection) {
                  calculatorSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="animate-bounce inline-flex items-center justify-center bg-white rounded-full p-3 shadow-lg"
            >
              <ArrowDown className="h-6 w-6 text-brand-blue" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default EligibilityHero;
