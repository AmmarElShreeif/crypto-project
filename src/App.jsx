import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Price from "./pages/prices/Prices";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="head">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
