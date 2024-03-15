import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
import Jumbotron from "./components/jumbotron";
import Divider from "./components/Divider";
import OrderSummary from "./components/pages/OrderSummary";


function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="categories" element={<Categories />}></Route>
      </Routes>
    </Router>
   <Jumbotron></Jumbotron>
    <Divider></Divider>  
   <OrderSummary products={[]}></OrderSummary>
    </>
  );
}


export default App;
