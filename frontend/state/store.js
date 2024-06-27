// ✨ create your `store` in this module

import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quotesSlice"

const store = configureStore({
    reducer: {
        quotesState: quotesReducer,
    }
})

export default store