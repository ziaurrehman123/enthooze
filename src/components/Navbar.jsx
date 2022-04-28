import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Box,
} from "@material-ui/core";
import Logo from "../assets/images/logo.png";
import User from "../assets/images/user.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "EXPLORE",
    href: "/explore",
  },
  {
    label: "STATS",
    href: "/stats",
  },
  {
    label: "PARTNER",
    href: "/partners",
  },
  {
    label: "LEARN",
    href: "/",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    paddingRight: "79px",
    paddingLeft: "50px",
    boxShadow: "none",
    paddingTop: "20px",
    borderBottom:"2px solid #dfdcdc",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
      
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "20px",
    color: "black",
  },
  toolbar: {
    display: "flex",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={6}>
            <div>{getMenuButtons()}</div>
          </Grid>
          <Grid item xs={2}>
            <div style={{ display: "flex" }}>
            <Link href="/search">
              <Box
                sx={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  backgroundColor: "black",
                  marginRight: 10,
                }}
              >
                <SearchIcon sx={{ fontSize: 50, color:"white" }} />
              </Box>
              </Link>
              <Link to="/">
                <Box
                  component="img"
                  sx={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    marginLeft: 20,
                  }}
                  alt="Your logo."
                  src={User}
                />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "black",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Link to="/">
      <Box
        component="img"
        sx={{
          height: 80,
          width: 200,
        }}
        alt="Your logo."
        src={Logo}
      />
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
