import { createSelector } from '@reduxjs/toolkit';
import { SubjectListType } from './subjectSlice';

const selector = (state: { subject: SubjectListType }) => state.subject;

// 読み込み中かどうかを調べる
export const subjectStatusSelector = createSelector(selector, 
  (state: SubjectListType) => {
    return state.isLoading;
  }
)

// SubjectのIDリストを返す
export const subjectIdsSelector = createSelector(selector,
  (state: SubjectListType) => {
    return state.subjectIds;
  }
);

// Subject一覧を返す
export const subjectListSelector = createSelector(selector, 
  (state: SubjectListType) => {
    return state.subjects;
  }
);

// メンバー一覧を返す
export const memberListSelector = createSelector(selector,
  (state: SubjectListType) => {
    return state.members;
  }
);