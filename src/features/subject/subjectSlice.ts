
import { createSlice } from '@reduxjs/toolkit';
import { login } from './actions';

export type AuthType = {
  userId: string,
  isLoggedIn: boolean,
  isLoading: boolean,
};

const initialState: AuthType = {
  userId: '',
  isLoggedIn: false,
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.userId     = action.payload.data.id;
      state.isLoggedIn = true;
      state.isLoading  = false;
    });
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;