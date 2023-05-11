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
    <Box>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Typography fontSize={"13px"} px={2}>
          Quick Settings
        </Typography>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Box p={2}>
        <Button
          fullWidth
          size="small"
          sx={{
            borderRadius: 3,
            padding: "5px 15px",
            textTransform: "unset",
            fontSize: "12px",
          }}
        >
          See All Settings
        </Button>
      </Box>
      <Divider sx={{ width: "100%", padding: "unset" }} />
    </Box>
  );
};

export default QuickSettings;
