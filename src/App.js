import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import FilmTextField from './components/FilmTextField'
import SelectedFilmItem from './components/SelectedFilmItem'
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import {React, useState} from "react";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  centerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  flexboxContainer: {
    display: "flex",
    flexDirection: "column"
}
}))



function App() {
  const classes = useStyles();
  const [selectedFilmList, setSelectedFilmList] = useState([]);

  function appendSelectedFilms(selectedFilm){
    console.log("appendSelectedFilms: "+selectedFilmList)
    var filmsList= [...selectedFilmList]
    filmsList.push(selectedFilm)
    if((typeof selectedFilmList)!== 'undefined')
      setSelectedFilmList(filmsList)
  }

  function removeSelectedFilm(film){
    var filmsList= [...selectedFilmList]
    console.log("List elems before pop="+(filmsList.length))
    filmsList.pop(film)
    console.log("List elems after pop="+(filmsList.length))
    setSelectedFilmList(filmsList)
  }

  return (
    <div className="App">
      <AppBar />
      <div className="FlexBoxContainer">
      <List width="300px">
      {selectedFilmList.map((film)=>{
          return (
        <SelectedFilmItem
            film ={film}
            setSelectedFilmList={setSelectedFilmList}
            removeSelectedFilm = {removeSelectedFilm}/>
      )})}
        </List>

      <div >
      <FilmTextField
          appendSelectedFilms ={appendSelectedFilms}/>
      </div>
    </div>
  </div>
  );
}

export default App;
