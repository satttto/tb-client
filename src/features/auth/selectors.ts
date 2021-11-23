import { createSelector } from '@reduxjs/toolkit';
import { AuthType } from './authSlice';

const selector = (state: { auth: AuthType }) => state.auth;

// ログイン最中かどうかと既にログイン中かどうかを取得
export const loginStatusSelector = createSelector(selector, 
  (state: AuthType) => {
    return {
      isLoading: state.isLoading,
      isLoggedIn: state.isLoggedIn,
    }
  }
)