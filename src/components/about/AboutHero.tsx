
import React from 'react';
import { Users, Award, FileCheck } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">הסיפור שלנו</h1>
          <p className="text-xl text-gray-600 mb-10">
            המומחים להחזרי מס בישראל עם מעל 50 שנות ניסיון משולב והחזרים של יותר מ-20 מיליון ₪ ללקוחותינו
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="glass-card p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5,000+</h3>
              <p className="text-gray-600">לקוחות מרוצים</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-2">₪20M+</h3>
              <p className="text-gray-600">סך הכל החזרים</p>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex justify-center mb-4">
                <FileCheck className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-2">₪8,000</h3>
              <p className="text-gray-600">החזר ממוצע</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
