import React from "react";

// material-ui components
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

// data
import { teamData } from "../data";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});

export default function SelectTeam() {
  const classes = useStyles();
  return (
    <Autocomplete
      className='autoCompleteContainer'
      disableClearable
      options={teamData.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          className={classes.root}
          placeholder='Select Team'
        />
      )}
    />
  );
}
