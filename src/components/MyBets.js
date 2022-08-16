import React from "react";
import { createStyles, Group, Stack, Transition, Button } from "@mantine/core";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    wrapper: {
      border: `1px solid ${theme.colors.gray[2]}`,
      borderRadius: "15px",
      maxWidth: "400px",
      padding: "10px",
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

  function MyBet({ bet }) {
    const [opened, setOpened] = useState(false);
    const clickOutsideRef = useClickOutside(() => setOpened(false));

    const { classes, cx } = useStyles();

    return (
      <li className={classes.wrapper} onClick={() => setOpened(true)}>
        <Group position="apart">
          <Stack spacing="xl">
            <div>
              <span>{`${bet.choice.split(" ").pop()}`}</span>
              {` vs. ${bet.opponent.split(" ").pop()}`}
            </div>
            <div>{`${bet.event_name} | ${bet.event_date}`}</div>
          </Stack>
          <Stack spacing="xl">
            <div>{`To Win: ${bet.to_win}`}</div>
            <div>{`To Lose: ${bet.wager}`}</div>
          </Stack>
          <Transition
            mounted={opened}
            transition="slide-left"
            duration={175}
            timingFunction="ease"
          >
            {(styles) => (
              <Button
                style={{
                  ...styles,
                  position: "absolute",
                  right: 30,
                  height: 40,
                  backgroundColor: "red",
                }}
                ref={clickOutsideRef}
              >
                Cancel Bet
              </Button>
            )}
          </Transition>
          <Transition
            mounted={opened}
            transition="slide-right"
            duration={175}
            timingFunction="ease"
          >
            {(styles) => (
              <Button
                style={{
                  ...styles,
                  position: "absolute",
                  left: 30,
                  height: 40,
                  backgroundColor: "blue",
                }}
                ref={clickOutsideRef}
              >
                Edit Bet
              </Button>
            )}
          </Transition>
        </Group>
      </li>
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
