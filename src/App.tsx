import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./components/Basket";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <BrowserRouter basename="comento-shopping">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
