export function addToCart(id, name) {
  return {
    type: "ADD_TO_CART",
    payload: { id, name },
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
}

export function returnToDefault() {
  return {
    type: "RETURN_TO_DEFAULT",
  };
}
