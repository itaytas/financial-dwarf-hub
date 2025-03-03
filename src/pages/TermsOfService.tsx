
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Search, Clock, LockKeyhole, Calendar, FileClock, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TermsOfService = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">תנאי שימוש</h1>
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
              placeholder="חפש בתנאי השימוש..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Introduction */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 ml-2 text-brand-blue" />
              תמצית התנאים
            </h2>
            <p className="text-lg">
              חברת "הגמד הפיננסי" מספקת שירותי החזרי מס בישראל בלבד. ההסכם שלנו מבוסס על עמלה בגובה 20% מסכום ההחזר שתקבל - ללא החזר, אין תשלום. עליך לספק מסמכים מדויקים ומלאים. התהליך עשוי להימשך עד 6 חודשים בהתאם לרשות המסים.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {filterContent('היקף השירות') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">1</span>
                  היקף השירות
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    חברת "הגמד הפיננסי" (להלן: "החברה") מספקת שירותי החזרי מס לאזרחי ותושבי ישראל בלבד. השירות כולל בדיקת זכאות, הכנת מסמכים, הגשת בקשות להחזרי מס, ומעקב אחר הבקשות מול רשות המסים.
                  </p>
                  <p className="mb-4">
                    <strong>השירות מוגבל ל:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>החזרי מס בישראל בלבד</li>
                    <li>בקשות להחזר בגין 6 שנים אחרונות בלבד (בהתאם לחוק)</li>
                    <li>טיפול מול רשות המסים הישראלית בלבד</li>
                  </ul>
                </div>
              </section>
            )}

            {filterContent('חובות הלקוח') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">2</span>
                  חובות הלקוח
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    הלקוח מתחייב לספק לחברה מסמכים מדויקים ומלאים הנדרשים לצורך הגשת בקשת החזר המס. הלקוח אחראי באופן בלעדי לאמיתות ולדיוק המידע המסופק.
                  </p>
                  <p className="mb-4">
                    <strong>הלקוח מתחייב:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>למסור מסמכים מדויקים ומלאים</li>
                    <li>לחתום על כל המסמכים הנדרשים להגשת הבקשה</li>
                    <li>לעדכן את החברה בכל שינוי פרטים רלוונטי</li>
                    <li>להשיב לפניות החברה תוך זמן סביר</li>
                  </ul>
                  <p className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <strong>שים לב:</strong> אי מסירת מידע מלא ומדויק עלולה לגרום לעיכוב או דחיית בקשת החזר המס.
                  </p>
                </div>
              </section>
            )}

            {filterContent('עמלות ותשלומים') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">3</span>
                  עמלות ותשלומים
                </h2>
                <div className="glass-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full ml-4">
                      <Calendar className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-lg font-medium">מודל תמחור: 20% מסכום ההחזר</p>
                  </div>
                  <p className="mb-4">
                    עמלת החברה הינה 20% (בתוספת מע"מ) מסכום החזר המס שיתקבל בפועל מרשות המסים. במקרה שלא יתקבל החזר מס, הלקוח לא יחויב בכל תשלום שהוא ("ללא החזר - ללא תשלום").
                  </p>
                  <p className="mb-4">
                    <strong>מועד החיוב:</strong> החיוב יתבצע רק לאחר אישור החזר המס על-ידי רשות המסים וטרם העברת ההחזר ללקוח.
                  </p>
                  <p className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <strong>הבהרה:</strong> אין החזר כספי לאחר תשלום העמלה, גם אם הלקוח אינו מרוצה מגובה ההחזר, כל עוד החברה פעלה בהתאם להתחייבויותיה ורשות המסים אישרה את ההחזר.
                  </p>
                </div>
              </section>
            )}

            {filterContent('לוחות זמנים') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">4</span>
                  לוחות זמנים
                </h2>
                <div className="glass-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full ml-4">
                      <FileClock className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-lg font-medium">משך הטיפול: עד 6 חודשים</p>
                  </div>
                  <p className="mb-4">
                    תהליך קבלת החזר המס עשוי להימשך עד 6 חודשים מיום הגשת הבקשה המלאה, בהתאם ללוחות הזמנים של רשות המסים.
                  </p>
                  <p className="mb-4">
                    <strong>שלבי הטיפול:</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mr-6">
                    <li>בדיקת זכאות וקבלת מסמכים: 7-14 ימי עסקים</li>
                    <li>הכנת והגשת הבקשה: עד 21 ימי עסקים</li>
                    <li>טיפול על ידי רשות המסים: 60-180 ימים</li>
                    <li>קבלת האישור והעברת הכספים: עד 14 ימי עסקים</li>
                  </ol>
                  <p className="mt-4 text-sm text-gray-600">
                    * לוחות הזמנים הינם הערכה בלבד ועשויים להשתנות בהתאם לעומס ברשות המסים ולמורכבות המקרה.
                  </p>
                </div>
              </section>
            )}

            {filterContent('סיום ההתקשרות') && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center ml-2">5</span>
                  סיום ההתקשרות
                </h2>
                <div className="glass-card p-6">
                  <p className="mb-4">
                    הלקוח רשאי לבטל את ההתקשרות עם החברה בכל שלב לפני אישור החזר המס על-ידי רשות המסים, באמצעות הודעה בכתב לחברה.
                  </p>
                  <p className="mb-4">
                    <strong>תנאי ביטול:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>ביטול תוך 14 יום מיום ההתקשרות: ללא חיוב</li>
                    <li>ביטול לאחר הגשת הבקשה לרשות המסים: הלקוח יחויב בדמי טיפול של 250 ₪ (כולל מע"מ)</li>
                    <li>ביטול לאחר אישור ההחזר: הלקוח יחויב במלוא העמלה המוסכמת</li>
                  </ul>
                  <p className="mt-4 bg-gray-50 p-3 border border-gray-200 rounded-md">
                    החברה רשאית לסיים את ההתקשרות במקרה של אי שיתוף פעולה מצד הלקוח או מסירת מידע שגוי.
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* FAQ Accordion */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">שאלות נפוצות</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>האם ניתן לבטל את ההתקשרות לאחר שהגשתם את הבקשה?</AccordionTrigger>
                <AccordionContent>
                  כן, ניתן לבטל את ההתקשרות בכל שלב לפני אישור החזר המס. עם זאת, במקרה של ביטול לאחר הגשת הבקשה לרשות המסים, יחול חיוב של 250 ₪ (כולל מע"מ) עבור דמי טיפול.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>האם יש תשלום מראש?</AccordionTrigger>
                <AccordionContent>
                  לא, אנו גובים עמלה רק במקרה של הצלחה - כלומר, רק אם קיבלת החזר מס בפועל. העמלה היא 20% מסכום ההחזר שהתקבל.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>כמה זמן לוקח לקבל החזר מס?</AccordionTrigger>
                <AccordionContent>
                  התהליך עשוי להימשך עד 6 חודשים מיום הגשת הבקשה המלאה, בהתאם ללוחות הזמנים של רשות המסים. עם זאת, המשך הזמן המדויק תלוי בעומס ברשות המסים ובמורכבות המקרה.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>מה התנאים לקבלת שירות מהגמד הפיננסי?</AccordionTrigger>
                <AccordionContent>
                  השירות מיועד לאזרחי ותושבי ישראל בלבד. עליך לספק מסמכים מדויקים ומלאים הנדרשים לצורך הגשת בקשת החזר המס, ולשתף פעולה עם צוות המומחים שלנו לאורך התהליך.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
