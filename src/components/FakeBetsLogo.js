import React from "react";
import { createStyles, Box, Title } from "@mantine/core";
import { CrumpledPaperIcon } from "@radix-ui/react-icons";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    paddingLeft: "10px",
    fontSize: "25px",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
}));

const FakeBetsLogo = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <CrumpledPaperIcon className={classes.icon} />
      <Title className={classes.text} order={1}>
        Fake Bets
      </Title>
    </Box>
  );
};

export default FakeBetsLogo;
