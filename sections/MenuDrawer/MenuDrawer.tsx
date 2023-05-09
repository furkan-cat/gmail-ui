import type { RootState } from "@/libs/store";

import { useSelector } from "react-redux";

import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LabelIcon from "@mui/icons-material/LabelOutlined";

import { DrawerHeader, CustomDrawer } from "@/components";

const MenuDrawer: React.FC = () => {
  const theme = useTheme();
  const showMenu = useSelector((state: RootState) => state.drawer.showMenu);

  return (
    <CustomDrawer open={showMenu} bgcolor="red">
      <Divider />
      <List>
        {["Inbox", "Categories"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <LabelIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ whiteSpace: "nowrap" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </CustomDrawer>
  );
};

MenuDrawer.displayName = "Menu Drawer";

export default MenuDrawer;
