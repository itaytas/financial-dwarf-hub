
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, Download } from 'lucide-react';

interface FeaturedArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: number;
  url: string;
  downloadable?: boolean;
}

const FeaturedArticles: React.FC = () => {
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);
  
  const featuredArticles: FeaturedArticle[] = [
    {
      id: 'complete-guide',
      title: 'המדריך המלא להחזרי מס בישראל',
      description: 'כל מה שצריך לדעת על החזרי מס - מי זכאי, איך מגישים, וטיפים להגדלת ההחזר',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'מדריכי החזרי מס',
      readTime: 14,
      url: '/blog/complete-tax-refund-guide'
    },
    {
      id: 'tech-workers',
      title: 'החזרי מס לעובדי הייטק',
      description: 'מדריך מיוחד לעובדי הייטק - הטבות מס ייחודיות וטיפים להגדלת ההחזר',
      image: 'https://images.unsplash.com/photo-1573495612937-f22e7f284391?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'מדריכי החזרי מס',
      readTime: 10,
      url: '/blog/high-tech-tax-refunds'
    },
    {
      id: 'tax-calendar',
      title: 'לוח שנה מס 2025',
      description: 'כל התאריכים החשובים, מועדי הגשה ודדליינים להחזרי מס ב-2025',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'חדשות מס',
      readTime: 5,
      url: '/blog/tax-calendar-2025',
      downloadable: true
    }
  ];

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
          {featuredArticles.map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              onMouseEnter={() => setHoveredArticle(article.id)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <Link to={article.url} className="block">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={article.image} 
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
                <Link to={article.url}>
                  <h3 className="text-xl font-bold mb-2 hover:text-brand-blue transition-colors">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.description}
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
