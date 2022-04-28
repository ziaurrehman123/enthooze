//pacakge import
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import Divider from "@mui/material/Divider";

//user import
import MetaMask from "../../assets/images/metamask.png";
//styling
const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "90%",
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
  searchIcon: {
    fontSize: "30px",
  },
  searchBox: {
    paddingTop: 15,
    boxShadow: 2,
    marginBottom: 20,
    paddingBottom: 10,
    borderRadius: 10,
  },
  searchBoxWidth: {
    width: "70%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
  },
  connetWalletBox: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    margin: "auto",
  },
  connetWalletHeading: {
    fontSize: "30px",
    fontWeight: 600,
    marginTop:30
  },
  connetWalletSubheading: {
    fontSize: "18px",
    fontWeight: 500,
    paddingTop: 3,
  },
  availableWallets: {
    border: "1px solid grey",
    borderRadius: "10px",
    marginTop: 20,
    marginBottom: 20,
  },
  availableWalletsName: {
    fontSize: "18px",
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 10,
  },
  popularityStyle: {
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
        marginTop: 10,
      },
  },
  availableWalletsLogoName: {
    paddingTop: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid black",
  },
  availableWalletsLogoNameStyle: {
    display: "flex",
  },
  popularity: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    marginRight: "20px",
  },
  moreOptions: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  moreOptionsButton: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
}));

//component
export default function Search() {
  const classes = useStyles();

  //render
  return (
    <>
      <Box sx={{ marginTop: 110 }}>
        <Box
          sx={{
            backgroundColor: "#F1F6F6",
            paddingTop: "20px",
            paddingBottom: "1px",
          }}
        >
          <Box className={classes.searchBoxWidth}>
            <Box
              sx={{
                backgroundColor: "white",
                boxShadow: 3,
              }}
              className={classes.searchBox}
            >
              <SearchIcon sx={{ fontSize: 45, marginLeft:2 }} />
              <TextField
                className={classes.searchInput}
                id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder="Search Items, collections, and accounts"
              />
            </Box>
          </Box>
        </Box>

        <Box className={classes.connetWalletBox}>
          <Typography className={classes.connetWalletHeading}>
            Connet your wallet.
          </Typography>
          <Typography
            variant="body1"
            className={classes.connetWalletSubheading}
          >
            Connet with one of our available wallet providers or create a new
            one.
          </Typography>
          <Box className={classes.availableWallets}>
            <Box className={classes.availableWalletsLogoName}>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.availableWalletsLogoNameStyle}>
                    <Box
                      component="img"
                      sx={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        marginLeft: 20,
                      }}
                      alt="Your logo."
                      src={MetaMask}
                    />
                    <Typography className={classes.availableWalletsName}>
                      MetaMask
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.popularity}>
                    <Typography
                      variant="body1"
                      className={classes.popularityStyle}
                    >
                      Popular
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className={classes.availableWalletsLogoName}>
              <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.availableWalletsLogoNameStyle}>
                    <Box
                      component="img"
                      sx={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        marginLeft: 20,
                      }}
                      alt="Your logo."
                      src={MetaMask}
                    />
                    <Typography className={classes.availableWalletsName}>
                      Coinbase Wallet
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.popularity}>
                    <Typography
                      variant="body1"
                      className={classes.popularityStyle}
                    >
                      Popular
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className={classes.availableWalletsLogoName}>
              <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.availableWalletsLogoNameStyle}>
                    <Box
                      component="img"
                      sx={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        marginLeft: 20,
                      }}
                      alt="Your logo."
                      src={MetaMask}
                    />
                    <Typography className={classes.availableWalletsName}>
                      WalletConnect
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.popularity}>
                    <Typography
                      variant="body1"
                      className={classes.popularityStyle}
                    >
                      Popular
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className={classes.availableWalletsLogoName}>
              <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.availableWalletsLogoNameStyle}>
                    <Box
                      component="img"
                      sx={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        marginLeft: 20,
                      }}
                      alt="Your logo."
                      src={MetaMask}
                    />
                    <Typography className={classes.availableWalletsName}>
                      Formatic
                    </Typography>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={6} md={6} lg={6} xl={6}>
                  <Box className={classes.popularity}>
                    <Typography
                      variant="body1"
                      className={classes.popularityStyle}
                    >
                      Popular
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.moreOptions}>
              <Button className={classes.moreOptionsButton}>
                Show More Options
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
