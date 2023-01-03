import { createSlice } from "@reduxjs/toolkit";
interface ItemI {
  id: string;
  attributes: any;
  quantity: number;
}

const initialState = {
  products: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action) => {
      console.log(action.payload);
      const item: ItemI = state.products.find(
        (item: any) => item.id === action.payload.item.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({
          ...action.payload.item,
          quantity: action.payload.quantity,
        });
      }
    },
    removeItem: (state: any, action:any) => {
      state.products = state.products.filter(
        (item: any) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem,resetCart } = cartReducer.actions;
export default cartReducer.reducer;
