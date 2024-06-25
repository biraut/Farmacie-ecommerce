import React, { useState, useEffect } from "react";
import { FavoriteButton, FavoriteIcon } from "./Produse.styled";
import { useContext } from "react";
import { CartContext } from "../../store/context";
import {
  addToCart,
  removeFromCart,
  removeFromFav,
  addToFav,
} from "../../store/actions";

const FavoriteButtonComponent = ({ id, name, img, price, isfavorite }) => {
  const [isFav, setIsFav] = useState(isfavorite);
  const { state, dispatchCart } = useContext(CartContext);
  useEffect(() => {
    setIsFav(isfavorite);
  }, [isfavorite]);

  const handleFavoriteClick = () => {
    console.log(isFav);
    if (isFav) {
      dispatchCart(removeFromFav(id));
    } else {
      dispatchCart(addToFav(id, name, img, price));
    }
    setIsFav(!isFav);
  };

  return (
    <FavoriteButton onClick={handleFavoriteClick}>
      <FavoriteIcon role="img" aria-label="Favorite" isfavorite={isFav}>
        {isFav ? "❤️" : "🤍"}
      </FavoriteIcon>
    </FavoriteButton>
  );
};

export default FavoriteButtonComponent;
