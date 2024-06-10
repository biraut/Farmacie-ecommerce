import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchProd from "../../hooks/useFetchProd";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  CardContainer,
  Price,
  PriceInfo,
  StockStatus,
  StockLevel,
  QuantityContainer,
  QuantityControls,
  Button,
  QuantityInput,
  QuantityLabel,
  AddToCartButton,
  CartIcon,
} from "./Produs.style";
const PriceCard = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const { id } = useParams(); //am extras doar id din {id: 1}
  const { prods: produs, error, loading } = useFetchProd("/" + id);
  const { isLocalDataEmpty, localData, handleLocalData } =
    useLocalStorage("prods");

  const addNewId = () => {
    if (produs) {
      const local = !isLocalDataEmpty ? JSON.parse(localData) : [];
      const newLocalData = [...local, produs.name];
      handleLocalData("prods", JSON.stringify(newLocalData));
    }
  };

  useEffect(() => {
    if (localData || isLocalDataEmpty || produs) addNewId();
  }, [localData, isLocalDataEmpty, produs]);

  return (
    <CardContainer>
      {loading && !error && <div>Loading...</div>}
      {error && <div>Error on getting data, Server is down </div>}
      {produs && (
        <>
          <Price>{produs.price}</Price>
          <StockStatus>
            <StockLevel>✔ în stoc</StockLevel>
          </StockStatus>
          <QuantityContainer>
            <QuantityLabel>Cantitate</QuantityLabel>
            <QuantityControls>
              <Button onClick={decrementQuantity}>-</Button>
              <QuantityInput value={quantity} readOnly />
              <Button onClick={incrementQuantity}>+</Button>
            </QuantityControls>
          </QuantityContainer>
          <AddToCartButton>
            <CartIcon>🛒</CartIcon> ADAUGĂ ÎN COȘ
          </AddToCartButton>
        </>
      )}
    </CardContainer>
  );
};

export default PriceCard;
