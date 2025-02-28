
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import HowItWorksPage from "./pages/HowItWorks";
import EligibilityCalculatorPage from "./pages/EligibilityCalculator";
import Blog from "./pages/Blog";
import ArticleTemplate from "./pages/ArticleTemplate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/eligibility" element={<EligibilityCalculatorPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/category/:categoryId" element={<Blog />} />
          <Route path="/blog/:articleId" element={<ArticleTemplate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
