"use client";

import { RootState } from "@/libs/store";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

interface PanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = () => {
  const currentTab = useSelector((state: RootState) => state.tab.currentTab);

  function Panel(props: PanelProps) {
    const { children, value, index, ...rest } = props;

    return (
      <div
        role="tabpanel"
        hidden={currentTab !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...rest}
      >
        {currentTab === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ height: "100vh" }}>
      <Panel value={currentTab} index={0}>
        Blank Primary
      </Panel>
      <Panel value={currentTab} index={1}>
        Blank Promotions
      </Panel>
      <Panel value={currentTab} index={2}>
        Blank Social
      </Panel>
    </Box>
  );
};

export default TabPanel;
