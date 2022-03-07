import { ThemeProvider } from '@emotion/react';
import HomePage from './components/Home';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import { createTheme } from '@mui/material';
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
    <Router>
      <ThemeProvider theme={theme}>
        <Layout />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
