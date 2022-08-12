import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Chip, IconButton, Stack, Tooltip } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CreateStock from "./CreateStock";
import { useStockDispatch, useStockState } from "../context/stock";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function StockTable() {
  const stockState = useStockState();
  const stockDispatch = useStockDispatch();
  return (
    <Box>
      <Stack direction="row" justifyContent={"flex-end"}>
        <CreateStock />
      </Stack>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Items</TableCell>
              <TableCell align="center">Cost(Rupees)</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockState?.stocks.map((stock) => (
              <TableRow
                key={stock.category}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{stock.category}</TableCell>
                <TableCell align="center">
                  <Stack
                    direction={"row"}
                    spacing={1}
                    justifyContent="center"
                    flexWrap={"wrap"}
                  >
                    {stock.items.map((item) => (
                      <Chip label={item} />
                    ))}
                  </Stack>
                </TableCell>

                <TableCell align="center">{stock.cost}</TableCell>
                <TableCell align="center">
                  <Stack direction={"row"} justifyContent="center">
                    <Tooltip title="View stock details">
                      <IconButton>
                        <VisibilityOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton color="primary">
                        <ModeEditOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        color="error"
                        onClick={() =>
                          stockDispatch?.removeStock(stock.id as string)
                        }
                      >
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
