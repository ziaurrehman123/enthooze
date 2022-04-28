import React from "react";
import {
  Typography,
  Grid,
  Box,
  Button,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";
import WineGrapes from "../../assets/images/wine-grapes.jpg";
const useStyles = makeStyles({
  exploreButton: {
    backgroundColor: "#F2F2F2",
    padding: "5px 50px 5px 50px",
    borderRadius: "25px",
  },
  topOfferings: {
    display: "flex",
    textAlign: "center",
    width: "50%",
    margin: "auto",
    paddingBottom:20,
    paddingTop:20
  },
  offeringDetails: {
    display: "flex",
    width: "80%",
    margin: "auto",
    borderBottom:"1px solid grey",
    paddingTop:10,
  },
 
  topOfferingsHeading: {
    fontSize: "20px",
    fontWeight: 600,
    marginRight: 10,
  },
  comingOfferingsHeading: {
    fontSize: "20px",
    fontWeight: 600,
  },
  offerCount: {
    fontSize: "20px",
    fontWeight: 600,
  },
  productName:{
    fontSize: "16px",
    fontWeight: 600,
  },
  productPercentage:{
    fontSize: "16px",
    fontWeight: 600,
    color:"green",
  },
  lowProductPercentage:{
    fontSize: "16px",
    fontWeight: 600,
    color:"red",
  },
  comingProductPercentage: {
    fontSize: "16px",
    fontWeight: 600,
    color:"black",
  },
  productNameArea: {
marginTop:15,

  },
  productPercentagePrice: {
textAlign:"right",
marginTop:15,
  },
  offerCountDiv: {
    marginTop:15
      },
});
export default function Offerings() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Grid container>
          <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
            <div className={classes.topOfferings}>
              <Typography
                variant="body"
                className={classes.topOfferingsHeading}
              >
                TOP OFFERING
              </Typography>

              <NativeSelect defaultValue={7}>
                <option value={7}>Last 7 days</option>
                <option value={20}>Last 24 Hours</option>
                <option value={30}>Last 30 days</option>
              </NativeSelect>
            </div>
            <Grid container>
              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    1
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productPercentagePrice}>
                    <Typography variant="body" className={classes.productPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    2
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    3
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.lowProductPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    4
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    5
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.lowProductPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>
            </Grid>
            <div style={{ marginTop: "30px", marginBottom:"30px", textAlign:"center" }}>
                  <Button variant="contained" className={classes.exploreButton}>
                    VIEW ALL
                  </Button>
                </div>
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
            <div className={classes.topOfferings}>
              <Typography
                variant="body"
                className={classes.comingOfferingsHeading}
              >
                COMING OFFERING
              </Typography>
            </div>
            <Grid container>
              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    1
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productPercentagePrice}>
                    <Typography variant="body" className={classes.comingProductPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    2
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.comingProductPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    3
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.comingProductPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    4
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.comingProductPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>

              <div className={classes.offeringDetails}>
                <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.offerCountDiv}>
                  <Typography variant="body" className={classes.offerCount}>
                    5
                  </Typography>
                  </div>
                </Grid>
                <Grid item sm={3} xs={3} md={3} lg={2} xl={2}>
                  <Box
                    component="img"
                    sx={{
                      height: 80,
                      width: 80,
                    }}
                    alt="Your logo."
                    src={WineGrapes}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={8} xl={8}>
                    <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.productName}>3 Toad Cabernet</Typography>
                    <Typography variant="body" className={classes.productArea}>Cabernet, California</Typography>
                    </div>
                </Grid>
                <Grid item sm={2} xs={2} md={2} lg={1} xl={1}>
                <div style={{display:"inline-grid"}} className={classes.productNameArea}>
                    <Typography variant="body" className={classes.comingProductPercentage}>+25%</Typography>
                    <Typography variant="body" className={classes.productPrice}>13345</Typography>
                    </div>
                    </Grid>
              </div>
            </Grid>
            <div style={{ marginTop: "30px", marginBottom:"30px", textAlign:"center" }}>
                  <Button variant="contained" className={classes.exploreButton}>
                    VIEW ALL
                  </Button>
                </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
