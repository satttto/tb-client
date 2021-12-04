import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSubjectListAPI } from 'services/subject';
import { SubjectListResponse } from 'proto/subject_pb';

export const getSubjectList = createAsyncThunk(
  'subject/list',
  async (arg: { cursor: number, size: number}) => {
    return await getSubjectListAPI(arg.cursor, arg.size) as SubjectListResponse.AsObject;
  },
);