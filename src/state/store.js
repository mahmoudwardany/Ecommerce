import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import cartSlice from './cartSlice'
import productSlice from './productSlice'
 export const store = configureStore({
    reducer: {
      products:productSlice,
      cart:cartSlice,
      categories:productSlice,
      user:authSlice 
    },
})
  
