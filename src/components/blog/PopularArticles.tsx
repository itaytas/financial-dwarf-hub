
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface PopularArticle {
  id: string;
  title: string;
  image: string;
  category: string;
  url: string;
}

const PopularArticles: React.FC = () => {
  const popularArticles: PopularArticle[] = [
    {
      id: 'medical-expenses',
      title: 'מדריך להחזרי מס על הוצאות רפואיות',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'מדריכי החזרי מס',
      url: '/blog/medical-expense-refunds'
    },
    {
      id: 'freelancer-guide',
      title: 'החזרי מס לעצמאיים: המדריך המלא',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'מדריכי החזרי מס',
      url: '/blog/freelancer-tax-refund-guide'
    },
    {
      id: 'pension-refunds',
      title: 'איך לקבל החזר מס על הפקדות לפנסיה',
      image: 'https://images.unsplash.com/photo-1559257272-6b1e4b7e1bf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'תכנון פיננסי',
      url: '/blog/pension-tax-refunds'
    },
  ];

  return (
    <section className="py-12 bg-brand-blue/5">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">מאמרים פופולריים</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {popularArticles.map((article) => (
            <Link 
              key={article.id} 
              to={article.url}
              className="group block relative h-64 rounded-xl overflow-hidden shadow-sm"
            >
              <img 
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="bg-brand-blue/80 text-white text-xs font-medium px-2.5 py-0.5 rounded-full mb-2 inline-block">
                  {article.category}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {article.title}
                </h3>
                <span className="inline-flex items-center text-white/80 text-sm group-hover:text-brand-gold transition-colors duration-300">
                  קרא עוד
                  <ChevronLeft className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArticles;
