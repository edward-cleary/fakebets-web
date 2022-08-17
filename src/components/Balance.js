import React from "react";
import { Text } from "@mantine/core";

function Balance({ balance }) {
  return (
    <Text size="xl" color="green" weight="700">
      {balance}
    </Text>
  );
}

export default Balance;
