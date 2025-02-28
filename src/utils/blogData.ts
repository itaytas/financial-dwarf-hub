
export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  count: number;
  color: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  categoryId: string;
  featuredImage: string;
  publishDate: string;
  readTime: number;
  isCornerstone?: boolean;
  isPopular?: boolean;
  tags?: string[];
  downloadable?: boolean;
}

// Blog Categories
export const categories: BlogCategory[] = [
  {
    id: 'tax-guides',
    name: 'מדריכי החזרי מס',
    description: 'מדריכים מקיפים להחזרי מס לפי מקצועות ומצבי חיים שונים',
    slug: 'tax-guides',
    count: 18,
    color: 'bg-blue-500'
  },
  {
    id: 'financial-planning',
    name: 'תכנון פיננסי',
    description: 'טיפים לניהול כספים חכם והתנהלות נבונה מול רשויות המס',
    slug: 'financial-planning',
    count: 12,
    color: 'bg-emerald-500'
  },
  {
    id: 'tax-news',
    name: 'חדשות מס',
    description: 'עדכונים שוטפים בחוקי המס, מועדי הגשה ושינויים בחקיקה',
    slug: 'tax-news',
    count: 8,
    color: 'bg-amber-500'
  },
  {
    id: 'success-stories',
    name: 'סיפורי הצלחה',
    description: 'סיפורים אמיתיים של לקוחות שקיבלו החזרי מס משמעותיים',
    slug: 'success-stories',
    count: 15,
    color: 'bg-purple-500'
  },
];

// Cornerstone Content
export const cornerstoneArticles: BlogArticle[] = [
  {
    id: 'complete-guide',
    title: 'המדריך המלא להחזרי מס בישראל',
    slug: 'complete-tax-refund-guide',
    excerpt: 'כל מה שצריך לדעת על החזרי מס - מי זכאי, איך מגישים, וטיפים להגדלת ההחזר',
    categoryId: 'tax-guides',
    category: 'מדריכי החזרי מס',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '12.04.2024',
    readTime: 14,
    isCornerstone: true
  },
  {
    id: 'tech-workers',
    title: 'החזרי מס לעובדי הייטק',
    slug: 'high-tech-tax-refunds',
    excerpt: 'מדריך מיוחד לעובדי הייטק - הטבות מס ייחודיות וטיפים להגדלת ההחזר',
    categoryId: 'tax-guides',
    category: 'מדריכי החזרי מס',
    featuredImage: 'https://images.unsplash.com/photo-1573495612937-f22e7f284391?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '05.04.2024',
    readTime: 10,
    isCornerstone: true
  },
  {
    id: 'tax-calendar',
    title: 'לוח שנה מס 2025',
    slug: 'tax-calendar-2025',
    excerpt: 'כל התאריכים החשובים, מועדי הגשה ודדליינים להחזרי מס ב-2025',
    categoryId: 'tax-news',
    category: 'חדשות מס',
    featuredImage: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '01.04.2024',
    readTime: 5,
    isCornerstone: true,
    downloadable: true
  },
];

