import CheckOut from "./pages/CheckOut/Checkout";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="products" element={<Products />} />
      <Route path="checkout" element={<CheckOut />} />
    </Routes>
  );
}

export default App;
