
import React, { useState } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // This would typically be triggered by exit intent or timer
  // For demo purposes, let's show it after a delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log('Lead magnet form submitted:', { name, email });
    
    // Show success state
    setIsSubmitted(true);
    
    // Close popup after success
    setTimeout(() => {
      setIsOpen(false);
      
      // Reset form for next time
      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
      }, 500);
    }, 2000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 relative animate-scale-in">
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6">
          {!isSubmitted ? (
            <>
              <div className="bg-gradient-to-r from-brand-blue to-blue-600 -mx-6 -mt-6 p-6 rounded-t-xl mb-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  הורד את הצ'קליסט להחזר מס מושלם
                </h3>
                <p className="text-white/80">
                  רשימה מלאה של כל המסמכים והפעולות שיעזרו לך למקסם את החזר המס שלך
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1633158829799-56bdf8cd9958?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Tax Refund Checklist"
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
                
                <div className="md:w-1/2">
                  <h4 className="font-bold text-lg mb-3">מה כולל הצ'קליסט?</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2 flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">רשימת מסמכים מפורטת לפי סוגי הכנסות</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2 flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">טיפים להגדלת ההחזר בצורה חוקית</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2 flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">לוח זמנים אופטימלי להגשה</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-2 flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700">רשימת הוצאות מוכרות שרוב האנשים שוכחים</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      שם מלא
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      אימייל
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-brand-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors"
                >
                  <Download className="h-5 w-5 ml-2" />
                  <span>הורד את הצ'קליסט בחינם</span>
                </button>
              </form>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                אנו מכבדים את הפרטיות שלך ולא נשתף את המידע שלך עם צד שלישי.
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">הצ'קליסט בדרך אליך!</h3>
              <p className="text-gray-600 mb-4">
                שלחנו את הקובץ לכתובת האימייל שלך. תודה שבחרת בגמד הפיננסי!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
