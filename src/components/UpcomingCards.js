import React from "react";
import FightCardList from "./FightCardList";
import { Stack, Group, createStyles, Title, Text } from "@mantine/core";
import { ClassNames } from "@emotion/react";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    wrapper: {
      border: `1px solid ${theme.colors.gray[2]}`,
      borderRadius: "15px",
      maxWidth: "400px",
      listStyle: "none",
      position: "relative",
      cursor: "pointer",
      position: "relative",
    },
    event_title: {
      letterSpacing: "2px",
    },
  };
});

function UpcomingCards(props) {
  const { classes, cx } = useStyles();

  const upcomingcards = props.cards.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  function Card({ card }) {
    return (
      <Stack spacing="0" className={classes.wrapper}>
        <Stack py={20} spacing="0" align="center">
          <Title mb={4} className={classes.event_title} order={3}>
            {card.event_name}
          </Title>
          <Text>Sat, Aug 20, 8:00PM</Text>
        </Stack>
        <FightCardList fights={card.fights} />
      </Stack>
    );
  }

  return (
    <Stack justify="flex-start" align="center">
      <Title order={3} my={20}>
        Upcoming Cards
      </Title>
      <Stack align="center" sx={{ width: "100%" }}>
        {upcomingcards}
      </Stack>
    </Stack>
  );
}

export default UpcomingCards;
