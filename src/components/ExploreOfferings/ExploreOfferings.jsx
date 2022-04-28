//pacakge import
import React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  makeStyles,
  Card,
  CardContent,
  Divider,
  Button,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.jpg";
import currenyIcon from "../../assets/images/currenyIcon.png";
//styling
const useStyles = makeStyles((theme) => ({
  locationInputsStyle: {
    width: "100%",
    borderRadius: "10px",
    border: "1px solid #E6E6E6",
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
  searchingitemsButtons: {
    paddingTop: "30px",
  },
  exploreOfferingsPageMain: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    margin: "auto",
  },
  searchInput: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    border: "none",
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
  sortByBox: {
    width: "95%",
    margin: "auto",
  },
  sortByProductBox: {
    width: "95%",
    margin: "auto",
    overflow: "scroll",
    height: "400px",
  },
  sortByHeading: {
    fontSize: "22px",
    fontWeight: "600",
    color: "grey",
  },
  sortByItems: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "20px",
  },
  productItems: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "20px",
  },
  searchBox: {
    paddingTop: 5,
    boxShadow: 2,
    marginBottom: 20,
    paddingBottom: 5,
    borderRadius: 10,
    border: "1px solid #E6E6E6",
  },
  exploreofferingsSearching: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  searchItemsTitle: {
    fontSize: "16",
    fontWeight: "600",
    marginTop: "2px",
    marginLeft: "20px",
  },
  exploreofferingsSearchingItems: {
    height: "300px",
    overflow: "scroll",
  },
  exploreofferingsSearchingItem: {
    marginTop: "20px",
  },
  searchingitemsButtons: {
    marginTop: "30px",
    textAlign: "center",
  },
  clearButton: {
    backgroundColor: "#E6E6E6",
    borderRadius: "30px",
    paddingLeft: "40px",
    paddingRight: "40px",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  applyButton: {
    backgroundColor: "#236EFD",
    borderRadius: "30px",
    paddingLeft: "40px",
    paddingRight: "40px",
    color: "white",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  exploreOfferingsDivider: {
    marginTop: "30px",
  },
}));

