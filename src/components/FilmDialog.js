import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import FilmDialogBox from "./FilmDialogBox"

export default function FilmDialog(props) {
 // const [open, setOpen] = React.useState(false);

  const { openPopup, handleDialogBoxClose, filmDetails, setFilmDetails, appendSelectedFilms} =props

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={openPopup}
        onClose={handleDialogBoxClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <FilmDialogBox
          filmDetails= {filmDetails}
          setFilmDetails ={setFilmDetails}
          handleDialogBoxClose ={handleDialogBoxClose}
          appendSelectedFilms= {appendSelectedFilms}
        />
      </Dialog>
    </div>
  );
}
