// import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Blog from './components/Blogs'
import Products from './components/Products';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Add from './components/AddProduct';
import Update from './components/UpdateProduct';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import LoginPage from './components/Login';
import PrivateComponent from './components/PrivateComponent'; 
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <h1>E-commerce Dashboard</h1>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route element={<PrivateComponent />}>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/logout" element={<h3>Logout</h3>} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
