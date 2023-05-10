import type { InputProps } from "./Input";
import { styled } from "@mui/material";
import { grey, common } from "@mui/material/colors";

export const StyledInputGroup = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: grey[200],
  borderRadius: "8px",
  overflow: "hidden",
  transition: "0.2s ease",
  "&:focus-within": {
    backgroundColor: common.white,
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
  },
}));

export const StyledInput: any = styled("input")<InputProps>(
  ({ theme, size = "md" }) => ({
    flex: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontWeight: 500,
    ...(() => {
      switch (size) {
        case "sm":
          return {
            height: 30,
            fontSize: 14,
            paddingLeft: 10,
            paddingRight: 10,
          };
        case "lg":
          return {
            height: 46,
            fontSize: 16,
            paddingLeft: 15,
            paddingRight: 15,
          };
        default:
          return {
            height: 38,
            fontSize: 16,
            paddingLeft: 10,
            paddingRight: 10,
          };
      }
    })(),
  })
);

export const StyledAccessory = styled("div")(() => ({
  minWidth: 56,
  paddingLeft: 8,
  paddingRight: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& ~ input": {
    paddingLeft: 0,
  },
}));
