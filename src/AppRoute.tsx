import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Login } from 'components/pages/Login';
import { NotFound } from 'components/pages/NotFound';

export const AppRoute = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}