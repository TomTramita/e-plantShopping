import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer to the store
  },
});

export default store;