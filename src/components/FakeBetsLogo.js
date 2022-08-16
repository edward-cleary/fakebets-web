import React from "react";
import { createStyles } from "@mantine/core";
import { CrumpledPaperIcon } from "@radix-ui/react-icons";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    paddingLeft: "10px",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
}));

const FakeBetsLogo = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <CrumpledPaperIcon className={classes.icon} />
      <div className={classes.text}>Fake Bets</div>
    </div>
  );
};

export default FakeBetsLogo;
