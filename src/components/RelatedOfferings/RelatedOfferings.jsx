//pacakge import
import React from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Divider,
  makeStyles,
  Grid,
  Link,
} from "@material-ui/core";
import { Card, CardContent, IconButton } from "@mui/material";
import img from "../../assets/images/wine-grapes.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import exploreProduct1 from "../../assets/images/exploreProduct1.png";
import currenyIcon from "../../assets/images/currenyIcon.png";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

//styling
const useStyles = makeStyles((theme) => ({
  OfferingProductBox: {
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
  },
  relatedOfferingsBox: {
    width: "95%",
    margin: "auto",
  },
  relatedOfferingsHeading: {
    fontSize: "26px",
    fontWeight: "600",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  exploreProductRight: {
    display: "flex",
    marginTop: 10,
    marginBottom: 15,
    justifyContent: "end",
    marginRight: 20,
  },
  productUnitPrice: {
    display: "flex",
    marginTop: 20,
    marginBottom: 15,
    marginLeft: "10px",
  },
  notesHeading: {
    fontWeight: "600",
  },
  buyNowLink: {
    textDecoration: "none",
    fontWeight: 600,
    cursor: "pointer",
    paddingLeft: 20,
    color: "lightgray",
  },
  buyNowLinkBox: {
    marginTop: 10,
    marginBottom: 15,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  specialNote: {
    borderBottom: "1px solid grey",
    marginBottom: "20px",
    marginTop: "30px",
  },
  offerButton: {
    backgroundColor: "white",
    padding: "5px 20px 5px 20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
    borderRadius: "25px",
    marginLeft: "20px",
  },
  buyNowButton: {
    backgroundColor: "#90adba",
    padding: "5px 20px 5px 20px",
    borderRadius: "25px",
    marginLeft: "20px",
    color: "white",
  },
  cardRight: {
    textAlign: "right",
    marginRight: "20px",
  },
  cardLeft: {
    marginLeft: "20px",
  },
  productInfo: {
    fontSize: "20px",
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    paddingTop: "20px",
  },
  growingMarketplace: {
    textAlign: "center",
    marginTop: 60,
    marginBottom: 60,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    marginLeft: "auto",
    marginRight: "auto",
  },
  growingMarketplaceHeading: {
    fontSize: "18px",
    fontWeight: "600",
  },
  growingMarketplaceStats: {
    border: "1px solid gray",
    borderRadius: 10,
  },
  growingMarketplaceStatsContent: {
    margin: "20px 30px 20px 30px",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 15px 20px 15px",
    },
  },
  brandsCount: {
    fontSize: "16px",
    fontWeight: "600",
  },
  growingMarketplaceStatsBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  tabsBox: {
    borderBottom: "1px solid grey",
  },
  productDetails: {
    marginTop: "20px",
  },
  typeHeading: {
    fontWeight: "600",
    fontSize: "16px",
  },
  typeName: {
    color: "#979393",
  },
  totalContent: {
    display: "flex",
    justifyContent: "right",
    marginRight: "20px",
  },
  listingHeading: {
    fontWeight: "600",
    marginLeft: "20px",
  },
  totalHeading: {
    fontWeight: "600",
    fontSize: "14px",
    marginRight: "7px",
  },
  listingPercentage: {
    marginLeft: "7px",
    color: "green",
  },
  listingMain: {
    border: "1px solid #C1C1C1",
    marginBottom: "40px",
    paddingTop: "20px",
    borderRadius: "10px",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "8px",
    },
    margin: "auto",
  },
  listingDetailMain: {
    marginBottom: "40px",
    paddingTop: "20px",
    borderRadius: "10px",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
  },
  headingSize: {
    fontSize: "12px",
    paddingLeft: "10px",
    paddingTop: "20px",
  },
  buyButton: {
    backgroundColor: "#90adba",
    padding: "5px 10px 5px 10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-15px",
    },
    borderRadius: "25px",
    fontSize: "12px",
    color: "white",
    marginTop: "15px",
  },
  listingTableheadings: {
    paddingBottom: "20px",
  },
  unitPriceSize: {
    fontSize: "12px",
  },
  fromContent: {
    fontSize: "12px",
    paddingLeft: "10px",
    paddingTop: "20px",
    color: "#6fa8dc",
  },
  listingTableContent: {
    backgroundColor: "#F9FAFB",
  },
  headingDivider: {
    marginTop: "10px",
  },
  contentDivider: {
    marginBottom: "8px",
  },
  cardStyle: {
    borderRadius: "5%",
    paddingBottom: "40px",
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "10px",
    },
    margin: "auto",
  },
  favoriteIcon:{
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      top: "-509px",
      left: "180px",
    },
    top: "-509px",
    left: "280px",
  },
  shareIcon:{
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      top: "-509px",
    left: "300px",
    },
    top: "-509px",
    left: "400px",
  },
  
}));

