import { createTheme } from "@mui/material/styles";

const headingFont = '"Roboto Slab", serif';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffc107" },
    background: { default: "#212529", paper: "#2b3035" },
    text: { primary: "#f8f9fa", secondary: "#c2cbcf" },
    muted: { main: "#5a778f" },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: { fontFamily: headingFont, fontWeight: 700, letterSpacing: "0.05rem" },
    h2: { fontFamily: headingFont, fontWeight: 700, letterSpacing: "0.05rem" },
    h4: { fontFamily: headingFont, fontWeight: 700, letterSpacing: "0.05rem" },
    h5: { fontFamily: headingFont, fontWeight: 700, letterSpacing: "0.05rem" },
    body1: { letterSpacing: "0.05rem", lineHeight: 1.6 },
  },
});

export default theme;