// Regular Articles
export const articles: BlogArticle[] = [
  {
    id: 'common-mistakes',
    title: '5 טעויות נפוצות שמונעות ממך החזר מס',
    slug: 'common-tax-refund-mistakes',
    excerpt: 'טעויות נפוצות שאנשים עושים בהגשת בקשה להחזר מס, וכיצד להימנע מהן',
    categoryId: 'tax-guides',
    category: 'מדריכי החזרי מס',
    featuredImage: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '10.04.2024',
    readTime: 7,
    isPopular: true
  },
  {
    id: 'work-expenses',
    title: 'מי זכאי להחזר מס על הוצאות עבודה?',
    slug: 'work-expenses-refund-eligibility',
    excerpt: 'מדריך מקיף להחזרי מס על הוצאות עבודה - למי מגיע ואיך מקבלים',
    categoryId: 'tax-guides',
    category: 'מדריכי החזרי מס',
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '02.04.2024',
    readTime: 8
  },
  {
    id: 'case-study',
    title: 'איך קיבלנו ₪15,000 בחזרה ללקוח',
    slug: 'case-study-15000-refund',
    excerpt: 'סיפור אמיתי של לקוח שקיבל החזר מס משמעותי ואיך עשינו זאת',
    categoryId: 'success-stories',
    category: 'סיפורי הצלחה',
    featuredImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '25.03.2024',
    readTime: 6,
    isPopular: true
  },
  {
    id: 'tax-updates',
    title: 'עדכוני חוקי מס 2025',
    slug: 'tax-law-updates-2025',
    excerpt: 'השינויים העיקריים בחוקי המס לשנת 2025 והשפעתם על החזרי מס',
    categoryId: 'tax-news',
    category: 'חדשות מס',
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '18.03.2024',
    readTime: 9
  },
  {
    id: 'parent-refunds',
    title: 'החזרי מס להורים – מה שצריך לדעת',
    slug: 'tax-refunds-for-parents',
    excerpt: 'הזכויות המגיעות להורים והאופן שבו ניתן למקסם את החזרי המס',
    categoryId: 'tax-guides',
    category: 'מדריכי החזרי מס',
    featuredImage: 'https://images.unsplash.com/photo-1602206304582-6f0189901a47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '10.03.2024',
    readTime: 7
  },
  {
    id: 'medical-expenses',
    title: 'מדריך להחזרי מס על הוצאות רפואיות',
    slug: 'medical-expense-refunds',
    excerpt: 'כל מה שצריך לדעת על החזרי מס בגין הוצאות רפואיות ואיך למקסם אותם',
    categoryId: 'tax-guides',
    category: 'מדריכי החזרי מס',
    featuredImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '05.03.2024',
    readTime: 8,
    isPopular: true
  },
  {
    id: 'freelancer-guide',
    title: 'החזרי מס לעצמאיים: המדריך המלא',
    slug: 'freelancer-tax-refund-guide',
    excerpt: 'מדריך מקיף להחזרי מס לעצמאיים ובעלי עסקים קטנים',
    categoryId: 'tax-guides',
    category: 'מדריכי החזרי מס',
    featuredImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '01.03.2024',
    readTime: 11,
    isPopular: true
  },
  {
    id: 'pension-refunds',
    title: 'איך לקבל החזר מס על הפקדות לפנסיה',
    slug: 'pension-tax-refunds',
    excerpt: 'מדריך מפורט להחזרי מס על הפקדות לקרנות פנסיה וקופות גמל',
    categoryId: 'financial-planning',
    category: 'תכנון פיננסי',
    featuredImage: 'https://images.unsplash.com/photo-1559257272-6b1e4b7e1bf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    publishDate: '25.02.2024',
    readTime: 9,
    isPopular: true
  }
];

// Helper function to get all articles (cornerstone + regular)
export const getAllArticles = (): BlogArticle[] => {
  return [...cornerstoneArticles, ...articles];
};

// Helper function to get articles by category
export const getArticlesByCategory = (categoryId: string): BlogArticle[] => {
  return getAllArticles().filter(article => article.categoryId === categoryId);
};

// Helper function to get popular articles
export const getPopularArticles = (): BlogArticle[] => {
  return getAllArticles().filter(article => article.isPopular);
};

// Helper function to get cornerstone articles
export const getCornerstoneArticles = (): BlogArticle[] => {
  return cornerstoneArticles;
};

// Helper function to get recent articles
export const getRecentArticles = (limit: number = 5): BlogArticle[] => {
  return [...cornerstoneArticles, ...articles]
    .sort((a, b) => {
      // Sort by date (assuming format is DD.MM.YYYY)
      const dateA = a.publishDate.split('.').reverse().join('');
      const dateB = b.publishDate.split('.').reverse().join('');
      return dateB.localeCompare(dateA);
    })
    .slice(0, limit);
};

// Helper function to get related articles
export const getRelatedArticles = (articleId: string, limit: number = 3): BlogArticle[] => {
  const article = getAllArticles().find(a => a.id === articleId);
  
  if (!article) return [];
  
  return getAllArticles()
    .filter(a => a.id !== articleId && a.categoryId === article.categoryId)
    .slice(0, limit);
};

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return getAllArticles().find(article => article.slug === slug);
};