//component
export default function RelatedOfferings() {
  const classes = useStyles();
  //render
  return (
    <>
      <Box sx={{ marginTop: 176 }}>
        <Box className={classes.OfferingProductBox}>
          <Grid container spacing={2}>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Card className={classes.cardStyle}>
                <CardContent style={{ position: "relative" }}>
                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
                      <Box className={classes.cardLeft}>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "24px",
                            paddingBottom: "10px",
                          }}
                        >
                          CAPTAIN TODDS
                        </Typography>

                        <Typography>15 Year Whiskey</Typography>
                        <Typography>Kentucky, USA</Typography>
                      </Box>
                    </Grid>

                    <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
                      <Box className={classes.cardRight}>
                        <img src={exploreProduct1} height="50px" />
                      </Box>
                    </Grid>
                  </Grid>

                  <img
                    height="535px"
                    width="100%"
                    src={img}
                    alt="img"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "5%",
                      borderRadius: "5%",
                    }}
                  ></img>
                  <IconButton
                    aria-label="share"
                    className={classes.shareIcon}
                   
                  >
                    <ShareIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    aria-label="share"
                    className={classes.favoriteIcon}
                   
                  >
                    <FavoriteBorderIcon
                      fontSize="large"
                      sx={{ color: "white" }}
                    />
                  </IconButton>
                </CardContent>

                <Grid container spacing={2}>
                  <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                    <Box className={classes.buyNowLinkBox}>
                      <Button
                        variant="contained"
                        className={classes.buyNowButton}
                      >
                        BUY NOW
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.offerButton}
                      >
                        OFFER
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                    <Box className={classes.exploreProductRight}>
                      <Box
                        component="img"
                        sx={{
                          height: 20,
                          width: 20,
                        }}
                        alt="Your logo."
                        src={currenyIcon}
                      />
                      <Typography variant="body1">1.32</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Box className={classes.listingDetailMain}>
                <Box className={classes.productInfo}>
                  <Typography className={classes.productInfo}>
                    This would be a brief description of the offering or
                    information about the distiller. There would be a character
                    limit count that will need to be determined. More copy to
                    follow.
                    <span>
                      <a href="#">MORE INFO</a>
                    </span>
                  </Typography>
                </Box>
                <Box className={classes.growingMarketplace}>
                  <div className={classes.growingMarketplaceStatsBox}>
                    <Box
                      sx={{
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        width: "fit-content",
                        border: "1px solid gray",
                        borderRadius: 10,
                      }}
                    >
                      <Box className={classes.growingMarketplaceStatsContent}>
                        <Typography className={classes.brandsCount}>
                          22
                        </Typography>
                        <Divider orientation="vertical" />
                        <Typography className={classes.brandsHeading}>
                          Brands
                        </Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />

                      <Box className={classes.growingMarketplaceStatsContent}>
                        <Typography className={classes.brandsCount}>
                          85
                        </Typography>
                        <Divider orientation="vertical" />
                        <Typography className={classes.brandsHeading}>
                          Offerings
                        </Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />

                      <Divider orientation="vertical" flexItem />
                      <Box className={classes.growingMarketplaceStatsContent}>
                        <Typography className={classes.brandsCount}>
                          22,450
                        </Typography>
                        <Divider orientation="vertical" />
                        <Typography className={classes.brandsHeading}>
                          Transactions
                        </Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box className={classes.growingMarketplaceStatsContent}>
                        <Typography className={classes.brandsCount}>
                          22,450
                        </Typography>
                        <Divider orientation="vertical" />
                        <Typography className={classes.brandsHeading}>
                          Transactions
                        </Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                    </Box>
                  </div>
                </Box>
                <Box className={classes.tabsBox}>
                  <Tabs aria-label="basic tabs example">
                    <Tab
                      label="OFFERING"
                      sx={{
                        borderBottom: "2px solid gray",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    />
                    <Tab label="PRICE" sx={{ fontWeight: "bold" }} />
                    <Tab label="UPDATES" sx={{ fontWeight: "bold" }} />
                    <Tab label="HISTORY" sx={{ fontWeight: "bold" }} />
                  </Tabs>
                </Box>

                <Box className={classes.productDetails}>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Sub-Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Barrel:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Barrel age:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Sub-Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Sub-Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Sub-Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                <Box className={classes.productDetails}>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Sub-Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Barrel:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Barrel age:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Scotch
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeHeading}>
                        Sub-Type:
                      </Typography>
                    </Grid>
                    <Grid item sm={3} xs={3} md={3} lg={3} xl={3}>
                      <Typography className={classes.typeName}>
                        Malt, Refill
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box className={classes.specialNote}>
                    <Typography>
                      <span className={classes.notesHeading}>Notes:</span>{" "}
                      Special noted from the producer
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.relatedOfferingsBox}>
            <Typography className={classes.relatedOfferingsHeading}>
              OTHER OFFERINGS FROM OLD SOUTHERN DISTILLERY
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={12} xs={12} md={12} lg={4} xl={4}>
                <Card
                  
                  style={{
                    borderRadius: "5%",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    height="350px"
                    width="90%"
                    src={img}
                    alt="img"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "5%",
                      borderRadius: "5%",
                    }}
                  ></img>
                  <IconButton
                    aria-label="share"
                    style={{
                      position: "absolute",
                      top: "25%",
                      right: "15%",
                    }}
                  >
                    <ShareIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    aria-label="share"
                    style={{
                      position: "absolute",
                      top: "25%",
                      right: "16%",
                    }}
                  >
                    <FavoriteBorderIcon
                      fontSize="large"
                      sx={{ color: "white" }}
                    />
                  </IconButton>

                  <CardContent style={{ position: "relative" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      Old Southern Distillery
                    </Typography>
                    <div style={{ fontSize: "16" }}>15 Year Whiskey</div>
                    <div style={{ fontSize: "16" }}>Kentucky, USA</div>
                    <img
                      src={exploreProduct1}
                      style={{ position: "absolute", right: "6%", top: "40%" }}
                      height="50px"
                    />
                  </CardContent>
                  <Divider />
                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                      <Box className={classes.buyNowLinkBox}>
                        <Link to="/" className={classes.buyNowLink}>
                          Buy Now
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                      <Box className={classes.exploreProductRight}>
                        <Box
                          component="img"
                          sx={{
                            height: 20,
                            width: 20,
                          }}
                          alt="Your logo."
                          src={currenyIcon}
                        />
                        <Typography variant="body1">1.32</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item sm={12} xs={12} md={12} lg={4} xl={4}>
                <Card
                  
                  style={{
                    borderRadius: "5%",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    height="350px"
                    width="90%"
                    src={img}
                    alt="img"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "5%",
                      borderRadius: "5%",
                    }}
                  ></img>
                  <IconButton
                    aria-label="share"
                    style={{
                      position: "absolute",
                      top: "25%",
                      right: "15%",
                    }}
                  >
                    <ShareIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    aria-label="share"
                    style={{
                      position: "absolute",
                      top: "25%",
                      right: "16%",
                    }}
                  >
                    <FavoriteBorderIcon
                      fontSize="large"
                      sx={{ color: "white" }}
                    />
                  </IconButton>

                  <CardContent style={{ position: "relative" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      Old Southern Distillery
                    </Typography>
                    <div style={{ fontSize: "16" }}>15 Year Whiskey</div>
                    <div style={{ fontSize: "16" }}>Kentucky, USA</div>
                    <img
                      src={exploreProduct1}
                      style={{ position: "absolute", right: "6%", top: "40%" }}
                      height="50px"
                    />
                  </CardContent>
                  <Divider />
                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                      <Box className={classes.buyNowLinkBox}>
                        <Link to="/" className={classes.buyNowLink}>
                          Buy Now
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                      <Box className={classes.exploreProductRight}>
                        <Box
                          component="img"
                          sx={{
                            height: 20,
                            width: 20,
                          }}
                          alt="Your logo."
                          src={currenyIcon}
                        />
                        <Typography variant="body1">1.32</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item sm={12} xs={12} md={12} lg={4} xl={4}>
                <Card
                  
                  style={{
                    borderRadius: "5%",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    height="350px"
                    width="90%"
                    src={img}
                    alt="img"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "5%",
                      borderRadius: "5%",
                    }}
                  ></img>
                  <IconButton
                    aria-label="share"
                    style={{
                      position: "absolute",
                      top: "25%",
                      right: "15%",
                    }}
                  >
                    <ShareIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton
                    aria-label="share"
                    style={{
                      position: "absolute",
                      top: "25%",
                      right: "16%",
                    }}
                  >
                    <FavoriteBorderIcon
                      fontSize="large"
                      sx={{ color: "white" }}
                    />
                  </IconButton>

                  <CardContent style={{ position: "relative" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      Old Southern Distillery
                    </Typography>
                    <div style={{ fontSize: "16" }}>15 Year Whiskey</div>
                    <div style={{ fontSize: "16" }}>Kentucky, USA</div>
                    <img
                      src={exploreProduct1}
                      style={{ position: "absolute", right: "6%", top: "40%" }}
                      height="50px"
                    />
                  </CardContent>
                  <Divider />
                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                      <Box className={classes.buyNowLinkBox}>
                        <Link to="/" className={classes.buyNowLink}>
                          Buy Now
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                      <Box className={classes.exploreProductRight}>
                        <Box
                          component="img"
                          sx={{
                            height: 20,
                            width: 20,
                          }}
                          alt="Your logo."
                          src={currenyIcon}
                        />
                        <Typography variant="body1">1.32</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
