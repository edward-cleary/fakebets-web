import React from "react";
import { useState } from "react";
import { createStyles, Navbar } from "@mantine/core";
import { IconLogout } from "@tabler/icons";
import { Link } from "gatsby";

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
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!props.opened}
      width={{ sm: 200 }}
      height="100vh"
      p="xs"
    >
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  );
}
