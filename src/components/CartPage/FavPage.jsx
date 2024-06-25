import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../store/context";
import { addToCart, removeFromCart, removeFromFav } from "../../store/actions";
import {
  CartContainer,
  CartItemsContainer,
  CartItem,
  ItemDetails,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemQuantity,
  QuantityButton,
  SummaryContainer,
  SummaryItem,
  SummaryTitle,
  ContinueButton,
  Title,
  FavoriteButtonCos,
} from "./CartPage.styled";
import { FavoriteButton } from "../Produse/Produse.styled";
import { AddToCartButton, CartIcon } from "../Produs/Produs.style";

const CartPage = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const { state, dispatchCart } = useContext(CartContext);
  const { stateGlobalCart } = useContext(CartContext);
  const favValue = stateGlobalCart?.favValue || [];
  const cartValue = stateGlobalCart?.cartValue || [];

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(",", ".").replace(" LEI", ""));
  };
  const total = cartValue
    .reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
    .toFixed(2);
  const totalItems = cartValue.reduce((acc, item) => acc + item.quantity, 0);

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const groupedFavValue = favValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const groupedCartValue = cartValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleRemoveFromFav = (id) => {
    dispatchCart(removeFromFav(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatchCart(removeFromCart(id));
  };

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  return (
    <CartContainer>
      <CartItemsContainer>
        <Title>FAVORITE:</Title>
        {groupedFavValue.map((item, index) => (
          <CartItem key={index}>
            <ItemDetails to={`/produs/${item.id}`}>
              <ItemImage src={item.img} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>Pret: {item.price}</ItemPrice>
              </ItemInfo>
            </ItemDetails>
            <AddToCartButton
              onClick={() =>
                handleAddCart(item.id, item.name, item.img, item.price)
              }
            >
              <CartIcon>🛒</CartIcon> ADAUGĂ ÎN COȘ
            </AddToCartButton>
            <ItemQuantity>
              <QuantityButton
                onClick={() =>
                  handleRemoveFromFav(item.id, item.name, item.img)
                }
              >
                X
              </QuantityButton>
            </ItemQuantity>
          </CartItem>
        ))}
      </CartItemsContainer>
    </CartContainer>
  );
};
export default CartPage;
