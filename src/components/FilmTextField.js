import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';

const font1 = "'Open Sans', sans-serif";

const useStyles = makeStyles((theme) => ({
  centerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  flexboxcontainer: {
    width: "100%",
    display: "flex",
    flexdirection: "row"
  },
  textFieldContainer: {
    boxSizing: 20,
    height: 50,
    width: 250, 
    type: 'search'
  },
  fontStyleContainer:{
    fontFamily: font1,
    fontDisplay: 'swap',
    fontWeight: "400"
  },
  buttonContainer: {
    width: "20%",
    height: 50
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }
  ]

  return (
    <form noValidate autoComplete="off">
      <div className={classes.flexboxcontainer}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        loading= "true"
        loadingText= "Loading.."
        InputProps=
        {{
          className: classes.fontStyleContainer
        }}
        InputLabelProps=
        {{
          className: classes.fontStyleContainer
        }}
        options={[].map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.textFieldContainer}
            id="outlined-read-only-input"
            InputProps=
            {{
              className: classes.fontStyleContainer,
              ...params.InputProps
            }}
            InputLabelProps=
            {{
              className: classes.fontStyleContainer
            }}
            label="Enter a film"
          />
        )}
      />
      </div>
    </form>
  );
}
