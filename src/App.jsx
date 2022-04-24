import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
