import React from 'react';
import { Button, CircularProgress } from '@mui/material';

const BigPrimaryButton = ({ loading, children, onClick, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={onClick}
      {...props}
      disabled={loading} 
      style={{ position: 'relative', width: '100%' }} 
    >
      {loading ? (
        <CircularProgress size={24} color="inherit" /> 
      ) : (
        children
      )}
    </Button>
  );
};

export default BigPrimaryButton;
