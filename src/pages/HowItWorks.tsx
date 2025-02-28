
import React, { useState, useRef } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Link } from 'react-router-dom';
import { 
  Upload, Search, CreditCard, ChevronLeft, ChevronDown, ChevronUp, 
  Clock, Check, Download, FileCheck, Shield, PlayCircle, Calendar 
} from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';

interface Timeline {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  estimate: string;
  details: string;
}

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const HowItWorksPage: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  const { ref: timelineRef, isRevealed: timelineRevealed } = useScrollReveal();
  const { ref: detailsRef, isRevealed: detailsRevealed } = useScrollReveal();
  const { ref: videosRef, isRevealed: videosRevealed } = useScrollReveal();
  const { ref: faqRef, isRevealed: faqRevealed } = useScrollReveal();
  
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [selectedStep, setSelectedStep] = useState<string>('upload');
  const videoRef = useRef<HTMLDivElement>(null);
  
  const timeline: Timeline[] = [
    {
      id: 'upload',
      title: 'העלאת מסמכים',
      icon: <Upload className="h-8 w-8 text-white" />,
      description: 'העלאת תלושי משכורת, אישורים רפואיים, קבלות וכל מסמך רלוונטי באופן מאובטח.',
      estimate: '5 דקות',
      details: 'העלאת המסמכים למערכת היא פשוטה ומהירה. תוכל להעלות קבצים ישירות מהטלפון או המחשב, ולצלם תמונות של מסמכים באמצעות האפליקציה שלנו. המערכת שלנו מאובטחת ב-100% ומשתמשת בהצפנה מתקדמת להגנה על המידע שלך.'
    },
    {
      id: 'analysis',
      title: 'בדיקת מומחים',
      icon: <Search className="h-8 w-8 text-white" />,
      description: 'צוות המומחים שלנו עובר על המסמכים ומזהה הזדמנויות להחזר מס מקסימלי.',
      estimate: '3-5 ימים',
      details: 'המומחים שלנו, רואי חשבון מוסמכים עם ניסיון רב, בוחנים בקפידה כל מסמך לזיהוי הזדמנויות החזר. הם מכינים דו"ח מפורט, מבצעים את כל החישובים ומכינים את כל הטפסים הנדרשים לרשויות המס. אנו מעדכנים אותך בכל שלב בתהליך.'
    },
    {
      id: 'receive',
      title: 'קבלת ההחזר',
      icon: <CreditCard className="h-8 w-8 text-white" />,
      description: 'הכסף מועבר ישירות לחשבון הבנק שלך, בדרך כלל תוך 2-4 שבועות.',
      estimate: '2-4 שבועות',
      details: 'לאחר הגשת הבקשה לרשויות המס, אנו עוקבים אחר התהליך ומטפלים בכל שאלה או בקשה נוספת. ברגע שההחזר מאושר, הכסף מועבר ישירות לחשבון הבנק שלך. רק לאחר קבלת ההחזר, אנו גובים את העמלה שלנו (20% מההחזר).'
    }
  ];
  
  const faqItems: AccordionItem[] = [
    {
      id: 'faq-1',
      title: 'מה קורה אם חסר לי מסמך?',
      content: 'אל דאגה! המומחים שלנו יצרו איתך קשר ויסבירו בדיוק איזה מסמכים חסרים ואיך להשיג אותם. במקרים רבים, אנחנו יכולים לעזור בהשגת מסמכים חלופיים או לעבוד עם מה שיש בידך.'
    },
    {
      id: 'faq-2',
      title: 'כמה זמן לוקח להשיג החזר מס?',
      content: 'התהליך אורך בממוצע 2-4 שבועות מרגע שכל המסמכים הדרושים נמצאים בידינו. עם זאת, במקרים מסוימים התהליך עשוי להתארך בהתאם למורכבות התיק ועומס העבודה ברשויות המס.'
    },
    {
      id: 'faq-3',
      title: 'האם אני צריך לשלם עבור השירות מראש?',
      content: 'לא! אנחנו עובדים בשיטת "אין החזר - אין תשלום". כלומר, תשלום העמלה מתבצע רק לאחר שקיבלת את החזר המס בפועל. אם מסיבה כלשהי לא נצליח להשיג עבורך החזר, לא תשלם דבר.'
    },
    {
      id: 'faq-4',
      title: 'אילו מסמכים אני צריך לספק?',
      content: 'המסמכים הבסיסיים הנדרשים כוללים: תלושי משכורת שנתיים או טופס 106, צילום תעודת זהות, פרטי חשבון בנק, וטפסים נוספים בהתאם למצבך האישי (כגון אישורי תרומות, הוצאות רפואיות, או קבלות על הוצאות מוכרות).'
    },
    {
      id: 'faq-5',
      title: 'האם אתם מטפלים גם בשנים קודמות?',
      content: 'בהחלט! על פי חוקי מס הכנסה בישראל, ניתן לדרוש החזרי מס עבור שש השנים האחרונות. למשל, בשנת 2025 ניתן לדרוש החזרים עבור השנים 2019-2024.'
    }
  ];

  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-blue to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">איך עובד תהליך החזר המס?</h1>
            <p className="text-xl text-white/90 mb-8">
              הגמד הפיננסי הופך את תהליך החזר המס למהיר, פשוט ונטול דאגות. אנחנו מטפלים בכל הבירוקרטיה בשבילך.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-secondary"
              >
                התחל עכשיו
              </Link>
              <button 
                onClick={scrollToVideo}
                className="inline-flex items-center justify-center text-white bg-white/20 hover:bg-white/30 transition-colors py-3 px-6 rounded-lg"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                <span>צפה בסרטון</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Process */}
      <section ref={timelineRef} className={`section bg-white ${timelineRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="container-custom">
          <h2 className="section-title">שלושה צעדים פשוטים להחזר המס שלך</h2>
          <p className="section-subtitle">תהליך קבלת החזר המס פשוט, יעיל ומהיר – ואנחנו עושים את רוב העבודה בשבילך</p>
          
          <div className="relative mt-16 mb-16">
            {/* Desktop Timeline - Horizontal */}
            <div className="hidden md:block">
              {/* Connecting Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200"></div>
              
              <div className="grid grid-cols-3 gap-8 relative">
                {timeline.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                      {index + 1}
                    </div>
                    
                    {/* Step Icon */}
                    <div className="mx-auto w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center mb-6 relative z-10">
                      {step.icon}
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="inline-flex items-center text-sm text-brand-blue">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{step.estimate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Timeline - Vertical */}
            <div className="md:hidden space-y-12">
              {timeline.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connecting Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute top-16 right-8 bottom-0 w-0.5 bg-gray-200 h-full"></div>
                  )}
                  
                  <div className="flex">
                    <div>
                      {/* Step Number */}
                      <div className="absolute -top-2 right-3 bg-brand-gold text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm z-10">
                        {index + 1}
                      </div>
                      
                      {/* Step Icon */}
                      <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center relative z-10">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1 mr-6">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="inline-flex items-center text-sm text-brand-blue">
                        <Clock className="h-4 w-4 ml-1" />
                        <span>{step.estimate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="btn-primary group inline-flex items-center"
            >
              <span>התחל עכשיו</span>
              <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Step Details */}
      <section ref={detailsRef} className={`section bg-gray-50 ${detailsRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="container-custom">
          <h2 className="section-title">מה כולל כל שלב?</h2>
          <p className="section-subtitle">בחר שלב כדי לראות פרטים מלאים על התהליך</p>

          {/* Step Selector - Tab Style Navigation */}
          <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
            {timeline.map((step) => (
              <button
                key={step.id}
                className={`px-6 py-4 font-medium text-lg transition-colors relative ${
                  selectedStep === step.id
                    ? 'text-brand-blue border-b-2 border-brand-blue -mb-px'
                    : 'text-gray-600 hover:text-brand-blue'
                }`}
                onClick={() => setSelectedStep(step.id)}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Selected Step Details */}
          {timeline.map((step) => (
            <div
              key={step.id}
              className={`${
                selectedStep === step.id ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Left Column - Details */}
                <div className="md:col-span-2 glass-card p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center mr-4 flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <div className="inline-flex items-center text-sm text-brand-blue mt-1">
                        <Clock className="h-4 w-4 ml-1" />
                        <span>{step.estimate}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {step.details}
                  </p>

                  {step.id === 'upload' && (
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">מסמכים נדרשים:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                          <span>צילום תעודת זהות כולל ספח</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                          <span>תלושי משכורת או טופס 106 לשנים הרלוונטיות</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                          <span>אישור על הפקדות לקרן פנסיה/השתלמות (אם רלוונטי)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                          <span>קבלות על הוצאות רפואיות חריגות (אם רלוונטי)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 ml-2 flex-shrink-0" />
                          <span>אישורים על תרומות למוסדות מוכרים (אם רלוונטי)</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-brand-blue hover:text-blue-700 font-medium"
                        >
                          <Download className="h-5 w-5 ml-1" />
                          <span>הורד רשימת מסמכים מלאה</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {step.id === 'analysis' && (
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">הצוות המומחה שלנו:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <img 
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="רונית כהן"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="mr-3">
                            <h5 className="font-bold">רונית כהן</h5>
                            <p className="text-sm text-gray-600">רו"ח, 15 שנות ניסיון</p>
                          </div>
                        </div>
                        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="משה לוי"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="mr-3">
                            <h5 className="font-bold">משה לוי</h5>
                            <p className="text-sm text-gray-600">יועץ מס, 12 שנות ניסיון</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.id === 'receive' && (
                    <div>
                      <h4 className="font-bold text-lg mb-3">מדיניות תשלום:</h4>
                      <div className="bg-green-50 p-4 rounded-lg mb-4 border border-green-100">
                        <div className="flex items-center">
                          <Shield className="h-8 w-8 text-green-600 ml-3" />
                          <div>
                            <h5 className="font-bold text-green-800">אין החזר - אין תשלום</h5>
                            <p className="text-green-700">אנחנו גובים עמלה רק אם הצלחנו להשיג עבורך החזר מס.</p>
                          </div>
                        </div>
                      </div>
                      
                      <table className="w-full mt-4 text-sm">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="py-2 text-right">סכום ההחזר</th>
                            <th className="py-2 text-right">עמלה</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-3">עד ₪1,000</td>
                            <td className="py-3">₪200 (סכום מינימלי)</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3">₪1,001 - ₪50,000</td>
                            <td className="py-3">20% מסכום ההחזר</td>
                          </tr>
                          <tr>
                            <td className="py-3">מעל ₪50,000</td>
                            <td className="py-3">15% מסכום ההחזר</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="mt-6">
                    <Link 
                      to="/contact" 
                      className="btn-primary group inline-flex items-center"
                    >
                      <span>התחל את התהליך</span>
                      <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Column - Tools & Resources */}
                <div>
                  {step.id === 'upload' && (
                    <div className="glass-card p-6">
                      <h4 className="font-bold text-lg mb-4">רשימת מסמכים אישית</h4>
                      <p className="text-gray-600 text-sm mb-4">בחר את המצב שלך ונייצר עבורך רשימת מסמכים מותאמת אישית:</p>
                      
                      <div className="space-y-3 mb-6">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-brand-blue" />
                          <span className="mr-2 text-gray-700">שכיר/ה</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-brand-blue" />
                          <span className="mr-2 text-gray-700">עצמאי/ת</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-brand-blue" />
                          <span className="mr-2 text-gray-700">הורה לילדים</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-brand-blue" />
                          <span className="mr-2 text-gray-700">הוצאות רפואיות</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-brand-blue" />
                          <span className="mr-2 text-gray-700">מפרישים לפנסיה</span>
                        </label>
                      </div>
                      
                      <button className="w-full btn-primary">
                        הצג רשימת מסמכים
                      </button>
                    </div>
                  )}

                  {step.id === 'analysis' && (
                    <div className="glass-card p-6">
                      <h4 className="font-bold text-lg mb-4">לוח זמנים משוער</h4>
                      <p className="text-gray-600 text-sm mb-4">לאחר העלאת המסמכים, כך נראה לוח הזמנים המשוער לטיפול בהחזר שלך:</p>
                      
                      <div className="space-y-5 mb-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>בדיקה ראשונית</span>
                            <span>24-48 שעות</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-brand-blue h-2 rounded-full w-[100%]"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>ניתוח מקצועי</span>
                            <span>2-3 ימים</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-brand-blue h-2 rounded-full w-[75%]"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>הכנת הבקשה</span>
                            <span>1-2 ימים</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-brand-blue h-2 rounded-full w-[60%]"></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>טיפול ברשות המסים</span>
                            <span>2-4 שבועות</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-brand-blue h-2 rounded-full w-[25%]"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center mt-6">
                        <Calendar className="h-5 w-5 text-brand-blue ml-2" />
                        <span className="text-sm text-gray-700">אנו שואפים להשלים את כל התהליך בתוך 30 יום</span>
                      </div>
                    </div>
                  )}

                  {step.id === 'receive' && (
                    <div className="glass-card p-6">
                      <h4 className="font-bold text-lg mb-4">מחשבון זמן החזר</h4>
                      <p className="text-gray-600 text-sm mb-4">הזן את תאריך העלאת המסמכים לקבלת הערכה של תאריך קבלת ההחזר:</p>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">תאריך העלאת מסמכים</label>
                        <input
                          type="date"
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      
                      <button className="w-full btn-primary mb-4">
                        חשב מועד החזר משוער
                      </button>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
                        <p className="text-sm text-gray-600 mb-1">תאריך החזר משוער:</p>
                        <p className="font-bold text-brand-blue">31 במאי, 2025</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Video Testimonials */}
      <section ref={videosRef} className={`section bg-white ${videosRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="container-custom">
          <h2 className="section-title" ref={videoRef}>הסיפורים האמיתיים מאחורי ההחזרים</h2>
          <p className="section-subtitle">לקוחות שלנו משתפים את החוויה שלהם עם תהליך ההחזר וכמה חסכו</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Customer testimonial thumbnail" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity hover:opacity-90">
                  <PlayCircle className="h-16 w-16 text-white/90" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">דינה, מורה מחיפה</h3>
                <p className="text-gray-600 mb-3">
                  "קיבלתי ₪12,000 בחזרה על שנים שלא ידעתי שמגיע לי החזר בכלל!"
                </p>
                <div className="bg-green-50 p-2 rounded text-center">
                  <span className="text-green-700 font-bold">סכום ההחזר: ₪12,000</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Customer testimonial thumbnail" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity hover:opacity-90">
                  <PlayCircle className="h-16 w-16 text-white/90" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">משה, מהנדס מתל אביב</h3>
                <p className="text-gray-600 mb-3">
                  "תהליך פשוט ומהיר, המומחים עשו את כל העבודה ושילמתי רק אחרי שקיבלתי את הכסף."
                </p>
                <div className="bg-green-50 p-2 rounded text-center">
                  <span className="text-green-700 font-bold">סכום ההחזר: ₪9,350</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Customer testimonial thumbnail" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity hover:opacity-90">
                  <PlayCircle className="h-16 w-16 text-white/90" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">יעל, עצמאית מירושלים</h3>
                <p className="text-gray-600 mb-3">
                  "כעצמאית לא האמנתי שאני זכאית להחזר. בזכות הגמד הפיננסי גיליתי שמגיעים לי אלפי שקלים."
                </p>
                <div className="bg-green-50 p-2 rounded text-center">
                  <span className="text-green-700 font-bold">סכום ההחזר: ₪15,800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section ref={faqRef} className={`section bg-gray-50 ${faqRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="container-custom">
          <h2 className="section-title">שאלות נפוצות על התהליך</h2>
          <p className="section-subtitle">מצאו תשובות לשאלות הנפוצות ביותר בנוגע לתהליך החזר המס</p>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item) => (
              <div key={item.id} className="mb-4">
                <button
                  className={`w-full text-right p-5 flex items-center justify-between glass-card transition-all duration-300 ${
                    openFaq === item.id ? 'shadow-md' : 'hover:shadow-sm'
                  }`}
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={openFaq === item.id}
                >
                  <h3 className={`font-bold ${openFaq === item.id ? 'text-brand-blue' : 'text-gray-800'}`}>
                    {item.title}
                  </h3>
                  
                  {openFaq === item.id ? (
                    <ChevronUp className="h-5 w-5 text-brand-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                {openFaq === item.id && (
                  <div className="p-5 bg-gray-50 rounded-b-lg animate-fade-in">
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/faq" 
              className="inline-flex items-center font-medium text-brand-blue hover:text-blue-700"
            >
              <span>לכל השאלות הנפוצות</span>
              <ChevronLeft className="mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trust Badges & CTA */}
      <section className="section bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center bg-gray-50 px-6 py-3 rounded-lg">
                <Shield className="h-8 w-8 text-brand-blue ml-3" />
                <div className="text-right">
                  <p className="font-bold">100% מאובטח</p>
                  <p className="text-sm text-gray-600">SSL מוצפן</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 px-6 py-3 rounded-lg">
                <FileCheck className="h-8 w-8 text-brand-blue ml-3" />
                <div className="text-right">
                  <p className="font-bold">ISO 27001</p>
                  <p className="text-sm text-gray-600">אבטחת מידע מוסמכת</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 px-6 py-3 rounded-lg">
                <Check className="h-8 w-8 text-brand-blue ml-3" />
                <div className="text-right">
                  <p className="font-bold">רואי חשבון מוסמכים</p>
                  <p className="text-sm text-gray-600">+15 שנות ניסיון</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">מוכנים להתחיל בתהליך החזר המס?</h2>
            <p className="text-gray-600 mb-6">המומחים שלנו מחכים לעזור לך לקבל את הכסף שמגיע לך</p>
            <Link 
              to="/eligibility" 
              className="btn-secondary group inline-flex items-center"
            >
              <span>בדוק זכאותך</span>
              <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowItWorksPage;
