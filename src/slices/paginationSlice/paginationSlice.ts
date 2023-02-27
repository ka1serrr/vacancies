import { IPaginationSliceTypes } from '@/slices/paginationSlice/paginationSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// !! Слайс делается только для практики RTK !!
const initialState: IPaginationSliceTypes = {
  totalPages: 1,
  currentPage: 1,
  perPage: 5,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<any>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<any>) => {
      state.totalPages = action.payload;
    },
    setAmountOfPages: (state, action: PayloadAction<any>) => {
      state.perPage = action.payload;
    },
  },
});
