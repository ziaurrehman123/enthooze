//pacakge import
import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  createAccountButton: {
    backgroundColor: "#90adba",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
    color: "white",
  },
  businessConnectionsBox: {
    backgroundColor: "#E4ECEE",
    width: "80%",
    margin: "auto",
    borderRadius: "10px",
  },
  businessConnectionsSection: {
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

  textStyling: {
    textAlign: "center",
  },
  InputFieldsStyle: {
    width: "90%",
    paddingBottom: "50px",
    margin: "auto",
  },
  businessConnectionInputs: {
    marginTop: "10px",
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
  businessConnectionsLabel: {
    fontSize: "16px",
    fontWeight: "600",
    paddingTop: "20px",
  },
  opportunity: {
    fontSize: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

//component
export default function BusinessConnection() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 146 }}>
        <Box className={classes.businessConnectionsSection}>
          <Box className={classes.businessConnectionsBox}>
            <Box className={classes.textStyling}>
              <Typography
                variant="body1"
                className={classes.createAccountHeading}
              >
                LET’S GET YOUR BUSINESS STARTED
              </Typography>
              <Box className={classes.createdAccount}></Box>
            </Box>
            <Box className={classes.InputFieldsStyle}>
              <Typography variant="body1" className={classes.opportunity}>
                A one-of-a-kind opportunity to make connections in your
                community. AND IT’SFREE!
              </Typography>
              <Typography
                variant="body1"
                className={classes.businessConnectionsLabel}
              >
                Enter Name of Business
              </Typography>
              <TextField
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email"
                type="text"
              />
              <Typography
                variant="body1"
                className={classes.businessConnectionsLabel}
              >
                Business Information
              </Typography>
              <TextField
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Address"
                type="text"
              />
              <TextField
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Address 2 or Venues Name"
                type="text"
              />
              <TextField
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="City"
                type="text"
              />
              <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    className={classes.businessConnectionInputs}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="State"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    className={classes.businessConnectionInputs}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Zip"
                    type="text"
                  />
                </Grid>
              </Grid>
              <TextField
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Country"
                type="text"
              />
              <Typography
                variant="body1"
                className={classes.businessConnectionsLabel}
              >
                Your Name and Title
              </Typography>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <TextField
                    className={classes.businessConnectionInputs}
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
                    className={classes.businessConnectionInputs}
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
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Title / Position"
                type="text"
              />
              <Typography
                variant="body1"
                className={classes.businessConnectionsLabel}
              >
                Contact Information
              </Typography>
              <TextField
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Phone"
                type="tel"
              />
              <TextField
                className={classes.businessConnectionInputs}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Email"
                type="email"
              />
              <Box sx={{ marginTop: "50px" }}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.createAccountButton}
                >
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
