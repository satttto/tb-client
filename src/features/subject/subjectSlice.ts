
import { createSlice } from '@reduxjs/toolkit';
import { normalize } from 'normalizr';
import { getSubjectList } from './actions';
import { subjectListSchema } from './schema';

type SubjectType = {
  id: string,
  title: string,
  memberIds: [],
};

type MemberType = {
  id: string,
  name: string,
};

export type SubjectListType = {
  subjectIds: string[],
  subjects: Record<string, SubjectType>, // (id, subject)
  members:  Record<string, MemberType>,    // (id, user)
  isLoading: boolean,
}

const initialState: SubjectListType = {
  subjectIds: [],
  subjects: {},
  members: {},
  isLoading: false,
}


const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSubjectList.fulfilled, (state, action) => {
      const normalizedList = normalize(action.payload.data, subjectListSchema);
      console.log(normalizedList)
      state.subjectIds = normalizedList.result;
      state.subjects  = normalizedList.entities.subjects!;
      state.members   = normalizedList.entities.members!;
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