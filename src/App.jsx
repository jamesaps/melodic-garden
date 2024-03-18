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
import Categories from "./components/pages/Categories";
import Jumbotron from "./components/Jumbotron";
import Divider from "./components/Divider";
import OrderTotal from "./components/OrderTotal"
import Product from "./components/pages/Product";
import Footer from "./components/Footer";
import FooterTrim from "./components/FooterTrim";
import Shop from "./components/pages/Shop";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/pages/Cart";
import { ProductsProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <ProductsProvider>
          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="aboutus" element={<Categories />}></Route>
              <Route path="products" element={<Shop />}></Route>
              <Route path="products/:id" element={<Product />}></Route>
              <Route path="cart" element={<Cart />}></Route>
            </Routes>
          </main>

          <Footer />
          <FooterTrim />
        </ProductsProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
