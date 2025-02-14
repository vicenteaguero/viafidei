// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ViaFidei from "./pages/ViaFidei";
import Mapa from "./pages/Mapa";
import Apologetics from "./pages/Apologetics";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elcaminodelafe" element={<ViaFidei />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/apologetica" element={<Apologetics />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
