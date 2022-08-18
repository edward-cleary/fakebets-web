import React, { useState } from "react";
import {
  Stack,
  List,
  Group,
  Title,
  Text,
  Image,
  createStyles,
  Collapse,
  Box,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import BetSelect from "./BetSelect";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    listItem: {
      borderTop: `1px solid`,
      borderColor: theme.colorScheme === "dark" ? "#5C5F66" : "black",
      "&:hover": {
        backgroundColor: "rgba(92, 95, 102, 0.3)",
      },
    },
  };
});

function FightCardList({ card }) {
  const { classes, cx } = useStyles();

  const fightcardlist = card.fights.map((fight) => {
    return <Fight key={fight.id} fight={fight} card={card} />;
  });

  function Fight({ fight, card }) {
    const [opened, setOpened] = useState(false);
    const clickOutsideRef = useClickOutside(() => setOpened(false));

    return (
      <>
        <List.Item
          onClick={() => setOpened(true)}
          py={8}
          className={classes.listItem}
        >
          <Box ref={clickOutsideRef}>
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
              <Collapse
                in={opened}
                transitionDuration={300}
                transitionTimingFunction="ease-in"
              >
                <BetSelect fight={fight} card={card} />
              </Collapse>
            </Group>
          </Box>
        </List.Item>
      </>
    );
  }

  return (
    <>
      <List listStyleType="none">{fightcardlist}</List>
    </>
  );
}

export default FightCardList;
