import React, { useState, useEffect } from "react";
import { TextInput, createStyles } from "@mantine/core";

const useStyles = createStyles((theme, { floating }) => ({
  root: {
    position: "relative",
  },

  label: {
    position: "absolute",
    zIndex: 2,
    top: 7,
    left: theme.spacing.sm,
    pointerEvents: "none",
    color: floating
      ? theme.colorScheme === "dark"
        ? theme.white
        : theme.black
      : theme.colorScheme === "dark"
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: "transform 150ms ease, color 150ms ease, font-size 150ms ease",
    transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : "none",
    fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: "opacity 150ms ease",
    opacity: floating ? 1 : 0,
  },

  input: {
    "&::placeholder": {
      transition: "color 150ms ease",
      color: !floating ? "transparent" : undefined,
    },
  },
}));

function calculatePayout(bet, odds) {
  if (odds < 0) {
    return formatMoney(bet / (Math.abs(odds) / 100));
  } else if (odds > 0) {
    return formatMoney(bet * (Math.abs(odds) / 100));
  }
}

function formatMoney(number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(number);
}

function PlaceBetInput({ odds }) {
  const [focused, setFocused] = useState(false);
  const [bet, setBet] = useState("");
  const [payout, setPayout] = useState("");
  const { classes } = useStyles({
    floating: bet.trim().length !== 0 || focused,
  });

  useEffect(() => {
    setPayout(calculatePayout(bet, odds));
  }, [bet, odds]);

  return (
    <TextInput
      label={`Payout: ${payout}`}
      placeholder="Bet amount"
      classNames={classes}
      value={bet}
      onChange={(event) => setBet(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
    />
  );
}

export default PlaceBetInput;
