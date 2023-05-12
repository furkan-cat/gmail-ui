import { IconButton, Stack, Typography } from "@mui/material";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const EmailThreading = () => {
  return (
    <Stack px={2} py={1} gap={1}>
      <Typography sx={{ fontSize: "12px" }}>Email Threading</Typography>

      <Stack direction="row" alignItems="center" gap={1}>
        <IconButton size="small">
          <DomainVerificationIcon sx={{ width: "20px", color: "blue" }} />
        </IconButton>

        <Typography sx={{ fontSize: "13px" }}>Conversation view</Typography>

        <IconButton size="small">
          <HelpOutlineIcon sx={{ width: "20px" }} />
        </IconButton>
      </Stack>

    </Stack>
  );
};

export default EmailThreading;
