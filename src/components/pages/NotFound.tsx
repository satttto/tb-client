import React from 'react';
import { Link } from 'react-router-dom';


export const NotFound = (): JSX.Element => {
  return (
    <div>
      <h1>Not Found</h1> 
      <Link to="/" >ホームへ</Link>
    </div>
  );
}