import React, { Component } from "react";

// material-ui components
import { Typography } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <Typography>
        <header className='headerContainer'>
          <h1>Select a team</h1>
        </header>
      </Typography>
    );
  }
}
