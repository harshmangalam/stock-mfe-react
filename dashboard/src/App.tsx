import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

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
      <Box component={"main"}>Dashboard main</Box>
    </Box>
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
