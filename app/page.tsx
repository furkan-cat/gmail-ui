"use client";

import CustomTab from "@/sections/Tab/Tab";
import TabPanel from "@/sections/Tab/TabPanel";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack direction="column" bgcolor={"#fff"} borderRadius={3}>
      <CustomTab />
      <TabPanel />
    </Stack>
  );
};

export default Home;
