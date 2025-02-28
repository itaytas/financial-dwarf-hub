
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategories from '@/components/blog/BlogCategories';
import FeaturedArticles from '@/components/blog/FeaturedArticles';
import RecentArticles from '@/components/blog/RecentArticles';
import PopularArticles from '@/components/blog/PopularArticles';
import BlogCTA from '@/components/blog/BlogCTA';
import LeadMagnet from '@/components/blog/LeadMagnet';
import { categories, getAllArticles, getArticlesByCategory, getCornerstoneArticles } from '@/utils/blogData';

const Blog: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  
  // Get current category if we're on a category page
  const currentCategory = categoryId ? categories.find(c => c.id === categoryId) : null;
  
  // Set meta title and description based on current view
  useEffect(() => {
    document.title = currentCategory 
      ? `${currentCategory.name} | הגמד הפיננסי` 
      : 'הבלוג של הגמד הפיננסי - מדריכים וטיפים להחזרי מס';
    
    // Show lead magnet after some time
    const timer = setTimeout(() => {
      setShowLeadMagnet(true);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [currentCategory]);
  
  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, you would search for articles and update the displayed list
    console.log('Searching for:', query);
  };
  
  // Exit intent handling
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // User is moving mouse out of the window (exit intent)
        setShowLeadMagnet(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <MainLayout>
      <BlogHero onSearch={handleSearch} />
      
      {!currentCategory ? (
        // Main Blog Home
        <>
          <BlogCategories />
          <FeaturedArticles articles={getCornerstoneArticles()} />
          <RecentArticles articles={getAllArticles()} />
          <PopularArticles />
          <BlogCTA />
        </>
      ) : (
        // Category Page
        <>
          <section className="py-12 bg-white">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <div className={`inline-flex items-center justify-center ${currentCategory.color} text-white p-4 rounded-full mb-4`}>
                  {/* You'd render the corresponding icon here based on category */}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentCategory.name}</h1>
                <p className="text-xl text-gray-600">
                  {currentCategory.description}
                </p>
              </div>
              
              <RecentArticles articles={getArticlesByCategory(currentCategory.id)} />
            </div>
          </section>
          <BlogCTA />
        </>
      )}
      
      {showLeadMagnet && <LeadMagnet onClose={() => setShowLeadMagnet(false)} />}
    </MainLayout>
  );
};

export default Blog;
