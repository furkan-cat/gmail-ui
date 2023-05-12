"use client";

import CustomTab from "@/sections/Tab/Tab";
import TabPanel from "@/sections/Tab/TabPanel";
import { Stack } from "@mui/material";

import SettingsPopover from "@/sections/SettingsPopover/SettingsPopover";

const Home = () => {
  return (
    <Stack direction="row" height="100%">
      <Stack bgcolor={"#fff"} borderRadius={3} flex={1} height="100%">
        <CustomTab />
        <TabPanel />
      </Stack>
      <SettingsPopover />
    </Stack>
  );
};

export default Home;
