import type { RootState } from "@/libs/store";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { CustomDrawer } from "@/components";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import LabelIcon from "@mui/icons-material/LabelOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useTheme } from "@emotion/react";

import { grey } from "@mui/material/colors";

const MenuDrawer: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const showMenu = useSelector((state: RootState) => state.drawer.showMenu);
  const [actives, setActives] = useState<string | null>(null);

  const listItem = [
    {
      title: "InBox",
      handle: "inbox",
      icon: <InboxIcon sx={{ width: "20px" }} />,
    },
    {
      title: "Categories",
      handle: "categories",
      icon: <LabelIcon sx={{ width: "20px" }} />,
      links: [
        {
          title: "Social",
          icon: <PeopleAltIcon sx={{ width: "20px" }} />,
        },
        {
          title: "Updates",
          icon: <ReportGmailerrorredIcon sx={{ width: "20px" }} />,
        },
      ],
    },
  ];

  const handleClick = (item: any) => {
    setActives((prev) => {
      console.log(prev, item.handle);

      if (item.handle === prev) {
        return null;
      }
      return item.handle;
    });
    // if (!item.links) router.push(item.handle);
  };

  return (
    <CustomDrawer open={showMenu} bgcolor="transparent">
      <List>
        {listItem.map((item) => {
          const isActive = actives == item.handle;

          return (
            <Fragment key={item.handle}>
              <ListItem disablePadding sx={{ paddingLeft: "12px" }}>
                <ListItemButton
                  sx={{
                    backgroundColor: isActive ? grey[200] : null,
                    borderRadius: "25px",
                    paddingLeft: "16px",
                    paddingRight: " 12px",
                    height: "32px",
                  }}
                  onClick={() => handleClick(item)}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ whiteSpace: "nowrap", fontSize: "14px" }}
                  />
                  {item.links && (isActive ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>
              {item.links &&
                item.links.map((links, i) => (
                  <Collapse key={i} in={isActive} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{
                          ml: 1.2,
                          backgroundColor: isActive ? grey[200] : null,
                          borderRadius: "25px",
                          paddingLeft: "16px",
                          paddingRight: " 12px",
                          height: "32px",
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "30px" }}>
                          {links.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={links.title}
                          sx={{ fontSize: "14px" }}
                        />
                      </ListItemButton>
                    </List>
                  </Collapse>
                ))}
            </Fragment>
          );
        })}
      </List>
    </CustomDrawer>
  );
};

MenuDrawer.displayName = "Menu Drawer";

export default MenuDrawer;
