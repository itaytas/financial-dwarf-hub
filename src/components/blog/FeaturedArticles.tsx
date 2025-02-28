
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, Download } from 'lucide-react';
import { BlogArticle } from '@/utils/blogData';

interface FeaturedArticlesProps {
  articles: BlogArticle[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">מאמרי ליבה</h2>
          <Link to="/blog/all" className="text-brand-blue hover:underline font-medium flex items-center">
            כל המאמרים
            <ArrowLeft className="h-4 w-4 mr-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              onMouseEnter={() => setHoveredArticle(article.id)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <Link to={`/blog/${article.slug}`} className="block">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={article.featuredImage} 
                    alt={article.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredArticle === article.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </div>
                  
                  {article.downloadable && (
                    <div className="absolute bottom-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Download className="h-3 w-3 ml-1" />
                      <span>ניתן להורדה</span>
                    </div>
                  )}
                </div>
              </Link>
              
              <div className="p-5">
                <Link to={`/blog/${article.slug}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-brand-blue transition-colors">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 ml-1" />
                  <span>{article.readTime} דקות קריאה</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
