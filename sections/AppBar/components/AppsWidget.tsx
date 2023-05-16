import { FC, RefObject } from "react";
import { Box, Popover } from "@mui/material";

type AppsWidgetProps = {
  refCurrent: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  toggleFunction: () => void;
};

const AppsWidget: FC<AppsWidgetProps> = ({
  refCurrent,
  isOpen,
  toggleFunction,
}) => {
  return (
    <Popover
      open={isOpen}
      anchorEl={refCurrent.current}
      onClose={toggleFunction}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{
        "& > .MuiPopover-paper": {
          maxWidth: "300px",
          width: "100%",
          borderRadius: 2,
          paddingLeft: "24px",
        },
      }}
    >
      {pngSprites.map((png) => (
        <Box
          style={{
            width: "64px",
            height: "64px",
            display: "inline-block",
            backgroundImage: "url(/apps-widget.png) ",
            backgroundPosition: `0 ${png.backgroundPosition}`,
            backgroundSize: "64px 3376px",
          }}
        />
      ))}
    </Popover>
  );
};

export default AppsWidget;

const pngSprites = [
  {
    backgroundPosition: "-2070px",
  },
  {
    backgroundPosition: "-414px",
  },
  {
    backgroundPosition: "-1449px",
  },
  {
    backgroundPosition: "-2208px",
  },
  {
    backgroundPosition: "-276px",
  },
  {
    backgroundPosition: "-207px",
  },
  {
    backgroundPosition: "-690px",
  },
  {
    backgroundPosition: "-1863px",
  },
  {
    backgroundPosition: "-345px",
  },
  {
    backgroundPosition: "-1932px",
  },
  {
    backgroundPosition: "-828px",
  },
];
