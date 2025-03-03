
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Search, Lock, Clock, Shield, FileCheck, LockKeyhole, FileText, Server } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PrivacyPolicy = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterContent = (content: string) => {
    if (!searchTerm) return true;
    return content.toLowerCase().includes(searchTerm.toLowerCase());
  };

  return (
    <MainLayout>
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">מדיניות פרטיות</h1>
            <p className="text-gray-600">עודכן לאחרונה: 15 במאי, 2025</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pr-10 border border-gray-300 rounded-lg text-right"
              placeholder="חפש במדיניות הפרטיות..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Introduction */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Shield className="h-5 w-5 ml-2 text-brand-blue" />
              תמצית המדיניות
            </h2>
            <p className="text-lg">
              פרטיותך חשובה לנו. אנחנו אוספים רק את המידע הנחוץ להחזרי המס שלך, כולל שם, תעודת זהות ומסמכי מס. המידע נשמר בשרתים מאובטחים בישראל, ומשותף עם רשות המסים בלבד. המידע נשמר למשך 6 שנים כנדרש בחוק.
            </p>
          </div>

          {/* Data Handling Flowchart */}
          <div className="my-12 p-6 glass-card">
            <h2 className="text-2xl font-bold mb-8 text-center">איך אנחנו מטפלים במידע שלך</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <div className="p-3 bg-blue-100 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">1. איסוף</h3>
                <p className="text-sm">אנו אוספים רק את המידע הנחוץ להחזרי המס שלך</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Server className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">2. אחסון</h3>
                <p className="text-sm">המידע נשמר בשרתים מאובטחים בישראל</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <div className="p-3 bg-green-100 rounded-full mb-4">
                  <FileCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">3. שימוש</h3>
                <p className="text-sm">המידע משמש רק להחזרי המס שלך ונשמר כנדרש בחוק</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {filterContent('איזה מידע אנו אוספים') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">1</span>
                  איזה מידע אנו אוספים
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    לצורך מתן שירותי החזרי מס, החברה אוספת את המידע הבא:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6 mb-4">
                    <li>פרטים אישיים: שם מלא, מספר תעודת זהות, תאריך לידה, מצב משפחתי</li>
                    <li>פרטי התקשרות: כתובת, מספר טלפון, כתובת דוא"ל</li>
                    <li>מסמכי מס: תלושי שכר, טפסי 106, אישורים על הפקדות לקופות גמל ופנסיה</li>
                    <li>פרטי חשבון בנק: לצורך העברת החזרי המס</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="font-bold mb-2">גרסה מפושטת</h3>
                    <p>אנחנו אוספים את הפרטים האישיים שלך (שם, ת.ז.) ומסמכי המס שלך כדי לטפל בהחזרי המס. אנחנו לא אוספים מידע שאינו דרוש לתהליך.</p>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    בהתאם לחוק הגנת הפרטיות, תשמ"א-1981, איסוף המידע נעשה רק לאחר קבלת הסכמתך ורק למטרות המפורטות במדיניות זו.
                  </p>
                </div>
              </section>
            )}

            {filterContent('איך אנו מאחסנים את המידע') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">2</span>
                  איך אנו מאחסנים את המידע
                </h2>
                <div className="glass-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full ml-4">
                      <LockKeyhole className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-lg font-medium">שרתים מאובטחים בישראל</p>
                  </div>
                  <p className="mb-4">
                    המידע האישי שלך מאוחסן בשרתים מאובטחים הממוקמים בישראל. אנו מיישמים אמצעי אבטחה טכנולוגיים ופיזיים מתקדמים כדי להגן על המידע האישי שלך מפני גישה, שימוש או חשיפה בלתי מורשים.
                  </p>
                  <p className="mb-4">
                    <strong>אמצעי האבטחה שלנו כוללים:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6 mb-4">
                    <li>הצפנת SSL/TLS לכל העברת נתונים</li>
                    <li>הצפנת מידע רגיש במאגרי הנתונים</li>
                    <li>גישה מוגבלת למידע אישי על בסיס "צריך לדעת"</li>
                    <li>ניטור ובקרת אבטחה רציפים</li>
                    <li>גיבויים מאובטחים ותוכניות להתאוששות מאסון</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="font-bold mb-2">גרסה מפושטת</h3>
                    <p>אנחנו שומרים את המידע שלך על שרתים מאובטחים בישראל. אנחנו משתמשים בהצפנה ובמערכות אבטחה מתקדמות כדי להגן על הנתונים שלך.</p>
                  </div>
                </div>
              </section>
            )}

            {filterContent('שיתוף מידע עם גורמים שלישיים') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">3</span>
                  שיתוף מידע עם גורמים שלישיים
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    אנו משתפים את המידע האישי שלך רק עם רשות המסים בישראל, וזאת אך ורק לצורך טיפול בבקשות להחזרי מס. איננו מוכרים או משכירים את המידע האישי שלך לצדדים שלישיים למטרות שיווק.
                  </p>
                  <p className="mb-4">
                    <strong>שיתוף מידע עם גורמים נוספים יתקיים רק במקרים הבאים:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6 mb-4">
                    <li>כאשר יש צורך חוקי (כגון צו בית משפט)</li>
                    <li>עם ספקי שירות שעוזרים לנו בתפעול העסק (כגון שירותי ענן מאובטחים)</li>
                    <li>כחלק ממיזוג, רכישה, או מכירת נכסים (בכפוף להודעה מראש)</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="font-bold mb-2">גרסה מפושטת</h3>
                    <p>אנחנו משתפים את המידע שלך רק עם רשות המסים כדי לטפל בהחזרי המס שלך. אנחנו לא מוכרים את המידע שלך לאף אחד.</p>
                  </div>
                </div>
              </section>
            )}

            {filterContent('תקופת שמירת המידע') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">4</span>
                  תקופת שמירת המידע
                </h2>
                <div className="glass-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-yellow-100 rounded-full ml-4">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <p className="text-lg font-medium">שמירה למשך 6 שנים</p>
                  </div>
                  
                  {/* Timeline visualization */}
                  <div className="relative mb-8 mt-6">
                    <div className="absolute top-0 bottom-0 right-9 w-1 bg-gray-200"></div>
                    <div className="space-y-8">
                      <div className="flex">
                        <div className="bg-brand-blue w-5 h-5 rounded-full relative right-7"></div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex-grow mr-4">
                          <h4 className="font-bold">איסוף המידע</h4>
                          <p>כאשר אתה נרשם לשירותינו ומספק את המסמכים</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-brand-blue w-5 h-5 rounded-full relative right-7"></div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex-grow mr-4">
                          <h4 className="font-bold">טיפול בבקשה להחזר מס</h4>
                          <p>במהלך תהליך הטיפול והגשת הבקשה לרשות המסים</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-brand-blue w-5 h-5 rounded-full relative right-7"></div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex-grow mr-4">
                          <h4 className="font-bold">שמירה למשך 6 שנים</h4>
                          <p>בהתאם לדרישות החוק, לאחר סיום הטיפול</p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-red-500 w-5 h-5 rounded-full relative right-7"></div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex-grow mr-4">
                          <h4 className="font-bold">מחיקת המידע</h4>
                          <p>בתום 6 שנים, או לפי בקשתך (בכפוף למגבלות חוקיות)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    בהתאם לדרישות החוק בישראל, אנו שומרים את המידע האישי והמסמכים שלך למשך 6 שנים מתום השנה שבה הושלם הטיפול בהחזר המס. זאת כדי לעמוד בדרישות החוק ולהגן על זכויותיך במקרה של ביקורת מס.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="font-bold mb-2">גרסה מפושטת</h3>
                    <p>אנחנו שומרים את המידע שלך למשך 6 שנים כפי שנדרש בחוק. לאחר מכן, אנחנו מוחקים אותו באופן מאובטח.</p>
                  </div>
                </div>
              </section>
            )}

            {filterContent('הזכויות שלך') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">5</span>
                  הזכויות שלך
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    בהתאם לחוק הגנת הפרטיות, יש לך זכויות מסוימות בנוגע למידע האישי שלך:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6 mb-4">
                    <li><strong>זכות עיון:</strong> הזכות לדעת אם אנו מחזיקים במידע אישי עליך ולקבל עותק ממנו</li>
                    <li><strong>זכות תיקון:</strong> הזכות לתקן מידע לא מדויק או לא שלם</li>
                    <li><strong>זכות למחיקה:</strong> הזכות לבקש שנמחק את המידע האישי שלך (בכפוף למגבלות חוקיות)</li>
                    <li><strong>זכות להגביל עיבוד:</strong> הזכות לבקש שנגביל את עיבוד המידע האישי שלך</li>
                    <li><strong>זכות ניידות:</strong> הזכות לקבל את המידע האישי שלך בפורמט מובנה</li>
                  </ul>
                  
                  <p className="mb-4">
                    כדי לממש את זכויותיך, אנא צור קשר עמנו באמצעות המידע המפורט בסוף המדיניות.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="font-bold mb-2">גרסה מפושטת</h3>
                    <p>יש לך זכות לראות, לתקן או למחוק את המידע שלך. צור איתנו קשר אם אתה רוצה לממש את הזכויות האלה.</p>
                  </div>
                </div>
              </section>
            )}

            {filterContent('מדיניות עוגיות') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">6</span>
                  מדיניות עוגיות
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    האתר שלנו משתמש בעוגיות (cookies) ובטכנולוגיות דומות כדי לשפר את חווית המשתמש שלך ולנתח את השימוש באתר. אנו משתמשים בעוגיות לניתוח שימוש בלבד ולא למטרות פרסום או מעקב אישי.
                  </p>
                  <p className="mb-4">
                    <strong>סוגי העוגיות שאנו משתמשים בהן:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6 mb-4">
                    <li><strong>עוגיות הכרחיות:</strong> נדרשות לתפקוד האתר</li>
                    <li><strong>עוגיות אנליטיקה:</strong> לניתוח אנונימי של השימוש באתר</li>
                  </ul>
                  
                  <p className="mb-4">
                    אתה יכול לשלוט בעוגיות באמצעות הגדרות הדפדפן שלך. עם זאת, חסימת כל העוגיות עלולה להשפיע על חוויית הגלישה שלך ועל הפונקציונליות של האתר.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="font-bold mb-2">גרסה מפושטת</h3>
                    <p>אנחנו משתמשים בעוגיות רק כדי לוודא שהאתר עובד כמו שצריך ולהבין איך משתמשים בו. אנחנו לא עוקבים אחריך למטרות פרסום.</p>
                  </div>
                </div>
              </section>
            )}

            {filterContent('ציות לחוקים') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">7</span>
                  ציות לחוקים
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    המדיניות שלנו מתוכננת לציית לחוקים ולתקנות החלים בישראל, כולל:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6 mb-4">
                    <li>חוק הגנת הפרטיות, תשמ"א-1981</li>
                    <li>תקנות הגנת הפרטיות (אבטחת מידע), תשע"ז-2017</li>
                    <li>חוק זכויות החולה, תשנ"ו-1996 (ככל שרלוונטי)</li>
                  </ul>
                  
                  <p className="mb-4">
                    אנו עוקבים באופן שוטף אחר שינויים בחקיקה ובתקנות הרלוונטיות, ומעדכנים את מדיניות הפרטיות שלנו בהתאם.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <h3 className="font-bold mb-2">גרסה מפושטת</h3>
                    <p>אנחנו פועלים לפי כל חוקי הפרטיות בישראל ומעדכנים את המדיניות שלנו בהתאם לשינויים בחוק.</p>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* FAQ Accordion */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות על פרטיות</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>האם המידע שלי מאובטח?</AccordionTrigger>
                <AccordionContent>
                  כן, אנו מיישמים אמצעי אבטחה טכנולוגיים מתקדמים כדי להגן על המידע האישי שלך. כל המידע מאוחסן בשרתים מאובטחים בישראל, והתקשורת עם האתר שלנו מוצפנת באמצעות SSL/TLS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>האם אתם חולקים את המידע שלי עם מפרסמים?</AccordionTrigger>
                <AccordionContent>
                  לא. איננו מוכרים או משכירים את המידע האישי שלך לצדדים שלישיים למטרות שיווק או פרסום. אנו משתפים את המידע שלך רק עם רשות המסים לצורך טיפול בהחזרי המס שלך.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>כמה זמן אתם שומרים את המידע שלי?</AccordionTrigger>
                <AccordionContent>
                  בהתאם לדרישות החוק בישראל, אנו שומרים את המידע האישי והמסמכים שלך למשך 6 שנים מתום השנה שבה הושלם הטיפול בהחזר המס. לאחר תקופה זו, המידע נמחק באופן מאובטח.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>איך אני יכול לבקש למחוק את המידע שלי?</AccordionTrigger>
                <AccordionContent>
                  אתה רשאי לבקש למחוק את המידע האישי שלך בכל עת, בכפוף למגבלות חוקיות. לבקשת מחיקה, אנא צור קשר עם שירות הלקוחות שלנו בטלפון 03-1234567 או בדוא"ל privacy@financialdwarf.co.il.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4">יצירת קשר בנושאי פרטיות</h2>
            <p className="mb-4">
              אם יש לך שאלות או חששות לגבי מדיניות הפרטיות שלנו או הטיפול במידע האישי שלך, אנא צור קשר עם ממונה הפרטיות שלנו:
            </p>
            <div className="space-y-2 font-medium">
              <p>אימייל: privacy@financialdwarf.co.il</p>
              <p>טלפון: 03-1234567</p>
              <p>כתובת: רחוב אלנבי 100, תל אביב</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
