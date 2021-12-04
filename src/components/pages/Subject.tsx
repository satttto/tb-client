import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { getSubjectList } from 'features/subject/actions';
import { subjectIdsSelector, subjectListSelector } from 'features/subject/selectors';


export const Subject = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const subjects = useAppSelector(subjectListSelector);
  const subjectIds = useAppSelector(subjectIdsSelector);

  useEffect(() => {
    dispatch(getSubjectList({
      cursor: 1,
      size: 2, 
    }))
    .then()
    .catch(error => { console.log(error) });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Subject List</h1>
      {subjectIds.map(id => <h2 key={id}>{subjects[id].title}</h2>)}
    </>
  )
}