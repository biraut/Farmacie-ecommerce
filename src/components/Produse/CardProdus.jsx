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

function CardProdus({ img, description, brand, price, name }) {
  return (
    <CardContainer>
      <FavoriteButton>
        <span role="img" aria-label="Favorite">
          &#10084;&#65039;
        </span>
      </FavoriteButton>
      <Image src={img} alt="Product" />
      <Description>{description}</Description>
      <Producer href="#">{brand}</Producer>
      <Price>{price}</Price>
      <AddToCartButton>
        <CartIcon>&#128722;</CartIcon>
      </AddToCartButton>
    </CardContainer>
  );
}

export default CardProdus;
