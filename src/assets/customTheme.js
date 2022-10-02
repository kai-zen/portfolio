import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: cyan[400],
    },
    // secondary: {
    //   main: pink[300],
    // },
  },
  typography: {
    allVariants: {
      fontFamily: "Fredoka",
    },
  },
});
