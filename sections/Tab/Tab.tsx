import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { setTab } from "@/libs/store/tabSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/libs/store";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTab() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    dispatch(setTab(newValue));
  };

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
    </Box>
  );
}
