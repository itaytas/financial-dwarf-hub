
import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Quote, ChevronRight, ChevronLeft, Star, User } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  amount: string;
  stars: number;
  image?: string;
}

const Testimonials: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      quote: 'תהליך קצר ויעיל! הגמד הפיננסי עזר לי לקבל החזר מס שלא ידעתי שמגיע לי. כל הכבוד על השירות המקצועי והיחס האישי.',
      name: 'רונית כהן',
      role: 'מורה',
      amount: '₪8,000',
      stars: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      quote: 'קיבלתי יחס אישי ומענה מהיר לכל שאלה. הופתעתי לגלות כמה כסף מגיע לי בחזרה ממס הכנסה. ממליץ בחום!',
      name: 'דוד לוי',
      role: 'מהנדס תוכנה',
      amount: '₪5,200',
      stars: 5,
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      quote: 'כעצמאית, תמיד חששתי מהבירוקרטיה מול מס הכנסה. הגמד הפיננסי לקח על עצמו את כל התהליך והשיג לי החזר משמעותי.',
      name: 'מיכל אברהם',
      role: 'גרפיקאית עצמאית',
      amount: '₪11,500',
      stars: 4,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80'
    }
  ];
  
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
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
  }, [isPaused, isTransitioning]);
  
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
    <section 
      ref={ref} 
      className={`section bg-gradient-to-b from-gray-50 to-white transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container-custom">
        <h2 className="section-title relative inline-block after:content-[''] after:absolute after:w-1/3 after:h-1 after:bg-brand-gold after:bottom-0 after:left-1/3">
          מה אומרים עלינו?
        </h2>
        <p className="section-subtitle">לקוחות מספרים על החוויה שלהם עם הגמד הפיננסי</p>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="glass-card p-8 md:p-10 border-t-4 border-brand-gold">
                    <div className="flex items-start mb-6">
                      <div className="text-brand-blue ml-4">
                        <Quote className="h-10 w-10 rotate-180" />
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                        {testimonial.quote}
                      </blockquote>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-100 pt-6 mt-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-blue flex-shrink-0 mr-4">
                          {testimonial.image ? (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <User className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < testimonial.stars ? 'text-brand-gold fill-brand-gold' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center md:text-right bg-brand-blue/5 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">סכום ההחזר</p>
                        <p className="text-2xl font-bold text-brand-blue">{testimonial.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 right-0 md:-right-5 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 text-gray-700 hover:text-white hover:bg-brand-blue transition-colors z-10 hover:scale-110 transition-transform duration-300"
            aria-label="Previous testimonial"
            disabled={isTransitioning}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 left-0 md:-left-5 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 text-gray-700 hover:text-white hover:bg-brand-blue transition-colors z-10 hover:scale-110 transition-transform duration-300"
            aria-label="Next testimonial"
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          {/* Enhanced Indicators */}
          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? 'bg-brand-blue w-8 h-3' 
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
