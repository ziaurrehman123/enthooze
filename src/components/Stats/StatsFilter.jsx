//pacakge import
import React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  makeStyles,
} from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  rankingHeading: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "20px",
  },
  statsPageMain: {
    width: "80%",
    margin: "auto",
  },
  filterInputStyle: {
    width: "100%",
    borderRadius: "40px",
    border: "1px solid gray",
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
  multiSearchBar: {
    width: "100%",
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "30px",
  },
  statsFilterSection: {
    textAlign: "center",
  },
}));

//component
export default function StatsFilter() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box sx={{ marginTop: 136 }}>
        <Box className={classes.statsPageMain}>
          <Box className={classes.statsFilterSection}>
            <Typography className={classes.rankingHeading}>RANKING</Typography>
            <Typography variant="body1">
              The top offerings, ranked by producer, volume, floor price and
              other statistics.
            </Typography>
            <Box className={classes.multiSearchBar}>
              <Grid container spacing={2}>
                <Grid item sm={12} xs={12} md={3} lg={3} xl={3}></Grid>
                <Grid item sm={12} xs={12} md={2} lg={2} xl={2}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="TIME PERIOD"
                    size="small"
                    className={classes.filterInputStyle}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="CATEGORY"
                    size="small"
                    className={classes.filterInputStyle}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="STATUS"
                    size="small"
                    className={classes.filterInputStyle}
                  />
                </Grid>
                <Grid item sm={6} xs={6} md={3} lg={3} xl={3}></Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
