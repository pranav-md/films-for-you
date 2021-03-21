import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 750px)": {
      flexDirection: "column",
      width: 250
    }
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 200,
    height: 300,
    "@media (max-width: 750px)": {
      margin: "auto"
    }
  },
  buttonStyle: {
    width: 300,
    height: 50,
    display: "inline-flex",
    flexDirection: "row",
    display: "inline-table",
    "@media (max-width: 750px)": {
      width: 250
    }

  },
  cancelButton: {
    width: 150,
    height: 50,
    color: "#eb5528",
    "@media (max-width: 750px)": {
      width: 125
    }
},
  addButton: {
      width: 150,
      height: 50,
      color: "#0335fc",
      "@media (max-width: 750px)": {
        width: 125
      }
  }
}));

export default function FilmDialogBox(props) {

  const { filmDetails, setFilmDetails, handleDialogBoxClose, appendSelectedFilms} =props
  const classes = useStyles();
  const theme = useTheme();

  var rating =2

  function changeRating(num){
    rating= num
  }

  function selectFilm(){
    // var filmsList= [...selectedFilmList]
    // filmsList.push(filmDetails)
    filmDetails["rating"]=rating
    appendSelectedFilms(filmDetails)
    console.log("TYPE of Filmdetails"+(typeof filmDetails))
    handleDialogBoxClose()
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image= {filmDetails.imageURL}
        title= {filmDetails.name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div
            style={{
              display: "inline-flex",
              VerticalAlign: "text-bottom",
              textAlign: "center",
              AlignItems: "center"
            }}
          >
            <Typography component="h7" variant="h7">
            {filmDetails.name}
            </Typography>
            {/* <Typography
              style={{
                paddingLeft: theme.spacing(1),
                alignSelf: "flex-end",
                color: "#9ca3ad"
              }}
            >
              (1995)
            </Typography> */}
          </div>
          <Typography variant="subtitle2" color="textSecondary">
          {filmDetails.generes.join(" | ")}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Directed by : {filmDetails.director}
          </Typography>
          <Typography
            style={{
              alignSelf: "flex-end",
              color: "#9ca3ad"
            }}
          >
            iMDB rating: {filmDetails.userRating}/10
          </Typography>
        </CardContent>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Enter your rating</Typography>
          <Rating name="customized-empty" defaultValue={2} precision={0.5} 
                onChange={(event, value)=>{changeRating(value)}}
          />
        </Box>
        <div className={classes.buttonStyle}>
        <Button className={classes.cancelButton} onClick={handleDialogBoxClose}>
            Cancel
          </Button>
          <Button className={classes.addButton} onClick={selectFilm}>
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}
