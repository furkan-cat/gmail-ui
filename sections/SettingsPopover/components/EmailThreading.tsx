import { ChangeEvent } from "react";
import Image from "next/image";

import { IconButton, Stack, Typography } from "@mui/material";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const EmailThreading = () => {
  const radioClickHandler = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <Stack px={2} py={1} gap={1}>
      <Typography sx={{ fontSize: "12px" }}>Email Threading</Typography>
      <Stack direction="row" alignItems="center" gap={1}>
        <IconButton>
          <DomainVerificationIcon sx={{ width: "20px" }} />
        </IconButton>
        <Typography sx={{ fontSize: "13px" }}>Conversation view</Typography>{" "}
        <IconButton>
          <HelpOutlineIcon sx={{ width: "20px" }} />
        </IconButton>
      </Stack>

      <Stack direction="row" gap={1}>
        <IconButton>
          <DomainVerificationIcon sx={{ width: "20px" }} />
        </IconButton>
        <Typography sx={{ fontSize: "12px" }}>Conversation view</Typography>
      </Stack>
    </Stack>
  );
};

export default EmailThreading;
