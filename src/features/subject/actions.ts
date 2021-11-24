import { createAsyncThunk } from "@reduxjs/toolkit";



type LoginArg = {
  email: string,
  password: string,
  rememberMe: boolean,
}

export const login = createAsyncThunk(
  'auth/login',
  async (body: LoginArg) => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return (await response.json());
  },
)