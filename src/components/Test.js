import React, { useState } from "react";
import { Button, Collapse, Radio, Stack } from "@mantine/core";

function Test() {
  const [value, setValue] = useState("test");

  return (
    <Radio.Group value={value} onChange={setValue} required>
      <Radio value="test" label="Test" />
      <Radio value="test2" label="Test2" />
    </Radio.Group>
  );
}

export default Test;
