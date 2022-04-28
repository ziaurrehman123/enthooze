//pacakge import
import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  makeStyles,
  Link,
  Divider,
} from "@material-ui/core";


//styling
const useStyles = makeStyles((theme) => ({
    proceedDashboardButton: {
        backgroundColor: "#90adba",
        padding: "5px 50px 5px 50px",
        borderRadius: "25px",
        color: "white",
      },
  underReviewBox: {
    backgroundColor: "#E4ECEE",
    width: "90%",
    margin: "auto",
    borderRadius: "10px",
  },
  underReviewSection: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    marginTop: "50px",
    marginBottom: "120px",
  },
  underReviewHeading: {
    fontSize: "22px",
    fontWeight: "600",
    paddingTop: "20px",
  },

  textStyling: {
    textAlign: "center",
  },
  underReviewContent: {
    paddingTop: "20px",
  },
  submissionInfo: {
    fontSize: "28px",
    fontWeight: "500",
    paddingTop: "20px",
    paddingBottom:"15px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
      },
  },
  businessInfo:{
      paddingTop:"20px",
      paddingBottom:"20px"
  }
}));

//component
export default function UnderReview() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 176 }}>
        <Box className={classes.underReviewSection}>
          <Box className={classes.underReviewBox}>
            <Box sx={{ width: "80%", margin: "auto" }}>
              <Box className={classes.textStyling}>
                <Typography
                  variant="body1"
                  className={classes.underReviewHeading}
                >
                  YOUR SUBMISSION IS UNDER REVIEW.
                </Typography>
              </Box>
              <Typography
                variant="body1"
                className={classes.underReviewContent}
              >
                Enthooze verifies the authenticity of every partner submission.
                This process can take up to 72 hours. You can begin entering an
                offering immediately. The entries will be ready to publish once
                your account is approved.
              </Typography>
              <Typography variant="body1" className={classes.submissionInfo}>
                Submission Information
              </Typography>
              <Divider />
              <Box className={classes.businessInfo}>
              <Typography
                variant="body1"
                className={classes.businessContent}
              >
                Name of the Business
              </Typography>
              <Typography
                variant="body1"
                className={classes.businessContent}
              >
                7890 50 th Street West Minneapolis, MN 55419 United States
              </Typography>
              </Box>
              <Box className={classes.businessInfo}>
              <Typography
                variant="body1"
                className={classes.contactPersonInfo}
              >
                Contact: Jane Doe
              </Typography>
              <Typography
                variant="body1"
                className={classes.contactPersonInfo}
              >
                Email: qwee@fort.com
              </Typography>
              <Typography
                variant="body1"
                className={classes.contactPersonInfo}
              >
                Phone: 618-454-6790
              </Typography>
              </Box>
              <Divider sx={{marginBottom:"20px"}} />
              <Box sx={{ marginTop: "50px", paddingBottom:"50px" }}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.proceedDashboardButton}
                >
                  PROCEED TO DASHBOARD
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
