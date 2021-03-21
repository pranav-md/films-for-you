import {React, useState} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import api from '../api/filmApi'
import FilmDialog from './FilmDialog'
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

export default function FilmTextField(props) {
  const classes = useStyles();

  const {appendSelectedFilms} = props

  const [filmNames, setfilmNames] = useState([]);
  const [filmIds, setfilmIds] = useState([]);
  const [openPopup, setOpenPopup]= useState(false)
  const [filmDetails, setFilmDetails]= useState({})
  //const [open, setOpen]=filmDialogBox.useState(false)


  function handleDialogBoxClose(){
    setOpenPopup(false);
  };


  function handleDialogBoxOpen(){
    setOpenPopup(true);
  };

  function getFilms(filmStr){
    if(filmStr)
    {
    api.searchFilms(filmStr).then(
    
      data =>{ 
        const fNames = [];
        const fIds = [];
        for(let key in data.data){
          fNames.push(data.data[key]);
          fIds.push(key)
        }
        setfilmNames(fNames)
        setfilmIds(fIds)
       // setFilms(JSON.parse(data.data))
      console.log(fNames)}
      )
      }
  }
  const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

  function getFilm(filmName){
    console.log(filmName);
    console.log("position of filmName= "+filmNames.indexOf(filmName))
    console.log("film content= "+filmNames.indexOf(filmName))
    const filmId=nthElement(filmIds, filmNames.indexOf(filmName))
    api.getFilm(filmId).then(
      data =>{ 
        var filmData= data.data
        filmData["id"]=filmId
      setFilmDetails(data.data)
      handleDialogBoxOpen()
    }
     )
    console.log("film id of filmName= "+nthElement(filmIds, filmNames.indexOf(filmName)))

 //   filmDialogBox.setOpen(true)
  }

  return (
    <div>
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
        options={filmNames.map((option) => option)}
        onChange={(event, value)=>{getFilm(value)}}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.textFieldContainer}
            id="outlined-read-only-input"
            onChange={(event)=>{getFilms(event.target.defaultValue)}}
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
    <FilmDialog
      openPopup= {openPopup}
      handleDialogBoxClose= {handleDialogBoxClose}
      filmDetails={filmDetails}
      setFilmDetails ={filmDetails}
      appendSelectedFilms={appendSelectedFilms}/>
    </div>
  );
}
