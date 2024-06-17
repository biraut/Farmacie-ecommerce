export const initialStateCart = {
  cartValue: [],
  favValue: [],
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
      console.log("newState=", newState);
      return newState;
    }
    case "ADD_TO_FAV": {
      const existingFavItemIndex = state.favValue.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingFavItemIndex !== -1) {
        const updatedFavValue = state.favValue.map((item, index) =>
          index === existingFavItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, favValue: updatedFavValue };
      } else {
        return {
          ...state,
          favValue: [...state.favValue, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case "REMOVE_FROM_FAV": {
      let newState = {
        ...state,
        favValue: state.favValue.filter((prods) => prods.id !== action.payload),
      };
      console.log("newState=", newState);
      return newState;
    }
    case "RETURN_TO_DEFAULT": {
      return initialStateCart;
    }

    default:
      return state;
  }
}
