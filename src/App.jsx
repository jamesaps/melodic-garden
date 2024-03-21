import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Footer from "./components/Footer";
import FooterTrim from "./components/FooterTrim";
import Shop from "./components/pages/Shop";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/pages/Cart";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartDropdownProvider } from "./contexts/CartDropdownContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProductsProvider>
        <CartProvider>
          <CartDropdownProvider>
            <Navigation />

            <main className="flex justify-center">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="products" element={<Shop />}></Route>
                <Route path="products/:id" element={<Product />}></Route>
                <Route path="cart" element={<Cart />}></Route>
              </Routes>
            </main>

            <Footer />
            <FooterTrim />
          </CartDropdownProvider>
        </CartProvider>
      </ProductsProvider>
    </Router>
  );
}

export default App;
