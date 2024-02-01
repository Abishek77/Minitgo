import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Login from './pages/Signin';
import Register from './pages/Register'
import OrdersPage from './pages/Orders.jsx'
import GoogleApiWrapper from './pages/Contact'
import About from './pages/About.jsx';  
import Header from "./components/header";
import Footer from "./components/Footer";
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Feedback from './pages/Feedback.jsx';
import Products from './pages/Products.jsx';
import Client_register from './client/pages/Client_registre.jsx';
const App = () => {
  return (
    <>
    <Header/>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/orders" element={<OrdersPage />} />   
         <Route path="/about" element={<About />} />   
         <Route path="/cart" element={<Cart />} /> 
         <Route path="/feedback" element={<Feedback />} />
         <Route path="/checkout" element={<Checkout />} />   
         <Route path="/products" element={<Products />} />   
         <Route path="/clientregister" element={<Client_register />} />   
         
             
         <Route path="/cart" element={<GoogleApiWrapper />} />   
        
        <Route exact path="*" element={< Notfound/>} />
        
      </Routes>
   
      <Footer/>
      </>
  );
};

export default App;