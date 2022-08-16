import React from "react";
import {
  createStyles,
  Stack,
  GroupedTransition,
  Button,
  Group,
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
          <div>
            <span>{`${bet.choice.split(" ").pop()}`}</span>
            {` vs. ${bet.opponent.split(" ").pop()}`}
          </div>
          <div>{`${bet.event_name} | ${bet.event_date.split(",")[0]}`}</div>
        </Stack>
        <Stack spacing="xl">
          <div
            style={{ color: "green", fontWeight: 700 }}
          >{`To Win: ${bet.to_win}`}</div>
          <div style={{ color: "darkred" }}>{`Wager: ${bet.wager}`}</div>
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
              <div
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
              ></div>
            </Group>
          )}
        </GroupedTransition>
      </Group>
    );
  }

  return (
    <section>
      <h3>My Bets</h3>
      <Stack spacing="xl">{myBets}</Stack>
    </section>
  );
}

export default MyBets;
