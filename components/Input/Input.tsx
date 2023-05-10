import { StyledAccessory, StyledInput, StyledInputGroup } from "./input.styles";

type InputSizeType = "sm" | "md" | "lg";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  size?: InputSizeType;
  accessoryLeft?: React.ReactNode;
  accessoryRight?: React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  accessoryLeft,
  accessoryRight,
  ...props
}) => {
  return (
    <StyledInputGroup>
      {accessoryLeft ? (
        <StyledAccessory>{accessoryLeft}</StyledAccessory>
      ) : null}
      <StyledInput type="text" {...props} />
      {accessoryRight ? (
        <StyledAccessory>{accessoryRight}</StyledAccessory>
      ) : null}
    </StyledInputGroup>
  );
};

export default Input;
