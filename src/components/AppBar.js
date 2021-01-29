import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const font1 = "'Open Sans', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0
  },
  appbar: {
    height: 60,
    color: "#8dc1e0",
    backgroundColor: "#295169",
  },
  header: {
    fontSize: '1.2rem',
    fontFamily: font1,
    fontDisplay: 'swap',
    fontWeight: "400"
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar variant="regular">
          <Typography className={classes.header}>
            filmsforyou.ml
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
