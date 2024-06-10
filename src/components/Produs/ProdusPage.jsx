import React from "react";
import Produs from "./Produs";
import ProductDetails from "./ProdusDetalii";
import { BigContainer } from "./Produs.style";
import PriceCard from "./PriceCard";

const ProdusPage = () => (
  <BigContainer>
    <Produs />
    <ProductDetails />
    <PriceCard />
  </BigContainer>
);

export default ProdusPage;
