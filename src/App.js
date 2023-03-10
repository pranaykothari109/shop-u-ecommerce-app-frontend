import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import UserState from "./contexts/UserState";
import Checkout from "./pages/Checkout";
import ProductsState from "./contexts/ProductsState";
import Success from "./pages/Success";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <ProductsState>
      <UserState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/profile" element={<MyAccount />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </UserState>
    </ProductsState>
  );
}

export default App;
