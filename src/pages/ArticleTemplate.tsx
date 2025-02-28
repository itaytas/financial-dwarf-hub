
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Clock, Calendar, ChevronLeft, Download, MessageSquare } from 'lucide-react';

interface ArticleTemplateProps {
  title?: string;
  content?: React.ReactNode;
}

// This is a template component for individual blog articles
const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ 
  title = "המדריך המלא להחזרי מס בישראל", 
  content 
}) => {
  const { articleId } = useParams();
  
  // In a real app, you would fetch the article data based on the articleId
  // For now, we'll just use the sample content

  return (
    <MainLayout>
      <article className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="mb-6">
              <ol className="flex text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-brand-blue">בית</Link>
                </li>
                <li className="mx-2">/</li>
                <li>
                  <Link to="/blog" className="hover:text-brand-blue">בלוג</Link>
                </li>
                <li className="mx-2">/</li>
                <li>
                  <Link to="/blog/category/tax-guides" className="hover:text-brand-blue">מדריכי החזרי מס</Link>
                </li>
                <li className="mx-2">/</li>
                <li className="text-gray-800">המדריך המלא להחזרי מס</li>
              </ol>
            </nav>
            
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 ml-1" />
                  <span>פורסם: 12.04.2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 ml-1" />
                  <span>15 דקות קריאה</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-8 border border-blue-100">
                <h2 className="font-bold text-lg mb-2">תוכן המאמר:</h2>
                <ul className="space-y-1">
                  <li>
                    <a href="#intro" className="text-brand-blue hover:underline">1. מבוא להחזרי מס</a>
                  </li>
                  <li>
                    <a href="#eligibility" className="text-brand-blue hover:underline">2. מי זכאי להחזר מס?</a>
                  </li>
                  <li>
                    <a href="#documents" className="text-brand-blue hover:underline">3. המסמכים הנדרשים</a>
                  </li>
                  <li>
                    <a href="#process" className="text-brand-blue hover:underline">4. תהליך הגשת בקשה להחזר</a>
                  </li>
                  <li>
                    <a href="#deadlines" className="text-brand-blue hover:underline">5. מועדי הגשה ולוחות זמנים</a>
                  </li>
                  <li>
                    <a href="#faq" className="text-brand-blue hover:underline">6. שאלות נפוצות</a>
                  </li>
                </ul>
              </div>

              {/* Featured Image */}
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="המדריך המלא להחזרי מס בישראל"
                className="w-full h-auto rounded-xl mb-8"
              />
            </header>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-10">
              <section id="intro">
                <h2>מבוא להחזרי מס</h2>
                <p>
                  החזר מס הוא תהליך שבו אדם מקבל בחזרה כספים ששילם ביתר לרשויות המס. 
                  במהלך השנה, רוב האנשים משלמים מס הכנסה באופן אוטומטי דרך ניכויים במשכורת או תשלומים מקדמיים. 
                  לעתים קרובות, אנשים משלמים יותר מס ממה שהם נדרשים לפי החוק, במיוחד אם הם זכאים להטבות, ניכויים או זיכויים מיוחדים.
                </p>
                <p>
                  בישראל, ניתן לדרוש החזרי מס עבור שש השנים האחרונות. 
                  כלומר, בשנת 2024 ניתן לתבוע החזרים עבור השנים 2018 עד 2023. 
                  לכן, חשוב לבדוק את זכאותך להחזר מס לפני שפג תוקף האפשרות לדרוש אותו.
                </p>
                
                {/* Mid-article CTA */}
                <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-100 flex flex-col sm:flex-row justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg mb-2">לא בטוח אם מגיע לך החזר מס?</h3>
                    <p className="text-gray-700">בדוק את זכאותך עכשיו ב-3 דקות בלבד</p>
                  </div>
                  <Link 
                    to="/eligibility" 
                    className="btn-secondary mt-4 sm:mt-0 whitespace-nowrap"
                  >
                    בדוק זכאותך עכשיו
                  </Link>
                </div>
              </section>
              
              <section id="eligibility">
                <h2>מי זכאי להחזר מס?</h2>
                <p>
                  רוב האנשים בישראל זכאים להחזר מס, אך רבים לא מודעים לכך. 
                  להלן רשימה של מצבים נפוצים שבהם אנשים עשויים להיות זכאים להחזר:
                </p>
                <ul>
                  <li>עבדת בכמה מקומות עבודה במקביל</li>
                  <li>עבדת רק בחלק מהשנה</li>
                  <li>הפקדת לקרן פנסיה או קרן השתלמות</li>
                  <li>היו לך הוצאות רפואיות משמעותיות</li>
                  <li>תרמת למוסדות מוכרים</li>
                  <li>השקעת בהשתלמויות מקצועיות</li>
                  <li>עבדת מהבית או היו לך הוצאות עבודה אחרות</li>
                  <li>אתה הורה לילדים מתחת לגיל 18</li>
                </ul>
                
                <div className="bg-green-50 p-4 rounded-lg my-4 border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2">דוגמה: משה קיבל ₪9,000 בחזרה</h4>
                  <p className="text-green-800">
                    משה, מהנדס תוכנה מירושלים, עבד בשני מקומות עבודה במקביל והפקיד לקרן פנסיה. 
                    הוא לא ידע שהוא זכאי להחזר, אך לאחר שפנה אלינו, הצלחנו להשיג עבורו החזר של ₪9,000 על שנת 2021 בלבד!
                  </p>
                </div>
              </section>
              
              <section id="documents">
                <h2>המסמכים הנדרשים</h2>
                <p>
                  כדי להגיש בקשה להחזר מס, יש צורך באיסוף מספר מסמכים חשובים. 
                  המסמכים הדרושים משתנים בהתאם למצבך האישי, אך להלן רשימה בסיסית:
                </p>
                <ul>
                  <li>טופס 106 מכל מקומות העבודה</li>
                  <li>צילום תעודת זהות כולל ספח</li>
                  <li>אישור על הפקדות לקרן פנסיה או קרן השתלמות</li>
                  <li>קבלות על הוצאות רפואיות</li>
                  <li>קבלות על תרומות למוסדות מוכרים</li>
                  <li>אישור על הוצאות החזקת ילדים במסגרות (אם רלוונטי)</li>
                  <li>אישורים על השקעות בהשכלה או הכשרה מקצועית</li>
                </ul>
                
                <div className="flex justify-center my-6">
                  <a 
                    href="#" 
                    className="flex items-center bg-brand-blue text-white py-3 px-6 rounded-lg"
                  >
                    <Download className="h-5 w-5 ml-2" />
                    <span>הורד רשימת מסמכים מלאה</span>
                  </a>
                </div>
              </section>
              
              <section id="process">
                <h2>תהליך הגשת בקשה להחזר</h2>
                <p>
                  הגשת בקשה להחזר מס יכולה להיעשות בשתי דרכים עיקריות:
                </p>
                <ol>
                  <li>
                    <strong>הגשה עצמאית:</strong> באמצעות טופס 135 שניתן להוריד מאתר רשות המסים, למלא ולהגיש לפקיד השומה הקרוב למקום מגוריך.
                  </li>
                  <li>
                    <strong>הגשה באמצעות מומחה:</strong> פנייה לחברה מקצועית כמו הגמד הפיננסי, שתטפל בכל התהליך עבורך.
                  </li>
                </ol>
                <p>
                  היתרון בהגשה באמצעות מומחה הוא שהם יודעים בדיוק אילו הוצאות ניתן לתבוע, אילו מסמכים דרושים, ואיך למקסם את ההחזר שלך.
                </p>
              </section>
              
              <section id="deadlines">
                <h2>מועדי הגשה ולוחות זמנים</h2>
                <p>
                  חשוב לדעת את המועדים האחרונים להגשת בקשה להחזר מס:
                </p>
                <ul>
                  <li>ניתן לדרוש החזר מס לתקופה של עד 6 שנים אחורה מהשנה הנוכחית.</li>
                  <li>לדוגמה, בשנת 2024 ניתן להגיש בקשות עבור השנים 2018-2023.</li>
                  <li>הבקשה לשנת 2018 חייבת להיות מוגשת עד 31.12.2024, אחרת תתיישן.</li>
                </ul>
                <p>
                  משך הטיפול בבקשה להחזר מס נע בין 30 ל-90 יום, כתלות בעומס ברשות המסים ובמורכבות התיק.
                </p>
              </section>
              
              <section id="faq">
                <h2>שאלות נפוצות</h2>
                
                <div className="space-y-6 mt-4">
                  <div>
                    <h3 className="font-bold text-xl">האם כדאי לבדוק זכאות להחזר מס גם אם אני מרוויח משכורת נמוכה?</h3>
                    <p>
                      בהחלט! גם אם אתה מרוויח משכורת נמוכה, ייתכן שעדיין מגיע לך החזר מס בגין זיכויים שונים כמו נקודות זיכוי על ילדים, 
                      הפקדות לקרן פנסיה, או הוצאות רפואיות. בכל מקרה, הבדיקה אצלנו היא ללא עלות וללא התחייבות.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl">האם אפשר לקבל החזר מס אם אני עובד מספר חודשים בשנה?</h3>
                    <p>
                      כן, במקרים רבים עובדים שעבדו רק חלק מהשנה זכאים להחזרי מס גבוהים יותר. זאת מכיוון שמערכת המס מחשבת את שיעור המס כאילו הכנסתך השנתית היא פי 12 מההכנסה החודשית שלך, 
                      אך בפועל הרווחת פחות במהלך השנה.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl">כמה עולה לבדוק את הזכאות להחזר מס?</h3>
                    <p>
                      אצלנו בדיקת הזכאות היא חינם לגמרי וללא התחייבות. אם נמצא שאתה זכאי להחזר מס, העמלה שלנו היא אחוז מסוים מסכום ההחזר בפועל - כלומר, רק אם תקבל החזר, אנחנו מקבלים תשלום.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Article Footer with social sharing and related articles */}
            <footer>
              <div className="flex flex-wrap justify-between border-t border-b border-gray-200 py-4 mb-6">
                <div className="flex items-center">
                  <span className="text-gray-600 ml-2">שתף:</span>
                  <div className="flex space-x-2 space-x-reverse">
                    <button className="text-gray-600 hover:text-green-600 p-1" title="שתף בוואטסאפ">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.39-.025-.54-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 p-1" title="שתף בפייסבוק">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Link to="/blog" className="text-brand-blue hover:underline flex items-center">
                    <ChevronLeft className="h-5 w-5 ml-1" />
                    חזרה לבלוג
                  </Link>
                </div>
              </div>
              
              {/* Related Articles */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6">מאמרים קשורים</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link to="/blog/tax-refund-for-employees" className="block p-4 border border-gray-200 rounded-lg hover:border-brand-blue transition-colors">
                    <h4 className="font-bold hover:text-brand-blue transition-colors mb-2">החזרי מס לשכירים - המדריך המלא</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 ml-1" />
                      <span>8 דקות קריאה</span>
                    </div>
                  </Link>
                  
                  <Link to="/blog/tax-refunds-for-medical-expenses" className="block p-4 border border-gray-200 rounded-lg hover:border-brand-blue transition-colors">
                    <h4 className="font-bold hover:text-brand-blue transition-colors mb-2">איך לקבל החזר מס על הוצאות רפואיות</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 ml-1" />
                      <span>6 דקות קריאה</span>
                    </div>
                  </Link>
                  
                  <Link to="/blog/common-tax-refund-mistakes" className="block p-4 border border-gray-200 rounded-lg hover:border-brand-blue transition-colors">
                    <h4 className="font-bold hover:text-brand-blue transition-colors mb-2">5 טעויות נפוצות שמונעות ממך החזר מס</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 ml-1" />
                      <span>7 דקות קריאה</span>
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Comments Section */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">תגובות (3)</h3>
                  <button className="text-brand-blue hover:underline flex items-center">
                    <MessageSquare className="h-4 w-4 ml-1" />
                    הוסף תגובה
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">יעל כהן</h4>
                      <span className="text-sm text-gray-500">לפני 3 ימים</span>
                    </div>
                    <p className="text-gray-700">
                      תודה רבה על המדריך המקיף! הצלחתי לקבל החזר של 4,000 ₪ בזכות העצות שלכם.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">דוד לוי</h4>
                      <span className="text-sm text-gray-500">לפני שבוע</span>
                    </div>
                    <p className="text-gray-700">
                      האם יש אפשרות לקבל החזר מס על הוצאות לימודים אקדמיים? לא ראיתי התייחסות לזה במאמר.
                    </p>
                    
                    <div className="mr-8 mt-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-bold">הגמד הפיננסי</h4>
                        <span className="text-sm text-gray-500">לפני 6 ימים</span>
                      </div>
                      <p className="text-gray-700">
                        שלום דוד, בהחלט ניתן לקבל זיכוי מס על לימודים אקדמיים. ישנן נקודות זיכוי עבור תואר ראשון ותואר שני. נשמח לתת לך מידע נוסף בפגישת ייעוץ אישית.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </MainLayout>
  );
};

export default ArticleTemplate;
