//pacakge import
import React from "react";
import { Typography, Grid, Box, Divider, makeStyles } from "@material-ui/core";
import WineGrapes from "../../assets/images/wine-grapes.jpg";
import currenyIcon from "../../assets/images/currenyIcon.png";

//styling
const useStyles = makeStyles((theme) => ({
  rankingHeading: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "20px",
  },
  statsTableMain: {
    width: "80%",
    margin: "auto",
  },
  statsTableHeadingBox: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  statsTableContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  tableHeadingStyle: {
    fontSize: "16px",
    fontWeight: 600,
  },
  productData: {
    fontSize: "16px",
    fontWeight: 600,
  },
  tableColumnsData: {
    marginTop: 8,
  },
}));

//component
export default function StatsTable() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box>
        <Box className={classes.statsTableMain}>
          <Divider />
          <Box className={classes.statsTableHeadingBox}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Typography></Typography>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Typography className={classes.tableHeadingStyle}>
                  Holding
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Typography className={classes.tableHeadingStyle}>
                  Type
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Typography className={classes.tableHeadingStyle}>
                  Maturation
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Typography className={classes.tableHeadingStyle}>
                  Price
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Typography className={classes.tableHeadingStyle}>
                  Gain
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Typography className={classes.tableHeadingStyle}>
                  Volume
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Typography className={classes.tableHeadingStyle}>
                  Status
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />

          <Box className={classes.statsTableContent}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                  }}
                  alt="Your logo."
                  src={WineGrapes}
                />
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    PRODUCER NAME
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Offer Name
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    Whiskey
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Grain
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  54 months
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  12/23/2021
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  .80
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $78.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  +23%
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  +400.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  1234
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $24,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  Aging
                  </Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.statsTableContent}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                  }}
                  alt="Your logo."
                  src={WineGrapes}
                />
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    PRODUCER NAME
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Offer Name
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    Whiskey
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Grain
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  54 months
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  12/23/2021
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  .80
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $78.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  +23%
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  +400.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  1234
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $24,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  Aging
                  </Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className={classes.statsTableContent}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                  }}
                  alt="Your logo."
                  src={WineGrapes}
                />
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    PRODUCER NAME
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Offer Name
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    Whiskey
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Grain
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  54 months
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  12/23/2021
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  .80
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $78.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  +23%
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  +400.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  1234
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $24,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  Delivered
                  </Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.statsTableContent}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                  }}
                  alt="Your logo."
                  src={WineGrapes}
                />
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    PRODUCER NAME
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Offer Name
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
                <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                    Whiskey
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                    Grain
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  54 months
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  12/23/2021
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  .80
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $78.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={1} lg={1} xl={1}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  +23%
                  </Typography>
                  <Typography variant="body" className={classes.offerName}>
                  +400.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                    <Box>
                    <Box
                        component="img"
                        sx={{
                          height: 13,
                          width: 13,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                  <Typography variant="body" className={classes.productData}>
                  1234
                  </Typography>
                  </Box>
                  <Typography variant="body" className={classes.offerName}>
                  $24,000
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
              <Box
                  sx={{ display: "inline-grid" }}
                  className={classes.tableColumnsData}
                >
                  <Typography variant="body" className={classes.productData}>
                  Application
                  </Typography>
                 
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
