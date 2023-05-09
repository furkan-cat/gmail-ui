import type { AppDispatch } from "@/libs/store";

import { useDispatch } from "react-redux";

import {
  IconButton,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { toggleMenu } from "@/libs/store/drawerSlice";

import { grey } from "@mui/material/colors";

export type AppBarProps = {};

const AppBar: React.FC<AppBarProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDrawerOpen = () => {
    dispatch(toggleMenu());
  };

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
      <Toolbar>
        <Typography variant="h6" noWrap component="div" ml={3}>
          Persistent drawer
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
};

AppBar.displayName = "App Bar";

export default AppBar;
