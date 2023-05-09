import React from "react";
import { Box, type BoxProps } from "@mui/material";
import { CONFIG } from "@/libs/constants";

export type CustomDrawerProps = BoxProps & {
  open: boolean;
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  open,
  children,
  ...props
}) => {
  const width = open ? CONFIG.drawerWidth : 0;

  return (
    <Box
      width={width}
      overflow="hidden"
      flexShrink={0}
      sx={{
        transition: "0.2s ease-out",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomDrawer;
