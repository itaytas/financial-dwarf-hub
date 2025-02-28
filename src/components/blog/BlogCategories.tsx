
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Landmark, Calendar, Users } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

const BlogCategories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  
  const categories: Category[] = [
    {
      id: 'tax-guides',
      name: 'מדריכי החזרי מס',
      description: 'מדריכים מקיפים להחזרי מס לפי מקצועות ומצבי חיים שונים',
      icon: <FileText className="h-6 w-6" />,
      count: 18,
      color: 'bg-blue-500'
    },
    {
      id: 'financial-planning',
      name: 'תכנון פיננסי',
      description: 'טיפים לניהול כספים חכם והתנהלות נבונה מול רשויות המס',
      icon: <Landmark className="h-6 w-6" />,
      count: 12,
      color: 'bg-emerald-500'
    },
    {
      id: 'tax-news',
      name: 'חדשות מס',
      description: 'עדכונים שוטפים בחוקי המס, מועדי הגשה ושינויים בחקיקה',
      icon: <Calendar className="h-6 w-6" />,
      count: 8,
      color: 'bg-amber-500'
    },
    {
      id: 'success-stories',
      name: 'סיפורי הצלחה',
      description: 'סיפורים אמיתיים של לקוחות שקיבלו החזרי מס משמעותיים',
      icon: <Users className="h-6 w-6" />,
      count: 15,
      color: 'bg-purple-500'
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">קטגוריות מרכזיות</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/blog/category/${category.id}`} 
              key={category.id}
              className={`group block p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              onMouseEnter={() => setActiveTab(category.id)}
              onMouseLeave={() => setActiveTab(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${category.color} p-3 rounded-full text-white mb-4 transition-transform duration-300 ${activeTab === category.id ? 'scale-110' : ''}`}>
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-blue transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>
                
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                  {category.count} מאמרים
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
