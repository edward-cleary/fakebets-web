import React from "react";
import FightCardList from "./FightCardList";
import { Stack, createStyles, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    wrapper: {
      border: `1px solid`,
      borderColor: theme.colorScheme === "dark" ? "#5C5F66" : "black",
      borderRadius: "15px",
      width: "100%",
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
        <FightCardList card={card} />
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
