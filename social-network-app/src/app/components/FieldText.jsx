import React from 'react';
import { TextField } from '@mui/material';

const FieldText = ({ value, setValue, label, placeholder, error, errorMessage, required, name, variant }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      variant={variant || 'outlined'}
      value={value}
      onChange={handleChange}
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={error ? errorMessage : ''}
      required={required}
      fullWidth
      name={name}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default FieldText;
