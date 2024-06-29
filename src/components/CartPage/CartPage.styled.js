import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  DARK_GRAY,
  DARK_GREEN,
  RED_ORANGE,
  WHITE_NEUTRAL,
} from "../../constants/color";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  min-height: 500px;
`;

export const CartItemsContainer = styled(Link)`
  width: 50%;
  text-decoration: none;
`;

export const SummaryContainer = styled.div`
  width: 18%;
  height: 20%;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 5px;
  margin-left: 28px;
  margin-top: 56px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

export const ItemDetails = styled(Link)`
  display: flex;
  align-items: center;
  color: whitesmoke;
  text-decoration: none;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

export const ItemName = styled.span`
  font-weight: bold;
  color: whitesmoke;
`;

export const ItemPrice = styled.span`
  color: #777;
  color: whitesmoke;
`;

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  color: whitesmoke;
`;

export const QuantityButton = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  margin: 10px;
  border: 1px solid #e0e0e0;
  padding: 8px;
  cursor: pointer;
  font-size: 1.2em;
  z-index: 2;
  border-radius: 50%;
  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: whitesmoke;
`;

export const SummaryTitle = styled.h2`
  margin-bottom: 20px;
  color: whitesmoke;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  margin-left: 18%;
  justify-content: center;
  display: flex;
  color: whitesmoke;
`;

export const FavoriteButtonCos = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  width: 20%;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  z-index: 2;
  &:hover {
    background: darkred;
    color: ${WHITE_NEUTRAL};
  }
`;

export const ContinueButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 8px;
  &:hover {
    background: ${DARK_GREEN};
    color: ${WHITE_NEUTRAL};
  }
`;
