//pacakge import
import React from "react";
import {
  Typography,
  Grid,
  Box,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { Card, CardContent, IconButton } from "@mui/material";
import img from "../../assets/images/wine-grapes.jpg";
import exploreProduct1 from "../../assets/images/exploreProduct1.png";
import exploreProduct2 from "../../assets/images/exploreProduct2.png";
import exploreProduct3 from "../../assets/images/exploreProduct3.png";
import exploreProduct4 from "../../assets/images/exploreProduct4.png";
import currenyIcon from "../../assets/images/currenyIcon.png";

//styling
const useStyles = makeStyles((theme) => ({
  explorePageMain: {
    width: "80%",
    margin: "auto",
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
  },
  exploreProductRight: {
    display: "flex",
    marginTop: 10,
    marginBottom: 15,
    justifyContent: "end",
    marginRight: 20,
  },
}));

//component
export default function ExploreProduct() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box>
        <Box className={classes.explorePageMain}>
          <Grid container spacing={2}>
            <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "-50px",
                  height: "85%",
                  position: "relative",
                }}
              >
                <img
                  height="50%"
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
                    right: "5px",
                    top: "5%",
                    right: "5%",
                  }}
                >
                  <ShareIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5%",
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
            <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "-50px",
                  height: "85%",
                  position: "relative",
                }}
              >
                <img
                  height="50%"
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
                    right: "5px",
                    top: "5%",
                    right: "5%",
                  }}
                >
                  <ShareIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5%",
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
                    Captain Toods
                  </Typography>
                  <div style={{ fontSize: "16" }}>15 Year Whiskey</div>
                  <div style={{ fontSize: "16" }}>Kentucky, USA</div>
                  <img
                    src={exploreProduct2}
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
            <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "-50px",
                  height: "85%",
                  position: "relative",
                }}
              >
                <img
                  height="50%"
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
                    right: "5px",
                    top: "5%",
                    right: "5%",
                  }}
                >
                  <ShareIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5%",
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
                    Black Contry Winery
                  </Typography>
                  <div style={{ fontSize: "16" }}>15 Year Whiskey</div>
                  <div style={{ fontSize: "16" }}>Kentucky, USA</div>
                  <img
                    src={exploreProduct3}
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
            <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "-50px",
                  height: "85%",
                  position: "relative",
                }}
              >
                <img
                  height="50%"
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
                    right: "5px",
                    top: "5%",
                    right: "5%",
                  }}
                >
                  <ShareIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5%",
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
                    Slopping Hill State
                  </Typography>
                  <div style={{ fontSize: "16" }}>15 Year Whiskey</div>
                  <div style={{ fontSize: "16" }}>Kentucky, USA</div>
                  <img
                    src={exploreProduct4}
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
            <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "-50px",
                  height: "85%",
                  position: "relative",
                }}
              >
                <img
                  height="50%"
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
                    right: "5px",
                    top: "5%",
                    right: "5%",
                  }}
                >
                  <ShareIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5%",
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
                   GingWear
                  </Typography>
                  <div style={{ fontSize: "16" }}>15 Year Whiskey</div>
                  <div style={{ fontSize: "16" }}>Kentucky, USA</div>
                  <img
                    src={exploreProduct2}
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
            <Grid item sm={12} xs={12} md={4} lg={4} xl={4}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  borderRadius: "5%",
                  paddingBottom: "-50px",
                  height: "85%",
                  position: "relative",
                }}
              >
                <img
                  height="50%"
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
                    right: "5px",
                    top: "5%",
                    right: "5%",
                  }}
                >
                  <ShareIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "5%",
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
                    Producer
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
    </>
  );
}
