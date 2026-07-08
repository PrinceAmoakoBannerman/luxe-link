import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Chauffeur from "./pages/Chauffeur";
import Itinerary from "./pages/Itinerary";
import Marketplace from "./pages/Marketplace";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chauffeur" element={<Chauffeur />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </MotionConfig>
  );
}
