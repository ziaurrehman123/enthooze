//pacakge import
import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

//styling
const useStyles = makeStyles((theme) => ({
    resetPasswordButton: {
    backgroundColor: "#90adba",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  resetPasswordBox: {
    backgroundColor: "#E4ECEE",
    width: "70%",
    margin: "auto",
    borderRadius: "10px",
  },
  resetPasswordSection: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    marginTop: "50px",
    marginBottom: "120px",
  },
  resetPasswordHeading: {
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
  resetPasswordInputs: {
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

  resetPasswordFooter: {
    display: "flex",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
  resetPasswordContent:{
    fontSize:"20px",
    paddingTop:"20px",
    paddingBottom:"20px",
  },
}));

//component
export default function ResetPassword() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 176 }}>
        <Box className={classes.resetPasswordSection}>
          <Box className={classes.resetPasswordBox}>
            <Box className={classes.textStyling}>
              <Typography
                variant="body1"
                className={classes.resetPasswordHeading}
              >
                RESET YOUR PASSWORD
              </Typography>
              <Typography
                variant="body1"
                className={classes.resetPasswordContent}
              >
                Password must be 8 characters, use upper/lower and include a
                special character or number.
              </Typography>
              
            </Box>
            <Box className={classes.InputFieldsStyle}>
              <TextField
                className={classes.resetPasswordInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email"
                type="text"
              />
              <TextField
                className={classes.resetPasswordInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Password"
                type="password"
              />
              <TextField
                className={classes.resetPasswordInputs}
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
                  className={classes.resetPasswordButton}
                >
                  Submit
                </Button>
              </Box>
              <Box className={classes.resetPasswordFooter}>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
               
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
