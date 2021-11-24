import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from 'components/common/LoginButton';
import { LogoutButton } from 'components/common/LogoutButton';


export const Home = (): JSX.Element => {
  const { isAuthenticated } = useAuth0(); 

  if (isAuthenticated) {
    return (
      <>
        <h1>Home</h1>
        <LogoutButton />
      </>
    )
  }

  return (
    <>
      <h1>Home</h1>
      <LoginButton />
    </>
  )
}