import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Layout } from 'components/common/Layout'
import { Subject } from 'components/pages/Subject';
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
    <Layout>
      <Router>
        <Routes>
          <Route path="" element={<Subject />}/>
          {isAuthenticated && 
            <>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/me" element={<Profile />}/>
            </>
          }
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Router>
    </Layout>
  )
}