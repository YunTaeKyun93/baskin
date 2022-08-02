import "./App.css";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navi from "./header/Navi";
import Footer from "./pages/Footer";
import ServiceCenter from "./header/ServiceCenter";
import ContactUs from "./header/ContactUs";
import Product from "./pages/Product";
function App() {
  return (
    <div>
      <Header />
      <Navi />

      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="serviceCenter" element={<ServiceCenter />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
