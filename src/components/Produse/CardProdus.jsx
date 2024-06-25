import React from "react";
import styled from "styled-components";
import {
  CardContainer,
  Image,
  Description,
  Producer,
  Price,
  AddToCartButton,
  CartIcon,
  LinkContainer,
} from "./Produse.styled";
import FavoriteButtonComponent from "./FavoriteButton";
import { CartContext } from "../../store/context";
import { useContext } from "react";
import {
  addToCart,
  removeFromCart,
  removeFromFav,
  addToFav,
} from "../../store/actions";

function CardProdus({ img, titlu, brand, price, name, id }) {
  const { state, dispatchCart } = useContext(CartContext);

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  const isfavorite = state?.favValue?.some((item) => item.id === id);

  return (
    <CardContainer>
      <FavoriteButtonComponent
        id={id}
        name={name}
        img={img}
        price={price}
        isfavorite={isfavorite}
      />
      <LinkContainer to={`/produs/${id}`}>
        <Image src={img} alt="Product" />
        <Description>{titlu}</Description>
      </LinkContainer>
      <Producer href="#">{brand}</Producer>
      <Price>{price}</Price>
      <AddToCartButton onClick={() => handleAddCart(id, name, img, price)}>
        <CartIcon>&#128722;</CartIcon>
      </AddToCartButton>
    </CardContainer>
  );
}

export default CardProdus;
