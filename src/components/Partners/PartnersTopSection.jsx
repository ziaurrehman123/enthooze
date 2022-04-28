//pacakge import
import React from "react";
import {
  Typography,
  Grid,
  Box,
  Button,
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

//user import
import PartnersHome from "../../assets/images/partners-home.png";
//styling
const useStyles = makeStyles((theme) => ({
  learnAboutPartnersButton: {
    backgroundColor: "#90adba",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
    color: "white",
    fontSize: "12px",
  },
  PartnersTopSectionHeading: {
    fontSize: "32px",
    fontWeight: "900",
    color: "white",
  },
  topSectionContent: {
    fontSize: "16px",
    lineHeight: 1,
  },
  headingBox: {
    marginTop: "200px",
  },
  cardClass: {
    margin: "30px auto",
    width: "90%",
    borderRadius: "50px",
  },
  PartnersTopSectionLeft: {
    marginBottom: 30,
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
}));

//component
export default function PartnersTopSection() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box sx={{ marginTop: 106 }}>
        <Box
          sx={{ backgroundColor: "#e6ebed", paddingTop: 20, paddingBottom: 20 }}
        >
          <Box sx={{ width: "85%", margin: "auto" }}>
            <Grid container>
              <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                <Box className={classes.PartnersTopSectionLeft}>
                  <Typography
                    variant="body"
                    sx={{ marginTop: 20 }}
                    className={classes.PartnersTopSectionHeading}
                  >
                    CONNECT WITH ENTHUSIASTS
                  </Typography>
                </Box>
                <Box className="headingBox">
                  <Typography
                    variant="body"
                    className={classes.topSectionContent}
                  >
                    Enthooze is a community where distiller and wineries can
                    engage with consumers. A place that connects, funds and
                    promotes the exploration of new brands.
                  </Typography>
                </Box>
                <div style={{ marginTop: "30px" }}>
                  <Button
                    variant="contained"
                    className={classes.learnAboutPartnersButton}
                  >
                    LEARN MORE
                  </Button>
                </div>
              </Grid>
              <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                <Box
                  component="img"
                  sx={{
                    height: 450,
                    width: 370,
                    borderRadius: 50,
                    marginTop: 20,
                  }}
                  alt="Your logo."
                  src={PartnersHome}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
