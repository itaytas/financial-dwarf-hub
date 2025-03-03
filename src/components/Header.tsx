
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  language: 'he' | 'ar';
  setLanguage: (lang: 'he' | 'ar') => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'he' ? 'ar' : 'he');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    he: {
      home: 'בית',
      howItWorks: 'איך זה עובד',
      about: 'מי אנחנו',
      blog: 'בלוג',
      contact: 'צור קשר',
      checkEligibility: 'בדוק זכאות'
    },
    ar: {
      home: 'الرئيسية',
      howItWorks: 'كيف يعمل',
      about: 'من نحن',
      blog: 'مدونة',
      contact: 'اتصل بنا',
      checkEligibility: 'تحقق من أهليتك'
    }
  };

  const t = translations[language];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-brand-blue/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="The Financial Dwarf"
            className="h-12 w-auto object-contain"
          />
          <span className={`text-lg font-bold transition-colors duration-300 ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            {language === 'he' ? 'הגמד הפיננסי' : 'القزم المالي'}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <Link to="/" className={`link-hover text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {t.home}
          </Link>
          <Link to="/how-it-works" className={`link-hover text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {t.howItWorks}
          </Link>
          <Link to="/about-us" className={`link-hover text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {t.about}
          </Link>
          <Link to="/blog" className={`link-hover text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {t.blog}
          </Link>
          <Link to="/contact" className={`link-hover text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            {t.contact}
          </Link>
        </nav>

        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <button 
            className={`flex items-center p-2 rounded-full transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">{language === 'he' ? 'العربية' : 'עברית'}</span>
          </button>
          
          <Link 
            to="/contact" 
            className={`hidden md:inline-flex py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-brand-blue text-white hover:bg-opacity-90' 
                : 'bg-white text-brand-blue hover:bg-opacity-90'
            }`}
          >
            {t.checkEligibility}
          </Link>
          
          <button
            className="inline-flex md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full right-0 w-full bg-white shadow-lg py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {t.home}
            </Link>
            <Link to="/how-it-works" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {t.howItWorks}
            </Link>
            <Link to="/about-us" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {t.about}
            </Link>
            <Link to="/blog" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {t.blog}
            </Link>
            <Link to="/contact" className="text-gray-800 font-medium" onClick={toggleMenu}>
              {t.contact}
            </Link>
            <Link 
              to="/contact" 
              className="bg-brand-blue text-white py-2 px-4 rounded-lg text-center font-medium"
              onClick={toggleMenu}
            >
              {t.checkEligibility}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
