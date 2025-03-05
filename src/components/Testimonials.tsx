
import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Quote, ChevronRight, ChevronLeft, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  amount: string;
  stars: number;
}

const Testimonials: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      quote: 'תהליך קצר ויעיל! הגמד הפיננסי עזר לי לקבל החזר מס שלא ידעתי שמגיע לי. כל הכבוד על השירות המקצועי והיחס האישי.',
      name: 'רונית כהן',
      role: 'מורה',
      amount: '₪8,000',
      stars: 5
    },
    {
      quote: 'קיבלתי יחס אישי ומענה מהיר לכל שאלה. הופתעתי לגלות כמה כסף מגיע לי בחזרה ממס הכנסה. ממליץ בחום!',
      name: 'דוד לוי',
      role: 'מהנדס תוכנה',
      amount: '₪5,200',
      stars: 5
    },
    {
      quote: 'כעצמאית, תמיד חששתי מהבירוקרטיה מול מס הכנסה. הגמד הפיננסי לקח על עצמו את כל התהליך והשיג לי החזר משמעותי.',
      name: 'מיכל אברהם',
      role: 'גרפיקאית עצמאית',
      amount: '₪11,500',
      stars: 4
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);
  
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  
  const handleMouseLeave = () => {
    setIsPaused(false);
  };
  
  return (
    <section ref={ref} className={`section bg-gradient-to-b from-gray-50 to-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">מה אומרים עלינו?</h2>
        <p className="section-subtitle">לקוחות מספרים על החוויה שלהם עם הגמד הפיננסי</p>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="glass-card p-8 md:p-10">
                    <div className="mb-6 text-brand-blue">
                      <Quote className="h-10 w-10 rotate-180" />
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl font-medium mb-8">
                      {testimonial.quote}
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-gray-600">סכום ההחזר</p>
                        <p className="text-xl font-bold text-brand-blue">{testimonial.amount}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.stars ? 'text-brand-gold fill-brand-gold' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 text-gray-700 hover:text-brand-blue transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 text-gray-700 hover:text-brand-blue transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-brand-blue w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
