import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Services } from "./pages/services/services";
import { Products } from "./pages/products/products";
import { Contact } from "./pages/contact/contact";
import { Footer } from "./components/footer/fooer";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
