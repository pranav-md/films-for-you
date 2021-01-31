import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import FilmTextField from './components/FilmTextField'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  centerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar />
      <div className={classes.centerStyle}>
      <FilmTextField />
      </div>
    </div>
  );
}

export default App;
