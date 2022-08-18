import React from "react";
import { Title, Collapse } from "@mantine/core";

function PlaceBet(props) {
  return (
    <Collapse in={props.opened}>
      <Title>Show me the {props.fight.home.name}</Title>
    </Collapse>
  );
}

export default PlaceBet;
