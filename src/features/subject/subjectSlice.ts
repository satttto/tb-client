
import { createSlice } from '@reduxjs/toolkit';
import { getSubjectList } from './actions';

export type SubjectType = {
  id: string,
  title: string,
  members: [], // TODO: id, member
  isLoading: boolean,
};

const initialState: SubjectType = {
  id: '',
  title: '',
  members: [],
  isLoading: false,
}

const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSubjectList.fulfilled, (state, action) => {
      state.id    = action.payload.data.id;
      state.title = action.payload.data.title;
      state.members   = action.payload.data.members;
      state.isLoading = false;
    });
    builder.addCase(getSubjectList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSubjectList.rejected, state => {
      state.isLoading = false;
    });
  },
});

export default subjectSlice.reducer;