export const initialStateCart = {
  cartValue: [],
};

export function cartReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_CART": {
      return { ...state, cartValue: [...state.cartValue, action.payload] };
    }
    case "REMOVE_FROM_CART": {
      let newState = {
        ...state,
        cartValue: state.cartValue.filter(
          (prods) => prods.id !== action.payload
        ),
      };
      return newState;
    }
    case "RETURN_TO_DEFAULT": {
      return initialStateCart;
    }

    default:
      return state;
  }
}
