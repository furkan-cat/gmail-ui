"use client";
import type { RootState } from "@/libs/store";

import { useSelector } from "react-redux";

import { Box, styled, CssBaseline, Stack } from "@mui/material";

import AppBar from "@/sections/AppBar/AppBar";
import MenuDrawer from "@/sections/MenuDrawer/MenuDrawer";
import Toolbar from "@/sections/Toolbar/Toolbar";
import CustomTab from "@/sections/Tab/Tab";
import { grey } from "@mui/material/colors";
// import CustomTab from "@/sections/Tab/Tab";

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: "16px",
  backgroundColor: "#f5f5f5",
  overflow: "scrollY",
}));

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
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
            {/* <CustomTab /> */}

            <Main>{children}</Main>
          </Stack>
        </Box>
      </Stack>
      <CssBaseline />
    </>
  );
};

export default AppLayout;
