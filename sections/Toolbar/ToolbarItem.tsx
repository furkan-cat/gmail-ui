import { Box, Typography, styled } from "@mui/material";
import React from "react";

export type ToolbarItemProps = {
  text: string;
  icon: React.ReactNode | any;
  active?: boolean;
  onClick?: () => void;
};

const Button = styled(
  "button",
  {}
)<{ active?: boolean }>(({ active, theme }) => ({
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.grey[800],
  padding: "6px",
  outline: "none",
  border: "none",
  width: "100%",
  height: "100%",
  paddingLeft: "12px",
  paddingRight: "12px",
  "&:hover > div": {
    backgroundColor: theme.palette.grey[300],
  },
  ...(active && {
    "& > div": {
      backgroundColor: theme.palette.grey[400],
    },
  }),
}));

const ToolbarItem: React.FC<ToolbarItemProps> = ({
  text,
  icon: Icon,
  active,
  onClick,
}) => {
  return (
    <Button active={active}>
      <Box
        borderRadius={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={0.3}
      >
        <Icon style={{ width: "20px" }} />
      </Box>
      <Typography fontSize={12}>{text}</Typography>
    </Button>
  );
};

export default ToolbarItem;
