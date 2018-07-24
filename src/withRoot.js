import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: 'rgba(136, 132, 216, 0.6)'
    },
    secondary: {
      main: 'rgba(130, 202, 157, 1)'
    }
    // primary: {
    //   light: '#bfd4df',
    //   main: '#8fa3ad',
    //   dark: '#61747e',
    //   contrastText: '#000',
    // },
    // secondary: {
    //   light: '#ffb04c',
    //   main: '#f57f17',
    //   dark: '#bc5100',
    //   contrastText: '#000',
    // },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
