import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.style";

export type ButtonVariantType = "default" | "primary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantType;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
