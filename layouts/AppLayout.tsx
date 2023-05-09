"use client";
import type { RootState } from "@/libs/store";

import { useSelector } from "react-redux";

import { Box, styled, CssBaseline, Stack } from "@mui/material";

import AppBar from "@/sections/AppBar/AppBar";
import MenuDrawer from "@/sections/MenuDrawer/MenuDrawer";
import Toolbar from "@/sections/Toolbar/Toolbar";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  overflow: "scroll",
}));

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const showMenu = useSelector((state: RootState) => state.drawer.showMenu);

  return (
    <>
      <Stack direction="row">
        <Toolbar />

        <Box flex={1}>
          <AppBar />

          <Stack
            direction="row"
            flexGrow={1}
            height="calc(100vh - 64px)"
            overflow="hidden"
          >
            <MenuDrawer />

            <Main open={showMenu}>{children}</Main>
          </Stack>
        </Box>
      </Stack>
      <CssBaseline />
    </>
  );
};

export default AppLayout;
