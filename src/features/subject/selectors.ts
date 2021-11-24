import { createSelector } from '@reduxjs/toolkit';
import { SubjectType } from './subjectSlice';

const selector = (state: { subject: SubjectType }) => state.subject;

// 読み込み中かどうかを調べる
export const subjectStatusSelector = createSelector(selector, 
  (state: SubjectType) => {
    return { isLoading: state.isLoading };
  }
)