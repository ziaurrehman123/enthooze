//pacakge import
import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//styling
const useStyles = makeStyles((theme) => ({
  createAccountButton: {
    backgroundColor: "#90adba",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize:"8px",
    },
  },
  loginBox: {
    backgroundColor: "#E4ECEE",
    width: "70%",
    margin: "auto",
    borderRadius: "10px",
  },
  loginSection: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    marginTop: "50px",
    marginBottom: "120px",
  },
  loginAccountHeading: {
    fontSize: "22px",
    fontWeight: "600",
    paddingTop: "30px",
  },
  createdAccount: {
    display: "flex",
    justifyContent: "center",
  },
  passwordProtected: {
    width: "80%",
    margin: "auto",
    paddingTop: "20px",
  },
  textStyling: {
    textAlign: "center",
  },
  InputFieldsStyle: {
    width: "90%",
    paddingBottom: "50px",
    margin: "auto",
  },
  loginInputs: {
    marginTop: "20px",
    width: "100%",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    border: "1px solid grey",
    padding: "3px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
  accountFooterLinks: {
    textDecoration: "underline",
    marginLeft: "30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2px",
    },
    marginRight: "3px",
    marginTop: "7px",
    color: "black",
  },
  loginAccountFooter: {
    display: "flex",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
}));

//component
export default function Login() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 176 }}>
        <Box className={classes.loginSection}>
          <Box className={classes.loginBox}>
            <Box className={classes.textStyling}>
              <Typography
                variant="body1"
                className={classes.loginAccountHeading}
              >
                LOG INTO YOUR PARTNER ACCOUNT
              </Typography>
              <Box className={classes.createdAccount}>
                <Typography variant="body1" className={classes.alreadyAccount}>
                  Don’t have an account?
                </Typography>
                <Link href="/signup">Sign-up here!</Link>
              </Box>
            </Box>
            <Box className={classes.InputFieldsStyle}>
              <TextField
                className={classes.loginInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email"
                type="text"
              />
              <TextField
                className={classes.loginInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Password"
                type="password"
              />

              <Box sx={{ marginTop: "50px" }}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.createAccountButton}
                >
                  ADD YOUR FIRST ACTIVITY PROFILE
                </Button>
              </Box>
              <Box className={classes.loginAccountFooter}>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Link href="/" className={classes.accountFooterLinks}>
                  Lost Password help
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
