
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { FileText, Shield, HelpCircle } from 'lucide-react';

const Legal = () => {
  return (
    <MainLayout>
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">מסמכים משפטיים</h1>
          <p className="text-xl text-gray-600 mb-12">
            אנו מחויבים לשקיפות ולהגנה על הזכויות והפרטיות שלך. להלן המסמכים המשפטיים המפרטים את תנאי השימוש בשירותינו ואת האופן בו אנו מטפלים במידע שלך.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/legal/terms" className="block group">
              <div className="glass-card p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full ml-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">תנאי שימוש</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  מידע על היקף השירות, חובות הלקוח, עמלות ותשלומים, לוחות זמנים ותנאי סיום ההתקשרות.
                </p>
                <p className="text-brand-blue font-medium group-hover:underline">קרא עוד &larr;</p>
              </div>
            </Link>

            <Link to="/legal/privacy" className="block group">
              <div className="glass-card p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full ml-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold">מדיניות פרטיות</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  מידע על איסוף, אחסון ושימוש במידע האישי שלך, שיתוף עם צדדים שלישיים, תקופת שמירת המידע והזכויות שלך.
                </p>
                <p className="text-brand-blue font-medium group-hover:underline">קרא עוד &larr;</p>
              </div>
            </Link>
          </div>

          <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="p-2 bg-yellow-100 rounded-full ml-4">
                <HelpCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">יש לך שאלות?</h3>
                <p className="text-gray-600 mb-4">
                  אם יש לך שאלות כלשהן לגבי המסמכים המשפטיים שלנו או זכויותיך, אנא אל תהסס ליצור קשר עם צוות שירות הלקוחות שלנו.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex py-2 px-4 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  צור קשר
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Legal;
