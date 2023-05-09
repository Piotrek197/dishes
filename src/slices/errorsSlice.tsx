import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";
import { ErrorsType } from "../types";

const initialState: ErrorsType = {
    name: "",
    type: "",
    preparation_time: "",
    no_of_slices: "",
    diameter: "",
    spiciness_scale: "",
    slices_of_bread: ""
}

const errorsSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        handleOnBlurName:               (state, action: PayloadAction<string>) => {
            if(!action.payload.length) state.name = "Name is required";
            else state.name = "";
        },  

        handleOnBlurPreparationTime:    (state, action: PayloadAction<string>) => {
            const regex = /[0-9]{2}:[0-9]{2}:[0-9]{2}/;
            if(regex.test(action.payload.trim())) state.preparation_time = "";
            else state.preparation_time = "Please provide preparation time in good format";
        }, 

        handleOnBlurType:               (state, action: PayloadAction<string>) => {
            if(!action.payload) state.type = "Please provide dish type";
            else state.type = "";
        },
        handleOnBlurNumberOfSlices:     (state, action: PayloadAction<number>) => {
            if(Number.isInteger(action.payload) && action.payload >= 1 && action.payload <= 10) state.no_of_slices = "";
            else state.no_of_slices = "Value must be an integer between one and ten";

        },
        handleOnBlurDiameter:           (state, action: PayloadAction<number>) => {
            if(action.payload >= 1 && action.payload <= 100) state.diameter= "";
            else state.diameter = "Value must be a number between one and hundred";
        },
        handleOnBlurSpicinessScale:     (state, action: PayloadAction<number>) => {
            if(Number.isInteger(action.payload) && action.payload >= 1 && action.payload <= 100) state.spiciness_scale= "";
            else state.spiciness_scale = "Value must be a integer between one and ten";
        },
        handleOnBlurSlicesOfBread:      (state, action: PayloadAction<number>) => {
            if(action.payload >= 1 && action.payload <= 100) state.slices_of_bread= "";
            else state.slices_of_bread = "Value must be a integer between one and hundred";
        }
    }
});


export const selectErrors = (state: RootState) => state.errors;

export const {handleOnBlurName, handleOnBlurPreparationTime, handleOnBlurType, handleOnBlurNumberOfSlices,
    handleOnBlurDiameter, handleOnBlurSpicinessScale, handleOnBlurSlicesOfBread
} = errorsSlice.actions;


export default errorsSlice.reducer;
