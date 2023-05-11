import Image from "next/image";
import Link from "next/link";

import AppBarSearch from "./AppBarSearch";
import AppBarButtons from "./AppBarButtons";
import { CONFIG } from "@/libs/constants";

import { Box, AppBar as MUIAppBar, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

export type AppBarProps = {};

const AppBar: React.FC<AppBarProps> = () => {
  return (
    <MUIAppBar
      position="sticky"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "none",
        backgroundColor: grey[100],
      }}
      color="transparent"
    >
      <Stack direction="row" minHeight={64} alignItems="center" width="100%">
        <Box width={CONFIG.drawerWidth} pl={2}>
          {/* Brand */}
          <Link href={"#"}>
            <Image src="/logo.png" alt="Gmail" width={109} height={40} />
          </Link>
        </Box>

        {/* Search */}
        <Box maxWidth={720} width="100%">
          <AppBarSearch />
        </Box>

        {/* Buttons */}
        <AppBarButtons />
      </Stack>
    </MUIAppBar>
  );
};

AppBar.displayName = "App Bar";

export default AppBar;
