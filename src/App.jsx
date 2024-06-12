import "../src/App.css";
import { useState } from "react";
//import Appgg from './test'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar2 from "./components/Navbar2/Navbar2";
import CarouselComponent from "./components/Navbar2/Carousel";
import { ContainerTable } from "./components/Navbar2/Navbar2.styled";
import Produse from "./components/Produse/Produse";
import ProdusPage from "./components/Produs/ProdusPage";
import Promo from "./components/Promotii/Promotii";
import Trend from "./components/Trend/Trend";
import Noutati from "./components/Noutati/Noutati";
import { cartReducer, initialStateCart } from "./store/reducer";
import { useReducer } from "react";
import { CartContext } from "./store/context";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [stateGlobalCart, dispatchCart] = useReducer(
    cartReducer,
    initialStateCart
  );

  const cartContextValue = {
    stateGlobalCart,
    dispatchCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      <Navbar />
      <Navbar2 />
      <ContainerTable></ContainerTable>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/produse" element={<Produse />} />
        <Route path="/produs/:id" element={<ProdusPage />} />
        <Route path="/promotii" element={<Promo />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/noutati" element={<Noutati />} />
      </Routes>

      <Footer />
    </CartContext.Provider>
  );
}

export default App;
