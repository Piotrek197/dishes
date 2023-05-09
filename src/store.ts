import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./slices/dishSlice";
import errorsReducer from "./slices/errorsSlice";


export const store = configureStore({
    reducer: {
        dish: dishReducer,
        errors: errorsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>