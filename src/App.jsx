import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/pages/Footer/Footer";
import { Home } from "./components/pages/HomePage/Home";
import { Services } from "./components/pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
