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
import WineGrapes from "../../assets/images/wine-grapes.jpg";
//styling
const useStyles = makeStyles((theme) => ({
  exploreButton: {
    backgroundColor: "#90adba",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
  },
  topSectionHeading: {
    fontSize: "28px",
    fontWeight: "bold",
    lineHeight: 1,
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
  topSectionLeft: {
    marginBottom: 30,
    marginTop: 200,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
}));

//component
export default function TopSection() {
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
                <Box className={classes.topSectionLeft}>
                  <Typography
                    variant="body"
                    sx={{ marginTop: 20 }}
                    className={classes.topSectionHeading}
                  >
                    Discover, collect, and explore extraordinary wines and
                    spirits
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
                  <Button variant="contained" className={classes.exploreButton}>
                    EXPLORE
                  </Button>
                </div>
              </Grid>
              <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                <Card className={classes.cardClass}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="60%"
                      image={WineGrapes}
                    />
                    <CardContent
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flexBasis: "70%",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{ fontSize: "20px", fontWeight: "bold" }}
                        >
                          SHALLOW SPRINGS WINERY
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          500 | 0.88
                        </Typography>
                        <Typography style={{ fontSize: "16px" }}>
                          BIDS 300
                        </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
