import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const QuickSettings = () => {
  return (
    <Stack px={2} py={1} gap={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontSize={"13px"}>Quick Settings</Typography>
        <IconButton>
          <CloseIcon sx={{ width: "20px" }} />
        </IconButton>
      </Stack>

      <Button
        fullWidth
        size="small"
        variant="outlined"
        sx={{
          borderRadius: 3,
          textTransform: "unset",
          fontSize: "12px",
        }}
      >
        See All Settings
      </Button>
    </Stack>
  );
};

export default QuickSettings;
