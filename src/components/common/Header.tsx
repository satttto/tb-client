import React from 'react';
import { Box } from '@mui/material';
import { AuthButton } from 'components/common/AuthButton';


export const Header = (): JSX.Element => {
  return (
    <Box>
      <h1>Header</h1>
      <AuthButton />
    </Box>
  )
};