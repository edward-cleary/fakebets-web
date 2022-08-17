import React from "react";
import {
  Stack,
  List,
  Group,
  Title,
  Text,
  Image,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    listItem: {
      borderTop: `1px solid`,
      borderColor: theme.colorScheme === "dark" ? "#5C5F66" : "black",
    },
  };
});

function FightCardList(props) {
  const { classes, cx } = useStyles();

  const fightcardlist = props.fights.map((fight) => {
    return <Fight key={fight.id} fight={fight} />;
  });

  function Fight({ fight }) {
    return (
      <List.Item py={8} className={classes.listItem}>
        <Group p={15} position="apart" sx={{ minWidth: "100%" }}>
          <Stack spacing="0" align="center" sx={{ width: "130px" }}>
            <Image
              radius="md"
              height="60px"
              width="60px"
              src={fight.home.image}
              alt={fight.home.name}
              mb={15}
            />
            <Title order={6}>{fight.home.name}</Title>
            <Text size="sm">{fight.home.record}</Text>
          </Stack>
          <Text size="xl" weight="500">
            Vs.
          </Text>
          <Stack spacing="0" align="center" sx={{ width: "130px" }}>
            <Image
              radius="md"
              height="60px"
              width="60px"
              src={fight.away.image}
              alt={fight.away.name}
              mb={15}
            />
            <Title order={6}>{fight.away.name}</Title>
            <Text size="sm">{fight.away.record}</Text>
          </Stack>
        </Group>
      </List.Item>
    );
  }

  return (
    <>
      <List listStyleType="none">{fightcardlist}</List>
    </>
  );
}

export default FightCardList;
