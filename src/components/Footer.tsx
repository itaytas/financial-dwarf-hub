
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Financial Dwarf"
                className="h-10 w-auto object-contain"
              />
              <span className="text-lg font-bold ml-2">הגמד הפיננסי</span>
            </Link>
            <p className="text-gray-400 mb-6">
              המומחים להחזרי מס בישראל, מסייעים ללקוחות לקבל את הכסף שמגיע להם מרשויות המס.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">ניווט מהיר</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">בית</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">איך זה עובד</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">מי אנחנו</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">בלוג</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">צור קשר</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">החזרי מס</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/refunds/employee" className="text-gray-400 hover:text-white transition-colors">החזר מס לשכירים</Link>
              </li>
              <li>
                <Link to="/refunds/freelance" className="text-gray-400 hover:text-white transition-colors">החזר מס לעצמאים</Link>
              </li>
              <li>
                <Link to="/refunds/pension" className="text-gray-400 hover:text-white transition-colors">החזר מס לפנסיונרים</Link>
              </li>
              <li>
                <Link to="/refunds/medical" className="text-gray-400 hover:text-white transition-colors">החזר מס על הוצאות רפואיות</Link>
              </li>
              <li>
                <Link to="/refunds/eligibility" className="text-gray-400 hover:text-white transition-colors">בדיקת זכאות</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">קבלו עדכונים</h3>
            <p className="text-gray-400 mb-4">הירשמו לניוזלטר שלנו לקבלת עדכונים ומידע חשוב</p>
            
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="האימייל שלך"
                  className="bg-gray-800 text-white px-4 py-2 rounded-r-lg w-full focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
                <button
                  type="submit"
                  className="bg-brand-blue px-4 py-2 rounded-l-lg"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            
            <div className="flex items-center text-gray-400">
              <Lock className="h-4 w-4 ml-2" />
              <span className="text-sm">SSL מאובטח</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {year} הגמד הפיננסי | כל הזכויות שמורות
            </p>
            
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                מדיניות פרטיות
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                תנאי שימוש
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                מפת האתר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
