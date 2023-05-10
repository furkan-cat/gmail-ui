import * as React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { setTab } from "@/libs/store/tabSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/libs/store";

interface PanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTab() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const currentTab = useSelector((state: RootState) => state.tab.currentTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    dispatch(setTab(newValue));
  };

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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Primary"
            {...a11yProps(0)}
            sx={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "unset",
              width: "250px",
              left: "0",
            }}
          />
          <Tab
            label="Promotions"
            {...a11yProps(1)}
            sx={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "unset",
              width: "250px",
            }}
          />
          <Tab
            label="Social"
            {...a11yProps(2)}
            sx={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "unset",
              width: "250px",
            }}
          />
        </Tabs>
      </Box>
      {/* <Panel value={currentTab} index={0}>
        Item One
      </Panel>
      <Panel value={currentTab} index={1}>
        Item Two
      </Panel>
      <Panel value={currentTab} index={2}>
        Item Three
      </Panel> */}
    </Box>
  );
}
