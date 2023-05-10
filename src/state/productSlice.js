import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const productFetch = createAsyncThunk('products/productSlice',
    async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data 
        } catch (error) {
            console.log(error)
        }
       
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
        productContainer:[],
        Loading: false,
        categories: [],
        categoryItem:[]
    },
    reducers: {
    searchByName: (state, action) => {
        state.products = state.productContainer.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
        );
    },

},
    
    extraReducers:
    {
        [productFetch.pending]: (state) => {
            state.Loading = true;
            state.error = false
        },
        [productFetch.fulfilled]: (state, action) => {
            state.Loading = false;
            state.products = action.payload
            state.productContainer=action.payload
            state.categoryItem=action.payload
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
    
    },
})
export const {searchByName,filterData}=productSlice.actions
export default productSlice.reducer
