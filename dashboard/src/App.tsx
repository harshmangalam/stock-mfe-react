import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import StockTable from "./components/StockTable";
import StockProvider from "./context/stock";
const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StockProvider>
      <Navbar />
      <Box component={"main"} my={4}>
        <Container>
          <StockTable />
        </Container>
      </Box>
    </StockProvider>
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
