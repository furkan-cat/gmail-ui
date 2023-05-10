"use client";
import type { RootState } from "@/libs/store";

import { useSelector } from "react-redux";

import { Box, styled, CssBaseline, Stack } from "@mui/material";

import AppBar from "@/sections/AppBar/AppBar";
import MenuDrawer from "@/sections/MenuDrawer/MenuDrawer";
import Toolbar from "@/sections/Toolbar/Toolbar";
import CustomTab from "@/sections/Tab/Tab";
// import CustomTab from "@/sections/Tab/Tab";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  overflow: "scrollY",
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
            <CustomTab />
          </Stack>
          <Main open={showMenu}>{children}</Main>
        </Box>
      </Stack>
      <CssBaseline />
    </>
  );
};

export default AppLayout;
