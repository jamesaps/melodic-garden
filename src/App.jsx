import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
import Product from "./components/pages/Product"

import Footer from "./components/Footer";
import FooterTrim from "./components/FooterTrim";


function App() {
  return (
    <>
    <Router>
    
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          {/* Subject to removal */}
          <Route path="productTest" element={<Product />}></Route>
          {/*  */}
        </Routes>
      </main>
      
      {/* Remove the following code once product cards are present on home page  */}
      <NavLink to={"productTest"} >
        Click Here to test the product page
      </NavLink>
      {/*  */}

      <Footer />
      <FooterTrim />
    </Router>

    
    </>

  );
}


export default App;