//component
export default function Exploreofferings() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box className={classes.exploreOfferingsPageMain}>
        <Box>
          <Grid container spacing={2}>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "10px",
                }}
              >
                <CardContent>
                  <Box className={classes.exploreofferingsSearching}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        boxShadow: 3,
                      }}
                      className={classes.searchBox}
                    >
                      <SearchIcon
                        sx={{ fontSize: 30, marginLeft: 2, marginTop: "10px" }}
                      />
                      <TextField
                        className={classes.searchInput}
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        placeholder="Search Items, collections, and accounts"
                      />
                    </Box>
                    <Box className={classes.exploreofferingsSearchingItems}>
                      <Box className={classes.exploreofferingsSearchingItem}>
                        <Grid container spacing={2}>
                          <Grid item sm={2} xs={2} md={2} lg={2} xl={2}>
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                borderRadius: 50,
                                marginLeft: 20,
                              }}
                              alt="Your logo."
                              src={User}
                            />
                          </Grid>
                          <Grid item sm={10} xs={10} md={10} lg={10} xl={10}>
                            <Typography
                              variant="body1"
                              className={classes.searchItemsTitle}
                            >
                              Audioglyphs
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box className={classes.exploreofferingsSearchingItem}>
                        <Grid container spacing={2}>
                          <Grid item sm={2} xs={2} md={2} lg={2} xl={2}>
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                borderRadius: 50,
                                marginLeft: 20,
                              }}
                              alt="Your logo."
                              src={User}
                            />
                          </Grid>
                          <Grid item sm={10} xs={10} md={10} lg={10} xl={10}>
                            <Typography
                              variant="body1"
                              className={classes.searchItemsTitle}
                            >
                              Azuki
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box className={classes.exploreofferingsSearchingItem}>
                        <Grid container spacing={2}>
                          <Grid item sm={2} xs={2} md={2} lg={2} xl={2}>
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                borderRadius: 50,
                                marginLeft: 20,
                              }}
                              alt="Your logo."
                              src={User}
                            />
                          </Grid>
                          <Grid item sm={10} xs={10} md={10} lg={10} xl={10}>
                            <Typography
                              variant="body1"
                              className={classes.searchItemsTitle}
                            >
                              BoredApe YetchClub
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box className={classes.exploreofferingsSearchingItem}>
                        <Grid container spacing={2}>
                          <Grid item sm={2} xs={2} md={2} lg={2} xl={2}>
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                borderRadius: 50,
                                marginLeft: 20,
                              }}
                              alt="Your logo."
                              src={User}
                            />
                          </Grid>
                          <Grid item sm={10} xs={10} md={10} lg={10} xl={10}>
                            <Typography
                              variant="body1"
                              className={classes.searchItemsTitle}
                            >
                              CloneX
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box className={classes.exploreofferingsSearchingItem}>
                        <Grid container spacing={2}>
                          <Grid item sm={2} xs={2} md={2} lg={2} xl={2}>
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                borderRadius: 50,
                                marginLeft: 20,
                              }}
                              alt="Your logo."
                              src={User}
                            />
                          </Grid>
                          <Grid item sm={10} xs={10} md={10} lg={10} xl={10}>
                            <Typography
                              variant="body1"
                              className={classes.searchItemsTitle}
                            >
                              Audioglyphs
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box className={classes.exploreofferingsSearchingItem}>
                        <Grid container spacing={2}>
                          <Grid item sm={2} xs={2} md={2} lg={2} xl={2}>
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                borderRadius: 50,
                                marginLeft: 20,
                              }}
                              alt="Your logo."
                              src={User}
                            />
                          </Grid>
                          <Grid item sm={10} xs={10} md={10} lg={10} xl={10}>
                            <Typography
                              variant="body1"
                              className={classes.searchItemsTitle}
                            >
                              Audioglyphs
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box className={classes.exploreofferingsSearchingItem}>
                        <Grid container spacing={2}>
                          <Grid item sm={2} xs={2} md={2} lg={2} xl={2}>
                            <Box
                              component="img"
                              sx={{
                                height: 30,
                                width: 30,
                                borderRadius: 50,
                                marginLeft: 20,
                              }}
                              alt="Your logo."
                              src={User}
                            />
                          </Grid>
                          <Grid item sm={10} xs={10} md={10} lg={10} xl={10}>
                            <Typography
                              variant="body1"
                              className={classes.searchItemsTitle}
                            >
                              Audioglyphs
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Divider className={classes.exploreOfferingsDivider} />
                    <Box className={classes.searchingitemsButtons}>
                      <Grid container spacing={2}>
                        <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                          <Button
                            type="primary"
                            className={classes.clearButton}
                          >
                            Clear
                          </Button>
                        </Grid>
                        <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                          <Button
                            variant="contained"
                            size="medium"
                            className={classes.applyButton}
                          >
                            Apply
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <CardContent>
                  <Box className={classes.sortByProductBox}>
                    <Typography className={classes.productItems}>
                      VISKEY
                    </Typography>
                    <Typography className={classes.productItems}>
                      TAQUILLEA
                    </Typography>
                    <Typography className={classes.productItems}>
                      BOURBON
                    </Typography>
                    <Typography className={classes.productItems}>
                      SCOTCH
                    </Typography>
                    <Typography className={classes.productItems}>
                      WHITE
                    </Typography>
                    <Typography className={classes.productItems}>
                      CHARDONAY
                    </Typography>
                    <Typography className={classes.productItems}>
                      ROSE
                    </Typography>
                    <Typography className={classes.productItems}>
                      REISLING
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "10px",
                  marginBottom:"30px",
                }}
              >
                <CardContent>
                  <Box className={classes.exploreofferingsSearching}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        boxShadow: 3,
                      }}
                      className={classes.searchBox}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: 30,
                          width: 30,
                          borderRadius: 50,
                          marginLeft: 20,
                          marginTop: "7px",
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                      <TextField
                        className={classes.searchInput}
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        placeholder="ETH"
                      />
                    </Box>

                    <Grid container spacing={2}>
                      <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="From"
                          size="small"
                          className={classes.locationInputsStyle}
                        />
                      </Grid>
                      <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="To"
                          size="small"
                          className={classes.locationInputsStyle}
                        />
                      </Grid>
                    </Grid>

                    <Divider className={classes.exploreOfferingsDivider} />
                    <Box className={classes.searchingitemsButtons}>
                      <Grid container spacing={2}>
                        <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                          <Button
                            type="primary"
                            className={classes.clearButton}
                          >
                            Clear
                          </Button>
                        </Grid>
                        <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                          <Button
                            variant="contained"
                            size="medium"
                            className={classes.applyButton}
                          >
                            Apply
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  marginBottom:"20px",
                }}
              >
                <CardContent style={{ position: "relative" }}>
                  <Box className={classes.sortByBox}>
                    <Typography
                      variant="body1"
                      className={classes.sortByHeading}
                    >
                      Sort By
                    </Typography>
                    <Typography className={classes.sortByItems}>
                      PRICE: HIGH TO LOW
                    </Typography>
                    <Typography className={classes.sortByItems}>
                      PRICE: LOW TO HIGH
                    </Typography>
                    <Typography className={classes.sortByItems}>
                      AUCTION ENDING SOONEST
                    </Typography>
                    <Typography className={classes.sortByItems}>
                      FULFILLED
                    </Typography>
                    <Typography className={classes.sortByItems}>
                      RECENTLY ADDING
                    </Typography>
                    <Typography className={classes.sortByItems}>
                      MOST VIEWS
                    </Typography>
                    <Typography className={classes.sortByItems}>
                      MOST ACTIVITY
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
