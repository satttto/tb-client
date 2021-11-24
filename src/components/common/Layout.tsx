import React from 'react';
import { Box } from '@mui/material'; 
import { Header } from 'components/common/Header';



export const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
};