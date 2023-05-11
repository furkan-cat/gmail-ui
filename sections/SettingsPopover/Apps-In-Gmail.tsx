import Image from "next/image";

import { Stack, Typography } from "@mui/material";
import { StyledSettingsButton } from "./SettingsPopover";

const AppsInGmail = () => {
  return (
    <Stack direction="column" px={2} py={1} gap={2}>
      <Typography sx={{ fontSize: "12px" }}>Apps in Gmail</Typography>

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column" gap={0.5} justifyContent="center">
          <StyledSettingsButton>Chat and Meet</StyledSettingsButton>
          <StyledSettingsButton>Customize</StyledSettingsButton>
        </Stack>

        <Image
          src="/settings-apps-in-gmail.png"
          alt="apps-in-gmail"
          width={72}
          height={50}
        />
      </Stack>
    </Stack>
  );
};

export default AppsInGmail;
