import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { SignUp } from 'components/pages/SignUp';
import { Login } from 'components/pages/Login';
import { NotFound } from 'components/pages/NotFound';

export const AppRoute = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  )
}