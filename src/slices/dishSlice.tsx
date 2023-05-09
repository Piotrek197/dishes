import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";
import { DishType, DishCategoryType } from "../types";

export const initialState: DishType = {
    name: "",
    type: null,
    preparation_time: "",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: "",
    slices_of_bread: ""
}

const dishSlice = createSlice({
    name: "dish",
    initialState,
    reducers: {
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        changeType: (state, action: PayloadAction<DishCategoryType>) => {
            state.no_of_slices =  "";
            state.diameter =  "";
            state.spiciness_scale = "";
            state.slices_of_bread = "";
            state.type = action.payload;
        },
        changePreparationTime: (state, action: PayloadAction<string>) => {
            state.preparation_time = action.payload;
        },
        changeNumberOfSlices: (state, action: PayloadAction<number>) => {
            state.no_of_slices = action.payload
        },
        changeDiameter: (state, action: PayloadAction<number>) => {
            state.diameter = action.payload;
        },
        changeSpicinessScale: (state, action: PayloadAction<number>) => {
            state.spicineess_scale = action.payload;
        },
        changeSlicesOfBread: (state, action: PayloadAction<number>) => {
            state.slices_of_bread = action.payload;
        }

    }
})

export const {changeName, changeType, changePreparationTime, changeNumberOfSlices,
changeDiameter, changeSpicinessScale, changeSlicesOfBread
} = dishSlice.actions;

export const selectDish = (state: RootState) => state.dish;

export default dishSlice.reducer;


