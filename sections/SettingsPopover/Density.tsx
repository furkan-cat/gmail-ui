import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

const Density = () => {
  const [radio, setRadio] = useState("default");

  const radioClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  const densityItems = [
    {
      value: "default",
      label: "Default",
      control: <Radio size="small" />,
      src: "/settings-density-default.png",
      alt: "density-default",
    },
    {
      value: "comfortable",
      label: "Comfortable",
      control: <Radio size="small" />,
      src: "/settings-density-comfortable.png",
      alt: "density-comfortable",
    },
    {
      value: "compact",
      label: "Compact",
      control: <Radio size="small" />,
      src: "/settings-density-compact.png",
      alt: "density-compact",
    },
  ];
  return (
    <Stack px={2} py={1} gap={2}>
      <Typography sx={{ fontSize: "12px" }}>Density</Typography>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={radio}
        onChange={radioClickHandler}
        defaultValue="default"
      >
        <Stack direction="column" gap={1}>
          {densityItems.map((items) => (
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
              <Image src={items.src} alt={items.alt} width={72} height={32} />
            </Stack>
          ))}
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default Density;
