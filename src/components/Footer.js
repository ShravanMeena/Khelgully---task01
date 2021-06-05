import React, { Component } from "react";

// material-ui components
import { Typography } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <Typography>
        <footer className='footerContainer'>
          <p>
            Created by <a href='https://www.pakkamarwadi.tk/'>shravanmeena</a>
          </p>
        </footer>
      </Typography>
    );
  }
}
