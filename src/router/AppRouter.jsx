import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import CamperDetailsPage from "../pages/CamperDetailsPage/CamperDetailsPage.jsx";
import Features from "../components/Features/Features.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
