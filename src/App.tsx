import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Header";
import { StickyWhatsApp } from "./components/StickyWhatsApp";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-black text-brand-white font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <StickyWhatsApp />
      </div>
    </Router>
  );
}

export default App;
