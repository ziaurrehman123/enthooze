//pacakge import
import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
  Link,
  Grid,
} from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//styling
const useStyles = makeStyles((theme) => ({
    adminSignupButton: {
    backgroundColor: "#90adba",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  adminSignupBox: {
    backgroundColor: "#E4ECEE",
    width: "70%",
    margin: "auto",
    borderRadius: "10px",
  },
  adminSignupSection: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    marginTop: "50px",
    marginBottom: "120px",
  },
  adminSignupHeading: {
    fontSize: "22px",
    fontWeight: "600",
    paddingTop: "20px",
  },
  createdAccount: {
    display: "flex",
    justifyContent: "center",
  },
  
  textStyling: {
    textAlign: "center",
    width:"80%",
    margin:"auto",
  },
  InputFieldsStyle: {
    width: "90%",
    paddingBottom: "50px",
    margin: "auto",
  },
  adminSignupInputs: {
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
  adminSignupFooterLinks: {
    textDecoration: "underline",
    marginLeft: "5px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2px",
    },
    marginRight: "5px",
    marginTop: "0px",
    color: "black",
  },
  adminSignupFooter: {
    display: "flex",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
  adminSignupContent:{
    fontSize:"20px",
    paddingBottom:"20px",
    paddingTop:"20px",
  },
}));

//component
export default function AdminSignup() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 176 }}>
        <Box className={classes.adminSignupSection}>
          <Box className={classes.adminSignupBox}>
            <Box className={classes.textStyling}>
              <Typography
                variant="body1"
                className={classes.adminSignupHeading}
              >
                SIGN-UP TO BE AN EMBER ADMIN
              </Typography>
              <Typography
                variant="body1"
                className={classes.adminSignupContent}
              >
                After filling out this form, you’ll be able to access and help
                manage the Ember business page.
              </Typography>
              
            </Box>
            <Box className={classes.InputFieldsStyle}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    className={classes.adminSignupInputs}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="First"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    className={classes.adminSignupInputs}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Last"
                    type="text"
                  />
                </Grid>
              </Grid>
              <TextField
                className={classes.adminSignupInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Password"
                type="password"
              />
                <TextField
                className={classes.adminSignupInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Password"
                type="Re-enter password"
              />

              <Box sx={{ marginTop: "50px" }}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.adminSignupButton}
                >
                  SIGN-UP AND ACCEPT INVITE
                </Button>
              </Box>
              <Box className={classes.adminSignupFooter}>
                <Typography variant="body1" className={classes.alreadyAccount}>
                  By continuing you agree to the Ember
                </Typography>

                <Link href="/" className={classes.adminSignupFooterLinks}>
                  Terms of use 
                </Link>
                <spna>and</spna>
                <Link href="/" className={classes.adminSignupFooterLinks}>
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
