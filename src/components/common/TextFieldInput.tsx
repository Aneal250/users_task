import React from "react";
import { TextField, TextFieldProps, FormControl } from "@mui/material";

const TextFieldInput = (props: TextFieldProps) => {
  const {
    size: inputSize,
    value,
    variant,
    type,
    sx,
    label,
    ...otherProps
  } = props;

  const size = inputSize || "small";

  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        fullWidth
        size={size}
        variant={variant ?? "outlined"}
        type={type}
        InputLabelProps={{ size: "small" }}
        value={value}
        sx={{
          ...sx,
          "& .MuiInputBase-input:focus": {
            boxShadow: "none",
          },
          ".MuiInputLabel-root": {
            top: 1,
          },
          ".MuiFormHelperText-root": {
            marginLeft: 0.5,
          },
        }}
        inputProps={{
          style: {
            height: "28px",
          },
        }}
        {...otherProps}
      />
    </FormControl>
  );
};

export default TextFieldInput;
