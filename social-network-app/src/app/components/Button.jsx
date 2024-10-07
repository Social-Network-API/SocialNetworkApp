import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ label, color, className, onClick }) => {
    return (
        <MuiButton
            variant="contained"
            color={color}
            className={className}
            onClick={onClick}
        >
            {label}
        </MuiButton>
    );
};

export default Button;
