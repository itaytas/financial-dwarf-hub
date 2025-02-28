
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const BlogHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search (would typically link to search results page)
    console.log('Searching for:', searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-brand-blue to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586486855514-8c667d6989bd?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">הבלוג של הגמד הפיננסי</h1>
          <p className="text-xl text-white/90 mb-10 md:px-10">
            כל מה שצריך לדעת על החזרי מס, תכנון פיננסי, וטיפים שיכולים לחסוך לך אלפי שקלים
          </p>
          
          <form 
            onSubmit={handleSearchSubmit}
            className={`mx-auto max-w-xl transition-all duration-300 ${
              isSearchFocused ? 'scale-105' : 'scale-100'
            }`}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="חפש מאמרים..."
                className="w-full bg-white/90 backdrop-blur-sm py-4 px-5 pl-12 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              />
              <button 
                type="submit"
                className="absolute left-1 top-1/2 transform -translate-y-1/2 text-brand-blue p-2"
              >
                <Search className="h-6 w-6" />
              </button>
              
              {searchQuery && (
                <button 
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
