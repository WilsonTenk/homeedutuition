import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

// Lazy load pages for performance optimization
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = React.lazy(() => import('./pages/ServiceDetail'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const TutorApplication = React.lazy(() => import('./pages/TutorApplication'));

// Component to handle dynamic document titles for SEO
const SEOTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'Home Edu Tuition - Expert Home Tutoring';

    if (path === '/about') title = 'About Us | Home Edu Tuition';
    else if (path.startsWith('/services')) title = 'Our Programs | Home Edu Tuition';
    else if (path.startsWith('/blog')) title = 'Blog & Insights | Home Edu Tuition';
    else if (path === '/contact') title = 'Contact Us | Home Edu Tuition';
    else if (path === '/tutor-application') title = 'Join Our Team | Home Edu Tuition';

    document.title = title;
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SEOTitleUpdater />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tutor-application" element={<TutorApplication />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;