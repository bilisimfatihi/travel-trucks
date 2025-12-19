import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage.jsx";
import CamperDetailsPage from "../pages/CamperDetailsPAge.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CamperDetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
