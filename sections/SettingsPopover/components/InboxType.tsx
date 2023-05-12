import { ChangeEvent, useState } from "react";
import Image from "next/image";

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { StyledSettingsButton } from "../SettingsPopover";

const InboxType = () => {
  const [radio, setRadio] = useState("default");

  const radioClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  return (
    <Stack px={2} py={1} gap={1}>
      <Typography sx={{ fontSize: "12px" }}>Inbox Type</Typography>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={radio}
        onChange={radioClickHandler}
        defaultValue="default"
      >
        <Stack direction="column" gap={1}>
          {inboxTypeItems.map((items) => (
            <Stack
              key={items.value}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack>
                <FormControlLabel
                  value={items.value}
                  control={items.control}
                  label={items.label}
                  disableTypography
                  sx={{
                    fontSize: "13px",
                    wordSpacing: items.customiseLabel ? "1px" : "unset",
                  }}
                />
                {items.customiseLabel && (
                  <StyledSettingsButton
                    style={{ color: "blue", marginLeft: "28px" }}
                  >
                    {" "}
                    {items.customiseLabel}
                  </StyledSettingsButton>
                )}
              </Stack>
              <Image src={items.src} alt={items.alt} width={72} height={55} />
            </Stack>
          ))}
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default InboxType;

const inboxTypeItems = [
  {
    value: "default",
    label: "Default",
    customiseLabel: "Customise",
    control: <Radio size="small" />,
    src: "/settings-inbox-type-default.png",
    alt: "inbox-type-default-customize",
  },
  {
    value: "important first",
    label: "Important First",
    control: <Radio size="small" />,
    src: "/settings-inbox-type-important.png",
    alt: "inbox-type-important-first",
  },
  {
    value: "unread first",
    label: "Unread First",
    control: <Radio size="small" />,
    src: "/settings-inbox-type-unread.png",
    alt: "inbox-type-unread-first",
  },
  {
    value: "starred first",
    label: "Starred First",
    control: <Radio size="small" />,
    src: "/settings-inbox-type-starred.png",
    alt: "inbox-type-starred-first",
  },
  {
    value: "priority inbox",
    label: "Priority Inbox",
    customiseLabel: "Customise",
    control: <Radio size="small" />,
    src: "/settings-inbox-type-priority-inbox.png",
    alt: "inbox-type-priority-inbox",
  },
  {
    value: "multiple inboxes",
    label: "Multiple Inboxes",
    customiseLabel: "Customise",
    control: <Radio size="small" />,
    src: "/settings-inbox-type-multiple-inboxes.png",
    alt: "inbox-type-multiple-inboxes",
  },
];
