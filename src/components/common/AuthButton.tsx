import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from 'components/common/LoginButton';
import { LogoutButton } from 'components/common/LogoutButton';


export const AuthButton = (): JSX.Element => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />
} ;
