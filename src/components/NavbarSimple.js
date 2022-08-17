import React from "react";
import { useState } from "react";
import { createStyles, Navbar, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons";
import { Link } from "gatsby";
import DarkModeSwitch from "./DarkModeSwitch";

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },

    nav: {
      borderColor: theme.colorScheme === "dark" ? "#2C2E33" : "black",
    },
  };
});

const data = [
  { link: "/", label: "My Bets" },
  { link: "/cards", label: "Upcoming Cards" },
];

export function NavbarSimple(props) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("My Bets");

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
        props.handleClick();
      }}
    >
      <Text>{item.label}</Text>
    </Link>
  ));

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!props.opened}
      width={{ sm: 200 }}
      p="xs"
      className={classes.nav}
    >
      <Navbar.Section grow>{links}</Navbar.Section>
      <Navbar.Section>
        <DarkModeSwitch />
      </Navbar.Section>
    </Navbar>
  );
}
