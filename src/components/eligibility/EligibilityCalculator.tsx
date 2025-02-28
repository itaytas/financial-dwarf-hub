
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/utils/formatters';
import { 
  ChevronLeft, ChevronRight, Check, Briefcase, 
  CircleDollarSign, CheckSquare, Calendar, CheckCircle, Clock 
} from 'lucide-react';

// Types for our calculator
type IncomeType = 'employee' | 'self-employed' | 'business-owner';
type IncomeRange = 'under-100k' | '100k-200k' | '200k-300k' | 'above-300k';
type DeductionCategory = 'work-expenses' | 'pension' | 'kids' | 'medical' | 'education' | 'donations';
type RelevantYear = '2018' | '2019' | '2020' | '2021' | '2022' | '2023' | '2024';

const EligibilityCalculator: React.FC = () => {
  // State management for multi-step form
  const [currentStep, setCurrentStep] = useState(1);
  const [incomeType, setIncomeType] = useState<IncomeType | null>(null);
  const [incomeRange, setIncomeRange] = useState<IncomeRange | null>(null);
  const [deductionCategories, setDeductionCategories] = useState<DeductionCategory[]>([]);
  const [relevantYears, setRelevantYears] = useState<RelevantYear[]>([]);
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle moving to next step
  const handleNextStep = () => {
    if (currentStep === 1 && !incomeType) return;
    if (currentStep === 2 && !incomeRange) return;
    if (currentStep === 3 && deductionCategories.length === 0) return;
    if (currentStep === 4 && relevantYears.length === 0) return;
    
    if (currentStep < 4) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      calculateResult();
    }
  };

  // Handle moving to previous step
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  // Toggle deduction category
  const toggleDeductionCategory = (category: DeductionCategory) => {
    if (deductionCategories.includes(category)) {
      setDeductionCategories(deductionCategories.filter(c => c !== category));
    } else {
      setDeductionCategories([...deductionCategories, category]);
    }
  };

  // Toggle relevant year
  const toggleRelevantYear = (year: RelevantYear) => {
    if (relevantYears.includes(year)) {
      setRelevantYears(relevantYears.filter(y => y !== year));
    } else {
      setRelevantYears([...relevantYears, year]);
    }
  };

  // Calculate result based on selected options
  const calculateResult = () => {
    // Base amounts
    let baseMin = 2000;
    let baseMax = 5000;
    
    // Adjust based on income type
    if (incomeType === 'self-employed') {
      baseMin *= 1.2;
      baseMax *= 1.3;
    } else if (incomeType === 'business-owner') {
      baseMin *= 1.5;
      baseMax *= 1.8;
    }
    
    // Adjust based on income range
    if (incomeRange === '100k-200k') {
      baseMin *= 1.3;
      baseMax *= 1.4;
    } else if (incomeRange === '200k-300k') {
      baseMin *= 1.6;
      baseMax *= 1.8;
    } else if (incomeRange === 'above-300k') {
      baseMin *= 2;
      baseMax *= 2.5;
    }
    
    // Adjust based on deduction categories
    deductionCategories.forEach(() => {
      baseMin *= 1.15;
      baseMax *= 1.2;
    });
    
    // Adjust based on relevant years
    baseMin *= relevantYears.length;
    baseMax *= relevantYears.length;
    
    // Set result (rounded to nearest 100)
    setResult({
      min: Math.round(baseMin / 100) * 100,
      max: Math.round(baseMax / 100) * 100
    });
    
    // Move to result step
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(5);
      setIsAnimating(false);
    }, 300);
  };

  // Reset the calculator
  const resetCalculator = () => {
    setIncomeType(null);
    setIncomeRange(null);
    setDeductionCategories([]);
    setRelevantYears([]);
    setResult(null);
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(1);
      setIsAnimating(false);
    }, 300);
  };
  
  return (
    <section id="eligibility-calculator" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">בדוק את זכאותך להחזר מס</h2>
          <p className="text-gray-600 text-center mb-10">מלא את הפרטים בטופס ותקבל הערכה מיידית של סכום ההחזר הפוטנציאלי</p>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-100 h-2 relative">
              <div 
                className="absolute inset-y-0 left-0 bg-brand-blue transition-all duration-500"
                style={{ width: `${Math.min((currentStep / 5) * 100, 100)}%` }}
              ></div>
            </div>
            
            <div className="p-6 md:p-8">
              {/* Step Indicator */}
              {currentStep <= 4 && (
                <div className="flex justify-between mb-8">
                  {[1, 2, 3, 4].map((step) => (
                    <div 
                      key={step}
                      className={`flex flex-col items-center ${step <= currentStep ? 'text-brand-blue' : 'text-gray-300'}`}
                    >
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          step < currentStep 
                            ? 'bg-brand-blue text-white' 
                            : step === currentStep 
                              ? 'border-2 border-brand-blue text-brand-blue' 
                              : 'border-2 border-gray-200 text-gray-300'
                        }`}
                      >
                        {step < currentStep ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <span>{step}</span>
                        )}
                      </div>
                      <span className={`text-sm hidden md:inline ${step <= currentStep ? 'font-medium' : ''}`}>
                        {step === 1 && 'סוג הכנסה'}
                        {step === 2 && 'הכנסה שנתית'}
                        {step === 3 && 'קטגוריות זכאות'}
                        {step === 4 && 'שנים רלוונטיות'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Step 1: Income Type */}
              <div className={`${currentStep === 1 ? 'block' : 'hidden'} ${isAnimating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
                <h3 className="text-xl font-bold mb-6">מהו סוג ההכנסה שלך?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    className={`p-6 rounded-lg border-2 transition-all ${
                      incomeType === 'employee' 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setIncomeType('employee')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${
                        incomeType === 'employee' ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Briefcase className="h-8 w-8" />
                      </div>
                      <h4 className="font-bold mb-2">שכיר/ה</h4>
                      <p className="text-sm text-gray-600">מקבל/ת תלוש משכורת חודשי ממעסיק</p>
                    </div>
                  </button>
                  
                  <button
                    className={`p-6 rounded-lg border-2 transition-all ${
                      incomeType === 'self-employed' 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setIncomeType('self-employed')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${
                        incomeType === 'self-employed' ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <CircleDollarSign className="h-8 w-8" />
                      </div>
                      <h4 className="font-bold mb-2">עצמאי/ת</h4>
                      <p className="text-sm text-gray-600">עובד/ת כעצמאי/ת ומגיש/ה חשבוניות</p>
                    </div>
                  </button>
                  
                  <button
                    className={`p-6 rounded-lg border-2 transition-all ${
                      incomeType === 'business-owner' 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setIncomeType('business-owner')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${
                        incomeType === 'business-owner' ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Briefcase className="h-8 w-8" />
                      </div>
                      <h4 className="font-bold mb-2">בעל/ת עסק</h4>
                      <p className="text-sm text-gray-600">בעל/ת חברה או עסק רשום</p>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Step 2: Annual Income */}
              <div className={`${currentStep === 2 ? 'block' : 'hidden'} ${isAnimating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
                <h3 className="text-xl font-bold mb-6">מהי ההכנסה השנתית שלך (ברוטו)?</h3>
                
                <div className="space-y-4">
                  <button
                    className={`w-full p-5 rounded-lg border-2 text-right transition-all ${
                      incomeRange === 'under-100k' 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setIncomeRange('under-100k')}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        incomeRange === 'under-100k' ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {incomeRange === 'under-100k' && <Check className="h-4 w-4" />}
                      </div>
                      <span className="font-medium">עד ₪100,000</span>
                    </div>
                  </button>
                  
                  <button
                    className={`w-full p-5 rounded-lg border-2 text-right transition-all ${
                      incomeRange === '100k-200k' 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setIncomeRange('100k-200k')}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        incomeRange === '100k-200k' ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {incomeRange === '100k-200k' && <Check className="h-4 w-4" />}
                      </div>
                      <span className="font-medium">₪100,000 - ₪200,000</span>
                    </div>
                  </button>
                  
                  <button
                    className={`w-full p-5 rounded-lg border-2 text-right transition-all ${
                      incomeRange === '200k-300k' 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setIncomeRange('200k-300k')}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        incomeRange === '200k-300k' ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {incomeRange === '200k-300k' && <Check className="h-4 w-4" />}
                      </div>
                      <span className="font-medium">₪200,000 - ₪300,000</span>
                    </div>
                  </button>
                  
                  <button
                    className={`w-full p-5 rounded-lg border-2 text-right transition-all ${
                      incomeRange === 'above-300k' 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setIncomeRange('above-300k')}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        incomeRange === 'above-300k' ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {incomeRange === 'above-300k' && <Check className="h-4 w-4" />}
                      </div>
                      <span className="font-medium">מעל ₪300,000</span>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Step 3: Deduction Categories */}
              <div className={`${currentStep === 3 ? 'block' : 'hidden'} ${isAnimating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
                <h3 className="text-xl font-bold mb-6">האם יש לך אחד או יותר מהבאים? (בחר כל מה שרלוונטי)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    className={`p-4 rounded-lg border-2 text-right transition-all ${
                      deductionCategories.includes('work-expenses') 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => toggleDeductionCategory('work-expenses')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        deductionCategories.includes('work-expenses') ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {deductionCategories.includes('work-expenses') && <Check className="h-4 w-4" />}
                      </div>
                      <h4 className="font-bold">הוצאות עבודה</h4>
                    </div>
                    <p className="text-sm text-gray-600">נסיעות, ביגוד, ציוד או כלים הקשורים לעבודה</p>
                  </button>
                  
                  <button
                    className={`p-4 rounded-lg border-2 text-right transition-all ${
                      deductionCategories.includes('pension') 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => toggleDeductionCategory('pension')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        deductionCategories.includes('pension') ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {deductionCategories.includes('pension') && <Check className="h-4 w-4" />}
                      </div>
                      <h4 className="font-bold">פנסיה/קרן השתלמות</h4>
                    </div>
                    <p className="text-sm text-gray-600">הפקדות לפנסיה או קרן השתלמות</p>
                  </button>
                  
                  <button
                    className={`p-4 rounded-lg border-2 text-right transition-all ${
                      deductionCategories.includes('kids') 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => toggleDeductionCategory('kids')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        deductionCategories.includes('kids') ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {deductionCategories.includes('kids') && <Check className="h-4 w-4" />}
                      </div>
                      <h4 className="font-bold">ילדים</h4>
                    </div>
                    <p className="text-sm text-gray-600">ילדים מתחת לגיל 18</p>
                  </button>
                  
                  <button
                    className={`p-4 rounded-lg border-2 text-right transition-all ${
                      deductionCategories.includes('medical') 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => toggleDeductionCategory('medical')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        deductionCategories.includes('medical') ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {deductionCategories.includes('medical') && <Check className="h-4 w-4" />}
                      </div>
                      <h4 className="font-bold">הוצאות רפואיות</h4>
                    </div>
                    <p className="text-sm text-gray-600">הוצאות רפואיות חריגות או ביטוח בריאות פרטי</p>
                  </button>
                  
                  <button
                    className={`p-4 rounded-lg border-2 text-right transition-all ${
                      deductionCategories.includes('education') 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => toggleDeductionCategory('education')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        deductionCategories.includes('education') ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {deductionCategories.includes('education') && <Check className="h-4 w-4" />}
                      </div>
                      <h4 className="font-bold">לימודים אקדמיים</h4>
                    </div>
                    <p className="text-sm text-gray-600">לימודים לתואר אקדמי או הכשרה מקצועית</p>
                  </button>
                  
                  <button
                    className={`p-4 rounded-lg border-2 text-right transition-all ${
                      deductionCategories.includes('donations') 
                        ? 'border-brand-blue bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => toggleDeductionCategory('donations')}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        deductionCategories.includes('donations') ? 'bg-brand-blue text-white' : 'border border-gray-300'
                      }`}>
                        {deductionCategories.includes('donations') && <Check className="h-4 w-4" />}
                      </div>
                      <h4 className="font-bold">תרומות</h4>
                    </div>
                    <p className="text-sm text-gray-600">תרומות למוסדות מוכרים</p>
                  </button>
                </div>
              </div>
              
              {/* Step 4: Relevant Years */}
              <div className={`${currentStep === 4 ? 'block' : 'hidden'} ${isAnimating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
                <h3 className="text-xl font-bold mb-6">עבור אילו שנים ברצונך לבדוק זכאות להחזר מס?</h3>
                <p className="text-gray-600 mb-6">ניתן לדרוש החזרי מס לשש השנים האחרונות. בחר את כל השנים הרלוונטיות.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(['2018', '2019', '2020', '2021', '2022', '2023', '2024'] as RelevantYear[]).map((year) => (
                    <button
                      key={year}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        relevantYears.includes(year) 
                          ? 'border-brand-blue bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleRelevantYear(year)}
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center ${
                          relevantYears.includes(year) ? 'bg-brand-blue text-white' : 'border border-gray-300'
                        }`}>
                          {relevantYears.includes(year) ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            <Calendar className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <span className="font-medium">{year}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Step 5: Results */}
              <div className={`${currentStep === 5 ? 'block' : 'hidden'} ${isAnimating ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
                {result && (
                  <div className="text-center">
                    <div className="mb-8">
                      <div className="inline-block bg-green-100 p-3 rounded-full mb-6">
                        <CheckCircle className="h-14 w-14 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">הערכת החזר המס שלך</h3>
                      <p className="text-gray-600">בהתבסס על המידע שסיפקת, אנו מעריכים שאתה זכאי להחזר מס בסכום של:</p>
                    </div>
                    
                    <div className="bg-blue-50 p-8 rounded-xl mb-8 border border-blue-100">
                      <p className="text-4xl md:text-5xl font-bold text-brand-blue mb-3">
                        {formatCurrency(result.min)} - {formatCurrency(result.max)}
                      </p>
                      <p className="text-gray-600 text-sm">* הערכה זו היא אינדיקטיבית בלבד ומבוססת על המידע שסיפקת. הסכום הסופי יקבע לאחר בדיקה מקיפה של כל המסמכים הרלוונטיים.</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                      <Link 
                        to="/contact" 
                        className="btn-secondary py-4 px-8 text-lg"
                      >
                        המשך לתהליך
                      </Link>
                      <button 
                        onClick={resetCalculator}
                        className="text-gray-600 hover:underline font-medium py-2"
                      >
                        בדיקה מחדש
                      </button>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>זמן טיפול משוער: 7-14 ימי עסקים</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between mt-8">
                  {currentStep > 1 ? (
                    <button 
                      onClick={handlePrevStep}
                      className="flex items-center text-gray-600 hover:text-brand-blue transition-colors"
                    >
                      <ChevronRight className="h-5 w-5 ml-1" />
                      <span>חזרה</span>
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  <button 
                    onClick={handleNextStep}
                    className={`flex items-center ${
                      (currentStep === 1 && !incomeType) || 
                      (currentStep === 2 && !incomeRange) ||
                      (currentStep === 3 && deductionCategories.length === 0) ||
                      (currentStep === 4 && relevantYears.length === 0)
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
        </div>
      </div>
    </section>
  );
};

export default EligibilityCalculator;
