import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat"; 
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import About from "./pages/about";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>

      <Footer />

      {/* Floating AI Chat widget on all pages */}
      <AIChat />
    </div>
  );
}

export default App;