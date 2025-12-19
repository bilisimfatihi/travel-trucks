import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage.jsx";
import CamperDetailsPage from "../pages/CamperDetailsPAge.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
