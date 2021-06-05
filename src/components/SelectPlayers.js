import React from "react";

// material-ui components
import { Checkbox, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { makeStyles } from "@material-ui/core/styles";

// data
import { userData } from "../data";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
});

export default function SelectPlayer() {
  const classes = useStyles();
  const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
  const checkedIcon = <CheckBoxIcon fontSize='small' />;

  return (
    <Autocomplete
      multiple
      options={userData}
      className='autoCompleteContainer'
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            checked={selected}
            className='checkBox'
          />
          {option.title}
        </>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          placeholder='Search'
          className={classes.root}
        />
      )}
    />
  );
}
