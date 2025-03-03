
import React, { useState } from 'react';
import { useScrollReveal } from '@/utils/animations';
import { Phone, Mail, MessageSquare, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const AboutCTA = () => {
  const { ref, isRevealed } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "פנייה נשלחה בהצלחה",
      description: "יועץ מטעמנו יצור איתך קשר בהקדם",
      variant: "default",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section ref={ref} className={`py-16 bg-gradient-to-b from-gray-50 to-white ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">בואו נתחיל</h2>
        <p className="section-subtitle">קבע פגישת ייעוץ חינם וגלה כמה כסף מגיע לך</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">השאר פרטים לייעוץ חינם</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">שם מלא</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="הכנס את שמך המלא"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">טלפון</label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-1234567"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">אימייל</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">הודעה (אופציונלי)</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ספר לנו על המצב שלך בקצרה"
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-brand-blue hover:bg-blue-700">
                שלח פרטים
                <ChevronLeft className="mr-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">דרכים נוספות ליצירת קשר</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full ml-4">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">טלפון</h4>
                  <p className="text-gray-600">050-123-4567</p>
                  <p className="text-sm text-gray-500">זמינים בימים א'-ה' בין השעות 9:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full ml-4">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">אימייל</h4>
                  <p className="text-gray-600">info@financialdwarf.co.il</p>
                  <p className="text-sm text-gray-500">נחזור אליך תוך יום עסקים אחד</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full ml-4">
                  <MessageSquare className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">וואטסאפ</h4>
                  <p className="text-gray-600">050-123-4567</p>
                  <p className="text-sm text-gray-500">לשירות מהיר, שלח הודעה בוואטסאפ</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/972501234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="ml-2 h-5 w-5" />
                דבר איתנו בוואטסאפ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
