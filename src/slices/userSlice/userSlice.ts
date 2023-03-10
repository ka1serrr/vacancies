import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserSlice } from '@/slices/userSlice/userSliceTypes';
const initialState: IUserSlice = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logOutUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});
