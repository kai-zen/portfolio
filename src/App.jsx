import { ThemeProvider } from '@emotion/react';
import HomePage from './components/Home';
import { createTheme, Paper } from '@mui/material';
import { amber, cyan } from '@mui/material/colors';
import Layout from './components/layout';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: cyan[400],
      },
      secondary: {
        main: amber[600],
      },
    },
    typography: {
      allVariants: {
        fontFamily: 'Roboto Slab',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Layout />
        <HomePage />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
