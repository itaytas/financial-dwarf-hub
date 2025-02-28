
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategories from '@/components/blog/BlogCategories';
import FeaturedArticles from '@/components/blog/FeaturedArticles';
import RecentArticles from '@/components/blog/RecentArticles';
import PopularArticles from '@/components/blog/PopularArticles';
import BlogCTA from '@/components/blog/BlogCTA';
import LeadMagnet from '@/components/blog/LeadMagnet';

const Blog: React.FC = () => {
  return (
    <MainLayout>
      <BlogHero />
      <BlogCategories />
      <FeaturedArticles />
      <RecentArticles />
      <PopularArticles />
      <BlogCTA />
      <LeadMagnet />
    </MainLayout>
  );
};

export default Blog;
