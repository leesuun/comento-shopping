import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { GlobalStyle } from "./globalstyle";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter basename="/comento-shopping">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
