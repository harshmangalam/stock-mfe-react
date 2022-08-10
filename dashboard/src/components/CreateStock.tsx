import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
export default function CreateStock() {
  const [open, setOpen] = React.useState(false);

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleOpenDialog = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        size="large"
        onClick={handleOpenDialog}
      >
        Create stock
      </Button>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
