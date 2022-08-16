import React from "react";
import { useState } from "react";
import { Transition, Paper, Button, Group } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

function TestComponent() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <div
      style={{
        maxWidth: 200,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Group>
        <div>
          test 2<div>test</div>
          <Transition
            mounted={opened}
            transition="slide-left"
            duration={200}
            timingFunction="ease"
          >
            {(styles) => (
              <Paper
                shadow="md"
                style={{
                  ...styles,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 120,
                }}
                ref={clickOutsideRef}
              >
                Dropdown
              </Paper>
            )}
          </Transition>
        </div>
      </Group>
    </div>
  );
}

export default TestComponent;
