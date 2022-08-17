import React from "react";
import {
  createStyles,
  Stack,
  GroupedTransition,
  Button,
  Group,
  Box,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    wrapper: {
      border: `1px solid ${theme.colors.gray[2]}`,
      borderRadius: "15px",
      maxWidth: "400px",
      padding: "13px",
      listStyle: "none",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
    },
  };
});

function MyBets(props) {
  const myBets = props.bets.map((bet) => {
    return <MyBet key={bet.id} bet={bet} />;
  });

  const blur = {
    in: { backgroundColor: "rgba(0,0,0,0.45)" },
    out: { backgroundColor: "rgba(0,0,0,0.0)" },
    transitionProperty: "background-color",
  };

  function MyBet({ bet }) {
    const [opened, setOpened] = useState(false);
    const clickOutsideRef = useClickOutside(() => setOpened(false));

    const { classes, cx } = useStyles();

    return (
      <Group
        position="apart"
        className={classes.wrapper}
        onClick={() => setOpened(true)}
        ref={clickOutsideRef}
      >
        <Stack spacing="xl">
          <Box>
            <Text>{`${bet.choice.split(" ").pop()}`}</Text>
            {` vs. ${bet.opponent.split(" ").pop()}`}
          </Box>
          <Text>{`${bet.event_name} | ${bet.event_date.split(",")[0]}`}</Text>
        </Stack>
        <Stack spacing="xl">
          <Text
            style={{ color: "green", fontWeight: 700 }}
          >{`To Win: ${bet.to_win}`}</Text>
          <Text style={{ color: "darkred" }}>{`Wager: ${bet.wager}`}</Text>
        </Stack>
        <GroupedTransition
          mounted={opened}
          transitions={{
            blurBet: {
              duration: 175,
              transition: blur,
              timingFunction: "ease",
            },
            slideBtnLeft: {
              duration: 175,
              transition: "slide-left",
              timingFunction: "ease",
            },
            slideBtnRight: {
              duration: 175,
              transition: "slide-right",
              timingFunction: "ease",
            },
          }}
        >
          {(styles) => (
            <Group
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <Button
                style={{
                  ...styles.slideBtnRight,
                  position: "absolute",
                  left: 30,
                  height: 40,
                  backgroundColor: "blue",
                  zIndex: 5,
                }}
              >
                Edit
              </Button>
              <Button
                style={{
                  ...styles.slideBtnLeft,
                  position: "absolute",
                  right: 30,
                  height: 40,
                  backgroundColor: "red",
                  zIndex: 5,
                }}
              >
                Cancel
              </Button>
              <Box
                style={{
                  ...styles.blurBet,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              ></Box>
            </Group>
          )}
        </GroupedTransition>
      </Group>
    );
  }

  return (
    <Stack align="center" justify="start">
      <Title>My Bets</Title>
      <Stack spacing="xl">{myBets}</Stack>
    </Stack>
  );
}

export default MyBets;
