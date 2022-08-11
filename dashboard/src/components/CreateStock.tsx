import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
export default function CreateStock() {
  const [open, setOpen] = React.useState(false);
  const [fields, setFields] = React.useState<{
    category: string;
    item: string;
    items: string[];
    cost: number;
  }>({
    category: "",
    item: "",
    items: [],
    cost: 0,
  });

  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setFields((fields) => ({ ...fields, [e.target.name]: e.target.value }));
  };

  const handleAddItem = () => {
    setFields((fields) => ({
      ...fields,
      items: [...fields.items, fields.item],
      item: "",
    }));
  };
  const handleDeleteItem = (item) => () => {
    const filterItems = fields.items.filter((i) => i !== item);
    setFields((fields) => ({ ...fields, items: filterItems }));
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
                value={fields.category}
                onChange={handleChange}
                label="Category"
                fullWidth
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="cost">Cost</InputLabel>
              <OutlinedInput
                id="cost"
                name="cost"
                value={fields.cost}
                onChange={handleChange}
                label="Cost"
                type="number"
                fullWidth
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="item">Item</InputLabel>
              <OutlinedInput
                id="item"
                name="item"
                value={fields.item}
                onChange={handleChange}
                label="Item"
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <Tooltip title="Click to add item">
                      <IconButton
                        aria-label="Add item"
                        onClick={handleAddItem}
                        edge="end"
                      >
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Stack direction={"row"} gap={2} flexWrap="wrap">
              {fields.items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  onDelete={handleDeleteItem(item)}
                />
              ))}
            </Stack>
            <Button size="large" variant="contained">
              Create Stock
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
