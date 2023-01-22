import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const productFetch = createAsyncThunk('products/productSlice',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    })
export const fetchCategories = createAsyncThunk('categories/productSlice',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const data = await res.json()
        return data
    })

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        Loading: false,
        categories: [],
    },
    reducers: {
    },
    extraReducers:
    {
        [productFetch.pending]: (state) => {
            state.Loading = true;
            state.error = false
        },
        [productFetch.fulfilled]: (state, action) => {
            state.Loading = true;
            state.products = action.payload
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
            console.log(action.payload)
        },
    
    },
})
export const {searchByName}=productSlice.reducer
export default productSlice.reducer
