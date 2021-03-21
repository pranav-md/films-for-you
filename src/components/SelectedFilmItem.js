import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import GradeIcon from '@material-ui/icons/Grade';

import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function SelectedFilmItem(props) {

  const classes = useStyles();

  const { film, setSelectedFilmList, removeSelectedFilm} = props

  for(var field in film)
  {
      console.log("FIELD= "+field)
  }

  return (
    <ListItem width="200px">
    <ListItemAvatar>
      <Avatar alt="" src= {film.imageURL} />
    </ListItemAvatar>
    <ListItemText
      primary={film.name} 
    />
                      <ListItemSecondaryAction>
                      <span style={{fontSize: "10px"}}>You rated: {film.rating}</span>
                      <GradeIcon style={{ color: "#e6de05" }} />
                    <IconButton edge="end" aria-label="delete" 
                    onClick={()=> removeSelectedFilm(film)}>
                        <DeleteIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
  </ListItem>
    )
}