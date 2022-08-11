import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
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

      <Dialog maxWidth="sm" fullWidth open={open} onClose={handleCloseDialog}>
        <DialogTitle>Create stock</DialogTitle>
        <DialogContent>
          <Stack component={"form"} my={2} spacing={3}>
            <FormControl>
              <InputLabel htmlFor="category">Category</InputLabel>
              <OutlinedInput
                id="category"
                name="category"
                value={""}
                onChange={() => {}}
                label="Category"
                fullWidth
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="cost">Cost</InputLabel>
              <OutlinedInput
                id="cost"
                name="cost"
                value={""}
                onChange={() => {}}
                label="Cost"
                fullWidth
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="items">Items</InputLabel>
              <OutlinedInput
                id="items"
                name="items"
                value={""}
                onChange={() => {}}
                label="Items"
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <Tooltip title="Click to add item">
                      <IconButton
                        aria-label="Add item"
                        onClick={() => {}}
                        edge="end"
                      >
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
