import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import DataPertanianDaerah from "./pages/dataPertanianDaerah"
import TokoPertanian from "./pages/tokoPertanian"
import InfoPertanian from "./pages/infoPertanian"
const Path = () => {
  return (
    <div>
      <Navbar />
      <div className="my-28 -z-50">
      <Router>
        <Routes>
          <Route path="/" element={<DataPertanianDaerah />} />
          <Route path="/toko-prtanian" element={<TokoPertanian />} />
          <Route path="/info-pertanian" element={<InfoPertanian />} />
        </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default Path;