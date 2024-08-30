import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import Nav2 from './Components/layout/Nav/Nav2';
import ProductDetail from './Components/layout/ProductDetail/ProductDetail';
import Products from "./Pages/Products/Products.jsx"
import AddProducts from "./Pages/Add Products/AddProduct.jsx"
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
// import EventsSection from './Pages/Event.jsx';

function App() {
  const show = true;
  const { paramName } = useParams();

  return (

    <BrowserRouter>
      {
        paramName === ("login" || "register") ? <Nav2 show={show} /> : ""

      }


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProducts />} />
        {/* <Route path="/event" element={<EventsSection />} /> */}
        <Route path="/products/:keyword" element={<Products />} />


        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
