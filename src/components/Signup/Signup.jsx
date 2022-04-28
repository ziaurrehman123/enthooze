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
  },
  signUpBox: {
    backgroundColor: "#E4ECEE",
    width: "70%",
    margin: "auto",
    borderRadius: "10px",
  },
  signUpSection: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    marginTop: "50px",
    marginBottom: "60px",
  },
  createAccountHeading: {
    fontSize: "22px",
    fontWeight: "600",
    paddingTop: "20px",
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
  signupInputs: {
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
    marginLeft: "3px",
    marginRight: "3px",
    color: "black",
  },
  createdAccountFooter:{
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        display: "inline-block",
      },
  },
}));

//component
export default function SignUpSection() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 146 }}>
        <Box className={classes.signUpSection}>
          <Box className={classes.signUpBox}>
            <Box className={classes.textStyling}>
              <Typography
                variant="body1"
                className={classes.createAccountHeading}
              >
                CREATE YOUR PARTNER ACCOUNT
              </Typography>
              <Box className={classes.createdAccount}>
                <Typography variant="body1" className={classes.alreadyAccount}>
                  Already have an account?{" "}
                </Typography>
                <Link href="/login">Click Here!</Link>
              </Box>
              <Box className={classes.passwordProtected}>
                <Typography>
                  Password must be 8 characters, use upper/lower and include a
                  special character or number.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.InputFieldsStyle}>
              <TextField
                className={classes.signupInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email"
                type="text"
              />
              <TextField
                className={classes.signupInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Password"
                type="password"
              />
              <TextField
                className={classes.signupInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Re-type password"
                type="password"
              />
              <Box sx={{ marginTop: "50px" }}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.createAccountButton}
                >
                  CREATE ACOOUNT
                </Button>
              </Box>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Box className={classes.createdAccountFooter}>
                <Typography variant="body1" className={classes.alreadyAccount}>
                  By continuing you agree to the Ember
                </Typography>

                <Link href="/" className={classes.accountFooterLinks}>
                  Terms of use 
                </Link>
                <spna>and</spna>
                <Link href="/" className={classes.accountFooterLinks}>
                  {" "}
                  privacy policy.{" "}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
