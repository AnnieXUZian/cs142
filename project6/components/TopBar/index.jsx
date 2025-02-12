import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of CS142 Project 5.
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.message)
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
          <Typography variant="h5" color="inherit">
            This is the TopBar component
          </Typography>
          <Typography variant="body1" className="right">
            {this.props.message}
          </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
