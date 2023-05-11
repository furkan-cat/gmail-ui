import { ButtonHTMLAttributes } from "react";
import { useSelector } from "react-redux";

import QuickSettings from "./Quick-Settings";
import AppsInGmail from "./Apps-In-Gmail";
import Density from "./Density";
import { RootState } from "@/libs/store";

import { Divider, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import styled from "@emotion/styled";

export const StyledSettingsButton = styled("button")<
  ButtonHTMLAttributes<HTMLBRElement>
>(({ theme }) => ({
  display: "block",
  padding: 0,
  textAlign: "unset",
  border: "none",
  color: "#000",
  fontSize: "13px",
  textTransform: "unset",
  backgroundColor: "transparent",
  "&:hover": { backgroundColor: "transparent", color: blue[700] },
}));

const SettingsPopover = () => {
  const showSettings = useSelector(
    (state: RootState) => state.settings.showSettings
  );

  return (
    <div>
      {showSettings ? (
        <Stack
          direction="column"
          sx={{
            width: "300px",
            borderRadius: 3,
            padding: "8px 0",
            marginLeft: "10px",
            backgroundColor: "#fff",
            overflow: "scrollY",
          }}
        >
          <QuickSettings />
          <AppsInGmail />
          <Divider sx={{ width: "100%", padding: "unset" }} />
          <Density />
        </Stack>
      ) : null}
    </div>
  );
};

export default SettingsPopover;
