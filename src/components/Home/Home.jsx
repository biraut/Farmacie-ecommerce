import { HomeContainerB, HomeImageBackground, HomeText } from "./Home.style";
import CarouselComponent from "../Navbar2/Carousel";
import Button from "react-bootstrap/Button";
import { ContainerTable } from "../Navbar2/Navbar2.styled";
import React, { useContext } from "react";
import CartPage from "../CartPage/CartPage";
import {
  addToCart,
  removeFromCart,
  returnToDefault,
} from "../../store/actions";
import { CartContext } from "../../store/context";
import CardProdus from "../Produse/CardProdus";

function Home() {
  return (
    <HomeContainerB>
      <CarouselComponent />
    </HomeContainerB>
  );
}

export default Home;
