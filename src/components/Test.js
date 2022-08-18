import React, { useState } from "react";
import { Button, Collapse, Stack } from "@mantine/core";

function Test() {
  const [opened, setOpened] = useState(false);

  return (
    <Stack sx={{ border: "1px solid black" }}>
      <Button onClick={() => setOpened((o) => !o)}>Toggle content</Button>

      <Collapse in={opened} transitionDuration={1000}>
        <h1>Test </h1>
        <p>
          This is just a test. This is just a test. This is just a test. This is
          just a test. This is just a test. This is just a test. This is just a
          test. This is just a test. This is just a test. This is just a test.
          This is just a test. This is just a test. This is just a test.{" "}
        </p>
      </Collapse>
    </Stack>
  );
}

export default Test;
