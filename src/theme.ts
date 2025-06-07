import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A9A9A9", // Gray
      light: "#DCDCDC", // Light Gray
      dark: "#2C2C2C", // Dark Gray
    },
    secondary: {
      main: "#00FFFF", //Cyan
    },
    background: {
      default: "#222222", // Very Dark Gray
    },
    text: {
      primary: "#A9A9A9",
      secondary: "#00FFFF",
    },
  },
});

export default theme;
