import React, { Component } from "react";

// material-ui components
import { Button, Grid } from "@material-ui/core";

export default class ButtonComponent extends Component {
  render() {
    const { title } = this.props;
    return (
      <Grid className='btnContainer'>
        <Button variant='contained' className='btn'>
          {title}
        </Button>
      </Grid>
    );
  }
}
