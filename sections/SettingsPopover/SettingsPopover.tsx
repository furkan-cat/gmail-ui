import { ButtonHTMLAttributes } from "react";
import { useSelector } from "react-redux";

import QuickSettings from "./components/QuickSettings";
import AppsInGmail from "./components/Apps-In-Gmail";
import Density from "./components/Density";
import InboxType from "./components/InboxType";
import ReadingPane from "./components/ReadingPane";
import { RootState } from "@/libs/store";

import { Box, Divider, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import styled from "@emotion/styled";
import Theme from "./components/Theme";
import EmailThreading from "./components/EmailThreading";

const SettingsPopover = () => {
  const showSettings = useSelector(
    (state: RootState) => state.settings.showSettings
  );

  return (
    <Box marginBottom={2}>
      {showSettings ? (
        <Stack
          direction="column"
          sx={{
            width: "300px",
            borderRadius: 3,
            marginLeft: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Stack position="sticky">
            <QuickSettings />
            <Divider sx={{ width: "100%", padding: "unset" }} />
          </Stack>

          <Box
            overflow="scroll"
            height="90vh"
            sx={{
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#cccccc",
              },
              "::-webkit-scrollbar": { width: "10px" },
            }}
          >
            <AppsInGmail />
            <Divider sx={{ width: "100%", padding: "unset" }} />

            <Density />
            <Divider sx={{ width: "100%", padding: "unset" }} />

            <Theme />
            <Divider sx={{ width: "100%", padding: "unset" }} />

            <InboxType />
            <Divider sx={{ width: "100%", padding: "unset" }} />
            <InboxType />
            <Divider sx={{ width: "100%", padding: "unset" }} />

            <ReadingPane />
            <Divider sx={{ width: "100%", padding: "unset" }} />

            <EmailThreading />
          </Box>
        </Stack>
      ) : null}
    </Box>
  );
};

export default SettingsPopover;

export const StyledSettingsButton = styled("button")<
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ theme }, ...props) => ({
  display: "block",
  padding: 0,
  textAlign: "unset",
  border: "none",
  color: "#000",
  fontSize: "13px",
  textTransform: "unset",
  backgroundColor: "transparent",
  "&:hover": { backgroundColor: "transparent", color: blue[700] },
  ...props,
}));
