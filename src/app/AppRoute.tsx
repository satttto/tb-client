import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from 'components/pages/Home';
import { Profile } from 'components/pages/Profile';
import { NotFound } from 'components/pages/NotFound';
import { useAuth0 } from '@auth0/auth0-react';


export const AppRoute = (): JSX.Element => {
  
  const { isAuthenticated, isLoading } = useAuth0(); 
  if (isLoading) {
    // TODO: ローディングのコンポーネント作成
    return <div>Loading ...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}/>
        {isAuthenticated && 
          <>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/me" element={<Profile />}/>
          </>
        }
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  )
}