import { Stack, Typography } from "@mui/material";
import React from "react";
import { StyledSettingsButton } from "../SettingsPopover";
import Image from "next/image";

const Theme = () => {
  return (
    <Stack px={2} py={1} gap={1}>
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ fontSize: "12px" }}>Theme</Typography>
        <StyledSettingsButton style={{ color: "blue" }}>
          View All
        </StyledSettingsButton>
      </Stack>

      <Image
        src="/settings-theme.png"
        alt="settings-theme"
        width={58}
        height={40}
        style={{ borderRadius: "4px" }}
      />
    </Stack>
  );
};

export default Theme;
