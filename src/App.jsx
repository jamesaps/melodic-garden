import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDescription from "./components/productDescription";

function App() {
  return ( 
  <div className="App">
  <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  <ProductDescription/>
  </div>
  )
}
export default App;
