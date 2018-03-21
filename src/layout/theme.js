import createMuiTheme from "material-ui/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    //blue
    primary: {
      main: "#3c8dbc",
      contrastText: "#fff"
    },
    //dark grey
    secondary: {
      main: "#424242",
      contrastText: "#fff"
    }
  }
});

export default theme;
