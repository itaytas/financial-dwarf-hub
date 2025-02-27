
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/utils/animations';
import { MessageSquare, Phone, Mail, ChevronLeft } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  return (
    <section ref={ref} className={`section bg-gradient-to-b from-brand-blue to-blue-800 text-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מוכן להתחיל?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">צור קשר עם המומחים שלנו כדי להתחיל את תהליך החזר המס באופן מיידי</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Link to="/contact" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-1">
            <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">וואטסאפ</h3>
            <p className="text-white/80 mb-4">שלח הודעה וקבל תשובה תוך דקות</p>
            <span className="text-lg font-medium">לחץ לשליחה</span>
          </Link>
          
          <Link to="tel:+972501234567" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-1">
            <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">טלפון</h3>
            <p className="text-white/80 mb-4">זמינים בין השעות 9:00-18:00</p>
            <span className="text-lg font-medium">050-123-4567</span>
          </Link>
          
          <Link to="mailto:support@financialdwarf.co.il" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:-translate-y-1">
            <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">אימייל</h3>
            <p className="text-white/80 mb-4">נחזור אליך תוך יום עסקים</p>
            <span className="text-lg font-medium">support@financialdwarf.co.il</span>
          </Link>
        </div>
        
        <div className="text-center">
          <Link to="/eligibility" className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
            <span>בדוק עכשיו כמה מחכה לך!</span>
            <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
