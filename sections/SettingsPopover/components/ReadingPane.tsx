import { ChangeEvent, useState } from "react";
import Image from "next/image";

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

const ReadingPane = () => {
  const [radio, setRadio] = useState("default");

  const radioClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  return (
    <Stack px={2} py={1} gap={1}>
      <Typography sx={{ fontSize: "12px" }}>Reading Pane</Typography>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={radio}
        onChange={radioClickHandler}
        defaultValue="default"
      >
        <Stack direction="column" gap={1}>
          {readingPaneItems.map((items) => (
            <Stack
              key={items.value}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                value={items.value}
                control={items.control}
                label={items.label}
                disableTypography
                sx={{ fontSize: "13px" }}
              />
              <Image src={items.src} alt={items.alt} width={72} height={50} />
            </Stack>
          ))}
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default ReadingPane;

const readingPaneItems = [
  {
    value: "no split",
    label: "No split",
    control: <Radio size="small" />,
    src: "/settings-no-split.png",
    alt: "no-split",
  },
  {
    value: "right of inbox",
    label: "Right of inbox",
    control: <Radio size="small" />,
    src: "/settings-right-of-inbox.png",
    alt: "right-of-inbox",
  },
  {
    value: "below inbox",
    label: "Below inbox",
    control: <Radio size="small" />,
    src: "/settings-below-inbox.png",
    alt: "below-inbox",
  },
];
