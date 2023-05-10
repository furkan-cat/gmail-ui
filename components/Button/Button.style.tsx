import { ButtonProps } from "./Button";

import { styled } from "@mui/material";

import { grey } from "@mui/material/colors";

export const StyledButton = styled("button")<ButtonProps>(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  backgroundColor: "white",
  borderColor: grey[300],
  borderWidth: 1,
  borderRadius: 8,
  borderStyle: "solid",
  paddingLeft: 5,
  paddingRight: 5,
  height: 46,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
