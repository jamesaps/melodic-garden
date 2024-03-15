import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";

import Footer from "./components/Footer";
import FooterTrim from "./components/FooterTrim";


function App() {
  return (
    <>
    <Router>
    
      <Navigation />
      <PlantJumbotron />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="categories" element={<Categories />}></Route>
      </Routes>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="categories" element={<Categories />}></Route>
        </Routes>
      </main>
      
      <Footer />
      <FooterTrim />
    </Router>

    
    </>
  );
}
export default App;

