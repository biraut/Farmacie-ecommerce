import React from "react";
import Produs from "./Produs";
import ProductDetails from "./ProdusDetalii";
import { BigContainer } from "./Produs.style";
import PriceCard from "./PriceCard";
import DescriereProdus from "./DescriereProdsu";

const ProdusPage = () => (
  <BigContainer>
    <Produs />
    <ProductDetails />
    <PriceCard />
    <DescriereProdus />
  </BigContainer>
);

export default ProdusPage;
