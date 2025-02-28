
import React, { useState } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { 
  Receipt, Clock, FileText, ChevronDown, ChevronUp 
} from 'lucide-react';

const EducationalContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'expenses' | 'limitations' | 'documents'>('expenses');
  const [openAccordion, setOpenAccordion] = useState<string | null>('acc-1');
  
  const { ref, isRevealed } = useScrollReveal();
  
  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section ref={ref} className={`section bg-gray-50 ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">מידע חשוב על החזרי מס</h2>
        <p className="section-subtitle">התמצאות בחוקי המס יכולה לעזור לך למקסם את ההחזר שלך</p>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
                activeTab === 'expenses' 
                  ? 'text-brand-blue border-b-2 border-brand-blue' 
                  : 'text-gray-600 hover:text-brand-blue'
              }`}
              onClick={() => setActiveTab('expenses')}
            >
              <Receipt className="h-5 w-5 mx-auto mb-1" />
              <span>מהן ההוצאות המוכרות?</span>
            </button>
            
            <button
              className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
                activeTab === 'limitations' 
                  ? 'text-brand-blue border-b-2 border-brand-blue' 
                  : 'text-gray-600 hover:text-brand-blue'
              }`}
              onClick={() => setActiveTab('limitations')}
            >
              <Clock className="h-5 w-5 mx-auto mb-1" />
              <span>חוק ההתיישנות</span>
            </button>
            
            <button
              className={`flex-1 py-4 px-4 text-center font-medium transition-colors ${
                activeTab === 'documents' 
                  ? 'text-brand-blue border-b-2 border-brand-blue' 
                  : 'text-gray-600 hover:text-brand-blue'
              }`}
              onClick={() => setActiveTab('documents')}
            >
              <FileText className="h-5 w-5 mx-auto mb-1" />
              <span>מסמכים נדרשים</span>
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {/* Recognized Expenses */}
            {activeTab === 'expenses' && (
              <div>
                <h3 className="font-bold text-xl mb-4">הוצאות מוכרות להחזר מס</h3>
                <p className="text-gray-600 mb-6">
                  ישנן מגוון הוצאות שניתן לתבוע בגינן החזר מס. הנה הקטגוריות העיקריות:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <button
                      className={`w-full p-4 rounded-lg border flex items-center justify-between ${
                        openAccordion === 'acc-1' 
                          ? 'bg-blue-50 border-blue-200' 
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleAccordion('acc-1')}
                    >
                      <span className="font-bold">הוצאות עבודה</span>
                      {openAccordion === 'acc-1' ? (
                        <ChevronUp className="h-5 w-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                    
                    {openAccordion === 'acc-1' && (
                      <div className="p-4 border border-t-0 border-blue-200 rounded-b-lg bg-blue-50">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>נסיעות לעבודה וממנה</li>
                          <li>ביגוד מקצועי, מדים וכלי עבודה</li>
                          <li>ארוחות במקום העבודה</li>
                          <li>השתלמויות מקצועיות וספרות מקצועית</li>
                          <li>הוצאות טלפון ואינטרנט לצרכי עבודה</li>
                          <li>שכירת משרד או עבודה מהבית</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <button
                      className={`w-full p-4 rounded-lg border flex items-center justify-between ${
                        openAccordion === 'acc-2' 
                          ? 'bg-blue-50 border-blue-200' 
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleAccordion('acc-2')}
                    >
                      <span className="font-bold">הוצאות רפואיות</span>
                      {openAccordion === 'acc-2' ? (
                        <ChevronUp className="h-5 w-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                    
                    {openAccordion === 'acc-2' && (
                      <div className="p-4 border border-t-0 border-blue-200 rounded-b-lg bg-blue-50">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>הוצאות רפואיות חריגות (מעבר ל-12.5% מההכנסה)</li>
                          <li>ביטוחי בריאות פרטיים</li>
                          <li>טיפולים רפואיים שאינם מכוסים ע"י קופת חולים</li>
                          <li>טיפולי שיניים יקרים</li>
                          <li>נסיעות לטיפולים רפואיים</li>
                          <li>אשפוז פרטי ותרופות שאינן בסל הבריאות</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <button
                      className={`w-full p-4 rounded-lg border flex items-center justify-between ${
                        openAccordion === 'acc-3' 
                          ? 'bg-blue-50 border-blue-200' 
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleAccordion('acc-3')}
                    >
                      <span className="font-bold">חסכונות פיננסיים</span>
                      {openAccordion === 'acc-3' ? (
                        <ChevronUp className="h-5 w-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                    
                    {openAccordion === 'acc-3' && (
                      <div className="p-4 border border-t-0 border-blue-200 rounded-b-lg bg-blue-50">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>הפקדות לקרן פנסיה</li>
                          <li>הפקדות לקרן השתלמות</li>
                          <li>ביטוח אובדן כושר עבודה</li>
                          <li>קופות גמל</li>
                          <li>תוכניות חיסכון מוכרות</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Statute of Limitations */}
            {activeTab === 'limitations' && (
              <div>
                <h3 className="font-bold text-xl mb-4">חוק ההתיישנות בהחזרי מס</h3>
                <p className="text-gray-600 mb-6">
                  לפי חוקי מס הכנסה בישראל, ניתן לתבוע החזרי מס רק עד 6 שנים אחורה מהשנה הנוכחית. 
                  חשוב להגיש את הבקשה בזמן לפני שהזכאות מתיישנת.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 border text-right">שנת מס</th>
                        <th className="p-3 border text-right">מועד אחרון להגשה</th>
                        <th className="p-3 border text-right">סטטוס</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border">2018</td>
                        <td className="p-3 border">31/12/2024</td>
                        <td className="p-3 border">
                          <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                            זמן מוגבל
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">2019</td>
                        <td className="p-3 border">31/12/2025</td>
                        <td className="p-3 border">
                          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            פתוח
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">2020</td>
                        <td className="p-3 border">31/12/2026</td>
                        <td className="p-3 border">
                          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            פתוח
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">2021</td>
                        <td className="p-3 border">31/12/2027</td>
                        <td className="p-3 border">
                          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            פתוח
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">2022</td>
                        <td className="p-3 border">31/12/2028</td>
                        <td className="p-3 border">
                          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            פתוח
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">2023</td>
                        <td className="p-3 border">31/12/2029</td>
                        <td className="p-3 border">
                          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            פתוח
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border">2024</td>
                        <td className="p-3 border">31/12/2030</td>
                        <td className="p-3 border">
                          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            פתוח
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <p className="text-amber-800 font-medium">
                    שים לב! שנת המס 2018 עומדת להתיישן בסוף 2024. אם מגיע לך החזר עבור שנה זו, חשוב להגיש בקשה בהקדם.
                  </p>
                </div>
              </div>
            )}
            
            {/* Required Documents */}
            {activeTab === 'documents' && (
              <div>
                <h3 className="font-bold text-xl mb-4">מסמכים נדרשים להחזר מס</h3>
                <p className="text-gray-600 mb-6">
                  על מנת לקבל את מלוא ההחזר המגיע לך, חשוב לספק את כל המסמכים הרלוונטיים. הנה רשימת המסמכים הבסיסיים הנדרשים:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold mb-3 border-b pb-2">לשכירים</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>טופס 106 לכל שנת מס</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>תלושי משכורת לכל השנה</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>אישורי הפקדות לפנסיה וקרן השתלמות</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold mb-3 border-b pb-2">לעצמאים</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>דו"ח שנתי למס הכנסה</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>אישורי הפקדות לפנסיה וקרן השתלמות</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>חשבוניות וקבלות של הוצאות עסקיות</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold mb-3 border-b pb-2">לתובעי זיכוי מס בגין ילדים</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>צילום תעודת זהות כולל ספח</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>אישורי מסגרות חינוך לילדים (אם רלוונטי)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold mb-3 border-b pb-2">לתובעי החזר על הוצאות רפואיות</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>קבלות על הוצאות רפואיות</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>אישורים רפואיים רלוונטיים</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded text-blue-600 mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span>אישורי תשלום לביטוחי בריאות פרטיים</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="מסמכי מס" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h4 className="text-white font-bold text-xl mb-2">צריך עזרה בהבנת המסמכים?</h4>
                      <p className="text-white/80 mb-4">
                        המומחים שלנו ישמחו לסייע לך להבין איזה מסמכים דרושים במקרה שלך
                      </p>
                      <a 
                        href="/contact" 
                        className="inline-block bg-white text-brand-blue py-2 px-4 rounded-lg font-medium shadow-md hover:bg-opacity-90 transition-all"
                      >
                        דבר עם מומחה עכשיו
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalContent;
