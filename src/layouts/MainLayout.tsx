
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [language, setLanguage] = useState<'he' | 'ar'>('he');

  return (
    <div className={`flex min-h-screen flex-col ${language === 'ar' ? 'font-arabic' : 'font-heebo'}`} dir={language === 'he' ? 'rtl' : 'rtl'}>
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default MainLayout;
