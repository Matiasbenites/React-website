import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";
import Footer from "./components/Footer/Footer";
=======
import Home from "./components/Home/Home";
>>>>>>> refs/remotes/origin/main

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
=======
          <Route path="/" exact component={Home} />
          {/* <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} /> */}
        </Routes>
>>>>>>> refs/remotes/origin/main
      </Router>
    </>
  );
}

export default App;
