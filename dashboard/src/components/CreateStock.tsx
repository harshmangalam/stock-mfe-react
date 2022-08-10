import * as React from "react";
import { Box, Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export default function CreateStock() {
  return (
    <Box position={"fixed"} bottom={32} right={16}>
      <Tooltip title={"Add new stock data"}>
        <Fab color="primary" aria-label="add">
          <AddIcon fontSize="large" />
        </Fab>
      </Tooltip>
    </Box>
  );
}
