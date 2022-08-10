import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
