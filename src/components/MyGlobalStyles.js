import React from "react";
import { Global } from "@mantine/core";

function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": { boxSizing: "border-box" },
        fontSize: "50px",
        border: "10px solid black",
      })}
    />
  );
}

export default MyGlobalStyles;
