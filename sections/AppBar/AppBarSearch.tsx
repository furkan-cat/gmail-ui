import { useRef, useState } from "react";

import {
  Box,
  IconButton,
  Popover,
  Typography,
  Input as MUInput,
  Stack,
  Button,
} from "@mui/material";
import { Input } from "@/components";

import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";


const AppBarSearch = () => {
  const wrapperRef = useRef(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <Box ref={wrapperRef}>
      <Input
        size="lg"
        placeholder="Search in mail"
        accessoryLeft={
          <IconButton color="inherit" aria-label="Search">
            <SearchIcon />
          </IconButton>
        }
        accessoryRight={
          <IconButton
            color="inherit"
            aria-label="Filter"
            onClick={handleToggleFilter}
          >
            <TuneIcon />
          </IconButton>
        }
      />
      <Popover
        open={showFilter}
        anchorEl={wrapperRef.current}
        onClose={handleToggleFilter}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& > .MuiPopover-paper": {
            maxWidth: "720px",
            width: "100%",
            borderRadius: 0,
            padding: "24px",
          },
        }}
      >
        <form>
          <Stack gap={2}>
            <Stack direction="row" alignItems="center">
              <Typography fontSize={14} color="GrayText" minWidth={88}>
                From
              </Typography>
              <MUInput fullWidth size="small" />
            </Stack>

            <Stack direction="row" alignItems="center">
              <Typography fontSize={14} color="GrayText" minWidth={88}>
                To
              </Typography>
              <MUInput fullWidth size="small" />
            </Stack>
          </Stack>
        </form>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          mt="20px"
          gap="10px"
        >
          <Button disabled>Clear Filter</Button>
          <Button variant="contained">Search</Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default AppBarSearch;
