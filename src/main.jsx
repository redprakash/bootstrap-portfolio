import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto-slab/400.css";
import "@fontsource/roboto-slab/700.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import theme from "./theme";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
