import { Box, Grid, makeStyles } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cont: {
    color: "white",
  },
  aboutLink: {
    textDecoration: "none",
    color: "white",
    borderRight: "2px solid white",
    paddingRight: 10,
    paddingLeft: 0,
  },
  contactLink: {
    textDecoration: "none",
    color: "white",
    borderRight: "2px solid white",
    paddingRight: 10,
    paddingLeft: 10,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  termsLink: {
    textDecoration: "none",
    color: "white",
    borderRight: "2px solid white",
    paddingRight: 10,
    paddingLeft: 10,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  footerNavLinks: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
  pressLink: {
    textDecoration: "none",
    color: "white",
    borderRight: "none",
    paddingRight: 10,
    paddingLeft: 10,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  footertext: {
    color: "white",
    paddingLeft: 0,
    paddingTop: 10,
  },
  facebookIconBox: {
    backgroundColor: "#466AAC",
    padding: 5,
    borderRadius: "50px",
    width: 50,
    height: 50,
    marginLeft: 30,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 60,
    },
  },
  twitterIconBox: {
    backgroundColor: "#00B6F1",
    padding: 5,
    borderRadius: "50px",
    width: 50,
    height: 50,
    marginLeft: 20,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 30,
    },
    
  },
  instaIconBox: {
    backgroundColor: "#8582EF",
    padding: 5,
    borderRadius: "50px",
    width: 50,
    height: 50,
    marginLeft: 20,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 30,
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          backgroundColor: "#323333",
          paddingBottom: 20,
          paddingTop: 20,
        }}
      >
        <Box sx={{ width: "85%", margin: "auto" }}>
          <Grid container>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Box className={classes.footerNavLinks}>
                <Box>
                  <Link to="/" className={classes.aboutLink}>
                    ABOUT US
                  </Link>
                </Box>
                <Box>
                  <Link to="/" className={classes.contactLink}>
                    CONTACT US
                  </Link>
                </Box>
                <Box>
                  <Link to="/" className={classes.termsLink}>
                    TERMS & PRIVACY
                  </Link>
                </Box>
                <Box>
                  <Link to="/" className={classes.pressLink}>
                    PRESS
                  </Link>
                </Box>
              </Box>
              <Box>
                <Typography className={classes.footertext} variant="body2">
                  © 2021 Diversify Gamed, Inc. All Rights Reserved
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} lg={3} xl={3}>
              <Box sx={{ marginTop: 20 }}></Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} lg={3} xl={3}>
              <Box sx={{ display: "flex" }}>
                <Box className={classes.facebookIconBox}>
                  <FacebookIcon
                    sx={{ marginTop: "8px", marginLeft: "8px", color: "white" }}
                  />
                </Box>
                <Box className={classes.twitterIconBox}>
                  <TwitterIcon
                    sx={{ marginTop: "8px", marginLeft: "8px", color: "white" }}
                  />
                </Box>
                <Box className={classes.instaIconBox}>
                  <InstagramIcon
                    sx={{ marginTop: "8px", marginLeft: "8px", color: "white" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Footer;
