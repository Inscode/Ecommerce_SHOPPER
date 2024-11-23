import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import electronic_banner from "./Components/Assets/electronicBanner.jpg";
import light_banner from "./Components/Assets/lightingBanner.jpg";
import kitchen_banner from "./Components/Assets/kitchenBanner.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/lighting"
            element={<ShopCategory banner={light_banner} category="lighting" />}
          />
          <Route
            path="/electronic"
            element={
              <ShopCategory banner={electronic_banner} category="electronic" />
            }
          />
          <Route
            path="/kitchen"
            element={
              <ShopCategory banner={kitchen_banner} category="kitchen" />
            }
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
