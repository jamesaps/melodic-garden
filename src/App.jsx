import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
import Footer from "./components/Footer";
import FooterTrim from "./components/FooterTrim";
import FeatureCard from "./components/FeatureCard"

function App() {
  return (
    <Router>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="categories" element={<Categories />}></Route>
        </Routes>
      </main>
      
      <FeatureCard></FeatureCard>
      <Footer />
      <FooterTrim />
    </Router>
  );
}
export default App;
