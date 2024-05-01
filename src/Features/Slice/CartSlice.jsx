import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const existProductInCart = state.cartData.some(
        (product) => product.id === action.payload.id
      );
      // console.log(existProductInCart);

      if (existProductInCart) {
        const updateCartProduct = state.cartData.map((product) => {
          // console.log(product);
          return product.id === action.payload.id
            ? { ...product, qty: product.qty + 1 }
            : product;
        });
        console.log(updateCartProduct);
        return {
          ...state,
          cartData: updateCartProduct,
        };
      } else {
        return {
          cartData: [...state.cartData, { ...action.payload, qty: 1 }],
        };
      }
    },
    deleteProduct(state, action) {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },
    increment(state, action) {
      state.cartData = state.cartData.filter((item) => {
        return item.id === action.payload ? (item.qty += 1) : item;
      });
    },
    decrement(state, action) {
      state.cartData = state.cartData.map((item) => {
        if (item.id === action.payload && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addProduct, deleteProduct, increment, decrement } =
  CartSlice.actions;

export default CartSlice.reducer;
