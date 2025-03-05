
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Shield, Sparkles } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';
import { useScrollReveal } from '@/utils/animations';

const Hero: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { ref: animationRef, isRevealed } = useScrollReveal(0.1);
  
  const targetCount = 15000000; // 15 million
  const animationDuration = 2500; // 2.5 seconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(animationDuration / frameDuration);
  const countsPerFrame = Math.floor(targetCount / totalFrames);

  useEffect(() => {
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      // Easing function for smoother animation
      const easeOutQuad = progress * (2 - progress);
      const currentCount = Math.floor(targetCount * easeOutQuad);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    // Show elements with animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      clearInterval(counter);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      ref={(el) => {
        heroRef.current = el;
        animationRef(el);
      }} 
      className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-blue to-blue-800"
    >
      {/* Enhanced background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-brand-blue/50 mix-blend-multiply"></div>
      
      {/* Enhanced Animated Coins */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none overflow-hidden">
        <div className="relative h-full w-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-8 w-8 rounded-full shadow-lg animate-coins-drop opacity-80"
              style={{ 
                right: `${Math.random() * 100}%`, 
                animationDelay: `${i * 0.3}s`, 
                animationDuration: `${1.5 + Math.random() * 2}s`,
                transform: `scale(${0.7 + Math.random() * 0.5})`,
                background: i % 2 === 0 ? '#f59e0b' : '#fbbf24', 
                boxShadow: '0 0 10px rgba(245, 158, 11, 0.6), 0 0 20px rgba(245, 158, 11, 0.3)'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-gold rounded-full opacity-15 blur-3xl animate-pulse-soft"></div>
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 text-center md:text-right">
            <h1 
              className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 
                [text-shadow:_0_2px_20px_rgba(0,0,0,0.3)] transition-all duration-700 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <span className="inline-block relative">
                גלה 
                <Sparkles className="absolute -top-6 -left-6 h-10 w-10 text-brand-gold animate-pulse-soft" />
              </span>
              {' '}
              <span className="bg-gradient-to-r from-white via-white to-blue-100 bg-clip-text text-transparent">
                כמה כסף מגיע לך
              </span>
              {' '}
              <span className="text-brand-gold">בקלות ובמהירות!</span>
            </h1>
            <p 
              className={`text-xl text-white mb-8 max-w-xl mx-auto md:mx-0 transition-all duration-700 delay-100 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              המומחים שלנו עושים הכל בשבילך – בלי בירוקרטיה ובלי כאב ראש!
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10 transition-all duration-700 delay-200 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Link to="/eligibility" className="w-full sm:w-auto btn-secondary group relative overflow-hidden">
                <span className="relative z-10 font-bold">בדוק עכשיו כמה מחכה לך!</span>
                <ArrowLeft className="mr-2 h-5 w-5 inline-block transition-transform group-hover:-translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <div className="flex items-center bg-white/20 backdrop-blur-md py-3 px-4 rounded-lg hover:bg-white/30 transition-colors duration-300 border border-white/30">
                <Shield className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium text-sm">אין החזר – אין תשלום</span>
              </div>
            </div>
            
            <div 
              className={`bg-white/15 backdrop-blur-md p-5 rounded-xl inline-block border border-white/30 shadow-2xl transition-all duration-700 delay-300 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <p className="text-white/90 text-sm font-medium">כבר עזרנו ללקוחות להחזיר</p>
              <p className="text-3xl font-bold text-white relative">
                <span className="absolute -right-3 -top-2 text-xs text-white/80">₪</span>
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {formatNumber(count)}
                </span>
                <span className="text-brand-gold ml-1 text-4xl animate-pulse">+</span>
              </p>
            </div>
          </div>
          
          <div className="md:w-5/12 mt-12 md:mt-0">
            <div 
              className={`relative transition-all duration-1000 delay-400 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              <div className="glass-card p-6 animate-float shadow-[0_20px_50px_rgba(8,112,184,0.3)]">
                <div className="relative overflow-hidden rounded-lg mb-6 shadow-inner group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1564578997399-49dbe64432d6?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Happy customer receiving money" 
                    className="w-full h-auto rounded-lg transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-3 left-3 bg-brand-gold/90 text-white text-sm py-1 px-3 rounded-full font-medium">
                    ₪8,500 החזר ממוצע
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 shadow-sm">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-800 mr-2 font-medium">תהליך פשוט ומהיר</p>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 shadow-sm">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-800 mr-2 font-medium">ללא תשלום מראש</p>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100 shadow-sm">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-800 mr-2 font-medium">טיפול אישי מול רשויות המס</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating badges */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-white to-blue-50 p-3 rounded-full shadow-xl animate-bounce-slow border-2 border-brand-blue/20">
                <div className="flex flex-col items-center justify-center h-16 w-16">
                  <span className="text-brand-blue text-2xl font-bold">98%</span>
                  <span className="text-sm block text-gray-600 font-medium">הצלחה</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-brand-gold to-yellow-500 p-3 rounded-full shadow-xl animate-pulse-soft border-2 border-white/50">
                <div className="flex flex-col items-center justify-center h-16 w-16">
                  <span className="text-white font-bold text-xl">7-14</span>
                  <span className="text-white text-xs font-medium block">ימי טיפול</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
