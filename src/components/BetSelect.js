import React, { useState } from "react";
import {
  UnstyledButton,
  Checkbox,
  Text,
  Image,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme, { checked }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `1px solid ${
      checked
        ? theme.fn.variant({ variant: "outline", color: theme.primaryColor })
            .border
        : theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background
      : theme.colorScheme === "dark"
      ? theme.colors.dark[8]
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

function ImageCheckbox({ card, fighter }) {
  const [value, handleChange] = useState(false);

  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      onClick={() => handleChange(!value)}
      className={classes.button}
    >
      <Image src={fighter.image} alt={fighter.name} width={40} />

      <div className={classes.body}>
        <Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
          {fighter.name}
        </Text>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {card.event_name}
        </Text>
      </div>

      <Checkbox
        checked={value}
        tabIndex={-1}
        styles={{ input: { cursor: "pointer" } }}
      />
    </UnstyledButton>
  );
}

function BetSelect({ card, fight }) {
  return (
    <>
      <ImageCheckbox card={card} fighter={fight.home} />
      <ImageCheckbox card={card} fighter={fight.away} />
    </>
  );
}

export default BetSelect;
