import React from "react";
import styled from "styled-components";
import {
  CardContainer,
  Image,
  FavoriteButton,
  Description,
  Producer,
  Price,
  AddToCartButton,
  CartIcon,
} from "./Produse.styled";
import { CartContext } from "../../store/context";
import { useContext } from "react";
import { addToCart, removeFromCart } from "../../store/actions";

function CardProdus({ img, titlu, brand, price, name, id }) {
  const { dispatchCart } = useContext(CartContext);

  const handleAddCart = (id, name) => {
    dispatchCart(addToCart(id, name));
  };
  return (
    <CardContainer>
      <FavoriteButton>
        <span role="img" aria-label="Favorite">
          &#10084;&#65039;
        </span>
      </FavoriteButton>
      <Image src={img} alt="Product" />
      <Description>{titlu}</Description>
      <Producer href="#">{brand}</Producer>
      <Price>{price}</Price>
      <AddToCartButton onClick={() => handleAddCart(id, name)}>
        <CartIcon>&#128722;</CartIcon>
      </AddToCartButton>
    </CardContainer>
  );
}

export default CardProdus;
