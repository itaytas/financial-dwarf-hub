
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Lightbulb, Heart, Eye, Lock } from 'lucide-react';

interface ApproachItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UniqueApproach = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const approachItems: ApproachItem[] = [
    {
      icon: <Lightbulb className="h-10 w-10 text-brand-gold" />,
      title: "טכנולוגיה חכמה + מומחים אנושיים",
      description: "אנו משלבים מערכות חכמות לניתוח מהיר של זכאויות עם צוות מומחים שבוחן כל מקרה לעומק"
    },
    {
      icon: <Heart className="h-10 w-10 text-brand-gold" />,
      title: "הלקוח במרכז",
      description: "אנו מאמינים בשירות אישי, זמין ומותאם לצרכים הייחודיים של כל לקוח"
    },
    {
      icon: <Eye className="h-10 w-10 text-brand-gold" />,
      title: "שקיפות מלאה",
      description: "אנו מציגים מראש את כל העלויות והעמלות, ללא הפתעות או תשלומים נסתרים"
    },
    {
      icon: <Lock className="h-10 w-10 text-brand-gold" />,
      title: "אבטחת מידע ברמה גבוהה",
      description: "כל המידע שלך מאובטח בתקן SSL 256-bit, עם הצפנה מקצה לקצה והגנות סייבר מתקדמות"
    }
  ];

  return (
    <section ref={ref} className={`py-16 bg-gray-50 ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">הגישה הייחודית שלנו</h2>
        <p className="section-subtitle">מה הופך את הגמד הפיננסי למוביל בתחום החזרי המס?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {approachItems.map((item, index) => (
            <div key={index} className="glass-card p-8 transition-all hover:shadow-lg">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Fee breakdown */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">מבנה העמלות שלנו - שקיפות מלאה</h3>
          
          <div className="overflow-hidden rounded-xl shadow">
            <table className="w-full text-right">
              <thead className="bg-brand-blue text-white">
                <tr>
                  <th className="p-4">סוג השירות</th>
                  <th className="p-4">עמלה</th>
                  <th className="p-4">הערות</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-white">
                  <td className="p-4 font-medium">החזר מס בסיסי</td>
                  <td className="p-4">18% מסכום ההחזר</td>
                  <td className="p-4">מינימום ₪350</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">החזר מס מורכב</td>
                  <td className="p-4">22% מסכום ההחזר</td>
                  <td className="p-4">כולל ייצוג מול פקיד שומה</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-medium">בדיקת זכאות</td>
                  <td className="p-4">חינם</td>
                  <td className="p-4">ללא התחייבות</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-medium">ייעוץ ראשוני</td>
                  <td className="p-4">חינם</td>
                  <td className="p-4">עד 30 דקות</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            * העמלה נגבית רק לאחר קבלת ההחזר בפועל. אם אין החזר - אין תשלום!
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;
