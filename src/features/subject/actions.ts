import { createAsyncThunk } from "@reduxjs/toolkit";


export const getSubjectList = createAsyncThunk(
  'subject/list',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/subject`, {
      method: 'GET',
    });
    return await response.json();
  },
)