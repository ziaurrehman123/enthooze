//pacakge import
import React from "react";
import { Typography, Box, Grid, makeStyles } from "@material-ui/core";

//user import
import TwitterBanner1 from "../../assets/images/TwitterBanner1.png";

//styling
const useStyles = makeStyles((theme) => ({
  partnersBenefits: {
    marginTop: 100,
    marginBottom: 60,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderTopL: "1px solid grey",
  },
  moreBenefits: {
    fontSize: "16px",
    fontWeight: "600",
    marginTop:20,
  },
  moreBenefitsImg:{
textAlign:"right",
[theme.breakpoints.down("sm")]: {
    textAlign:"center",
  },
  },
}));

//component
export default function PartnersBenefits() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box sx={{ width: "100%", borderTop: "1px solid gray" }}>
        <Box className={classes.partnersBenefits}>
          <Grid container>
            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
              <Typography className={classes.moreBenefits}>
                MORE BENEFITS – LESS HASSLE
              </Typography>
              <Box sx={{marginTop:20}}>
              <ul>
                <li>Funding for start-up and new production</li>
                <li>Ongoing revenue during maturation period</li>
                <li>National reach for product and brand development</li>
                <li>Established customer base for future product sales</li>
                <li>Enhanced engagement and ability to create brand enthusiasts</li>
                <li>Ability to leverage local community and enhance tap/taste
room operations</li>
              </ul>
              </Box>
            </Grid>

            <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
                <Box className={classes.moreBenefitsImg}>
            <Box
                  component="img"
                  sx={{
                    height: "70%%",
                    width: "80%",
                  }}
                  
                  alt="Your logo."
                  src={TwitterBanner1}
                />
            </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
