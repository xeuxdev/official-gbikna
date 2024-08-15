import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
