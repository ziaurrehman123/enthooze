import React from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";
import home1 from "../../assets/images/home1.png";
import home2 from "../../assets/images/home2.png";
import home3 from "../../assets/images/home3.png";
import home4 from "../../assets/images/home4.png";
const useStyles = makeStyles(()=>({
  howItWorksHeading: {
    fontSize: "20px",
    fontWeight: "600",
    marginLeft: 30,
  },
  workingStep1: {
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "center",
  },
  step1Content: {
    textAlign: "center",
  },
  howItWorksSection: {
    paddingTop: 30,
    paddingBottom: 30,
    width: "80%",
    margin: "auto",
  },
  step1Image: {
    textAlign: "center",
  },
}));
export default function HowItWorks() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{ backgroundColor: "#e6ebed", paddingTop: 20, paddingBottom: 20 }}
      >
        <Typography className={classes.howItWorksHeading}>
          How It Works
        </Typography>
        <Box className={classes.howItWorksSection}>
          <Grid container>
            <Grid item sm={12} xs={12} md={3} lg={3} xl={3}>
              <Box className={classes.step1Image}>
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 100,
                    paddingBottom: 10,
                  }}
                  alt="Your logo."
                  src={home1}
                />
              </Box>
              <Box className={classes.workingStep1}>
                <Typography variant="body">STEP 1: LISTING</Typography>
              </Box>
              <Box className={classes.step1Content}>
                <Typography variant="body">
                  Distillers and vineyards from around the world list coming
                  batches
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} lg={3} xl={3}>
              <Box className={classes.step1Image}>
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 100,
                    paddingBottom: 10,
                  }}
                  alt="Your logo."
                  src={home2}
                />
              </Box>
              <Box className={classes.workingStep1}>
                <Typography variant="body">STEP 2: LISTING</Typography>
              </Box>
              <Box className={classes.step1Content}>
                <Typography variant="body">
                  Distillers and vineyards from around the world list coming
                  batches
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} lg={3} xl={3}>
              <Box className={classes.step1Image}>
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 100,
                    paddingBottom: 10,
                  }}
                  alt="Your logo."
                  src={home3}
                />
              </Box>
              <Box className={classes.workingStep1}>
                <Typography variant="body">STEP 3: LISTING</Typography>
              </Box>
              <Box className={classes.step1Content}>
                <Typography variant="body">
                  Distillers and vineyards from around the world list coming
                  batches
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} xs={12} md={3} lg={3} xl={3}>
              <Box className={classes.step1Image}>
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 100,
                    paddingBottom: 10,
                  }}
                  alt="Your logo."
                  src={home4}
                />
              </Box>
              <Box className={classes.workingStep1}>
                <Typography variant="body">STEP 4: LISTING</Typography>
              </Box>
              <Box className={classes.step1Content}>
                <Typography variant="body">
                  Distillers and vineyards from around the world list coming
                  batches
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
