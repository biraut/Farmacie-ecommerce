import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  position: relative;
  background-color: whitesmoke;
  max-height: 500px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 250px;
  border-radius: 5px;
  background-color: transparent;
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: black;
`;

export const Producer = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: darkblue;
  text-decoration: none;
  margin-top: 5px;

  &:hover {
    color: #333;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: red;
  margin-top: 5px;
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: calc(80% + 4px);
  right: 20px;
`;

export const CartIcon = styled.span`
  font-size: 20px;
`;

export const ProduseContainer = styled.div`
  display: flex;
  padding: 450px 250px 0px;
  flex-wrap: wrap;
`;
