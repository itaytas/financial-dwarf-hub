
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';

const Hero: React.FC = () => {
  const [count, setCount] = useState(0);
  const targetCount = 15000000; // 15 million
  const animationDuration = 2000; // 2 seconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(animationDuration / frameDuration);
  const countsPerFrame = Math.floor(targetCount / totalFrames);

  useEffect(() => {
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const currentCount = Math.floor(targetCount * progress);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-blue to-blue-700">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated Coins */}
      <div className="absolute top-0 right-1/4 h-full pointer-events-none">
        <div className="relative h-full w-20">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-8 w-8 rounded-full bg-brand-gold animate-coins-drop opacity-70"
              style={{ 
                right: `${Math.random() * 20}px`, 
                animationDelay: `${i * 0.3}s`, 
                animationDuration: `${1 + Math.random() * 2}s` 
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 [text-shadow:_0_2px_5px_rgba(0,0,0,0.2)]">
              גלה כמה כסף מגיע לך – בקלות ובמהירות!
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto md:mx-0">
              המומחים שלנו עושים הכל בשבילך – בלי בירוקרטיה!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              <Link to="/eligibility" className="w-full sm:w-auto btn-secondary group">
                <span>בדוק עכשיו כמה מחכה לך!</span>
                <ArrowLeft className="mr-2 h-5 w-5 inline-block transition-transform group-hover:-translate-x-1" />
              </Link>
              
              <div className="flex items-center bg-white/10 py-2 px-4 rounded-lg">
                <Shield className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium text-sm">אין החזר – אין תשלום</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl inline-block">
              <p className="text-white/90 text-sm">כבר עזרנו ללקוחות להחזיר</p>
              <p className="text-3xl font-bold text-white">
                ₪{formatNumber(count)}+
              </p>
            </div>
          </div>
          
          <div className="md:w-5/12 mt-12 md:mt-0">
            <div className="relative">
              <div className="glass-card p-6 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1564578997399-49dbe64432d6?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Happy customer receiving money" 
                  className="w-full h-auto rounded-lg mb-4"
                />
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-800 mr-2">תהליך פשוט ומהיר</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-800 mr-2">ללא תשלום מראש</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-800 mr-2">טיפול אישי מול רשויות המס</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-8 -right-8 bg-white p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-brand-blue font-bold">98%</span>
                <span className="text-sm block">הצלחה</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-brand-gold p-3 rounded-full shadow-lg animate-pulse-soft">
                <span className="text-white font-bold">7-14</span>
                <span className="text-white text-sm block">ימי טיפול</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
