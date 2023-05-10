import Image from "next/image";

import { Avatar, Box, IconButton, Stack } from "@mui/material";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

import { Button } from "@/components";

const AppBarButtons: React.FC = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      flex="1"
      pr={2}
      gap="10px"
    >
      <Stack direction="row" alignItems="center" gap="5px">
        <IconButton color="inherit" aria-label="Help">
          <HelpOutlineRoundedIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Settings">
          <SettingsOutlined />
        </IconButton>
        <IconButton color="inherit" aria-label="Apps">
          <AppsRoundedIcon />
        </IconButton>
      </Stack>

      <Button variant="default">
        <Box display="flex" alignItems="center" ml="3px">
          <Image
            src="https://www.google.com/u/2/ac/images/logo.gif?uid=110044957701666114206&service=google_gsuite"
            alt="Google"
            width={78}
            height={25}
          />
        </Box>
        <Avatar sx={{ width: 32, height: 32 }} />
      </Button>
    </Stack>
  );
};

export default AppBarButtons;
