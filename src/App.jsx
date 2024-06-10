import "../src/App.css";
import { useState } from "react";
//import Appgg from './test'
import NavBar from "./components/Home/Navbar/navbar";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import { Carousel } from "bootstrap";
import { ContainerTable } from "./components/Navbar2/Navbar2.styled";
import { Routes, Route } from "react-router-dom";
import Noutati from "./components/Noutati/Noutati";
import Home from "./components/Home/Home";
import Produse from "./components/Produse/Produse";
import ProdusPage from "./components/Produs/ProdusPage";
import Promo from "./components/Promotii/Promotii";
//import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Navbar2/>
    <ContainerTable></ContainerTable>
    <Routes><Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/produse" element={<Produse />} />
        <Route path="/produs/:id" element={<ProdusPage />} />
        <Route path="/promotii" element={<Promo />} />
        <Route path="/noutati" element={<Noutati />} />
        </Routes>
    <Footer/>
   
    </>
  )
}

export default App
