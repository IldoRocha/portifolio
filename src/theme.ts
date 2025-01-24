import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: "#00BFFF",
    },
    secondary: {
      main: "#ADD8E6",
    }
  },
  typography: {
    fontFamily: "sans-serif"
  }
});

theme = responsiveFontSizes(theme);

export default theme;