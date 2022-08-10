import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import StockTable from "./components/StockTable";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box>
      <Navbar />
      <Box component={"main"} my={4}>
        <Container>
          <StockTable />
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
