import React, { useState, useEffect, useRef } from "react";
import { createStyles, Box, Stack, Group, Text, Radio } from "@mantine/core";
import PlaceBetInput from "./PlaceBetInput";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    width: "100%",
    maxWidth: "310px",
    margin: "0 auto",
    position: "relative",
    padding: "30px",
  },
  input: {
    ref: getRef("input"),
    opacity: "0",
  },
  label: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: `2px solid ${theme.colors.gray[7]}`,
    width: "100%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    [`.${getRef("input")}:checked + &`]: {
      border: "2px solid green",
    },
  },
  labelgroup: {
    width: "100%",
  },
  inputwrapper: {
    width: "80%",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "15px",
  },
}));

function BetSelect({ fighter, radioValue, handleRadioChange }) {
  const { classes, cx } = useStyles();

  return (
    <>
      <input
        type="radio"
        id={fighter.name}
        value={fighter.name}
        name="betselect"
        className={classes.input}
        checked={radioValue === fighter.name}
        onChange={handleRadioChange}
      ></input>
      <label className={classes.label} htmlFor={fighter.name}>
        <Group className={classes.labelgroup} position="apart">
          <Text>{fighter.name}</Text>
          <Text>{fighter.odds}</Text>
        </Group>
      </label>
    </>
  );
}

function BetSelectList({ card, fight }) {
  const [radioValue, setRadioValue] = useState("");

  const { classes, cx } = useStyles();

  const handleRadioChange = (changeEvent) => {
    setRadioValue(changeEvent.target.value);
  };

  return (
    <Stack>
      <form>
        <Stack>
          <Box className={classes.wrapper}>
            <BetSelect
              fighter={fight.home}
              handleRadioChange={handleRadioChange}
              radioValue={radioValue}
            />
          </Box>
          <Box className={classes.wrapper}>
            <BetSelect
              fighter={fight.away}
              handleRadioChange={handleRadioChange}
              radioValue={radioValue}
            />
          </Box>
        </Stack>
        <Box className={classes.inputwrapper}>
          <PlaceBetInput
            odds={
              radioValue === fight.home.name ? fight.home.odds : fight.away.odds
            }
          />
        </Box>
      </form>
    </Stack>
  );
}

export default BetSelectList;
