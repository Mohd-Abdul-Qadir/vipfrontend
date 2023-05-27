import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AdminDashbord from "./components/Admin/AdminDashbord";
import AllProduct from "./components/All-product/AllProduct";
import Category from "./components/Catogry/Category";
import Appbar from "./components/Header/Appbar";
import Home from "./components/Home/Home";
import LiveProduct from "./components/LiveProduct/LiveProduct";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/QueryForm/Contact";
import QueryForm from "./components/QueryForm/QueryForm";
import SearchList from "./components/SearchList/SearchList";
import Name from "./Temp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<AdminDashbord />} />
        <Route path="/product-category/:category" element={<ProductList />} />
        <Route path="/product/:name" element={<ProductDetail />} />
        <Route path="/product/info/:id" element={<LiveProduct />} />
        <Route path="/search/:key" element={<SearchList />} />
        <Route path="/category/:key" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-product" element={<AllProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
