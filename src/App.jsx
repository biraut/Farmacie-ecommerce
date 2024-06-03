import "../src/App.css";
import { useState } from "react";
//import Appgg from './test'
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import CarouselComponent from "./components/Navbar2/Carousel";
import { ContainerTable } from "./components/Navbar2/Navbar2.styled";
import Produse from "./components/Produse/Produse";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Navbar2 />
      <ContainerTable>
        <CarouselComponent />
      </ContainerTable>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/produse" element={<Produse />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
