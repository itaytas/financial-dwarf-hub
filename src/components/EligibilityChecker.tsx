
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/utils/animations';
import { formatCurrency } from '@/utils/formatters';
import { ChevronLeft, ChevronRight, Check, Info } from 'lucide-react';

type IncomeType = 'employee' | 'freelancer' | 'business' | 'mixed';
type IncomeRange = 'low' | 'medium' | 'high' | 'very-high';
type Deduction = 'children' | 'medical' | 'donations' | 'pension' | 'education' | 'work-expenses';

const EligibilityChecker: React.FC = () => {
  const [step, setStep] = useState(1);
  const [incomeType, setIncomeType] = useState<IncomeType | null>(null);
  const [incomeRange, setIncomeRange] = useState<IncomeRange | null>(null);
  const [deductions, setDeductions] = useState<Deduction[]>([]);
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);
  
  const { ref, isRevealed } = useScrollReveal();
  
  const nextStep = () => {
    if (step === 1 && !incomeType) return;
    if (step === 2 && !incomeRange) return;
    
    if (step === 3) {
      calculateEstimate();
    } else {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const toggleDeduction = (deduction: Deduction) => {
    if (deductions.includes(deduction)) {
      setDeductions(deductions.filter(d => d !== deduction));
    } else {
      setDeductions([...deductions, deduction]);
    }
  };
  
  const calculateEstimate = () => {
    // This is just a simple example calculation
    let baseMin = 1000;
    let baseMax = 5000;
    
    // Adjust based on income type
    if (incomeType === 'freelancer') {
      baseMin *= 1.2;
      baseMax *= 1.3;
    } else if (incomeType === 'business') {
      baseMin *= 1.5;
      baseMax *= 2;
    } else if (incomeType === 'mixed') {
      baseMin *= 1.3;
      baseMax *= 1.5;
    }
    
    // Adjust based on income range
    if (incomeRange === 'medium') {
      baseMin *= 1.5;
      baseMax *= 1.5;
    } else if (incomeRange === 'high') {
      baseMin *= 2;
      baseMax *= 2.5;
    } else if (incomeRange === 'very-high') {
      baseMin *= 3;
      baseMax *= 4;
    }
    
    // Adjust based on deductions
    deductions.forEach(() => {
      baseMin *= 1.1;
      baseMax *= 1.15;
    });
    
    setEstimate({
      min: Math.round(baseMin / 100) * 100,
      max: Math.round(baseMax / 100) * 100
    });
    
    setStep(4);
  };
  
  const resetForm = () => {
    setStep(1);
    setIncomeType(null);
    setIncomeRange(null);
    setDeductions([]);
    setEstimate(null);
  };
  
  return (
    <section ref={ref} className={`section bg-gray-50 ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">בדוק זכאות תוך 30 שניות!</h2>
        <p className="section-subtitle">השב על מספר שאלות קצרות וקבל הערכה של סכום ההחזר הפוטנציאלי</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-100 h-2">
              <div 
                className="bg-brand-blue h-full transition-all duration-500 ease-out"
                style={{ width: `${step * 25}%` }}
              ></div>
            </div>
            
            <div className="p-8">
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold mb-6">מהו סוג ההכנסה שלך?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        incomeType === 'employee' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeType('employee')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeType === 'employee' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeType === 'employee' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">שכיר/ה</h4>
                      </div>
                      <p className="text-sm text-gray-600">עובד/ת בחברה ומקבל/ת תלוש משכורת</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        incomeType === 'freelancer' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeType('freelancer')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeType === 'freelancer' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeType === 'freelancer' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">עצמאי/ת</h4>
                      </div>
                      <p className="text-sm text-gray-600">עובד/ת כעצמאי/ת ומגיש/ה חשבוניות</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        incomeType === 'business' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeType('business')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeType === 'business' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeType === 'business' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">בעל/ת עסק</h4>
                      </div>
                      <p className="text-sm text-gray-600">בעל/ת חברה או עסק רשום</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        incomeType === 'mixed' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeType('mixed')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeType === 'mixed' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeType === 'mixed' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">מעורב</h4>
                      </div>
                      <p className="text-sm text-gray-600">הכנסות ממספר מקורות (שכיר + עצמאי וכו')</p>
                    </button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold mb-6">מהו טווח ההכנסה השנתית שלך (ברוטו)?</h3>
                  
                  <div className="space-y-3 mb-8">
                    <button 
                      className={`w-full p-4 rounded-lg border-2 text-right transition-all ${
                        incomeRange === 'low' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeRange('low')}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeRange === 'low' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeRange === 'low' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className="font-medium">עד 120,000 ₪</span>
                      </div>
                    </button>
                    
                    <button 
                      className={`w-full p-4 rounded-lg border-2 text-right transition-all ${
                        incomeRange === 'medium' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeRange('medium')}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeRange === 'medium' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeRange === 'medium' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className="font-medium">120,000 ₪ - 250,000 ₪</span>
                      </div>
                    </button>
                    
                    <button 
                      className={`w-full p-4 rounded-lg border-2 text-right transition-all ${
                        incomeRange === 'high' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeRange('high')}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeRange === 'high' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeRange === 'high' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className="font-medium">250,000 ₪ - 500,000 ₪</span>
                      </div>
                    </button>
                    
                    <button 
                      className={`w-full p-4 rounded-lg border-2 text-right transition-all ${
                        incomeRange === 'very-high' 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setIncomeRange('very-high')}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          incomeRange === 'very-high' ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {incomeRange === 'very-high' && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className="font-medium">מעל 500,000 ₪</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold mb-6">האם יש לך אחד או יותר מהבאים? (סמן כל מה שרלוונטי)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        deductions.includes('children') 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleDeduction('children')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          deductions.includes('children') ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {deductions.includes('children') && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">ילדים</h4>
                      </div>
                      <p className="text-sm text-gray-600">ילדים מתחת לגיל 18</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        deductions.includes('medical') 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleDeduction('medical')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          deductions.includes('medical') ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {deductions.includes('medical') && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">הוצאות רפואיות</h4>
                      </div>
                      <p className="text-sm text-gray-600">הוצאות רפואיות חריגות או ביטוח בריאות פרטי</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        deductions.includes('donations') 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleDeduction('donations')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          deductions.includes('donations') ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {deductions.includes('donations') && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">תרומות</h4>
                      </div>
                      <p className="text-sm text-gray-600">תרומות למוסדות מוכרים</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        deductions.includes('pension') 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleDeduction('pension')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          deductions.includes('pension') ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {deductions.includes('pension') && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">פנסיה/קרן השתלמות</h4>
                      </div>
                      <p className="text-sm text-gray-600">הפקדות לפנסיה או קרן השתלמות</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        deductions.includes('education') 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleDeduction('education')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          deductions.includes('education') ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {deductions.includes('education') && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">לימודים אקדמיים</h4>
                      </div>
                      <p className="text-sm text-gray-600">לימודים לתואר אקדמי או הכשרה מקצועית</p>
                    </button>
                    
                    <button 
                      className={`p-4 rounded-lg border-2 text-right transition-all ${
                        deductions.includes('work-expenses') 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleDeduction('work-expenses')}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          deductions.includes('work-expenses') ? 'bg-brand-blue' : 'bg-gray-200'
                        }`}>
                          {deductions.includes('work-expenses') && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-bold">הוצאות עבודה</h4>
                      </div>
                      <p className="text-sm text-gray-600">נסיעות, ביגוד, ציוד או כלים הקשורים לעבודה</p>
                    </button>
                  </div>
                </div>
              )}
              
              {step === 4 && estimate && (
                <div className="animate-fade-in text-center">
                  <div className="inline-block bg-green-50 p-2 rounded-full mb-4">
                    <div className="bg-green-500 rounded-full p-3">
                      <Check className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">הערכת החזר המס שלך</h3>
                  <p className="text-gray-600 mb-6">על פי הנתונים שמסרת, אנו מעריכים שבאפשרותך לקבל:</p>
                  
                  <div className="bg-brand-blue/5 p-6 rounded-xl mb-8">
                    <p className="text-4xl font-bold text-brand-blue mb-1">
                      {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
                    </p>
                    <p className="text-gray-600 text-sm">*ההערכה מבוססת על מידע כללי בלבד</p>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <Link to="/contact" className="btn-secondary">
                      התחל עכשיו את תהליך ההחזר
                    </Link>
                    <button onClick={resetForm} className="text-gray-600 text-sm hover:text-brand-blue">
                      בדיקה מחדש
                    </button>
                  </div>
                </div>
              )}
              
              {step < 4 && (
                <div className="flex justify-between">
                  {step > 1 ? (
                    <button 
                      onClick={prevStep}
                      className="flex items-center text-gray-600 hover:text-brand-blue transition-colors"
                    >
                      <ChevronRight className="h-5 w-5 ml-1" />
                      <span>חזרה</span>
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  <button 
                    onClick={nextStep}
                    className={`flex items-center ${
                      (step === 1 && !incomeType) || (step === 2 && !incomeRange)
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-brand-blue hover:text-blue-700'
                    } transition-colors`}
                  >
                    <span>המשך</span>
                    <ChevronLeft className="h-5 w-5 mr-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="inline-flex items-center text-sm text-gray-500">
              <Info className="h-4 w-4 text-gray-400 ml-1" />
              <span>כל הפרטים מוגנים ומאובטחים. ללא התחייבות.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityChecker;
