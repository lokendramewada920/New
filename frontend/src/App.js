import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import CoursesPage from "@/pages/CoursesPage";
import CourseDetailPage from "@/pages/CourseDetailPage";
import SEOLandingPage from "@/pages/SEOLandingPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import LegalPage from "@/pages/LegalPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/stock-market-classes-bhopal" element={<SEOLandingPage slug="stock-market-classes-bhopal" />} />
            <Route path="/technical-analysis-course-bhopal" element={<SEOLandingPage slug="technical-analysis-course-bhopal" />} />
            <Route path="/fundamental-analysis-course-bhopal" element={<SEOLandingPage slug="fundamental-analysis-course-bhopal" />} />
            <Route path="/options-trading-course-bhopal" element={<SEOLandingPage slug="options-trading-course-bhopal" />} />
            <Route path="/stock-market-training-bhopal" element={<SEOLandingPage slug="stock-market-training-bhopal" />} />
            <Route path="/:type(privacy-policy|terms|disclaimer|refund-policy)" element={<LegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
