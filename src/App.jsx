import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import News from "./pages/news/News";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
