
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, ChevronLeft } from 'lucide-react';
import { BlogArticle, getRelatedArticles } from '@/utils/blogData';

interface RecentArticlesProps {
  articles: BlogArticle[];
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  // Take only first 5 articles if more are provided
  const displayedArticles = articles.slice(0, 5);

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">מאמרים אחרונים</h2>
          <Link to="/blog/all" className="text-brand-blue hover:underline font-medium flex items-center">
            כל המאמרים
            <ArrowLeft className="h-4 w-4 mr-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {displayedArticles.map((article, index) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <Link to={`/blog/${article.slug}`} className="block h-full">
                    <img 
                      src={article.featuredImage} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.publishDate}</span>
                  </div>
                  
                  <Link to={`/blog/${article.slug}`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 hover:text-brand-blue transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 ml-1" />
                      <span>{article.readTime} דקות קריאה</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${article.slug}`} 
                      className="text-brand-blue font-medium hover:underline flex items-center"
                    >
                      המשך לקרוא
                      <ChevronLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {index < displayedArticles.length - 1 && (
                <div className="hidden md:block px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-700 ml-2">מאמרים דומים:</span>
                      <div className="space-x-2 space-x-reverse">
                        {getRelatedArticles(article.id, 3).map((relatedArticle) => (
                          <Link 
                            key={relatedArticle.id} 
                            to={`/blog/${relatedArticle.slug}`}
                            className="text-sm text-gray-600 hover:text-brand-blue hover:underline"
                          >
                            {relatedArticle.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <button className="text-gray-600 hover:text-brand-blue p-1" title="שתף בוואטסאפ">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.39-.025-.54-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                        </svg>
                      </button>
                      <button className="text-gray-600 hover:text-brand-blue p-1" title="שתף בפייסבוק">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
