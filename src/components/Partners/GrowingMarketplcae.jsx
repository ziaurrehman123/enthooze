//pacakge import
import React from "react";
import { Typography, Box, Divider, makeStyles } from "@material-ui/core";

//user import
import currenyIcon from "../../assets/images/currenyIcon.png";

//styling
const useStyles = makeStyles((theme) => ({
  growingMarketplace: {
    textAlign: "center",
    marginTop: 60,
    marginBottom: 60,
    width: "50%",
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
    margin: "20px 50px 20px 50px",
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
}));

//component
export default function GrowingMarketplace() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box className={classes.growingMarketplace}>
        <Typography className={classes.growingMarketplaceHeading}>
          GROWING THE MARKETPLACE FOR LIQUOR ENTUSIASTS
        </Typography>
    
          <div className={classes.growingMarketplaceStatsBox}>
            <Box
              sx={{
                  margin:"auto",
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                border: "1px solid gray",
                borderRadius: 10,
              }}
            >
              <Box className={classes.growingMarketplaceStatsContent}>
                <Typography className={classes.brandsCount}>22</Typography>
                <Divider orientation="vertical" />
                <Typography className={classes.brandsHeading}>
                  Brands
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />

              <Box className={classes.growingMarketplaceStatsContent}>
                <Typography className={classes.brandsCount}>85</Typography>
                <Divider orientation="vertical" />
                <Typography className={classes.brandsHeading}>
                  Offerings
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box className={classes.growingMarketplaceStatsContent}>
                <Box sx={{ display: "flex" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 20,
                      width: 20,
                    }}
                    alt="Your logo."
                    src={currenyIcon}
                  />
                  <Typography className={classes.brandsCount}>
                    22, 450
                  </Typography>
                </Box>
                <Divider orientation="vertical" />
                <Typography className={classes.brandsHeading}>
                  Raised
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box className={classes.growingMarketplaceStatsContent}>
                <Typography className={classes.brandsCount}>22,450</Typography>
                <Divider orientation="vertical" />
                <Typography className={classes.brandsHeading}>
                  Transactions
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
            </Box>
          </div>
        </Box>
      
    </>
  );
}
