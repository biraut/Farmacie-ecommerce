export function addToCart(id, name, img, price, quantity = 1) {
  return {
    type: "ADD_TO_CART",
    payload: { id, name, img, price, quantity },
  };
}

export function addToFav(id, name, img, price) {
  return {
    type: "ADD_TO_FAV",
    payload: { id, name, img, price },
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
}

export function deleteFromCart(id) {
  return {
    type: "DELETE_FROM_CART",
    payload: id,
  };
}

export function removeFromFav(id) {
  return {
    type: "REMOVE_FROM_FAV",
    payload: id,
  };
}

export function returnToDefault() {
  return {
    type: "RETURN_TO_DEFAULT",
  };
}
