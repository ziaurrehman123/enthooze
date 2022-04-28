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
  exploreOfferingHeading: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "20px",
  },
  explorePageMain: {
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
    marginBottom: 20,
  },
}));

//component
export default function MultipleSearch() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box sx={{ marginTop: 126 }}>
        <Box className={classes.explorePageMain}>
          <Box>
            <Typography className={classes.exploreOfferingHeading}>
              EXPLORE OFFERINGS
            </Typography>
          </Box>
          <Box className={classes.multiSearchBar}>
            <Grid container spacing={2}>
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
                  placeholder="PRODUCER"
                  size="small"
                  className={classes.filterInputStyle}
                />
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="SALE TYPE"
                  size="small"
                  className={classes.filterInputStyle}
                />
              </Grid>
              <Grid item sm={6} xs={6} md={2} lg={2} xl={2}>
                <TextField
                  id="outlined-basic"
                  placeholder="PRICE"
                  variant="outlined"
                  size="small"
                  className={classes.filterInputStyle}
                />
              </Grid>
              <Grid item sm={12} xs={12} md={2} lg={2} xl={2}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="FILTER"
                  size="small"
                  className={classes.filterInputStyle}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
