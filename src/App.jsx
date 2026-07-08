import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chauffeur" element={<ComingSoon title="Luxury Chauffeur" />} />
          <Route path="/itinerary" element={<ComingSoon title="Itinerary & Events" />} />
          <Route path="/marketplace" element={<ComingSoon title="Luxury Marketplace" />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
