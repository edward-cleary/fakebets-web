import React, { useState } from "react";
import { AppShell, Navbar, Header } from "@mantine/core";
import FakeBetsLogo from "./FakeBetsLogo";
import Balance from "./Balance";
import { Burger } from "@mantine/core";
import {
  MediaQuery,
  withNormalizeCSS,
  withGlobalStyles,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { NavbarSimple } from "./NavbarSimple";

const Layout = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          navbar={
            <NavbarSimple
              opened={opened}
              handleClick={() => setOpened(false)}
            ></NavbarSimple>
          }
          header={
            <Header
              height={60}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              <FakeBetsLogo size="25" />
              <Balance balance="$100.00" />
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  title={title}
                />
              </MediaQuery>
            </Header>
          }
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Layout;
