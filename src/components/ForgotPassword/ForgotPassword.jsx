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
  forgotPasswordButton: {
    backgroundColor: "#90adba",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  forgotPasswordBox: {
    backgroundColor: "#E4ECEE",
    width: "70%",
    margin: "auto",
    borderRadius: "10px",
    paddingBottom: "25px",
  },
  forgotPasswordSection: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    marginTop: "50px",
    marginBottom: "120px",
  },
  forgotPasswordHeading: {
    fontSize: "22px",
    fontWeight: "600",
    paddingTop: "30px",
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
  forgotPasswordInputs: {
    marginTop: "30px",
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
  forgotPasswordContents: {
    fontSize: "20px",
    paddingTop: "20px",
  },
}));

//component
export default function ForgotPassword() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 176 }}>
        <Box className={classes.forgotPasswordSection}>
          <Box className={classes.forgotPasswordBox}>
            <Box className={classes.textStyling}>
              <Typography
                variant="body1"
                className={classes.forgotPasswordHeading}
              >
                FORGOT YOUR PASSWORD?
              </Typography>
              <Typography
                variant="body1"
                className={classes.forgotPasswordContents}
              >
                worry, we can help you. Give us the email address you use to log
                TogetherVideo and we’ll send you instructions for resetting your
                password
              </Typography>
            </Box>
            <Box className={classes.InputFieldsStyle}>
              <TextField
                className={classes.forgotPasswordInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email"
                type="text"
              />

              <Box sx={{ marginTop: "50px" }}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.forgotPasswordButton}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
