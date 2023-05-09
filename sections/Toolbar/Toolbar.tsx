import type { AppDispatch } from "@/libs/store";

import { useDispatch } from "react-redux";

import { Box, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { DrawerHeader } from "@/components";

import { toggleMenu } from "@/libs/store/drawerSlice";

import { grey } from "@mui/material/colors";
import ToolbarItem from "./ToolbarItem";

const Toolbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDrawerOpen = () => {
    dispatch(toggleMenu());
  };

  return (
    <Stack
      position="sticky"
      top="0"
      width={70}
      height="100vh"
      bgcolor={grey[200]}
      gap={1}
    >
      <Box
        height={64}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Stack gap={0.3} alignItems="center">
        <ToolbarItem icon={MailIcon} text="Mail" active={true}/>
        <ToolbarItem icon={ChatBubbleOutlineIcon} text="Chat" />
      </Stack>
    </Stack>
  );
};

export default Toolbar;
