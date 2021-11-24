import React, { useEffect } from 'react';


export const Subject = (): JSX.Element => {

  useEffect(() => {
    console.log('get subjects list');
  }, []);

  return (
    <>
      <h1>Subject List</h1>
    </>
  )
}