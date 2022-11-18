import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFavInitialState} from "./types";
import {ITransformedData} from "../types/vacancies.interface";


const initialState: IFavInitialState = {
    items: [],
}

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addToFav: (state, action: PayloadAction<ITransformedData>) => {
            state.items.push(action.payload)
        },
        removeFromFav: (state, action: PayloadAction<any>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})
