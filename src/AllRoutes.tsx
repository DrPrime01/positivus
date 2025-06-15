import { Routes, Route } from 'react-router';

import MainLayout from './Layouts/MainLayout.tsx';
import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
import UseCases from './pages/use-cases';
import Pricing from './pages/pricing';
import Blog from './pages/blog';

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/about-us"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/services"
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        }
      />
      <Route
        path="/use-cases"
        element={
          <MainLayout>
            <UseCases />
          </MainLayout>
        }
      />
      <Route
        path="/pricing"
        element={
          <MainLayout>
            <Pricing />
          </MainLayout>
        }
      />
      <Route
        path="/blog"
        element={
          <MainLayout>
            <Blog />
          </MainLayout>
        }
      />
    </Routes>
  );
}
